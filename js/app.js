/**
 * UI dell'ECBA Trainer: routing tra le viste, rendering e gestione eventi.
 */
(function () {
  var BP = window.ECBA_BLUEPRINT;
  var POOL = window.ECBA_QUESTIONS || [];

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

  function questionById(id) {
    for (var i = 0; i < POOL.length; i++) {
      if (POOL[i].id === id) return POOL[i];
    }
    return null;
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
      var label = saved.mode === 'exam' ? 'Simulazione d\'esame' :
                  saved.mode === 'practice' ? 'Allenamento' : 'Ripasso errori';
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

  function showPracticeSetup() {
    var node = tpl('practice-setup');
    var picker = node.getElementById('domain-picker');

    BP.domains.forEach(function (d) {
      var count = poolCountByDomain(d.id);
      var label = document.createElement('label');
      if (!count) label.className = 'disabled';
      label.innerHTML = '<input type="checkbox" value="' + d.id + '"' +
        (count ? ' checked' : ' disabled') + '>' +
        '<span></span><span class="pk-weight"></span>';
      label.querySelector('span').textContent = d.id + '. ' + d.name;
      label.querySelector('.pk-weight').textContent = count + ' dom.';
      picker.appendChild(label);
    });

    node.getElementById('btn-start-practice').addEventListener('click', function () {
      var ids = [].slice.call(view.querySelectorAll('#domain-picker input:checked'))
        .map(function (i) { return parseInt(i.value, 10); });
      if (!ids.length) return alert('Seleziona almeno un dominio.');
      var count = parseInt(view.querySelector('#practice-count').value, 10);
      var questions = Engine.buildPractice(POOL, ids, count);
      if (!questions.length) return alert('Nessuna domanda disponibile per i domini scelti.');
      session = Engine.createSession('practice', questions);
      Storage.saveSession(session);
      showQuiz();
    });

    render(node, 'Allenamento', true);
  }

  function startReview() {
    var missed = Storage.weakQuestionIds();
    var questions = Engine.buildReview(POOL, missed);
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
    render(node, session.mode === 'exam' ? 'Simulazione d\'esame' :
                 session.mode === 'practice' ? 'Allenamento' :
                 reviewMode ? 'Revisione risposte' : 'Ripasso errori', true);
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

    var d = domain(q.domain);
    var tag = view.querySelector('#q-tag');
    tag.textContent = d.id + '. ' + d.name + ' · ' + q.activity;
    tag.title = d.activities[q.activity] || '';

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
    lastResult = Engine.grade(session, POOL);
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

    node.getElementById('score-verdict').textContent = result.passed
      ? 'Sopra la soglia di riferimento'
      : 'Sotto la soglia di riferimento';
    node.getElementById('score-detail').textContent =
      percent + '% corrette · tempo impiegato ' + formatClock(result.durationMs) +
      ' · soglia di autovalutazione ' + pct(BP.exam.referencePassMark) +
      '. IIBA non pubblica il punteggio minimo reale: il risultato ufficiale è scalato.';

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
      var value = pct(d.weight) + ' · ' + d.questions + ' dom. all\'esame' +
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
      div.querySelector('p').textContent = g.items.join(' · ');
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
        var label = h.mode === 'exam' ? 'Simulazione' : h.mode === 'practice' ? 'Allenamento' : 'Ripasso';
        row.innerHTML = '<span></span><span class="mono"></span>';
        row.children[0].textContent = label + ' · ' + new Date(h.date).toLocaleDateString('it-IT', {
          day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        row.children[1].textContent = h.correct + '/' + h.total +
          ' (' + Math.round(h.correct / h.total * 100) + '%)';
        hist.appendChild(row);
      });
    }

    node.getElementById('btn-reset-stats').addEventListener('click', function () {
      if (confirm('Azzerare storico, statistiche e registro degli errori?')) {
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
