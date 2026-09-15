/**
 * Contenuto dei riassunti: domini 1-3 (The Business Analysis Standard).
 * Ogni sezione è una lista di blocchi tipizzati che il generatore traduce in
 * elementi docx: h2, h3, p, ul, table, key (riquadro "da sapere a memoria"),
 * trap (riquadro "trappole d'esame").
 */
module.exports = [

{
  id: 1,
  title: 'Understanding Business Analysis',
  weight: '20%',
  questions: '10 domande su 50',
  source: 'The Business Analysis Standard, cap. 2',
  blocks: [
    { t: 'p', v: 'È il dominio più pesante dell\'esame: una domanda su cinque. Ruota quasi interamente attorno al BACCM, che va saputo alla lettera.' },

    { t: 'h3', v: 'Activity statement 1.1 — Define Business Analysis' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 1' },
    { t: 'p', v: 'La business analysis abilita il cambiamento in un\'impresa definendo i bisogni e raccomandando soluzioni che portano valore agli stakeholder. Non è project management, non è testing, non è scrivere specifiche tecniche: all\'esame le opzioni sbagliate sono quasi sempre attività di discipline adiacenti.' },
    { t: 'ul', v: [
      'Non è confinata a un job title: è uno skill set applicabile a qualunque ruolo. Chiunque analizzi bisogni, faciliti collaborazione, progetti processi o crei value proposition sta facendo business analysis.',
      'Non è confinata al ciclo di vita di un progetto e non si ferma all\'implementazione: continua a monitorare e valutare gli outcome.',
      'È critica a tutti e tre i livelli organizzativi: strategico, tattico e operativo.'
    ]},

    { t: 'h3', v: 'Activity statement 1.2 — Business Analysis Core Concept Model (BACCM)' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 2 · BABOK 7.6' },
    { t: 'p', v: 'Business Analysis Core Concept Model. Le definizioni vanno sapute testualmente: l\'esame le presenta incrociate, attribuendo a un concetto la definizione di un altro.' },
    { t: 'table', head: ['Concetto', 'Definizione ufficiale'], widths: [2200, 6800], rows: [
      ['Change', 'The act of transformation in response to a need — l\'atto di trasformazione in risposta a un bisogno.'],
      ['Need', 'A problem or opportunity to be addressed — un problema o un\'opportunità da affrontare.'],
      ['Solution', 'A specific way of satisfying one or more needs in a context — un modo specifico di soddisfare uno o più bisogni in un contesto.'],
      ['Stakeholder', 'A group or individual with a relationship to the change, the need, or the solution.'],
      ['Value', 'The worth, importance, or usefulness of something to a stakeholder within a context.'],
      ['Context', 'The dynamic circumstances that influence, are influenced by, and provide an understanding of the change.']
    ]},
    { t: 'key', v: 'Requirement NON è un core concept. È una rappresentazione utilizzabile di un need — concetto diverso, e distrattore ricorrente.' },

    { t: 'p', v: 'Le relazioni contano quanto le definizioni:' },
    { t: 'ul', v: [
      'Need → Change: i bisogni causano cambiamenti motivando gli stakeholder ad agire.',
      'Change → Need: anche i cambiamenti causano bisogni, riducendo o aumentando il valore erogato dalle soluzioni esistenti. È la direzione meno intuitiva delle due, e quella che è più facile dimenticare.',
      'Solution: soddisfa un need risolvendo un problema OPPURE abilitando lo sfruttamento di un\'opportunità.',
      'Stakeholder: interni o esterni, spesso definiti da interest, impact e influence; raggruppati per relazione con need, change e solution.'
    ]},
    { t: 'p', v: 'Una soluzione può combinare iniziative tecnologiche, procedure manuali, cambi di processo, aggiornamenti del modello di business e miglioramento delle capability organizzative. Non è mai solo software.' },
    { t: 'p', v: 'Il Context comprende tutto ciò che nell\'ambiente è rilevante: atteggiamenti, comportamenti, credenze, concorrenti, cultura, demografia, geopolitica, obiettivi, storia, industria, infrastruttura, trend di mercato, processi, prodotti, progetti, regolamenti, vendite, stagioni, struttura, tecnologia, perfino il meteo. Se una domanda elenca circostanze ambientali eterogenee, la risposta è Context.' },

    { t: 'h3', v: 'A cosa serve il BACCM' },
    { t: 'p', v: 'È un "thinking model" e un "organizing model". Usi ufficiali:' },
    { t: 'ul', v: [
      'Descrivere una business analysis efficace ed efficiente',
      'Comunicare con un linguaggio comune',
      'Identificare opportunità di sviluppo professionale',
      'Fare business analysis migliore valutando le relazioni fra i sei concetti',
      'Valutare l\'impatto di questi concetti e delle loro relazioni',
      'Stabilire un fondamento e un percorso in avanti',
      'Considerare qualità e completezza del lavoro svolto'
    ]},
    { t: 'p', v: 'Non serve a stimare budget, assegnare responsabilità o scegliere metodologie: non è un processo prescrittivo.' },

    { t: 'h3', v: 'Activity statement 1.3 — Importance of Business Analysis' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 3.5 · BABOK 4.5 · BABOK 6.3 · BABOK 7.5 · BABOK 7.6 · BABOK 8.5' },
    { t: 'p', v: 'Vanno riconosciute dalla descrizione, non recitate a memoria.' },
    { t: 'table', head: ['Funzione', 'Come la riconosci'], widths: [2800, 6200], rows: [
      ['Problem understanding', 'Va oltre i sintomi, scava nelle cause sottostanti.'],
      ['Needs prioritization', '"La bussola": alloca risorse in base all\'importanza relativa.'],
      ['Value-centric solutions', 'Soluzioni coese che producono valore misurabile.'],
      ['Risk management', 'Identifica e valuta i rischi in modo proattivo, integrandoli nelle decisioni.'],
      ['Performance enhancement', 'Non si ferma all\'implementazione: monitora e migliora in continuo.'],
      ['Value delivery', 'Genera cambiamento per erogare valore.'],
      ['Stakeholder collaboration', 'Abbatte i silos, allinea prospettive diverse.'],
      ['Leadership support', 'Aiuta i leader ad articolare scopo, obiettivi e aspettative.'],
      ['Agility', 'Supporta approcci predittivi, adattivi e ibridi.']
    ]},
    { t: 'key', v: 'Sul value delivery lo Standard è esplicito: non sempre è possibile creare valore per tutti gli stakeholder. L\'obiettivo è massimizzarlo per la maggioranza gestendo le preoccupazioni degli altri.' },

    { t: 'h3', v: 'Activity statement 1.4 — Outcomes and Value Creation' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 7.3 · BABOK 7.4 · BABOK 7.6' },
    { t: 'p', v: 'Tre distinzioni, tutte materia d\'esame:' },
    { t: 'table', head: ['Distinzione', 'Significato', 'Esempio'], widths: [2200, 3600, 3200], rows: [
      ['Realized / Preserved', 'Realizzato con ritorni, guadagni, miglioramenti; preservato mitigando perdite, rischi e costi.', 'Nuovo canale che aumenta i ricavi / upgrade di compliance che evita sanzioni'],
      ['Tangible / Intangible', 'Tangibile = direttamente misurabile, spesso monetario. Intangibile = misurabile solo indirettamente, spesso motivazionale.', 'Risparmio di €80.000 / morale dei dipendenti, reputazione aziendale'],
      ['Assoluto / Relativo', 'Il valore può essere valutato in sé o confrontando due opzioni dal punto di vista di un gruppo.', '"L\'opzione B vale più della A per il customer service"']
    ]},
    { t: 'p', v: 'Il valore si scopre lungo tutta l\'iniziativa, man mano che i benefici vengono erogati nel modo più efficiente ed efficace possibile. Non è un evento finale.' },

    { t: 'trap', v: 'Trappole tipiche · Definizioni BACCM scambiate fra concetti · "Requirement" proposto come settimo core concept · Valore ridotto alla sola dimensione monetaria · Opzioni che restringono indebitamente una definizione (solo IT, solo lo sponsor, solo gli utenti finali) · L\'idea che la business analysis finisca al rilascio.' }
  ]
},

{
  id: 2,
  title: 'Mindset for Effective Business Analysis',
  weight: '14%',
  questions: '7 domande su 50',
  source: 'The Business Analysis Standard, cap. 3',
  blocks: [
    { t: 'p', v: 'Dominio fatto di tre elenchi da memorizzare — valori, principi, competenze — più il concetto di mindset. Le domande situation-based chiedono di riconoscere quale voce dell\'elenco corrisponde a un comportamento descritto.' },

    { t: 'h3', v: 'Activity statement 2.1 — Importance of Mindset' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Il quadro mentale che guida decisioni, comportamenti e dinamiche di team. Serve a navigare con sicurezza le situazioni in cui sapere esattamente cosa fare è impossibile: ogni situazione è unica e non esiste un unico approccio di analisi.' },
    { t: 'p', v: 'Si sviluppa con pratica deliberata su sei fronti: raggiungere gli outcome organizzativi, scoprire valore per gli stakeholder, adottare i principi appropriati, decidere come approcciare il lavoro, sviluppare le competenze fondazionali, saper usare le tecniche fondazionali.' },

    { t: 'h3', v: 'Activity statement 2.2 — Ways to Think About Business Analysis' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Respect · Courage · Collaboration · Ethics · Curiosity · Continuous learning · Improvement · Customer focus · Value maximization' },
    { t: 'trap', v: 'Parole plausibili ma ASSENTI dall\'elenco, usate come distrattori: predictability, standardization, specialization, efficiency, compliance, hierarchy, formality, speed, autonomy, competition.' },

    { t: 'h3', v: 'Activity statement 2.3 — Business Analysis Principles' },
    { t: 'ref', v: 'BA Standard 3 · BABOK 8.4 · Agile Extension 2.6-2.7' },
    { t: 'p', v: 'Provengono dall\'Agile Extension. Sono sette e hanno nomi brevi: vale la pena impararli alla lettera, perché i distrattori plausibili si costruiscono facilmente cambiando una parola.' },
    { t: 'table', head: ['Principio', 'Che cosa richiede'], widths: [3000, 6000], rows: [
      ['See the whole', 'Analizzare i bisogni nel contesto complessivo e capire perché il cambiamento è necessario.'],
      ['Think as a customer', 'Partire dall\'esperienza del cliente, da una visione alta scomposta in dettaglio.'],
      ['Analyze to determine what is valuable', 'Valutare e prioritizzare in continuo per massimizzare il valore consegnato.'],
      ['Get real using examples', 'Usare esempi concreti per costruire comprensione condivisa; servono anche per acceptance criteria e testing.'],
      ['Understand what is doable', 'Capire come consegnare entro i vincoli, inclusi quelli dell\'ambiente operativo.'],
      ['Stimulate collaboration and continuous improvement', 'Creare un ambiente di contributo continuo; usare il feedback per adattare soluzione e processi.'],
      ['Avoid waste', 'Identificare le attività che non aggiungono valore e rimuoverle.']
    ]},

    { t: 'h3', v: 'Activity statement 2.4 — Foundational Competencies' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Due livelli, da non confondere:' },
    { t: 'ul', v: [
      'Foundational competencies: le abilità di base necessarie per una business analysis efficace. La community globale ne ha identificate CINQUE come importanti per qualsiasi iniziativa.',
      'Underlying competencies: le 29 del capitolo 9 del BABOK, in sei gruppi, su cui si costruisce a partire dalla base.'
    ]},
    { t: 'table', head: ['Le cinque fondazionali', 'Definizione sintetica', 'BABOK'], widths: [2600, 5000, 1400], rows: [
      ['Adaptability', 'Adeguare il proprio stile comportamentale per aumentare l\'efficacia.', '9.2.5'],
      ['Facilitation', 'Facilitare workshop, negoziare, aiutare a risolvere i conflitti.', '9.5.1'],
      ['Leadership and Influencing', 'Costruire consenso, raccomandare soluzioni, guidare al valore desiderato.', '9.5.2'],
      ['Problem Solving', 'Assicurare che il valore creato affronti la causa radice dei problemi.', '9.1.4'],
      ['Systems Thinking', 'Comprendere olisticamente impresa e contesto per massimizzare il valore.', '9.1.5']
    ]},
    { t: 'key', v: 'Numeri da non confondere: 5 competenze fondazionali · 29 underlying competencies in 6 gruppi · 20 tecniche valutate all\'ECBA · più di 90 tecniche in totale nei quattro documenti IIBA · 30 task · 6 knowledge area · 9 domini d\'esame.' },

    { t: 'trap', v: 'Trappole tipiche · Tecniche presentate come competenze (Data Modelling non è una competenza) · Competenze reali del cap. 9 spacciate per una delle cinque fondazionali (Written Communication, Industry Knowledge) · Nelle domande situation-based più opzioni sono "vere in generale": scegli quella che risponde alla situazione descritta, non la più nobile.' }
  ]
},

{
  id: 3,
  title: 'Implementing Business Analysis',
  weight: '6%',
  questions: '3 domande su 50',
  source: 'The Business Analysis Standard, cap. 4',
  blocks: [
    { t: 'p', v: 'Pesa poco (3 domande) ma contiene molto materiale, in particolare la distinzione requisiti/design che ritorna anche nei domini BABOK. Vale la pena studiarlo bene comunque.' },

    { t: 'h3', v: 'Activity statement 3.1 — Who Performs Business Analysis' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 1' },
    { t: 'p', v: 'Chiunque sviluppi strategia e obiettivi, crei value proposition, abiliti il cambiamento, analizzi bisogni e progetti soluzioni, faciliti la collaborazione, crei prodotti innovativi, progetti o migliori processi, ottimizzi le attività operative. Il riferimento per sviluppare le competenze è il Business Analysis Competency Model.' },

    { t: 'h3', v: 'Activity statement 3.2 — Approaches to Business Analysis Work and Techniques' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 3.1' },
    { t: 'table', head: ['Approccio', 'Come funziona', 'Quando sceglierlo'], widths: [1800, 4000, 3200], rows: [
      ['Predittivo', 'Pianifica tutto in anticipo, produce documenti e modelli (scope statement, requisiti, design, baseline di schedule e costi, test plan), traccia l\'avanzamento sul piano.', 'Lavoro ben definito, fortemente regolamentato, relativamente lineare o completabile in sequenza.'],
      ['Adattivo', 'Consegna valore in piccoli incrementi prioritizzati, documentazione just-enough e just-in-time, feedback continuo.', 'Bisogni complessi, sfide mal definite, incertezza, bisogni emergenti durante la costruzione.'],
      ['Ibrido', 'Alcune iniziative predittive e altre adattive, oppure parti della stessa iniziativa con approcci diversi.', 'Quando serve combinare i due — è la norma, non un\'eccezione.']
    ]},
    { t: 'key', v: 'A volte l\'approccio è imposto al team. In quel caso l\'aspettativa non è protestare: è saper creare valore con qualunque approccio.' },

    { t: 'h3', v: 'Le cinque tecniche fondazionali' },
    { t: 'p', v: 'Backlog Management · Customer Journey Mapping · Data Storytelling · Process Analysis · Workshops/Interviews' },
    { t: 'trap', v: 'Da NON confondere con le 20 tecniche valutate all\'ECBA: solo Backlog Management, Process Analysis, Workshops e Interviews appartengono a entrambe le liste. Customer Journey Mapping e Data Storytelling vengono da altri documenti IIBA (POA Guide e BDA Guide).' },

    { t: 'h3', v: 'Activity statement 3.4 — Understand Requirements and Designs' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 2' },
    { t: 'p', v: 'La distinzione fondazionale del dominio, e quella che i documenti ufficiali definiscono in modo più contrastivo.' },
    { t: 'table', head: ['', 'Requisito', 'Design'], widths: [1600, 3700, 3700], rows: [
      ['Che cos\'è', 'Una rappresentazione utilizzabile di un NEED', 'Una rappresentazione utilizzabile di una SOLUZIONE'],
      ['Domanda', 'Quale valore potrebbe essere prodotto', 'Come il valore potrebbe essere realizzato'],
      ['Esempio', '"Fornire informazioni in inglese e francese"', 'Prototipo con testo nelle due lingue']
    ]},
    { t: 'p', v: 'La differenza sta nello SCOPO, non nell\'autore, nel formato o nello stato di approvazione: le stesse task e tecniche possono creare entrambi. Sono interdipendenti e ciclici — i design rivelano intuizioni che migliorano i requisiti, e i requisiti che cambiano portano ad aggiornare i design.' },

    { t: 'h3', v: 'Le quattro classi di requisiti' },
    { t: 'table', head: ['Classe', 'Definizione', 'Domanda'], widths: [2200, 5400, 1400], rows: [
      ['Business', 'Goal, obiettivi e outcome del perché è stato avviato un cambiamento. Riguardano impresa, area o iniziativa.', 'WHY'],
      ['Stakeholder', 'I bisogni degli stakeholder che devono essere soddisfatti per raggiungere i business requirement. Ponte fra business e solution.', 'WHAT'],
      ['Solution', 'Capacità e qualità della soluzione. Si dividono in functional (comportamento e informazioni) e non-functional o quality of service (condizioni e qualità: prestazioni, sicurezza, disponibilità).', 'WHAT'],
      ['Transition', 'Capacità e condizioni per passare dallo stato attuale al futuro. Temporanei: conversione dati, formazione, continuità operativa.', 'CHANGE']
    ]},

    { t: 'h3', v: 'Tracciabilità' },
    { t: 'p', v: 'Segue le relazioni fra requisiti e design, dal bisogno originale alla soluzione implementata. Backward traceability risale al business need; forward traceability scende ai componenti della soluzione. Supporta il change control e aiuta a scoprire requisiti mancanti o componenti non supportati da alcun requisito.' },

    { t: 'h3', v: 'Activity statement 3.3 — Understand Organizational Considerations' },
    { t: 'ref', v: 'BA Standard 4' },
    { t: 'table', head: ['Tema', 'Ruolo del professionista'], widths: [2400, 6600], rows: [
      ['Security integration', 'Non deve essere uno SME di sicurezza, ma con una solida comprensione dei principi aiuta stakeholder di background diversi a collaborare e a identificare rischi.'],
      ['Ethical analysis', 'Analisi attenta che elimina i bias personali. Quando la scelta "migliore" e quella "etica" divergono, il riferimento è il Code of Ethical Conduct and Professional Standards di IIBA.'],
      ['Inclusion and representation', 'Più che una questione etica: motore di innovazione e crescita sostenibile, perché le prospettive diverse alimentano la soluzione creativa dei problemi.'],
      ['Sustainability', 'Soddisfare i bisogni attuali preservando le risorse per le generazioni future, includendo equità sociale, salute e viabilità economica.']
    ]},

    { t: 'h3', v: 'Come si eroga la business analysis' },
    { t: 'p', v: 'Centre of Excellence (unità specializzata) · Community of Practice (spazio collaborativo di condivisione) · Business Analysis as a Service (outsourcing a fornitori specializzati) · Dispersed across business units (integrata nei reparti). Molte organizzazioni le combinano.' },

    { t: 'trap', v: 'Trappole tipiche · Requisito e design distinti per autore ("il business scrive i requisiti, l\'IT i design") o per formato ("il requisito è testo, il design è un diagramma"): entrambe false · Tempo di risposta classificato come functional invece che non-functional · Le cinque tecniche fondazionali confuse con le 20 dell\'esame.' }
  ]
}

];
