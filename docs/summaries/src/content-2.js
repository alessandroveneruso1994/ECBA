/** Contenuto dei riassunti: domini 4-6 (BABOK Guide). */
module.exports = [

{
  id: 4,
  title: 'Change',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — Strategy Analysis (cap. 6), Requirements Life Cycle Management (cap. 5), BA Planning and Monitoring (cap. 3)',
  blocks: [
    { t: 'p', v: 'Il dominio del cambiamento: capire perché serve, cosa tocca, come tracciarne l\'avanzamento e come proporre miglioramenti.' },

    { t: 'h3', v: '4.1 I fattori che influenzano il lavoro' },
    { t: 'p', v: 'Il task chiave è Analyze Current State (6.1): capire perché l\'impresa deve cambiare qualcosa e cosa ne sarebbe toccato, direttamente o indirettamente.' },
    { t: 'p', v: 'Il current state comprende struttura e cultura organizzativa, capability, tecnologia e infrastruttura, policy, architettura di business, influencer interni ed esterni. I business need sono i problemi e le opportunità di importanza strategica: un reclamo, una perdita di ricavi, una nuova opportunità di mercato ne innescano la valutazione.' },
    { t: 'key', v: '"Il bisogno è una nuova app" è una risposta sbagliata mascherata: l\'app è una soluzione, non un bisogno. Partire dalla soluzione salta l\'analisi del perché.' },
    { t: 'p', v: 'Assess Risks (6.3) valuta le conseguenze indesiderate di forze interne ed esterne durante la transizione allo stato futuro e una volta raggiunto. Nel BABOK il rischio è sempre legato al VALORE, non genericamente a tempi e costi.' },

    { t: 'h3', v: '4.2 Identificare e valutare gli impatti' },
    { t: 'p', v: 'I cinque task di Requirements Life Cycle Management si distinguono dal verbo del loro scopo:' },
    { t: 'table', head: ['Task', 'Scopo'], widths: [2600, 6400], rows: [
      ['5.1 Trace Requirements', 'Allineare requisiti e design a livelli diversi e gestire gli effetti di un cambiamento sugli elementi correlati.'],
      ['5.2 Maintain Requirements', 'Mantenere accuratezza e coerenza per l\'intero ciclo di vita, e supportare il RIUSO in altre soluzioni.'],
      ['5.3 Prioritize Requirements', 'Ordinare i requisiti per importanza relativa.'],
      ['5.4 Assess Requirements Changes', 'Valutare le implicazioni delle modifiche proposte.'],
      ['5.5 Approve Requirements', 'Ottenere accordo e approvazione perché il lavoro prosegua.']
    ]},
    { t: 'p', v: 'La gap analysis (in Define Change Strategy, 6.4) identifica la differenza fra le capability dello stato attuale e quelle dello stato futuro. Richiede che entrambi gli stati siano definiti; usare le stesse tecniche per descriverli semplifica il confronto.' },
    { t: 'p', v: 'Define Future State (6.2) determina l\'insieme di condizioni necessarie a soddisfare il bisogno. Define Change Strategy (6.4) sviluppa e valuta approcci alternativi al cambiamento e sceglie quello raccomandato. Il primo dice DOVE si vuole arrivare, il secondo COME.' },

    { t: 'h3', v: '4.3 Tracciare il progresso' },
    { t: 'p', v: 'Due piani distinti, spesso confusi:' },
    { t: 'ul', v: [
      'Identify Business Analysis Performance Improvements (3.5) valuta il LAVORO DI ANALISI e pianifica come migliorare i processi. Il suo output alimenta Plan Stakeholder Engagement e Prepare for Elicitation.',
      'Measure Solution Performance (8.1) e Analyze Performance Measures (8.2) valutano invece la SOLUZIONE. Prima si misura, poi si analizza.'
    ]},
    { t: 'p', v: 'Lessons Learned (10.27) compila successi, opportunità di miglioramento, fallimenti e raccomandazioni per progetti o fasi future.' },

    { t: 'h3', v: '4.4 Proporre miglioramenti' },
    { t: 'p', v: 'Recommend Actions to Increase Solution Value (8.5) parte dalla comprensione dei fattori che creano la differenza fra valore potenziale e valore effettivo, e raccomanda come allinearli.' },
    { t: 'p', v: 'Process Analysis (10.34) valuta un processo per efficienza ed efficacia e individua opportunità di cambiamento. Process Modelling (10.35) è la rappresentazione grafica che fa da fondamento all\'analisi: modellare descrive, analizzare valuta.' },

    { t: 'trap', v: 'Trappole tipiche · Process analysis scambiata con process modelling · Assess Requirements Changes valutato guardando solo al beneficio di chi lo chiede · Il rischio ridotto al superamento del budget · Confondere il miglioramento del processo di analisi con quello della soluzione.' }
  ]
},

{
  id: 5,
  title: 'Need',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — Elicitation and Collaboration (cap. 4), RADD (cap. 7), RLCM (cap. 5)',
  blocks: [
    { t: 'p', v: 'Elicitare, documentare, validare e prioritizzare i bisogni. È il dominio con più tecniche coinvolte.' },

    { t: 'h3', v: '5.1 I tre tipi di elicitation' },
    { t: 'table', head: ['Tipo', 'Che cos\'è', 'Tecniche tipiche'], widths: [1800, 4400, 2800], rows: [
      ['Collaborative', 'Interazione diretta con gli stakeholder, basata su esperienze, expertise e giudizio.', 'Interviews, Workshops, Brainstorming, Collaborative Games'],
      ['Research', 'Scoperta e studio sistematico di informazioni da materiali o fonti non direttamente note agli stakeholder, inclusa l\'analisi di dati storici.', 'Document Analysis, Data Mining'],
      ['Experiments', 'Informazioni che non si possono conoscere senza un test controllato, perché semplicemente non sono note a nessuno.', 'Studi osservazionali, proof of concept, prototipi']
    ]},
    { t: 'key', v: 'Domanda ricorrente: "quali sono i tre tipi di elicitation?" Il distrattore più insidioso elenca TECNICHE (interviste, workshop, survey) invece di TIPI.' },
    { t: 'p', v: 'Prepare for Elicitation (4.1) definisce gli outcome desiderati, sceglie le tecniche, stabilisce logistica e materiali. Conduct Elicitation (4.2) estrae ed esplora le informazioni. Gli stakeholder collaborano in due modi: partecipando all\'attività, e ricercando e fornendo feedback su documenti, sistemi, modelli e interfacce.' },
    { t: 'p', v: 'L\'intervista (10.25) serve anche a stabilire relazioni e costruire fiducia — il "rapport" che l\'activity statement 5.1 chiede esplicitamente.' },

    { t: 'h3', v: '5.2 Documentare e validare' },
    { t: 'p', v: 'Tre controlli distinti, in ordine crescente di rigore:' },
    { t: 'table', head: ['Task', 'Domanda a cui risponde', 'Rigore'], widths: [2800, 4400, 1800], rows: [
      ['4.3 Confirm Elicitation Results', 'Ho capito bene quello che mi hanno detto? Controlla accuratezza e coerenza con la fonte e con altri risultati.', 'Molto meno rigoroso e formale della revisione in analisi'],
      ['7.2 Verify Requirements', 'Il requisito è scritto bene? Controlla le caratteristiche di qualità.', 'Formale'],
      ['7.3 Validate Requirements', 'Il requisito serve a qualcosa? Verifica l\'allineamento ai business requirement e al valore atteso.', 'Formale']
    ]},
    { t: 'key', v: 'Verify contro Validate è una delle distinzioni più testate. Un requisito scritto benissimo che non contribuisce a nessun obiettivo supera la verifica e fallisce la validazione — ed è un forte candidato all\'eliminazione.' },
    { t: 'p', v: 'Le nove caratteristiche di qualità (Verify Requirements): atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable. La qualità è determinata in ultima analisi dai bisogni degli stakeholder che useranno requisiti e design.' },
    { t: 'p', v: 'Specify and Model Requirements (7.1) analizza, sintetizza e raffina i risultati dell\'elicitation in requisiti e design.' },

    { t: 'h3', v: '5.3 Confrontare bisogni e outcome' },
    { t: 'p', v: 'A livello foundational l\'aspettativa è precisa: confrontare i bisogni degli stakeholder con gli outcome e SEGNALARE i conflitti per la revisione. Non decidere unilateralmente, non rimuovere, non escalare senza analisi.' },
    { t: 'p', v: 'In Validate Requirements si identificano anche le ASSUNZIONI: quando un prodotto è senza precedenti si assume la risposta dei clienti, e l\'assunzione va esplicitata perché il rischio associato sia gestibile.' },

    { t: 'h3', v: '5.4 Prioritizzare' },
    { t: 'p', v: 'Gli otto fattori tipici di Prioritize Requirements (5.3):' },
    { t: 'table', head: ['Fattore', 'Significato'], widths: [2400, 6600], rows: [
      ['Benefit', 'Il vantaggio che deriva agli stakeholder, misurato sugli obiettivi del cambiamento.'],
      ['Penalty', 'Le conseguenze del NON implementare. Include gli obblighi normativi, che possono prevalere sugli altri interessi.'],
      ['Cost', 'Sforzo e risorse. L\'informazione viene dal team di implementazione o dal fornitore; i clienti spesso cambiano priorità dopo averlo saputo.'],
      ['Risk', 'La possibilità che il requisito non porti il valore atteso o non sia realizzabile. Se c\'è dubbio sulla fattibilità tecnica, si porta in cima per limitare le risorse spese prima di scoprirlo.'],
      ['Dependencies', 'Un requisito non soddisfacibile finché non lo è un altro. Possono essere anche esterne: decisioni di altri team, finanziamenti, disponibilità di risorse.'],
      ['Time sensitivity', 'La "data di scadenza" del requisito: oltre un certo momento il valore si riduce.'],
      ['Stability', 'Quanto è probabile che il requisito cambi ancora. Lavorare su un requisito instabile produce rilavorazione.'],
      ['Regulatory or policy compliance', 'Obblighi imposti all\'organizzazione.']
    ]},
    { t: 'p', v: 'La base della prioritizzazione è concordata con gli stakeholder rilevanti: è una decisione di business, non una scelta tecnica del professionista.' },

    { t: 'trap', v: 'Trappole tipiche · Tipi di elicitation confusi con le tecniche · Verify e Validate scambiati · Risk e Stability confusi (il primo è "non porterà valore", il secondo è "cambierà ancora") · Criteri di prioritizzazione inventati: chi ha proposto il requisito, quanto è lungo, in che ordine è stato elicitato.' }
  ]
},

{
  id: 6,
  title: 'Solution',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — RADD (cap. 7), Solution Evaluation (cap. 8), Strategy Analysis (cap. 6)',
  blocks: [
    { t: 'p', v: 'Valutare opzioni, definire scope e design, verificare che la soluzione funzioni davvero.' },

    { t: 'h3', v: '6.1 Validare la soluzione' },
    { t: 'p', v: 'Define Measurable Evaluation Criteria, dentro Validate Requirements (7.3): i benefici attesi sono definiti nel future state, ma i criteri di misura spesso no. Si stabiliscono metriche di BASELINE sul current state e metriche TARGET che riflettono il raggiungimento degli obiettivi.' },
    { t: 'p', v: 'Measure Solution Performance (8.1): prima si verifica se esistono già misure o metodi di raccolta, assicurandosi che siano accurate e rilevanti, poi si elicitano quelle mancanti. Goal, obiettivi e processi di business sono fonti comuni; le misure possono anche essere imposte da terzi come fornitori o regolatori.' },
    { t: 'table', head: ['Tipo di misura', 'Che cos\'è'], widths: [2400, 6600], rows: [
      ['Quantitative', 'Numeriche, contabili o finite: importi, quantità, tassi.'],
      ['Qualitative', 'Soggettive: atteggiamenti, percezioni, risposte di clienti e utenti su quanto la soluzione soddisfa il bisogno.']
    ]},
    { t: 'p', v: 'Le misure vanno validate con gli stakeholder, perché la valutazione sia utile, e allineate con eventuali misure di livello superiore già esistenti.' },

    { t: 'h3', v: '6.2 Valutare le opzioni' },
    { t: 'p', v: 'Sequenza da ricordare:' },
    { t: 'ul', v: [
      'Define Design Options (7.5): definisce l\'approccio alla soluzione, individua opportunità di miglioramento, alloca i requisiti sui componenti e rappresenta le opzioni.',
      'Analyze Potential Value and Recommend Solution (7.6): stima il valore potenziale di CIASCUNA opzione e stabilisce quale sia la più appropriata.'
    ]},
    { t: 'p', v: 'Risk Analysis and Management (10.38) identifica le aree di incertezza che potrebbero incidere negativamente sul valore, le analizza e sviluppa modi per affrontarle. Si applica a rischi strategici, tattici e operativi. L\'identificazione è un\'attività continua, e il livello di rischio varia nel tempo.' },

    { t: 'h3', v: '6.3 Scope e pianificazione' },
    { t: 'p', v: 'Il solution scope definisce i CONFINI della soluzione, descritti con dettaglio sufficiente perché gli stakeholder capiscano quali nuove capability il cambiamento porterà, e come la soluzione abilita i goal del future state.' },
    { t: 'key', v: 'Due punti spesso testati: il solution scope PUÒ EVOLVERE durante l\'iniziativa man mano che emergono informazioni, e può includere la descrizione dei componenti FUORI scope, per chiarezza.' },
    { t: 'p', v: 'Scope Modelling (10.41) definisce limiti o confini e colloca gli elementi dentro o fuori. Chiarisce span of control, rilevanza degli elementi e dove sarà applicato lo sforzo.' },

    { t: 'h3', v: '6.4 Gli artefatti di design' },
    { t: 'p', v: 'Specify and Model Requirements (7.1) produce requisiti e design; Define Requirements Architecture (7.4) assicura che i requisiti presi COLLETTIVAMENTE si sostengano a vicenda e raggiungano pienamente gli obiettivi.' },
    { t: 'p', v: 'Le stesse task e tecniche possono produrre sia requisiti sia design: a differire è lo scopo.' },
    { t: 'table', head: ['Modello', 'Che cosa rappresenta'], widths: [2600, 6400], rows: [
      ['Process Modelling (10.35)', 'Come il lavoro viene svolto: attività in sequenza, ruoli, rami paralleli.'],
      ['Data Modelling (10.15)', 'Entità/classi di un dominio, attributi e relazioni: fornisce una semantica condivisa.'],
      ['Scope Modelling (10.41)', 'I confini: cosa è dentro e cosa è fuori.'],
      ['Organizational Modelling (10.32)', 'Ruoli, responsabilità e strutture di riporto.']
    ]},

    { t: 'h3', v: 'Quando la soluzione non rende' },
    { t: 'p', v: 'Assess Solution Limitations (8.3) guarda ai fattori INTERNI alla soluzione. Le soluzioni hanno spesso dipendenze interne che limitano la prestazione dell\'insieme a quella del componente meno efficace; quando gli output sono ripetutamente inefficaci si conduce problem analysis per trovare la fonte.' },

    { t: 'trap', v: 'Trappole tipiche · Define Design Options e Analyze Potential Value invertiti nell\'ordine · Solution scope trattato come immutabile una volta approvato · Process modelling e data modelling scambiati (attività contro informazioni) · La preferenza dello sponsor presentata come sostituto dell\'analisi del valore.' }
  ]
}

];
