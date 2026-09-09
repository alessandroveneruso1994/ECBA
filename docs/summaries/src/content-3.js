/** Contenuto dei riassunti: domini 7-9 (BABOK Guide). */
module.exports = [

{
  id: 7,
  title: 'Stakeholder',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — Key Concepts (cap. 2), BA Planning and Monitoring (cap. 3), Elicitation and Collaboration (cap. 4)',
  blocks: [
    { t: 'p', v: 'Chi sono, cosa vogliono, come comunicarci e come tenerli coinvolti.' },

    { t: 'h3', v: 'Activity statement 7.2 — Identify stakeholders for your initiatives' },
    { t: 'ref', v: 'BABOK 3.2 · BABOK 3.3' },
    { t: 'p', v: 'Undici ruoli definiti nel capitolo 2. Vanno riconosciuti dalla descrizione della responsabilità.' },
    { t: 'table', head: ['Ruolo', 'Responsabilità'], widths: [2600, 6400], rows: [
      ['Business analyst', 'È intrinsecamente stakeholder di tutte le attività di business analysis, di cui è responsabile.'],
      ['Customer', 'Usa i prodotti o servizi dell\'impresa; può avere diritti contrattuali o morali.'],
      ['Domain SME', 'Conoscenza approfondita di un tema rilevante per il bisogno o per il solution scope.'],
      ['End user', 'Interagisce DIRETTAMENTE con la soluzione; include tutti i partecipanti a un processo.'],
      ['Implementation SME', 'Conoscenza specialistica dell\'implementazione dei componenti: sviluppatore, architetto, DBA, trainer, change manager.'],
      ['Operational support', 'Gestione e manutenzione quotidiana del sistema: help desk, release manager.'],
      ['Project manager', 'Gestisce il lavoro per consegnare la soluzione bilanciando scope, budget, schedule, risorse, qualità e rischio.'],
      ['Regulator', 'Definisce e fa rispettare standard, imposti tramite legislazione, corporate governance o audit.'],
      ['Sponsor', 'Avvia lo sforzo, autorizza il lavoro, controlla budget e scope.'],
      ['Supplier', 'Fornitore esterno di prodotti o servizi all\'organizzazione.'],
      ['Tester', 'Verifica che la soluzione soddisfi gli standard di qualità.']
    ]},

    { t: 'h3', v: 'Analizzare gli stakeholder' },
    { t: 'p', v: 'Plan Stakeholder Engagement (3.2) identifica chi è impattato direttamente o indirettamente e ne analizza le caratteristiche. Si esegue RIPETUTAMENTE, non una volta sola.' },
    { t: 'ul', v: [
      'Fonti interne: organigramma e processi di business; anche lo sponsor può indicarne.',
      'Fonti esterne: contratti in essere, fornitori attesi, enti regolatori; si considerano azionisti, clienti e fornitori.',
      'Si analizzano ruoli (dove e come contribuiranno) e atteggiamenti (cosa può incidere su azioni e comportamenti).'
    ]},
    { t: 'key', v: 'Perché conta: se gli stakeholder non vengono identificati si rischia di non scoprire bisogni critici. Quelli scoperti tardi costringono a rivedere attività in corso o già concluse, con aumento dei costi e calo della soddisfazione.' },
    { t: 'p', v: 'Stakeholder List, Map, or Personas (10.43) supporta questa analisi. Da non confondere con Organizational Modelling (10.32), che descrive la struttura stabile dell\'organizzazione anziché i partecipanti a una specifica iniziativa.' },

    { t: 'h3', v: 'Activity statement 7.1 — Communicate with stakeholders throughout the initiative' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 3.4' },
    { t: 'p', v: 'Communicate Business Analysis Information (4.4) esiste per assicurare una COMPRENSIONE CONDIVISA. È bidirezionale e iterativa: si determinano destinatari, contenuto, scopo, contesto e outcome attesi.' },
    { t: 'p', v: 'Comunicare non significa spingere fuori informazione dando per scontato che sia stata ricevuta e capita. Il professionista coinvolge gli stakeholder per verificare la comprensione, agisce sui disaccordi, e CAMBIA IL METODO di consegna se non stanno ricevendo o capendo. Più forme di comunicazione possono servire per la stessa informazione.' },
    { t: 'p', v: 'Linguaggio, tono e stile vanno adattati al pubblico: lo stesso documento inviato a dirigenti, sviluppatori e utenti finali non funziona.' },

    { t: 'h3', v: 'Activity statement 7.3 — Manage collaboration and relationships with stakeholders' },
    { t: 'ref', v: 'BABOK 4.1 · BABOK 4.2 · BABOK 4.5' },
    { t: 'p', v: 'Manage Stakeholder Collaboration (4.5) incoraggia gli stakeholder a lavorare verso un obiettivo comune. È un\'attività CONTINUA: nuovi stakeholder possono emergere in qualsiasi momento, e ruolo, responsabilità, influenza, atteggiamento e autorità di ciascuno possono cambiare nel tempo.' },
    { t: 'p', v: 'Più il cambiamento è impattante o visibile, più attenzione richiede. L\'obiettivo è capitalizzare le reazioni positive e mitigare o evitare quelle negative — non escludere chi dissente.' },
    { t: 'key', v: 'Gli stakeholder detengono autorità sull\'approvazione, ma sono anche una fonte primaria di need, vincoli e assunzioni. Per questo relazioni deboli danneggiano il lavoro: il primo effetto elencato è la mancata fornitura di informazioni di qualità.' },
    { t: 'p', v: 'Workshops (10.50) riuniscono gli stakeholder per collaborare a un obiettivo predefinito. Collaborative Games (10.10) li fanno costruire insieme una comprensione condivisa attraverso attività strutturate.' },

    { t: 'h3', v: 'Activity statement 7.4 — Analyze the motivations and expectations of stakeholders' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 4.5' },
    { t: 'p', v: 'Competenze rilevanti del capitolo 9:' },
    { t: 'ul', v: [
      'Facilitation (9.5.1): moderare le discussioni perché tutti esprimano il proprio punto di vista e riconoscano quelli altrui. Il facilitatore è un terzo, non un decisore: resta neutrale ma interviene quando serve.',
      'Leadership and Influencing (9.5.2): motivare le persone a lavorare insieme verso obiettivi condivisi, comprendendo motivazioni, bisogni e capacità individuali. Fra le misure: influenzare gli stakeholder a considerare obiettivi più ampi rispetto alle motivazioni personali.'
    ]},

    { t: 'trap', v: 'Trappole tipiche · End user confuso con operational support (chi usa la soluzione contro chi la mantiene) · Domain SME confuso con implementation SME (conosce il business contro conosce la realizzazione) · Sponsor confuso con project manager (autorizza e finanzia contro gestisce l\'esecuzione) · L\'idea che la stakeholder analysis si faccia una volta sola all\'inizio.' }
  ]
},

{
  id: 8,
  title: 'Value',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — Solution Evaluation (cap. 8), Strategy Analysis (cap. 6), tecnica 10.28',
  blocks: [
    { t: 'p', v: 'Definire gli outcome attesi, misurarli, capire perché il valore reale diverge da quello potenziale.' },

    { t: 'h3', v: 'Activity statement 8.1 — Understand the outcome that needs to be produced' },
    { t: 'ref', v: 'BABOK 6.2 · BABOK 8.4' },
    { t: 'table', head: ['', 'Goal', 'Objective'], widths: [1600, 3700, 3700], rows: [
      ['Natura', 'Di lungo termine, continuativo, QUALITATIVO', 'Descrittivo, granulare, SPECIFICO'],
      ['Esempio', '"Aumentare il numero di clienti ad alto fatturato"', '"Aumentare del 30% i clienti ad alto fatturato nella fascia 30-45 anni entro 6 mesi"']
    ]},
    { t: 'p', v: 'Goal e obiettivi descrivono i FINI che l\'organizzazione cerca di raggiungere, e possono riguardare sia cambiamenti da realizzare sia condizioni da mantenere. Man mano che i goal vengono analizzati si convertono in obiettivi.' },
    { t: 'p', v: 'Esempi di business goal citati dal BABOK: creare una nuova capability, affrontare o creare un vantaggio competitivo, migliorare i ricavi, aumentare la soddisfazione di clienti e dipendenti, conformarsi a nuove regolamentazioni, migliorare la sicurezza, ridurre il time to market.' },

    { t: 'h3', v: 'Activity statement 8.2 — Help support the team in creating value' },
    { t: 'ref', v: 'BABOK 6.3 · BABOK 6.4 · BABOK 8.2 · BABOK 8.3' },
    { t: 'p', v: 'La distinzione fondamentale del dominio è dentro/fuori la soluzione:' },
    { t: 'table', head: ['Task', 'Che cosa esamina', 'Esempi'], widths: [2600, 3200, 3200], rows: [
      ['8.3 Assess Solution Limitations', 'I fattori INTERNI alla soluzione che ne limitano il valore.', 'Dipendenze fra componenti, un componente lento che rallenta il tutto, output ripetutamente inefficaci.'],
      ['8.4 Assess Enterprise Limitations', 'I fattori ESTERNI alla soluzione.', 'Cultura aziendale, struttura, policy, stakeholder che non capiscono perché la soluzione esiste.']
    ]},
    { t: 'key', v: 'La cultura d\'impresa è definita come le credenze, i valori e le norme profondamente radicate e condivise: non direttamente visibili, ma guidano le azioni. Uno degli scopi dell\'assessment culturale è capire se gli stakeholder comprendano le ragioni per cui la soluzione esiste.' },
    { t: 'p', v: 'Recommend Actions to Increase Solution Value (8.5) chiude il ciclo: capire i fattori che creano la differenza fra valore potenziale e valore effettivo, e raccomandare come allinearli.' },
    { t: 'p', v: 'Sequenza dei cinque task di Solution Evaluation: 8.1 Measure (definisci e raccogli) → 8.2 Analyze (trasforma i dati in insight sulla prestazione rispetto al valore) → 8.3 e 8.4 Assess Limitations (interne ed esterne) → 8.5 Recommend Actions. Dati raccolti senza analisi non producono decisioni: è la distinzione fra 8.1 e 8.2.' },

    { t: 'h3', v: 'Activity statement 8.3 — Communicate the value of initiatives or solutions to stakeholders' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.5' },
    { t: 'p', v: 'Comunicare il valore non è elencare ciò che si è fatto: è mostrare quale beneficio l\'organizzazione ne ricava, nei termini che contano per chi ascolta. Plan Business Analysis Information Management (3.4) stabilisce come l\'informazione viene organizzata, conservata e resa accessibile; Approve Requirements (5.5) è il momento in cui gli stakeholder con l\'autorità necessaria confermano l\'accordo.' },
    { t: 'key', v: 'Nella sample question ufficiale su questa activity vince l\'opzione che quantifica il beneficio di business — "riduce i costi del 20% e aumenta l\'efficienza" — non quella che elenca le specifiche tecniche, le ore di lavoro investite o il rispetto delle scadenze. Ore, milestone e feature sono metriche di progetto, non valore per lo stakeholder.' },
    { t: 'p', v: 'Linguaggio e livello di dettaglio si adattano al destinatario, come in Communicate Business Analysis Information (4.4): allo sponsor interessa l\'effetto sugli obiettivi, all\'implementation SME il come.' },

    { t: 'h3', v: 'Activity statement 8.4 — Measure the value delivered by your initiatives or solutions' },
    { t: 'ref', v: 'BABOK 3.5 · BABOK 8.3 · BABOK 8.4' },
    { t: 'p', v: 'Due piani distinti, spesso confusi: Identify Business Analysis Performance Improvements (3.5) valuta il LAVORO DI ANALISI e pianifica come migliorarlo, e il suo output alimenta Plan Stakeholder Engagement e Prepare for Elicitation; Measure Solution Performance (8.1) e Analyze Performance Measures (8.2) valutano invece la SOLUZIONE.' },
    { t: 'p', v: 'Metriche e KPI misurano la prestazione di soluzioni, componenti e altre questioni di interesse per gli stakeholder. Non valutano le persone né controllano il budget.' },
    { t: 'p', v: 'Un INDICATORE mostra il risultato dell\'analisi di una o più misure rispetto a una preoccupazione. Ogni preoccupazione richiede almeno un indicatore, alcune ne richiedono diversi.' },
    { t: 'table', head: ['Le sei caratteristiche di un buon indicatore', ''], widths: [2600, 6400], rows: [
      ['Clear', 'Preciso e non ambiguo.'],
      ['Relevant', 'Appropriato alla preoccupazione.'],
      ['Economical', 'Disponibile a un costo ragionevole.'],
      ['Adequate', 'Base sufficiente per valutare la prestazione.'],
      ['Quantifiable', 'Validabile in modo indipendente.'],
      ['Trustworthy and credible', 'Basato su evidenze e ricerca.']
    ]},
    { t: 'p', v: 'Non tutti i fattori sono misurabili direttamente: quando i dati diretti mancano o non è fattibile raccoglierli a intervalli regolari si usa un PROXY. L\'esempio del BABOK: in assenza di un\'indagine sulla soddisfazione dei clienti, la quota di contratti rinnovati.' },
    { t: 'p', v: 'Nello stabilire un indicatore si considerano fonte, metodo di raccolta, chi raccoglie, costo, frequenza e difficoltà. Nel tempo le debolezze di alcuni indicatori possono essere individuate e corrette: non sono immutabili.' },
    { t: 'p', v: 'Limite dichiarato: raccogliere dati in eccesso genera costi inutili e distoglie il team; un programma di metriche burocratico fallisce raccogliendo troppo e generando poco.' },

    { t: 'trap', v: 'Trappole tipiche · Le sei caratteristiche dell\'indicatore confuse con le nove di qualità dei requisiti o con l\'acronimo SMART · Goal e objective invertiti ("i goal sono misurabili, gli obiettivi aspirazionali" è il contrario) · Limiti interni ed esterni scambiati · L\'idea che un indicatore validato non vada più cambiato.' }
  ]
},

{
  id: 9,
  title: 'Context',
  weight: '10%',
  questions: '5 domande su 50',
  source: 'BABOK Guide — Elicitation and Collaboration (cap. 4), RADD (cap. 7), Strategy Analysis (cap. 6), competenze cap. 9',
  blocks: [
    { t: 'p', v: 'Qualità dell\'informazione, vincoli, tecnologia e standard di settore: il dominio di ciò che circonda il cambiamento.' },

    { t: 'h3', v: 'Activity statement 9.1 — Ensure that information within your initiative is validated for the intended purpose' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.1 · BABOK 5.2' },
    { t: 'p', v: 'Confirm Elicitation Results (4.3) controlla accuratezza e coerenza. I risultati si confrontano con la LORO FONTE e con altri risultati di elicitation. La revisione può scoprire errori, omissioni, conflitti e ambiguità.' },
    { t: 'p', v: 'Se l\'informazione non è corretta, il professionista determina cosa lo è — il che può richiedere ulteriore elicitation. Impegnare risorse su risultati non confermati rischia di disattendere le aspettative degli stakeholder. È comunque una revisione MOLTO MENO rigorosa e formale di quella che avviene durante l\'analisi.' },
    { t: 'p', v: 'Le caratteristiche di qualità di Verify Requirements (7.2), utili per riconoscere il difetto di un requisito scritto male:' },
    { t: 'table', head: ['Caratteristica', 'Significato', 'Difetto tipico'], widths: [2000, 4200, 2800], rows: [
      ['Atomic', 'Autosufficiente, comprensibile indipendentemente dagli altri.', 'Due requisiti in una frase sola'],
      ['Complete', 'Sufficiente a guidare il lavoro, al livello di dettaglio appropriato.', 'Manca l\'informazione per procedere'],
      ['Consistent', 'Allineato ai bisogni, non in conflitto con altri requisiti.', 'Contraddice un altro requisito'],
      ['Concise', 'Nessun contenuto superfluo.', 'Prosa ridondante'],
      ['Feasible', 'Ragionevole entro rischio, tempi e budget concordati, o abbastanza fattibile da indagare con esperimenti.', 'Tecnicamente impossibile'],
      ['Unambiguous', 'Formulato in modo da rendere chiaro se una soluzione lo soddisfa o no.', '"Il report deve caricarsi rapidamente"'],
      ['Testable', 'È possibile verificare che sia stato soddisfatto.', 'Nessun criterio verificabile'],
      ['Prioritized', 'Ordinato o negoziato per importanza rispetto agli altri.', 'Nessuna priorità assegnata'],
      ['Understandable', 'Espresso con terminologia comune a chi lo userà.', 'Gergo di un solo reparto']
    ]},

    { t: 'h3', v: 'Activity statement 9.2 — Understand the environmental constraints in which your organization operates' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 3.1' },
    { t: 'p', v: 'I vincoli — policy, regolamenti, tecnologia, struttura — emergono dall\'analisi del current state e influenzano la change strategy. Quando un vincolo nuovo rende impraticabile l\'approccio scelto, si riesaminano change strategy e solution scope per mantenerli allineati al future state: lo scope può evolvere.' },
    { t: 'key', v: 'Nella sample question ufficiale su questa activity, davanti a una policy che vieta uno strumento utile la risposta corretta è cercare strumenti o processi alternativi che rispettino la policy: né usarlo comunque, né limitarsi a documentare l\'inefficienza, né sospendere l\'iniziativa in attesa che la regola cambi.' },
    { t: 'p', v: 'Nella prioritizzazione, gli obblighi normativi imposti all\'organizzazione possono prevalere sugli altri interessi degli stakeholder (fattore "penalty").' },

    { t: 'h3', v: 'Activity statement 9.3 — Understand the impact of technology trends on your initiative' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.1' },
    { t: 'p', v: 'Tecnologia e infrastruttura fanno parte del current state. Quando una domanda non può essere risolta né dalle persone né dai documenti, la risposta è l\'elicitation di tipo EXPERIMENTS: studi osservazionali, proof of concept, prototipi.' },
    { t: 'key', v: 'Nella sample question ufficiale su questa activity, il primo passo davanti a una tecnologia emergente è la risk-benefit analysis: prima si valuta se la tecnologia sia rilevante per gli obiettivi dell\'iniziativa e quali implicazioni porti, poi si costruiscono prototipi, si allestiscono sandbox o si cerca il sostegno della leadership.' },
    { t: 'p', v: 'Le tre competenze del gruppo Tools and Technology (9.6), che si distinguono per lo scopo degli strumenti:' },
    { t: 'table', head: ['Competenza', 'A cosa servono gli strumenti'], widths: [3000, 6000], rows: [
      ['Office Productivity Tools (9.6.1)', 'Organizzare, sezionare, manipolare, comprendere e comunicare informazioni con chiarezza.'],
      ['Business Analysis Tools (9.6.2)', 'Modellare, diagrammare, documentare, analizzare e mappare requisiti, identificarne le relazioni, tracciare e archiviare gli artefatti.'],
      ['Communication Tools (9.6.3)', 'Pianificare e completare interazioni conversazionali e collaborative, con team virtuali e co-locati.']
    ]},
    { t: 'key', v: 'Una misura di efficacia notevole: saper scegliere QUANDO NON usare la tecnologia di comunicazione. A volte la conversazione diretta è la scelta giusta.' },

    { t: 'h3', v: 'Activity statement 9.4 — Understand industry benchmarks and reference standards of practice' },
    { t: 'ref', v: 'BABOK 4.4 · BABOK 7.3 · BABOK 7.6' },
    { t: 'p', v: 'Il Regulator definisce e fa rispettare standard, imposti alla soluzione tramite legislazione, standard di corporate governance, standard di audit o standard definiti da centri di competenza organizzativi.' },
    { t: 'p', v: 'Competenze del gruppo Business Knowledge rilevanti qui:' },
    { t: 'ul', v: [
      'Industry Knowledge (9.3.2): trend, forze e driver di mercato, processi chiave, prodotti, segmenti di clientela, fornitori, pratiche e regolamentazioni del settore. Guarda FUORI dall\'impresa.',
      'Organization Knowledge (9.3.3): come l\'impresa genera profitti, la sua struttura, le relazioni fra unità, chi occupa le posizioni chiave, i canali di autorità formali E INFORMALI. Guarda DENTRO.',
      'Methodology Knowledge (9.3.5): le metodologie determinano timing, approccio, ruolo dei coinvolti e livello di rischio accettato.',
      'Business Acumen (9.3.1): comprendere i bisogni usando esperienza acquisita in altre situazioni, perché le organizzazioni condividono pratiche simili.'
    ]},
    { t: 'p', v: 'Business Rules Analysis (10.9) identifica, esprime, valida, raffina e organizza le regole che governano il comportamento operativo quotidiano. Le regole vanno gestite INDIPENDENTEMENTE dalla tecnologia di implementazione, perché restino consultabili dalle persone di business.' },

    { t: 'trap', v: 'Trappole tipiche · Industry Knowledge e Organization Knowledge scambiate (fuori contro dentro) · "Feasible" interpretato come "privo di rischio" · La conferma dei risultati di elicitation descritta come più rigorosa dell\'analisi (è il contrario) · Vincoli normativi trattati come materia esclusiva del legale.' }
  ]
}

];
