/** Appendici: le 20 tecniche e le 29 competenze, valutate trasversalmente. */
module.exports = [

{
  id: 'A',
  title: 'Le 20 tecniche valutate',
  weight: 'trasversale',
  questions: 'valutate dentro i nove domini',
  source: 'BABOK Guide, cap. 10',
  blocks: [
    { t: 'p', v: 'Il blueprint chiede di studiare purpose, description e usage considerations di queste venti tecniche. Non sono un dominio a sé: le domande arrivano dentro i nove domini. Lo scopo in una riga basta a rispondere alla maggior parte delle domande.' },

    { t: 'h3', v: 'Elicitare informazioni' },
    { t: 'table', head: ['Tecnica', 'Scopo'], widths: [2800, 6200], rows: [
      ['10.25 Interviews', 'Elicitare informazioni parlando con una o più persone. Serve ANCHE a stabilire relazioni e costruire fiducia. Limite: richiede tempo significativo.'],
      ['10.50 Workshops', 'Riunire gli stakeholder per collaborare al raggiungimento di un obiettivo PREDEFINITO. Successo molto dipendente da facilitatore e partecipanti; troppi rallentano, troppo pochi fanno trascurare bisogni.'],
      ['10.5 Brainstorming', 'Produrre molte idee nuove e ricavarne temi per l\'analisi. Nella sessione niente discussione, critica o valutazione. Puntare a 6-8 partecipanti.'],
      ['10.10 Collaborative Games', 'Far costruire ai partecipanti una comprensione condivisa di un problema o di una soluzione. Rivela assunzioni nascoste e coinvolge chi di solito tace. Rischio: falsa fiducia nelle conclusioni.'],
      ['10.18 Document Analysis', 'Elicitare informazioni esaminando materiali esistenti che descrivono l\'ambiente di business o gli asset organizzativi. Utile soprattutto per il current state; la documentazione può essere obsoleta.']
    ]},

    { t: 'h3', v: 'Modellare e analizzare' },
    { t: 'table', head: ['Tecnica', 'Scopo'], widths: [2800, 6200], rows: [
      ['10.34 Process Analysis', 'Valutare un processo per efficienza ed efficacia e individuare opportunità di cambiamento. Poco efficace su processi knowledge o decision-intensive.'],
      ['10.35 Process Modelling', 'Modello grafico standardizzato di come il lavoro viene svolto; fondamento della process analysis. BPMN attraversa business e IT.'],
      ['10.15 Data Modelling', 'Descrivere entità/classi di un dominio, attributi e relazioni, fornendo una semantica condivisa. Una classe ha anche operazioni, un\'entità no.'],
      ['10.32 Organizational Modelling', 'Descrivere ruoli, responsabilità e strutture di riporto, allineandoli agli obiettivi. Limite: non cattura autorità e influenza informali.'],
      ['10.41 Scope Modelling', 'Definire limiti o confini e collocare gli elementi dentro o fuori. Chiarisce span of control e dove sarà applicato lo sforzo.'],
      ['10.6 Business Capability Analysis', 'Framework per scoping e pianificazione: comprensione condivisa degli outcome, allineamento con la strategia, filtro di scope e prioritizzazione. Le capability dicono COSA l\'organizzazione sa fare, non come.'],
      ['10.9 Business Rules Analysis', 'Identificare, esprimere, validare, raffinare e organizzare le regole che guidano le decisioni operative. Vanno gestite indipendentemente dalla tecnologia.']
    ]},

    { t: 'h3', v: 'Decidere e valutare' },
    { t: 'table', head: ['Tecnica', 'Scopo'], widths: [2800, 6200], rows: [
      ['10.40 Root Cause Analysis', 'Identificare e valutare le cause SOTTOSTANTI di un problema. Il fishbone (Ishikawa) organizza le possibili cause. Senza formazione ci si ferma ai sintomi.'],
      ['10.46 SWOT Analysis', 'Valutare forze e debolezze (INTERNE) e opportunità e minacce (ESTERNE). Vista ad alto livello; senza un contesto chiaro il risultato è sfocato.'],
      ['10.38 Risk Analysis and Management', 'Identificare le aree di incertezza che potrebbero incidere negativamente sul VALORE, valutarle e gestirle. Copre rischi strategici, tattici e operativi.'],
      ['10.28 Metrics and KPIs', 'Misurare la prestazione di soluzioni, componenti e questioni di interesse. Sei caratteristiche di un buon indicatore: clear, relevant, economical, adequate, quantifiable, trustworthy and credible.'],
      ['10.27 Lessons Learned', 'Compilare successi, opportunità di miglioramento, fallimenti e raccomandazioni per il futuro. Se si cerca il colpevole, la discussione onesta si spegne.']
    ]},

    { t: 'h3', v: 'Organizzare il lavoro e gli stakeholder' },
    { t: 'table', head: ['Tecnica', 'Scopo'], widths: [2800, 6200], rows: [
      ['10.2 Backlog Management', 'Registrare, tracciare e prioritizzare gli elementi di lavoro rimanenti. Un elemento entra se ha valore per uno stakeholder. Solo la cima si elabora in dettaglio.'],
      ['10.48 User Stories', 'Enunciato piccolo e conciso di funzionalità o qualità che porta valore a uno stakeholder specifico. Formato: chi / cosa / perché. NON serve per la conservazione della conoscenza a lungo termine né per l\'analisi dettagliata.'],
      ['10.43 Stakeholder List, Map, or Personas', 'Analizzare gli stakeholder e le loro caratteristiche, per identificare tutte le fonti di requisiti. Attenzione a riusare vecchie liste: il panorama cambia.']
    ]}
  ]
},

{
  id: 'B',
  title: 'Le 29 underlying competencies',
  weight: 'trasversale',
  questions: 'valutate dentro i nove domini',
  source: 'BABOK Guide, cap. 9',
  blocks: [
    { t: 'p', v: 'Il blueprint chiede purpose, definition ed effectiveness measures. Sei gruppi: sapere a quale gruppo appartiene una competenza è già una domanda d\'esame.' },

    { t: 'h3', v: '9.1 Analytical Thinking and Problem Solving — 7 competenze' },
    { t: 'table', head: ['Competenza', 'In una riga'], widths: [2600, 6400], rows: [
      ['Creative Thinking', 'Generare e considerare produttivamente idee nuove, e applicarle a problemi esistenti.'],
      ['Decision Making', 'Capire i criteri di una decisione e aiutare altri a decidere meglio. L\'incertezza residua si accetta consapevolmente.'],
      ['Learning', 'Assorbire rapidamente concetti nuovi, applicarli a nuove aree e presentarli agli altri. L\'apprendimento è un processo per TUTTI gli stakeholder.'],
      ['Problem Solving', 'Definire il problema perché sia chiaro a tutti, e risolvere la CAUSA RADICE evitando assunzioni non validate.'],
      ['Systems Thinking', 'Il tutto ha proprietà emergenti dall\'interazione fra i componenti, non prevedibili dai componenti soli.'],
      ['Conceptual Thinking', 'Collegare informazioni e pattern non ovviamente correlati, in astratto e nel quadro generale.'],
      ['Visual Thinking', 'Creare rappresentazioni grafiche perché gli stakeholder capiscano e forniscano input.']
    ]},

    { t: 'h3', v: '9.2 Behavioural Characteristics — 5 competenze' },
    { t: 'table', head: ['Competenza', 'In una riga'], widths: [2600, 6400], rows: [
      ['Ethics', 'Equità, considerazione e comportamento morale. Include la dichiarazione tempestiva dei conflitti di interesse e l\'onestà sulle proprie capacità.'],
      ['Personal Accountability', 'Pianificare il lavoro, completarlo come pianificato o RIPIANIFICARLO con motivazione e preavviso. Costruisce credibilità.'],
      ['Trustworthiness', 'La PERCEZIONE altrui di essere degni di fiducia. Si misura da come si comportano gli stakeholder: portano problemi, discutono temi difficili, non incolpano.'],
      ['Organization and Time Management', 'Prioritizzare i task, gestire il tempo, organizzare le informazioni accumulate per il riuso. Gli stakeholder devono sentire il proprio tempo ben speso.'],
      ['Adaptability', 'Cambiare tecniche, stile, metodi e approccio. Include il coraggio di agire diversamente dagli altri.']
    ]},

    { t: 'h3', v: '9.3 Business Knowledge — 5 competenze' },
    { t: 'p', v: 'Si distinguono per l\'OGGETTO della conoscenza: business in generale, settore, propria impresa, soluzione, metodologia.' },
    { t: 'table', head: ['Competenza', 'In una riga'], widths: [2600, 6400], rows: [
      ['Business Acumen', 'Comprendere i bisogni usando esperienza da altre situazioni: le organizzazioni condividono pratiche simili.'],
      ['Industry Knowledge', 'Trend, forze di mercato, processi chiave, prodotti, segmenti di clientela, regolamentazioni del settore.'],
      ['Organization Knowledge', 'Come l\'impresa genera profitti, la sua struttura, chi occupa le posizioni chiave, i canali formali E INFORMALI.'],
      ['Solution Knowledge', 'Conoscenza di una soluzione esistente e del mercato delle alternative. Include capire quando un cambiamento maggiore è giustificato dal beneficio.'],
      ['Methodology Knowledge', 'Le metodologie determinano timing, approccio, ruoli e livello di rischio accettato.']
    ]},

    { t: 'h3', v: '9.4 Communication Skills — 4 competenze' },
    { t: 'p', v: 'Comunicazione = l\'atto di trasmettere informazione in un modo che consegna il SIGNIFICATO INTESO.' },
    { t: 'table', head: ['Competenza', 'In una riga'], widths: [2600, 6400], rows: [
      ['Verbal Communication', 'Parole pronunciate; trasferisce anche segnali emotivi. Riformulare i concetti perché tutti capiscano la stessa cosa.'],
      ['Non-Verbal Communication', 'Trasmette più significato delle sole parole. Esserne consapevoli senza PRESUMERE di capire tutto; affrontare i disallineamenti fra verbale e non verbale.'],
      ['Written Communication', 'Testo, simboli, modelli e schizzi. Misura più esigente: il lettore sa riformulare il contenuto.'],
      ['Listening', 'Non solo udire le parole ma capirne il significato NEL CONTESTO. Attenzione indivisa, feedback, sospensione del giudizio.']
    ]},

    { t: 'h3', v: '9.5 Interaction Skills — 5 competenze' },
    { t: 'table', head: ['Competenza', 'In una riga'], widths: [2600, 6400], rows: [
      ['Facilitation', 'Moderare le discussioni perché tutti si esprimano e riconoscano i punti di vista altrui. Terzo neutrale, ma interviene quando serve.'],
      ['Leadership and Influencing', 'Motivare le persone verso obiettivi condivisi, comprendendo motivazioni e capacità individuali.'],
      ['Teamwork', 'Ambiente collaborativo, fiducia, senso condiviso di proprietà degli obiettivi. Include RISOLVERE i conflitti, non prevenirli.'],
      ['Negotiation and Conflict Resolution', 'Mediare perché le parti riconoscano le divergenze e arrivino a conclusioni condivise. I bisogni non sono sempre in opposizione; separare il problema dalle persone.'],
      ['Teaching', 'Condurre altri ad acquisire conoscenza, VERIFICANDO che sappiano dimostrarla.']
    ]},

    { t: 'h3', v: '9.6 Tools and Technology — 3 competenze' },
    { t: 'p', v: 'Office Productivity Tools (organizzare e comunicare informazioni) · Business Analysis Tools (modellare, documentare, tracciare requisiti) · Communication Tools (interazioni conversazionali e collaborative, team virtuali).' },

    { t: 'trap', v: 'Trappole tipiche · Facilitation, Teaching e Teamwork collocate fra le Communication Skills: appartengono alle Interaction Skills · Tecniche del cap. 10 presentate come competenze del cap. 9 · Systems Thinking e Conceptual Thinking confuse (proprietà emergenti contro collegamento di informazioni disparate) · Personal Accountability e Trustworthiness confuse (quello che fai contro come ti percepiscono).' }
  ]
}

];
