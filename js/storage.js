/**
 * Persistenza locale: sessione in corso, storico e statistiche per dominio.
 * Tutto vive nel localStorage del browser: nessun dato lascia il dispositivo.
 */
window.Storage = (function () {
  var KEY_SESSION = 'ecba.session';
  var KEY_HISTORY = 'ecba.history';
  var KEY_STATS = 'ecba.stats';
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
      result.answers.forEach(function (a) {
        var d = String(a.domain);
        if (!stats[d]) stats[d] = { seen: 0, correct: 0 };
        stats[d].seen += 1;
        if (a.isCorrect) stats[d].correct += 1;
      });
      write(KEY_STATS, stats);
    },

    /** Statistiche cumulative per dominio: { "1": {seen, correct}, ... } */
    stats: function () { return read(KEY_STATS, {}); },

    /** Domande sbagliate o segnalate, per la modalità ripasso. */
    weakQuestionIds: function () {
      var ids = {};
      read(KEY_HISTORY, []); // storico non contiene i dettagli: li leggiamo dal pool errori
      var missed = read('ecba.missed', {});
      Object.keys(missed).forEach(function (id) { ids[id] = missed[id]; });
      return ids;
    },

    /** Aggiorna il registro degli errori: incrementa gli sbagli, azzera i successi. */
    updateMissed: function (answers) {
      var missed = read('ecba.missed', {});
      answers.forEach(function (a) {
        if (a.isCorrect && !a.flagged) {
          delete missed[a.id];
        } else if (!a.isCorrect || a.flagged) {
          missed[a.id] = (missed[a.id] || 0) + (a.isCorrect ? 0 : 1);
        }
      });
      write('ecba.missed', missed);
    },

    resetStats: function () {
      remove(KEY_HISTORY);
      remove(KEY_STATS);
      remove('ecba.missed');
    },

    theme: function () { return read(KEY_THEME, null); },
    setTheme: function (t) { write(KEY_THEME, t); }
  };
})();
