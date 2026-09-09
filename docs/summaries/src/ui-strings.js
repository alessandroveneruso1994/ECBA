/**
 * Stringhe fisse del documento nelle due lingue: copertina, intestazioni,
 * etichette dei riquadri e sezione introduttiva.
 */
const EXAM_TABLE_ROWS = [
  ['1', 'Understanding Business Analysis', '20%', '10'],
  ['2', 'Mindset for Effective Business Analysis', '14%', '7'],
  ['3', 'Implementing Business Analysis', '6%', '3'],
  ['4', 'Change', '10%', '5'],
  ['5', 'Need', '10%', '5'],
  ['6', 'Solution', '10%', '5'],
  ['7', 'Stakeholder', '10%', '5'],
  ['8', 'Value', '10%', '5'],
  ['9', 'Context', '10%', '5']
];

/** Aggiunge la colonna "fonte", che cambia lingua. */
function examRows(standard, babok) {
  return EXAM_TABLE_ROWS.map(function (r, i) {
    return r.concat([i < 3 ? standard : babok]);
  });
}

module.exports = {

  it: {
    subtitle: 'Riassunti di studio per l\'esame',
    credential: 'Entry Certificate in Business Analysis · IIBA',
    scope: 'Sui nove domini dell\'ECBA Exam Blueprint V1.1',
    format: '75 minuti · 50 domande a scelta multipla · online remote proctored',
    sources: 'Fonti: The Business Analysis Standard v2.0 · BABOK Guide v3 · ECBA Exam Blueprint V1.1',
    runningHead: 'ECBA · Riassunti di studio',
    docTitle: 'ECBA — Riassunti di studio',
    docDescription: 'Riassunti per i nove domini dell\'esame ECBA di IIBA',
    keyLabel: 'DA SAPERE',
    trapLabel: 'ATTENZIONE',
    domain: 'Dominio',
    appendix: 'Appendice',
    ofTheExam: ' dell\'esame · ',
    intro: {
      title: 'Come è fatto l\'esame',
      blocks: [
        { t: 'p', v: 'Cinquanta domande a scelta multipla in 75 minuti, in inglese, con proctoring da remoto. Le domande sono di due tipi: standard e situation-based, cioè piccoli scenari in cui più risposte sembrano ragionevoli e va scelta quella che risponde alla situazione descritta.' },
        { t: 'p', v: 'I nove domini pesano in modo diverso. La colonna "domande" è il peso applicato a 50: coincide con metà della percentuale solo perché 50 è la metà di 100.' },
        { t: 'table', head: ['#', 'Dominio', 'Peso', 'Domande', 'Fonte'],
          widths: [600, 3800, 1000, 1300, 2300],
          rows: examRows('BA Standard', 'BABOK Guide') },
        { t: 'p', v: 'I primi tre domini sono fondazionali e vengono da The Business Analysis Standard; i sei successivi dal BABOK Guide e riguardano l\'applicazione pratica del BACCM. L\'esame valuta inoltre 20 tecniche del capitolo 10 e le 29 underlying competencies del capitolo 9, ma non come domini separati: le domande arrivano dentro i nove. Per questo trovi le due liste in appendice.' },
        { t: 'key', v: 'IIBA non pubblica il punteggio minimo per superare l\'esame: il risultato è scalato. Il 70% è solo una soglia ragionevole di autovalutazione.' },
        { t: 'h3', v: 'Come usare questi riassunti' },
        { t: 'p', v: 'Ogni sezione segue le activity statement ufficiali del dominio. I riquadri azzurri segnalano ciò che va saputo alla lettera; quelli rossi le distinzioni più facili da confondere. Le tabelle sono pensate per il ripasso veloce nei giorni prima della prova.' },
        { t: 'key', v: 'I riquadri rossi non derivano da domande d\'esame reali: IIBA non pubblica il proprio question bank. Segnalano i punti in cui i documenti ufficiali definiscono due concetti in modo ravvicinato e contrastivo — internal contro external, verify contro validate, goal contro objective — e che quindi si prestano a essere confusi. Sono aree in cui vale la pena verificare la propria comprensione, non previsioni su come l\'esame formulerà le domande.' },
        { t: 'p', v: 'I termini tecnici restano in inglese, perché in inglese li troverai all\'esame. Di questo documento esiste anche una versione interamente in inglese.' }
      ]
    }
  },

  en: {
    subtitle: 'Exam study summaries',
    credential: 'Entry Certificate in Business Analysis · IIBA',
    scope: 'Covering the nine domains of the ECBA Exam Blueprint V1.1',
    format: '75 minutes · 50 multiple-choice questions · online remote proctored',
    sources: 'Sources: The Business Analysis Standard v2.0 · BABOK Guide v3 · ECBA Exam Blueprint V1.1',
    runningHead: 'ECBA · Study summaries',
    docTitle: 'ECBA — Study Summaries',
    docDescription: 'Study summaries for the nine domains of the IIBA ECBA exam',
    keyLabel: 'KEY POINT',
    trapLabel: 'WATCH OUT',
    domain: 'Domain',
    appendix: 'Appendix',
    ofTheExam: ' of the exam · ',
    intro: {
      title: 'How the exam works',
      blocks: [
        { t: 'p', v: 'Fifty multiple-choice questions in 75 minutes, online with remote proctoring. Questions come in two forms: standard, and situation-based — short scenarios in which several answers look reasonable and you must pick the one that answers the situation described.' },
        { t: 'p', v: 'The nine domains carry different weights. The "questions" column is the weight applied to 50: it happens to be half the percentage only because 50 is half of 100.' },
        { t: 'table', head: ['#', 'Domain', 'Weight', 'Questions', 'Source'],
          widths: [600, 3800, 1100, 1300, 2200],
          rows: examRows('BA Standard', 'BABOK Guide') },
        { t: 'p', v: 'The first three domains are foundational and come from The Business Analysis Standard; the next six come from the BABOK Guide and cover the practical application of the BACCM. The exam also assesses 20 techniques from chapter 10 and the 29 underlying competencies from chapter 9 — but not as separate domains: those questions arrive inside the nine. That is why both lists appear as appendices.' },
        { t: 'key', v: 'IIBA does not publish the passing score: the result is scaled. The 70% used here is only a reasonable self-assessment threshold.' },
        { t: 'h3', v: 'How to use these summaries' },
        { t: 'p', v: 'Each section follows the official activity statements of its domain. Blue boxes flag what must be known word for word; red boxes flag the distinctions that are easiest to confuse. The tables are meant for fast revision in the days before the exam.' },
        { t: 'key', v: 'The red boxes are not derived from real exam questions: IIBA does not publish its question bank. They flag the points where the official documents define two concepts closely and contrastively — internal versus external, verify versus validate, goal versus objective — and which therefore lend themselves to confusion. They are areas worth testing your own understanding against, not predictions of how the exam will word its questions.' },
        { t: 'p', v: 'An Italian version of this document is also available.' }
      ]
    }
  }
};
