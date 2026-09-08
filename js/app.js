/**
 * UI dell'ECBA Trainer: routing tra le viste, rendering e gestione eventi.
 */
(function () {
  var BP = window.ECBA_BLUEPRINT;
  var POOL = window.ECBA_QUESTIONS || [];

  /**
   * Le due sezioni trasversali. Tecniche e competenze non sono domini: il
   * blueprint le valuta dentro i nove domini, quindi le loro domande stanno
   * fuori dal pool della simulazione, che altrimenti perderebbe la
   * distribuzione ufficiale delle 50 domande.
   */
  var TOPICS = {
    techniques: {
      mode: 'technique',
      pool: window.ECBA_TECHNIQUE_QUESTIONS || [],
      title: 'Le 20 tecniche',
      intro: 'Le tecniche del capitolo 10 del BABOK Guide valutate all\'esame. Il blueprint chiede di conoscerne purpose, description e usage considerations.',
      listTitle: 'Allenati su una singola tecnica',
      listHint: 'Ogni tecnica ha cinque domande. La percentuale è il tuo storico.',
      // Voci della lista: una per tecnica.
      entries: function () {
        return BP.techniques.map(function (t) {
          return { ref: t.ref, label: t.ref + ' ' + t.name };
        });
      }
    },
    competencies: {
      mode: 'competency',
      pool: window.ECBA_COMPETENCY_QUESTIONS || [],
      title: 'Le 29 competenze',
      intro: 'Le underlying competencies del capitolo 9 del BABOK Guide, nei sei gruppi. Il blueprint chiede di conoscerne purpose, definition ed effectiveness measures.',
      listTitle: 'Allenati per gruppo o per competenza',
      listHint: 'Tocca un gruppo per esercitarti su tutte le sue competenze, o una singola voce per il drill mirato.',
      // Voci della lista: il gruppo, poi le competenze che contiene.
      entries: function () {
        var out = [];
        BP.competencies.forEach(function (g) {
          out.push({ ref: g.ref, label: g.ref + ' ' + g.group, isGroup: true });
          g.items.forEach(function (c) {
            out.push({ ref: c.ref, label: c.ref + ' ' + c.name });
          });
        });
        return out;
      }
    }
  };

  var view = document.getElementById('view');
  var topbarTitle = document.getElementById('topbar-title');
  var btnBack = document.getElementById('btn-back');
  var btnTheme = document.getElementById('btn-theme');
  var timerEl = document.getElementById('timer');

  var session = null;      // sessione attiva
  var lastResult = null;   // risultato dell'ultima consegna
  var reviewMode = false;  // rilettura delle risposte dopo la consegna
  var timerHandle = null;

  // ---------------------------------------------------------------- utility

  function domain(id) {
    return BP.domains.filter(function (d) { return d.id === id; })[0];
  }

  /** Tutte le domande disponibili, di qualunque sezione. */
  function allQuestions() {
    return POOL
      .concat(TOPICS.techniques.pool)
      .concat(TOPICS.competencies.pool);
  }

  function questionById(id) {
    var all = allQuestions();
    for (var i = 0; i < all.length; i++) {
      if (all[i].id === id) return all[i];
    }
    return null;
  }

  /** Il pool a cui appartiene la sessione corrente, per correzione e ripasso. */
  function sessionPool() {
    if (!session) return POOL;
    if (session.mode === 'technique') return TOPICS.techniques.pool;
    if (session.mode === 'competency') return TOPICS.competencies.pool;
    // Il ripasso può mescolare domande di sezioni diverse.
    return session.mode === 'review' ? allQuestions() : POOL;
  }

  function tpl(name) {
    return document.getElementById('tpl-' + name).content.cloneNode(true);
  }

  function render(node, title, showBack) {
    view.innerHTML = '';
    view.appendChild(node);
    topbarTitle.textContent = title;
    btnBack.hidden = !showBack;
    window.scrollTo(0, 0);
  }

  function formatClock(ms) {
    var total = Math.floor(ms / 1000);
    var m = Math.floor(total / 60);
    var s = total % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function pct(n) { return Math.round(n * 100) + '%'; }

  function barRow(label, value, ratio, tone) {
    var wrap = document.createElement('div');
    wrap.className = 'bar-row';
    wrap.innerHTML =
      '<span class="label"></span><span class="value"></span>' +
      '<span class="bar"><i></i></span>';
    wrap.querySelector('.label').textContent = label;
    wrap.querySelector('.value').textContent = value;
    var fill = wrap.querySelector('.bar > i');
    fill.style.width = Math.round(Math.max(0, Math.min(1, ratio)) * 100) + '%';
    if (tone) fill.className = tone;
    return wrap;
  }

  /** Nome leggibile di una tecnica, di una competenza o di un loro gruppo. */
  function refLabel(ref) {
    var tech = BP.techniques.filter(function (t) { return t.ref === ref; })[0];
    if (tech) return tech.ref + ' ' + tech.name;

    for (var i = 0; i < BP.competencies.length; i++) {
      var g = BP.competencies[i];
      if (g.ref === ref) return g.ref + ' ' + g.group;
      var item = g.items.filter(function (c) { return c.ref === ref; })[0];
      if (item) return item.ref + ' ' + item.name;
    }
    return ref;
  }

  function modeLabel(mode) {
    return mode === 'exam' ? 'Simulazione d\'esame' :
           mode === 'practice' ? 'Esercizio per dominio' :
           mode === 'technique' ? 'Tecniche' :
           mode === 'competency' ? 'Competenze' : 'Ripasso errori';
  }

  function poolCountByDomain(id) {
    return POOL.filter(function (q) { return q.domain === id; }).length;
  }

  // ------------------------------------------------------------------ tema

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')
      .setAttribute('content', theme === 'dark' ? '#0f1115' : '#f6f7f9');
  }

  var savedTheme = Storage.theme();
  applyTheme(savedTheme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  btnTheme.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    Storage.setTheme(next);
  });

  // ------------------------------------------------------------------ home

  function showHome() {
    stopTimer();
    session = null;
    reviewMode = false;

    var node = tpl('home');

    var saved = Storage.loadSession();
    if (saved && !saved.finished) {
      var card = node.getElementById('resume-card');
      card.hidden = false;
      var answered = Object.keys(saved.answers).length;
      var label = modeLabel(saved.mode);
      var extra = '';
      if (saved.deadline) {
        var left = Math.max(0, saved.deadline - Date.now());
        extra = left > 0 ? ' · ' + formatClock(left) + ' rimanenti' : ' · tempo scaduto';
      }
      node.getElementById('resume-detail').textContent =
        label + ' · ' + answered + '/' + saved.questionIds.length + ' risposte' + extra;

      node.getElementById('btn-resume').addEventListener('click', function () {
        session = saved;
        if (session.deadline && Date.now() >= session.deadline) return submit();
        showQuiz();
      });
      node.getElementById('btn-discard').addEventListener('click', function () {
        Storage.clearSession();
        showHome();
      });
    }

    node.querySelectorAll('.mode-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.getAttribute('data-mode');
        if (mode === 'exam') startExam();
        else if (mode === 'practice') showPracticeSetup();
        else if (mode === 'techniques' || mode === 'competencies') showTopic(mode);
        else if (mode === 'review') startReview();
        else showBlueprint();
      });
    });

    var coverage = node.getElementById('coverage-list');
    BP.domains.forEach(function (d) {
      var have = poolCountByDomain(d.id);
      coverage.appendChild(barRow(
        d.id + '. ' + d.name,
        have + ' domande · ' + pct(d.weight) + ' dell\'esame',
        Math.min(1, have / Math.max(d.questions * 2, 1)),
        have >= d.questions ? 'ok' : have > 0 ? 'warn' : 'bad'
      ));
    });
    var note = document.createElement('p');
    note.className = 'muted small';
    note.style.marginTop = '.8rem';
    note.textContent = 'Un dominio è pronto quando ha almeno il doppio delle domande che compaiono all\'esame, ' +
      'così ogni simulazione pesca un set diverso. Totale nel pool: ' + POOL.length + ' domande.';
    coverage.parentNode.appendChild(note);

    render(node, 'ECBA Trainer', false);
  }

  // ----------------------------------------------------------- avvio sessioni

  function startExam() {
    var questions = Engine.buildExam(POOL);
    if (!questions.length) return alert('Il pool domande è vuoto.');
    session = Engine.createSession('exam', questions);
    Storage.saveSession(session);
    showQuiz();
  }

  /** Avvia una sessione di esercizio sui domini indicati. */
  function startPractice(domainIds) {
    var count = parseInt(view.querySelector('#practice-count').value, 10);
    var questions = Engine.buildPractice(POOL, domainIds, count);
    if (!questions.length) return alert('Nessuna domanda disponibile per i domini scelti.');
    session = Engine.createSession('practice', questions);
    Storage.saveSession(session);
    showQuiz();
  }

  function showPracticeSetup() {
    var node = tpl('practice-setup');
    var cards = node.getElementById('domain-cards');
    var stats = Storage.stats();

    BP.domains.forEach(function (d) {
      var available = poolCountByDomain(d.id);
      var s = stats[d.id];
      var ratio = s && s.seen ? s.correct / s.seen : null;

      var card = document.createElement('button');
      card.className = 'domain-card';
      card.disabled = !available;
      card.innerHTML =
        '<span class="dc-num"></span>' +
        '<span class="dc-body">' +
          '<strong class="dc-name"></strong>' +
          '<span class="muted small dc-meta"></span>' +
          '<span class="bar"><i></i></span>' +
        '</span>' +
        '<span class="dc-score"></span>';

      card.querySelector('.dc-num').textContent = d.id;
      card.querySelector('.dc-name').textContent = d.name;
      card.querySelector('.dc-meta').textContent =
        pct(d.weight) + ' dell\'esame · ' + available + ' domande disponibili';

      var fill = card.querySelector('.bar > i');
      if (ratio === null) {
        fill.style.width = '0';
        card.querySelector('.dc-score').textContent = '—';
        card.querySelector('.dc-score').title = 'Mai esercitato';
      } else {
        fill.style.width = Math.round(ratio * 100) + '%';
        fill.className = ratio >= 0.8 ? 'ok' : ratio >= 0.6 ? 'warn' : 'bad';
        card.querySelector('.dc-score').textContent = pct(ratio);
        card.querySelector('.dc-score').title = s.correct + ' corrette su ' + s.seen + ' viste';
      }

      card.addEventListener('click', function () { startPractice([d.id]); });
      cards.appendChild(card);
    });

    node.getElementById('btn-practice-all').addEventListener('click', function () {
      startPractice(BP.domains.map(function (d) { return d.id; }));
    });

    render(node, 'Esercizio per dominio', true);
  }

  /** Sezione trasversale: test misto da 10 domande, oppure drill su una voce. */
  function showTopic(key) {
    var topic = TOPICS[key];
    var node = tpl('topic');
    var stats = Storage.topicStats();

    node.getElementById('topic-title').textContent = topic.title;
    node.getElementById('topic-intro').textContent = topic.intro;
    node.getElementById('topic-list-title').textContent = topic.listTitle;
    node.getElementById('topic-list-hint').textContent = topic.listHint;

    var testBtn = node.getElementById('btn-topic-test');
    testBtn.textContent = 'Test da ' + BP.topicTestSize + ' domande su tutto il capitolo';
    testBtn.addEventListener('click', function () { startTopic(key, null); });

    var list = node.getElementById('topic-list');
    topic.entries().forEach(function (e) {
      var available = topic.pool.filter(function (q) {
        return q.ref === e.ref || q.ref.indexOf(e.ref + '.') === 0;
      }).length;

      var row = document.createElement('button');
      row.className = 'topic-row' + (e.isGroup ? ' group' : '');
      row.disabled = !available;
      row.innerHTML = '<span class="tr-label"></span><span class="tr-score"></span>';
      row.querySelector('.tr-label').textContent = e.label;

      // Statistica aggregata: per un gruppo somma le competenze che contiene.
      var seen = 0, correct = 0;
      Object.keys(stats).forEach(function (ref) {
        if (ref === e.ref || ref.indexOf(e.ref + '.') === 0) {
          seen += stats[ref].seen;
          correct += stats[ref].correct;
        }
      });
      var score = row.querySelector('.tr-score');
      if (seen) {
        score.textContent = pct(correct / seen);
        score.className = 'tr-score ' + (correct / seen >= 0.8 ? 'ok' : correct / seen >= 0.6 ? 'warn' : 'bad');
        score.title = correct + ' corrette su ' + seen + ' viste';
      } else {
        score.textContent = available ? available + ' dom.' : '—';
      }

      row.addEventListener('click', function () { startTopic(key, e.ref); });
      list.appendChild(row);
    });

    render(node, topic.title, true);
  }

  function startTopic(key, ref) {
    var topic = TOPICS[key];
    var questions = Engine.buildTopicTest(topic.pool, ref, BP.topicTestSize);
    if (!questions.length) return alert('Nessuna domanda disponibile.');
    session = Engine.createSession(topic.mode, questions);
    Storage.saveSession(session);
    showQuiz();
  }

  function startReview() {
    var missed = Storage.weakQuestionIds();
    var questions = Engine.buildReview(allQuestions(), missed);
    if (!questions.length) {
      var empty = document.createElement('div');
      empty.className = 'empty-state';
      empty.innerHTML = '<h2>Nessun errore da rivedere</h2>' +
        '<p class="muted">Completa una simulazione o una sessione di allenamento: ' +
        'le domande sbagliate o segnalate finiranno qui.</p>';
      var back = document.createElement('button');
      back.className = 'btn primary';
      back.textContent = 'Torna alla home';
      back.addEventListener('click', showHome);
      empty.appendChild(back);
      return render(empty, 'Ripasso errori', true);
    }
    session = Engine.createSession('review', questions);
    Storage.saveSession(session);
    showQuiz();
  }

  // ------------------------------------------------------------------ timer

  function startTimer() {
    stopTimer();
    if (!session || !session.deadline) { timerEl.hidden = true; return; }
    timerEl.hidden = false;
    tick();
    timerHandle = setInterval(tick, 1000);
  }

  function tick() {
    var left = Engine.remainingMs(session);
    timerEl.textContent = formatClock(left);
    timerEl.classList.toggle('warning', left <= 10 * 60000 && left > 5 * 60000);
    timerEl.classList.toggle('critical', left <= 5 * 60000);
    if (left <= 0) {
      stopTimer();
      alert('Tempo scaduto. L\'esame viene consegnato automaticamente.');
      submit();
    }
  }

  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
    timerEl.hidden = true;
    timerEl.className = 'timer';
  }

  // ------------------------------------------------------------------- quiz

  function showQuiz() {
    var node = tpl('quiz');
    render(node, reviewMode ? 'Revisione risposte' : modeLabel(session.mode), true);
    if (!reviewMode) startTimer();
    else stopTimer();

    view.querySelector('#btn-prev').addEventListener('click', function () { move(-1); });
    view.querySelector('#btn-next').addEventListener('click', function () { move(1); });
    view.querySelector('#btn-grid').addEventListener('click', showGrid);
    view.querySelector('#btn-flag').addEventListener('click', toggleFlag);

    paintQuestion();
  }

  function currentQuestion() {
    return questionById(session.questionIds[session.index]);
  }

  /** In allenamento e in revisione la risposta corretta è visibile. */
  function isRevealed(q) {
    return reviewMode || (session.mode !== 'exam' && !!session.revealed[q.id]);
  }

  function paintQuestion() {
    var q = currentQuestion();
    var total = session.questionIds.length;

    view.querySelector('#progress-fill').style.width =
      ((session.index + 1) / total * 100) + '%';
    view.querySelector('#q-counter').textContent =
      'Domanda ' + (session.index + 1) + ' di ' + total;

    var tag = view.querySelector('#q-tag');
    if (q.domain !== undefined) {
      var d = domain(q.domain);
      tag.textContent = d.id + '. ' + d.name + ' · ' + q.activity;
      tag.title = d.activities[q.activity] || '';
    } else {
      // Domande di tecniche o competenze: l'etichetta è il riferimento BABOK.
      tag.textContent = refLabel(q.ref);
      tag.title = q.source;
    }

    view.querySelector('#q-stem').textContent = q.stem;

    var flagBtn = view.querySelector('#btn-flag');
    flagBtn.setAttribute('aria-pressed', session.flagged[q.id] ? 'true' : 'false');
    flagBtn.hidden = reviewMode;

    var revealed = isRevealed(q);
    var given = session.answers[q.id] || null;
    var box = view.querySelector('#q-options');
    box.innerHTML = '';

    Engine.displayOptions(session, q).forEach(function (opt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', given === opt.optionId ? 'true' : 'false');
      btn.innerHTML = '<span class="key"></span><span class="txt"></span>';
      btn.querySelector('.key').textContent = opt.letter;
      btn.querySelector('.txt').textContent = opt.text;

      if (revealed) {
        btn.disabled = true;
        if (opt.optionId === q.answer) btn.classList.add('correct');
        else if (opt.optionId === given) btn.classList.add('incorrect');
      } else if (given === opt.optionId) {
        btn.classList.add('selected');
      }

      btn.addEventListener('click', function () { choose(opt.optionId); });
      box.appendChild(btn);
    });

    paintExplanation(q, revealed, given);

    view.querySelector('#btn-prev').disabled = session.index === 0;
    view.querySelector('#btn-next').textContent =
      session.index === total - 1 ? (reviewMode ? 'Fine revisione' : 'Vai alla consegna') : 'Successiva';
  }

  /**
   * Le spiegazioni citano le opzioni con segnaposto tipo {A}, riferiti alla
   * numerazione originale del pool. Poiché ogni sessione mescola le opzioni,
   * qui li rimappiamo sulla lettera effettivamente mostrata a schermo.
   */
  function resolveLetters(text, q) {
    return text.replace(/\{([A-H])\}/g, function (_, original) {
      return Engine.letterFor(session, q, original);
    });
  }

  function paintExplanation(q, revealed, given) {
    var box = view.querySelector('#q-explain');
    if (!revealed) { box.hidden = true; box.innerHTML = ''; return; }

    var right = given === q.answer;
    var correctLetter = Engine.letterFor(session, q, q.answer);
    box.hidden = false;
    box.className = 'explain ' + (right ? 'correct' : 'incorrect');
    box.innerHTML = '<h4></h4><p class="expl-text"></p><span class="src"></span>';
    box.querySelector('h4').textContent = right
      ? 'Corretta — risposta ' + correctLetter
      : (given ? 'Sbagliata — la risposta corretta è ' + correctLetter
               : 'Senza risposta — la corretta è ' + correctLetter);
    box.querySelector('.expl-text').textContent = resolveLetters(q.explanation, q);
    box.querySelector('.src').textContent = 'Riferimento: ' + q.source;
  }

  function choose(optionId) {
    var q = currentQuestion();
    if (isRevealed(q)) return;

    session.answers[q.id] = optionId;
    // Fuori dalla simulazione la spiegazione compare subito.
    if (session.mode !== 'exam') session.revealed[q.id] = true;
    Storage.saveSession(session);
    paintQuestion();
  }

  function toggleFlag() {
    var q = currentQuestion();
    if (session.flagged[q.id]) delete session.flagged[q.id];
    else session.flagged[q.id] = true;
    Storage.saveSession(session);
    paintQuestion();
  }

  function move(delta) {
    var next = session.index + delta;
    if (next < 0) return;
    if (next >= session.questionIds.length) {
      return reviewMode ? showResults(lastResult) : showGrid();
    }
    session.index = next;
    Storage.saveSession(session);
    paintQuestion();
  }

  // -------------------------------------------------------------- panoramica

  function showGrid() {
    var node = tpl('grid');
    var total = session.questionIds.length;
    var answered = Object.keys(session.answers).length;
    var flagged = Object.keys(session.flagged).length;

    node.getElementById('grid-summary').textContent =
      answered + ' risposte su ' + total +
      (flagged ? ' · ' + flagged + ' segnalate per revisione' : '') +
      (answered < total ? ' · ' + (total - answered) + ' ancora senza risposta' : '');

    var grid = node.getElementById('qgrid');
    session.questionIds.forEach(function (id, i) {
      var cell = document.createElement('button');
      cell.className = 'qcell';
      cell.textContent = i + 1;
      if (session.answers[id]) cell.classList.add('answered');
      if (session.flagged[id]) cell.classList.add('flagged');
      if (reviewMode) {
        var q = questionById(id);
        cell.classList.remove('answered');
        cell.classList.add(session.answers[id] === q.answer ? 'correct' : 'incorrect');
      }
      cell.addEventListener('click', function () {
        session.index = i;
        Storage.saveSession(session);
        showQuiz();
      });
      grid.appendChild(cell);
    });

    node.getElementById('btn-grid-close').addEventListener('click', showQuiz);

    var submitBtn = node.getElementById('btn-submit');
    if (reviewMode) {
      submitBtn.textContent = 'Torna ai risultati';
      submitBtn.addEventListener('click', function () { showResults(lastResult); });
    } else {
      submitBtn.addEventListener('click', function () {
        var left = total - answered;
        var msg = left
          ? 'Hai ' + left + ' domande senza risposta. Consegnare comunque?'
          : 'Consegnare le risposte?';
        if (confirm(msg)) submit();
      });
    }

    render(node, 'Panoramica', true);
    stopTimer();
    if (!reviewMode) startTimer();
  }

  // -------------------------------------------------------------- risultati

  function submit() {
    stopTimer();
    session.finished = true;
    lastResult = Engine.grade(session, sessionPool());
    Storage.recordAttempt(lastResult);
    Storage.updateMissed(lastResult.answers);
    Storage.clearSession();
    showResults(lastResult);
  }

  function showResults(result) {
    reviewMode = false;
    var node = tpl('results');

    var percent = Math.round(result.percent * 100);
    var ring = node.getElementById('score-ring');
    ring.style.setProperty('--pct', percent);
    ring.style.setProperty('--ring-color',
      result.passed ? 'var(--ok)' : percent >= 60 ? 'var(--warn)' : 'var(--bad)');
    node.getElementById('score-value').textContent = result.correct + '/' + result.total;

    if (result.mode === 'exam') {
      node.getElementById('score-verdict').textContent = result.passed
        ? 'Sopra la soglia di riferimento'
        : 'Sotto la soglia di riferimento';
      node.getElementById('score-detail').textContent =
        percent + '% corrette · tempo impiegato ' + formatClock(result.durationMs) +
        ' · soglia di autovalutazione ' + pct(BP.exam.referencePassMark) +
        '. IIBA non pubblica il punteggio minimo reale: il risultato ufficiale è scalato.';
    } else {
      // Fuori dalla simulazione la soglia dell'esame non è un metro sensato.
      node.getElementById('score-verdict').textContent = modeLabel(result.mode) + ' completato';
      node.getElementById('score-detail').textContent =
        percent + '% corrette · tempo impiegato ' + formatClock(result.durationMs) +
        '. Le domande sbagliate finiscono nel ripasso errori.';
    }

    // Le sezioni trasversali non hanno domini né activity statement:
    // al loro posto il report mostra il dettaglio per riferimento BABOK.
    var refKeys = Object.keys(result.refs || {});
    var hasDomains = Object.keys(result.domains).length > 0;
    node.getElementById('domain-card').hidden = !hasDomains;
    node.getElementById('activity-card').hidden = !hasDomains;

    if (refKeys.length) {
      node.getElementById('ref-card').hidden = false;
      node.getElementById('ref-card-title').textContent =
        result.mode === 'technique' ? 'Risultato per tecnica' : 'Risultato per competenza';
      var rb = node.getElementById('ref-breakdown');
      refKeys.sort().forEach(function (ref) {
        var s = result.refs[ref];
        var ratio = s.correct / s.seen;
        rb.appendChild(barRow(
          refLabel(ref),
          s.correct + '/' + s.seen + ' · ' + pct(ratio),
          ratio,
          ratio >= 0.8 ? 'ok' : ratio >= 0.6 ? 'warn' : 'bad'
        ));
      });
    }

    var db = node.getElementById('domain-breakdown');
    BP.domains.forEach(function (d) {
      var s = result.domains[d.id];
      if (!s) return;
      var ratio = s.correct / s.seen;
      db.appendChild(barRow(
        d.id + '. ' + d.name,
        s.correct + '/' + s.seen + ' · ' + pct(ratio),
        ratio,
        ratio >= 0.8 ? 'ok' : ratio >= 0.6 ? 'warn' : 'bad'
      ));
    });

    var ab = node.getElementById('activity-breakdown');
    var weak = Object.keys(result.activities)
      .filter(function (k) { return result.activities[k].wrong > 0; })
      .sort(function (a, b) { return result.activities[b].wrong - result.activities[a].wrong; });

    if (!weak.length) {
      ab.innerHTML = '<p class="muted">Nessun errore: tutte le activity statement coperte correttamente.</p>';
    } else {
      weak.forEach(function (key) {
        var a = result.activities[key];
        var dom = domain(parseInt(key.split('.')[0], 10));
        var row = document.createElement('div');
        row.innerHTML = '<strong></strong> <span class="muted small"></span>';
        row.querySelector('strong').textContent = key + ' — ' + a.wrong + ' error' + (a.wrong === 1 ? 'e' : 'i') + ' su ' + a.seen;
        row.querySelector('span').textContent = dom.activities[key] || '';
        ab.appendChild(row);
      });
    }

    node.getElementById('btn-review-answers').addEventListener('click', function () {
      reviewMode = true;
      session.index = 0;
      showQuiz();
    });
    node.getElementById('btn-home').addEventListener('click', showHome);

    render(node, 'Risultati', true);
  }

  // -------------------------------------------------------------- blueprint

  function showBlueprint() {
    var node = tpl('blueprint');
    var stats = Storage.stats();

    var box = node.getElementById('bp-domains');
    BP.domains.forEach(function (d) {
      var s = stats[d.id];
      var ratio = s && s.seen ? s.correct / s.seen : 0;
      var value = pct(d.weight) + ' · ' + d.questions + ' domande su 50' +
        (s && s.seen ? ' · tuo storico ' + pct(ratio) + ' (' + s.seen + ' viste)' : ' · mai esercitato');
      box.appendChild(barRow(d.id + '. ' + d.name, value,
        s && s.seen ? ratio : 0,
        !s || !s.seen ? '' : ratio >= 0.8 ? 'ok' : ratio >= 0.6 ? 'warn' : 'bad'));
    });
    var src = document.createElement('p');
    src.className = 'muted small';
    src.style.marginTop = '.8rem';
    src.textContent = 'Domini 1-3: The Business Analysis Standard. Domini 4-9: BABOK Guide, ' +
      'applicazione pratica del BACCM.';
    box.parentNode.appendChild(src);

    var tech = node.getElementById('bp-techniques');
    BP.techniques.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t.ref + ' ' + t.name;
      tech.appendChild(li);
    });

    var comp = node.getElementById('bp-competencies');
    BP.competencies.forEach(function (g) {
      var div = document.createElement('div');
      div.className = 'comp-group';
      div.innerHTML = '<strong></strong><p></p>';
      div.querySelector('strong').textContent = g.group;
      div.querySelector('p').textContent = g.items.map(function (c) { return c.name; }).join(' · ');
      comp.appendChild(div);
    });

    var hist = node.getElementById('bp-history');
    var entries = Storage.history();
    if (!entries.length) {
      hist.innerHTML = '<p class="muted">Nessuna sessione completata.</p>';
    } else {
      entries.slice(0, 10).forEach(function (h) {
        var row = document.createElement('div');
        row.className = 'hist-row';
        row.innerHTML = '<span></span><span class="mono"></span>';
        row.children[0].textContent = modeLabel(h.mode) + ' · ' + new Date(h.date).toLocaleDateString('it-IT', {
          day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        row.children[1].textContent = h.correct + '/' + h.total +
          ' (' + Math.round(h.correct / h.total * 100) + '%)';
        hist.appendChild(row);
      });
    }

    // Riepilogo di ciò che l'azzeramento cancellerebbe, così la scelta è informata.
    var topicStats = Storage.topicStats();
    var seenTotal = 0;
    Object.keys(stats).forEach(function (k) { seenTotal += stats[k].seen; });
    Object.keys(topicStats).forEach(function (k) { seenTotal += topicStats[k].seen; });
    var missedCount = Object.keys(Storage.weakQuestionIds()).length;
    var nothingToReset = !entries.length && !seenTotal && !missedCount;

    var summary = node.getElementById('reset-summary');
    if (nothingToReset) {
      summary.innerHTML = '<p class="muted">Non c\'è ancora nulla da azzerare.</p>';
    } else {
      [
        [entries.length, 'sessioni nello storico'],
        [seenTotal, 'risposte registrate nelle statistiche'],
        [missedCount, 'domande nel ripasso errori']
      ].forEach(function (row) {
        var line = document.createElement('div');
        line.className = 'reset-line';
        line.innerHTML = '<strong class="mono"></strong> <span class="muted small"></span>';
        line.querySelector('strong').textContent = row[0];
        line.querySelector('span').textContent = row[1];
        summary.appendChild(line);
      });
    }

    var resetBtn = node.getElementById('btn-reset-stats');
    resetBtn.disabled = nothingToReset;
    resetBtn.addEventListener('click', function () {
      var msg = 'Azzerare tutti i risultati?\n\n' +
        '• ' + entries.length + ' sessioni nello storico\n' +
        '• ' + seenTotal + ' risposte registrate\n' +
        '• ' + missedCount + ' domande nel ripasso errori\n\n' +
        'Le domande e il tema restano invariati. L\'operazione non è reversibile.';
      if (confirm(msg)) {
        Storage.resetStats();
        showBlueprint();
      }
    });

    render(node, 'Blueprint', true);
  }

  // ------------------------------------------------------------ navigazione

  btnBack.addEventListener('click', function () {
    if (session && !session.finished && !reviewMode) {
      if (!confirm('Uscire dalla sessione? I progressi restano salvati e potrai riprenderla.')) return;
    }
    if (reviewMode) { reviewMode = false; return showResults(lastResult); }
    showHome();
  });

  // Scorciatoie da tastiera: 1-6 sceglie l'opzione, frecce per navigare.
  document.addEventListener('keydown', function (e) {
    if (!session || !view.querySelector('.quiz')) return;
    if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
    var q = currentQuestion();
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= q.options.length) {
      choose(q.options[n - 1].id);
    } else if (e.key === 'ArrowRight') {
      move(1);
    } else if (e.key === 'ArrowLeft') {
      move(-1);
    } else if (e.key.toLowerCase() === 'f' && !reviewMode) {
      toggleFlag();
    }
  });

  // --------------------------------------------------------- service worker

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline non disponibile */ });
    });
  }

  showHome();
})();
