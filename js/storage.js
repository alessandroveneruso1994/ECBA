/**
 * Persistenza locale: sessione in corso, storico, statistiche e registro del ripasso.
 * Tutto vive nel localStorage del browser: nessun dato lascia il dispositivo.
 */
window.Storage = (function () {
  var KEY_SESSION = 'ecba.session';
  var KEY_HISTORY = 'ecba.history';
  var KEY_STATS = 'ecba.stats';
  var KEY_TOPIC_STATS = 'ecba.topicStats';
  var KEY_MISSED = 'ecba.missed';
  var KEY_THEME = 'ecba.theme';

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* quota piena o storage disabilitato: l'app resta usabile in memoria */
    }
  }

  function remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignora */ }
  }

  return {
    loadSession: function () { return read(KEY_SESSION, null); },
    saveSession: function (session) { write(KEY_SESSION, session); },
    clearSession: function () { remove(KEY_SESSION); },

    history: function () { return read(KEY_HISTORY, []); },

    /** Registra un tentativo concluso e aggiorna le statistiche cumulative. */
    recordAttempt: function (result) {
      var hist = read(KEY_HISTORY, []);
      hist.unshift({
        date: Date.now(),
        mode: result.mode,
        correct: result.correct,
        total: result.total,
        durationMs: result.durationMs
      });
      write(KEY_HISTORY, hist.slice(0, 50));

      var stats = read(KEY_STATS, {});
      var topics = read(KEY_TOPIC_STATS, {});
      result.answers.forEach(function (a) {
        // Le domande dei domini alimentano le statistiche per dominio,
        // quelle di tecniche e competenze quelle per riferimento BABOK.
        if (a.domain !== undefined) {
          var d = String(a.domain);
          if (!stats[d]) stats[d] = { seen: 0, correct: 0 };
          stats[d].seen += 1;
          if (a.isCorrect) stats[d].correct += 1;
        }
        if (a.ref !== undefined) {
          if (!topics[a.ref]) topics[a.ref] = { seen: 0, correct: 0 };
          topics[a.ref].seen += 1;
          if (a.isCorrect) topics[a.ref].correct += 1;
        }
      });
      write(KEY_STATS, stats);
      write(KEY_TOPIC_STATS, topics);
    },

    /** Statistiche cumulative per dominio: { "1": {seen, correct}, ... } */
    stats: function () { return read(KEY_STATS, {}); },

    /** Statistiche per tecnica e competenza: { "10.25": {seen, correct}, ... } */
    topicStats: function () { return read(KEY_TOPIC_STATS, {}); },

    /**
     * Registro del ripasso: { idDomanda: numeroDiErrori }.
     * Una domanda segnalata ma mai sbagliata vi compare con zero.
     */
    weakQuestionIds: function () { return read(KEY_MISSED, {}); },

    /**
     * Aggiorna il registro del ripasso con l'esito di una sessione: una risposta
     * sbagliata incrementa il conteggio, una segnalata resta in elenco anche se
     * corretta, una corretta e non segnalata esce dall'elenco.
     */
    updateMissed: function (answers) {
      var missed = read(KEY_MISSED, {});
      answers.forEach(function (a) {
        if (a.isCorrect && !a.flagged) {
          delete missed[a.id];
        } else {
          missed[a.id] = (missed[a.id] || 0) + (a.isCorrect ? 0 : 1);
        }
      });
      write(KEY_MISSED, missed);
    },

    /**
     * Toglie dal registro del ripasso le domande che non esistono più nel pool,
     * così i conteggi mostrati corrispondono a ciò che il ripasso propone.
     */
    pruneMissed: function (isKnown) {
      var missed = read(KEY_MISSED, {});
      var changed = false;
      Object.keys(missed).forEach(function (id) {
        if (!isKnown(id)) { delete missed[id]; changed = true; }
      });
      if (changed) write(KEY_MISSED, missed);
    },

    resetStats: function () {
      remove(KEY_HISTORY);
      remove(KEY_STATS);
      remove(KEY_TOPIC_STATS);
      remove(KEY_MISSED);
    },

    theme: function () { return read(KEY_THEME, null); },
    setTheme: function (t) { write(KEY_THEME, t); }
  };
})();
