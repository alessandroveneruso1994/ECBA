/**
 * Motore d'esame: composizione del set di domande secondo il blueprint,
 * gestione dello stato di una sessione e calcolo del risultato.
 */
window.Engine = (function () {
  var BP = window.ECBA_BLUEPRINT;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function byDomain(pool) {
    var map = {};
    pool.forEach(function (q) {
      (map[q.domain] = map[q.domain] || []).push(q);
    });
    return map;
  }

  /**
   * Compone un esame di 50 domande rispettando i pesi del blueprint.
   * Se un dominio non ha abbastanza domande nel pool, il deficit viene
   * ridistribuito sui domini che ne hanno in eccesso, così il totale resta 50.
   */
  function buildExam(pool) {
    var groups = byDomain(pool);
    var picked = [];
    var deficit = 0;

    BP.domains.forEach(function (d) {
      var available = shuffle(groups[d.id] || []);
      var take = Math.min(d.questions, available.length);
      deficit += d.questions - take;
      picked = picked.concat(available.slice(0, take));
    });

    if (deficit > 0) {
      var used = {};
      picked.forEach(function (q) { used[q.id] = true; });
      var spare = shuffle(pool.filter(function (q) { return !used[q.id]; }));
      picked = picked.concat(spare.slice(0, deficit));
    }

    return shuffle(picked);
  }

  /** Set di allenamento: domini scelti dall'utente, ordine casuale. */
  function buildPractice(pool, domainIds, count) {
    var filtered = pool.filter(function (q) { return domainIds.indexOf(q.domain) !== -1; });
    var shuffled = shuffle(filtered);
    return count > 0 ? shuffled.slice(0, count) : shuffled;
  }

  /**
   * Test di una sezione trasversale (tecniche o competenze).
   * `ref` filtra su una singola voce — '10.25', '9.5.1' — oppure su un gruppo
   * di competenze quando è un prefisso come '9.5'; se è nullo pesca da tutto
   * il pool, che è il test misto da 10 domande.
   */
  function buildTopicTest(pool, ref, count) {
    var filtered = ref
      ? pool.filter(function (q) {
          return q.ref === ref || q.ref.indexOf(ref + '.') === 0;
        })
      : pool;
    var shuffled = shuffle(filtered);
    return count > 0 ? shuffled.slice(0, count) : shuffled;
  }

  /** Set di ripasso: solo le domande sbagliate o segnalate in passato. */
  function buildReview(pool, missedIds) {
    var wanted = pool.filter(function (q) { return missedIds[q.id]; });
    // Le più sbagliate per prime.
    wanted.sort(function (a, b) { return missedIds[b.id] - missedIds[a.id]; });
    return wanted;
  }

  /**
   * Crea una sessione. `mode` è 'exam' | 'practice' | 'review'.
   * Il feedback arriva solo alla consegna in modalità esame, subito altrimenti.
   *
   * Le opzioni vengono rimescolate per ogni sessione: ripetendo lo stesso pool
   * si finisce altrimenti per ricordare la posizione della risposta invece del
   * contenuto. `optionOrder` conserva la permutazione, così riprendere una
   * sessione salvata mostra le opzioni nello stesso ordine di prima.
   */
  function createSession(mode, questions) {
    var order = {};
    questions.forEach(function (q) {
      order[q.id] = shuffle(q.options.map(function (o) { return o.id; }));
    });

    return {
      mode: mode,
      startedAt: Date.now(),
      // Solo la simulazione ha il limite di tempo ufficiale.
      deadline: mode === 'exam' ? Date.now() + BP.exam.durationMinutes * 60000 : null,
      index: 0,
      questionIds: questions.map(function (q) { return q.id; }),
      optionOrder: order, // id domanda -> ordine di presentazione delle opzioni
      answers: {},   // id domanda -> id opzione scelta (nella numerazione originale)
      flagged: {},   // id domanda -> true
      revealed: {},  // id domanda -> true (allenamento: spiegazione già mostrata)
      finished: false
    };
  }

  /**
   * Opzioni da mostrare per una domanda, nell'ordine della sessione.
   * Ogni voce porta `optionId` (identità originale, quella che confrontiamo con
   * la risposta corretta) e `letter` (la lettera A-D mostrata a schermo).
   */
  function displayOptions(session, question) {
    var LETTERS = 'ABCDEFGH';
    var order = (session.optionOrder && session.optionOrder[question.id]) ||
      question.options.map(function (o) { return o.id; });

    return order.map(function (optionId, i) {
      var opt = question.options.filter(function (o) { return o.id === optionId; })[0];
      return { optionId: optionId, letter: LETTERS[i], text: opt.text };
    });
  }

  /** Lettera con cui una data opzione è mostrata in questa sessione. */
  function letterFor(session, question, optionId) {
    var shown = displayOptions(session, question).filter(function (o) {
      return o.optionId === optionId;
    })[0];
    return shown ? shown.letter : optionId;
  }

  function remainingMs(session) {
    if (!session.deadline) return null;
    return Math.max(0, session.deadline - Date.now());
  }

  /** Calcola il risultato: totali, dettaglio per dominio e per activity statement. */
  function grade(session, pool) {
    var index = {};
    pool.forEach(function (q) { index[q.id] = q; });

    var answers = session.questionIds.map(function (id) {
      var q = index[id];
      var given = session.answers[id] || null;
      return {
        id: id,
        // Le domande dei domini portano domain e activity; quelle delle sezioni
        // tecniche e competenze portano invece ref. Solo uno dei due gruppi di
        // campi è valorizzato, e il breakdown si adatta di conseguenza.
        domain: q.domain,
        activity: q.activity,
        ref: q.ref,
        given: given,
        correctAnswer: q.answer,
        isCorrect: given === q.answer,
        flagged: !!session.flagged[id]
      };
    });

    var correct = answers.filter(function (a) { return a.isCorrect; }).length;

    var domains = {};
    var activities = {};
    var refs = {};
    answers.forEach(function (a) {
      if (a.domain !== undefined) {
        var d = domains[a.domain] = domains[a.domain] || { seen: 0, correct: 0 };
        d.seen += 1;
        if (a.isCorrect) d.correct += 1;

        var act = activities[a.activity] = activities[a.activity] || { seen: 0, wrong: 0 };
        act.seen += 1;
        if (!a.isCorrect) act.wrong += 1;
      }
      if (a.ref !== undefined) {
        var r = refs[a.ref] = refs[a.ref] || { seen: 0, correct: 0 };
        r.seen += 1;
        if (a.isCorrect) r.correct += 1;
      }
    });

    return {
      mode: session.mode,
      total: answers.length,
      correct: correct,
      percent: answers.length ? correct / answers.length : 0,
      passed: answers.length ? (correct / answers.length) >= BP.exam.referencePassMark : false,
      durationMs: Date.now() - session.startedAt,
      answers: answers,
      domains: domains,
      activities: activities,
      refs: refs
    };
  }

  return {
    shuffle: shuffle,
    buildExam: buildExam,
    buildPractice: buildPractice,
    buildTopicTest: buildTopicTest,
    buildReview: buildReview,
    createSession: createSession,
    displayOptions: displayOptions,
    letterFor: letterFor,
    remainingMs: remainingMs,
    grade: grade
  };
})();
