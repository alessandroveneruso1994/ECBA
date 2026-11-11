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
   *
   * Dentro ogni dominio la selezione rispetta altre due cose.
   *
   * La miscela di stili: le sample question pubblicate da IIBA chiedono un
   * giudizio professionale ("what should you do FIRST?"), non il richiamo di una
   * definizione. `appliedShare` fissa la quota attesa di domande di stile
   * applicativo, lasciando il resto alle domande di richiamo, che il blueprint
   * continua a prevedere parlando di "situation-based AND standard".
   *
   * I cluster: due domande con lo stesso `cluster` mettono alla prova lo stesso
   * punto, magari con uno scenario diverso, e l'una suggerirebbe la risposta
   * dell'altra. Nella stessa sessione ne entra una sola, finché il pool lo
   * consente. I cluster possono attraversare i domini, per cui i domini vengono
   * percorsi in ordine casuale: nessuno è favorito perché viene prima.
   *
   * Se un dominio non ha abbastanza domande nel pool, il deficit viene
   * ridistribuito sui domini che ne hanno in eccesso, così il totale resta 50.
   */
  function buildExam(pool) {
    var groups = byDomain(pool);
    var picked = [];
    var usedClusters = {};
    var deficit = 0;

    shuffle(BP.domains).forEach(function (d) {
      var order = shuffle(groups[d.id] || []);
      var quota = { applied: stochasticRound(d.questions * BP.exam.appliedShare) };
      quota.knowledge = d.questions - quota.applied;

      var chosen = [];
      var taken = {};
      function take(q) {
        chosen.push(q);
        taken[q.id] = true;
        if (q.cluster) usedClusters[q.cluster] = true;
      }
      function clusterFree(q) { return !q.cluster || !usedClusters[q.cluster]; }

      // 1. Rispetta sia i cluster sia la miscela di stili.
      order.forEach(function (q) {
        if (chosen.length >= d.questions || !clusterFree(q)) return;
        var style = q.style === 'applied' ? 'applied' : 'knowledge';
        if (quota[style] <= 0) return;
        quota[style] -= 1;
        take(q);
      });
      // 2. Se non basta, rinuncia alla miscela ma non ai cluster.
      order.forEach(function (q) {
        if (chosen.length >= d.questions || taken[q.id] || !clusterFree(q)) return;
        take(q);
      });
      // 3. In ultima istanza accetta anche due domande dello stesso cluster:
      //    il dominio conserva comunque il numero di domande del blueprint.
      order.forEach(function (q) {
        if (chosen.length >= d.questions || taken[q.id]) return;
        take(q);
      });

      deficit += d.questions - chosen.length;
      picked = picked.concat(chosen);
    });

    if (deficit > 0) {
      var used = {};
      picked.forEach(function (q) { used[q.id] = true; });
      var spare = shuffle(pool.filter(function (q) { return !used[q.id]; }));
      picked = picked.concat(spare.slice(0, deficit));
    }

    return shuffle(picked);
  }

  /**
   * Arrotonda a caso verso l'alto o verso il basso in proporzione alla parte
   * decimale: 3,5 diventa 3 una volta su due e 4 l'altra. Con l'arrotondamento
   * classico i sei domini da 5 domande prenderebbero sempre 4 domande
   * applicative su 5, e la simulazione ne avrebbe il 76% anziché il 70% atteso.
   */
  function stochasticRound(x) {
    var base = Math.floor(x);
    return base + (Math.random() < x - base ? 1 : 0);
  }

  /**
   * Riordina le domande mettendo in fondo quelle il cui cluster è già
   * rappresentato da una domanda precedente: tagliando la lista ai primi N
   * elementi, i doppioni di cluster entrano solo se non c'è altro.
   */
  function spreadClusters(questions) {
    var seen = {};
    var first = [];
    var repeats = [];
    questions.forEach(function (q) {
      if (q.cluster && seen[q.cluster]) return repeats.push(q);
      if (q.cluster) seen[q.cluster] = true;
      first.push(q);
    });
    return first.concat(repeats);
  }

  /** Set di allenamento: domini scelti dall'utente, ordine casuale. */
  function buildPractice(pool, domainIds, count) {
    var filtered = pool.filter(function (q) { return domainIds.indexOf(q.domain) !== -1; });
    var shuffled = shuffle(filtered);
    if (!(count > 0) || count >= shuffled.length) return shuffled;
    // Una sessione parziale evita, finché può, due domande sullo stesso punto.
    return shuffle(spreadClusters(shuffled).slice(0, count));
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
    if (!(count > 0) || count >= shuffled.length) return shuffled;
    return shuffle(spreadClusters(shuffled).slice(0, count));
  }

  /**
   * Set di ripasso: le domande sbagliate o segnalate in passato.
   * `missedIds` associa a ogni id il numero di errori; una domanda segnalata
   * ma mai sbagliata vi compare con zero, e va riproposta comunque: conta la
   * presenza nel registro, non il valore.
   */
  function buildReview(pool, missedIds) {
    var wanted = pool.filter(function (q) {
      return Object.prototype.hasOwnProperty.call(missedIds, q.id);
    });
    // Le più sbagliate per prime.
    wanted.sort(function (a, b) { return missedIds[b.id] - missedIds[a.id]; });
    return wanted;
  }

  /**
   * Riallinea una sessione salvata al pool corrente.
   *
   * Tra il salvataggio e la ripresa l'app può essersi aggiornata, e il pool può
   * aver perso domande: la sessione farebbe allora riferimento a id che non
   * esistono più. Qui le domande sparite vengono tolte insieme alle loro
   * risposte, e l'ordine delle opzioni viene rigenerato dove non corrisponde
   * più alla domanda. Restituisce quante domande sono state tolte, oppure -1 se
   * non ne resta nessuna e la sessione va scartata.
   */
  function reconcile(session, pool) {
    var known = {};
    pool.forEach(function (q) { known[q.id] = q; });

    var before = session.questionIds.length;
    var current = session.questionIds[session.index];
    var ids = session.questionIds.filter(function (id) { return known[id]; });
    if (!ids.length) return -1;

    ['answers', 'flagged', 'revealed', 'optionOrder'].forEach(function (field) {
      var source = session[field] || {};
      var kept = {};
      ids.forEach(function (id) {
        if (source[id] !== undefined) kept[id] = source[id];
      });
      session[field] = kept;
    });

    ids.forEach(function (id) {
      var valid = known[id].options.map(function (o) { return o.id; });
      var order = session.optionOrder[id];
      var orderOk = order && order.length === valid.length &&
        order.every(function (optionId) { return valid.indexOf(optionId) !== -1; });
      if (!orderOk) session.optionOrder[id] = shuffle(valid);
      if (session.answers[id] && valid.indexOf(session.answers[id]) === -1) {
        delete session.answers[id];
      }
    });

    session.questionIds = ids;
    var at = ids.indexOf(current);
    session.index = at !== -1 ? at : Math.max(0, Math.min(session.index || 0, ids.length - 1));
    return before - ids.length;
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
    reconcile: reconcile,
    createSession: createSession,
    displayOptions: displayOptions,
    letterFor: letterFor,
    remainingMs: remainingMs,
    grade: grade
  };
})();
