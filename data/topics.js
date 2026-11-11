/**
 * Pool domande delle sezioni trasversali: le 20 tecniche del capitolo 10 del
 * BABOK Guide e le 29 underlying competencies del capitolo 9.
 *
 * Tecniche e competenze non sono domini: il blueprint le valuta trasversalmente
 * dentro i nove domini. Restano quindi fuori dal pool della simulazione, che
 * altrimenti perderebbe la distribuzione ufficiale delle 50 domande, e servono
 * per l'allenamento mirato nelle due sezioni dedicate.
 *
 * Il campo `ref` è la sezione BABOK (es. '10.25' per Interviews, '9.5.1' per
 * Facilitation) e collega la domanda alla voce corrispondente in blueprint.js;
 * prende il posto di `domain` e `activity`. Gli altri campi seguono la
 * struttura descritta in data/questions.js.
 */
window.ECBA_TECHNIQUE_QUESTIONS = [
/* ===== 10.2 Backlog Management ===== */
  { id: 'T-10.2-1', ref: '10.2', style: 'knowledge', source: 'BABOK Guide, 10.2.1',
    stem: 'What is a backlog used for?',
    options: [
      { id: 'A', text: 'To record the decisions taken by the governance body.' },
      { id: 'B', text: 'To record, track, and prioritize remaining work items.' },
      { id: 'C', text: 'To store the approved requirements for future reuse.' },
      { id: 'D', text: 'To document the causes of defects found in testing.' }
    ], answer: 'B',
    explanation: 'Il backlog registra, traccia e prioritizza gli elementi di lavoro rimanenti. È anche una delle cinque tecniche fondazionali indicate da The Business Analysis Standard.' },
  { id: 'T-10.2-2', ref: '10.2', style: 'knowledge', source: 'BABOK Guide, 10.2.3',
    stem: 'Which of the following may appear as an item in a backlog?',
    options: [
      { id: 'A', text: 'Only user stories and functional requirements, since other kinds of work are tracked outside the backlog.' },
      { id: 'B', text: 'Only items that the sponsor has formally approved, so that the team never spends effort on unauthorized work.' },
      { id: 'C', text: 'Any kind of item with work associated with it, including defects, risk items, change requests, maintenance, or completing a document.' },
      { id: 'D', text: 'Only items small enough to be completed within the current iteration; any larger piece of work is kept in a separate long-term release plan.' }
    ], answer: 'C',
    explanation: 'Il backlog può contenere use case, user story, requisiti funzionali e non funzionali, design, ordini clienti, elementi di rischio, change request, difetti, rilavorazione pianificata, manutenzione, perfino tenere una presentazione o completare un documento. Il criterio di ammissione è uno solo: l\'elemento ha valore per uno stakeholder.' },
  { id: 'T-10.2-3', ref: '10.2', style: 'applied', source: 'BABOK Guide, 10.2.4',
    stem: 'A team elaborates and estimates in detail only the items near the top of the backlog. Is this correct practice?',
    options: [
      { id: 'A', text: 'Yes: items near the bottom reflect lower priorities and receive less attention and effort.' },
      { id: 'B', text: 'No: every backlog item must be estimated in detail before work begins, so that the full plan is known.' },
      { id: 'C', text: 'No: all items must be estimated at the same level of detail, otherwise the backlog cannot be compared.' },
      { id: 'D', text: 'Yes, but only in predictive approaches, where the full scope is fixed before delivery starts.' }
    ], answer: 'A',
    explanation: 'È uno dei punti di forza dichiarati della tecnica: solo gli elementi vicini alla cima vengono elaborati e stimati in dettaglio, mentre quelli in fondo riflettono priorità inferiori e ricevono meno attenzione e sforzo. Stimare tutto in dettaglio in anticipo sarebbe spreco.' },
  { id: 'T-10.2-4', ref: '10.2', style: 'knowledge', source: 'BABOK Guide, 10.2.4',
    stem: 'Which is a limitation of backlog management?',
    options: [
      { id: 'A', text: 'It cannot accommodate changing stakeholder priorities.' },
      { id: 'B', text: 'Large backlogs may become cumbersome and difficult to manage.' },
      { id: 'C', text: 'It prevents stakeholders from understanding what will be worked on.' },
      { id: 'D', text: 'It requires all items to be of the same type.' }
    ], answer: 'B',
    explanation: 'Fra i limiti il BABOK indica che backlog molto grandi diventano ingombranti e difficili da gestire, e che serve esperienza per scomporre il lavoro. {A} e {C} negano invece i punti di forza della tecnica: rispondere ai cambi di priorità e comunicare cosa sarà lavorato.' },
  { id: 'T-10.2-5', ref: '10.2', style: 'applied', source: 'BABOK Guide, 10.2.3',
    stem: 'A stakeholder asks why an item they consider useful has not been added to the backlog. What is the governing criterion?',
    options: [
      { id: 'A', text: 'An item is added if it has value to a stakeholder.' },
      { id: 'B', text: 'An item is added only if it has been costed by the delivery team.' },
      { id: 'C', text: 'An item is added only if it fits the current iteration.' },
      { id: 'D', text: 'An item is added only if the business analyst originated it.' }
    ], answer: 'A',
    explanation: 'Un elemento entra nel backlog se ha valore per uno stakeholder. Chi ha l\'autorità di aggiungerlo varia: può essere una singola persona o un comitato che decide per consenso.' },

  /* ===== 10.5 Brainstorming ===== */
  { id: 'T-10.5-1', ref: '10.5', style: 'knowledge', source: 'BABOK Guide, 10.5.1',
    stem: 'What is the aim of brainstorming?',
    options: [
      { id: 'A', text: 'To evaluate a shortlist of options against criteria agreed beforehand with the group.' },
      { id: 'B', text: 'To produce numerous new ideas and derive from them themes for further analysis.' },
      { id: 'C', text: 'To reach, through discussion, a decision that all participants can accept and support.' },
      { id: 'D', text: 'To identify and document the root causes of a problem that keeps recurring.' }
    ], answer: 'B',
    explanation: 'Il brainstorming favorisce il pensiero creativo con l\'obiettivo di produrre molte idee nuove e ricavarne temi per l\'analisi successiva. Generare non è valutare: la valutazione arriva dopo, con criteri stabiliti in preparazione.' },
  { id: 'T-10.5-2', ref: '10.5', style: 'knowledge', source: 'BABOK Guide, 10.5.3',
    stem: 'How many participants does the BABOK Guide suggest aiming for in a brainstorming session?',
    options: [
      { id: 'A', text: 'Two to three, so that every participant has time to explain each idea in depth' },
      { id: 'B', text: 'Six to eight, representing a range of backgrounds and experience with the topic' },
      { id: 'C', text: 'Fifteen to twenty, drawn mainly from the team that will build the solution' },
      { id: 'D', text: 'As many as possible, since a larger group always maximizes the number of ideas' }
    ], answer: 'B',
    explanation: 'La preparazione prevede di puntare a sei-otto partecipanti che rappresentino una gamma di background ed esperienze sul tema. Si stabiliscono anche una definizione chiara dell\'area di interesse, un limite di tempo, il facilitatore e i criteri di valutazione delle idee.' },
  { id: 'T-10.5-3', ref: '10.5', style: 'applied', source: 'BABOK Guide, 10.5.3',
    stem: 'During a brainstorming session a participant starts criticizing an idea just proposed. What should the facilitator do?',
    options: [
      { id: 'A', text: 'Allow it, since evaluating ideas as soon as they are raised saves time in later sessions.' },
      { id: 'B', text: 'Remind participants that ideas are shared without discussion, criticism, or evaluation during the session.' },
      { id: 'C', text: 'Ask the two participants to settle the disagreement offline and report back to the whole group once they have agreed.' },
      { id: 'D', text: 'Record the criticism as a separate idea so that it can be voted on with all the others.' }
    ], answer: 'B',
    explanation: 'Nella sessione le idee si condividono senza discussione, critica o valutazione, si registrano tutte in modo visibile e si incoraggiano i partecipanti a essere creativi e a costruire sulle idee altrui. Il BABOK indica fra i limiti proprio la necessità che i partecipanti accettino di non dibattere le idee durante il brainstorming.' },
  { id: 'T-10.5-4', ref: '10.5', style: 'knowledge', source: 'BABOK Guide, 10.5.4',
    stem: 'Which is a strength of brainstorming?',
    options: [
      { id: 'A', text: 'It guarantees that the best idea will be identified, because every option raised is debated in depth by the group.' },
      { id: 'B', text: 'A non-judgmental environment enables creative thinking, and many ideas can be elicited in a short time.' },
      { id: 'C', text: 'It removes the need for a facilitator, since participants manage the session among themselves.' },
      { id: 'D', text: 'It works equally well regardless of how willing or creative the individual participants are.' }
    ], answer: 'B',
    explanation: 'I punti di forza sono la capacità di elicitare molte idee in poco tempo, l\'ambiente non giudicante che abilita il pensiero creativo e l\'utilità nel ridurre la tensione fra i partecipanti in un workshop. {D} contraddice un limite esplicito: la partecipazione dipende dalla creatività e dalla disponibilità individuale.' },
  { id: 'T-10.5-5', ref: '10.5', style: 'knowledge', source: 'BABOK Guide, 10.5.4',
    stem: 'Which factor is identified as a limitation of brainstorming?',
    options: [
      { id: 'A', text: 'Organizational and interpersonal politics may limit overall participation.' },
      { id: 'B', text: 'It can only be used when all participants are in the same room at the same time.' },
      { id: 'C', text: 'It tends to produce too few ideas to be useful for further analysis.' },
      { id: 'D', text: 'It requires specialized software to record and cluster the ideas.' }
    ], answer: 'A',
    explanation: 'Fra i limiti: la partecipazione dipende dalla creatività e dalla volontà individuale, le dinamiche politiche organizzative e interpersonali possono limitarla, e i partecipanti devono accettare di non dibattere le idee sollevate.' },

  /* ===== 10.6 Business Capability Analysis ===== */
  { id: 'T-10.6-1', ref: '10.6', style: 'knowledge', source: 'BABOK Guide, 10.6.1',
    stem: 'What does business capability analysis provide?',
    options: [
      { id: 'A', text: 'A framework for scoping and planning that generates shared understanding of outcomes, identifies alignment with strategy, and provides a scope and prioritization filter.' },
      { id: 'B', text: 'A detailed graphical description of how each business process is executed, step by step, showing the activities, the roles that perform them, and the flow between them.' },
      { id: 'C', text: 'A ranked list of the remaining work items, recorded and tracked so that the team always knows what to tackle next.' },
      { id: 'D', text: 'An assessment of the organization\'s internal strengths and weaknesses and of the external opportunities and threats it faces, used to frame strategy.' }
    ], answer: 'A',
    explanation: 'La business capability analysis offre un framework per scoping e pianificazione: crea una comprensione condivisa degli outcome, individua l\'allineamento con la strategia e fa da filtro di scope e prioritizzazione. È il purpose della tecnica nel BABOK. {D} descrive la SWOT Analysis (10.46), {C} il backlog (10.2), {B} il process modelling (10.35).' },
  { id: 'T-10.6-2', ref: '10.6', style: 'knowledge', source: 'BABOK Guide, 10.6.3',
    stem: 'How does the BABOK Guide define capabilities?',
    options: [
      { id: 'A', text: 'The detailed sequence of steps by which the enterprise performs its work, including who carries out each step and in what order.' },
      { id: 'B', text: 'The abilities of an enterprise to perform or transform something that helps achieve a business goal or objective.' },
      { id: 'C', text: 'The technologies and systems the enterprise has deployed, together with the infrastructure that supports them.' },
      { id: 'D', text: 'The skills and certifications held by individual employees, recorded so that people can be assigned to suitable work.' }
    ], answer: 'B',
    explanation: 'Le capability descrivono lo scopo o l\'esito della prestazione o trasformazione, non il modo in cui viene eseguita. È la distinzione chiave con i processi: la capability dice cosa l\'organizzazione sa fare, il processo come lo fa.' },
  { id: 'T-10.6-3', ref: '10.6', style: 'knowledge', source: 'BABOK Guide, 10.6.3',
    stem: 'How many times does a given capability appear on a capability map?',
    options: [
      { id: 'A', text: 'Once for each business unit that possesses it, so ownership is visible.' },
      { id: 'B', text: 'Only once, even if it is possessed by multiple business units.' },
      { id: 'C', text: 'Once for each business process that relies on it to deliver its outputs.' },
      { id: 'D', text: 'Once for each business goal or objective it helps the enterprise achieve.' }
    ], answer: 'B',
    explanation: 'Ogni capability compare una sola volta sulla mappa, anche se posseduta da più unità di business. È ciò che rende la mappa una vista dell\'impresa e non dell\'organigramma.' },
  { id: 'T-10.6-4', ref: '10.6', style: 'knowledge', source: 'BABOK Guide, 10.6.3',
    stem: 'How do capabilities impact value?',
    options: [
      { id: 'A', text: 'By increasing or protecting revenue, reducing or preventing cost, improving service, achieving compliance, or positioning the company for the future.' },
      { id: 'B', text: 'Only by reducing operating cost, since the value of a capability is measured solely by the savings it produces in the organization\'s day-to-day operations.' },
      { id: 'C', text: 'Only by generating new revenue streams, since capabilities that do not bring in new income are considered to have no value.' },
      { id: 'D', text: 'Equally, since every capability on the map carries the same level of value and none can be ranked above the others for prioritization.' }
    ], answer: 'A',
    explanation: 'Sono i cinque modi elencati dal BABOK. Il testo aggiunge esplicitamente che non tutte le capability hanno lo stesso livello di valore, il che smentisce {D} ed è il presupposto per usarle come filtro di prioritizzazione.' },
  { id: 'T-10.6-5', ref: '10.6', style: 'knowledge', source: 'BABOK Guide, 10.6.4',
    stem: 'Which is a limitation of business capability analysis?',
    options: [
      { id: 'A', text: 'It cannot be used to assess new products and services.' },
      { id: 'B', text: 'It requires an organization to agree to collaborate on the model.' },
      { id: 'C', text: 'It applies only to technology initiatives.' },
      { id: 'D', text: 'It produces results that cannot be aligned with the organization\'s strategy.' }
    ], answer: 'B',
    explanation: 'Il limite indicato è che l\'organizzazione deve accettare di collaborare al modello. Fra i punti di forza c\'è invece proprio l\'utilità nel valutare la capacità di un\'organizzazione di offrire nuovi prodotti e servizi, che {A} nega.' },

  /* ===== 10.9 Business Rules Analysis ===== */
  { id: 'T-10.9-1', ref: '10.9', style: 'knowledge', source: 'BABOK Guide, 10.9.1',
    stem: 'What is business rules analysis used for?',
    options: [
      { id: 'A', text: 'To identify, express, validate, refine, and organize the rules that shape day-to-day business behaviour and guide operational business decision making.' },
      { id: 'B', text: 'To describe the entities, classes, or data objects relevant to a domain, the attributes used to describe them, and the relationships that exist among them.' },
      { id: 'C', text: 'To assess a business process for its efficiency and effectiveness and to identify the opportunities for change that would improve it.' },
      { id: 'D', text: 'To define the boundaries of a change and place the relevant elements inside or outside them, so that everyone knows what is in scope.' }
    ], answer: 'A',
    explanation: 'La business rules analysis serve a identificare, esprimere, convalidare, raffinare e organizzare le regole che plasmano il comportamento quotidiano del business e guidano le decisioni operative: è il purpose della tecnica nel BABOK. {B} è Data Modelling (10.15), {C} Process Analysis (10.34), {D} Scope Modelling (10.41).' },
  { id: 'T-10.9-2', ref: '10.9', style: 'knowledge', source: 'BABOK Guide, 10.9.3',
    stem: 'How should business rules be expressed and managed?',
    options: [
      { id: 'A', text: 'Embedded directly in the software systems that enforce them, which guarantees that every rule is applied consistently.' },
      { id: 'B', text: 'Independently of any implementation technology, since they need to be available for reference by business people.' },
      { id: 'C', text: 'Only within the process models where they apply, so that each rule stays next to the activity that uses it.' },
      { id: 'D', text: 'Only in the contracts or regulations that impose them, since those documents are the authoritative source.' }
    ], answer: 'B',
    explanation: 'Le regole vanno espresse e gestite indipendentemente dalla tecnologia di implementazione perché devono restare consultabili dalle persone di business, e perché a volte sono implementate in più punti. Richiedono inoltre uso coerente dei termini di business e un glossario delle definizioni.' },
  { id: 'T-10.9-3', ref: '10.9', style: 'knowledge', source: 'BABOK Guide, 10.9.4',
    stem: 'Which is a strength of business rules analysis?',
    options: [
      { id: 'A', text: 'It removes the need for process models, because the rules alone fully describe how the work is carried out.' },
      { id: 'B', text: 'Clearly defining and managing business rules allows organizations to change policy without altering processes or systems.' },
      { id: 'C', text: 'It guarantees that rules will never contradict one another, even when they are combined without being validated.' },
      { id: 'D', text: 'It automatically eliminates all ambiguity from the business vocabulary, so a glossary of business terms is no longer required.' }
    ], answer: 'B',
    explanation: 'È uno dei punti di forza: separare le regole permette di cambiare policy senza toccare processi o sistemi. Un repository centralizzato consente inoltre il riuso a livello aziendale. {C} contraddice un limite esplicito: le regole possono contraddirsi se non validate le une contro le altre.' },
  { id: 'T-10.9-4', ref: '10.9', style: 'knowledge', source: 'BABOK Guide, 10.9.4',
    stem: 'Which is a limitation of business rules analysis?',
    options: [
      { id: 'A', text: 'Organizations may produce lengthy lists of ambiguous business rules.' },
      { id: 'B', text: 'Business rules cannot be reused across the organization once defined.' },
      { id: 'C', text: 'Business rules cannot be changed once they have been implemented.' },
      { id: 'D', text: 'Business rules apply only to organizations in regulated industries.' }
    ], answer: 'A',
    explanation: 'Fra i limiti: liste lunghe di regole ambigue, regole che si contraddicono o producono risultati imprevisti se combinate senza validazione reciproca, e regole di scarsa qualità quando il vocabolario disponibile non è abbastanza ricco, comprensibile o ben organizzato.' },
  { id: 'T-10.9-5', ref: '10.9', style: 'applied', source: 'BABOK Guide, 10.9.3',
    stem: 'Before documenting a set of business rules, a business analysis professional builds a glossary of the underlying business concepts. Why?',
    options: [
      { id: 'A', text: 'Because a formal glossary must be signed off by the sponsor before any business rule or requirement can be approved.' },
      { id: 'B', text: 'Because business rules require consistent use of business terms and an understanding of the structural connections among the concepts.' },
      { id: 'C', text: 'Because the glossary replaces the need for a data model, so the entities and the relationships between them no longer have to be described.' },
      { id: 'D', text: 'Because regulators require a glossary of business terms for auditing purposes, regardless of what the rules contain.' }
    ], answer: 'B',
    explanation: 'Le business rule richiedono uso coerente dei termini, un glossario delle definizioni dei concetti sottostanti e la comprensione delle connessioni strutturali fra i concetti; è spesso consigliato riusare terminologia esistente da associazioni di settore o glossari interni. Un vocabolario povero produce regole povere.' },
/* ===== 10.10 Collaborative Games ===== */
  { id: 'T-10.10-1', ref: '10.10', style: 'knowledge', source: 'BABOK Guide, 10.10.1',
    stem: 'What do collaborative games encourage?',
    options: [
      { id: 'A', text: 'Participants in an elicitation activity to collaborate in building a joint understanding of a problem or a solution.' },
      { id: 'B', text: 'Competition between stakeholder groups, so that the strongest ideas surface and the weaker ones are discarded early.' },
      { id: 'C', text: 'Individual reflection by each participant before the group takes a decision, without any interaction between them.' },
      { id: 'D', text: 'Formal sign-off of the requirements by all participants at the end of a structured elicitation session.' }
    ], answer: 'A',
    explanation: 'Il nome inganna: l\'obiettivo non è competere ma costruire insieme una comprensione condivisa del problema o della soluzione. Ogni gioco ha uno scopo definito, di solito comprendere meglio un problema o stimolare soluzioni creative.' },
  { id: 'T-10.10-2', ref: '10.10', style: 'knowledge', source: 'BABOK Guide, 10.10.3',
    stem: 'What structure do collaborative games typically follow?',
    options: [
      { id: 'A', text: 'A single unstructured discussion with no time limits, in which participants are free to raise any topic they consider relevant.' },
      { id: 'B', text: 'A process or set of rules with at least three steps, often time-limited, starting with an opening step in which participants learn the rules and begin generating ideas.' },
      { id: 'C', text: 'A sequence of one-to-one interviews with each participant, followed by a plenary session in which the facilitator presents the combined results to the whole group.' },
      { id: 'D', text: 'A vote on the options proposed by the sponsor, followed by an open debate in which participants justify their choice and agree on a final ranking.' }
    ], answer: 'B',
    explanation: 'Ogni tipo di gioco ha un processo o insieme di regole che, se seguite, lo mantengono in movimento verso l\'obiettivo; i giochi hanno tipicamente almeno tre passi e ogni passo è spesso limitato nel tempo. Il facilitatore aiuta i partecipanti a capire lo scopo e a realizzarlo.' },
  { id: 'T-10.10-3', ref: '10.10', style: 'knowledge', source: 'BABOK Guide, 10.10.4',
    stem: 'Which is a strength of collaborative games?',
    options: [
      { id: 'A', text: 'They guarantee that the conclusions reached are correct, because every participant has contributed to them.' },
      { id: 'B', text: 'They may reveal hidden assumptions or differences of opinion and challenge normally quiet participants to take a more active role.' },
      { id: 'C', text: 'They shorten every elicitation activity, since the rules of the game replace the need for preparation.' },
      { id: 'D', text: 'They are suitable for every organizational culture, as the playful format puts every kind of participant at ease from the start.' }
    ], answer: 'B',
    explanation: 'Fra i punti di forza: rivelare assunzioni nascoste o divergenze di opinione, incoraggiare il pensiero creativo stimolando processi mentali alternativi, spingere i partecipanti normalmente silenziosi a un ruolo più attivo, ed esporre business need non soddisfatti. {A} e {D} contraddicono limiti espliciti.' },
  { id: 'T-10.10-4', ref: '10.10', style: 'applied', source: 'BABOK Guide, 10.10.4',
    stem: 'A business analysis professional proposes a collaborative game to a group of senior executives from a formal corporate culture. What risk should be considered?',
    options: [
      { id: 'A', text: 'The playful nature of games may be perceived as silly and make participants with reserved personalities or cultural norms uncomfortable.' },
      { id: 'B', text: 'Games cannot elicit business needs, so they would add nothing to what the executives could say in an interview.' },
      { id: 'C', text: 'Games require specialized software licences that a formal corporate environment would be unlikely to approve.' },
      { id: 'D', text: 'Games always take longer than interviews, so the executives\' limited time would be better spent answering the analyst\'s questions directly.' }
    ], answer: 'A',
    explanation: 'È il primo limite elencato. Gli altri: i giochi possono richiedere tempo ed essere percepiti come improduttivi, specie se obiettivi e risultati non sono chiari, e la partecipazione di gruppo può generare falsa fiducia nelle conclusioni raggiunte.' },
  { id: 'T-10.10-5', ref: '10.10', style: 'knowledge', source: 'BABOK Guide, 10.10.4',
    stem: 'Which risk does the BABOK Guide associate with group participation in collaborative games?',
    options: [
      { id: 'A', text: 'It can lead to a false sense of confidence in the conclusions reached.' },
      { id: 'B', text: 'It prevents creative thinking by forcing everyone to agree.' },
      { id: 'C', text: 'It excludes reserved participants by design, since only the most vocal take part.' },
      { id: 'D', text: 'It makes the results impossible to document in a usable form.' }
    ], answer: 'A',
    explanation: 'La partecipazione di gruppo può creare una falsa sensazione di sicurezza nelle conclusioni raggiunte: il consenso della sala non è di per sé una prova. Le conclusioni di un gioco vanno confermate come qualunque altro risultato di elicitation.' },

  /* ===== 10.15 Data Modelling ===== */
  { id: 'T-10.15-1', ref: '10.15', style: 'knowledge', source: 'BABOK Guide, 10.15.1',
    stem: 'What does a data model describe?',
    options: [
      { id: 'A', text: 'The entities, classes or data objects relevant to a domain, the attributes describing them, and the relationships among them, providing a common set of semantics.' },
      { id: 'B', text: 'The sequence in which work is performed across roles, showing the activities, the decisions taken along the way, and the hand-offs between the participants involved.' },
      { id: 'C', text: 'The rules that govern operational business decisions, expressed independently of the technology that will enforce them in the solution.' },
      { id: 'D', text: 'The boundaries of the change, placing each element of the solution inside or outside them so that stakeholders agree on what is in scope.' }
    ], answer: 'A',
    explanation: 'La semantica condivisa per analisi e implementazione è la chiave del data model. {B} è il process model (10.35), {C} la business rules analysis (10.9), {D} lo scope model (10.41).' },
  { id: 'T-10.15-2', ref: '10.15', style: 'knowledge', source: 'BABOK Guide, 10.15.3',
    stem: 'What may an entity in a data model represent?',
    options: [
      { id: 'A', text: 'Only physical objects that the organization stores and manages.' },
      { id: 'B', text: 'Something physical, organizational, abstract, or an event.' },
      { id: 'C', text: 'Only the tables of the underlying database.' },
      { id: 'D', text: 'Only the roles that interact with the solution.' }
    ], answer: 'B',
    explanation: 'Un\'entità può rappresentare qualcosa di fisico (un magazzino), di organizzativo (un\'area di vendita), di astratto (una linea di prodotto) o un evento (un appuntamento). Contiene attributi e ha relazioni con altre entità.' },
  { id: 'T-10.15-3', ref: '10.15', style: 'knowledge', source: 'BABOK Guide, 10.15.3',
    stem: 'What distinguishes a class in a class diagram from an entity in a data model?',
    options: [
      { id: 'A', text: 'A class has no attributes, only the operations that can be performed on it.' },
      { id: 'B', text: 'A class also contains operations or functions describing what can be done with it.' },
      { id: 'C', text: 'A class cannot have relationships with other classes, unlike an entity in a data model.' },
      { id: 'D', text: 'A class can only represent physical objects, while an entity can also represent concepts.' }
    ], answer: 'B',
    explanation: 'Come un\'entità, una classe contiene attributi e ha relazioni; in più contiene operazioni o funzioni che descrivono cosa si può fare con essa, come generare una fattura. È la differenza da ricordare fra i due formalismi.' },
  { id: 'T-10.15-4', ref: '10.15', style: 'knowledge', source: 'BABOK Guide, 10.15.4',
    stem: 'Which is a strength of data modelling?',
    options: [
      { id: 'A', text: 'It can define and communicate a consistent vocabulary used by domain SMEs and implementation SMEs.' },
      { id: 'B', text: 'It removes the need to validate the requirements with stakeholders, since the model itself proves that they are correct.' },
      { id: 'C', text: 'It documents the sequence of activities in a process and the roles responsible for performing each of them.' },
      { id: 'D', text: 'It is understandable without any training, even for stakeholders who have never worked with models.' }
    ], answer: 'A',
    explanation: 'Il modello dati definisce e comunica un vocabolario coerente fra SME di dominio e SME di implementazione; la revisione di un modello dati logico aiuta inoltre a garantire che il disegno logico dei dati persistenti rappresenti correttamente il business need.' },
  { id: 'T-10.15-5', ref: '10.15', style: 'applied', source: 'BABOK Guide, 10.15.3',
    stem: 'Two departments use the word "account" to mean different things, and this keeps causing misunderstandings. Which technique addresses the problem most directly?',
    options: [
      { id: 'A', text: 'Data Modelling, which provides a common set of semantics for the domain.' },
      { id: 'B', text: 'Backlog Management, which prioritizes the clarification work.' },
      { id: 'C', text: 'Lessons Learned, which captures the misunderstanding for future projects.' },
      { id: 'D', text: 'SWOT Analysis, which surfaces internal weaknesses.' }
    ], answer: 'A',
    explanation: 'Il data model fornisce un insieme comune di semantiche per analisi e implementazione, ed è indicato proprio per definire e comunicare un vocabolario coerente fra gruppi diversi. Un termine che significa cose diverse in due reparti è un problema di semantica condivisa.' },

  /* ===== 10.18 Document Analysis ===== */
  { id: 'T-10.18-1', ref: '10.18', style: 'knowledge', source: 'BABOK Guide, 10.18.1',
    stem: 'What is document analysis used for?',
    options: [
      { id: 'A', text: 'To elicit information, such as contextual understanding and requirements, by examining existing materials that describe the business environment or organizational assets.' },
      { id: 'B', text: 'To confirm the elicitation results with the stakeholders who provided them, checking that the information is accurate, complete, and consistent with what they meant.' },
      { id: 'C', text: 'To generate numerous new ideas about a problem in a group session and to derive from them themes for further analysis by the team.' },
      { id: 'D', text: 'To measure how a solution and its components are performing against the goals and objectives that the stakeholders defined for the change.' }
    ], answer: 'A',
    explanation: 'La document analysis serve a elicitare informazioni di business analysis, compresi il contesto e i requisiti, esaminando i materiali disponibili sull\'ambiente di business o sugli asset organizzativi esistenti: è il purpose della tecnica nel BABOK. Appartiene all\'elicitation di tipo research, perché si studiano materiali esistenti invece di interagire con le persone. {B} è il task Confirm Elicitation Results (4.3), {C} il brainstorming (10.5), {D} il compito di Metrics and Key Performance Indicators (10.28).' },
  { id: 'T-10.18-2', ref: '10.18', style: 'knowledge', source: 'BABOK Guide, 10.18.3',
    stem: 'What do business analysts consider when assessing source documents for analysis?',
    options: [
      { id: 'A', text: 'Only whether the document is the most recent version available, since older versions are never useful for analysis.' },
      { id: 'B', text: 'Whether the content is relevant, current, genuine, and credible, and whether it is understandable and can be easily conveyed to stakeholders.' },
      { id: 'C', text: 'Only whether the original author is still available to answer questions, since a document whose author has left the organization cannot be trusted.' },
      { id: 'D', text: 'Only whether the document is publicly available, since proprietary sources cannot be used as elicitation material.' }
    ], answer: 'B',
    explanation: 'I materiali possono provenire da fonti pubbliche o proprietarie; nel valutarli si considerano rilevanza, attualità, autenticità e credibilità del contenuto, la sua comprensibilità e trasmissibilità agli stakeholder, e si definiscono i dati da estrarre e i cluster di dati raggruppati per relazioni logiche.' },
  { id: 'T-10.18-3', ref: '10.18', style: 'knowledge', source: 'BABOK Guide, 10.18.4',
    stem: 'Which is a strength of document analysis?',
    options: [
      { id: 'A', text: 'The business analyst does not need to create content, and existing sources can be used as a point of reference to determine what has changed.' },
      { id: 'B', text: 'It reveals information that nobody has yet written down, such as the tacit knowledge held by experienced staff.' },
      { id: 'C', text: 'It guarantees that the information is current, because documents are always updated whenever the process changes.' },
      { id: 'D', text: 'It removes the need for stakeholder collaboration, since everything the analyst needs can be found in the existing material.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: il materiale esistente fa da base per l\'analisi, l\'analista non deve crearlo, le fonti anche datate servono come riferimento per capire cosa è cambiato, e i risultati possono validare quelli di altre tecniche. {C} contraddice il primo limite: la documentazione può essere obsoleta o non valida.' },
  { id: 'T-10.18-4', ref: '10.18', style: 'knowledge', source: 'BABOK Guide, 10.18.4',
    stem: 'Which is a limitation of document analysis?',
    options: [
      { id: 'A', text: 'It is primarily helpful only for evaluating the current state, via review of as-is documentation, and authors may not be available for questions.' },
      { id: 'B', text: 'It cannot be used alongside other elicitation techniques, because its results would inevitably conflict with what the stakeholders themselves say.' },
      { id: 'C', text: 'It requires the participation of all stakeholders, who must review each document together with the business analyst.' },
      { id: 'D', text: 'Its findings cannot be reused in later analysis, since documents are examined only once and then set aside.' }
    ], answer: 'A',
    explanation: 'Fra i limiti: documentazione obsoleta o non valida (scorretta, incompleta, illeggibile, non revisionata o non approvata), autori non disponibili per chiarimenti, e utilità prevalentemente limitata alla valutazione dello stato attuale attraverso la documentazione as-is.' },
  { id: 'T-10.18-5', ref: '10.18', style: 'applied', source: 'BABOK Guide, 10.18.4',
    stem: 'A business analysis professional has completed interviews and now reviews the existing procedure manuals covering the same process. What additional benefit does this provide?',
    options: [
      { id: 'A', text: 'The results can be used to validate against the results of other requirements elicitation techniques.' },
      { id: 'B', text: 'It replaces the need to confirm the interview results with the stakeholders who were interviewed.' },
      { id: 'C', text: 'It guarantees that the interviews were conducted correctly and that no question was left out.' },
      { id: 'D', text: 'It transfers responsibility for the accuracy of the requirements from the analyst to the document authors.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza della document analysis c\'è che i risultati possono essere usati per validare quelli di altre tecniche di elicitation: incrociare fonti diverse è il modo tipico per scoprire incoerenze.' },

  /* ===== 10.25 Interviews ===== */
  { id: 'T-10.25-1', ref: '10.25', style: 'knowledge', source: 'BABOK Guide, 10.25.1',
    stem: 'Besides eliciting information, what is an interview also used for?',
    options: [
      { id: 'A', text: 'Establishing relationships and building trust between business analysts and stakeholders.' },
      { id: 'B', text: 'Approving the requirements collected, so that the interviewee signs off on them at the end of the session.' },
      { id: 'C', text: 'Measuring solution performance by asking stakeholders to rate how well the solution works.' },
      { id: 'D', text: 'Prioritizing the backlog together with the interviewee before the next iteration begins.' }
    ], answer: 'A',
    explanation: 'L\'intervista è un approccio sistematico per elicitare informazioni parlando con una o più persone, ma il purpose cita esplicitamente anche lo stabilire relazioni e costruire fiducia: è il "rapport" richiesto dall\'activity statement 5.1 dell\'ECBA.' },
  { id: 'T-10.25-2', ref: '10.25', style: 'knowledge', source: 'BABOK Guide, 10.25.3',
    stem: 'How are potential interviewees identified?',
    options: [
      { id: 'A', text: 'By the business analyst alone, so that the choice of interviewees remains independent of any stakeholder\'s influence.' },
      { id: 'B', text: 'With the help of the project manager, project sponsors, and other stakeholders, based on the goals for the interview.' },
      { id: 'C', text: 'By seniority within the organization, starting from the most senior managers affected by the change.' },
      { id: 'D', text: 'By random sampling of the affected population, so that every group has the same chance of being heard.' }
    ], answer: 'B',
    explanation: 'Gli intervistati potenziali si identificano con l\'aiuto del project manager, degli sponsor e di altri stakeholder, in base agli obiettivi dell\'intervista. Prima si definiscono gli obiettivi — complessivi e per singola intervista — poi si sceglie chi può soddisfarli.' },
  { id: 'T-10.25-3', ref: '10.25', style: 'knowledge', source: 'BABOK Guide, 10.25.4',
    stem: 'Which is a strength of interviews?',
    options: [
      { id: 'A', text: 'They allow interviewees to express opinions in private that they may be reluctant to express in public, especially when results are kept confidential.' },
      { id: 'B', text: 'They require less time than any other elicitation technique, since a single conversation with each person is enough to collect all the information needed.' },
      { id: 'C', text: 'They produce a shared understanding among all the stakeholders at once, since everyone hears the same answers at the same time.' },
      { id: 'D', text: 'They eliminate the risk of bias in the responses, because the interviewer asks the same questions to every participant.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: incoraggiano la partecipazione e costruiscono rapport, permettono discussioni complete, consentono di osservare il comportamento non verbale, permettono domande di approfondimento e consentono opinioni in privato che non si esprimerebbero in pubblico. {C} descrive invece un punto di forza dei workshop.' },
  { id: 'T-10.25-4', ref: '10.25', style: 'knowledge', source: 'BABOK Guide, 10.25.3',
    stem: 'On what basis are interview questions designed?',
    options: [
      { id: 'A', text: 'On the interviewee\'s seniority, so that senior stakeholders are asked broader questions than other participants.' },
      { id: 'B', text: 'According to the interview goals, such as collecting data or researching the stakeholder\'s view of the change.' },
      { id: 'C', text: 'On a standard questionnaire reused across initiatives, so that answers can be compared from one project to the next.' },
      { id: 'D', text: 'Only on the questions left unanswered in previous interviews, so that no time is spent on topics already covered.' }
    ], answer: 'B',
    explanation: 'Le domande si progettano in base agli obiettivi dell\'intervista, che vanno espressi chiaramente e comunicati a ciascun intervistato. Un questionario standard riusato ovunque ({C}) ignorerebbe gli obiettivi specifici.' },
  { id: 'T-10.25-5', ref: '10.25', style: 'applied', source: 'BABOK Guide, 10.25.4',
    stem: 'A business analysis professional must elicit information from 40 stakeholders and has two weeks. What limitation of interviews is relevant?',
    options: [
      { id: 'A', text: 'Significant time is required to plan and conduct interviews.' },
      { id: 'B', text: 'Interviews cannot be used with more than ten people in total.' },
      { id: 'C', text: 'Interviews do not allow follow-up questions.' },
      { id: 'D', text: 'Interviews cannot establish rapport at scale.' }
    ], answer: 'A',
    explanation: 'Il tempo significativo richiesto per pianificarle e condurle è il limite dichiarato: con numeri alti conviene valutare workshop, survey o una combinazione di tecniche. La domanda mette alla prova la capacità di scegliere la tecnica in base al contesto, non in astratto.' },
/* ===== 10.27 Lessons Learned ===== */
  { id: 'T-10.27-1', ref: '10.27', style: 'knowledge', source: 'BABOK Guide, 10.27.1',
    stem: 'What is the purpose of the lessons learned process?',
    options: [
      { id: 'A', text: 'To compile and document successes, opportunities for improvement, failures, and recommendations for improving future projects or phases.' },
      { id: 'B', text: 'To identify and evaluate the underlying causes of a specific problem, so that the team can remove them before the next phase starts.' },
      { id: 'C', text: 'To assess whether the delivered solution met its acceptance criteria, so that the sponsor can decide whether to accept it formally.' },
      { id: 'D', text: 'To evaluate the performance of individual team members, so that the people responsible for failures can be identified and coached.' }
    ], answer: 'A',
    explanation: 'Il processo di lessons learned serve a compilare e documentare successi, opportunità di miglioramento, fallimenti e raccomandazioni per migliorare le prestazioni di progetti o fasi futuri: è il purpose della tecnica nel BABOK. Non è una valutazione delle persone ({D}) né l\'analisi delle cause di un singolo problema ({B}, che è Root Cause Analysis 10.40); verificare i criteri di accettazione ({C}) riguarda la soluzione, non il modo in cui si è lavorato.' },
  { id: 'T-10.27-2', ref: '10.27', style: 'knowledge', source: 'BABOK Guide, 10.27.3',
    stem: 'What may a lessons learned session review?',
    options: [
      { id: 'A', text: 'Only the final solution delivered, since the way the work was carried out is reviewed separately by the project manager.' },
      { id: 'B', text: 'Business analysis activities and deliverables, the final solution, technology changes, process impacts, results and variances, root causes, and recommendations.' },
      { id: 'C', text: 'Only the budget and schedule variances, because cost and time are the measures that the sponsor uses to judge whether a project or phase succeeded.' },
      { id: 'D', text: 'Only the defects found after go-live, which are the most reliable evidence of what should be done differently next time.' }
    ], answer: 'B',
    explanation: 'La sessione ha uno spettro ampio: comprende esplicitamente anche le attività e i deliverable di business analysis, non solo il prodotto finale. Le opzioni che iniziano con "only" restringono indebitamente il campo.' },
  { id: 'T-10.27-3', ref: '10.27', style: 'knowledge', source: 'BABOK Guide, 10.27.4',
    stem: 'Which is a strength of lessons learned?',
    options: [
      { id: 'A', text: 'It assists in building team morale after a difficult period and reinforces positive experiences and successes.' },
      { id: 'B', text: 'It identifies who was responsible for each failure, so that accountability is clear for future projects.' },
      { id: 'C', text: 'It guarantees that the same problems will not recur in later projects or phases of the initiative.' },
      { id: 'D', text: 'It replaces the need for performance measures, since the team\'s own judgement of how the phase went is sufficient.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: identificare opportunità e aree di miglioramento, costruire il morale del team dopo un periodo difficile, rinforzare le esperienze positive, ridurre i rischi per azioni future, fornire valore o metriche tangibili e riconoscere punti di forza o carenze di struttura, metodologia e strumenti.' },
  { id: 'T-10.27-4', ref: '10.27', style: 'applied', source: 'BABOK Guide, 10.27.4',
    stem: 'During a lessons learned session participants start assigning blame for a missed deadline. Why is this a problem?',
    options: [
      { id: 'A', text: 'Honest discussion may not occur if participants try to assign blame, and they may become reluctant to document and discuss problems.' },
      { id: 'B', text: 'Blame falls outside the scope of business analysis governance, so the facilitator has no authority to discuss it.' },
      { id: 'C', text: 'The session should only review positive outcomes, leaving problems and failures to a separate meeting with the management of the initiative.' },
      { id: 'D', text: 'Only the project manager may attribute responsibility for missed deadlines, and only in a private conversation.' }
    ], answer: 'A',
    explanation: 'È il primo limite elencato: la ricerca del colpevole spegne la discussione onesta. Il BABOK aggiunge che può servire una facilitazione proattiva per mantenere la discussione centrata su soluzioni e opportunità di miglioramento.' },
  { id: 'T-10.27-5', ref: '10.27', style: 'knowledge', source: 'BABOK Guide, 10.27.4',
    stem: 'What may be required to keep a lessons learned session productive?',
    options: [
      { id: 'A', text: 'Proactive facilitation, to ensure discussions remain focused on solutions and improvement opportunities.' },
      { id: 'B', text: 'The absence of the project manager, so that team members feel free to criticize decisions openly.' },
      { id: 'C', text: 'A written questionnaire completed in advance by each participant, replacing the group discussion altogether.' },
      { id: 'D', text: 'Complete anonymity of all contributions, so that nobody can tell who raised which problem.' }
    ], answer: 'A',
    explanation: 'Il BABOK indica esplicitamente che può servire una facilitazione proattiva per tenere la discussione focalizzata su soluzioni e miglioramenti, dato che i partecipanti possono essere riluttanti a documentare e discutere i problemi.' },

  /* ===== 10.28 Metrics and KPIs ===== */
  { id: 'T-10.28-1', ref: '10.28', style: 'knowledge', source: 'BABOK Guide, 10.28.1',
    stem: 'What do metrics and key performance indicators measure?',
    options: [
      { id: 'A', text: 'The performance of solutions, solution components, and other matters of interest to stakeholders.' },
      { id: 'B', text: 'The relationships between requirements and the work products that implement them, from the need to the solution.' },
      { id: 'C', text: 'The boundaries of the change and what lies inside or outside them.' },
      { id: 'D', text: 'The roles, responsibilities, and reporting structures of the organization.' }
    ], answer: 'A',
    explanation: 'Metriche e KPI misurano la prestazione di soluzioni, componenti di soluzione e altre questioni di interesse per gli stakeholder: è il purpose della tecnica nel BABOK. {B} descrive la traceability, {C} lo scope modelling (10.41), {D} l\'organizational modelling (10.32): nessuna delle tre misura una prestazione.' },
  { id: 'T-10.28-2', ref: '10.28', style: 'knowledge', source: 'BABOK Guide, 10.28.3',
    stem: 'Which set correctly lists the six characteristics of a good indicator?',
    options: [
      { id: 'A', text: 'Clear, relevant, economical, adequate, quantifiable, trustworthy and credible' },
      { id: 'B', text: 'Atomic, complete, consistent, concise, feasible, unambiguous and understandable' },
      { id: 'C', text: 'Specific, measurable, achievable, relevant, time-bound, agreed' },
      { id: 'D', text: 'Accurate, timely, confidential, automated, comparable, verifiable and auditable' }
    ], answer: 'A',
    explanation: '{B} elenca caratteristiche di qualità dei requisiti (Verify Requirements, 7.2) e {C} è l\'acronimo SMART: due liste vere ma di altro argomento. È un accostamento facile da confondere.' },
  { id: 'T-10.28-3', ref: '10.28', style: 'knowledge', source: 'BABOK Guide, 10.28.3',
    stem: 'When is a proxy used as an indicator?',
    options: [
      { id: 'A', text: 'When the stakeholders disagree on the target value that the indicator should reach.' },
      { id: 'B', text: 'When data for direct indicators are not available or not feasible to collect at regular intervals.' },
      { id: 'C', text: 'When the measure is qualitative rather than quantitative and cannot be expressed as a number.' },
      { id: 'D', text: 'When the indicator must be validated independently by a party outside the initiative.' }
    ], answer: 'B',
    explanation: 'Non tutti i fattori sono misurabili direttamente: in assenza di dati diretti, o quando non è fattibile raccoglierli a intervalli regolari, si usa un proxy — per esempio la quota di contratti rinnovati al posto di un\'indagine sulla soddisfazione dei clienti.' },
  { id: 'T-10.28-4', ref: '10.28', style: 'knowledge', source: 'BABOK Guide, 10.28.4',
    stem: 'Which is a limitation of a metrics programme?',
    options: [
      { id: 'A', text: 'Gathering excessive data beyond what is needed causes unnecessary expense and distracts project members from other responsibilities.' },
      { id: 'B', text: 'Metrics cannot be linked to organizational goals, so they only describe the activity of the team and never its contribution to results.' },
      { id: 'C', text: 'Indicators cannot be presented graphically, which makes them hard for executives to read in reports.' },
      { id: 'D', text: 'Metrics apply only to technology solutions and cannot be used for process or organizational changes.' }
    ], answer: 'A',
    explanation: 'Il BABOK avverte che raccogliere dati in eccesso genera costi inutili di raccolta, analisi e reporting e distoglie i membri del progetto da altre responsabilità, particolarmente rilevante nei progetti agili; un programma di metriche burocratico fallisce raccogliendo troppi dati senza generare valore.' },
  { id: 'T-10.28-5', ref: '10.28', style: 'knowledge', source: 'BABOK Guide, 10.28.4',
    stem: 'What does establishing a monitoring and evaluation system allow stakeholders to understand?',
    options: [
      { id: 'A', text: 'The extent to which a solution meets an objective, and how effective the inputs and activities of developing the solution were.' },
      { id: 'B', text: 'Which team members contributed most to the outcome, so that their individual performance can be recognized and rewarded by management.' },
      { id: 'C', text: 'Whether the requirements were correctly approved by the stakeholders with the authority to do so.' },
      { id: 'D', text: 'The market share held by competitors, compared with the share that the organization holds once the change is complete.' }
    ], answer: 'A',
    explanation: 'È il punto di forza dichiarato. Indicatori, metriche e reporting facilitano inoltre l\'allineamento organizzativo, collegando goal a obiettivi, soluzioni di supporto, task sottostanti e risorse.' },

  /* ===== 10.32 Organizational Modelling ===== */
  { id: 'T-10.32-1', ref: '10.32', style: 'knowledge', source: 'BABOK Guide, 10.32.1',
    stem: 'What is organizational modelling used for?',
    options: [
      { id: 'A', text: 'To describe the roles, responsibilities, and reporting structures within an organization and align those structures with the organization\'s goals.' },
      { id: 'B', text: 'To analyse stakeholders and their characteristics for a specific initiative, so that all the possible sources of requirements are identified and understood.' },
      { id: 'C', text: 'To map the abilities of an enterprise to perform or transform something that helps achieve its goals and objectives.' },
      { id: 'D', text: 'To model the sequence of activities in a process, showing which role performs each step and how work flows between them.' }
    ], answer: 'A',
    explanation: 'L\'organizational modelling descrive ruoli, responsabilità e strutture di riporto di un\'organizzazione e allinea quelle strutture agli obiettivi dell\'organizzazione: è il purpose della tecnica nel BABOK. {B} è Stakeholder List, Map, or Personas (10.43), che riguarda chi è coinvolto in una specifica iniziativa; {C} è Business Capability Analysis (10.6); {D} è Process Modelling (10.35).' },
  { id: 'T-10.32-2', ref: '10.32', style: 'knowledge', source: 'BABOK Guide, 10.32.3',
    stem: 'What characterizes a functionally-oriented organizational model?',
    options: [
      { id: 'A', text: 'It groups staff by shared skills or areas of expertise and generally encourages standardization of work.' },
      { id: 'B', text: 'It groups staff around each customer segment, so that every team serves a single type of client.' },
      { id: 'C', text: 'It has no permanent reporting lines, since teams are formed and disbanded around each piece of work.' },
      { id: 'D', text: 'It assigns each employee to two managers, one for the function and one for the product or service.' }
    ], answer: 'A',
    explanation: 'Il modello funzionale raggruppa il personale per competenze o aree di expertise condivise e favorisce la standardizzazione del lavoro; è utile per la gestione dei costi e riduce la duplicazione, ma tende a sviluppare problemi di comunicazione e coordinamento trasversale, i cosiddetti "silos".' },
  { id: 'T-10.32-3', ref: '10.32', style: 'knowledge', source: 'BABOK Guide, 10.32.3',
    stem: 'What problem are functionally-oriented organizations prone to develop?',
    options: [
      { id: 'A', text: 'Duplication of work across units, since each unit repeats what the others do.' },
      { id: 'B', text: 'Communication and cross-functional coordination problems, known informally as "silos".' },
      { id: 'C', text: 'Loss of specialist expertise, because specialists are spread thinly across many different teams.' },
      { id: 'D', text: 'Inability to manage costs, since budgets are scattered across many teams.' }
    ], answer: 'B',
    explanation: 'I "silos" sono il rovescio della medaglia del modello funzionale: proprio i benefici che porta — gestione dei costi e riduzione della duplicazione, che {A} e {D} negano — nascono dallo stesso raggruppamento che ostacola il coordinamento trasversale.' },
  { id: 'T-10.32-4', ref: '10.32', style: 'knowledge', source: 'BABOK Guide, 10.32.4',
    stem: 'Which is a limitation of organizational models?',
    options: [
      { id: 'A', text: 'They are rarely available in organizations, so the business analyst usually has to build them from scratch.' },
      { id: 'B', text: 'Informal lines of authority, influence, and communication do not appear in the org chart and may conflict with it.' },
      { id: 'C', text: 'They cannot represent reporting structures, only the roles and responsibilities of individual positions.' },
      { id: 'D', text: 'They are only valid for functionally-oriented organizations and cannot describe market-oriented or matrix structures.' }
    ], answer: 'B',
    explanation: 'I limiti sono due: i modelli organizzativi sono a volte obsoleti, e le linee informali di autorità, influenza e comunicazione non compaiono nell\'organigramma, sono più difficili da individuare e possono contraddirlo. {A} contraddice il punto di forza: sono comuni nella maggior parte delle organizzazioni.' },
  { id: 'T-10.32-5', ref: '10.32', style: 'applied', source: 'BABOK Guide, 10.32.4',
    stem: 'A business analysis professional relies on the published org chart to identify who decides on a change, and discovers that the real decision is taken elsewhere. What does this illustrate?',
    options: [
      { id: 'A', text: 'That informal lines of authority and influence may conflict with the organizational chart.' },
      { id: 'B', text: 'That organizational models should not be used in business analysis, since they are always out of date.' },
      { id: 'C', text: 'That the stakeholder analysis was unnecessary, because the decision makers were already known.' },
      { id: 'D', text: 'That the org chart must be formally approved by the sponsor before it can be used.' }
    ], answer: 'A',
    explanation: 'È il limite dichiarato della tecnica: l\'organigramma non cattura autorità, influenza e comunicazione informali, che possono essere in conflitto con esso. Il modello è un punto di partenza, non la mappa completa del potere reale.' },

  /* ===== 10.34 Process Analysis ===== */
  { id: 'T-10.34-1', ref: '10.34', style: 'knowledge', source: 'BABOK Guide, 10.34.1',
    stem: 'What does process analysis assess?',
    options: [
      { id: 'A', text: 'A process for its efficiency and effectiveness, as well as its ability to identify opportunities for change.' },
      { id: 'B', text: 'The notation and symbols used to represent a process, so that every process model in the organization follows the same standard.' },
      { id: 'C', text: 'The stakeholders who participate in a process, together with their attitudes towards the change.' },
      { id: 'D', text: 'The data entities a process manipulates, with their attributes and the relationships between them.' }
    ], answer: 'A',
    explanation: 'La process analysis valuta un processo in termini di efficienza ed efficacia e ne individua le opportunità di cambiamento: è il purpose della tecnica nel BABOK, ed è anche una delle cinque tecniche fondazionali di The Business Analysis Standard. La notazione con cui si rappresenta un processo ({B}) riguarda il Process Modelling (10.35); stakeholder ({C}) ed entità di dati ({D}) non sono l\'oggetto della valutazione.' },
  { id: 'T-10.34-2', ref: '10.34', style: 'knowledge', source: 'BABOK Guide, 10.34.3',
    stem: 'When identifying gaps and areas to improve, what do business analysts do?',
    options: [
      { id: 'A', text: 'Identify gaps between the current and desired future state, which of them are value or non-value added, and pain points and opportunities from multiple points of view.' },
      { id: 'B', text: 'Rank the process steps by execution time only, since the slowest steps are always the ones that need to be improved first.' },
      { id: 'C', text: 'Replace the existing process with an industry-standard model, so that the organization adopts the best practice of its sector without any further analysis of its own.' },
      { id: 'D', text: 'Document only the steps performed by the busiest role, since that is where the pain points and opportunities are most likely to be concentrated.' }
    ], answer: 'A',
    explanation: 'Il "da punti di vista multipli" è centrale: un pain point per un ruolo può non esserlo per un altro. I modelli e i framework di processo specifici del settore possono aiutare a identificare cosa rientra nello scope dell\'analisi.' },
  { id: 'T-10.34-3', ref: '10.34', style: 'knowledge', source: 'BABOK Guide, 10.34.4',
    stem: 'Which is a strength of process analysis?',
    options: [
      { id: 'A', text: 'It ensures solutions address the right issues, minimizing waste.' },
      { id: 'B', text: 'It is always faster than other analysis techniques.' },
      { id: 'C', text: 'It works equally well for knowledge-intensive and decision-intensive processes.' },
      { id: 'D', text: 'It prescribes a single methodology to follow.' }
    ], answer: 'A',
    explanation: 'I punti di forza sono garantire che le soluzioni affrontino i problemi giusti minimizzando lo spreco, e la flessibilità data dalle molte tecniche e metodologie utilizzabili. {B}, {C} e {D} contraddicono i limiti: può richiedere tempo, può risultare inefficace su processi knowledge o decision-intensive, e la scelta fra le tante metodologie è essa stessa una difficoltà.' },
  { id: 'T-10.34-4', ref: '10.34', style: 'knowledge', source: 'BABOK Guide, 10.34.4',
    stem: 'For which kind of process may process analysis prove ineffective at improvement?',
    options: [
      { id: 'A', text: 'Highly repetitive manufacturing processes.' },
      { id: 'B', text: 'Knowledge or decision-intensive processes.' },
      { id: 'C', text: 'Processes crossing multiple departments.' },
      { id: 'D', text: 'Processes with regulatory constraints.' }
    ], answer: 'B',
    explanation: 'Il BABOK indica che la process analysis può rivelarsi inefficace nel migliorare processi knowledge o decision-intensive: dove il valore sta nel giudizio esperto più che nella sequenza delle attività, ottimizzare il flusso rende poco.' },
  { id: 'T-10.34-5', ref: '10.34', style: 'applied', source: 'BABOK Guide, 10.34.3',
    stem: 'While analysing a process, the team distinguishes steps that add value from steps that do not. What is the purpose?',
    options: [
      { id: 'A', text: 'To identify which gaps and areas are value and non-value added, so that improvement effort targets the right ones.' },
      { id: 'B', text: 'To assign the non-value-added steps to junior staff, so that senior people can focus on the steps that matter.' },
      { id: 'C', text: 'To calculate the cost of each step precisely, so that the figures can be used directly in the business case.' },
      { id: 'D', text: 'To determine who owns each step of the process and is accountable for its performance.' }
    ], answer: 'A',
    explanation: 'Distinguere ciò che aggiunge valore da ciò che non lo aggiunge è un elemento esplicito della tecnica, e richiama il principio "avoid waste" di The Business Analysis Standard: identificare le attività che non contribuiscono a soddisfare il need e rimuoverle.' },
/* ===== 10.35 Process Modelling ===== */
  { id: 'T-10.35-1', ref: '10.35', style: 'knowledge', source: 'BABOK Guide, 10.35.1',
    stem: 'What is process modelling?',
    options: [
      { id: 'A', text: 'A standardized graphical model used to show how work is carried out, and a foundation for process analysis.' },
      { id: 'B', text: 'An assessment of a process for its efficiency and effectiveness, identifying where it could be changed.' },
      { id: 'C', text: 'A description of the data entities a process uses, their attributes, and the relationships among them.' },
      { id: 'D', text: 'A record of who is responsible for each process step and of the reporting lines between those roles.' }
    ], answer: 'A',
    explanation: 'Il process model è la rappresentazione; la valutazione è Process Analysis (10.34), di cui il modello è il fondamento. Modellare e analizzare hanno nomi simili ed è facile scambiarli.' },
  { id: 'T-10.35-2', ref: '10.35', style: 'knowledge', source: 'BABOK Guide, 10.35.3',
    stem: 'Which notation is described as used across both business and information technology domains and increasingly adopted as an industry standard?',
    options: [
      { id: 'A', text: 'Value Stream Mapping (VSM)' },
      { id: 'B', text: 'Business Process Model and Notation (BPMN)' },
      { id: 'C', text: 'Unified Modelling Language (UML) activity diagrams' },
      { id: 'D', text: 'Integrated DEFinition (IDEF)' }
    ], answer: 'B',
    explanation: 'Flowchart e VSM sono usati nel dominio di business; data flow diagram e UML nel dominio IT; BPMN attraversa entrambi ed è sempre più adottato come standard di settore.' },
  { id: 'T-10.35-3', ref: '10.35', style: 'knowledge', source: 'BABOK Guide, 10.35.4',
    stem: 'Which is a strength of process modelling?',
    options: [
      { id: 'A', text: 'It appeals to the basic human understanding of sequential activities and most stakeholders are comfortable with its concepts.' },
      { id: 'B', text: 'It requires no notation to be agreed in advance, since each stakeholder can draw the process in whatever way they find most natural.' },
      { id: 'C', text: 'It is equally suited to representing data structures, entities, and the relationships between them.' },
      { id: 'D', text: 'It removes the need to involve stakeholders in the analysis, since the model shows everything they would say.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: fa leva sulla comprensione umana delle attività sequenziali, la maggior parte degli stakeholder ne padroneggia concetti ed elementi di base, l\'uso dei livelli accoglie prospettive diverse, gestisce bene scenari numerosi e rami paralleli, aiuta a individuare gruppi di stakeholder trascurati e i "pain point".' },
  { id: 'T-10.35-4', ref: '10.35', style: 'knowledge', source: 'BABOK Guide, 10.35.4',
    stem: 'How does process modelling help identify potential improvements?',
    options: [
      { id: 'A', text: 'By highlighting "pain points" in the process structure through visualization.' },
      { id: 'B', text: 'By calculating the cost of each activity automatically from the model.' },
      { id: 'C', text: 'By ranking the activities by how often they are executed each day.' },
      { id: 'D', text: 'By comparing the process with an industry benchmark of the same sector.' }
    ], answer: 'A',
    explanation: 'La visualizzazione del processo mette in evidenza i punti di dolore nella sua struttura, facilitando l\'individuazione di miglioramenti potenziali. È il ponte naturale verso la Process Analysis.' },
  { id: 'T-10.35-5', ref: '10.35', style: 'applied', source: 'BABOK Guide, 10.35.4',
    stem: 'A process must be presented both to executives, who want the overall flow, and to operational staff, who need each step. How does process modelling accommodate both?',
    options: [
      { id: 'A', text: 'Through the use of levels, which can accommodate the different perspectives of various stakeholder groups.' },
      { id: 'B', text: 'By producing a separate model for each stakeholder group, each drawn in a different notation.' },
      { id: 'C', text: 'By omitting the parallel branches and exceptions from the version shown to executives.' },
      { id: 'D', text: 'By replacing the model with a written narrative for executives and keeping the full diagram only for operational staff.' }
    ], answer: 'A',
    explanation: 'L\'uso dei livelli è un punto di forza dichiarato: consente di accogliere le diverse prospettive dei vari gruppi di stakeholder con lo stesso modello, mostrando più o meno dettaglio anziché costruire artefatti separati.' },

  /* ===== 10.38 Risk Analysis and Management ===== */
  { id: 'T-10.38-1', ref: '10.38', style: 'knowledge', source: 'BABOK Guide, 10.38.1',
    stem: 'What does risk analysis and management do?',
    options: [
      { id: 'A', text: 'Identifies areas of uncertainty that could negatively affect value, analyzes and evaluates them, and develops and manages ways of dealing with the risks.' },
      { id: 'B', text: 'Identifies and evaluates the underlying causes of a problem, so that solutions address the source rather than the symptoms.' },
      { id: 'C', text: 'Evaluates the internal strengths and weaknesses and the external opportunities and threats of the organization, in order to frame its overall strategy for the future.' },
      { id: 'D', text: 'Records, tracks, and prioritizes the remaining work items, so that the team always knows what to deliver next and in which order.' }
    ], answer: 'A',
    explanation: 'Il legame esplicito con il valore è la chiave: il rischio nel BABOK è l\'incertezza che può incidere negativamente sul valore, non genericamente su tempi o costi.' },
  { id: 'T-10.38-2', ref: '10.38', style: 'knowledge', source: 'BABOK Guide, 10.38.3',
    stem: 'How are risks identified?',
    options: [
      { id: 'A', text: 'Through a combination of expert judgment, stakeholder input, experimentation, past experiences, and historical analysis of similar initiatives.' },
      { id: 'B', text: 'Exclusively through a single workshop held at the start of the initiative, after which the list of risks is considered complete and is no longer revisited.' },
      { id: 'C', text: 'Exclusively by the project manager, who is accountable for every risk that could affect the delivery of the change.' },
      { id: 'D', text: 'Exclusively from the organization\'s risk register, which already records every risk that similar initiatives have faced.' }
    ], answer: 'A',
    explanation: 'L\'obiettivo è identificare un insieme completo di rischi rilevanti e minimizzare gli sconosciuti. Il BABOK precisa inoltre che l\'identificazione dei rischi è un\'attività continua, il che esclude {B}.' },
  { id: 'T-10.38-3', ref: '10.38', style: 'knowledge', source: 'BABOK Guide, 10.38.4',
    stem: 'To which kinds of risk can the technique be applied?',
    options: [
      { id: 'A', text: 'Only to operational risks affecting a solution in production, since strategic and tactical uncertainties are handled by enterprise risk management.' },
      { id: 'B', text: 'Strategic risks to long-term enterprise value, tactical risks to the value of a change, and operational risks to the value of a solution once the change is made.' },
      { id: 'C', text: 'Only to risks that can be quantified financially, since a risk whose impact cannot be expressed in monetary terms cannot be managed.' },
      { id: 'D', text: 'Only to risks identified before the change begins, since the list of risks is fixed once the change strategy has been approved.' }
    ], answer: 'B',
    explanation: 'La tecnica copre i tre livelli — strategico, tattico, operativo — accomunati dal fatto che l\'incertezza incide sul valore, a orizzonti diversi.' },
  { id: 'T-10.38-4', ref: '10.38', style: 'knowledge', source: 'BABOK Guide, 10.38.4',
    stem: 'Why does the BABOK Guide recommend ongoing risk management?',
    options: [
      { id: 'A', text: 'Because the risk level of a change or solution can vary over time, so risks and the suitability of planned responses need re-evaluating.' },
      { id: 'B', text: 'Because governance requires a monthly risk report, whether or not anything about the change has actually changed.' },
      { id: 'C', text: 'Because risks can never be closed once they have been opened, so the risk register keeps growing until the whole change is complete.' },
      { id: 'D', text: 'Because only new risks matter after implementation, so the risks identified earlier can be dropped from the register.' }
    ], answer: 'A',
    explanation: 'Il livello di rischio varia nel tempo: la gestione continua serve a riconoscere quella variazione e a rivalutare sia i rischi sia l\'adeguatezza delle risposte pianificate. Il BABOK nota anche che le risposte efficaci su un\'iniziativa diventano lezioni utili per le altre.' },
  { id: 'T-10.38-5', ref: '10.38', style: 'knowledge', source: 'BABOK Guide, 10.38.3',
    stem: 'What may a risk event consist of?',
    options: [
      { id: 'A', text: 'Only a single future occurrence of a specific event.' },
      { id: 'B', text: 'One occurrence, several occurrences, or even a non-occurrence.' },
      { id: 'C', text: 'Only an event whose probability can be quantified precisely.' },
      { id: 'D', text: 'Only an event that lies outside the organization\'s control.' }
    ], answer: 'B',
    explanation: 'Un evento di rischio può essere un\'occorrenza singola, più occorrenze o perfino una non-occorrenza — qualcosa che non accade quando dovrebbe. Analogamente una condizione di rischio può essere una condizione singola o una combinazione.' },

  /* ===== 10.40 Root Cause Analysis ===== */
  { id: 'T-10.40-1', ref: '10.40', style: 'knowledge', source: 'BABOK Guide, 10.40.1',
    stem: 'What is root cause analysis used for?',
    options: [
      { id: 'A', text: 'To identify and evaluate the underlying causes of a problem.' },
      { id: 'B', text: 'To generate numerous ideas about how to solve a problem.' },
      { id: 'C', text: 'To compile successes and failures at the end of a phase.' },
      { id: 'D', text: 'To evaluate the risks of a proposed change.' }
    ], answer: 'A',
    explanation: 'La root cause analysis serve a identificare e valutare le cause sottostanti di un problema: è il purpose della tecnica nel BABOK. {B} è Brainstorming (10.5), {C} Lessons Learned (10.27), {D} Risk Analysis and Management (10.38).' },
  { id: 'T-10.40-2', ref: '10.40', style: 'knowledge', source: 'BABOK Guide, 10.40.3',
    stem: 'What is a fishbone diagram used for?',
    options: [
      { id: 'A', text: 'To identify and organize the possible causes of a problem, focusing on the cause rather than the solution.' },
      { id: 'B', text: 'To show the sequence of activities in a process and the roles that carry out each of them.' },
      { id: 'C', text: 'To place the elements of a change inside or outside its boundaries, so that its scope is agreed.' },
      { id: 'D', text: 'To display the results of analysing performance measures against the targets that were set for the solution at the start.' }
    ], answer: 'A',
    explanation: 'Il diagramma a lisca di pesce, detto anche di Ishikawa o causa-effetto, identifica e organizza le possibili cause di un problema; aiuta a concentrarsi sulla causa invece che sulla soluzione e a organizzare le idee per l\'analisi successiva, fungendo da mappa delle possibili relazioni causa-effetto.' },
  { id: 'T-10.40-3', ref: '10.40', style: 'knowledge', source: 'BABOK Guide, 10.40.4',
    stem: 'Which is a strength of root cause analysis?',
    options: [
      { id: 'A', text: 'It helps maintain an objective perspective when performing cause-and-effect analysis.' },
      { id: 'B', text: 'It always identifies a single, definitive cause for every problem it is applied to.' },
      { id: 'C', text: 'It requires no training to apply correctly, even for complex problems.' },
      { id: 'D', text: 'It works best on complex problems that have many interacting causes.' }
    ], answer: 'A',
    explanation: 'I punti di forza sono mantenere una prospettiva oggettiva nell\'analisi causa-effetto e permettere agli stakeholder di individuare una soluzione efficace nei punti giusti per l\'azione correttiva. {C} e {D} contraddicono i limiti dichiarati.' },
  { id: 'T-10.40-4', ref: '10.40', style: 'knowledge', source: 'BABOK Guide, 10.40.4',
    stem: 'Which limitation does the BABOK Guide identify for root cause analysis?',
    options: [
      { id: 'A', text: 'It works best when the business analyst has formal training, to ensure root causes and not just symptoms are identified.' },
      { id: 'B', text: 'It cannot be applied to process problems, only to defects in technology components.' },
      { id: 'C', text: 'It requires the participation of the sponsor in every session, which makes it hard to schedule.' },
      { id: 'D', text: 'It can only be used after a solution has been implemented, once the problem has actually occurred and been reported in production.' }
    ], answer: 'A',
    explanation: 'Il BABOK segnala che serve formazione formale per assicurarsi di individuare le cause radice e non i sintomi, e che con problemi complessi l\'analisi può essere difficile, con il rischio di falsa pista o vicolo cieco.' },
  { id: 'T-10.40-5', ref: '10.40', style: 'applied', source: 'BABOK Guide, 10.40.3',
    stem: 'A team lists "staff are careless" as the cause of repeated data entry errors and stops there. What is the concern?',
    options: [
      { id: 'A', text: 'The analysis risks stopping at a symptom rather than identifying the root cause, which is what the technique exists to prevent.' },
      { id: 'B', text: 'The cause should have been recorded in the backlog as a work item before the analysis was closed.' },
      { id: 'C', text: 'Fishbone diagrams may not be used for human factors, so the team should have analysed the problem with a different tool.' },
      { id: 'D', text: 'The cause must be validated by the regulator before any corrective action can be planned.' }
    ], answer: 'A',
    explanation: 'Individuare le cause radice e non i sintomi è esattamente ciò per cui la tecnica esiste, e il BABOK avverte che senza formazione adeguata ci si ferma ai sintomi. "Il personale è distratto" è un sintomo: la causa può essere un\'interfaccia ambigua, una formazione carente o un carico di lavoro eccessivo.' },

  /* ===== 10.41 Scope Modelling ===== */
  { id: 'T-10.41-1', ref: '10.41', style: 'knowledge', source: 'BABOK Guide, 10.41.1',
    stem: 'What do scope models do?',
    options: [
      { id: 'A', text: 'Define the nature of one or more limits or boundaries and place elements inside or outside those boundaries.' },
      { id: 'B', text: 'Describe the entities, attributes, and relationships of a data domain, providing a shared vocabulary.' },
      { id: 'C', text: 'Record the remaining work items in priority order, so the team knows what to deliver next.' },
      { id: 'D', text: 'Assess a process for efficiency and effectiveness and identify the opportunities to change it.' }
    ], answer: 'A',
    explanation: 'Gli scope model definiscono la natura di uno o più limiti o confini e collocano gli elementi dentro o fuori da quei confini: è il purpose della tecnica nel BABOK. Sono comunemente usati per descrivere i confini del cambiamento. {B} è Data Modelling (10.15), {C} il backlog (10.2), {D} la Process Analysis (10.34).' },
  { id: 'T-10.41-2', ref: '10.41', style: 'knowledge', source: 'BABOK Guide, 10.41.3',
    stem: 'What are scope models typically used to clarify?',
    options: [
      { id: 'A', text: 'The span of control, the relevance of elements, and where effort will be applied.' },
      { id: 'B', text: 'The cost and duration of each activity needed to deliver the change.' },
      { id: 'C', text: 'The reporting lines of the organization and who approves each decision taken during the change.' },
      { id: 'D', text: 'The performance of the implemented solution against its objectives.' }
    ], answer: 'A',
    explanation: 'Sono i tre obiettivi elencati. In base all\'azione o ai bisogni degli stakeholder che il modello deve supportare, il business analyst determina i tipi di modello e seleziona confini ed elementi.' },
  { id: 'T-10.41-3', ref: '10.41', style: 'knowledge', source: 'BABOK Guide, 10.41.4',
    stem: 'A scope model facilitates agreement as a basis for which of the following?',
    options: [
      { id: 'A', text: 'Defining contractual obligations, estimating project effort, justifying in/out-of-scope decisions, and assessing solution completeness and impact.' },
      { id: 'B', text: 'Selecting the delivery methodology, so that the team can choose between a predictive and an adaptive approach for the whole initiative and its phases.' },
      { id: 'C', text: 'Measuring stakeholder satisfaction with the solution once it is in operation, through periodic surveys and interviews.' },
      { id: 'D', text: 'Identifying the root causes of defects found during testing, so that the team can correct them before go-live.' }
    ], answer: 'A',
    explanation: 'Sono i quattro usi elencati fra i punti di forza. È per questo che il modello di scope ha valore anche contrattuale, non solo analitico.' },
  { id: 'T-10.41-4', ref: '10.41', style: 'knowledge', source: 'BABOK Guide, 10.41.4',
    stem: 'Which limitation applies to an initial, high-level scope model?',
    options: [
      { id: 'A', text: 'It can lack sufficient granularity, particularly for boundary elements, to ensure clear scope identification.' },
      { id: 'B', text: 'It cannot be shared with stakeholders until every element has been modelled in detail.' },
      { id: 'C', text: 'It cannot be revised after approval, even when new information about the change emerges.' },
      { id: 'D', text: 'It applies only to technology components and cannot represent business processes, people, or organizational units.' }
    ], answer: 'A',
    explanation: 'Il modello iniziale ad alto livello può mancare della granularità necessaria proprio sugli elementi di confine, che sono i più critici. Il BABOK aggiunge che una volta definito lo scope, cambiarlo può essere difficile per ragioni politiche e obblighi contrattuali.' },
  { id: 'T-10.41-5', ref: '10.41', style: 'knowledge', source: 'BABOK Guide, 10.41.4',
    stem: 'Which factors can affect scope validity before the targets are achieved?',
    options: [
      { id: 'A', text: 'Wrong initial assumptions, situation change, evolution of stakeholder needs, or technology.' },
      { id: 'B', text: 'Only changes in the composition of the delivery team, such as the departure of key members.' },
      { id: 'C', text: 'Only changes in the budget approved for the initiative, whether increases or reductions.' },
      { id: 'D', text: 'Only regulatory changes imposed on the organization by external bodies after approval.' }
    ], answer: 'A',
    explanation: 'Sono i fattori elencati dal BABOK. Rendono lo scope una cosa viva: da qui la tensione, indicata come limite, fra la difficoltà politica e contrattuale di cambiarlo e la realtà che lo rende obsoleto.' },
/* ===== 10.43 Stakeholder List, Map, or Personas ===== */
  { id: 'T-10.43-1', ref: '10.43', style: 'knowledge', source: 'BABOK Guide, 10.43.1',
    stem: 'What do stakeholder lists, maps, and personas assist the business analyst in doing?',
    options: [
      { id: 'A', text: 'Analysing stakeholders and their characteristics, so that all sources of requirements are identified and stakeholders are fully understood.' },
      { id: 'B', text: 'Describing the roles, responsibilities, and reporting structures of the organization and aligning them with its goals.' },
      { id: 'C', text: 'Assigning tasks to stakeholders and tracking their completion, so that every commitment made during elicitation is honoured on time.' },
      { id: 'D', text: 'Recording stakeholder approvals for governance purposes, so that it is always clear who agreed to each requirement.' }
    ], answer: 'A',
    explanation: 'La comprensione piena dello stakeholder rende solide le decisioni sull\'engagement. {B} è Organizational Modelling (10.32): la mappa degli stakeholder riguarda una specifica iniziativa, il modello organizzativo la struttura stabile.' },
  { id: 'T-10.43-2', ref: '10.43', style: 'knowledge', source: 'BABOK Guide, 10.43.3',
    stem: 'Which techniques are commonly used to generate a stakeholder list?',
    options: [
      { id: 'A', text: 'Brainstorming and interviews.' },
      { id: 'B', text: 'Data modelling and process modelling.' },
      { id: 'C', text: 'SWOT analysis and benchmarking.' },
      { id: 'D', text: 'Risk analysis and root cause analysis.' }
    ], answer: 'A',
    explanation: 'Brainstorming e interviste sono le due tecniche comuni citate. L\'obiettivo è produrre una lista esaustiva, perché è centrale sia per l\'analisi degli stakeholder sia per la pianificazione di elicitation, collaborazione e comunicazione.' },
  { id: 'T-10.43-3', ref: '10.43', style: 'knowledge', source: 'BABOK Guide, 10.43.3',
    stem: 'What happens to a stakeholder list as analysis is conducted?',
    options: [
      { id: 'A', text: 'It is frozen once approved by the sponsor and is not changed for the rest of the initiative.' },
      { id: 'B', text: 'The business analyst categorizes it and adds structure, since lists may become quite lengthy.' },
      { id: 'C', text: 'It is reduced to the stakeholders with approval authority, so that it stays short and manageable.' },
      { id: 'D', text: 'It is replaced by the organizational chart, which already shows everyone involved.' }
    ], answer: 'B',
    explanation: 'Le liste possono diventare molto lunghe: man mano che l\'analisi procede il business analyst le categorizza e vi aggiunge struttura. È importante che la lista sia esaustiva, quindi ridurla ({C}) sarebbe controproducente.' },
  { id: 'T-10.43-4', ref: '10.43', style: 'knowledge', source: 'BABOK Guide, 10.43.4',
    stem: 'Which is a strength of this technique?',
    options: [
      { id: 'A', text: 'It identifies the specific people to engage in elicitation and helps plan collaboration and communication with all stakeholder groups.' },
      { id: 'B', text: 'It guarantees that all the stakeholders identified will take part in the elicitation activities, since their names are on record.' },
      { id: 'C', text: 'It removes the need for stakeholder analysis, since the list itself shows everything there is to know about each stakeholder.' },
      { id: 'D', text: 'It is only needed once, at the start of an initiative, because the stakeholders affected by a change do not vary over time.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza c\'è anche l\'utilità nel comprendere i cambiamenti nei gruppi impattati nel tempo, il che smentisce {D}: la tecnica serve proprio a seguire l\'evoluzione, non a fotografare una volta sola.' },
  { id: 'T-10.43-5', ref: '10.43', style: 'applied', source: 'BABOK Guide, 10.43.4',
    stem: 'A business analysis professional has worked with the same team for three years and reuses the stakeholder list from the last initiative. Which limitation applies?',
    options: [
      { id: 'A', text: 'Analysts who keep working with the same teams may not use the technique, because they do not perceive change within their groups as significant.' },
      { id: 'B', text: 'Stakeholder lists cannot be reused between initiatives, so a completely new list must always be built from scratch for every new change in the organization.' },
      { id: 'C', text: 'Personas may only be created for external customers, so internal teams cannot be represented in this way.' },
      { id: 'D', text: 'Stakeholder maps require formal approval by the sponsor before they can be reused on a new initiative.' }
    ], answer: 'A',
    explanation: 'È il limite dichiarato: chi lavora sempre con gli stessi team tende a non applicare la tecnica, perché non percepisce come significativi i cambiamenti nei propri gruppi. Poiché uno dei punti di forza è capire come i gruppi impattati cambiano nel tempo, riusare una lista senza rivederla annulla proprio il beneficio della tecnica.' },

  /* ===== 10.46 SWOT Analysis ===== */
  { id: 'T-10.46-1', ref: '10.46', style: 'knowledge', source: 'BABOK Guide, 10.46.1',
    stem: 'What does SWOT analysis evaluate?',
    options: [
      { id: 'A', text: 'An organization\'s strengths, weaknesses, opportunities, and threats, in both internal and external conditions.' },
      { id: 'B', text: 'The efficiency and effectiveness of a business process, and the opportunities to change it for the better.' },
      { id: 'C', text: 'The relative priority of the remaining requirements, based on their value and urgency.' },
      { id: 'D', text: 'The underlying causes of a recurring problem, organized in a cause-and-effect diagram.' }
    ], answer: 'A',
    explanation: 'La SWOT è uno strumento semplice ma efficace che copre condizioni sia interne sia esterne. La coppia interno/esterno è la chiave per riconoscerla nelle domande situation-based.' },
  { id: 'T-10.46-2', ref: '10.46', style: 'knowledge', source: 'BABOK Guide, 10.46.3',
    stem: 'Which two elements of SWOT are internal factors?',
    options: [
      { id: 'A', text: 'Strengths and Weaknesses' },
      { id: 'B', text: 'Opportunities and Threats' },
      { id: 'C', text: 'Strengths and Opportunities' },
      { id: 'D', text: 'Weaknesses and Threats' }
    ], answer: 'A',
    explanation: 'Strengths sono ciò che il gruppo valutato fa bene — personale esperto, processi efficaci, sistemi IT, relazioni con i clienti, qualunque fattore interno che porta al successo — e Weaknesses ciò che fa male o non fa affatto. Opportunities e Threats sono invece fattori esterni.' },
  { id: 'T-10.46-3', ref: '10.46', style: 'knowledge', source: 'BABOK Guide, 10.46.3',
    stem: 'How does the BABOK Guide define opportunities in a SWOT analysis?',
    options: [
      { id: 'A', text: 'Internal capabilities that the assessed group could develop further in order to improve its position in the market.' },
      { id: 'B', text: 'External factors that the assessed group may be able to take advantage of, such as new markets, new technology, or changes in competition.' },
      { id: 'C', text: 'Requirements that would deliver high value at a low cost, and should therefore be placed at the top of the backlog.' },
      { id: 'D', text: 'Risks whose impact on the organization would be positive rather than negative, recorded in the same risk register as the threats identified for the change.' }
    ], answer: 'B',
    explanation: 'Le opportunità sono fattori esterni sfruttabili: nuovi mercati, nuove tecnologie, cambiamenti nel panorama competitivo o altre forze. Confonderle con le forze interne ({A}) è l\'errore da evitare.' },
  { id: 'T-10.46-4', ref: '10.46', style: 'knowledge', source: 'BABOK Guide, 10.46.4',
    stem: 'Which is a limitation of SWOT analysis?',
    options: [
      { id: 'A', text: 'The results provide a high-level view and more detailed analysis is often needed.' },
      { id: 'B', text: 'It can only be applied to whole organizations, not to products or processes.' },
      { id: 'C', text: 'It cannot take external factors into account, only internal ones.' },
      { id: 'D', text: 'It requires quantitative data for every factor that is listed.' }
    ], answer: 'A',
    explanation: 'La SWOT dà una vista ad alto livello che spesso richiede approfondimenti; il BABOK aggiunge che senza un contesto chiaro il risultato può essere sfocato e contenere fattori non rilevanti per la situazione. {B} è falsa: si applica a organizzazione, prodotto, processo o stakeholder.' },
  { id: 'T-10.46-5', ref: '10.46', style: 'applied', source: 'BABOK Guide, 10.46.4',
    stem: 'A SWOT session produces a long list of factors, many unrelated to the decision at hand. What was most likely missing?',
    options: [
      { id: 'A', text: 'A clearly defined context for the SWOT analysis.' },
      { id: 'B', text: 'A larger number of participants.' },
      { id: 'C', text: 'Quantitative scoring of each factor.' },
      { id: 'D', text: 'Formal approval of the analysis by the sponsor of the initiative.' }
    ], answer: 'A',
    explanation: 'Il BABOK avverte che, se non è definito un contesto chiaro per la SWOT, il risultato può essere sfocato e contenere fattori non rilevanti per la situazione corrente. Il contesto è ciò che rende selettiva l\'analisi.' },

  /* ===== 10.48 User Stories ===== */
  { id: 'T-10.48-1', ref: '10.48', style: 'knowledge', source: 'BABOK Guide, 10.48.1',
    stem: 'What does a user story represent?',
    options: [
      { id: 'A', text: 'A small, concise statement of functionality or quality needed to deliver value to a specific stakeholder.' },
      { id: 'B', text: 'A complete specification of a feature, including all its acceptance criteria and detailed design decisions.' },
      { id: 'C', text: 'A prioritized list of the remaining work items that the team still has to complete.' },
      { id: 'D', text: 'A graphical representation of a business process, showing activities and roles in sequence.' }
    ], answer: 'A',
    explanation: 'La brevità è parte della definizione: piccola, concisa e legata al valore per uno stakeholder specifico. {C} è il backlog (10.2).' },
  { id: 'T-10.48-2', ref: '10.48', style: 'knowledge', source: 'BABOK Guide, 10.48.3',
    stem: 'What are the three components of the most popular user story format?',
    options: [
      { id: 'A', text: 'Who, what, and why' },
      { id: 'B', text: 'Input, process, and output' },
      { id: 'C', text: 'Actor, system, and interface' },
      { id: 'D', text: 'Problem, solution, and benefit' }
    ], answer: 'A',
    explanation: 'Il formato più diffuso comprende chi (un ruolo utente o persona), cosa (azione, comportamento, funzionalità o qualità necessaria) e perché (il beneficio ricevuto quando la storia è implementata): "As a <who>, I need to <what>, so that <why>". Il BABOK precisa che non esiste una struttura obbligatoria; "Given...When...Then" è un altro formato comune.' },
  { id: 'T-10.48-3', ref: '10.48', style: 'knowledge', source: 'BABOK Guide, 10.48.4',
    stem: 'Which is a strength of user stories?',
    options: [
      { id: 'A', text: 'They are tied to small, implementable, and testable slices of functionality, which facilitates rapid delivery and frequent customer feedback.' },
      { id: 'B', text: 'They provide long-term knowledge retention about the solution, replacing the need for any other form of solution documentation in the future.' },
      { id: 'C', text: 'They contain a detailed analysis of each requirement, including the data, rules, and interfaces it involves.' },
      { id: 'D', text: 'They remove the need for collaboration with stakeholders, since each story already states who needs what and why.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: facilmente comprensibili dagli stakeholder, sviluppabili con varie tecniche di elicitation, focalizzate sul valore, e legate a fette piccole, implementabili e testabili. {B} e {C} contraddicono il limite generale: le user story sono uno strumento di cattura e prioritizzazione a breve termine, non di conservazione della conoscenza né di analisi dettagliata.' },
  { id: 'T-10.48-4', ref: '10.48', style: 'knowledge', source: 'BABOK Guide, 10.48.4',
    stem: 'For what are user stories NOT intended?',
    options: [
      { id: 'A', text: 'Long-term knowledge retention or providing a detailed analysis.' },
      { id: 'B', text: 'Short-term capture of requirements in a lightweight form.' },
      { id: 'C', text: 'Prioritization of requirements within a backlog.' },
      { id: 'D', text: 'Facilitating conversations with stakeholders about the value they need.' }
    ], answer: 'A',
    explanation: 'Il BABOK dichiara che le user story sono pensate come strumento di cattura e prioritizzazione dei requisiti a breve termine, non per la conservazione della conoscenza a lungo termine né per un\'analisi dettagliata; trascurare questo principio genera problemi.' },
  { id: 'T-10.48-5', ref: '10.48', style: 'applied', source: 'BABOK Guide, 10.48.3',
    stem: 'A story reads: "As a claims handler, I need to see the customer\'s policy history." What is missing from the standard format?',
    options: [
      { id: 'A', text: 'The "why": the benefit or value received when the story is implemented.' },
      { id: 'B', text: 'The "who": the user role or persona that needs the functionality.' },
      { id: 'C', text: 'The "what": the action or behaviour that the user needs from the solution.' },
      { id: 'D', text: 'Nothing: the story is complete as written and can be implemented.' }
    ], answer: 'A',
    explanation: 'Ci sono il chi (claims handler) e il cosa (vedere lo storico della polizza), ma manca il perché, cioè il beneficio. Senza il "so that" si perde il legame con il valore, che è proprio ciò su cui la user story dovrebbe focalizzare.' },

  /* ===== 10.50 Workshops ===== */
  { id: 'T-10.50-1', ref: '10.50', style: 'knowledge', source: 'BABOK Guide, 10.50.1',
    stem: 'What is the purpose of workshops?',
    options: [
      { id: 'A', text: 'To bring stakeholders together in order to collaborate on achieving a predefined goal.' },
      { id: 'B', text: 'To gather information from individual stakeholders one at a time, in a private setting.' },
      { id: 'C', text: 'To review the existing documentation systematically to extract the relevant information.' },
      { id: 'D', text: 'To observe stakeholders while they perform their work in their normal environment.' }
    ], answer: 'A',
    explanation: 'L\'obiettivo predefinito è ciò che distingue il workshop da una riunione generica: si riuniscono gli stakeholder per collaborare al raggiungimento di un obiettivo già stabilito.' },
  { id: 'T-10.50-2', ref: '10.50', style: 'knowledge', source: 'BABOK Guide, 10.50.3',
    stem: 'What does preparing for a workshop include?',
    options: [
      { id: 'A', text: 'Defining purpose and outcomes, identifying participants, facilitator and scribe, creating the agenda, planning how outputs will be captured, and sending materials ahead.' },
      { id: 'B', text: 'Only booking a suitable room and inviting the participants, since the facilitator can shape the purpose, the agenda, and the outputs as the session unfolds on the day.' },
      { id: 'C', text: 'Only agreeing the agenda with the sponsor, who then decides which stakeholders should be invited and what the outcomes should be.' },
      { id: 'D', text: 'Only selecting the elicitation technique to be used, because the goal, participants, and materials follow from that choice.' }
    ], answer: 'A',
    explanation: 'La preparazione è estesa e comprende anche, se opportuno, interviste preliminari con i partecipanti. Inviare agenda e materiali in anticipo serve a preparare i presenti e ad aumentare la produttività della sessione.' },
  { id: 'T-10.50-3', ref: '10.50', style: 'knowledge', source: 'BABOK Guide, 10.50.4',
    stem: 'Which is a strength of workshops?',
    options: [
      { id: 'A', text: 'Costs are often lower than performing multiple interviews, and participants can provide feedback immediately.' },
      { id: 'B', text: 'They are unaffected by the expertise of the facilitator, since the agenda keeps the participants on track.' },
      { id: 'C', text: 'They work equally well with any number of participants, from a handful of people to several dozen.' },
      { id: 'D', text: 'They remove the need to schedule stakeholder time, since participants can join whenever they are available.' }
    ], answer: 'A',
    explanation: 'Fra i punti di forza: raggiungere un accordo in tempi relativamente brevi, permettere collaborazione, decisioni e comprensione reciproca, costi spesso inferiori a interviste multiple e feedback immediato. {B} e {C} contraddicono limiti espliciti.' },
  { id: 'T-10.50-4', ref: '10.50', style: 'knowledge', source: 'BABOK Guide, 10.50.4',
    stem: 'On what is the success of a workshop highly dependent?',
    options: [
      { id: 'A', text: 'The expertise of the facilitator and the knowledge of the participants.' },
      { id: 'B', text: 'The number of documents distributed to all the participants in advance of the session.' },
      { id: 'C', text: 'The seniority of the sponsor who attends the session.' },
      { id: 'D', text: 'The overall duration of the session and of its breaks.' }
    ], answer: 'A',
    explanation: 'È il limite dichiarato, e spiega perché la Facilitation sia una delle cinque competenze fondazionali indicate da The Business Analysis Standard: senza un buon facilitatore il workshop non produce ciò che promette.' },
  { id: 'T-10.50-5', ref: '10.50', style: 'applied', source: 'BABOK Guide, 10.50.4',
    stem: 'A business analysis professional is deciding how many people to invite to a requirements workshop. What trade-off should be considered?',
    options: [
      { id: 'A', text: 'Too many participants can slow down the process, while too few can lead to overlooking needs or issues.' },
      { id: 'B', text: 'More participants always improve the quality of the outcome, because more needs are discussed in the same session.' },
      { id: 'C', text: 'Fewer participants always reduce the cost and improve focus, without any risk of overlooking needs.' },
      { id: 'D', text: 'The number of participants does not affect the outcome, provided that the agenda is followed.' }
    ], answer: 'A',
    explanation: 'Il BABOK pone esplicitamente il trade-off nei due sensi: troppi partecipanti rallentano il processo, troppo pochi fanno trascurare bisogni o problemi. Va aggiunta la difficoltà di conciliare le disponibilità, altro limite dichiarato.' }
];

window.ECBA_COMPETENCY_QUESTIONS = [
/* ===== 9.1 Analytical Thinking and Problem Solving ===== */

  { id: 'C-9.1.1-1', ref: '9.1.1', style: 'knowledge', source: 'BABOK Guide, 9.1.1',
    stem: 'Which is a measure of effective creative thinking?',
    options: [
      { id: 'A', text: 'Generating and productively considering new ideas, and applying new ideas to resolve existing problems.' },
      { id: 'B', text: 'Rapidly absorbing new facts, ideas, and concepts and presenting them effectively to the other stakeholders involved.' },
      { id: 'C', text: 'Connecting disparate information and taking action to understand the relationship between the pieces.' },
      { id: 'D', text: 'Communicating how a change to a component affects the whole system and the environment it operates in.' }
    ], answer: 'A',
    explanation: 'Le misure del creative thinking includono generare e considerare produttivamente nuove idee, esplorare concetti nuovi o modifiche a quelli esistenti, generare creatività per sé e per gli altri e applicare idee nuove a problemi esistenti. {B} è Learning, {C} Conceptual Thinking, {D} Systems Thinking.' },
  { id: 'C-9.1.1-2', ref: '9.1.1', style: 'applied', source: 'BABOK Guide, 9.1.1',
    stem: 'A business analysis professional runs a session where the team explores deliberately exaggerated variations of an existing process to see what emerges. Which competency is being exercised?',
    options: [
      { id: 'A', text: 'Creative Thinking' },
      { id: 'B', text: 'Decision Making' },
      { id: 'C', text: 'Problem Solving' },
      { id: 'D', text: 'Learning' }
    ], answer: 'A',
    explanation: 'Esplorare concetti e idee nuovi, e cambiamenti a concetti esistenti, sono misure esplicite del creative thinking. La competenza include anche generare creatività negli altri, non solo in sé.' },
  { id: 'C-9.1.1-3', ref: '9.1.1', style: 'knowledge', source: 'BABOK Guide, 9.1',
    stem: 'To which competency group does Creative Thinking belong?',
    options: [
      { id: 'A', text: 'Analytical Thinking and Problem Solving' },
      { id: 'B', text: 'Behavioural Characteristics' },
      { id: 'C', text: 'Interaction Skills' },
      { id: 'D', text: 'Business Knowledge' }
    ], answer: 'A',
    explanation: 'Il gruppo Analytical Thinking and Problem Solving comprende sette competenze: Creative Thinking, Decision Making, Learning, Problem Solving, Systems Thinking, Conceptual Thinking e Visual Thinking. È il gruppo più numeroso dei sei.' },

  { id: 'C-9.1.2-1', ref: '9.1.2', style: 'knowledge', source: 'BABOK Guide, 9.1.2',
    stem: 'Which is a measure of effective decision making?',
    options: [
      { id: 'A', text: 'The appropriate stakeholders are represented in the decision-making process and understand the rationale behind the decision.' },
      { id: 'B', text: 'The decision is taken by the most senior stakeholder present, so that nobody can later challenge it or reopen the discussion.' },
      { id: 'C', text: 'The decision is taken quickly, before conditions change, even if some of the stakeholders affected have not yet been consulted.' },
      { id: 'D', text: 'All uncertainty is eliminated before deciding, so that no risk remains once the chosen option is implemented.' }
    ], answer: 'A',
    explanation: 'Fra le misure: gli stakeholder appropriati sono rappresentati, comprendono processo e razionale, pro e contro di tutte le opzioni sono comunicati chiaramente. La decisione deve ridurre o eliminare l\'incertezza, e quella residua va accettata — quindi {D} è troppo assoluta.' },
  { id: 'C-9.1.2-2', ref: '9.1.2', style: 'applied', source: 'BABOK Guide, 9.1.2',
    stem: 'After a decision, several stakeholders say they do not understand why that option was chosen. Which effectiveness measure has NOT been met?',
    options: [
      { id: 'A', text: 'Stakeholders understand the decision-making process and the rationale behind the decision.' },
      { id: 'B', text: 'The decision addresses the need or opportunity at hand and is in the best interest of all stakeholders.' },
      { id: 'C', text: 'The appropriate stakeholders were represented in the decision-making process from the start.' },
      { id: 'D', text: 'The decision reduces or eliminates uncertainty, and any remaining uncertainty is accepted.' }
    ], answer: 'A',
    explanation: 'La decisione può essere corretta e comunque non efficace secondo il BABOK: fra le misure c\'è che gli stakeholder comprendano il processo decisionale e il razionale, e che pro e contro di tutte le opzioni disponibili siano comunicati chiaramente.' },
  { id: 'C-9.1.2-3', ref: '9.1.2', style: 'knowledge', source: 'BABOK Guide, 9.1.2',
    stem: 'What does the BABOK Guide say about uncertainty remaining after a decision?',
    options: [
      { id: 'A', text: 'The decision should reduce or eliminate uncertainty, and any remaining uncertainty is accepted.' },
      { id: 'B', text: 'A decision cannot be taken while any uncertainty remains, so the team must wait until all the facts are known.' },
      { id: 'C', text: 'Any remaining uncertainty must be escalated to the sponsor, who decides whether the decision can stand.' },
      { id: 'D', text: 'Remaining uncertainty invalidates the decision-making process, which must then be repeated from the beginning.' }
    ], answer: 'A',
    explanation: 'L\'incertezza residua si accetta consapevolmente: è la differenza fra decidere bene e attendere una certezza che non arriverà. Fa parte delle misure di efficacia del decision making.' },

  { id: 'C-9.1.3-1', ref: '9.1.3', style: 'knowledge', source: 'BABOK Guide, 9.1.3',
    stem: 'Which is a measure of effective learning?',
    options: [
      { id: 'A', text: 'Understanding that learning is a process for all stakeholders, and applying the concepts learned to new areas or relationships.' },
      { id: 'B', text: 'Completing a certification in the relevant domain before working on the initiative, so that the analyst\'s knowledge is formally recognized.' },
      { id: 'C', text: 'Documenting all new information in a shared repository, so that every stakeholder can consult it whenever they need to.' },
      { id: 'D', text: 'Attending all the training offered by the organization and passing the related assessments within the planned time.' }
    ], answer: 'A',
    explanation: 'Le misure includono comprendere che l\'apprendimento è un processo per tutti gli stakeholder, imparare i concetti e dimostrarne la comprensione, saperli applicare a nuove aree o relazioni, assorbire rapidamente fatti e idee nuove e presentarli efficacemente agli altri.' },
  { id: 'C-9.1.3-2', ref: '9.1.3', style: 'applied', source: 'BABOK Guide, 9.1.3',
    stem: 'A business analysis professional joins an unfamiliar domain and within weeks can explain its concepts back to stakeholders in their own terms. Which competency does this demonstrate?',
    options: [
      { id: 'A', text: 'Learning' },
      { id: 'B', text: 'Teaching' },
      { id: 'C', text: 'Industry Knowledge' },
      { id: 'D', text: 'Conceptual Thinking' }
    ], answer: 'A',
    explanation: 'Assorbire rapidamente fatti, idee, concetti e opinioni nuovi e presentarli efficacemente agli altri sono due misure del Learning. Teaching ({B}) riguarda invece il condurre altri ad acquisire conoscenza come attività deliberata.' },
  { id: 'C-9.1.3-3', ref: '9.1.3', style: 'knowledge', source: 'BABOK Guide, 9.1.3',
    stem: 'What does the Learning competency recognize about stakeholders?',
    options: [
      { id: 'A', text: 'That learning is a process for all stakeholders, not only for the business analyst.' },
      { id: 'B', text: 'That stakeholders learn only through formal training organized by the business analyst.' },
      { id: 'C', text: 'That stakeholders should be shielded from unfamiliar concepts until the change is complete.' },
      { id: 'D', text: 'That only subject matter experts need to learn during a change, while other stakeholders do not.' }
    ], answer: 'A',
    explanation: 'La prima misura di efficacia è proprio comprendere che l\'apprendimento è un processo per tutti gli stakeholder: durante un cambiamento imparano anche loro, e questo cambia il modo di comunicare e coinvolgerli.' },

  { id: 'C-9.1.4-1', ref: '9.1.4', style: 'knowledge', source: 'BABOK Guide, 9.1.4',
    stem: 'What does defining a problem involve?',
    options: [
      { id: 'A', text: 'Ensuring that all stakeholders clearly understand the nature of the problem and its underlying issues, with their points of view articulated and addressed.' },
      { id: 'B', text: 'Selecting the solution option with the best cost-benefit ratio, so that the problem is closed as quickly and cheaply as possible.' },
      { id: 'C', text: 'Documenting the symptoms reported by users in as much detail as possible, so that the problem is described exactly as they experience it.' },
      { id: 'D', text: 'Assigning ownership of the problem to a single stakeholder, who then becomes accountable for defining it and for resolving it on behalf of everyone involved.' }
    ], answer: 'A',
    explanation: 'Definire il problema significa assicurarsi che la sua natura e i temi sottostanti siano chiari a tutti gli stakeholder, articolando e affrontando i loro punti di vista per comprendere eventuali conflitti fra obiettivi di gruppi diversi.' },
  { id: 'C-9.1.4-2', ref: '9.1.4', style: 'knowledge', source: 'BABOK Guide, 9.1.4',
    stem: 'Which is a measure of effective problem solving?',
    options: [
      { id: 'A', text: 'The process avoids decisions based on unvalidated assumptions, preconceived notions, or other traps that may lead to a sub-optimal solution.' },
      { id: 'B', text: 'The problem is solved within the planned schedule and budget, even if some of the options identified were never examined.' },
      { id: 'C', text: 'The selected solution is approved unanimously by all the stakeholders involved, without any objections being raised at any point in the process.' },
      { id: 'D', text: 'The number of options considered is kept to a minimum, so that the team can reach a decision quickly and avoid analysis paralysis.' }
    ], answer: 'A',
    explanation: 'Fra le misure: la fiducia dei partecipanti nel processo, soluzioni che soddisfano gli obiettivi e risolvono la causa radice, la possibilità di valutare efficacemente nuove opzioni con il framework adottato, e l\'evitare decisioni fondate su assunzioni non validate o preconcetti.' },
  { id: 'C-9.1.4-3', ref: '9.1.4', style: 'applied', source: 'BABOK Guide, 9.1.4',
    stem: 'A team fixes the symptom of a recurring failure but the failure returns two months later. Which effectiveness measure was NOT met?',
    options: [
      { id: 'A', text: 'Selected solutions meet the defined objectives and solve the root cause of the problem.' },
      { id: 'B', text: 'Confidence of the participants in the problem solving process and in the way it was run.' },
      { id: 'C', text: 'New solution options can be evaluated effectively using the problem solving framework.' },
      { id: 'D', text: 'The problem was defined together with the stakeholders, whose points of view were addressed.' }
    ], answer: 'A',
    explanation: 'La misura richiede esplicitamente che le soluzioni scelte risolvano la causa radice, non solo il sintomo. È lo stesso principio che The Business Analysis Standard riassume descrivendo il Problem Solving come "ensuring that created value addresses the root cause of problems".' },

  { id: 'C-9.1.5-1', ref: '9.1.5', style: 'knowledge', source: 'BABOK Guide, 9.1.5',
    stem: 'What do systems theory and systems thinking suggest?',
    options: [
      { id: 'A', text: 'That a system has properties and behaviours that emerge from the interaction of its components and cannot be predicted from the components alone.' },
      { id: 'B', text: 'That systems can be fully understood by decomposing them into independent parts and studying each part separately from the others.' },
      { id: 'C', text: 'That the performance of a system is always equal to the sum of the performance of its components, measured one by one.' },
      { id: 'D', text: 'That systems should be optimized one component at a time, since improving each part separately always improves the behaviour of the whole system.' }
    ], answer: 'A',
    explanation: 'Le proprietà emergenti sono il cuore del systems thinking: nascono dall\'interazione fra i componenti e non sono prevedibili conoscendo i soli componenti. {B}, {C} e {D} descrivono l\'approccio riduzionista opposto.' },
  { id: 'C-9.1.5-2', ref: '9.1.5', style: 'knowledge', source: 'BABOK Guide, 9.1.5',
    stem: 'Which is a measure of the effective use of systems thinking?',
    options: [
      { id: 'A', text: 'Communicating how a change to a component affects the system as a whole, and how a change to a system affects the environment it is in.' },
      { id: 'B', text: 'Producing a complete inventory of the system\'s components, with their owners and the version currently in use.' },
      { id: 'C', text: 'Reducing the number of interfaces between components, so that each part of the system can change without affecting the others.' },
      { id: 'D', text: 'Documenting each component independently of the others, so that it can be understood without any reference to the rest of the system it belongs to.' }
    ], answer: 'A',
    explanation: 'Le misure riguardano la comunicazione degli effetti: componente→sistema, sistema→ambiente, e come i sistemi si adattano a pressioni e cambiamenti interni ed esterni. Notare che la competenza si misura sulla capacità di comunicare quelle relazioni, non solo di vederle.' },
  { id: 'C-9.1.5-3', ref: '9.1.5', style: 'applied', source: 'BABOK Guide, 9.1.5',
    stem: 'A proposed change to the invoicing module would speed it up but would increase the load on the shared database used by three other services. Which competency is most relevant?',
    options: [
      { id: 'A', text: 'Systems Thinking' },
      { id: 'B', text: 'Creative Thinking' },
      { id: 'C', text: 'Decision Making' },
      { id: 'D', text: 'Solution Knowledge' }
    ], answer: 'A',
    explanation: 'Riconoscere e comunicare come un cambiamento a un componente si ripercuote sul sistema nel suo insieme è la misura tipica del systems thinking. È anche una delle cinque competenze fondazionali indicate da The Business Analysis Standard.' },

  { id: 'C-9.1.6-1', ref: '9.1.6', style: 'knowledge', source: 'BABOK Guide, 9.1.6',
    stem: 'What is conceptual thinking about?',
    options: [
      { id: 'A', text: 'Understanding abstractly how contexts, solutions, needs, changes, stakeholders, and value link together, connecting information that is not obviously related.' },
      { id: 'B', text: 'Creating graphical representations of the concepts or systems being discussed, so that the stakeholders involved can easily understand them and provide their input.' },
      { id: 'C', text: 'Understanding how the components of a system interact to produce properties and behaviours that cannot be predicted from the components alone.' },
      { id: 'D', text: 'Generating and productively considering numerous new ideas about a problem, and applying them to resolve existing problems.' }
    ], answer: 'A',
    explanation: 'Il conceptual thinking collega informazioni e pattern non ovviamente correlati, in astratto e nel quadro generale. {B} è Visual Thinking, {C} Systems Thinking, {D} Creative Thinking: quattro competenze dello stesso gruppo, spesso confuse.' },
  { id: 'C-9.1.6-2', ref: '9.1.6', style: 'knowledge', source: 'BABOK Guide, 9.1.6',
    stem: 'Which is a measure of effective conceptual thinking?',
    options: [
      { id: 'A', text: 'Formulating abstract concepts from information and uncertainty, and drawing on past experience to understand the situation.' },
      { id: 'B', text: 'Producing models that stakeholders can understand at a glance, using a standard notation for every diagram.' },
      { id: 'C', text: 'Absorbing new facts and concepts rapidly and presenting them to other stakeholders in a way they can use.' },
      { id: 'D', text: 'Encouraging participation from all attendees, so that every point of view is expressed and recognized by all the others present.' }
    ], answer: 'A',
    explanation: 'Fra le misure: connettere informazioni disparate agendo per comprenderne la relazione, confermare con gli stakeholder la fiducia e la comprensione del concetto comunicato, formulare concetti astratti combinando informazione e incertezza, e attingere alle esperienze passate.' },
  { id: 'C-9.1.6-3', ref: '9.1.6', style: 'applied', source: 'BABOK Guide, 9.1.6',
    stem: 'A business analysis professional receives large amounts of detailed and apparently unrelated information from several departments and works out how it fits into a larger picture. Which competency is this?',
    options: [
      { id: 'A', text: 'Conceptual Thinking' },
      { id: 'B', text: 'Organization and Time Management' },
      { id: 'C', text: 'Learning' },
      { id: 'D', text: 'Business Acumen' }
    ], answer: 'A',
    explanation: 'Il BABOK introduce la competenza esattamente con questa situazione: i business analyst ricevono abitualmente grandi quantità di informazioni dettagliate e potenzialmente disparate, e applicano il conceptual thinking per capire come si collocano in un quadro più ampio.' },

  { id: 'C-9.1.7-1', ref: '9.1.7', style: 'knowledge', source: 'BABOK Guide, 9.1.7',
    stem: 'What do visual thinking skills allow business analysts to do?',
    options: [
      { id: 'A', text: 'Create graphical representations of the concepts or systems being discussed, so stakeholders can easily understand them and provide input.' },
      { id: 'B', text: 'Understand abstractly how information fits into a larger picture, connecting details and patterns that are not obviously related to each other.' },
      { id: 'C', text: 'Select the appropriate modelling tool for the organization, based on the notations that stakeholders already know.' },
      { id: 'D', text: 'Prioritize which concepts to communicate first, so that stakeholders receive the most important information early.' }
    ], answer: 'A',
    explanation: 'L\'obiettivo delle rappresentazioni grafiche è duplice: far comprendere facilmente i concetti presentati e ottenere l\'input degli stakeholder. Non è decorazione, è un modo per raccogliere reazioni.' },
  { id: 'C-9.1.7-2', ref: '9.1.7', style: 'knowledge', source: 'BABOK Guide, 9.1.7',
    stem: 'Which is a measure of effective visual thinking?',
    options: [
      { id: 'A', text: 'Stakeholders understand critical information which may have been missed if presented in textual content alone.' },
      { id: 'B', text: 'A high number of diagrams produced per initiative, showing that every concept discussed has been modelled.' },
      { id: 'C', text: 'The use of a single standard notation across all models, so that every diagram looks the same to all stakeholders.' },
      { id: 'D', text: 'Diagrams are formally approved by the sponsor before they are distributed to the other stakeholders.' }
    ], answer: 'A',
    explanation: 'Fra le misure: informazioni complesse comunicate in un modello visivo comprensibile, visuali che permettono confronti, individuazione di pattern e mappatura di idee, aumento di produttività, stakeholder coinvolti a un livello più profondo del solo testo, e comprensione di informazioni critiche che il testo da solo avrebbe fatto sfuggire.' },
  { id: 'C-9.1.7-3', ref: '9.1.7', style: 'applied', source: 'BABOK Guide, 9.1.7',
    stem: 'After a written specification failed to surface disagreements, a business analysis professional redraws the same content as a diagram and the stakeholders immediately spot two conflicting assumptions. What does this illustrate?',
    options: [
      { id: 'A', text: 'Visuals allow for comparisons and pattern finding, and engage stakeholders at a deeper level than text alone.' },
      { id: 'B', text: 'Written communication should be avoided in analysis, since diagrams always convey requirements more completely than text.' },
      { id: 'C', text: 'The specification had not been verified for quality before it was shared with the stakeholders.' },
      { id: 'D', text: 'The stakeholders lacked the domain knowledge needed to read the written specification correctly.' }
    ], answer: 'A',
    explanation: 'Sono misure esplicite del visual thinking: le visuali consentono confronti, individuazione di pattern e mappatura di idee, coinvolgono più a fondo del solo testo e fanno emergere informazioni critiche che sarebbero sfuggite. Non significa che il testo vada evitato ({B}): le due forme si completano.' },
/* ===== 9.2 Behavioural Characteristics ===== */

  { id: 'C-9.2.1-1', ref: '9.2.1', style: 'knowledge', source: 'BABOK Guide, 9.2.1',
    stem: 'What do ethics require, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'An understanding of and focus on fairness, consideration, and moral behaviour in business analysis activities and relationships.' },
      { id: 'B', text: 'Strict compliance with the organization\'s written policies, whatever their effect on the stakeholders who are involved in the change.' },
      { id: 'C', text: 'Avoiding any involvement in decisions that have a commercial impact on the organization or on its competitors.' },
      { id: 'D', text: 'Ensuring that every stakeholder group benefits from the outcome of the change, so that nobody is ever disadvantaged by it.' }
    ], answer: 'A',
    explanation: 'Il comportamento etico include considerare l\'impatto che una soluzione proposta può avere su tutti i gruppi di stakeholder e lavorare perché siano trattati il più equamente possibile. {D} è troppo forte: il trattamento equo non richiede che l\'esito sia vantaggioso per un particolare gruppo, ma che gli stakeholder impattati comprendano.' },
  { id: 'C-9.2.1-2', ref: '9.2.1', style: 'knowledge', source: 'BABOK Guide, 9.2.1',
    stem: 'Which is a measure of effective ethical behaviour?',
    options: [
      { id: 'A', text: 'Full and prompt disclosure of potential conflicts of interest, and honesty about one\'s abilities and the performance of one\'s work.' },
      { id: 'B', text: 'Referring all difficult decisions to the legal department, so that the business analyst is never personally exposed to an ethical dilemma.' },
      { id: 'C', text: 'Avoiding any decision that could disadvantage a stakeholder, even when the change as a whole would benefit the organization.' },
      { id: 'D', text: 'Documenting every decision in writing and asking the sponsor to sign it before it is communicated to the stakeholders.' }
    ], answer: 'A',
    explanation: 'Fra le misure: identificazione e risoluzione tempestiva dei dilemmi etici, feedback degli stakeholder che confermano di percepire decisioni e azioni come trasparenti ed eque, decisioni prese considerando gli interessi di tutti, razionale articolato chiaramente, piena e tempestiva dichiarazione dei conflitti di interesse e onestà sulle proprie capacità.' },
  { id: 'C-9.2.1-3', ref: '9.2.1', style: 'knowledge', source: 'BABOK Guide, 9.2.1',
    stem: 'Why is the ability to recognize when a proposed solution may present ethical difficulties important?',
    options: [
      { id: 'A', text: 'Because it helps reduce the organization\'s exposure to risk, and behaving ethically earns the respect of stakeholders.' },
      { id: 'B', text: 'Because ethical issues always have legal consequences that the organization must report to the authorities.' },
      { id: 'C', text: 'Because it transfers responsibility for the solution to the sponsor, who must then decide how to proceed.' },
      { id: 'D', text: 'Because regulators require a formal ethical assessment of every solution before it can be implemented in production.' }
    ], answer: 'A',
    explanation: 'Il purpose della competenza lega esplicitamente il comportamento etico a due esiti: guadagnare il rispetto degli stakeholder e ridurre l\'esposizione al rischio riconoscendo per tempo le difficoltà etiche di una soluzione o di un requisito.' },

  { id: 'C-9.2.2-1', ref: '9.2.2', style: 'knowledge', source: 'BABOK Guide, 9.2.2',
    stem: 'What does personal accountability include?',
    options: [
      { id: 'A', text: 'Effectively planning business analysis work to achieve targets and goals, and ensuring value delivered is aligned with business needs.' },
      { id: 'B', text: 'Accepting responsibility for the decisions taken by stakeholders, even when the business analyst was not involved in making those decisions.' },
      { id: 'C', text: 'Working independently of the delivery team, so that the analysis is not influenced by how the solution will be built.' },
      { id: 'D', text: 'Reporting progress only when milestones are reached, so that stakeholders are not distracted by partial or provisional results.' }
    ], answer: 'A',
    explanation: 'La personal accountability comprende pianificare efficacemente il lavoro per raggiungere target e obiettivi, assicurare che il valore consegnato sia allineato ai business need e inseguire ogni filo lasciato in sospeso fino a soddisfare pienamente gli stakeholder.' },
  { id: 'C-9.2.2-2', ref: '9.2.2', style: 'knowledge', source: 'BABOK Guide, 9.2.2',
    stem: 'Which is a measure of effective personal accountability?',
    options: [
      { id: 'A', text: 'The status of planned and unplanned work is known, and work is completed as planned or re-planned with sufficient reasoning and lead time.' },
      { id: 'B', text: 'All work is completed exactly as originally planned, without any change to the scope, sequence, or timing agreed with the stakeholders at the start.' },
      { id: 'C', text: 'Unplanned work is always refused, so that the schedule agreed with the stakeholders is protected from any disruption.' },
      { id: 'D', text: 'Deadlines are set by the business analyst alone, since they know best how long each business analysis activity will take.' }
    ], answer: 'A',
    explanation: 'Il BABOK ammette esplicitamente la ripianificazione, purché con motivazione sufficiente e preavviso adeguato: l\'accountability non è rigidità. Fra le altre misure: lo sforzo è pianificato e articolabile, gli stakeholder percepiscono il lavoro come organizzato, rischi e problemi sono identificati e affrontati.' },
  { id: 'C-9.2.2-3', ref: '9.2.2', style: 'knowledge', source: 'BABOK Guide, 9.2.2',
    stem: 'Why is personal accountability important for a business analyst?',
    options: [
      { id: 'A', text: 'It ensures tasks are completed on time and to expectations, enabling the analyst to establish credibility.' },
      { id: 'B', text: 'It removes the need for governance oversight, since the analyst takes full responsibility for every decision.' },
      { id: 'C', text: 'It transfers the ownership of every risk in the initiative to the business analyst.' },
      { id: 'D', text: 'It guarantees that stakeholders will agree on the requirements without lengthy discussion.' }
    ], answer: 'A',
    explanation: 'Il purpose lega l\'accountability alla credibilità: completare i task nei tempi e secondo le aspettative di colleghi e stakeholder è ciò che permette di stabilire credibilità assicurando che il lavoro soddisfi i bisogni del business.' },

  { id: 'C-9.2.3-1', ref: '9.2.3', style: 'knowledge', source: 'BABOK Guide, 9.2.3',
    stem: 'How does the BABOK Guide define trustworthiness?',
    options: [
      { id: 'A', text: 'The perception that one is worthy of trust.' },
      { id: 'B', text: 'The consistent application of organizational policy.' },
      { id: 'C', text: 'The ability to keep confidential information secure.' },
      { id: 'D', text: 'The accuracy of the information one provides.' }
    ], answer: 'A',
    explanation: 'La trustworthiness è la percezione altrui di essere degni di fiducia: si guadagna, non si dichiara. Il BABOK aggiunge che un business analyst considerato affidabile può compensare la naturale paura del cambiamento provata da molti stakeholder.' },
  { id: 'C-9.2.3-2', ref: '9.2.3', style: 'knowledge', source: 'BABOK Guide, 9.2.3',
    stem: 'Which is a measure of effective trustworthiness?',
    options: [
      { id: 'A', text: 'Stakeholders are willing to discuss difficult or controversial topics with the business analyst, and bring issues and concerns to them.' },
      { id: 'B', text: 'Stakeholders approve the requirements without asking for any revision, since they trust the analyst\'s work completely.' },
      { id: 'C', text: 'Stakeholders delegate their decisions to the business analyst, who then takes them on behalf of the whole group.' },
      { id: 'D', text: 'Stakeholders rarely need to contact the business analyst, because the information they receive never raises any questions or concerns.' }
    ], answer: 'A',
    explanation: 'Le misure sono tutte comportamenti degli stakeholder: coinvolgono l\'analista nelle discussioni e nelle decisioni, gli portano problemi e preoccupazioni, discutono con lui temi difficili, non lo incolpano quando emergono problemi, rispettano le sue idee e rispondono positivamente ai suoi suggerimenti.' },
  { id: 'C-9.2.3-3', ref: '9.2.3', style: 'knowledge', source: 'BABOK Guide, 9.2.3',
    stem: 'Why does earning stakeholder trust matter for elicitation?',
    options: [
      { id: 'A', text: 'It helps elicit information on sensitive issues and gives stakeholders confidence that their recommendations will be evaluated properly and fairly.' },
      { id: 'B', text: 'It shortens the time required for each interview, since trusting stakeholders answer every question without first asking why it is being asked of them.' },
      { id: 'C', text: 'It removes the need to confirm the elicitation results, because trusted stakeholders always provide accurate information.' },
      { id: 'D', text: 'It allows the business analyst to decide on behalf of stakeholders, who accept the recommendations without examining them.' }
    ], answer: 'A',
    explanation: 'È il purpose della competenza: la fiducia apre l\'accesso alle informazioni sensibili, quelle che nessuno consegna a chi non ritiene affidabile, e dà agli stakeholder la sicurezza che le loro raccomandazioni saranno valutate correttamente ed equamente.' },

  { id: 'C-9.2.4-1', ref: '9.2.4', style: 'knowledge', source: 'BABOK Guide, 9.2.4',
    stem: 'What does organization and time management involve?',
    options: [
      { id: 'A', text: 'Prioritizing tasks, performing them efficiently, and managing time effectively, while organizing and storing accumulated information for reuse.' },
      { id: 'B', text: 'Delegating low-priority tasks to other team members, so that the business analyst can concentrate on the activities that matter most.' },
      { id: 'C', text: 'Limiting the number of meetings attended each week, so that there is enough uninterrupted time left for analysis and documentation.' },
      { id: 'D', text: 'Maintaining the project schedule on behalf of the project manager, and reporting any delay in business analysis work to the sponsor as soon as it occurs.' }
    ], answer: 'A',
    explanation: 'La competenza include la gestione delle grandi quantità di informazioni che i business analyst accumulano di continuo: vanno organizzate e archiviate in modo efficiente per poter essere usate e riusate in seguito.' },
  { id: 'C-9.2.4-2', ref: '9.2.4', style: 'knowledge', source: 'BABOK Guide, 9.2.4',
    stem: 'Which is a measure of effective organization and time management?',
    options: [
      { id: 'A', text: 'Stakeholders feel their time in meetings and in reading communications is well spent.' },
      { id: 'B', text: 'The business analyst attends every meeting they are invited to, whatever its relevance to the initiative.' },
      { id: 'C', text: 'All documentation is produced before analysis begins, so the stakeholders can read it in advance.' },
      { id: 'D', text: 'Meetings are always kept under one hour, regardless of the topics on the agenda.' }
    ], answer: 'A',
    explanation: 'Diverse misure guardano alla percezione degli stakeholder: che l\'analista si concentri sui task giusti al momento giusto e che il loro tempo in riunione e nella lettura sia ben speso. Altre riguardano la consegna puntuale, la comunicazione delle scadenze e la preparazione completa di riunioni, interviste e workshop.' },
  { id: 'C-9.2.4-3', ref: '9.2.4', style: 'applied', source: 'BABOK Guide, 9.2.4',
    stem: 'A business analysis professional arrives at a requirements workshop without having reviewed the pre-reading or prepared the agenda items. Which effectiveness measure is NOT met?',
    options: [
      { id: 'A', text: 'Complete preparation for meetings, interviews, and requirements workshops.' },
      { id: 'B', text: 'Relevant business analysis information is captured, documented, and kept up to date.' },
      { id: 'C', text: 'The ability to produce deliverables in a timely manner.' },
      { id: 'D', text: 'Schedule of work effort is communicated to stakeholders.' }
    ], answer: 'A',
    explanation: 'La preparazione completa di riunioni, interviste e workshop è una misura esplicita di questa competenza, e si riflette direttamente su un\'altra: che gli stakeholder sentano il proprio tempo ben speso.' },

  { id: 'C-9.2.5-1', ref: '9.2.5', style: 'knowledge', source: 'BABOK Guide, 9.2.5',
    stem: 'How is adaptability defined?',
    options: [
      { id: 'A', text: 'The ability to change techniques, style, methods, and approach.' },
      { id: 'B', text: 'The ability to work under pressure without any loss of quality in the analysis.' },
      { id: 'C', text: 'The willingness to accept decisions taken by others.' },
      { id: 'D', text: 'The capacity to learn new domains quickly.' }
    ], answer: 'A',
    explanation: 'Dimostrando disponibilità a interagire e completare i compiti in un modo preferibile per gli stakeholder, i business analyst massimizzano la qualità del servizio. The Business Analysis Standard la sintetizza come "adjusting behavioural style to increase effectiveness".' },
  { id: 'C-9.2.5-2', ref: '9.2.5', style: 'knowledge', source: 'BABOK Guide, 9.2.5',
    stem: 'Which is a measure of effective adaptability?',
    options: [
      { id: 'A', text: 'Demonstrating a positive attitude in the face of ambiguity and change, and the courage to act differently from others.' },
      { id: 'B', text: 'Maintaining the chosen approach despite changing conditions, so that stakeholders always know what to expect from the analyst.' },
      { id: 'C', text: 'Adopting the approach preferred by the majority of the team, even when the analyst believes another one would work better.' },
      { id: 'D', text: 'Avoiding methods the analyst has not used before, so that the risk of mistakes in unfamiliar situations is kept low.' }
    ], answer: 'A',
    explanation: 'Fra le misure: coraggio di agire diversamente dagli altri, adattamento a condizioni e ambienti che cambiano, valorizzazione di punti di vista e approcci altrui, atteggiamento positivo di fronte ad ambiguità e cambiamento, disponibilità a imparare metodi nuovi e capacità di modificare il comportamento in condizioni mutevoli o poco chiare.' },
  { id: 'C-9.2.5-3', ref: '9.2.5', style: 'applied', source: 'BABOK Guide, 9.2.5',
    stem: 'A business analysis professional prefers detailed written specifications, but the team they have joined works through conversation and lightweight models. They adjust their style accordingly. Which competency is this?',
    options: [
      { id: 'A', text: 'Adaptability' },
      { id: 'B', text: 'Teamwork' },
      { id: 'C', text: 'Methodology Knowledge' },
      { id: 'D', text: 'Personal Accountability' }
    ], answer: 'A',
    explanation: 'Cambiare tecniche, stile, metodi e approccio per interagire e lavorare in un modo preferibile per gli stakeholder è la definizione stessa di adaptability, una delle cinque competenze fondazionali di The Business Analysis Standard.' },

  /* ===== 9.3 Business Knowledge ===== */

  { id: 'C-9.3.1-1', ref: '9.3.1', style: 'knowledge', source: 'BABOK Guide, 9.3.1',
    stem: 'How is business acumen defined?',
    options: [
      { id: 'A', text: 'The ability to understand business needs using experience and knowledge from other situations, since organizations frequently share similar practices.' },
      { id: 'B', text: 'Detailed knowledge of the enterprise\'s own structure, its business units, the relationships between them, and the people who occupy its key positions.' },
      { id: 'C', text: 'Familiarity with the methodologies the organization uses, including the timing, approach, and roles they define for a change.' },
      { id: 'D', text: 'Knowledge of the commercially available solutions in the market, so that options can be compared with the existing solution.' }
    ], answer: 'A',
    explanation: 'Le organizzazioni condividono spesso pratiche simili — requisiti legali e regolatori, finanza, logistica, vendite, marketing, supply chain, risorse umane, tecnologia — e il business acumen è la capacità di comprendere e applicare quella conoscenza comune. {B} è Organization Knowledge, {C} Methodology Knowledge, {D} Solution Knowledge.' },
  { id: 'C-9.3.1-2', ref: '9.3.1', style: 'knowledge', source: 'BABOK Guide, 9.3.1',
    stem: 'Which is a measure of effective business acumen?',
    options: [
      { id: 'A', text: 'Recognizing when a changed situation may require a change of direction for the initiative, and seeing opportunities to cut expenses and increase profits.' },
      { id: 'B', text: 'Knowing the major competitors and partners of the industry, and the market forces and trends that shape their behaviour.' },
      { id: 'C', text: 'Being able to identify the subject matter experts in the organization and the formal and informal lines of authority between them.' },
      { id: 'D', text: 'Being familiar with the tools and techniques prescribed by a methodology, and able to adapt them to the organization\'s own working environment and culture.' }
    ], answer: 'A',
    explanation: 'Fra le misure del business acumen: riconoscere limitazioni e opportunità potenziali, riconoscere quando un cambiamento di situazione richiede un cambio di direzione, comprendere i rischi e saper decidere su come gestirli. {B} è Industry Knowledge, {C} Organization Knowledge, {D} Methodology Knowledge.' },
  { id: 'C-9.3.1-3', ref: '9.3.1', style: 'knowledge', source: 'BABOK Guide, 9.3',
    stem: 'Which competencies make up the Business Knowledge group?',
    options: [
      { id: 'A', text: 'Business Acumen, Industry Knowledge, Organization Knowledge, Solution Knowledge, Methodology Knowledge' },
      { id: 'B', text: 'Business Acumen, Systems Thinking, Conceptual Thinking, Organization and Time Management, Adaptability' },
      { id: 'C', text: 'Industry Knowledge, Ethics, Trustworthiness, Business Analysis Tools and Technology, Facilitation' },
      { id: 'D', text: 'Organization Knowledge, Verbal Communication, Listening, Teamwork, Negotiation and Conflict Resolution' }
    ], answer: 'A',
    explanation: 'Le cinque competenze del gruppo si distinguono per l\'oggetto della conoscenza: il business in generale, il settore, la propria impresa, la soluzione e la metodologia. Conviene sapere a quale gruppo appartiene ciascuna delle 29 competenze.' },

  { id: 'C-9.3.2-1', ref: '9.3.2', style: 'knowledge', source: 'BABOK Guide, 9.3.2',
    stem: 'What does industry knowledge comprise?',
    options: [
      { id: 'A', text: 'An understanding of the trends, market forces and drivers, key processes, products, customer segments, suppliers, practices, and regulations of an industry.' },
      { id: 'B', text: 'An understanding of how the enterprise generates profits and accomplishes its goals, how its business units relate, and who occupies its key stakeholder positions.' },
      { id: 'C', text: 'Knowledge of the solution components already deployed in the enterprise and of the capabilities they offer but do not yet use.' },
      { id: 'D', text: 'Knowledge of the tools used to model, document, and trace requirements, and of the strengths and weaknesses of each of them.' }
    ], answer: 'A',
    explanation: 'L\'industry knowledge guarda fuori dall\'impresa: comprende anche come l\'azienda è posizionata rispetto al settore e i processi simili in settori affini. {B} è Organization Knowledge, che guarda invece dentro.' },
  { id: 'C-9.3.2-2', ref: '9.3.2', style: 'knowledge', source: 'BABOK Guide, 9.3.2',
    stem: 'Which is a measure of effective industry knowledge?',
    options: [
      { id: 'A', text: 'Being knowledgeable of sources of information about the industry, including relevant trade organizations or journals.' },
      { id: 'B', text: 'The ability to navigate organizational relationships and politics, acting through both formal and informal channels.' },
      { id: 'C', text: 'Understanding the terminology and jargon used within the organization and by its different business units.' },
      { id: 'D', text: 'The ability to play multiple roles within the activities prescribed by the methodology in use.' }
    ], answer: 'A',
    explanation: 'Fra le misure: consapevolezza delle attività dentro l\'impresa e nel settore più ampio, conoscenza di concorrenti e partner principali, capacità di identificare i trend chiave, familiarità con i maggiori segmenti di clientela e con prodotti comuni, e conoscenza delle fonti di informazione sul settore.' },
  { id: 'C-9.3.2-3', ref: '9.3.2', style: 'applied', source: 'BABOK Guide, 9.3.2 e 9.3.3',
    stem: 'A business analysis professional needs to know both who the organization\'s main competitors are and which internal unit owns a given process. Which two competencies are involved?',
    options: [
      { id: 'A', text: 'Industry Knowledge for the competitors, Organization Knowledge for the internal ownership.' },
      { id: 'B', text: 'Organization Knowledge for the competitors, Industry Knowledge for the internal ownership.' },
      { id: 'C', text: 'Business Acumen for both.' },
      { id: 'D', text: 'Solution Knowledge for both.' }
    ], answer: 'A',
    explanation: 'La conoscenza dei concorrenti principali è una misura dell\'industry knowledge; la capacità di identificare gli SME, navigare relazioni e politiche organizzative e comprendere il gergo interno appartiene all\'organization knowledge. {B} inverte le due competenze.' },
{ id: 'C-9.3.3-1', ref: '9.3.3', style: 'knowledge', source: 'BABOK Guide, 9.3.3',
    stem: 'What does organization knowledge include?',
    options: [
      { id: 'A', text: 'An understanding of how the enterprise makes profits and meets its goals, its structure, how business units relate, and who holds key positions.' },
      { id: 'B', text: 'An understanding of the market forces, trends, customer segments, and regulations that shape the wider industry in which the enterprise currently operates.' },
      { id: 'C', text: 'An understanding of the methodologies used to manage change, including their timing, roles, and the level of risk they accept.' },
      { id: 'D', text: 'An understanding of the commercially available solutions and suppliers that could replace or extend the enterprise\'s existing solution.' }
    ], answer: 'A',
    explanation: 'L\'organization knowledge è la conoscenza interna dell\'impresa: come guadagna, come raggiunge i suoi obiettivi, com\'è strutturata, come si relazionano le unità e chi occupa le posizioni chiave.' },
  { id: 'C-9.3.3-2', ref: '9.3.3', style: 'knowledge', source: 'BABOK Guide, 9.3.3',
    stem: 'Which is a measure of effective organization knowledge?',
    options: [
      { id: 'A', text: 'Acting according to formal and informal communication and authority channels, and navigating organizational relationships and politics.' },
      { id: 'B', text: 'The ability to identify the key trends shaping the industry and the way competitors are responding to them.' },
      { id: 'C', text: 'Reduced time or cost to implement a required change, thanks to the business analyst\'s previous experience of working with the existing solution.' },
      { id: 'D', text: 'The willingness to learn a new methodology and to adapt to changes in the way the organization manages change.' }
    ], answer: 'A',
    explanation: 'La menzione esplicita dei canali informali è significativa: come segnala anche il limite dell\'organizational modelling, l\'organigramma non cattura autorità e influenza reali. Fra le altre misure: comprendere terminologia e gergo interni, conoscere prodotti e servizi e saper identificare gli SME.' },
  { id: 'C-9.3.3-3', ref: '9.3.3', style: 'applied', source: 'BABOK Guide, 9.3.3',
    stem: 'A newly hired business analysis professional cannot work out who really needs to be consulted before a decision, despite having the org chart. Which competency needs developing?',
    options: [
      { id: 'A', text: 'Organization Knowledge' },
      { id: 'B', text: 'Industry Knowledge' },
      { id: 'C', text: 'Business Acumen' },
      { id: 'D', text: 'Solution Knowledge' }
    ], answer: 'A',
    explanation: 'Agire secondo i canali di comunicazione e autorità formali e informali, identificare gli SME e navigare relazioni e politiche organizzative sono tutte misure dell\'organization knowledge: esattamente ciò che l\'organigramma da solo non fornisce.' },

  { id: 'C-9.3.4-1', ref: '9.3.4', style: 'knowledge', source: 'BABOK Guide, 9.3.4',
    stem: 'What does solution knowledge allow business analysts to do?',
    options: [
      { id: 'A', text: 'Apply experience from previous work on a solution, and use familiarity with commercially available solutions or suppliers to identify possible alternatives.' },
      { id: 'B', text: 'Understand the profit model of the enterprise, how it accomplishes its goals, and how its business units relate to one another and to the wider market it serves.' },
      { id: 'C', text: 'Identify the key trends shaping the industry, together with the market forces and drivers behind them.' },
      { id: 'D', text: 'Adapt to changes in the methodology being used and play multiple roles within the activities it prescribes.' }
    ], answer: 'A',
    explanation: 'La solution knowledge conta soprattutto quando lo sforzo di analisi riguarda il miglioramento di una soluzione esistente: la conoscenza pregressa accelera il lavoro e la familiarità con il mercato aiuta a individuare alternative.' },
  { id: 'C-9.3.4-2', ref: '9.3.4', style: 'knowledge', source: 'BABOK Guide, 9.3.4',
    stem: 'Which is a measure of effective solution knowledge?',
    options: [
      { id: 'A', text: 'Understanding how additional capabilities that are present, but not currently used, can be deployed to provide value.' },
      { id: 'B', text: 'Understanding the terminology and jargon used across the organization and its business units.' },
      { id: 'C', text: 'Being aware of activities within the broader industry and of the trends that affect competitors.' },
      { id: 'D', text: 'The ability to produce business analysis deliverables in a timely manner, as planned and agreed with the stakeholders.' }
    ], answer: 'A',
    explanation: 'Fra le misure: tempi o costi ridotti per implementare un cambiamento, tempi più brevi di analisi dei requisiti o di design, capacità di capire quando un cambiamento maggiore è giustificato dal beneficio di business, e saper sfruttare capability già presenti ma non utilizzate.' },
  { id: 'C-9.3.4-3', ref: '9.3.4', style: 'applied', source: 'BABOK Guide, 9.3.4',
    stem: 'Before proposing a costly new module, a business analysis professional discovers the existing platform already offers the capability, unused and unconfigured. Which competency produced this outcome?',
    options: [
      { id: 'A', text: 'Solution Knowledge' },
      { id: 'B', text: 'Business Acumen' },
      { id: 'C', text: 'Systems Thinking' },
      { id: 'D', text: 'Creative Thinking' }
    ], answer: 'A',
    explanation: 'Comprendere come capability già presenti ma non utilizzate possano essere attivate per generare valore è una misura esplicita della solution knowledge, e si traduce direttamente in tempi e costi di implementazione ridotti.' },

  { id: 'C-9.3.5-1', ref: '9.3.5', style: 'knowledge', source: 'BABOK Guide, 9.3.5',
    stem: 'What do methodologies determine?',
    options: [
      { id: 'A', text: 'The timing, the approach, the role of those involved, the accepted risk level, and other aspects of how a change is managed.' },
      { id: 'B', text: 'The business goals and objectives that the change must achieve, and the measures used to assess them.' },
      { id: 'C', text: 'The stakeholders who hold approval authority over requirements and designs, and how they exercise it.' },
      { id: 'D', text: 'The technical architecture of the solution and the technologies and platforms that the delivery team will use to build it.' }
    ], answer: 'A',
    explanation: 'Il timing riguarda grandi passi o piccoli incrementi. Le organizzazioni adottano o creano metodologie proprie per adattarle a livelli diversi di cultura, maturità, adattabilità, rischio, incertezza e governance.' },
  { id: 'C-9.3.5-2', ref: '9.3.5', style: 'knowledge', source: 'BABOK Guide, 9.3.5',
    stem: 'Which is a measure of effective methodology knowledge?',
    options: [
      { id: 'A', text: 'Integrating business analysis tasks and techniques successfully to support the current methodology, and being able to play multiple roles within it.' },
      { id: 'B', text: 'Adherence to a single methodology across all initiatives, so that every change in the organization is managed in exactly the same way, whatever its nature.' },
      { id: 'C', text: 'The ability to define new methodologies for the organization whenever the existing ones prove inefficient for a given initiative.' },
      { id: 'D', text: 'Knowledge of the regulations governing the industry and of how they constrain the way changes may be delivered.' }
    ], answer: 'A',
    explanation: 'Fra le misure: capacità di adattarsi ai cambi di metodologia, disponibilità a usarne o impararne una nuova, integrazione riuscita di task e tecniche di business analysis nella metodologia corrente, familiarità con termini, strumenti e tecniche prescritti e capacità di ricoprire più ruoli.' },
  { id: 'C-9.3.5-3', ref: '9.3.5', style: 'knowledge', source: 'BABOK Guide, 9.3.5',
    stem: 'What does understanding the organization\'s methodologies provide to the business analyst?',
    options: [
      { id: 'A', text: 'Information regarding context, dependencies, opportunities, and constraints used when developing a business analysis approach.' },
      { id: 'B', text: 'The authority to change the methodology whenever the business analyst considers it inefficient for the particular initiative at hand.' },
      { id: 'C', text: 'An exemption from the governance requirements that apply to other members of the initiative team.' },
      { id: 'D', text: 'A guarantee that the business analysis approach chosen will suit the initiative, whatever its context.' }
    ], answer: 'A',
    explanation: 'È il purpose della competenza, e collega direttamente al task Plan Business Analysis Approach (3.1): la metodologia in uso è uno degli elementi di contesto che determinano quale approccio di business analysis sia praticabile.' },

  /* ===== 9.4 Communication Skills ===== */

  { id: 'C-9.4.1-1', ref: '9.4.1', style: 'knowledge', source: 'BABOK Guide, 9.4.1',
    stem: 'What does verbal communication allow, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'Efficient transfer of information, including emotional and non-verbal cues, and it can be combined with written and non-verbal communication.' },
      { id: 'B', text: 'A permanent record of what was agreed, which can be consulted later by stakeholders who were not present.' },
      { id: 'C', text: 'Communication that cannot be misinterpreted, since the speaker can immediately clarify any point that is unclear.' },
      { id: 'D', text: 'The elimination of the need for models and diagrams, since everything that matters can be explained directly and in person to the stakeholders.' }
    ], answer: 'A',
    explanation: 'La comunicazione verbale usa parole pronunciate per trasferire informazione dal mittente al ricevente, consente un trasferimento efficiente che include segnali emotivi e non verbali, e si combina con quella scritta e non verbale. La registrazione permanente ({B}) è invece un pregio della forma scritta.' },
  { id: 'C-9.4.1-2', ref: '9.4.1', style: 'knowledge', source: 'BABOK Guide, 9.4.1',
    stem: 'Which is a measure of effective verbal communication?',
    options: [
      { id: 'A', text: 'Restating concepts so that all stakeholders understand the same information, and communicating an issue\'s important points calmly and rationally.' },
      { id: 'B', text: 'Speaking for the shortest time necessary, so that stakeholders do not lose attention during long explanations or lengthy meetings with many participants.' },
      { id: 'C', text: 'Avoiding technical terms in all situations, even when the audience consists entirely of technical specialists.' },
      { id: 'D', text: 'Ensuring that the most senior stakeholder always speaks last, so that their view does not influence what the others say.' }
    ], answer: 'A',
    explanation: 'Fra le misure: riformulare i concetti perché tutti comprendano la stessa informazione, aiutare le conversazioni a giungere a conclusioni produttive, tenere presentazioni efficaci progettando contenuti e obiettivi in modo appropriato, ed esporre i punti importanti con calma presentando opzioni di soluzione.' },
  { id: 'C-9.4.1-3', ref: '9.4.1', style: 'knowledge', source: 'BABOK Guide, 9.4',
    stem: 'Which four competencies form the Communication Skills group?',
    options: [
      { id: 'A', text: 'Verbal Communication, Non-Verbal Communication, Written Communication, Listening' },
      { id: 'B', text: 'Verbal Communication, Facilitation, Negotiation and Conflict Resolution, Listening' },
      { id: 'C', text: 'Written Communication, Visual Thinking, Teaching, Leadership and Influencing' },
      { id: 'D', text: 'Listening, Teamwork, Leadership and Influencing, Facilitation' }
    ], answer: 'A',
    explanation: 'Il gruppo Communication Skills ne conta quattro. Facilitation, Teaching, Teamwork, Leadership and Influencing e Negotiation and Conflict Resolution appartengono invece alle Interaction Skills: è la confusione che i distrattori sfruttano.' },

  { id: 'C-9.4.2-1', ref: '9.4.2', style: 'knowledge', source: 'BABOK Guide, 9.4.2',
    stem: 'What does the BABOK Guide say about non-verbal communication?',
    options: [
      { id: 'A', text: 'It is believed to convey far more meaning than words alone, as moods, attitudes, and feelings affect body movement and expressions.' },
      { id: 'B', text: 'It is unreliable and should not be interpreted at all, since gestures and expressions vary from person to person.' },
      { id: 'C', text: 'It applies only to face-to-face meetings with stakeholders, and plays no role at all in video calls, telephone conversations, or messages.' },
      { id: 'D', text: 'It is a substitute for verbal communication when stakeholders do not share a language, and can replace words entirely.' }
    ], answer: 'A',
    explanation: 'Il BABOK osserva che la comunicazione non verbale trasmette, a quanto si ritiene, molto più significato delle sole parole, perché umori, atteggiamenti e sentimenti incidono su movimenti del corpo ed espressioni facciali. Avverte però di non presumere una comprensione completa dai soli segnali non verbali: si osservano, non si interpretano come certezze.' },
  { id: 'C-9.4.2-2', ref: '9.4.2', style: 'knowledge', source: 'BABOK Guide, 9.4.2',
    stem: 'Which is a measure of effective non-verbal communication?',
    options: [
      { id: 'A', text: 'Being aware of others\' body language without assuming a complete understanding through it, and being intentionally aware of one\'s own.' },
      { id: 'B', text: 'Correctly identifying every stakeholder\'s emotional state from their body language, without needing to ask them how they feel.' },
      { id: 'C', text: 'Maintaining a neutral expression at all times, so that stakeholders cannot read the business analyst\'s own reaction to what they are saying.' },
      { id: 'D', text: 'Relying on body language rather than asking questions, since non-verbal signals reveal what stakeholders really think.' }
    ], answer: 'A',
    explanation: 'La misura contiene una cautela esplicita: essere consapevoli del linguaggio del corpo altrui senza presumere di comprenderlo pienamente. Un\'altra misura riguarda l\'affrontare e risolvere le situazioni in cui il non verbale di uno stakeholder non concorda con il suo messaggio verbale.' },
  { id: 'C-9.4.2-3', ref: '9.4.2', style: 'applied', source: 'BABOK Guide, 9.4.2',
    stem: 'A stakeholder says they agree with a proposal but their posture and expression suggest reluctance. What does the BABOK Guide indicate?',
    options: [
      { id: 'A', text: 'Address and resolve the situation in which the stakeholder\'s non-verbal communication does not agree with their verbal message.' },
      { id: 'B', text: 'Record the verbal agreement and move on, since what the stakeholder says is their formal position on the proposal.' },
      { id: 'C', text: 'Assume the non-verbal message is the true one and act on it, treating the proposal as rejected by the stakeholder.' },
      { id: 'D', text: 'Raise the discrepancy with the stakeholder\'s line manager, who is better placed to find out what the stakeholder really thinks of it.' }
    ], answer: 'A',
    explanation: 'Fra le misure di efficacia c\'è proprio l\'affrontare e risolvere questi disallineamenti. Nessuno dei due estremi funziona: né ignorare il segnale ({B}) né darlo per vero senza verificarlo ({C}), perché il BABOK avverte di non presumere una comprensione completa dal non verbale.' },

  { id: 'C-9.4.3-1', ref: '9.4.3', style: 'knowledge', source: 'BABOK Guide, 9.4.3',
    stem: 'What is written communication, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'The practice of using text, symbols, models (formal or informal), and sketches to convey and share information.' },
      { id: 'B', text: 'The production of formal documents that must be approved through the governance process before being shared.' },
      { id: 'C', text: 'Any communication that leaves a permanent record, whether it is an email, a recording, or a printed document.' },
      { id: 'D', text: 'The translation of verbal agreements into specifications that the delivery team can use to build the solution.' }
    ], answer: 'A',
    explanation: 'La definizione include esplicitamente simboli, modelli e schizzi: modellare è una forma di comunicazione scritta, non un\'attività separata. La comprensione del pubblico è utile per usarla efficacemente.' },
  { id: 'C-9.4.3-2', ref: '9.4.3', style: 'knowledge', source: 'BABOK Guide, 9.4.3',
    stem: 'Which is a measure of effective written communication?',
    options: [
      { id: 'A', text: 'The ability of the reader to paraphrase and describe the content of the written communication.' },
      { id: 'B', text: 'The length of the document relative to the complexity of the topic, so that nothing is left unexplained.' },
      { id: 'C', text: 'The number of stakeholders who acknowledge receipt of the document within the agreed time.' },
      { id: 'D', text: 'The consistent use of the organization\'s approved template for every written deliverable.' }
    ], answer: 'A',
    explanation: 'È la misura più esigente delle quattro: non basta scrivere bene, il lettore deve saper riformulare e descrivere il contenuto. Le altre misure sono adattare lo stile ai bisogni del pubblico, uso corretto di grammatica e stile e scelta di parole di cui il pubblico coglierà il significato inteso.' },
  { id: 'C-9.4.3-3', ref: '9.4.3', style: 'applied', source: 'BABOK Guide, 9.4.3',
    stem: 'A business analysis professional writes the same specification for executives and for developers, using identical wording. What does the BABOK Guide suggest instead?',
    options: [
      { id: 'A', text: 'Adjusting the writing style to the audience\'s needs and choosing words whose intended meaning that audience will understand.' },
      { id: 'B', text: 'Using the most precise technical terminology in both cases, so that the two audiences read exactly the same requirements in the same words.' },
      { id: 'C', text: 'Producing only a verbal briefing for executives, since they rarely read written specifications in any detail.' },
      { id: 'D', text: 'Delegating the executive version to the sponsor, who knows better than the analyst what the executives expect.' }
    ], answer: 'A',
    explanation: 'Adattare lo stile ai bisogni del pubblico e scegliere parole di cui il pubblico coglierà il significato inteso sono misure esplicite. Coincide con quanto chiede il task Communicate Business Analysis Information (4.4): linguaggio, tono e stile appropriati al destinatario.' },

  { id: 'C-9.4.4-1', ref: '9.4.4', style: 'knowledge', source: 'BABOK Guide, 9.4.4',
    stem: 'How is listening defined?',
    options: [
      { id: 'A', text: 'The process of not just hearing words but understanding their meaning in context.' },
      { id: 'B', text: 'The act of recording what stakeholders say accurately, without adding any interpretation.' },
      { id: 'C', text: 'Allowing the speaker to finish completely before giving any kind of response.' },
      { id: 'D', text: 'Summarizing the main points of a discussion once it has come to its conclusion.' }
    ], answer: 'A',
    explanation: 'La differenza fra udire e ascoltare è il significato nel contesto. Con un ascolto efficace il business analyst non solo comprende accuratamente ciò che viene comunicato, ma dimostra anche di ritenere importante ciò che l\'interlocutore dice.' },
  { id: 'C-9.4.4-2', ref: '9.4.4', style: 'knowledge', source: 'BABOK Guide, 9.4.4',
    stem: 'Which is a measure of effective listening?',
    options: [
      { id: 'A', text: 'Using active listening by deferring judgment and responding appropriately, and giving feedback to ensure there is understanding.' },
      { id: 'B', text: 'Taking verbatim notes of everything said, so that nothing can later be disputed by the participants in the discussion.' },
      { id: 'C', text: 'Asking questions only at the end of the discussion, so that the speaker is never interrupted while presenting their view.' },
      { id: 'D', text: 'Limiting interruptions to a fixed number per session, agreed in advance with all of the participants as part of the session\'s ground rules.' }
    ], answer: 'A',
    explanation: 'Fra le misure: dare all\'interlocutore attenzione indivisa, riconoscerlo con incoraggiamenti verbali o non verbali, fornire feedback alla persona o al gruppo per assicurare la comprensione, e usare l\'ascolto attivo sospendendo il giudizio e rispondendo in modo appropriato.' },
  { id: 'C-9.4.4-3', ref: '9.4.4', style: 'applied', source: 'BABOK Guide, 9.4.4',
    stem: 'During an interview a business analysis professional checks email between answers. Which effectiveness measure is compromised?',
    options: [
      { id: 'A', text: 'Giving the speaker undivided attention.' },
      { id: 'B', text: 'Deferring judgment when responding.' },
      { id: 'C', text: 'Providing feedback to ensure understanding.' },
      { id: 'D', text: 'Acknowledging the speaker non-verbally.' }
    ], answer: 'A',
    explanation: 'L\'attenzione indivisa è la prima misura dell\'ascolto efficace. Nel contesto di un\'intervista il danno è doppio, perché l\'ascolto serve anche a dimostrare che si ritiene importante ciò che l\'interlocutore dice — e quindi a costruire il rapport che l\'intervista dovrebbe produrre.' },
/* ===== 9.5 Interaction Skills ===== */

  { id: 'C-9.5.1-1', ref: '9.5.1', style: 'knowledge', source: 'BABOK Guide, 9.5.1',
    stem: 'How is facilitation defined?',
    options: [
      { id: 'A', text: 'The skill of moderating group discussions so that all participants can articulate their views and appreciate differing points of view.' },
      { id: 'B', text: 'The skill of guiding a group towards the conclusion that the business analyst considers correct, while letting participants feel they reached it themselves.' },
      { id: 'C', text: 'The skill of documenting accurately what a group has discussed and decided, so that the outcome of each session can be traced later.' },
      { id: 'D', text: 'The skill of selecting who should attend each session, so that only the participants whose views are most relevant take part in it.' }
    ], answer: 'A',
    explanation: 'La facilitation ha due obiettivi congiunti: permettere a tutti di esprimersi efficacemente e far riconoscere e apprezzare i punti di vista divergenti. Guidare verso una conclusione predeterminata ({B}) violerebbe la neutralità richiesta.' },
  { id: 'C-9.5.1-2', ref: '9.5.1', style: 'knowledge', source: 'BABOK Guide, 9.5.1',
    stem: 'Which is a measure of effective facilitation?',
    options: [
      { id: 'A', text: 'Making it clear that the facilitator is a third party to the process, not a decision maker nor the owner of the topic.' },
      { id: 'B', text: 'Ensuring the session always reaches a decision within the scheduled time, whatever the state of the discussion.' },
      { id: 'C', text: 'Taking a clear position on the topic when the group is deadlocked, so that the discussion can move forward.' },
      { id: 'D', text: 'Limiting contributions to the most knowledgeable participants, so that the discussion remains focused, efficient, and on schedule.' }
    ], answer: 'A',
    explanation: 'Fra le misure: chiarire di essere un terzo rispetto al processo, incoraggiare la partecipazione di tutti, restare neutrale senza prendere parti pur intervenendo quando serve per suggerire e offrire spunti, e stabilire regole di base. {C} contraddice la neutralità e {D} l\'incoraggiamento alla partecipazione.' },
  { id: 'C-9.5.1-3', ref: '9.5.1', style: 'applied', source: 'BABOK Guide, 9.5.1',
    stem: 'A facilitator remains neutral but notices the group has overlooked an important consideration. What does the BABOK Guide indicate?',
    options: [
      { id: 'A', text: 'Remain neutral without taking sides, while still intervening when required to make suggestions and offer insights.' },
      { id: 'B', text: 'Stay silent and let the group continue, since any intervention by the facilitator would compromise neutrality.' },
      { id: 'C', text: 'Take over the discussion and present the missing consideration to the group as a decision that has already been made.' },
      { id: 'D', text: 'Raise the point privately with the session owner afterwards, so that the facilitator\'s neutrality is never questioned.' }
    ], answer: 'A',
    explanation: 'La neutralità del facilitatore non è silenzio: la misura di efficacia richiede esplicitamente di intervenire quando serve, per suggerire e offrire spunti, restando imparziale e senza prendere parti.' },

  { id: 'C-9.5.2-1', ref: '9.5.2', style: 'knowledge', source: 'BABOK Guide, 9.5.2',
    stem: 'What does leadership and influencing involve?',
    options: [
      { id: 'A', text: 'Motivating people to work together towards shared goals, by understanding individual motives, needs, and capabilities.' },
      { id: 'B', text: 'Holding formal authority over the delivery team, so that instructions about the change can be given directly and followed.' },
      { id: 'C', text: 'Ensuring that decisions are always escalated to the appropriate level of authority before the team acts on them.' },
      { id: 'D', text: 'Assigning responsibilities to team members and monitoring their completion against the plan agreed with the sponsor.' }
    ], answer: 'A',
    explanation: 'La competenza non presuppone autorità formale ({B}): comprendere motivazioni, bisogni e capacità individuali di ciascuno stakeholder e saperle canalizzare efficacemente è ciò che consente di influenzare senza comandare.' },
  { id: 'C-9.5.2-2', ref: '9.5.2', style: 'knowledge', source: 'BABOK Guide, 9.5.2',
    stem: 'Which is a measure of effective leadership and influencing?',
    options: [
      { id: 'A', text: 'Reduced resistance to necessary changes, and influence on stakeholders to consider broader objectives over personal motivations.' },
      { id: 'B', text: 'The number of decisions taken without escalation, showing that the business analyst can settle issues independently of the sponsor.' },
      { id: 'C', text: 'The speed at which stakeholders comply with the requests made by the business analyst during the initiative.' },
      { id: 'D', text: 'The absence of any dissent in workshops, since a well-led group always agrees on the options presented to it.' }
    ], answer: 'A',
    explanation: 'Fra le misure: minore resistenza ai cambiamenti necessari, articolazione di una visione chiara e ispirante del future state, successo nell\'ispirare altri a tradurla in azione, influenza perché gli stakeholder comprendano gli interessi reciproci e uso efficace di tecniche di collaborazione. L\'assenza di dissenso ({D}) non è un indicatore di leadership.' },
  { id: 'C-9.5.2-3', ref: '9.5.2', style: 'applied', source: 'BABOK Guide, 9.5.2',
    stem: 'Two departments each push for the solution that suits them best, ignoring the overall business objective. Which competency addresses this most directly?',
    options: [
      { id: 'A', text: 'Leadership and Influencing, by influencing stakeholders to consider broader objectives over personal motivations.' },
      { id: 'B', text: 'Teamwork, by fostering a collaborative working environment and a shared sense of ownership of goals.' },
      { id: 'C', text: 'Facilitation, by moderating the discussion so that both departments can articulate their views.' },
      { id: 'D', text: 'Teaching, by explaining the business objective again until both departments can demonstrate that they understand it.' }
    ], answer: 'A',
    explanation: 'Influenzare gli stakeholder perché considerino obiettivi più ampi rispetto alle motivazioni personali è una misura specifica della Leadership and Influencing. Le altre competenze aiuterebbero, ma nessuna nomina questo esito preciso.' },

  { id: 'C-9.5.3-1', ref: '9.5.3', style: 'knowledge', source: 'BABOK Guide, 9.5.3',
    stem: 'What does the BABOK Guide say about teamwork for business analysts?',
    options: [
      { id: 'A', text: 'They often work in teams with other analysts, project managers, stakeholders, and SMEs, and relationships with these roles are critical to success.' },
      { id: 'B', text: 'They should maintain independence from the delivery team, so that their analysis stays objective and is not influenced by the team\'s preferences.' },
      { id: 'C', text: 'Teamwork applies only when the business analyst leads the team, since in other cases the project manager is responsible for it.' },
      { id: 'D', text: 'Team relationships are the responsibility of the project manager, so the business analyst can focus entirely on the analysis work.' }
    ], answer: 'A',
    explanation: 'Le relazioni con questi ruoli sono parte critica del successo di qualsiasi progetto o impresa. L\'indipendenza dal team ({B}) non è un valore che il BABOK promuove: la collaborazione lo è.' },
  { id: 'C-9.5.3-2', ref: '9.5.3', style: 'knowledge', source: 'BABOK Guide, 9.5.3',
    stem: 'Which is a measure of effective teamwork?',
    options: [
      { id: 'A', text: 'Fostering a collaborative environment, developing trust among team members, and promoting a shared sense of ownership of team goals.' },
      { id: 'B', text: 'Minimizing the number of meetings the team needs, so that members can spend more of their time on individual work.' },
      { id: 'C', text: 'Ensuring that each member works on separate deliverables, so that responsibilities never overlap and are always clear.' },
      { id: 'D', text: 'Preventing conflict from ever arising within the team, so that the working environment stays positive and productive throughout the initiative.' }
    ], answer: 'A',
    explanation: 'Fra le misure figura anche il risolvere efficacemente i conflitti, non il prevenirli del tutto ({D}): il conflitto è normale in un team, ciò che conta è come viene affrontato. Altra misura è il sostegno reciproco su standard elevati condivisi.' },
  { id: 'C-9.5.3-3', ref: '9.5.3', style: 'knowledge', source: 'BABOK Guide, 9.5',
    stem: 'Which five competencies form the Interaction Skills group?',
    options: [
      { id: 'A', text: 'Facilitation, Leadership and Influencing, Teamwork, Negotiation and Conflict Resolution, Teaching' },
      { id: 'B', text: 'Facilitation, Listening, Verbal Communication, Teamwork, Teaching' },
      { id: 'C', text: 'Leadership and Influencing, Adaptability, Trustworthiness, Teamwork, Ethics' },
      { id: 'D', text: 'Negotiation and Conflict Resolution, Written Communication, Facilitation, Teaching, Learning' }
    ], answer: 'A',
    explanation: 'Le Interaction Skills rappresentano la capacità del professionista di relazionarsi, cooperare e comunicare con persone diverse: executive, sponsor, colleghi, membri del team, sviluppatori, fornitori, utenti finali, clienti e SME. Listening e Verbal Communication ({B}) appartengono alle Communication Skills.' },

  { id: 'C-9.5.4-1', ref: '9.5.4', style: 'knowledge', source: 'BABOK Guide, 9.5.4',
    stem: 'What does negotiation and conflict resolution involve?',
    options: [
      { id: 'A', text: 'Mediating discussions so participants recognize differing views, resolve their differences, and reach conclusions that all of them agree with.' },
      { id: 'B', text: 'Determining which party has the stronger business case, and then helping the other party to accept the outcome of that analysis as gracefully as possible.' },
      { id: 'C', text: 'Escalating unresolved disagreements to the sponsor, who has the authority to decide between the positions of the parties.' },
      { id: 'D', text: 'Recording each party\'s position for the decision log, so that the reasons behind the final decision can be traced later.' }
    ], answer: 'A',
    explanation: 'Il professionista media: fa riconoscere le divergenze, aiuta a risolverle e conduce a conclusioni che raccolgono l\'accordo di tutti i partecipanti. Non arbitra ({B}) né si limita a verbalizzare ({D}).' },
  { id: 'C-9.5.4-2', ref: '9.5.4', style: 'knowledge', source: 'BABOK Guide, 9.5.4',
    stem: 'Which is a measure of effective negotiation and conflict resolution?',
    options: [
      { id: 'A', text: 'Recognizing that the parties\' needs are not always in opposition, and that it is often possible to satisfy both without either side losing.' },
      { id: 'B', text: 'Ensuring that the party with the strongest business need always prevails, since that maximizes the value delivered to the organization.' },
      { id: 'C', text: 'Reaching a compromise in which both sides concede equally, so that neither party feels it has lost more than the other.' },
      { id: 'D', text: 'Concluding the negotiation within a single session, so that the disagreement does not delay the rest of the initiative.' }
    ], answer: 'A',
    explanation: 'La misura smonta l\'assunto che una negoziazione sia a somma zero. Le altre misure includono un approccio pianificato che tiene conto di tono di voce, atteggiamento trasmesso, metodi usati e attenzione ai sentimenti e ai bisogni della controparte, e un approccio oggettivo che separa il problema dalle persone.' },
  { id: 'C-9.5.4-3', ref: '9.5.4', style: 'applied', source: 'BABOK Guide, 9.5.4',
    stem: 'A disagreement between two stakeholders is becoming personal. What does the BABOK Guide indicate?',
    options: [
      { id: 'A', text: 'Take an objective approach that ensures the problem is separated from the people involved.' },
      { id: 'B', text: 'Suspend the discussion until both parties agree to behave constructively towards each other.' },
      { id: 'C', text: 'Decide the matter on behalf of the parties to prevent any further escalation.' },
      { id: 'D', text: 'Ask each party to submit their position in writing before the next meeting.' }
    ], answer: 'A',
    explanation: 'Separare il problema dalle persone è una misura esplicita di efficacia, insieme alla cura di tono, atteggiamento e metodi e all\'attenzione ai bisogni della controparte. Decidere al posto delle parti ({C}) non è mediazione.' },

  { id: 'C-9.5.5-1', ref: '9.5.5', style: 'knowledge', source: 'BABOK Guide, 9.5.5',
    stem: 'How is teaching defined in the BABOK Guide?',
    options: [
      { id: 'A', text: 'The process of leading others to gain knowledge, with the analyst confirming that what was communicated has been understood.' },
      { id: 'B', text: 'The delivery of formal training courses to stakeholders, scheduled before the solution is released into production.' },
      { id: 'C', text: 'The documentation of knowledge in a shared repository, so that it can be found and reused in future initiatives.' },
      { id: 'D', text: 'The transfer of responsibility for a topic to a subject matter expert, who then explains it to the other stakeholders involved.' }
    ], answer: 'A',
    explanation: 'Il teaching non è tenere corsi: è condurre altri ad acquisire conoscenza, con la responsabilità di confermare che l\'informazione comunicata sia stata compresa. I business analyst guidano gli stakeholder a trovare chiarezza nell\'ambiguità.' },
  { id: 'C-9.5.5-2', ref: '9.5.5', style: 'knowledge', source: 'BABOK Guide, 9.5.5',
    stem: 'Which is a measure of effective teaching?',
    options: [
      { id: 'A', text: 'Verifying that stakeholders can demonstrate the new knowledge, facts, concepts, and ideas.' },
      { id: 'B', text: 'The number of training sessions delivered to stakeholders during the initiative.' },
      { id: 'C', text: 'The completeness of the training material distributed to every participant.' },
      { id: 'D', text: 'Stakeholder attendance at the knowledge-sharing sessions organized by the analyst.' }
    ], answer: 'A',
    explanation: 'La verifica sta nella dimostrazione, non nell\'erogazione: le misure includono usare metodi diversi per comunicare ciò che va appreso, scoprire nuove informazioni grazie a un elevato coinvolgimento degli stakeholder, validare che il pubblico abbia compreso chiaramente i messaggi chiave e verificare che sappia dimostrare le nuove conoscenze.' },
  { id: 'C-9.5.5-3', ref: '9.5.5', style: 'applied', source: 'BABOK Guide, 9.5.5',
    stem: 'After explaining a new process, a business analysis professional asks participants to walk through a case themselves. Why?',
    options: [
      { id: 'A', text: 'To verify that stakeholders can demonstrate the new knowledge, rather than assuming the explanation was understood.' },
      { id: 'B', text: 'To identify which participants still require formal training before the new process goes live.' },
      { id: 'C', text: 'To collect evidence of attendance and participation for the governance process.' },
      { id: 'D', text: 'To transfer accountability for the new process from the business analyst to the participants themselves.' }
    ], answer: 'A',
    explanation: 'Validare che il pubblico abbia compreso i messaggi chiave e verificare che sappia dimostrare le nuove conoscenze sono due misure del teaching. Rispecchia anche il task Communicate Business Analysis Information: non basta trasmettere, occorre accertarsi che sia stato compreso.' },

  /* ===== 9.6 Tools and Technology ===== */

  { id: 'C-9.6.1-1', ref: '9.6.1', style: 'knowledge', source: 'BABOK Guide, 9.6.1',
    stem: 'What do office productivity tools and technology provide business analysts with?',
    options: [
      { id: 'A', text: 'The ability to organize, dissect, manipulate, understand, and communicate information clearly.' },
      { id: 'B', text: 'Specialized modelling, diagramming, and requirements-mapping capabilities for analysis work.' },
      { id: 'C', text: 'Support for conversational and collaborative interactions with virtual and co-located teams.' },
      { id: 'D', text: 'Automated verification of requirements quality against the characteristics defined by the BABOK.' }
    ], answer: 'A',
    explanation: '{B} descrive i business analysis tools (9.6.2) e {C} i communication tools (9.6.3). Il BABOK nota che comprendere un programma può fornire intuizioni su altri simili: le competenze sugli strumenti sono in parte trasferibili.' },
  { id: 'C-9.6.1-2', ref: '9.6.1', style: 'knowledge', source: 'BABOK Guide, 9.6.1',
    stem: 'Which is a measure of effective use of office productivity tools?',
    options: [
      { id: 'A', text: 'Choosing the tool that best meets stakeholder needs, and knowing which tools are available and how they work.' },
      { id: 'B', text: 'The number of different tools the analyst has mastered, regardless of whether they meet the needs of the stakeholders.' },
      { id: 'C', text: 'The use of the same tool across all initiatives, so that stakeholders never have to learn a new one when the context changes.' },
      { id: 'D', text: 'The speed at which documents are produced, since a faster output always means that the tool is being used more effectively.' }
    ], answer: 'A',
    explanation: 'Fra le misure: maggiore efficienza e snellimento dei processi esplorando funzioni e caratteristiche degli strumenti, consapevolezza degli strumenti disponibili, capacità di scegliere quello che meglio soddisfa i bisogni degli stakeholder e di comunicarne chiaramente le caratteristiche principali.' },
  { id: 'C-9.6.2-1', ref: '9.6.2', style: 'knowledge', source: 'BABOK Guide, 9.6.2',
    stem: 'Which capabilities do business analysis tools provide?',
    options: [
      { id: 'A', text: 'Modelling, documenting, and mapping requirements, identifying the relationships between them, and tracking and storing requirements artifacts.' },
      { id: 'B', text: 'Scheduling activities, budgeting effort, and levelling resources across the business analysis work of the initiative.' },
      { id: 'C', text: 'Planning and completing conversational and collaborative interactions with virtual and co-located teams working across different locations.' },
      { id: 'D', text: 'Organizing, dissecting, manipulating, and communicating general information clearly with word processors and spreadsheets.' }
    ], answer: 'A',
    explanation: 'Sono le capacità specialistiche elencate al 9.6.2. {C} descrive i communication tools e {D} gli office productivity tools: le tre competenze del gruppo Tools and Technology si distinguono per lo scopo degli strumenti.' },
  { id: 'C-9.6.2-2', ref: '9.6.2', style: 'knowledge', source: 'BABOK Guide, 9.6.2',
    stem: 'Which is a measure of effective use of business analysis tools and technology?',
    options: [
      { id: 'A', text: 'Identifying the major tools available and describing their strengths, weaknesses, and how they may be used in a given situation.' },
      { id: 'B', text: 'Having a licence for every major tool on the market, so that the right one is always available whatever the initiative.' },
      { id: 'C', text: 'Using a single tool consistently across the whole organization, so that every business analyst produces artifacts in the same format.' },
      { id: 'D', text: 'Avoiding any tool that requires training to operate, so that stakeholders can use the artifacts produced without assistance.' }
    ], answer: 'A',
    explanation: 'Fra le misure: applicare la comprensione di uno strumento ad altri simili, identificare i principali strumenti disponibili descrivendone punti di forza e debolezza e l\'uso appropriato alla situazione, saper usare le funzionalità principali e scegliere strumenti che supportino i processi organizzativi.' },
  { id: 'C-9.6.3-1', ref: '9.6.3', style: 'knowledge', source: 'BABOK Guide, 9.6.3',
    stem: 'What are communication tools used for?',
    options: [
      { id: 'A', text: 'To plan and complete tasks related to conversational and collaborative interactions, working with virtual and co-located teams.' },
      { id: 'B', text: 'To model requirements and identify the relationships between them, so that changes can be traced through the solution.' },
      { id: 'C', text: 'To organize, dissect, and manipulate information for analysis and present it clearly in documents and spreadsheets.' },
      { id: 'D', text: 'To store requirements artifacts under version control, so that every change to them is recorded and can be traced.' }
    ], answer: 'A',
    explanation: 'Comprendere le opzioni disponibili di questi strumenti e saperli usare è parte della competenza. {B} e {D} descrivono i business analysis tools, {C} gli office productivity tools.' },
  { id: 'C-9.6.3-2', ref: '9.6.3', style: 'knowledge', source: 'BABOK Guide, 9.6.3',
    stem: 'Which is a measure of effective use of communication tools and technology?',
    options: [
      { id: 'A', text: 'Selecting tools appropriate to the audience and purpose, and effectively choosing when to use communication technology and when not to.' },
      { id: 'B', text: 'Making all communication asynchronous, so that stakeholders can respond whenever it suits them and their time is always respected.' },
      { id: 'C', text: 'Standardizing on a single communication channel for the whole initiative, so that no message is ever lost between different tools.' },
      { id: 'D', text: 'Recording every communication with stakeholders for traceability, so that what was said can always be retrieved and checked later.' }
    ], answer: 'A',
    explanation: 'La misura più interessante è saper scegliere quando NON usare la tecnologia di comunicazione: a volte la conversazione diretta è la scelta giusta. Le altre misure sono selezionare strumenti adatti a pubblico e scopo, identificare quelli che soddisfano i bisogni comunicativi e saperne usare le funzionalità.' },
  { id: 'C-9.6.3-3', ref: '9.6.3', style: 'knowledge', source: 'BABOK Guide, 9.6',
    stem: 'Which three competencies form the Tools and Technology group?',
    options: [
      { id: 'A', text: 'Office Productivity Tools and Technology, Business Analysis Tools and Technology, Communication Tools and Technology' },
      { id: 'B', text: 'Organizational Modelling, Process Modelling, Business Capability Analysis' },
      { id: 'C', text: 'Office Productivity Tools and Technology, Business Analysis Tools and Technology, Written Communication' },
      { id: 'D', text: 'Business Analysis Tools and Technology, Communication Tools and Technology, Methodology Knowledge' }
    ], answer: 'A',
    explanation: 'Il gruppo Tools and Technology ne conta tre, il più piccolo dei sei. {B} elenca tecniche del capitolo 10, non competenze del capitolo 9: è una confusione facile da fare.' },
{ id: 'C-9.6.1-3', ref: '9.6.1', style: 'applied', source: 'BABOK Guide, 9.6.1',
    stem: 'A business analysis professional who knows one spreadsheet application well is given a different one. What does the BABOK Guide observe about this situation?',
    options: [
      { id: 'A', text: 'Understanding one software program may provide insights into others, since tool skills are partly transferable.' },
      { id: 'B', text: 'Each tool must be learned from scratch, since skills acquired with one program do not transfer to another.' },
      { id: 'C', text: 'The organization should standardize on the tool the analyst already knows, to avoid any loss of productivity.' },
      { id: 'D', text: 'Tool proficiency is not part of the underlying competencies, so the BABOK Guide makes no observation about it.' }
    ], answer: 'A',
    explanation: 'Il BABOK nota che comprendere un programma può fornire intuizioni su altri, e fra le misure del gruppo Tools and Technology figura la capacità di applicare la comprensione di uno strumento ad altri simili. Usare gli strumenti richiede comunque familiarizzare con le risorse disponibili.' },
  { id: 'C-9.6.2-3', ref: '9.6.2', style: 'applied', source: 'BABOK Guide, 9.6.2',
    stem: 'An organization asks a business analysis professional to recommend a requirements management tool. Which measure of the competency applies?',
    options: [
      { id: 'A', text: 'The ability to select a tool or tools that support organizational processes.' },
      { id: 'B', text: 'The ability to negotiate the licence cost and support terms with the vendor.' },
      { id: 'C', text: 'The ability to configure the selected tool without any vendor support.' },
      { id: 'D', text: 'The ability to migrate all existing artifacts into the new tool automatically.' }
    ], answer: 'A',
    explanation: 'Fra le misure della competenza c\'è la selezione di strumenti che supportino i processi organizzativi, insieme alla capacità di identificare i principali strumenti disponibili e descriverne punti di forza, debolezze e uso appropriato alla situazione.' },

  { id: 'C-GRP-1', ref: '9.1', style: 'knowledge', source: 'BABOK Guide, 9.1',
    stem: 'Why are analytical thinking and problem solving skills required by business analysis professionals?',
    options: [
      { id: 'A', text: 'To analyze problems and opportunities, identify which changes may deliver the most value, and understand their impact with stakeholders.' },
      { id: 'B', text: 'To document requirements with the level of precision that the delivery team needs in order to build the solution correctly.' },
      { id: 'C', text: 'To manage the schedule and budget of the analysis effort, making sure that each business analysis activity finishes on time.' },
      { id: 'D', text: 'To select the tools and notations used to model the solution, so that every artifact is produced in a consistent way.' }
    ], answer: 'A',
    explanation: 'È la descrizione del gruppo riportata anche dall\'ECBA Exam Blueprint. Notare che comprende sia i problemi sia le opportunità, e che l\'analisi è finalizzata al valore, non alla completezza documentale.' },
  { id: 'C-GRP-2', ref: '9.2', style: 'knowledge', source: 'BABOK Guide, 9.2',
    stem: 'How does the BABOK Guide describe behavioural characteristics?',
    options: [
      { id: 'A', text: 'They exist at the core of every business analysis professional\'s skill set, and each can impact the outcome of the practitioner\'s efforts.' },
      { id: 'B', text: 'They are desirable, but secondary to the technical analysis skills on which the value of business analysis really depends.' },
      { id: 'C', text: 'They apply only when working with external stakeholders, such as customers, suppliers, and regulators, not with colleagues.' },
      { id: 'D', text: 'They are assessed only in senior practitioners, since entry-level professionals are judged mainly on their technical skills.' }
    ], answer: 'A',
    explanation: 'Le caratteristiche comportamentali — Ethics, Personal Accountability, Trustworthiness, Organization and Time Management, Adaptability — stanno al centro dello skill set e ciascuna può incidere sull\'esito del lavoro. Non sono un complemento opzionale delle competenze analitiche.' },
  { id: 'C-GRP-3', ref: '9.3', style: 'knowledge', source: 'BABOK Guide, 9.3',
    stem: 'Why is business knowledge required?',
    options: [
      { id: 'A', text: 'To work effectively within the business, industry, organization, solution, and methodology, and to understand the structure, benefits, and value of the situation.' },
      { id: 'B', text: 'To satisfy the certification requirements of the profession, which expect every practitioner to hold a minimum level of knowledge of the business domain.' },
      { id: 'C', text: 'To replace the need for domain subject matter experts, so that the business analyst can answer business questions alone.' },
      { id: 'D', text: 'To evaluate the technical feasibility of solution options before they are presented to the stakeholders for approval.' }
    ], answer: 'A',
    explanation: 'I cinque ambiti citati nella descrizione del gruppo corrispondono alle sue cinque competenze. Il business knowledge non sostituisce gli SME di dominio ({C}): serve a dialogare con loro e a inquadrare la situazione rispetto a un cambiamento o a un need.' },
  { id: 'C-GRP-4', ref: '9.4', style: 'knowledge', source: 'BABOK Guide, 9.4',
    stem: 'How is communication defined in the BABOK Guide?',
    options: [
      { id: 'A', text: 'The act of a sender conveying information to a receiver in a method which delivers the meaning the sender intended.' },
      { id: 'B', text: 'The distribution of business analysis information to all the stakeholders identified in the stakeholder engagement plan.' },
      { id: 'C', text: 'The exchange of documents and models between the business analyst and the team that will deliver the solution.' },
      { id: 'D', text: 'The formal recording of the decisions taken during an initiative, so that they can be shared with all stakeholders.' }
    ], answer: 'A',
    explanation: 'La definizione mette al centro il significato inteso, non la trasmissione: se il messaggio arriva ma il significato no, non c\'è stata comunicazione. Le capacità di ascolto attivo aiutano ad approfondire comprensione e fiducia fra mittente e ricevente.' },
  { id: 'C-GRP-5', ref: '9.5', style: 'knowledge', source: 'BABOK Guide, 9.5',
    stem: 'What do interaction skills represent?',
    options: [
      { id: 'A', text: 'The ability to relate, cooperate, and communicate with many kinds of people, such as executives, sponsors, team members, vendors, end users, and customers.' },
      { id: 'B', text: 'The ability to lead a team of business analysts, assigning their work and reviewing the quality of what they produce.' },
      { id: 'C', text: 'The ability to represent the organization with external parties such as vendors, regulators, and partners during formal negotiations and reviews.' },
      { id: 'D', text: 'The ability to resolve conflicts within the delivery team, so that disagreements between members do not slow down the work.' }
    ], answer: 'A',
    explanation: 'La varietà degli interlocutori è il punto: relazionarsi con un executive non è come relazionarsi con gli sviluppatori o con gli utenti finali. Il gruppo comprende Facilitation, Leadership and Influencing, Teamwork, Negotiation and Conflict Resolution e Teaching.' },
  { id: 'C-GRP-6', ref: '9.6', style: 'knowledge', source: 'BABOK Guide, 9.6',
    stem: 'For what do business analysts use technology, according to the Tools and Technology group?',
    options: [
      { id: 'A', text: 'To support communication and collaboration, create and maintain requirements artifacts, model concepts, track issues, and increase productivity.' },
      { id: 'B', text: 'To automate the analysis of business needs, so that requirements can be produced directly from the data collected.' },
      { id: 'C', text: 'To replace face-to-face elicitation wherever possible, since remote tools are faster and leave a complete record.' },
      { id: 'D', text: 'To enforce the organization\'s methodology, ensuring that every business analysis activity follows the prescribed steps in the prescribed order.' }
    ], answer: 'A',
    explanation: 'Sono i cinque usi elencati nella descrizione del gruppo, ripresa anche dall\'ECBA Exam Blueprint. Gli strumenti supportano il lavoro del professionista: non lo automatizzano ({B}) né sostituiscono l\'interazione diretta ({C}).' },
  { id: 'C-GRP-7', ref: '9.1', style: 'knowledge', source: 'BABOK Guide, 9',
    stem: 'How many underlying competencies does the BABOK Guide describe, and in how many groups?',
    options: [
      { id: 'A', text: '29 competencies in 6 groups' },
      { id: 'B', text: '20 competencies in 5 groups' },
      { id: 'C', text: '30 competencies in 6 groups' },
      { id: 'D', text: '29 competencies in 9 groups' }
    ], answer: 'A',
    explanation: '29 underlying competencies in sei gruppi. Da non confondere con le 20 tecniche del capitolo 10 valutate all\'ECBA, con i 30 task delle sei knowledge area o con i nove domini del blueprint: sono quattro conteggi diversi, facili da confondere.' },
  { id: 'C-GRP-8', ref: '9.2', style: 'knowledge', source: 'The Business Analysis Standard, 3.4',
    stem: 'Which five competencies were identified by the global community as important for any type of initiative?',
    options: [
      { id: 'A', text: 'Adaptability, Facilitation, Leadership and Influencing, Problem Solving, Systems Thinking' },
      { id: 'B', text: 'Ethics, Trustworthiness, Listening, Teamwork, Teaching' },
      { id: 'C', text: 'Creative Thinking, Decision Making, Learning, Visual Thinking, Business Acumen' },
      { id: 'D', text: 'Facilitation, Negotiation and Conflict Resolution, Verbal Communication, Written Communication, Listening' }
    ], answer: 'A',
    explanation: 'Sono le cinque competenze fondazionali indicate da The Business Analysis Standard, che dovrebbero essere sviluppate da tutti i professionisti. Provengono da tre gruppi diversi del capitolo 9: Behavioural Characteristics, Interaction Skills e Analytical Thinking and Problem Solving.' },
  { id: 'C-GRP-9', ref: '9.5', style: 'knowledge', source: 'BABOK Guide, 9.5.1 e 9.5.4',
    stem: 'What distinguishes facilitation from negotiation and conflict resolution?',
    options: [
      { id: 'A', text: 'Facilitation lets all views be articulated and appreciated; negotiation and conflict resolution mediates to resolve differences and reach agreement.' },
      { id: 'B', text: 'Facilitation applies to workshops and other group sessions, while negotiation and conflict resolution applies to one-to-one interviews.' },
      { id: 'C', text: 'Facilitation is neutral, while negotiation and conflict resolution requires the business analyst to take a position on the outcome.' },
      { id: 'D', text: 'Facilitation involves internal stakeholders, while negotiation and conflict resolution involves vendors and other external parties.' }
    ], answer: 'A',
    explanation: 'Entrambe richiedono neutralità e mediazione, ma l\'esito atteso differisce: la facilitation punta all\'espressione e al riconoscimento dei punti di vista, la negotiation alla risoluzione delle divergenze con l\'accordo di tutti. In entrambi i casi il professionista non prende posizione, quindi {C} è errata.' },
  { id: 'C-GRP-10', ref: '9.1', style: 'knowledge', source: 'BABOK Guide, 9.1.5 e 9.1.6',
    stem: 'What distinguishes systems thinking from conceptual thinking?',
    options: [
      { id: 'A', text: 'Systems thinking looks at properties emerging from interacting components; conceptual thinking links information and patterns in the big picture.' },
      { id: 'B', text: 'Systems thinking applies to technology components, while conceptual thinking applies to the business side of a change.' },
      { id: 'C', text: 'Systems thinking is an analytical skill, while conceptual thinking is a creative one used to generate new ideas.' },
      { id: 'D', text: 'Systems thinking applies before the solution is designed, while conceptual thinking applies only once the design has been completed.' }
    ], answer: 'A',
    explanation: 'Entrambe appartengono al gruppo Analytical Thinking and Problem Solving e guardano oltre il dettaglio, ma su oggetti diversi: il systems thinking sulle proprietà emergenti dall\'interazione fra componenti, il conceptual thinking sul collegare informazioni e pattern non ovviamente correlati.' },
  { id: 'C-GRP-11', ref: '9.2', style: 'knowledge', source: 'BABOK Guide, 9.2.2 e 9.2.3',
    stem: 'What distinguishes personal accountability from trustworthiness?',
    options: [
      { id: 'A', text: 'Personal accountability concerns planning and completing one\'s own work as expected; trustworthiness is others\' perception that one is worthy of trust.' },
      { id: 'B', text: 'Personal accountability applies to deadlines and commitments, while trustworthiness applies only to the way confidential information is handled.' },
      { id: 'C', text: 'Personal accountability is measured by the business analyst, while trustworthiness is measured by the sponsor of the initiative.' },
      { id: 'D', text: 'They are two names for the same competency, which concerns how reliably the business analyst completes the work.' }
    ], answer: 'A',
    explanation: 'La differenza sta nella prospettiva: l\'accountability riguarda ciò che si fa — pianificare, completare, tenere lo stato sotto controllo — la trustworthiness come gli altri percepiscono chi lo fa, e infatti le sue misure sono tutte comportamenti degli stakeholder.' },
  { id: 'C-GRP-12', ref: '9.4', style: 'applied', source: 'BABOK Guide, 9.4.4 e 9.5.5',
    stem: 'A business analysis professional wants stakeholders to both feel heard and end up understanding a new concept. Which two competencies are in play?',
    options: [
      { id: 'A', text: 'Listening, to grasp meaning in context and show the speaker their point matters, and Teaching, to lead others to knowledge and confirm it.' },
      { id: 'B', text: 'Verbal Communication, to state the concept clearly, and Written Communication, to leave a record that stakeholders can reread.' },
      { id: 'C', text: 'Facilitation, to let everyone express their view, and Negotiation and Conflict Resolution, to bring the group to agreement.' },
      { id: 'D', text: 'Trustworthiness, so that stakeholders believe what they are told, and Personal Accountability, to follow up on every question.' }
    ], answer: 'A',
    explanation: 'Le due competenze coprono le due direzioni: il Listening è ricezione — comprendere il significato nel contesto e dimostrare che si ritiene importante ciò che l\'altro dice — il Teaching è trasmissione con verifica della comprensione. Appartengono a gruppi diversi, Communication Skills e Interaction Skills.' },
  { id: 'C-GRP-13', ref: '9.3', style: 'applied', source: 'BABOK Guide, 9.3',
    stem: 'A business analysis professional is asked which knowledge would help most in judging whether a proposed change is justified by its business benefit. Which competency is most relevant?',
    options: [
      { id: 'A', text: 'Solution Knowledge, one of whose measures is understanding when a larger change is, or is not, justified based on business benefit.' },
      { id: 'B', text: 'Industry Knowledge, since the benefit of a change depends on market conditions and on what competitors are doing.' },
      { id: 'C', text: 'Methodology Knowledge, since the methodology in use determines how a change is approached and what risk is accepted.' },
      { id: 'D', text: 'Organization Knowledge, since the benefit of a change is ultimately judged by the organization and its key decision makers.' }
    ], answer: 'A',
    explanation: 'La misura è testuale nella solution knowledge: capire quando un cambiamento maggiore è giustificato, o non lo è, in base al beneficio di business. Le altre competenze contribuiscono, ma nessuna nomina esplicitamente questo giudizio.' }
];
