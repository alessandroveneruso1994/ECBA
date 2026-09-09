/**
 * Pool domande ECBA Trainer.
 *
 * Domande di pratica originali, scritte a partire dai documenti ufficiali IIBA
 * (The Business Analysis Standard v2.0, ECBA Exam Blueprint V1.1). Non sono
 * domande d'esame reali: IIBA non le pubblica.
 *
 * Testo e opzioni in inglese, come all'esame. Spiegazione in italiano.
 *
 * Campi:
 *   id          identificativo stabile (serve al registro degli errori)
 *   domain      1-9, corrisponde al dominio del blueprint
 *   activity    activity statement coperta, es. '1.2'
 *   type        'standard' | 'situational'
 *   source      riferimento al documento ufficiale
 *   stem        testo della domanda
 *   options     A-D
 *   answer      lettera corretta
 *   explanation perché è corretta e perché le altre no
 *
 * Copertura: tutti e nove i domini.
 * Domini 1-3 da The Business Analysis Standard, domini 4-9 dal BABOK Guide v3.
 */
window.ECBA_QUESTIONS = [

  /* ============================================================
     DOMINIO 1 — Understanding Business Analysis (20% · 10 domande)
     ============================================================ */

  {
    id: 'D1-01', style: 'knowledge', domain: 1, activity: '1.1', type: 'standard',
    source: 'The Business Analysis Standard, 2.1',
    stem: 'Which statement best describes the purpose of business analysis?',
    options: [
      { id: 'A', text: 'To document the technical specifications that developers need in order to build a system.' },
      { id: 'B', text: 'To enable change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders.' },
      { id: 'C', text: 'To manage the project schedule, budget, and resources so that deliverables are completed on time.' },
      { id: 'D', text: 'To test the delivered solution against the acceptance criteria agreed with the customer.' }
    ],
    answer: 'B',
    explanation: 'La business analysis è la pratica che abilita il cambiamento definendo i need e raccomandando soluzioni che portano valore agli stakeholder. {A} descrive un\'attività tecnica che è solo una parte possibile del lavoro; {C} è project management; {D} è testing. Attenzione a questo schema di distrattori: all\'esame le opzioni sbagliate sono spesso attività adiacenti ma di altre discipline.'
  },
  {
    id: 'D1-02', style: 'applied', domain: 1, activity: '1.1', type: 'situational',
    source: 'The Business Analysis Standard, 2.1 e 4.1',
    stem: 'A marketing manager with no "business analyst" job title regularly maps customer journeys, elicits needs from the sales team, and recommends process improvements. A colleague argues that this is not business analysis because it is not that person\'s official role. How should this be understood?',
    options: [
      { id: 'A', text: 'The colleague is correct: business analysis is performed only by people holding a business analyst job title.' },
      { id: 'B', text: 'The colleague is correct, because business analysis must be formally assigned by a project manager.' },
      { id: 'C', text: 'The manager is performing business analysis: it is a skill set applicable to any role, not a job title.' },
      { id: 'D', text: 'The manager is performing project management, since customer journeys are a delivery artifact.' }
    ],
    answer: 'C',
    explanation: 'Lo Standard è esplicito: il ruolo del professionista di business analysis non è confinato a uno specifico job title, ma comprende chiunque usi la business analysis come skill set per migliorare la qualità del proprio lavoro. È un concetto ricorrente all\'esame, spesso presentato come qui in forma di scenario.'
  },
  {
    id: 'D1-03', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Which of the following is NOT one of the six core concepts of the Business Analysis Core Concept Model (BACCM)?',
    options: [
      { id: 'A', text: 'Requirement' },
      { id: 'B', text: 'Context' },
      { id: 'C', text: 'Value' },
      { id: 'D', text: 'Need' }
    ],
    answer: 'A',
    explanation: 'I sei core concept sono Change, Need, Solution, Stakeholder, Value e Context. "Requirement" non è un core concept del BACCM: è una rappresentazione utilizzabile di un need, concetto diverso. Impara i sei a memoria — è la lista più sfruttata dall\'esame.'
  },
  {
    id: 'D1-04', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'According to the BACCM, how is "Change" defined?',
    options: [
      { id: 'A', text: 'The dynamic circumstances that influence and are influenced by an initiative.' },
      { id: 'B', text: 'The act of transformation in response to a need.' },
      { id: 'C', text: 'A specific way of satisfying one or more needs in a context.' },
      { id: 'D', text: 'A problem or opportunity to be addressed.' }
    ],
    answer: 'B',
    explanation: 'Change = "the act of transformation in response to a need". {A} è la definizione di Context, {C} di Solution, {D} di Need. Le definizioni testuali dei sei concetti vanno sapute alla lettera: l\'esame le presenta spesso incrociate come qui.'
  },
  {
    id: 'D1-05', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Which statement correctly describes the relationship between Need and Change in the BACCM?',
    options: [
      { id: 'A', text: 'Needs cause changes, but changes can never create new needs.' },
      { id: 'B', text: 'Needs and changes are independent concepts that are analysed separately.' },
      { id: 'C', text: 'Needs can cause changes by motivating stakeholders to act, and changes can also cause needs by altering the value delivered by existing solutions.' },
      { id: 'D', text: 'A change must always be approved before any need can be identified.' }
    ],
    answer: 'C',
    explanation: 'La relazione è bidirezionale: i need motivano gli stakeholder ad agire e quindi generano change; a loro volta i change possono generare nuovi need riducendo o aumentando il valore erogato dalle soluzioni esistenti. Il BACCM è un modello di relazioni, non un elenco: le domande più difficili testano proprio i legami tra concetti.'
  },
  {
    id: 'D1-06', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.2 e 2.3',
    stem: 'A team has been asked to introduce a new self-service portal. Before starting, the business analysis professional maps out who is affected, what problem the portal addresses, what worth it is expected to create, and which market and regulatory circumstances surround it. Which BACCM concepts is the professional working through?',
    options: [
      { id: 'A', text: 'Stakeholder, Need, Value, and Context' },
      { id: 'B', text: 'Change, Solution, Requirement, and Design' },
      { id: 'C', text: 'Stakeholder, Solution, Risk, and Scope' },
      { id: 'D', text: 'Need, Value, Benefit, and Constraint' }
    ],
    answer: 'A',
    explanation: 'Chi è coinvolto = Stakeholder; quale problema si affronta = Need; quale worth ci si attende = Value; circostanze di mercato e regolatorie = Context. {B}, {C} e {D} mescolano core concept con termini che non lo sono (Requirement, Design, Risk, Scope, Benefit, Constraint). Riconoscere il concetto giusto dalla parafrasi è esattamente il tipo di ragionamento situation-based dell\'esame.'
  },
  {
    id: 'D1-07', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.3',
    stem: 'The BACCM is described as both a "thinking model" and an "organizing model". Which of the following is a use of the BACCM?',
    options: [
      { id: 'A', text: 'Replacing the need for business analysis techniques by providing a standard process to follow.' },
      { id: 'B', text: 'Communicating about business analysis with a common language and evaluating the relationships among the six concepts.' },
      { id: 'C', text: 'Assigning responsibility for delivery decisions to the project sponsor.' },
      { id: 'D', text: 'Prescribing the sequence in which business analysis tasks must be executed.' }
    ],
    answer: 'B',
    explanation: 'Il BACCM serve a descrivere una business analysis efficace, comunicare con un linguaggio comune, identificare opportunità di sviluppo professionale, valutare le relazioni fra i sei concetti e il loro impatto, e considerare qualità e completezza del lavoro. Non è un processo prescrittivo ({A}, {D}) né uno strumento di governance ({C}).'
  },
  {
    id: 'D1-08', style: 'knowledge', domain: 1, activity: '1.3', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Business analysis is described as going "beyond merely addressing the symptoms of organizational challenges". Which critical function does this describe?',
    options: [
      { id: 'A', text: 'Needs prioritization' },
      { id: 'B', text: 'Risk management' },
      { id: 'C', text: 'Problem understanding' },
      { id: 'D', text: 'Stakeholder collaboration' }
    ],
    answer: 'C',
    explanation: 'Problem understanding significa scavare nelle cause sottostanti invece di fermarsi ai sintomi, per costruire soluzioni mirate e durature. Le altre sono funzioni distinte dell\'elenco delle nove funzioni critiche (problem understanding, needs prioritization, value-centric solutions, risk management, performance enhancement, value delivery, stakeholder collaboration, leadership support, agility).'
  },
  {
    id: 'D1-09', style: 'applied', domain: 1, activity: '1.3', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'A solution has been live for eight months. The business analysis professional continues to monitor outcomes and suggests refinements to the process based on what the data shows. Which critical function of business analysis is being demonstrated?',
    options: [
      { id: 'A', text: 'Performance enhancement, because business analysis does not stop at implementation and continuously evaluates outcomes.' },
      { id: 'B', text: 'Needs prioritization, because the professional is ranking which changes matter most.' },
      { id: 'C', text: 'Leadership support, because the professional is articulating purpose and setting goals.' },
      { id: 'D', text: 'Agility, because the professional is switching from a predictive to an adaptive approach.' }
    ],
    answer: 'A',
    explanation: 'Performance enhancement: la business analysis non è confinata al ciclo di vita di un progetto o prodotto e non si ferma all\'implementazione — monitora e valuta gli outcome in modo iterativo per migliorare in continuo. È un punto che l\'esame ama testare, perché smentisce l\'idea che il lavoro finisca al rilascio.'
  },
  {
    id: 'D1-10', style: 'applied', domain: 1, activity: '1.3', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'A proposed change will deliver clear benefits to the operations team but will make the reporting work of the finance team more laborious. The business analysis professional cannot find an option that satisfies both groups. What does the Standard indicate about this situation?',
    options: [
      { id: 'A', text: 'The change should be cancelled, because business analysis must deliver value to every stakeholder.' },
      { id: 'B', text: 'The finance team should be removed from the stakeholder list to avoid conflict.' },
      { id: 'C', text: 'It may not always be possible to deliver value for all stakeholders; the goal is to maximize value for the majority while addressing and managing the concerns of others.' },
      { id: 'D', text: 'The decision should be escalated to the sponsor without further analysis, since it is a conflict of interest.' }
    ],
    answer: 'C',
    explanation: 'Lo Standard riconosce esplicitamente che non sempre si può creare valore per tutti: l\'obiettivo è massimizzare il valore per la maggioranza gestendo al contempo le preoccupazioni degli altri. Non si cancella il cambiamento ({A}) né si nascondono gli stakeholder scomodi ({B}), e l\'escalation senza analisi ({D}) è l\'opposto del comportamento atteso.'
  },
  {
    id: 'D1-11', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'How does the BACCM define "Value"?',
    options: [
      { id: 'A', text: 'The financial return an organization obtains from an initiative, measured after implementation.' },
      { id: 'B', text: 'The worth, importance, or usefulness of something to a stakeholder within a context.' },
      { id: 'C', text: 'The difference between the cost of a solution and the revenue it generates.' },
      { id: 'D', text: 'The set of benefits formally approved in the business case.' }
    ],
    answer: 'B',
    explanation: 'Value = "the worth, importance, or usefulness of something to a stakeholder within a context". Le altre opzioni riducono il valore a una misura monetaria: nel BACCM il valore può essere anche intangibile, e dipende sempre da chi lo valuta e dal contesto.'
  },
  {
    id: 'D1-12', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Value can be either realized or preserved. Which example describes value being PRESERVED?',
    options: [
      { id: 'A', text: 'A new online channel increases annual sales revenue by 12%.' },
      { id: 'B', text: 'An automated workflow reduces the average order handling time by two days.' },
      { id: 'C', text: 'A compliance upgrade prevents regulatory fines that the organization would otherwise incur.' },
      { id: 'D', text: 'A redesigned onboarding process increases the number of new customers.' }
    ],
    answer: 'C',
    explanation: 'Il valore è realized attraverso ritorni, guadagni e miglioramenti ({A}, {B}, {D}) ed è preserved mitigando perdite, rischi e costi — come nel caso della compliance che evita sanzioni. La distinzione realized/preserved è una classica coppia da riconoscere per esempi.'
  },
  {
    id: 'D1-13', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Which of the following is the best example of INTANGIBLE value?',
    options: [
      { id: 'A', text: 'A reduction of €80,000 in annual licensing costs.' },
      { id: 'B', text: 'An improvement in employee morale following a change to shift planning.' },
      { id: 'C', text: 'A 15% increase in units shipped per week.' },
      { id: 'D', text: 'A decrease in the average cost per support ticket.' }
    ],
    answer: 'B',
    explanation: 'Il valore intangibile si misura indirettamente e ha spesso una forte componente motivazionale — reputazione aziendale, morale dei dipendenti. Il valore tangibile è direttamente misurabile e ha spesso una componente monetaria significativa ({A}, {C}, {D}). Nota che intangibile non significa "non misurabile": significa misurabile solo in modo indiretto.'
  },
  {
    id: 'D1-14', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A steering committee is comparing two solution options and concludes that "option B delivers more value than option A for our customer service group". Which characteristic of value does this illustrate?',
    options: [
      { id: 'A', text: 'Value assessed in relative terms, from the perspective of a group of stakeholders.' },
      { id: 'B', text: 'Value preserved by mitigating losses and risks.' },
      { id: 'C', text: 'Tangible value, because a comparison implies a monetary measure.' },
      { id: 'D', text: 'Value realized, because a decision has been taken.' }
    ],
    answer: 'A',
    explanation: 'Il valore può essere valutato in termini assoluti o relativi: dire che un\'opzione vale più di un\'altra per un certo gruppo di stakeholder è esattamente la valutazione relativa descritta dallo Standard. Il confronto non implica di per sé una misura monetaria ({C}) né la realizzazione del valore ({D}).'
  },
  {
    id: 'D1-15', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'According to the Standard, when is value discovered during an initiative?',
    options: [
      { id: 'A', text: 'Only at the end, once the solution has been deployed and benefits can be counted.' },
      { id: 'B', text: 'Only at the start, when the business case is approved.' },
      { id: 'C', text: 'Throughout the initiative, as benefits are delivered as efficiently and effectively as possible.' },
      { id: 'D', text: 'Only during the annual financial review conducted by the finance function.' }
    ],
    answer: 'C',
    explanation: 'Il valore si scopre lungo tutta l\'iniziativa, man mano che i benefici vengono erogati nel modo più efficiente ed efficace possibile. È un principio che ritorna anche nei domini BABOK: il valore non è un evento finale ma un flusso continuo.'
  },
  {
    id: 'D1-16', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'Which of the following is described as part of effective business analysis in creating value toward desired outcomes?',
    options: [
      { id: 'A', text: 'Approving the final solution design on behalf of the sponsor.' },
      { id: 'B', text: 'Translating business needs into requirements and designs.' },
      { id: 'C', text: 'Allocating the development budget across the delivery teams.' },
      { id: 'D', text: 'Writing the automated test scripts used during system testing.' }
    ],
    answer: 'B',
    explanation: 'Tradurre i business need in requisiti e design è tra le attività elencate dallo Standard, insieme a comprendere la strategia, chiarire problemi e opportunità, comunicare gli outcome desiderati, identificare il valore potenziale, valutare i trade-off. Le altre opzioni appartengono a governance, project management e testing.'
  },
  {
    id: 'D1-17', style: 'knowledge', domain: 1, activity: '1.1', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Which statement about the scope of business analysis is correct?',
    options: [
      { id: 'A', text: 'Business analysis applies only to IT projects that deliver software solutions.' },
      { id: 'B', text: 'Business analysis is critical to all organizational work, at strategic, tactical, and operational levels.' },
      { id: 'C', text: 'Business analysis applies only to initiatives that use an adaptive approach.' },
      { id: 'D', text: 'Business analysis applies only within an organization\'s own boundaries and never to external stakeholders.' }
    ],
    answer: 'B',
    explanation: 'La business analysis è rilevante a tutti i livelli dell\'organizzazione: strategico, tattico e operativo. Le soluzioni possono includere iniziative tecnologiche, ma anche procedure manuali, cambi di processo, aggiornamenti del modello di business e miglioramento delle capability — quindi {A} è troppo restrittiva, come {C} e {D}.'
  },
  {
    id: 'D1-18', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A solution, as defined in the BACCM, satisfies a need by doing which of the following?',
    options: [
      { id: 'A', text: 'Resolving a problem faced by stakeholders, or enabling stakeholders to take advantage of an opportunity.' },
      { id: 'B', text: 'Delivering a software system that automates a manual process.' },
      { id: 'C', text: 'Documenting the current state of the organization in sufficient detail.' },
      { id: 'D', text: 'Eliminating all risks associated with the proposed change.' }
    ],
    answer: 'A',
    explanation: 'Una soluzione soddisfa un need risolvendo un problema oppure abilitando lo sfruttamento di un\'opportunità — la doppia natura problema/opportunità è centrale. {B} è solo una delle possibili forme di soluzione: una soluzione può combinare tecnologia, procedure manuali, cambi di processo, aggiornamenti del business model o miglioramento delle capability organizzative.'
  },
  {
    id: 'D1-19', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'While preparing an initiative, a business analysis professional documents seasonal demand patterns, competitor moves, applicable regulations, and the organization\'s culture. Which BACCM core concept do all of these belong to?',
    options: [
      { id: 'A', text: 'Need' },
      { id: 'B', text: 'Stakeholder' },
      { id: 'C', text: 'Context' },
      { id: 'D', text: 'Value' }
    ],
    answer: 'C',
    explanation: 'Il Context comprende tutto ciò che nell\'ambiente è rilevante per il cambiamento: atteggiamenti, comportamenti, credenze, concorrenti, cultura, demografia, geopolitica, obiettivi, storia, industria, infrastruttura, trend di mercato, processi, prodotti, progetti, regolamenti, vendite, stagioni, struttura, tecnologia e persino il meteo. Se in una domanda vedi un elenco eterogeneo di circostanze ambientali, la risposta è quasi sempre Context.'
  },
  {
    id: 'D1-20', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'How are stakeholders characterized in the BACCM?',
    options: [
      { id: 'A', text: 'Only as the individuals who fund the initiative and approve its deliverables.' },
      { id: 'B', text: 'As internal or external groups or individuals with a relationship to the change, the need, or the solution, often defined by their interest, impact, and influence.' },
      { id: 'C', text: 'As the end users who will operate the solution after go-live.' },
      { id: 'D', text: 'As the members of the delivery team assigned to the initiative.' }
    ],
    answer: 'B',
    explanation: 'Uno stakeholder è un gruppo o individuo con una relazione con il change, il need o la solution, interno o esterno, spesso caratterizzato da interest, impact e influence. {A}, {C} e {D} descrivono sottoinsiemi specifici (sponsor, utenti finali, team): all\'esame le opzioni che restringono indebitamente una definizione sono distrattori tipici.'
  },
  {
    id: 'D1-21', style: 'knowledge', domain: 1, activity: '1.3', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'The Standard lists "agility" among the critical functions of business analysis. What does this mean in practice?',
    options: [
      { id: 'A', text: 'Business analysis requires organizations to adopt an Agile framework such as Scrum.' },
      { id: 'B', text: 'Business analysis supports predictive, adaptive, and hybrid approaches so that organizations can respond to changing conditions.' },
      { id: 'C', text: 'Business analysis shortens the duration of every initiative by reducing documentation.' },
      { id: 'D', text: 'Business analysis replaces long-term planning with continuous delivery.' }
    ],
    answer: 'B',
    explanation: 'Agility qui significa che la business analysis supporta approcci predittivi, adattivi e ibridi, combinando previsione e adattabilità in tempo reale per restare rilevanti. Non implica l\'adozione di un framework Agile specifico ({A}) né l\'abolizione della pianificazione ({D}).'
  },
  {
    id: 'D1-22', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'An executive asks the business analysis professional how the current portfolio of initiatives relates to the organization\'s long-term ambitions. Which statement best reflects the Standard\'s view of outcomes and value creation?',
    options: [
      { id: 'A', text: 'Each initiative should be evaluated in isolation, since combining them obscures accountability.' },
      { id: 'B', text: 'Value is often created through managing initiatives that work together to address organizational challenges and capitalize on opportunities, evolving the organization toward its desired outcomes.' },
      { id: 'C', text: 'Long-term ambitions are the responsibility of the strategy function and are outside the scope of business analysis.' },
      { id: 'D', text: 'Desired outcomes can only be defined once all initiatives have been delivered.' }
    ],
    answer: 'B',
    explanation: 'Lo Standard descrive il valore come spesso creato gestendo iniziative che lavorano insieme, facendo evolvere l\'organizzazione verso gli outcome desiderati, rappresentati da una combinazione di future state. Comprendere la strategia organizzativa rientra pienamente nella business analysis, quindi {C} è errata.'
  },

  /* ============================================================
     DOMINIO 2 — Mindset for Effective Business Analysis (14% · 7 domande)
     ============================================================ */

  {
    id: 'D2-01', style: 'knowledge', domain: 2, activity: '2.1', type: 'standard',
    source: 'The Business Analysis Standard, 3.1',
    stem: 'How does the Standard define a mindset?',
    options: [
      { id: 'A', text: 'The documented methodology an organization requires its teams to follow.' },
      { id: 'B', text: 'The mental framework that guides decision-making, behaviour, and team dynamics.' },
      { id: 'C', text: 'The level of seniority a practitioner has reached in their career.' },
      { id: 'D', text: 'The set of tools and templates used to capture requirements.' }
    ],
    answer: 'B',
    explanation: 'Il mindset è il quadro mentale che guida decisioni, comportamenti e dinamiche di team, e influenza come pensiamo e agiamo nelle diverse situazioni. Non è una metodologia ({A}) né un livello di seniority ({C}) né un toolkit ({D}).'
  },
  {
    id: 'D2-02', style: 'knowledge', domain: 2, activity: '2.1', type: 'standard',
    source: 'The Business Analysis Standard, 3.1',
    stem: 'Which of the following is a deliberate practice through which an empowering mindset can be developed?',
    options: [
      { id: 'A', text: 'Standardising on a single analysis approach so that every situation is handled consistently.' },
      { id: 'B', text: 'Deciding how to approach the work and actively developing foundational competencies.' },
      { id: 'C', text: 'Delegating the choice of techniques to the delivery team.' },
      { id: 'D', text: 'Restricting stakeholder involvement to formal review meetings.' }
    ],
    answer: 'B',
    explanation: 'Un mindset empowering si sviluppa con la pratica deliberata su: raggiungere gli outcome organizzativi, scoprire valore per gli stakeholder, adottare i principi appropriati, decidere come approcciare il lavoro, sviluppare attivamente le competenze fondazionali e saper usare le tecniche fondazionali. {A} contraddice il punto chiave che ogni situazione è unica e non esiste un unico approccio di analisi.'
  },
  {
    id: 'D2-03', style: 'knowledge', domain: 2, activity: '2.2', type: 'standard',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'Which of the following is one of the shared values that drive business analysis work?',
    options: [
      { id: 'A', text: 'Predictability' },
      { id: 'B', text: 'Standardization' },
      { id: 'C', text: 'Curiosity' },
      { id: 'D', text: 'Specialization' }
    ],
    answer: 'C',
    explanation: 'I valori condivisi sono: respect, courage, collaboration, ethics, curiosity, continuous learning, improvement, customer focus e value maximization. Predictability, standardization e specialization non fanno parte dell\'elenco — un caso in cui i distrattori sono parole plausibili nel linguaggio aziendale ma assenti dal testo ufficiale.'
  },
  {
    id: 'D2-04', style: 'applied', domain: 2, activity: '2.2', type: 'situational',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'A junior practitioner realises during a workshop that a requirement approved last month is based on a wrong assumption. Raising it will be uncomfortable, because the sponsor championed that requirement. Which shared value most directly supports speaking up?',
    options: [
      { id: 'A', text: 'Courage' },
      { id: 'B', text: 'Customer focus' },
      { id: 'C', text: 'Continuous learning' },
      { id: 'D', text: 'Value maximization' }
    ],
    answer: 'A',
    explanation: 'Courage è il valore condiviso che sostiene l\'atto scomodo di sollevare un problema quando è necessario. Le altre opzioni sono valori reali dell\'elenco ma non colgono il nucleo della situazione: qui il punto non è imparare o massimizzare valore, è avere il coraggio di parlare. Nelle domande situation-based più opzioni sono "vere in generale": scegli quella che risponde alla situazione descritta.'
  },
  {
    id: 'D2-05', style: 'knowledge', domain: 2, activity: '2.3', type: 'standard',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'Which of the following is one of the business analysis principles described in the Standard?',
    options: [
      { id: 'A', text: 'Document everything' },
      { id: 'B', text: 'See the whole' },
      { id: 'C', text: 'Follow the plan' },
      { id: 'D', text: 'Escalate early' }
    ],
    answer: 'B',
    explanation: 'I sette principi (dall\'Agile Extension) sono: see the whole, think as a customer, analyze to determine what is valuable, get real using examples, understand what is doable, stimulate collaboration and continuous improvement, avoid waste. Vale la pena impararli a memoria: sono pochi e l\'esame li usa spesso.'
  },
  {
    id: 'D2-06', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'A team keeps producing a detailed weekly status document that, as it turns out, nobody reads. The business analysis professional proposes to stop producing it. Which business analysis principle is being applied?',
    options: [
      { id: 'A', text: 'Get real using examples' },
      { id: 'B', text: 'Understand what is doable' },
      { id: 'C', text: 'Avoid waste' },
      { id: 'D', text: 'See the whole' }
    ],
    answer: 'C',
    explanation: 'Avoid waste: identificare le attività che aggiungono valore e quelle che non lo fanno, e rimuovere quelle che non contribuiscono a soddisfare il need. Un documento che nessuno legge è per definizione un\'attività che non contribuisce.'
  },
  {
    id: 'D2-07', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'Stakeholders disagree about how a new refund rule should behave. The business analysis professional brings three concrete refund cases to the next session and walks through what should happen in each. Which principle does this illustrate?',
    options: [
      { id: 'A', text: 'Get real using examples' },
      { id: 'B', text: 'Think as a customer' },
      { id: 'C', text: 'Avoid waste' },
      { id: 'D', text: 'Analyze to determine what is valuable' }
    ],
    answer: 'A',
    explanation: 'Get real using examples: gli esempi reali costruiscono una comprensione condivisa del need e di come la soluzione lo soddisfa, e possono essere usati per derivare acceptance criteria, progettare la soluzione e fondare il testing. Il caso descritto — portare casi concreti per sciogliere un disaccordo — è la sua applicazione tipica.'
  },
  {
    id: 'D2-08', style: 'knowledge', domain: 2, activity: '2.3', type: 'standard',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'What does the principle "Understand what is doable" require the practitioner to consider?',
    options: [
      { id: 'A', text: 'Only the technical capabilities of the development team.' },
      { id: 'B', text: 'How to deliver a solution within constraints, including constraints in the operational environment, so that the solution delivers the value intended.' },
      { id: 'C', text: 'The minimum documentation required by the organization\'s governance body.' },
      { id: 'D', text: 'Whether the sponsor has approved the budget for the next phase.' }
    ],
    answer: 'B',
    explanation: 'Il principio riguarda il capire come consegnare una soluzione entro i vincoli, analizzando di continuo need e soluzioni possibili, e considerando anche i vincoli dell\'ambiente operativo perché la soluzione produca davvero il valore atteso. Non è solo una questione di capacità tecnica del team ({A}).'
  },
  {
    id: 'D2-09', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'The Standard identifies five competencies that the global community considers important for any type of initiative. Which of the following is one of them?',
    options: [
      { id: 'A', text: 'Data Modelling' },
      { id: 'B', text: 'Systems Thinking' },
      { id: 'C', text: 'Written Communication' },
      { id: 'D', text: 'Industry Knowledge' }
    ],
    answer: 'B',
    explanation: 'Le cinque competenze fondazionali sono Adaptability, Facilitation, Leadership and Influencing, Problem Solving e Systems Thinking. Written Communication e Industry Knowledge sono underlying competencies del BABOK ma non fanno parte di questa cinquina; Data Modelling è una tecnica, non una competenza.'
  },
  {
    id: 'D2-10', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'Which foundational competency is described as "ensuring that created value addresses the root cause of problems"?',
    options: [
      { id: 'A', text: 'Systems Thinking' },
      { id: 'B', text: 'Adaptability' },
      { id: 'C', text: 'Problem Solving' },
      { id: 'D', text: 'Facilitation' }
    ],
    answer: 'C',
    explanation: 'Problem Solving (BABOK 9.1.4). Systems Thinking è comprendere olisticamente l\'impresa e il contesto per massimizzare il valore; Adaptability è adeguare il proprio stile comportamentale per aumentare l\'efficacia; Facilitation riguarda workshop, negoziazione e risoluzione dei conflitti.'
  },
  {
    id: 'D2-11', style: 'applied', domain: 2, activity: '2.4', type: 'situational',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'A workshop has stalled: two departments are talking past each other and the session is running out of time. Which foundational competency does the business analysis professional most need right now?',
    options: [
      { id: 'A', text: 'Facilitation' },
      { id: 'B', text: 'Adaptability' },
      { id: 'C', text: 'Systems Thinking' },
      { id: 'D', text: 'Problem Solving' }
    ],
    answer: 'A',
    explanation: 'Facilitation è descritta proprio come facilitare i workshop, negoziare e aiutare a risolvere i conflitti (BABOK 9.5.1). Le altre competenze sono utili ma non rispondono al bisogno immediato della situazione descritta: guidare la sessione fuori dallo stallo.'
  },
  {
    id: 'D2-12', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'The Business Analysis Standard, 3.4 e ECBA Exam Blueprint',
    stem: 'How many underlying competencies does the BABOK Guide describe as supporting business analysis tasks?',
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '20' },
      { id: 'C', text: '29' },
      { id: 'D', text: '50' }
    ],
    answer: 'C',
    explanation: 'Sono 29, raggruppate in sei categorie (Analytical Thinking and Problem Solving, Behavioural Characteristics, Business Knowledge, Communication Skills, Interaction Skills, Tools and Technology). Da non confondere con le 20 tecniche del cap. 10 valutate all\'ECBA, con le 6 knowledge area o con i 30 task.'
  },
  {
    id: 'D2-13', style: 'applied', domain: 2, activity: '2.1', type: 'situational',
    source: 'The Business Analysis Standard, 3.1 e 3.2',
    stem: 'A practitioner insists on using the same elicitation technique on every initiative because it worked well in the past. Which aspect of an effective business analysis mindset is being neglected?',
    options: [
      { id: 'A', text: 'Maintaining a flexible, adaptable view, since every situation is unique and there is no single analysis approach.' },
      { id: 'B', text: 'Ensuring that all requirements are approved before elicitation begins.' },
      { id: 'C', text: 'Documenting the technique in the organization\'s methodology repository.' },
      { id: 'D', text: 'Escalating the choice of technique to the sponsor for approval.' }
    ],
    answer: 'A',
    explanation: 'Lo Standard insiste sul mantenere una visione flessibile e adattabile: ogni situazione è unica e non esiste un unico approccio di analisi; tecniche, processi e strumenti si combinano diversamente a seconda del contesto. È un tema che l\'esame ripropone in molte forme.'
  },
  {
    id: 'D2-14', style: 'knowledge', domain: 2, activity: '2.2', type: 'standard',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'The Standard describes business analysis as a human-centred, creative process. Which activity is supported by a flexible, adaptable mindset?',
    options: [
      { id: 'A', text: 'Enforcing the approved scope baseline against stakeholder requests.' },
      { id: 'B', text: 'Driving feedback and learning based on evidence.' },
      { id: 'C', text: 'Limiting analysis to what has been budgeted in the current phase.' },
      { id: 'D', text: 'Deferring all technology decisions until after implementation.' }
    ],
    answer: 'B',
    explanation: 'Un mindset flessibile supporta: influenzare la strategia, empatizzare con i clienti reali, cambiare i processi, coinvolgere gli stakeholder nell\'ecosistema di business, guidare feedback e apprendimento basati su evidenze, e sfruttare la tecnologia per implementare i cambiamenti necessari.'
  },
  {
    id: 'D2-15', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'A product team is about to build a feature requested by an internal department. The business analysis professional first investigates how the end customer actually experiences the current process. Which principle is being applied?',
    options: [
      { id: 'A', text: 'Avoid waste' },
      { id: 'B', text: 'Understand what is doable' },
      { id: 'C', text: 'Think as a customer' },
      { id: 'D', text: 'Get real using examples' }
    ],
    answer: 'C',
    explanation: 'Think as a customer: comprendere i bisogni dell\'esperienza cliente per costruire soluzioni che li affrontino, partendo da una visione ad alto livello e scomponendola in una comprensione dettagliata che fa evolvere la soluzione.'
  },
  {
    id: 'D2-16', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'What is the relationship between foundational competencies and underlying competencies?',
    options: [
      { id: 'A', text: 'They are two names for the same list of 29 competencies.' },
      { id: 'B', text: 'Foundational competencies are the basic skills necessary to perform effective business analysis; practitioners then leverage the underlying competencies to build on that foundation.' },
      { id: 'C', text: 'Underlying competencies apply to predictive approaches and foundational competencies to adaptive approaches.' },
      { id: 'D', text: 'Foundational competencies replace underlying competencies for entry-level practitioners.' }
    ],
    answer: 'B',
    explanation: 'Le foundational competencies sono le abilità, capacità e caratteristiche di base necessarie per fare business analysis efficace; su quella base i professionisti sviluppano le underlying competencies per evolvere e adattarsi a qualsiasi iniziativa. Non sono liste alternative né legate a un tipo di approccio.'
  },

  /* ============================================================
     DOMINIO 3 — Implementing Business Analysis (6% · 3 domande)
     ============================================================ */

  {
    id: 'D3-01', style: 'knowledge', domain: 3, activity: '3.2', type: 'standard',
    source: 'The Business Analysis Standard, 4.2.1',
    stem: 'Which characteristic best describes a predictive approach?',
    options: [
      { id: 'A', text: 'Value is delivered in small, prioritized increments with just-in-time documentation.' },
      { id: 'B', text: 'All the work is planned up front, everything that needs to be done is considered, and progress is tracked against the plan.' },
      { id: 'C', text: 'Some parts of the initiative are planned up front while others are delivered iteratively.' },
      { id: 'D', text: 'Documentation is avoided in favour of face-to-face communication.' }
    ],
    answer: 'B',
    explanation: 'L\'approccio predittivo pianifica tutto il lavoro in anticipo, cerca di identificare tutte le informazioni necessarie a creare il valore desiderato, produce documenti e modelli (scope statement, requirements, design, schedule e cost baseline, test plan) e traccia l\'avanzamento rispetto al piano. {A} descrive l\'adattivo, {C} l\'ibrido.'
  },
  {
    id: 'D3-02', style: 'applied', domain: 3, activity: '3.2', type: 'situational',
    source: 'The Business Analysis Standard, 4.2',
    stem: 'An initiative addresses a complex business need in an area where the challenge is poorly defined and requirements are expected to emerge as the solution takes shape. Which approach should the business analysis professional favour?',
    options: [
      { id: 'A', text: 'Predictive, because complexity requires more detailed up-front planning.' },
      { id: 'B', text: 'Adaptive, because it suits complex needs, poorly defined challenges, uncertainty, and emerging needs.' },
      { id: 'C', text: 'Predictive, because the organization must know the total cost before starting.' },
      { id: 'D', text: 'Neither: the initiative should be postponed until the requirements are fully known.' }
    ],
    answer: 'B',
    explanation: 'Lo Standard indica l\'approccio adattivo quando la soluzione affronta need complessi, sfide mal definite, incertezza, o need emergenti durante la costruzione. Il predittivo è indicato quando il lavoro è ben definito, fortemente regolamentato, relativamente lineare o completabile in sequenza.'
  },
  {
    id: 'D3-03', style: 'applied', domain: 3, activity: '3.2', type: 'situational',
    source: 'The Business Analysis Standard, 4.2.1 e 4.2.3',
    stem: 'A heavily regulated organization runs its compliance workstream with full up-front planning, while the customer-facing app in the same programme is delivered in iterations with frequent feedback. How is this best described?',
    options: [
      { id: 'A', text: 'A hybrid approach, because parts of the same initiative use a predictive approach and parts use an adaptive one.' },
      { id: 'B', text: 'A predictive approach, because the regulated workstream sets the standard for the programme.' },
      { id: 'C', text: 'An adaptive approach, because iterations are present.' },
      { id: 'D', text: 'A governance failure, because a single initiative must use one approach only.' }
    ],
    answer: 'A',
    explanation: 'Un approccio ibrido descrive sia il caso in cui alcune iniziative dell\'organizzazione sono predittive e altre adattive, sia il caso in cui parti della stessa iniziativa usano l\'uno e parti l\'altro. Non c\'è nessuna regola che imponga un solo approccio per iniziativa ({D}).'
  },
  {
    id: 'D3-04', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.1',
    stem: 'What is the essential difference between a requirement and a design?',
    options: [
      { id: 'A', text: 'A requirement is written by the business and a design is written by IT.' },
      { id: 'B', text: 'A requirement is a usable representation of a need, while a design is a usable representation of a solution.' },
      { id: 'C', text: 'A requirement is textual and a design is always a diagram.' },
      { id: 'D', text: 'A requirement is approved and a design is still a draft.' }
    ],
    answer: 'B',
    explanation: 'Requirement = rappresentazione utilizzabile di un need (che valore potrebbe essere prodotto); design = rappresentazione utilizzabile di una soluzione (come il valore potrebbe essere realizzato). La differenza sta nello scopo, non nell\'autore, nel formato o nello stato di approvazione — tre distrattori che l\'esame ripropone volentieri.'
  },
  {
    id: 'D3-05', style: 'knowledge', domain: 3, activity: '3.4', type: 'situational',
    source: 'The Business Analysis Standard, 4.4.1',
    stem: 'Which of the following is a DESIGN rather than a requirement?',
    options: [
      { id: 'A', text: 'Reduce the amount of time needed to pick and pack a customer order.' },
      { id: 'B', text: 'Record and access a medical patient\'s history.' },
      { id: 'C', text: 'A screen mock-up showing the specific data fields to be captured.' },
      { id: 'D', text: 'Provide information in English and French.' }
    ],
    answer: 'C',
    explanation: 'Un mock-up di schermata rappresenta una possibile soluzione, quindi è un design. {A}, {B} e {D} esprimono need — cosa serve — senza dire come realizzarlo. Lo Standard usa esattamente queste coppie di esempi: "provide information in English and French" è il requisito, il prototipo bilingue è il design corrispondente.'
  },
  {
    id: 'D3-06', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.2',
    stem: 'Which requirement classification describes "the capabilities and conditions needed to facilitate a transition from the current state to the future state"?',
    options: [
      { id: 'A', text: 'Business requirements' },
      { id: 'B', text: 'Stakeholder requirements' },
      { id: 'C', text: 'Solution requirements' },
      { id: 'D', text: 'Transition requirements' }
    ],
    answer: 'D',
    explanation: 'I transition requirement sono temporanei e riguardano aree come conversione dati, formazione e continuità operativa. Le altre tre classi: business (goal, obiettivi e outcome del perché del cambiamento), stakeholder (i bisogni degli stakeholder, ponte tra business e solution), solution (capacità e qualità della soluzione, divise in functional e non-functional).'
  },
  {
    id: 'D3-07', style: 'applied', domain: 3, activity: '3.4', type: 'situational',
    source: 'The Business Analysis Standard, 4.4.2',
    stem: 'A statement reads: "The system must respond to a search query within two seconds under normal load." How is this best classified?',
    options: [
      { id: 'A', text: 'A functional requirement, because it describes system behaviour.' },
      { id: 'B', text: 'A non-functional requirement, because it describes a condition or quality the solution must have.' },
      { id: 'C', text: 'A business requirement, because it supports the organization\'s objectives.' },
      { id: 'D', text: 'A transition requirement, because it applies only after go-live.' }
    ],
    answer: 'B',
    explanation: 'I non-functional requirement (o quality of service requirement) sono le condizioni o qualità che una soluzione deve avere: prestazioni, sicurezza, disponibilità. I functional requirement descrivono invece le capability della soluzione in termini di comportamento e informazioni gestite. Il tempo di risposta è la qualità più classicamente non-funzionale.'
  },
  {
    id: 'D3-08', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.3',
    stem: 'What does traceability of requirements and designs provide?',
    options: [
      { id: 'A', text: 'A guarantee that the solution will be delivered on schedule.' },
      { id: 'B', text: 'The ability to track relationships from the original stakeholder need to the implemented solution, supporting change control and impact analysis.' },
      { id: 'C', text: 'An automated way to generate test cases from requirements.' },
      { id: 'D', text: 'A method for prioritizing requirements by business value.' }
    ],
    answer: 'B',
    explanation: 'La tracciabilità permette di seguire le relazioni tra requisiti e design, dal need originale alla soluzione implementata. Supporta il change control assicurando che la fonte di un requisito sia identificabile e che si conoscano gli altri elementi potenzialmente impattati da una modifica, e aiuta la gestione di scope, impatto, cambiamento, rischio, tempi, costi e comunicazione.'
  },
  {
    id: 'D3-09', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.3',
    stem: 'A traceability model enables bi-directional tracking. What does BACKWARD traceability link a requirement to?',
    options: [
      { id: 'A', text: 'The solution components that implement it.' },
      { id: 'B', text: 'The original business need it derives from.' },
      { id: 'C', text: 'The test cases that verify it.' },
      { id: 'D', text: 'The stakeholder who approved it.' }
    ],
    answer: 'B',
    explanation: 'La backward traceability risale al business need originale; la forward traceability scende verso i componenti della soluzione. Un modello di tracciabilità aiuta anche a scoprire requisiti mancanti o componenti della soluzione non supportati da alcun requisito o design.'
  },
  {
    id: 'D3-10', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.1',
    stem: 'How do requirements and designs relate to each other during an initiative?',
    options: [
      { id: 'A', text: 'Requirements are completed and frozen before any design work can begin.' },
      { id: 'B', text: 'They are interdependent and cyclical: designs can reveal insights that enhance requirements, and changing requirements can lead to design updates.' },
      { id: 'C', text: 'Designs replace requirements once the solution approach has been chosen.' },
      { id: 'D', text: 'They are produced by different tasks and techniques that never overlap.' }
    ],
    answer: 'B',
    explanation: 'Requisiti e design sono interdipendenti e ciclici, in un feedback loop continuo che li mantiene allineati e li raffina lungo l\'iniziativa. Le stesse task e tecniche possono servire a creare entrambi (quindi {D} è falsa): a differire è lo scopo.'
  },
  {
    id: 'D3-11', style: 'knowledge', domain: 3, activity: '3.3', type: 'standard',
    source: 'The Business Analysis Standard, 4.5.1',
    stem: 'What is the role of the business analysis professional regarding security integration?',
    options: [
      { id: 'A', text: 'To act as the security subject matter expert and approve the security architecture.' },
      { id: 'B', text: 'To help stakeholders identify security risks and collaborate across technical and non-technical groups, having a solid understanding of security principles.' },
      { id: 'C', text: 'To delegate all security considerations to the IT department.' },
      { id: 'D', text: 'To defer security analysis until the solution has been implemented.' }
    ],
    answer: 'B',
    explanation: 'Lo Standard è esplicito: i professionisti di business analysis non devono necessariamente essere SME di sicurezza, ma con una solida comprensione dei principi di sicurezza aiutano gli stakeholder di background diversi a collaborare, identificano rischi, valutano misure e allineano le iniziative di sicurezza agli obiettivi organizzativi.'
  },
  {
    id: 'D3-12', style: 'applied', domain: 3, activity: '3.3', type: 'situational',
    source: 'The Business Analysis Standard, 4.5.2',
    stem: 'During analysis it becomes clear that the option with the strongest financial return would require using customer data in a way that stakeholders would not expect. What does the Standard indicate the business analysis professional should do?',
    options: [
      { id: 'A', text: 'Recommend the option with the strongest return, since maximizing value is the objective.' },
      { id: 'B', text: 'Consider ethics as part of the analysis, conducting careful analysis that eliminates personal biases and following IIBA\'s Code of Ethical Conduct and Professional Standards.' },
      { id: 'C', text: 'Remove the option from the analysis without informing stakeholders.' },
      { id: 'D', text: 'Leave the ethical judgement entirely to the legal department.' }
    ],
    answer: 'B',
    explanation: 'L\'etica va considerata, con un\'analisi attenta che elimini i bias personali; quando la scelta "migliore" e quella "etica" non coincidono, il Code of Ethical Conduct and Professional Standards di IIBA fa da riferimento. È responsabilità del professionista assicurare che il lavoro sia allineato al codice mentre genera valore.'
  },
  {
    id: 'D3-13', style: 'knowledge', domain: 3, activity: '3.3', type: 'standard',
    source: 'The Business Analysis Standard, 4.5.4',
    stem: 'How does the Standard describe sustainability in the context of business analysis?',
    options: [
      { id: 'A', text: 'Exclusively as the reduction of an organization\'s carbon emissions.' },
      { id: 'B', text: 'As meeting current needs while preserving resources for future generations, including advancing social equity, health, and economic viability.' },
      { id: 'C', text: 'As a reporting obligation handled by the finance function.' },
      { id: 'D', text: 'As a constraint that limits the solution options available to a team.' }
    ],
    answer: 'B',
    explanation: 'La sostenibilità riguarda l\'esecuzione del modello di business per soddisfare i bisogni attuali preservando le risorse naturali per le generazioni future, e include l\'avanzamento di equità sociale, salute e viabilità economica. Il professionista allinea strategie, processi e sistemi agli outcome di sostenibilità.'
  },
  {
    id: 'D3-14', style: 'knowledge', domain: 3, activity: '3.3', type: 'standard',
    source: 'The Business Analysis Standard, 4.6',
    stem: 'An organization sets up a collaborative space where practitioners from different departments share experiences, expertise, and best practices. Which delivery form is this?',
    options: [
      { id: 'A', text: 'Centre of Excellence (CoE)' },
      { id: 'B', text: 'Community of Practice (CoP)' },
      { id: 'C', text: 'Business Analysis as a Service (BAaS)' },
      { id: 'D', text: 'Dispersed across business units' }
    ],
    answer: 'B',
    explanation: 'La Community of Practice è lo spazio collaborativo di condivisione. Il Centre of Excellence è un\'unità o funzione specializzata dedicata all\'eccellenza nella business analysis; BAaS è l\'outsourcing a fornitori specializzati; "dispersed" è l\'integrazione della funzione nei singoli reparti. Molte organizzazioni combinano più forme.'
  },
  {
    id: 'D3-15', style: 'knowledge', domain: 3, activity: '3.1', type: 'standard',
    source: 'The Business Analysis Standard, 4.1',
    stem: 'Which reference does the Standard point to for developing and refining business analysis competencies in real time, regardless of official job role or title?',
    options: [
      { id: 'A', text: 'The Business Analysis Competency Model' },
      { id: 'B', text: 'The Agile Extension to the BABOK Guide' },
      { id: 'C', text: 'The Guide to Business Data Analytics' },
      { id: 'D', text: 'The Elements of Cybersecurity Analysis' }
    ],
    answer: 'A',
    explanation: 'Il Business Analysis Competency Model è la guida di riferimento e ricerca per sviluppare competenze, applicabile a chiunque sia coinvolto direttamente o indirettamente nella professione. Gli altri documenti esistono ma coprono altro: agile, business data analytics e cybersecurity.'
  },
  {
    id: 'D3-16', style: 'knowledge', domain: 3, activity: '3.1', type: 'standard',
    source: 'The Business Analysis Standard, 4.3',
    stem: 'The Standard identifies a small set of foundational techniques as a good starting point for new practitioners. Which of the following is one of them?',
    options: [
      { id: 'A', text: 'Data Modelling' },
      { id: 'B', text: 'Customer Journey Mapping' },
      { id: 'C', text: 'SWOT Analysis' },
      { id: 'D', text: 'Business Rules Analysis' }
    ],
    answer: 'B',
    explanation: 'Le tecniche fondazionali dello Standard sono cinque: Backlog Management, Customer Journey Mapping, Data Storytelling, Process Analysis e Workshops/Interviews. Le altre opzioni sono tecniche BABOK reali — e alcune rientrano nelle 20 valutate all\'ECBA — ma non appartengono a questa cinquina. Attenzione a non confondere le due liste.'
  },
  {
    id: 'D3-17', style: 'knowledge', domain: 3, activity: '3.2', type: 'standard',
    source: 'The Business Analysis Standard, 4.3',
    stem: 'Approximately how many business analysis techniques are described across the BABOK Guide, the Agile Extension, the BDA Guide, and the POA Guide?',
    options: [
      { id: 'A', text: 'More than 30' },
      { id: 'B', text: 'More than 50' },
      { id: 'C', text: 'More than 90' },
      { id: 'D', text: 'More than 150' }
    ],
    answer: 'C',
    explanation: 'Più di 90 tecniche in totale nei quattro documenti. Ogni tecnica può essere utile nel contesto giusto: non esiste una tecnica migliore in assoluto. All\'ECBA sono valutate 20 tecniche specifiche del cap. 10 del BABOK.'
  },
  {
    id: 'D3-18', style: 'knowledge', domain: 3, activity: '3.3', type: 'standard',
    source: 'The Business Analysis Standard, 4.5.3',
    stem: 'Why does the Standard describe inclusion as more than an ethical consideration?',
    options: [
      { id: 'A', text: 'Because regulators require diversity reporting in most industries.' },
      { id: 'B', text: 'Because it is a key driver of innovation and sustainable growth: diverse perspectives drive creative problem-solving.' },
      { id: 'C', text: 'Because it reduces the cost of recruitment.' },
      { id: 'D', text: 'Because it shortens the time needed to reach consensus in workshops.' }
    ],
    answer: 'B',
    explanation: 'L\'inclusione è presentata come motore di innovazione e crescita sostenibile: i professionisti vanno oltre la mera rappresentanza, cercando attivamente e amplificando voci diverse, perché la diversità alimenta la soluzione creativa dei problemi.'
  },
  {
    id: 'D3-19', style: 'applied', domain: 3, activity: '3.2', type: 'situational',
    source: 'The Business Analysis Standard, 4.2',
    stem: 'A business analysis professional joins an organization where the delivery approach for the initiative has already been mandated by the programme office. What is the appropriate stance?',
    options: [
      { id: 'A', text: 'Refuse to proceed until the approach can be re-selected on the basis of the situation.' },
      { id: 'B', text: 'Recognize that in some cases an approach will be imposed on the team, and learn how to create value using any of the approaches.' },
      { id: 'C', text: 'Apply an adaptive approach informally regardless of the mandate.' },
      { id: 'D', text: 'Escalate to the sponsor to have the mandate reversed before any analysis starts.' }
    ],
    answer: 'B',
    explanation: 'Lo Standard riconosce che a volte l\'approccio è imposto al team; quando invece il professionista può scegliere, applica i criteri di selezione. In ogni caso l\'aspettativa è saper creare valore con qualunque approccio — un\'idea che l\'esame testa spesso in forma di scenario.'
  },
  {
    id: 'D3-20', style: 'knowledge', domain: 3, activity: '3.1', type: 'standard',
    source: 'The Business Analysis Standard, 4.6',
    stem: 'Why does an organization establish standards such as processes, procedures, templates, and guidelines for business analysis?',
    options: [
      { id: 'A', text: 'To ensure consistency and quality and adherence to appropriate practices, whichever delivery form is chosen.' },
      { id: 'B', text: 'To make the business analysis approach identical across all organizations in the industry.' },
      { id: 'C', text: 'To remove the need for practitioners to exercise judgement about context.' },
      { id: 'D', text: 'To satisfy an ISO certification requirement for business analysis functions.' }
    ],
    answer: 'A',
    explanation: 'Gli standard organizzativi servono a garantire coerenza, qualità e aderenza alle pratiche appropriate, qualunque sia la forma di erogazione scelta (CoE, CoP, BAaS o dispersa). Non annullano il giudizio contestuale del professionista, che resta centrale in tutto lo Standard.'
  },
  {
    id: 'D3-21', style: 'knowledge', domain: 3, activity: '3.4', type: 'standard',
    source: 'The Business Analysis Standard, 4.4.2',
    stem: 'Which requirement type consists of "statements of goals, objectives, and outcomes for why a change has been initiated"?',
    options: [
      { id: 'A', text: 'Stakeholder requirements' },
      { id: 'B', text: 'Business requirements' },
      { id: 'C', text: 'Solution requirements' },
      { id: 'D', text: 'Transition requirements' }
    ],
    answer: 'B',
    explanation: 'I business requirement esprimono il "perché" del cambiamento e possono riguardare l\'intera impresa, un\'area di business o una singola iniziativa. Nello schema del ciclo requisiti-design: business = WHY, stakeholder e solution = WHAT, design = HOW.'
  },
  {
    id: 'D3-22', style: 'applied', domain: 3, activity: '3.1', type: 'situational',
    source: 'The Business Analysis Standard, 4.1',
    stem: 'An organization wants to identify who could benefit from applying business analysis. Which of the following activities suggests that a person would benefit?',
    options: [
      { id: 'A', text: 'Only writing and maintaining formal requirements documents.' },
      { id: 'B', text: 'Designing and implementing new processes or improving existing ones, and facilitating stakeholder collaboration.' },
      { id: 'C', text: 'Only managing the delivery schedule and reporting status to the sponsor.' },
      { id: 'D', text: 'Only operating the solution after it has been implemented.' }
    ],
    answer: 'B',
    explanation: 'L\'elenco dello Standard include: comprendere e sviluppare strategia e obiettivi, creare value proposition, abilitare e guidare il cambiamento, analizzare need e progettare soluzioni, facilitare la collaborazione fra stakeholder, creare prodotti e servizi innovativi, progettare o migliorare processi, ottimizzare le attività operative. Le opzioni che iniziano con "only" restringono indebitamente il campo.'
  },

  /* ============================================================
     DOMINIO 4 — Change (10% · 5 domande)
     ============================================================ */

  {
    id: 'D4-01', style: 'knowledge', domain: 4, activity: '4.1', type: 'standard',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'What is the purpose of the Analyze Current State task?',
    options: [
      { id: 'A', text: 'To determine the set of necessary conditions to meet the business need.' },
      { id: 'B', text: 'To understand why an enterprise needs to change some aspect of how it operates, and what would be directly or indirectly affected by the change.' },
      { id: 'C', text: 'To develop and assess alternative approaches to the change and select the recommended one.' },
      { id: 'D', text: 'To rank requirements in order of relative importance.' }
    ],
    answer: 'B',
    explanation: 'Analyze Current State risponde al perché serve un cambiamento e a cosa ne sarebbe toccato, direttamente o indirettamente. {A} è Define Future State (6.2), {C} è Define Change Strategy (6.4), {D} è Prioritize Requirements (5.3). I purpose dei task sono formulazioni brevi e distinte: impararli riconoscendone le parole chiave rende molte domande immediate.'
  },
  {
    id: 'D4-02', style: 'applied', domain: 4, activity: '4.1', type: 'situational',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'Before proposing changes to an order management process, a business analysis professional examines the organizational structure, the existing technology, company policies, and the external regulations that apply. Why is this examination performed?',
    options: [
      { id: 'A', text: 'To document the current state so that the reasons for change and the areas affected by it are understood.' },
      { id: 'B', text: 'To produce the solution design that the delivery team will implement.' },
      { id: 'C', text: 'To establish the project schedule and resource plan.' },
      { id: 'D', text: 'To obtain formal approval of the requirements before elicitation begins.' }
    ],
    answer: 'A',
    explanation: 'Struttura organizzativa, cultura, capability, tecnologia, policy e influencer esterni sono le componenti del current state analizzate proprio per capire perché serve il cambiamento e cosa ne è impattato. Non è ancora progettazione ({B}) né pianificazione di progetto ({C}).'
  },
  {
    id: 'D4-03', style: 'knowledge', domain: 4, activity: '4.2', type: 'standard',
    source: 'BABOK Guide, 5.4 Assess Requirements Changes',
    stem: 'What is the purpose of the Assess Requirements Changes task?',
    options: [
      { id: 'A', text: 'To obtain agreement on and approval of requirements and designs.' },
      { id: 'B', text: 'To retain requirement accuracy and consistency throughout the requirements life cycle.' },
      { id: 'C', text: 'To evaluate the implications of proposed changes to requirements and designs.' },
      { id: 'D', text: 'To ensure requirements at different levels are aligned to one another.' }
    ],
    answer: 'C',
    explanation: 'Assess Requirements Changes valuta le implicazioni delle modifiche proposte. {A} è Approve Requirements (5.5), {B} è Maintain Requirements (5.2), {D} è Trace Requirements (5.1). I cinque task di Requirements Life Cycle Management sono spesso confusi tra loro: distinguili dal verbo del purpose.'
  },
  {
    id: 'D4-04', style: 'applied', domain: 4, activity: '4.2', type: 'situational',
    source: 'BABOK Guide, 5.1 Trace Requirements e 5.4 Assess Requirements Changes',
    stem: 'A stakeholder requests a change to a requirement late in the initiative. The business analysis professional needs to determine quickly which other requirements and solution components would be affected. Which established practice makes this possible?',
    options: [
      { id: 'A', text: 'Traceability, which links requirements to one another and to solution components.' },
      { id: 'B', text: 'Prioritization, which ranks requirements by relative importance.' },
      { id: 'C', text: 'Verification, which checks requirements against quality characteristics.' },
      { id: 'D', text: 'Approval, which records who signed off on each requirement.' }
    ],
    answer: 'A',
    explanation: 'La tracciabilità serve esattamente a gestire gli effetti di un cambiamento a un livello sugli elementi correlati: senza di essa l\'impact analysis diventa una ricerca manuale. Prioritizzazione, verifica e approvazione sono attività reali ma rispondono ad altre domande.'
  },
  {
    id: 'D4-05', style: 'knowledge', domain: 4, activity: '4.2', type: 'standard',
    source: 'BABOK Guide, 6.4 Define Change Strategy',
    stem: 'What does a gap analysis identify?',
    options: [
      { id: 'A', text: 'The difference between the planned budget and the actual spend of an initiative.' },
      { id: 'B', text: 'The difference between current state and future state capabilities.' },
      { id: 'C', text: 'The difference between functional and non-functional requirements.' },
      { id: 'D', text: 'The difference between stakeholder expectations and the project schedule.' }
    ],
    answer: 'B',
    explanation: 'La gap analysis identifica la differenza tra le capability dello stato attuale e quelle dello stato futuro, e richiede che entrambi gli stati siano definiti. Usare le stesse tecniche per descriverli semplifica il confronto.'
  },
  {
    id: 'D4-06', style: 'knowledge', domain: 4, activity: '4.3', type: 'standard',
    source: 'BABOK Guide, 3.5 Identify Business Analysis Performance Improvements',
    stem: 'What is the purpose of Identify Business Analysis Performance Improvements?',
    options: [
      { id: 'A', text: 'To assess business analysis work and plan to improve processes where required.' },
      { id: 'B', text: 'To measure the performance of the implemented solution against its value.' },
      { id: 'C', text: 'To define how decisions about requirements and designs are made.' },
      { id: 'D', text: 'To evaluate the performance of individual team members.' }
    ],
    answer: 'A',
    explanation: 'Il task guarda al lavoro di business analysis stesso e a come migliorarlo. {B} è Measure Solution Performance (8.1): riguarda la soluzione, non il processo di analisi. {C} è Plan Business Analysis Governance (3.3). La valutazione delle persone non è oggetto del BABOK.'
  },
  {
    id: 'D4-07', style: 'applied', domain: 4, activity: '4.3', type: 'situational',
    source: 'BABOK Guide, 10.27 Lessons Learned',
    stem: 'At the close of a delivery phase the team meets to compile what went well, what could be improved, and what should be done differently next time. Which technique is being used?',
    options: [
      { id: 'A', text: 'Root Cause Analysis' },
      { id: 'B', text: 'Retrospective planning under Backlog Management' },
      { id: 'C', text: 'Lessons Learned' },
      { id: 'D', text: 'Process Analysis' }
    ],
    answer: 'C',
    explanation: 'Lessons Learned compila e documenta successi, opportunità di miglioramento, fallimenti e raccomandazioni per migliorare le prestazioni di progetti o fasi future. Root Cause Analysis (10.40) indaga invece le cause di un problema specifico; Process Analysis (10.34) valuta l\'efficienza di un processo.'
  },
  {
    id: 'D4-08', style: 'knowledge', domain: 4, activity: '4.4', type: 'standard',
    source: 'BABOK Guide, 8.5 Recommend Actions to Increase Solution Value',
    stem: 'What is the purpose of Recommend Actions to Increase Solution Value?',
    options: [
      { id: 'A', text: 'To determine the factors internal to the solution that restrict value realization.' },
      { id: 'B', text: 'To understand the factors creating differences between potential value and actual value, and recommend a course of action to align them.' },
      { id: 'C', text: 'To define performance measures for the solution.' },
      { id: 'D', text: 'To determine how factors external to the solution restrict value realization.' }
    ],
    answer: 'B',
    explanation: 'Il task chiude il ciclo di Solution Evaluation: capire perché il valore effettivo diverge da quello potenziale e raccomandare come allinearli. {A} è Assess Solution Limitations (8.3), {D} è Assess Enterprise Limitations (8.4), {C} è Measure Solution Performance (8.1).'
  },
  {
    id: 'D4-09', style: 'applied', domain: 4, activity: '4.4', type: 'situational',
    source: 'BABOK Guide, 10.34 Process Analysis',
    stem: 'A business analysis professional is asked to look at an invoicing process that stakeholders consider slow, in order to find opportunities for improvement. Which technique fits this assignment?',
    options: [
      { id: 'A', text: 'Process Modelling, because it produces a standardized graphical model of the work.' },
      { id: 'B', text: 'Process Analysis, because it assesses a process for efficiency and effectiveness and identifies opportunities for change.' },
      { id: 'C', text: 'Scope Modelling, because it defines the boundaries of the solution.' },
      { id: 'D', text: 'Organizational Modelling, because it describes roles and reporting structures.' }
    ],
    answer: 'B',
    explanation: 'Process Analysis valuta efficienza ed efficacia e individua opportunità di cambiamento. Process Modelling (10.35) è la rappresentazione grafica che fa da fondamento all\'analisi: modellare è descrivere, analizzare è valutare. All\'esame questa coppia è un distrattore ricorrente.'
  },
  {
    id: 'D4-10', style: 'knowledge', domain: 4, activity: '4.1', type: 'standard',
    source: 'BABOK Guide, 6.3 Assess Risks',
    stem: 'According to the Assess Risks task, what is being assessed?',
    options: [
      { id: 'A', text: 'The undesirable consequences of internal and external forces on the enterprise during the transition to, or once in, the future state.' },
      { id: 'B', text: 'The probability that the project will exceed its approved budget.' },
      { id: 'C', text: 'The technical defects found during solution testing.' },
      { id: 'D', text: 'The performance of the solution after implementation.' }
    ],
    answer: 'A',
    explanation: 'Assess Risks (6.3) guarda alle conseguenze indesiderate di forze interne ed esterne durante la transizione allo stato futuro e una volta raggiunto, e all\'impatto potenziale di quelle forze. Il rischio nel BABOK è legato al valore, non solo al budget di progetto ({B}) o ai difetti tecnici ({C}).'
  },

  /* ============================================================
     DOMINIO 5 — Need (10% · 5 domande)
     ============================================================ */

  {
    id: 'D5-01', style: 'knowledge', domain: 5, activity: '5.1', type: 'standard',
    source: 'BABOK Guide, 4.2 Conduct Elicitation',
    stem: 'Which of the following are the three common types of elicitation?',
    options: [
      { id: 'A', text: 'Formal, informal, and facilitated' },
      { id: 'B', text: 'Collaborative, research, and experiments' },
      { id: 'C', text: 'Interviews, workshops, and surveys' },
      { id: 'D', text: 'Direct, indirect, and delegated' }
    ],
    answer: 'B',
    explanation: 'I tre tipi sono collaborative (interazione diretta con gli stakeholder), research (studio sistematico di materiali o fonti non direttamente note agli stakeholder, inclusa l\'analisi di dati storici) ed experiments (test controllati: studi osservazionali, proof of concept, prototipi). {C} elenca tecniche, non tipi di elicitation: è la confusione che la domanda vuole testare.'
  },
  {
    id: 'D5-02', style: 'applied', domain: 5, activity: '5.1', type: 'situational',
    source: 'BABOK Guide, 4.2 Conduct Elicitation e 10.18 Document Analysis',
    stem: 'To understand how an existing claims process works, a business analysis professional studies the current procedure manuals, system documentation, and past audit reports. Which type of elicitation is this, and which technique?',
    options: [
      { id: 'A', text: 'Collaborative elicitation, using Interviews.' },
      { id: 'B', text: 'Experiments, using Prototyping.' },
      { id: 'C', text: 'Research, using Document Analysis.' },
      { id: 'D', text: 'Collaborative elicitation, using Workshops.' }
    ],
    answer: 'C',
    explanation: 'Studiare materiali esistenti è elicitation di tipo research; Document Analysis (10.18) elicita informazioni di business analysis, incluse comprensione contestuale e requisiti, esaminando materiali disponibili che descrivono l\'ambiente di business o gli asset organizzativi esistenti. Le opzioni collaborative implicano invece l\'interazione diretta con persone.'
  },
  {
    id: 'D5-03', style: 'knowledge', domain: 5, activity: '5.1', type: 'standard',
    source: 'BABOK Guide, 10.25 Interviews',
    stem: 'Besides drawing out business analysis information, what other benefit does the Interviews technique provide?',
    options: [
      { id: 'A', text: 'It produces a graphical model of how work is carried out.' },
      { id: 'B', text: 'It establishes relationships and builds trust between business analysts and stakeholders.' },
      { id: 'C', text: 'It guarantees that the information obtained is accurate and complete.' },
      { id: 'D', text: 'It removes the need to confirm the elicitation results afterwards.' }
    ],
    answer: 'B',
    explanation: 'L\'intervista è un approccio sistematico per elicitare informazioni parlando con una o più persone, ma serve anche a stabilire relazioni e costruire fiducia — il "rapport" citato dall\'activity statement 5.1. Nessuna tecnica garantisce di per sé accuratezza ({C}): i risultati vanno comunque confermati (task 4.3).'
  },
  {
    id: 'D5-04', style: 'knowledge', domain: 5, activity: '5.2', type: 'standard',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'Which set of characteristics describes requirements of acceptable quality?',
    options: [
      { id: 'A', text: 'Atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable' },
      { id: 'B', text: 'Approved, budgeted, scheduled, assigned, tracked' },
      { id: 'C', text: 'Functional, non-functional, transition, business, stakeholder' },
      { id: 'D', text: 'Specific, measurable, achievable, relevant, time-bound' }
    ],
    answer: 'A',
    explanation: 'Sono le caratteristiche di qualità verificate dal task Verify Requirements (7.2). {C} elenca le classi di requisiti, {D} è l\'acronimo SMART usato per gli obiettivi. Vale la pena memorizzare almeno atomic, unambiguous e testable: sono le più usate nelle domande.'
  },
  {
    id: 'D5-05', style: 'applied', domain: 5, activity: '5.2', type: 'situational',
    source: 'BABOK Guide, 7.2 Verify Requirements e 7.3 Validate Requirements',
    stem: 'A reviewer notes that a requirement is well written and testable, but that it does not contribute to any business objective of the initiative. Which task addresses this specific concern?',
    options: [
      { id: 'A', text: 'Verify Requirements, because the requirement must meet quality standards.' },
      { id: 'B', text: 'Validate Requirements, because all requirements must align to the business requirements and support the delivery of needed value.' },
      { id: 'C', text: 'Trace Requirements, because the requirement has no identified source.' },
      { id: 'D', text: 'Approve Requirements, because agreement has not been obtained.' }
    ],
    answer: 'B',
    explanation: 'La distinzione verify/validate è una delle più testate. Verify (7.2) chiede "il requisito è scritto bene?" — qualità, usabilità della specifica. Validate (7.3) chiede "il requisito serve a qualcosa?" — allineamento ai business requirement e al valore atteso. Qui il requisito supera la verifica ma fallisce la validazione.'
  },
  {
    id: 'D5-06', style: 'knowledge', domain: 5, activity: '5.2', type: 'standard',
    source: 'BABOK Guide, 4.3 Confirm Elicitation Results',
    stem: 'Why are elicitation results confirmed before resources are committed to using them?',
    options: [
      { id: 'A', text: 'Because confirmation is a formal governance gate that authorizes the budget.' },
      { id: 'B', text: 'To identify errors, omissions, conflicts, and ambiguity, and resolve them early.' },
      { id: 'C', text: 'To transfer accountability for the requirements to the stakeholders who provided them.' },
      { id: 'D', text: 'Because unconfirmed results cannot be traced to solution components.' }
    ],
    answer: 'B',
    explanation: 'Confirm Elicitation Results (4.3) controlla accuratezza e coerenza con altre informazioni: la revisione può scoprire errori, omissioni, conflitti e ambiguità. Impegnare risorse su risultati non confermati rischia di disattendere le aspettative degli stakeholder. È una revisione molto meno rigorosa e formale di quella che avviene durante l\'analisi.'
  },
  {
    id: 'D5-07', style: 'applied', domain: 5, activity: '5.3', type: 'situational',
    source: 'BABOK Guide, 7.3 Validate Requirements',
    stem: 'Two stakeholder groups have stated needs that cannot both be satisfied by the same solution. What is the appropriate action for a practitioner at the foundational level?',
    options: [
      { id: 'A', text: 'Choose the need of the group with the higher organizational rank and proceed.' },
      { id: 'B', text: 'Implement both and let the delivery team resolve the contradiction.' },
      { id: 'C', text: 'Flag the conflict so that it can be reviewed and resolved with the relevant stakeholders.' },
      { id: 'D', text: 'Remove both needs from scope, since conflicting requirements cannot be validated.' }
    ],
    answer: 'C',
    explanation: 'L\'activity statement 5.3 dell\'ECBA è esplicita sul livello di responsabilità atteso: confrontare i bisogni degli stakeholder con gli outcome e segnalare i conflitti per la revisione. A questo livello si rileva e si segnala, non si decide unilateralmente ({A}) né si rimuove ({D}).'
  },
  {
    id: 'D5-08', style: 'knowledge', domain: 5, activity: '5.4', type: 'standard',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Which of the following is a typical factor influencing the prioritization of requirements?',
    options: [
      { id: 'A', text: 'Penalty: the consequences that result from not implementing a given requirement.' },
      { id: 'B', text: 'Authorship: who within the organization first raised the requirement.' },
      { id: 'C', text: 'Length: how much documentation the requirement needs.' },
      { id: 'D', text: 'Sequence: the order in which requirements were elicited.' }
    ],
    answer: 'A',
    explanation: 'I fattori tipici sono benefit, penalty, cost, risk, dependencies, time sensitivity, stability e regulatory or policy compliance. Il "penalty" include il dover soddisfare obblighi normativi, che possono prevalere sugli altri interessi degli stakeholder. Chi ha proposto il requisito o quanto è lungo non sono criteri del BABOK.'
  },
  {
    id: 'D5-09', style: 'applied', domain: 5, activity: '5.4', type: 'situational',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'A requirement is technically difficult and there is real doubt it can be delivered at all. Some teams choose to prioritize such a requirement near the top of the list. What is the rationale?',
    options: [
      { id: 'A', text: 'To satisfy the stakeholders who requested it before they escalate.' },
      { id: 'B', text: 'To minimize the resources spent before learning that a proposed solution cannot be delivered.' },
      { id: 'C', text: 'Because the most expensive requirements always deliver the most benefit.' },
      { id: 'D', text: 'Because difficult requirements have the highest time sensitivity by definition.' }
    ],
    answer: 'B',
    explanation: 'È il criterio "risk": quando esiste il rischio che la soluzione non sia tecnicamente fattibile, il requisito più difficile può essere portato in cima per limitare le risorse spese prima di scoprire che la soluzione proposta non è realizzabile. Un proof of concept serve allo stesso scopo.'
  },
  {
    id: 'D5-10', style: 'knowledge', domain: 5, activity: '5.4', type: 'standard',
    source: 'BABOK Guide, 10.48 User Stories',
    stem: 'How does the BABOK Guide describe a user story?',
    options: [
      { id: 'A', text: 'A detailed specification of all functional and non-functional requirements of a feature.' },
      { id: 'B', text: 'A small, concise statement of functionality or quality needed to deliver value to a specific stakeholder.' },
      { id: 'C', text: 'A graphical model showing how work is carried out across roles.' },
      { id: 'D', text: 'A prioritized record of all remaining work items on an initiative.' }
    ],
    answer: 'B',
    explanation: 'La user story è piccola e concisa e porta valore a uno stakeholder specifico. {D} descrive il backlog (10.2 Backlog Management), {C} il process model (10.35). La brevità è parte della definizione: una user story non è una specifica esaustiva.'
  },

  /* ============================================================
     DOMINIO 6 — Solution (10% · 5 domande)
     ============================================================ */

  {
    id: 'D6-01', style: 'knowledge', domain: 6, activity: '6.1', type: 'standard',
    source: 'BABOK Guide, 8.1 Measure Solution Performance',
    stem: 'Solution performance measures may be quantitative, qualitative, or both. What are qualitative measures?',
    options: [
      { id: 'A', text: 'Numerical, countable, or finite measures, usually involving amounts, quantities, or rates.' },
      { id: 'B', text: 'Subjective measures that can include attitudes, perceptions, and other subjective responses.' },
      { id: 'C', text: 'Measures imposed by regulators that cannot be modified by the organization.' },
      { id: 'D', text: 'Measures that are collected automatically by the solution itself.' }
    ],
    answer: 'B',
    explanation: 'Le misure qualitative sono soggettive: atteggiamenti, percezioni, risposte soggettive di clienti e utenti su quanto la soluzione soddisfa il bisogno. {A} descrive le misure quantitative. Entrambe sono legittime: la scelta dipende dal valore che si sta misurando.'
  },
  {
    id: 'D6-02', style: 'applied', domain: 6, activity: '6.1', type: 'situational',
    source: 'BABOK Guide, 7.3 Validate Requirements',
    stem: 'A business analysis professional is asked to define, before implementation, how the organization will judge whether the change has succeeded. Which element of Validate Requirements covers this?',
    options: [
      { id: 'A', text: 'Identify assumptions' },
      { id: 'B', text: 'Evaluate alignment with solution scope' },
      { id: 'C', text: 'Define measurable evaluation criteria' },
      { id: 'D', text: 'Specify and model requirements' }
    ],
    answer: 'C',
    explanation: 'Define Measurable Evaluation Criteria: i benefici attesi sono definiti nel future state, ma i criteri di misura e il processo di valutazione spesso no. Si definiscono metriche di baseline sul current state e metriche target che riflettono il raggiungimento degli obiettivi di business.'
  },
  {
    id: 'D6-03', style: 'knowledge', domain: 6, activity: '6.2', type: 'standard',
    source: 'BABOK Guide, 7.6 Analyze Potential Value and Recommend Solution',
    stem: 'What is the purpose of Analyze Potential Value and Recommend Solution?',
    options: [
      { id: 'A', text: 'To estimate the potential value for each design option and establish which is most appropriate to meet the enterprise\'s requirements.' },
      { id: 'B', text: 'To define the solution approach and allocate requirements across solution components.' },
      { id: 'C', text: 'To measure the value actually delivered after implementation.' },
      { id: 'D', text: 'To obtain approval of the recommended solution from the sponsor.' }
    ],
    answer: 'A',
    explanation: 'Il task 7.6 stima il valore potenziale di ciascuna opzione di design e stabilisce quale sia la più appropriata. {B} è Define Design Options (7.5), che viene prima: prima si definiscono le opzioni, poi se ne analizza il valore. {C} appartiene a Solution Evaluation (cap. 8).'
  },
  {
    id: 'D6-04', style: 'applied', domain: 6, activity: '6.2', type: 'situational',
    source: 'BABOK Guide, 10.38 Risk Analysis and Management',
    stem: 'While comparing three solution options, the team lists the uncertainties that could reduce the value each option delivers, evaluates them, and plans how to deal with them. Which technique is being applied?',
    options: [
      { id: 'A', text: 'SWOT Analysis' },
      { id: 'B', text: 'Root Cause Analysis' },
      { id: 'C', text: 'Risk Analysis and Management' },
      { id: 'D', text: 'Business Capability Analysis' }
    ],
    answer: 'C',
    explanation: 'Risk Analysis and Management (10.38) identifica le aree di incertezza che potrebbero incidere negativamente sul valore, le analizza e le valuta, e sviluppa e gestisce i modi per affrontarle. La SWOT valuta forze, debolezze, opportunità e minacce di un\'organizzazione, non le incertezze di una singola opzione.'
  },
  {
    id: 'D6-05', style: 'knowledge', domain: 6, activity: '6.3', type: 'standard',
    source: 'BABOK Guide, 6.4 Define Change Strategy',
    stem: 'What does the solution scope define?',
    options: [
      { id: 'A', text: 'The list of stakeholders who must approve the solution.' },
      { id: 'B', text: 'The boundaries of the solution, described in enough detail for stakeholders to understand which new capabilities the change will deliver.' },
      { id: 'C', text: 'The schedule and budget within which the solution must be delivered.' },
      { id: 'D', text: 'The set of test cases that the solution must pass before go-live.' }
    ],
    answer: 'B',
    explanation: 'Il solution scope definisce i confini della soluzione e descrive come essa abilita i goal del future state. Può includere anche la descrizione dei componenti fuori scope, per chiarezza, e può evolvere durante l\'iniziativa man mano che emergono informazioni.'
  },
  {
    id: 'D6-06', style: 'knowledge', domain: 6, activity: '6.3', type: 'standard',
    source: 'BABOK Guide, 10.41 Scope Modelling',
    stem: 'What is the purpose of Scope Modelling?',
    options: [
      { id: 'A', text: 'To define the nature of one or more limits or boundaries and place elements inside or outside those boundaries.' },
      { id: 'B', text: 'To record, track, and prioritize remaining work items.' },
      { id: 'C', text: 'To describe the roles, responsibilities, and reporting structures within an organization.' },
      { id: 'D', text: 'To identify and evaluate the underlying causes of a problem.' }
    ],
    answer: 'A',
    explanation: 'Gli scope model definiscono limiti o confini e collocano gli elementi dentro o fuori. {B} è Backlog Management (10.2), {C} Organizational Modelling (10.32), {D} Root Cause Analysis (10.40). Ricorda che le 20 tecniche valutate all\'ECBA vanno sapute per purpose, description e usage considerations.'
  },
  {
    id: 'D6-07', style: 'knowledge', domain: 6, activity: '6.4', type: 'standard',
    source: 'BABOK Guide, 7.1 Specify and Model Requirements',
    stem: 'What is the purpose of Specify and Model Requirements?',
    options: [
      { id: 'A', text: 'To check that requirements meet quality standards.' },
      { id: 'B', text: 'To analyze, synthesize, and refine elicitation results into requirements and designs.' },
      { id: 'C', text: 'To ensure the requirements collectively support one another to achieve the objectives.' },
      { id: 'D', text: 'To draw out and identify information relevant to the change.' }
    ],
    answer: 'B',
    explanation: 'Il task 7.1 trasforma i risultati dell\'elicitation in requisiti e design attraverso analisi, sintesi e raffinamento. {C} è Define Requirements Architecture (7.4), {A} è Verify Requirements (7.2), {D} è Conduct Elicitation (4.2). Nota la sequenza: si elicita, poi si specifica e modella, poi si verifica e valida.'
  },
  {
    id: 'D6-08', style: 'applied', domain: 6, activity: '6.4', type: 'situational',
    source: 'BABOK Guide, 10.15 Data Modelling',
    stem: 'A team needs a shared, unambiguous description of the entities in a domain, their attributes, and the relationships among them, to be used by both analysts and developers. Which technique produces this?',
    options: [
      { id: 'A', text: 'Process Modelling' },
      { id: 'B', text: 'Data Modelling' },
      { id: 'C', text: 'Scope Modelling' },
      { id: 'D', text: 'Organizational Modelling' }
    ],
    answer: 'B',
    explanation: 'Un data model descrive entità, classi o oggetti dati rilevanti per un dominio, gli attributi che li descrivono e le relazioni fra loro, fornendo un insieme comune di semantiche per analisi e implementazione. È proprio la "semantica condivisa" a distinguerlo dagli altri modelli.'
  },
  {
    id: 'D6-09', style: 'knowledge', domain: 6, activity: '6.2', type: 'standard',
    source: 'BABOK Guide, 7.5 Define Design Options',
    stem: 'What does the Define Design Options task include?',
    options: [
      { id: 'A', text: 'Defining the solution approach, identifying opportunities to improve the business, and allocating requirements across solution components.' },
      { id: 'B', text: 'Ranking requirements in order of relative importance.' },
      { id: 'C', text: 'Determining the factors internal to the solution that restrict value realization.' },
      { id: 'D', text: 'Compiling successes and opportunities for improvement at the end of a phase.' }
    ],
    answer: 'A',
    explanation: 'Define Design Options (7.5) definisce l\'approccio alla soluzione, individua opportunità di miglioramento del business, alloca i requisiti sui componenti della soluzione e rappresenta le opzioni di design che realizzano il future state desiderato.'
  },
  {
    id: 'D6-10', style: 'knowledge', domain: 6, activity: '6.1', type: 'standard',
    source: 'BABOK Guide, 8.3 Assess Solution Limitations',
    stem: 'When a solution consistently produces ineffective outputs, what does Assess Solution Limitations involve?',
    options: [
      { id: 'A', text: 'Replacing the solution with an alternative design option.' },
      { id: 'B', text: 'Identifying internal component dependencies and investigating solution problems to find the source.' },
      { id: 'C', text: 'Assessing the enterprise culture that surrounds the solution.' },
      { id: 'D', text: 'Re-running the elicitation activities that produced the requirements.' }
    ],
    answer: 'B',
    explanation: 'Le soluzioni hanno spesso dipendenze interne che limitano la prestazione dell\'insieme a quella del componente meno efficace; quando gli output sono ripetutamente inefficaci si conduce problem analysis per identificare la fonte del problema. La valutazione della cultura aziendale ({C}) appartiene ad Assess Enterprise Limitations (8.4), che guarda ai fattori esterni alla soluzione.'
  },

  /* ============================================================
     DOMINIO 7 — Stakeholder (10% · 5 domande)
     ============================================================ */

  {
    id: 'D7-01', style: 'knowledge', domain: 7, activity: '7.1', type: 'standard',
    source: 'BABOK Guide, 4.4 Communicate Business Analysis Information',
    stem: 'What is the purpose of Communicate Business Analysis Information?',
    options: [
      { id: 'A', text: 'To ensure stakeholders have a shared understanding of business analysis information.' },
      { id: 'B', text: 'To obtain formal approval of requirements from the sponsor.' },
      { id: 'C', text: 'To store business analysis information so that it can be retrieved later.' },
      { id: 'D', text: 'To encourage stakeholders to work towards a common goal.' }
    ],
    answer: 'A',
    explanation: 'L\'obiettivo è la comprensione condivisa. {D} è Manage Stakeholder Collaboration (4.5), {C} è Plan Business Analysis Information Management (3.4), {B} è Approve Requirements (5.5). Comunicare non è "spingere fuori" informazione: il professionista coinvolge gli stakeholder per assicurarsi che abbiano capito e per ottenere accordo.'
  },
  {
    id: 'D7-02', style: 'applied', domain: 7, activity: '7.1', type: 'situational',
    source: 'BABOK Guide, 4.4 Communicate Business Analysis Information',
    stem: 'A business analysis professional sends the same detailed requirements package to executives, developers, and end users. Several recipients say it is not useful to them. What does the BABOK Guide indicate?',
    options: [
      { id: 'A', text: 'Recipients are responsible for extracting the parts relevant to them from a single authoritative document.' },
      { id: 'B', text: 'Information should be expressed in language, tone, and style appropriate to the audience, and multiple forms of communication might be required for the same information.' },
      { id: 'C', text: 'Communication should be limited to formal written documents to preserve traceability.' },
      { id: 'D', text: 'The package should be re-sent with a request for written confirmation of receipt.' }
    ],
    answer: 'B',
    explanation: 'La comunicazione va calibrata su destinatari, contenuto, scopo, contesto e outcome attesi, con linguaggio, tono e stile adatti al pubblico; se gli stakeholder non ricevono o non comprendono, il metodo di consegna va cambiato, e più forme di comunicazione possono servire per la stessa informazione. La conferma di ricezione ({D}) non risolve il problema di comprensione.'
  },
  {
    id: 'D7-03', style: 'knowledge', domain: 7, activity: '7.2', type: 'standard',
    source: 'BABOK Guide, 2.4.9 Sponsor e 2.4.7 Project Manager',
    stem: 'Which stakeholder role is responsible for initiating the effort to define a business need, authorizing the work, and controlling the budget and scope of the initiative?',
    options: [
      { id: 'A', text: 'Project manager' },
      { id: 'B', text: 'Domain subject matter expert' },
      { id: 'C', text: 'Sponsor' },
      { id: 'D', text: 'Regulator' }
    ],
    answer: 'C',
    explanation: 'Lo sponsor avvia lo sforzo, autorizza il lavoro e controlla budget e scope. Il project manager gestisce il lavoro necessario a consegnare la soluzione bilanciando scope, budget, schedule, risorse, qualità e rischio. Il regulator definisce e fa rispettare standard. I ruoli generici della sezione 2.4 sono materiale d\'esame ricorrente.'
  },
  {
    id: 'D7-04', style: 'applied', domain: 7, activity: '7.2', type: 'situational',
    source: 'BABOK Guide, 2.4.3 Domain SME e 2.4.5 Implementation SME',
    stem: 'A business analysis professional needs someone with in-depth knowledge of how insurance claims are assessed in order to understand the business need. Which stakeholder role should be consulted?',
    options: [
      { id: 'A', text: 'Implementation subject matter expert' },
      { id: 'B', text: 'Domain subject matter expert' },
      { id: 'C', text: 'Operational support' },
      { id: 'D', text: 'Tester' }
    ],
    answer: 'B',
    explanation: 'Il domain SME ha conoscenza approfondita di un tema rilevante per il business need o per il solution scope. L\'implementation SME ha invece conoscenza specialistica sull\'implementazione di uno o più componenti della soluzione (sviluppatore, architetto, DBA, trainer). Operational support gestisce il funzionamento quotidiano del sistema una volta in esercizio.'
  },
  {
    id: 'D7-05', style: 'knowledge', domain: 7, activity: '7.2', type: 'standard',
    source: 'BABOK Guide, 3.2 Plan Stakeholder Engagement',
    stem: 'Why is a thorough stakeholder analysis important?',
    options: [
      { id: 'A', text: 'Because stakeholders not identified early cannot be added to the initiative later.' },
      { id: 'B', text: 'Because stakeholder needs uncovered late often require revising business analysis tasks in progress or completed, increasing costs and decreasing satisfaction.' },
      { id: 'C', text: 'Because the number of stakeholders determines the business analysis approach.' },
      { id: 'D', text: 'Because only identified stakeholders may attend elicitation activities.' }
    ],
    answer: 'B',
    explanation: 'Se gli stakeholder non sono identificati si rischia di non scoprire bisogni critici; quelli scoperti tardi costringono a rivedere attività in corso o già concluse, con aumento dei costi e calo della soddisfazione. Nuovi stakeholder possono comunque emergere in qualsiasi momento dell\'iniziativa, quindi {A} è falsa.'
  },
  {
    id: 'D7-06', style: 'knowledge', domain: 7, activity: '7.3', type: 'standard',
    source: 'BABOK Guide, 4.5 Manage Stakeholder Collaboration',
    stem: 'Which statement about managing stakeholder collaboration is correct?',
    options: [
      { id: 'A', text: 'It is a one-time activity completed once stakeholders have been identified and analysed.' },
      { id: 'B', text: 'It is an ongoing activity: each stakeholder\'s role, responsibility, influence, attitude, and authority may change over time.' },
      { id: 'C', text: 'It applies only to stakeholders who have approval authority over work products.' },
      { id: 'D', text: 'It is delegated to the project manager once the requirements are approved.' }
    ],
    answer: 'B',
    explanation: 'Gestire la collaborazione è un\'attività continua: nuovi stakeholder possono comparire in qualsiasi momento e ruolo, responsabilità, influenza, atteggiamento e autorità di ciascuno possono cambiare nel tempo. Più il cambiamento è impattante o visibile, più attenzione richiede.'
  },
  {
    id: 'D7-07', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 10.50 Workshops e 10.10 Collaborative Games',
    stem: 'A business analysis professional wants participants in an elicitation session to build a joint understanding of a problem through structured, playful activities rather than direct questioning. Which technique fits?',
    options: [
      { id: 'A', text: 'Collaborative Games' },
      { id: 'B', text: 'Interviews' },
      { id: 'C', text: 'Document Analysis' },
      { id: 'D', text: 'Survey or Questionnaire' }
    ],
    answer: 'A',
    explanation: 'I Collaborative Games (10.10) incoraggiano i partecipanti a un\'attività di elicitation a collaborare nella costruzione di una comprensione condivisa di un problema o di una soluzione. I Workshops (10.50) riuniscono gli stakeholder per collaborare al raggiungimento di un obiettivo predefinito: sono spesso il contenitore in cui i giochi collaborativi si svolgono.'
  },
  {
    id: 'D7-08', style: 'knowledge', domain: 7, activity: '7.4', type: 'standard',
    source: 'BABOK Guide, 3.2 Plan Stakeholder Engagement',
    stem: 'Why do business analysts identify stakeholder attitudes?',
    options: [
      { id: 'A', text: 'To decide which stakeholders can be excluded from the initiative.' },
      { id: 'B', text: 'To understand what may impact a stakeholder\'s actions and behaviours, and to plan collaboration and engagement accordingly.' },
      { id: 'C', text: 'To assign formal approval authority proportionally to support for the change.' },
      { id: 'D', text: 'To report uncooperative stakeholders to the sponsor.' }
    ],
    answer: 'B',
    explanation: 'Gli atteggiamenti possono impattare positivamente o negativamente un cambiamento: conoscere come uno stakeholder percepisce l\'iniziativa consente di pianificare in modo specifico collaborazione ed engagement con lui. Il fine è capitalizzare le reazioni positive e mitigare o evitare quelle negative, non escludere o segnalare.'
  },
  {
    id: 'D7-09', style: 'knowledge', domain: 7, activity: '7.4', type: 'standard',
    source: 'BABOK Guide, 10.43 Stakeholder List, Map, or Personas',
    stem: 'What is the purpose of the Stakeholder List, Map, or Personas technique?',
    options: [
      { id: 'A', text: 'To assign tasks to stakeholders and track their completion.' },
      { id: 'B', text: 'To analyse stakeholders and their characteristics, ensuring all possible sources of requirements are identified and the stakeholder is fully understood.' },
      { id: 'C', text: 'To model the reporting structures that exist within an organization.' },
      { id: 'D', text: 'To record how stakeholders voted on each prioritization decision.' }
    ],
    answer: 'B',
    explanation: 'La tecnica supporta l\'analisi degli stakeholder e delle loro caratteristiche, così da identificare tutte le possibili fonti di requisiti e da comprendere a fondo lo stakeholder, rendendo solide le decisioni sull\'engagement. {C} descrive Organizational Modelling (10.32), che ha un focus diverso: ruoli, responsabilità e strutture di riporto.'
  },
  {
    id: 'D7-10', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 4.5 Manage Stakeholder Collaboration',
    stem: 'A key stakeholder has become disengaged and stopped attending sessions. According to the BABOK Guide, why does this matter to business analysis work?',
    options: [
      { id: 'A', text: 'It does not matter as long as the requirements have already been documented.' },
      { id: 'B', text: 'Poor relationships with stakeholders have detrimental effects on business analysis, including failure to provide quality information.' },
      { id: 'C', text: 'It only matters if that stakeholder holds formal approval authority.' },
      { id: 'D', text: 'It matters only for adaptive approaches, where feedback is continuous.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK elenca esplicitamente gli effetti negativi di relazioni deboli con gli stakeholder, a partire dalla mancata fornitura di informazioni di qualità. Gli stakeholder sono una fonte primaria di need, vincoli e assunzioni, indipendentemente dall\'autorità formale ({C}) e dall\'approccio adottato ({D}).'
  },

  /* ============================================================
     DOMINIO 8 — Value (10% · 5 domande)
     ============================================================ */

  {
    id: 'D8-01', style: 'knowledge', domain: 8, activity: '8.1', type: 'standard',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'How does the BABOK Guide distinguish goals from objectives?',
    options: [
      { id: 'A', text: 'Goals are set by executives and objectives by delivery teams.' },
      { id: 'B', text: 'Goals are longer term, ongoing, and qualitative statements of a state the organization seeks to establish and maintain; objectives are more descriptive, granular, and specific.' },
      { id: 'C', text: 'Goals apply to predictive approaches and objectives to adaptive approaches.' },
      { id: 'D', text: 'Goals are measurable and objectives are aspirational.' }
    ],
    answer: 'B',
    explanation: 'I goal sono di lungo termine, continuativi e qualitativi; man mano che vengono analizzati sono convertiti in obiettivi più descrittivi, granulari e specifici. Attenzione a {D}: è l\'inverso della definizione corretta, un tipo di distrattore che l\'esame usa spesso.'
  },
  {
    id: 'D8-02', style: 'applied', domain: 8, activity: '8.1', type: 'situational',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'Which of the following is expressed as a business objective rather than as a goal?',
    options: [
      { id: 'A', text: 'Increase customer satisfaction.' },
      { id: 'B', text: 'Improve safety across the organization.' },
      { id: 'C', text: 'Increase the number of high-revenue customers in the 30–45 age bracket by 30% within 6 months.' },
      { id: 'D', text: 'Comply with new regulations.' }
    ],
    answer: 'C',
    explanation: 'Solo {C} è granulare, specifico e misurabile nel tempo: è la forma che assume un goal una volta scomposto in obiettivi. Gli altri tre sono esempi di business goal citati dal BABOK — qualitativi e continuativi.'
  },
  {
    id: 'D8-03', style: 'knowledge', domain: 8, activity: '8.2', type: 'standard',
    source: 'BABOK Guide, 8.3 e 8.4',
    stem: 'What distinguishes Assess Solution Limitations from Assess Enterprise Limitations?',
    options: [
      { id: 'A', text: 'The first concerns factors internal to the solution, the second factors external to the solution.' },
      { id: 'B', text: 'The first is performed before implementation, the second after.' },
      { id: 'C', text: 'The first concerns functional requirements, the second non-functional requirements.' },
      { id: 'D', text: 'The first is performed by the business analyst, the second by the sponsor.' }
    ],
    answer: 'A',
    explanation: 'Assess Solution Limitations (8.3) determina i fattori interni alla soluzione che ne limitano la piena realizzazione del valore; Assess Enterprise Limitations (8.4) determina come i fattori esterni alla soluzione — cultura aziendale, struttura, policy — ne limitano la realizzazione. La linea di separazione è dentro/fuori la soluzione, non il momento o il tipo di requisito.'
  },
  {
    id: 'D8-04', style: 'applied', domain: 8, activity: '8.2', type: 'situational',
    source: 'BABOK Guide, 8.4 Assess Enterprise Limitations',
    stem: 'A new system works exactly as specified, but staff continue to use the old spreadsheets because they do not understand why the system was introduced. How is this barrier best classified?',
    options: [
      { id: 'A', text: 'A solution limitation, since the system has failed to replace the previous way of working.' },
      { id: 'B', text: 'An enterprise limitation, identified through an enterprise culture assessment.' },
      { id: 'C', text: 'A defect to be logged against the solution requirements.' },
      { id: 'D', text: 'A traceability gap between requirements and solution components.' }
    ],
    answer: 'B',
    explanation: 'La cultura aziendale — credenze, valori e norme condivise, spesso non direttamente visibili ma capaci di guidare le azioni — è valutata in Assess Enterprise Limitations, e uno degli scopi dichiarati dell\'assessment culturale è capire se gli stakeholder comprendono le ragioni per cui la soluzione esiste. La soluzione funziona come specificato, quindi il limite non è interno ad essa.'
  },
  {
    id: 'D8-05', style: 'knowledge', domain: 8, activity: '8.3', type: 'standard',
    source: 'BABOK Guide, 8.2 Analyze Performance Measures',
    stem: 'What is the purpose of Analyze Performance Measures?',
    options: [
      { id: 'A', text: 'To define which performance measures will be collected.' },
      { id: 'B', text: 'To provide insights into the performance of a solution in relation to the value it brings.' },
      { id: 'C', text: 'To recommend actions that increase the value of the solution.' },
      { id: 'D', text: 'To assess the factors external to the solution that limit value.' }
    ],
    answer: 'B',
    explanation: 'Il task 8.2 trasforma i dati raccolti in insight sulla prestazione della soluzione rispetto al valore che porta. {A} è Measure Solution Performance (8.1): prima si definisce e si misura, poi si analizza; {C} è Recommend Actions (8.5). La sequenza dei cinque task di Solution Evaluation è essa stessa materia d\'esame.'
  },
  {
    id: 'D8-06', style: 'knowledge', domain: 8, activity: '8.4', type: 'standard',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'Which of the following is one of the six characteristics of a good indicator?',
    options: [
      { id: 'A', text: 'Confidential: accessible only to the stakeholders who commissioned it.' },
      { id: 'B', text: 'Economical: available at reasonable cost.' },
      { id: 'C', text: 'Permanent: never revised once established.' },
      { id: 'D', text: 'Automated: collected without human intervention.' }
    ],
    answer: 'B',
    explanation: 'Le sei caratteristiche sono: clear, relevant, economical, adequate, quantifiable, trustworthy and credible. Gli indicatori non sono permanenti: nel tempo le debolezze di alcuni possono essere individuate e corrette.'
  },
  {
    id: 'D8-07', style: 'applied', domain: 8, activity: '8.4', type: 'situational',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'The organization wants to track client satisfaction but has no survey in place and cannot run one at regular intervals. It decides to track the proportion of contracts renewed instead. What is this an example of?',
    options: [
      { id: 'A', text: 'A qualitative measure replacing a quantitative one.' },
      { id: 'B', text: 'A proxy, used when data for direct indicators are not available or not feasible to collect regularly.' },
      { id: 'C', text: 'A baseline metric established from the current state.' },
      { id: 'D', text: 'A non-functional requirement expressed as a metric.' }
    ],
    answer: 'B',
    explanation: 'È esattamente l\'esempio di proxy riportato dal BABOK: non tutti i fattori sono misurabili direttamente, e in assenza di un\'indagine sulla soddisfazione un\'organizzazione può usare la quota di contratti rinnovati come indicatore.'
  },
  {
    id: 'D8-08', style: 'knowledge', domain: 8, activity: '8.3', type: 'standard',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'What do metrics and key performance indicators measure?',
    options: [
      { id: 'A', text: 'The productivity of individual team members.' },
      { id: 'B', text: 'The performance of solutions, solution components, and other matters of interest to stakeholders.' },
      { id: 'C', text: 'The accuracy of the requirements documentation.' },
      { id: 'D', text: 'The percentage of the project budget consumed to date.' }
    ],
    answer: 'B',
    explanation: 'Metriche e KPI misurano la prestazione di soluzioni, componenti di soluzione e altre questioni di interesse per gli stakeholder. Non sono strumenti di valutazione delle persone né di controllo del budget di progetto.'
  },
  {
    id: 'D8-09', style: 'applied', domain: 8, activity: '8.1', type: 'situational',
    source: 'BABOK Guide, 8.1 Measure Solution Performance',
    stem: 'Before defining new performance measures for a solution, what should a business analysis professional do first?',
    options: [
      { id: 'A', text: 'Determine whether current measures already exist or whether methods for capturing them are in place.' },
      { id: 'B', text: 'Ask the sponsor to approve a measurement budget.' },
      { id: 'C', text: 'Wait until the solution has been in production for a full year.' },
      { id: 'D', text: 'Define the measures independently, to avoid bias from existing ones.' }
    ],
    answer: 'A',
    explanation: 'Il BABOK indica di verificare se esistono già misure o metodi di raccolta, assicurarsi che quelle esistenti siano accurate e rilevanti, ed elicitare eventuali misure aggiuntive dagli stakeholder. Goal, obiettivi e processi di business sono fonti comuni di misure, che possono anche essere imposte da terzi come fornitori o enti regolatori.'
  },
  {
    id: 'D8-10', style: 'knowledge', domain: 8, activity: '8.2', type: 'standard',
    source: 'BABOK Guide, 10.6 Business Capability Analysis',
    stem: 'What does Business Capability Analysis provide?',
    options: [
      { id: 'A', text: 'A framework for scoping and planning by generating a shared understanding of outcomes, identifying alignment with strategy, and providing a scope and prioritization filter.' },
      { id: 'B', text: 'A record of the rules that guide operational business decision making.' },
      { id: 'C', text: 'A graphical representation of how work is carried out.' },
      { id: 'D', text: 'A structured way of eliciting information by talking to stakeholders.' }
    ],
    answer: 'A',
    explanation: 'La Business Capability Analysis (10.6) è un framework per scoping e pianificazione: genera comprensione condivisa degli outcome, verifica l\'allineamento con la strategia e funge da filtro di scope e prioritizzazione. {B} è Business Rules Analysis (10.9), {C} Process Modelling (10.35), {D} Interviews (10.25).'
  },

  /* ============================================================
     DOMINIO 9 — Context (10% · 5 domande)
     ============================================================ */

  {
    id: 'D9-01', style: 'knowledge', domain: 9, activity: '9.1', type: 'standard',
    source: 'BABOK Guide, 4.3 Confirm Elicitation Results',
    stem: 'Against what are elicitation results compared when they are confirmed?',
    options: [
      { id: 'A', text: 'Against the project schedule and budget.' },
      { id: 'B', text: 'Against their source and other elicitation results, to ensure consistency.' },
      { id: 'C', text: 'Against the acceptance criteria defined for solution testing.' },
      { id: 'D', text: 'Against the organization\'s methodology repository.' }
    ],
    answer: 'B',
    explanation: 'I risultati si confrontano con la loro fonte e con altri risultati di elicitation per garantire coerenza; se le informazioni non sono corrette il professionista determina cosa è corretto, il che può richiedere ulteriore elicitation, e se sono incoerenti può servire altra elicitation per risolvere le discrepanze.'
  },
  {
    id: 'D9-02', style: 'applied', domain: 9, activity: '9.1', type: 'situational',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'A reviewer finds a requirement stating that "the report must load quickly". Which quality characteristic does this requirement fail?',
    options: [
      { id: 'A', text: 'Atomic' },
      { id: 'B', text: 'Prioritized' },
      { id: 'C', text: 'Unambiguous' },
      { id: 'D', text: 'Concise' }
    ],
    answer: 'C',
    explanation: '"Quickly" non permette di stabilire chiaramente se una soluzione soddisfa o meno il bisogno associato: il requisito non è unambiguous, e di conseguenza nemmeno testable. Atomic riguarda l\'autosufficienza del requisito, concise l\'assenza di contenuto superfluo: entrambe sono rispettate qui.'
  },
  {
    id: 'D9-03', style: 'knowledge', domain: 9, activity: '9.2', type: 'standard',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Which prioritization factor refers to relationships where one requirement cannot be fulfilled unless another is fulfilled first?',
    options: [
      { id: 'A', text: 'Time sensitivity' },
      { id: 'B', text: 'Dependencies' },
      { id: 'C', text: 'Stability' },
      { id: 'D', text: 'Penalty' }
    ],
    answer: 'B',
    explanation: 'Le dependencies sono relazioni per cui un requisito non può essere soddisfatto se non lo è un altro; possono anche essere esterne all\'iniziativa — decisioni di altri team, impegni di finanziamento, disponibilità di risorse — e sono identificate nel task Trace Requirements. Time sensitivity è invece la "data di scadenza" del valore del requisito.'
  },
  {
    id: 'D9-04', style: 'applied', domain: 9, activity: '9.2', type: 'situational',
    source: 'BABOK Guide, 6.1 Analyze Current State e 6.4 Define Change Strategy',
    stem: 'Midway through an initiative, a new regulation restricts how customer data may be stored, making the chosen approach unworkable. What is the appropriate response?',
    options: [
      { id: 'A', text: 'Continue with the approved approach, since the change strategy was already agreed.' },
      { id: 'B', text: 'Recognize the constraint and re-examine the change strategy and solution scope so that they remain aligned with the future state.' },
      { id: 'C', text: 'Escalate the regulation to the regulator for an exemption.' },
      { id: 'D', text: 'Remove the affected requirements without further analysis.' }
    ],
    answer: 'B',
    explanation: 'I vincoli, comprese le policy e i regolamenti, fanno parte del current state e influenzano la change strategy; il solution scope può evolvere durante l\'iniziativa man mano che emergono informazioni. L\'activity statement 9.2 dell\'ECBA chiede proprio di riconoscere i vincoli e adattare i piani per mantenere l\'allineamento.'
  },
  {
    id: 'D9-05', style: 'knowledge', domain: 9, activity: '9.3', type: 'standard',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'Which of the following is examined as part of the current state of an enterprise?',
    options: [
      { id: 'A', text: 'Only the software systems currently in production.' },
      { id: 'B', text: 'Technology and infrastructure, alongside organizational structure, culture, capabilities, policies, and external influencers.' },
      { id: 'C', text: 'Only the requirements approved in previous initiatives.' },
      { id: 'D', text: 'Only the financial performance of the last reporting period.' }
    ],
    answer: 'B',
    explanation: 'Il current state comprende molte componenti — struttura e cultura organizzativa, capability, tecnologia e infrastruttura, policy, architettura di business e influencer interni ed esterni — perché il cambiamento va compreso nel suo contesto completo. Le opzioni che iniziano con "only" restringono indebitamente il campo.'
  },
  {
    id: 'D9-06', style: 'applied', domain: 9, activity: '9.3', type: 'situational',
    source: 'BABOK Guide, 4.2 Conduct Elicitation',
    stem: 'A team wants to know whether a new interface concept will work, but no stakeholder or document can answer the question because nothing comparable exists. Which type of elicitation is appropriate?',
    options: [
      { id: 'A', text: 'Collaborative, through additional workshops with stakeholders.' },
      { id: 'B', text: 'Research, through analysis of historical data.' },
      { id: 'C', text: 'Experiments, such as observational studies, proofs of concept, or prototypes.' },
      { id: 'D', text: 'None: the question must be deferred until after implementation.' }
    ],
    answer: 'C',
    explanation: 'Gli experiments servono a identificare informazioni che non potrebbero essere conosciute senza una qualche forma di test controllato: alcune informazioni non si possono trarre da persone o documenti perché semplicemente non sono note. Includono studi osservazionali, proof of concept e prototipi.'
  },
  {
    id: 'D9-07', style: 'knowledge', domain: 9, activity: '9.4', type: 'standard',
    source: 'BABOK Guide, 2.4.8 Regulator',
    stem: 'What is the role of a regulator as a stakeholder?',
    options: [
      { id: 'A', text: 'To authorize the budget and scope of the initiative.' },
      { id: 'B', text: 'To define and enforce standards, which can be imposed on the solution through legislation, corporate governance standards, or audit standards.' },
      { id: 'C', text: 'To manage the day-to-day operation of the solution once implemented.' },
      { id: 'D', text: 'To provide in-depth knowledge of the business domain.' }
    ],
    answer: 'B',
    explanation: 'Il regulator definisce e fa rispettare gli standard, che possono essere imposti alla soluzione tramite legislazione, standard di corporate governance, standard di audit o standard definiti da centri di competenza organizzativi. Ruoli alternativi: governo, enti regolatori, auditor.'
  },
  {
    id: 'D9-08', style: 'knowledge', domain: 9, activity: '9.4', type: 'standard',
    source: 'BABOK Guide, 10.9 Business Rules Analysis',
    stem: 'What is the purpose of Business Rules Analysis?',
    options: [
      { id: 'A', text: 'To identify, express, validate, refine, and organize the rules that shape day-to-day business behaviour and guide operational business decision making.' },
      { id: 'B', text: 'To define the entities and relationships relevant to a domain.' },
      { id: 'C', text: 'To evaluate an organization\'s strengths, weaknesses, opportunities, and threats.' },
      { id: 'D', text: 'To track and prioritize the remaining work items of an initiative.' }
    ],
    answer: 'A',
    explanation: 'Business Rules Analysis (10.9) riguarda le regole che governano il comportamento operativo quotidiano e le decisioni di business. {B} è Data Modelling (10.15), {C} SWOT Analysis (10.46), {D} Backlog Management (10.2).'
  },
  {
    id: 'D9-09', style: 'applied', domain: 9, activity: '9.4', type: 'situational',
    source: 'BABOK Guide, 10.46 SWOT Analysis',
    stem: 'An organization wants a simple assessment of its internal strengths and weaknesses alongside the external opportunities and threats it faces. Which technique applies?',
    options: [
      { id: 'A', text: 'Root Cause Analysis' },
      { id: 'B', text: 'SWOT Analysis' },
      { id: 'C', text: 'Business Capability Analysis' },
      { id: 'D', text: 'Scope Modelling' }
    ],
    answer: 'B',
    explanation: 'La SWOT Analysis (10.46) è uno strumento semplice ma efficace per valutare forze, debolezze, opportunità e minacce di un\'organizzazione rispetto a condizioni sia interne sia esterne. La chiave per riconoscerla è la coppia interno/esterno.'
  },
  {
    id: 'D9-10', style: 'knowledge', domain: 9, activity: '9.1', type: 'standard',
    source: 'BABOK Guide, 10.40 Root Cause Analysis',
    stem: 'What is Root Cause Analysis used for?',
    options: [
      { id: 'A', text: 'To identify and evaluate the underlying causes of a problem.' },
      { id: 'B', text: 'To produce numerous new ideas about a problem and derive themes for further analysis.' },
      { id: 'C', text: 'To compile successes and recommendations at the end of a project phase.' },
      { id: 'D', text: 'To measure the effectiveness of a solution after implementation.' }
    ],
    answer: 'A',
    explanation: 'Root Cause Analysis (10.40) identifica e valuta le cause sottostanti di un problema. {B} è Brainstorming (10.5), il cui scopo è generare molte idee e ricavarne temi per l\'analisi successiva; {C} è Lessons Learned (10.27). Non confondere il generare idee con l\'individuare cause.'
  }
,
  /* ---- Dominio 1, serie B ---- */

  {
    id: 'D1-23', style: 'knowledge', domain: 1, activity: '1.1', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Which critical function of business analysis is described as "breaking down silos, fostering collaboration and alignment across diverse perspectives and interests"?',
    options: [
      { id: 'A', text: 'Leadership support' },
      { id: 'B', text: 'Stakeholder collaboration' },
      { id: 'C', text: 'Value delivery' },
      { id: 'D', text: 'Needs prioritization' }
    ],
    answer: 'B',
    explanation: 'Le organizzazioni sono ecosistemi di stakeholder interconnessi e la business analysis abbatte i silos favorendo collaborazione e allineamento. Leadership support riguarda invece l\'aiutare i leader ad articolare scopo, obiettivi e aspettative.'
  },
  {
    id: 'D1-24', style: 'applied', domain: 1, activity: '1.1', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'A team is about to build a fix for repeated customer complaints about late deliveries. The business analysis professional insists on first understanding why deliveries are late. Which critical function is being exercised, and why does it matter?',
    options: [
      { id: 'A', text: 'Risk management, because late deliveries expose the company to penalties.' },
      { id: 'B', text: 'Problem understanding, because addressing the underlying causes rather than the symptoms produces targeted solutions and long-term improvement.' },
      { id: 'C', text: 'Agility, because the team must respond quickly to customer feedback.' },
      { id: 'D', text: 'Performance enhancement, because delivery times are a performance measure.' }
    ],
    answer: 'B',
    explanation: 'Problem understanding significa andare oltre i sintomi per districare le complessità e identificare le fonti dell\'attrito, così da costruire soluzioni mirate ed efficaci che assicurino un miglioramento duraturo. Le altre funzioni sono reali ma non descrivono ciò che sta accadendo qui.'
  },
  {
    id: 'D1-25', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'How does the BACCM define a "Need"?',
    options: [
      { id: 'A', text: 'A documented request submitted by a stakeholder.' },
      { id: 'B', text: 'A problem or opportunity to be addressed.' },
      { id: 'C', text: 'A gap between the current state and the future state.' },
      { id: 'D', text: 'A usable representation of a requirement.' }
    ],
    answer: 'B',
    explanation: 'Need = "a problem or opportunity to be addressed": la definizione include esplicitamente le opportunità, non solo i problemi. {D} inverte la relazione reale, perché è il requisito a essere una rappresentazione utilizzabile di un need.'
  },
  {
    id: 'D1-26', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A company introduces a new CRM. Six months later, the sales team reports that the reports they used to rely on are no longer available, and asks for them back. Which BACCM relationship does this illustrate?',
    options: [
      { id: 'A', text: 'A change causing a need, by altering the value delivered by existing solutions.' },
      { id: 'B', text: 'A need causing a change, by motivating stakeholders to act.' },
      { id: 'C', text: 'A solution causing a context, by redefining the environment.' },
      { id: 'D', text: 'A stakeholder causing a value, by expressing a preference.' }
    ],
    answer: 'A',
    explanation: 'Il cambiamento (il nuovo CRM) ha ridotto il valore erogato dalle soluzioni esistenti e ha così generato un nuovo need. È la direzione meno intuitiva della relazione Need↔Change e per questo la più testata: non solo i need causano cambiamenti, ma anche i cambiamenti causano need.'
  },
  {
    id: 'D1-27', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A solution can include a combination of components. Which of the following would NOT normally be considered part of a solution?',
    options: [
      { id: 'A', text: 'Manual procedures and process changes' },
      { id: 'B', text: 'Business model updates and improved organizational capabilities' },
      { id: 'C', text: 'Technology-based initiatives' },
      { id: 'D', text: 'The project budget approved by the sponsor' }
    ],
    answer: 'D',
    explanation: 'Lo Standard elenca come componenti di una soluzione le iniziative tecnologiche, le procedure manuali, i cambi di processo, gli aggiornamenti del modello di business e il miglioramento delle capability organizzative. Il budget è un vincolo del contesto, non un componente della soluzione.'
  },
  {
    id: 'D1-28', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.3',
    stem: 'A business analysis professional wants to check whether the analysis performed so far is complete before moving to design. Which use of the BACCM supports this?',
    options: [
      { id: 'A', text: 'Using it to assign responsibilities across the delivery team.' },
      { id: 'B', text: 'Using it to consider the quality and completeness of the work being done.' },
      { id: 'C', text: 'Using it to estimate the effort remaining in the initiative.' },
      { id: 'D', text: 'Using it to select the delivery methodology.' }
    ],
    answer: 'B',
    explanation: 'Tra gli usi dichiarati del BACCM c\'è considerare la qualità e la completezza del lavoro svolto: se uno dei sei concetti è rimasto inesplorato, l\'analisi ha un buco. Il modello non serve invece a stimare, assegnare responsabilità o scegliere metodologie.'
  },
  {
    id: 'D1-29', style: 'knowledge', domain: 1, activity: '1.3', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Which critical function describes business analysis as "the compass" that guides enterprises in allocating resources for maximum impact?',
    options: [
      { id: 'A', text: 'Needs prioritization' },
      { id: 'B', text: 'Value-centric solutions' },
      { id: 'C', text: 'Problem understanding' },
      { id: 'D', text: 'Risk management' }
    ],
    answer: 'A',
    explanation: 'La needs prioritization è descritta come la bussola che guida le imprese in un mare di requisiti: comprendendo l\'importanza relativa dei diversi bisogni si allocano le risorse in modo efficiente per il massimo impatto.'
  },
  {
    id: 'D1-30', style: 'applied', domain: 1, activity: '1.3', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'A leadership team struggles to explain to staff why a transformation is happening. The business analysis professional helps articulate the purpose and the goals. Which critical function is this?',
    options: [
      { id: 'A', text: 'Stakeholder collaboration' },
      { id: 'B', text: 'Value delivery' },
      { id: 'C', text: 'Leadership support' },
      { id: 'D', text: 'Agility' }
    ],
    answer: 'C',
    explanation: 'Leadership support: direzione e visione chiare sono fondamentali per motivare i team, e la business analysis mette i leader in condizione di articolare lo scopo, fissare obiettivi e comunicare le aspettative, dando ai team una visione comune verso cui lavorare.'
  },
  {
    id: 'D1-31', style: 'knowledge', domain: 1, activity: '1.3', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'How does business analysis contribute to risk management, according to the Standard?',
    options: [
      { id: 'A', text: 'By eliminating the risks associated with a change before it begins.' },
      { id: 'B', text: 'By proactively identifying and assessing risks and taking appropriate action, integrating risk management into decision-making.' },
      { id: 'C', text: 'By transferring risk ownership to the project management office.' },
      { id: 'D', text: 'By avoiding changes whose risk cannot be quantified.' }
    ],
    answer: 'B',
    explanation: 'Il cambiamento porta intrinsecamente rischi: la business analysis li identifica, valuta e affronta in modo proattivo, integrando la gestione del rischio nei processi decisionali e promuovendo resilienza e sostenibilità nel lungo periodo. Nessuno elimina i rischi ({A}) né si evitano i cambiamenti rischiosi per principio ({D}).'
  },
  {
    id: 'D1-32', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'At which organizational levels is business analysis described as critical?',
    options: [
      { id: 'A', text: 'At the operational level only, where processes are executed.' },
      { id: 'B', text: 'At the strategic level only, where decisions position the organization for the future.' },
      { id: 'C', text: 'At the strategic, tactical, and operational levels.' },
      { id: 'D', text: 'At the project level only, for the duration of an initiative.' }
    ],
    answer: 'C',
    explanation: 'La business analysis è critica per tutto il lavoro organizzativo, ai livelli strategico, tattico e operativo. {A} livello strategico il valore è guidato da decisioni solide; l\'esecuzione tattica e l\'eccellenza operativa creano valore lungo il percorso verso gli outcome desiderati.'
  },
  {
    id: 'D1-33', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A cost-saving initiative will reduce annual spending by €200,000 and, according to the team, will also improve the company\'s reputation with regulators. How should these two outcomes be characterized?',
    options: [
      { id: 'A', text: 'Both are tangible, because both were quantified in the business case.' },
      { id: 'B', text: 'The saving is tangible; the reputation improvement is intangible, measured indirectly.' },
      { id: 'C', text: 'Both are intangible, because future outcomes cannot be measured.' },
      { id: 'D', text: 'The saving is value realized; the reputation improvement is not value at all.' }
    ],
    answer: 'B',
    explanation: 'Il valore tangibile è direttamente misurabile e ha spesso una componente monetaria significativa; quello intangibile si misura indirettamente e ha spesso una forte componente motivazionale, e la reputazione aziendale è proprio l\'esempio citato dallo Standard. Entrambi sono valore a pieno titolo, quindi {D} è errata.'
  },
  {
    id: 'D1-34', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'Which activity is listed as part of effective business analysis in creating value?',
    options: [
      { id: 'A', text: 'Helping teams assess trade-offs and prioritize value creation.' },
      { id: 'B', text: 'Approving the change requests raised during delivery.' },
      { id: 'C', text: 'Assigning developers to the highest-value components.' },
      { id: 'D', text: 'Negotiating contracts with the selected suppliers.' }
    ],
    answer: 'A',
    explanation: 'Aiutare i team a valutare i trade-off e a prioritizzare la creazione di valore è tra le attività elencate, insieme a comprendere la strategia, chiarire problemi e opportunità, comunicare gli outcome desiderati, identificare il valore potenziale e supportare lo sviluppo di soluzioni ad alto valore.'
  },
  {
    id: 'D1-35', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A cybersecurity investment will not increase revenue but will reduce the likelihood of a costly data breach. How is this value best described?',
    options: [
      { id: 'A', text: 'Value realized through potential returns and gains.' },
      { id: 'B', text: 'Value preserved by mitigating losses, risks, and costs.' },
      { id: 'C', text: 'No value, since there is no measurable financial gain.' },
      { id: 'D', text: 'Relative value, since it can only be compared to other investments.' }
    ],
    answer: 'B',
    explanation: 'Il valore può essere realizzato attraverso ritorni, guadagni e miglioramenti, oppure preservato mitigando perdite, rischi e costi. Un investimento in sicurezza che riduce la probabilità di una violazione costosa preserva valore: non generare ricavi non significa non generare valore.'
  },
  {
    id: 'D1-36', style: 'knowledge', domain: 1, activity: '1.1', type: 'standard',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Which statement about business analysis and the project lifecycle is correct?',
    options: [
      { id: 'A', text: 'Business analysis is restricted to the project lifecycle and ends at implementation.' },
      { id: 'B', text: 'Business analysis is not restricted to a project or product lifecycle and does not stop at implementation.' },
      { id: 'C', text: 'Business analysis begins only once a project has been formally approved.' },
      { id: 'D', text: 'Business analysis ends when the requirements are approved.' }
    ],
    answer: 'B',
    explanation: 'Sotto la funzione "performance enhancement" lo Standard afferma esplicitamente che la business analysis non è ristretta al ciclo di vita di un progetto o prodotto e non si ferma all\'implementazione: continua a monitorare e valutare gli outcome, alimentando il miglioramento continuo.'
  },
  {
    id: 'D1-37', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.3',
    stem: 'Which of the following is NOT listed as a use of the BACCM?',
    options: [
      { id: 'A', text: 'Identifying professional development opportunities for individuals.' },
      { id: 'B', text: 'Establishing both a foundation and a path forward.' },
      { id: 'C', text: 'Determining the budget required to deliver the change.' },
      { id: 'D', text: 'Describing effective and efficient business analysis.' }
    ],
    answer: 'C',
    explanation: 'Gli usi elencati sono: descrivere una business analysis efficace ed efficiente, comunicare con un linguaggio comune, identificare opportunità di sviluppo professionale, eseguire una business analysis migliore valutando le relazioni fra i sei concetti, valutarne l\'impatto, stabilire fondamento e percorso, considerare qualità e completezza del lavoro. La stima del budget non compare.'
  },
  {
    id: 'D1-38', style: 'applied', domain: 1, activity: '1.3', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'An organization operating in a fast-moving market needs to combine long-range planning with the ability to respond to shifting customer needs. How does business analysis support this?',
    options: [
      { id: 'A', text: 'By mandating an adaptive approach for all initiatives.' },
      { id: 'B', text: 'By supporting predictive, adaptive, and hybrid approaches, combining forward-looking predictions with real-time adaptability.' },
      { id: 'C', text: 'By reducing the planning horizon to a single quarter.' },
      { id: 'D', text: 'By delegating strategy to the executive team and focusing on delivery.' }
    ],
    answer: 'B',
    explanation: 'È la funzione "agility": la business analysis supporta approcci predittivi, adattivi e ibridi perché le organizzazioni diventino agili di fronte a condizioni di mercato, bisogni dei clienti e progressi tecnologici che cambiano, combinando previsione e adattabilità in tempo reale.'
  },
  {
    id: 'D1-39', style: 'knowledge', domain: 1, activity: '1.4', type: 'standard',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'How does the Standard describe the way desired outcomes are typically reached?',
    options: [
      { id: 'A', text: 'Through a single transformation project with a defined end date.' },
      { id: 'B', text: 'Through a combination of described future states delivered by individual components of work.' },
      { id: 'C', text: 'Through annual budget cycles managed by the finance function.' },
      { id: 'D', text: 'Through the accumulation of approved requirements over time.' }
    ],
    answer: 'B',
    explanation: 'Il valore è spesso creato gestendo iniziative che lavorano insieme; l\'organizzazione evolve verso gli outcome desiderati, che sono spesso rappresentati da una combinazione di future state descritti attraverso singole componenti di lavoro.'
  },
  {
    id: 'D1-40', style: 'applied', domain: 1, activity: '1.1', type: 'situational',
    source: 'The Business Analysis Standard, 4.1',
    stem: 'Which of the following people would benefit from applying business analysis, according to the Standard?',
    options: [
      { id: 'A', text: 'Only those with a formal business analysis qualification.' },
      { id: 'B', text: 'Anyone creating new or improved value propositions, enabling change, or streamlining operational activities.' },
      { id: 'C', text: 'Only those working on technology solution implementations.' },
      { id: 'D', text: 'Only those reporting into a business analysis Centre of Excellence.' }
    ],
    answer: 'B',
    explanation: 'La business analysis è uno skill set versatile applicabile a qualunque ruolo: chiunque sviluppi strategia e obiettivi, crei value proposition, abiliti il cambiamento, analizzi need, faciliti la collaborazione, crei prodotti innovativi, progetti processi o ottimizzi le attività operative ne trae beneficio.'
  },
  {
    id: 'D1-41', style: 'knowledge', domain: 1, activity: '1.2', type: 'standard',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Stakeholders are grouped based on what?',
    options: [
      { id: 'A', text: 'Their seniority within the organizational hierarchy.' },
      { id: 'B', text: 'Their relationship to the needs, changes, and solutions.' },
      { id: 'C', text: 'The department budget they control.' },
      { id: 'D', text: 'Whether they are internal or external to the organization.' }
    ],
    answer: 'B',
    explanation: 'Gli stakeholder sono raggruppati in base alla loro relazione con need, change e solution, e sono spesso definiti da interesse, impatto e influenza sul cambiamento. La distinzione interno/esterno esiste ({D}) ma non è il criterio di raggruppamento indicato.'
  },
  {
    id: 'D1-42', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'A sponsor asks when the organization will "see the value" of an initiative that will run for eighteen months. What is the most accurate answer based on the Standard?',
    options: [
      { id: 'A', text: 'Value will be visible only at the end, once all deliverables are complete.' },
      { id: 'B', text: 'Value is discovered throughout the initiative, as benefits are delivered as efficiently and effectively as possible.' },
      { id: 'C', text: 'Value can only be confirmed in the financial year following implementation.' },
      { id: 'D', text: 'Value cannot be predicted, so the question cannot be answered.' }
    ],
    answer: 'B',
    explanation: 'Il valore si scopre lungo tutta l\'iniziativa, man mano che i benefici vengono erogati nel modo più efficiente ed efficace possibile. Trattare il valore come un evento finale è uno degli errori concettuali che l\'esame verifica più spesso.'
  },

  /* ---- Dominio 2, serie B ---- */

  {
    id: 'D2-17', style: 'knowledge', domain: 2, activity: '2.1', type: 'standard',
    source: 'The Business Analysis Standard, 3.1',
    stem: 'What ability do the deliberate practices of an empowering mindset collectively provide?',
    options: [
      { id: 'A', text: 'The ability to eliminate uncertainty from initiatives before they start.' },
      { id: 'B', text: 'The ability to create high-quality outcomes, prioritize focus, empathize with stakeholders, and adapt to realities and feedback.' },
      { id: 'C', text: 'The ability to work without stakeholder involvement when time is short.' },
      { id: 'D', text: 'The ability to apply one proven approach consistently across initiatives.' }
    ],
    answer: 'B',
    explanation: 'Le pratiche deliberate danno la capacità di creare outcome di alta qualità, scoprire valore, prioritizzare il focus, empatizzare e imparare costantemente dagli stakeholder impattati, collaborare per costruire alleati del cambiamento, valutare il contesto e adattarsi, e semplificare la costruzione e condivisione della conoscenza.'
  },
  {
    id: 'D2-18', style: 'applied', domain: 2, activity: '2.1', type: 'situational',
    source: 'The Business Analysis Standard, 3.1',
    stem: 'A business analysis professional is assigned to an initiative where nobody can say exactly what needs to be done. What does the Standard say about this situation?',
    options: [
      { id: 'A', text: 'The initiative should not start until the work is fully defined.' },
      { id: 'B', text: 'Habits, attitudes, behaviours, and practices are required to confidently navigate situations where knowing exactly what needs to be done is impossible.' },
      { id: 'C', text: 'A predictive approach should be imposed to force clarity.' },
      { id: 'D', text: 'The sponsor should define the requirements before analysis begins.' }
    ],
    answer: 'B',
    explanation: 'Lo Standard riconosce esplicitamente le situazioni in cui sapere esattamente cosa fare è impossibile, e indica che abitudini, atteggiamenti, comportamenti e pratiche consentono di navigarle con sicurezza. È il senso stesso del mindset: non attendere la certezza, ma muoversi bene senza di essa.'
  },
  {
    id: 'D2-19', style: 'knowledge', domain: 2, activity: '2.2', type: 'standard',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'Which group correctly lists shared values that drive business analysis work?',
    options: [
      { id: 'A', text: 'Respect, courage, collaboration, ethics' },
      { id: 'B', text: 'Efficiency, compliance, hierarchy, formality' },
      { id: 'C', text: 'Accuracy, completeness, traceability, approval' },
      { id: 'D', text: 'Speed, autonomy, competition, specialization' }
    ],
    answer: 'A',
    explanation: 'I nove valori condivisi sono respect, courage, collaboration, ethics, curiosity, continuous learning, improvement, customer focus e value maximization. Le altre opzioni raccolgono parole plausibili in un contesto aziendale ma estranee all\'elenco ufficiale.'
  },
  {
    id: 'D2-20', style: 'applied', domain: 2, activity: '2.2', type: 'situational',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'After each release, a business analysis professional systematically asks users what did not work and adjusts the approach accordingly. Which two shared values are most directly at work?',
    options: [
      { id: 'A', text: 'Courage and ethics' },
      { id: 'B', text: 'Customer focus and continuous learning' },
      { id: 'C', text: 'Respect and collaboration' },
      { id: 'D', text: 'Value maximization and improvement' }
    ],
    answer: 'B',
    explanation: 'Chiedere sistematicamente agli utenti e correggere la rotta esprime customer focus e continuous learning. Le altre coppie sono valori reali dell\'elenco, ma non descrivono con la stessa precisione il comportamento raccontato: nelle domande situation-based si sceglie l\'opzione più aderente, non solo una vera.'
  },
  {
    id: 'D2-21', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'A stakeholder requests a feature that would be extremely costly given the current infrastructure and the agreed timeline. The professional analyses what can realistically be delivered within those constraints. Which principle applies?',
    options: [
      { id: 'A', text: 'See the whole' },
      { id: 'B', text: 'Avoid waste' },
      { id: 'C', text: 'Understand what is doable' },
      { id: 'D', text: 'Think as a customer' }
    ],
    answer: 'C',
    explanation: 'Understand what is doable riguarda il capire come consegnare una soluzione entro i vincoli, analizzando di continuo i need e le soluzioni che possono soddisfare un need prioritizzato, considerando anche i vincoli dell\'ambiente operativo.'
  },
  {
    id: 'D2-22', style: 'knowledge', domain: 2, activity: '2.3', type: 'standard',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'What does the principle "See the whole" require?',
    options: [
      { id: 'A', text: 'Documenting every requirement before analysis can be considered complete.' },
      { id: 'B', text: 'Analysing needs in the big picture context and identifying why a change is necessary.' },
      { id: 'C', text: 'Involving every stakeholder in every decision.' },
      { id: 'D', text: 'Reviewing the entire solution before each release.' }
    ],
    answer: 'B',
    explanation: 'See the whole significa analizzare i need nel contesto complessivo e identificare perché un cambiamento è necessario: gli outcome desiderati nascono dalla comprensione del contesto, della soluzione e degli stakeholder. Non è una richiesta di esaustività documentale ({A}) né di coinvolgimento totale ({C}).'
  },
  {
    id: 'D2-23', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'A team sets up a channel where users can comment on each increment, and uses those comments to adjust both the solution and the way the team works. Which principle is being applied?',
    options: [
      { id: 'A', text: 'Stimulate collaboration and continuous improvement' },
      { id: 'B', text: 'Get real using examples' },
      { id: 'C', text: 'Analyze to determine what is valuable' },
      { id: 'D', text: 'Understand what is doable' }
    ],
    answer: 'A',
    explanation: 'Il principio invita a creare un ambiente in cui tutti gli stakeholder contribuiscano al valore in modo continuativo e a usare il feedback continuo per adattare la soluzione e i suoi processi, aumentando il valore consegnato. Notare che l\'adattamento riguarda sia il prodotto sia il modo di lavorare.'
  },
  {
    id: 'D2-24', style: 'knowledge', domain: 2, activity: '2.3', type: 'standard',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'The principle "Analyze to determine what is valuable" requires the practitioner to do what?',
    options: [
      { id: 'A', text: 'Calculate the return on investment before any work begins.' },
      { id: 'B', text: 'Continuously assess and prioritize work to maximize the value being delivered.' },
      { id: 'C', text: 'Deliver the requirements in the order in which they were elicited.' },
      { id: 'D', text: 'Allocate value equally across all stakeholder groups.' }
    ],
    answer: 'B',
    explanation: 'Il principio richiede di valutare e prioritizzare il lavoro in modo continuo per massimizzare il valore consegnato: il valore nel cambiamento si realizza comprendendo contesto, need, stakeholder e possibilità di soluzione. È un\'attività ricorrente, non un calcolo iniziale una tantum.'
  },
  {
    id: 'D2-25', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'BABOK Guide, 9.1.5 Systems Thinking',
    stem: 'What does systems thinking suggest about a system?',
    options: [
      { id: 'A', text: 'A system can be fully understood by analysing each of its components separately.' },
      { id: 'B', text: 'A system as a whole has properties, behaviours, and characteristics that emerge from the interaction of its components and are not predictable from the components alone.' },
      { id: 'C', text: 'A system should be decomposed until each part can be assigned to a single owner.' },
      { id: 'D', text: 'A system\'s performance equals the sum of the performance of its parts.' }
    ],
    answer: 'B',
    explanation: 'La teoria dei sistemi afferma che il tutto ha proprietà, comportamenti e caratteristiche emergenti dall\'interazione dei componenti, non prevedibili dalla comprensione dei soli componenti. È l\'esatto contrario di {A} e {D}, che descrivono un approccio puramente riduzionista.'
  },
  {
    id: 'D2-26', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'BABOK Guide, 9.2.5 Adaptability',
    stem: 'How does the BABOK Guide define adaptability?',
    options: [
      { id: 'A', text: 'The ability to change techniques, style, methods, and approach.' },
      { id: 'B', text: 'The ability to complete tasks on time and to the expectations of colleagues.' },
      { id: 'C', text: 'The ability to moderate discussions within a group.' },
      { id: 'D', text: 'The ability to understand business needs using experience from other situations.' }
    ],
    answer: 'A',
    explanation: 'L\'adaptability è la capacità di cambiare tecniche, stile, metodi e approccio: dimostrando disponibilità a interagire e completare i compiti in un modo preferibile per gli stakeholder si massimizza la qualità del servizio. {B} è Personal Accountability, {C} Facilitation, {D} Business Acumen.'
  },
  {
    id: 'D2-27', style: 'applied', domain: 2, activity: '2.4', type: 'situational',
    source: 'BABOK Guide, 9.4.4 Listening',
    stem: 'During an interview a business analysis professional not only registers the words but also checks the meaning in context and shows the speaker that their point is considered valuable. Which underlying competency is this?',
    options: [
      { id: 'A', text: 'Verbal Communication' },
      { id: 'B', text: 'Listening' },
      { id: 'C', text: 'Teaching' },
      { id: 'D', text: 'Negotiation and Conflict Resolution' }
    ],
    answer: 'B',
    explanation: 'Listening è il processo non del semplice udire le parole ma del comprenderne il significato nel contesto; l\'ascolto efficace permette sia di capire accuratamente sia di dimostrare all\'interlocutore che si ritiene importante ciò che dice. È una delle quattro Communication Skills del cap. 9.'
  },
  {
    id: 'D2-28', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'BABOK Guide, 9.5.4 Negotiation and Conflict Resolution',
    stem: 'What does the Negotiation and Conflict Resolution competency involve?',
    options: [
      { id: 'A', text: 'Deciding on behalf of the group when consensus cannot be reached.' },
      { id: 'B', text: 'Mediating discussions so participants recognize differing views, resolve differences, and reach conclusions agreed by all participants.' },
      { id: 'C', text: 'Escalating disagreements to the sponsor for a binding decision.' },
      { id: 'D', text: 'Documenting each party\'s position for the record.' }
    ],
    answer: 'B',
    explanation: 'La competenza consiste nel mediare le discussioni per far riconoscere le divergenze di vedute, risolverle e arrivare a conclusioni che raccolgano l\'accordo di tutti i partecipanti. Il professionista media, non decide al posto del gruppo ({A}) né si limita a verbalizzare ({D}).'
  },
  {
    id: 'D2-29', style: 'applied', domain: 2, activity: '2.4', type: 'situational',
    source: 'BABOK Guide, 9.1.7 Visual Thinking',
    stem: 'To make a complex approval flow understandable to non-technical stakeholders, a business analysis professional draws a diagram that they can react to. Which underlying competency is being used?',
    options: [
      { id: 'A', text: 'Conceptual Thinking' },
      { id: 'B', text: 'Visual Thinking' },
      { id: 'C', text: 'Creative Thinking' },
      { id: 'D', text: 'Written Communication' }
    ],
    answer: 'B',
    explanation: 'Il visual thinking consente di creare rappresentazioni grafiche dei concetti o dei sistemi discussi, con l\'obiettivo di farli comprendere facilmente agli stakeholder e ottenerne l\'input. Il conceptual thinking riguarda invece il collegare contesti, soluzioni, need, cambiamenti, stakeholder e valore in astratto e nel quadro generale.'
  },
  {
    id: 'D2-30', style: 'knowledge', domain: 2, activity: '2.4', type: 'standard',
    source: 'BABOK Guide, 9.3.3 Organization Knowledge',
    stem: 'What does the Organization Knowledge competency include?',
    options: [
      { id: 'A', text: 'Understanding current trends and market forces within an industry.' },
      { id: 'B', text: 'Understanding how the enterprise generates profits, accomplishes its goals, its structure, the relationships between business units, and who occupies key stakeholder positions.' },
      { id: 'C', text: 'Understanding the methodologies that determine how a change is approached and managed.' },
      { id: 'D', text: 'Understanding the range of commercially available solutions and suppliers.' }
    ],
    answer: 'B',
    explanation: 'Organization knowledge riguarda la conoscenza interna dell\'impresa. {A} è Industry Knowledge, {C} Methodology Knowledge, {D} Solution Knowledge: le cinque competenze del gruppo Business Knowledge si distinguono per l\'oggetto della conoscenza — business in generale, settore, impresa, soluzione, metodologia.'
  },

  /* ---- Dominio 3, serie B ---- */

  {
    id: 'D3-23', style: 'knowledge', domain: 3, activity: '3.3', type: 'standard',
    source: 'The Business Analysis Standard, 4.6',
    stem: 'Which delivery form describes outsourcing business analysis functions to specialized service providers?',
    options: [
      { id: 'A', text: 'Centre of Excellence (CoE)' },
      { id: 'B', text: 'Business Analysis as a Service (BAaS)' },
      { id: 'C', text: 'Community of Practice (CoP)' },
      { id: 'D', text: 'Dispersed across business units' }
    ],
    answer: 'B',
    explanation: 'BAaS è l\'esternalizzazione delle funzioni di business analysis a fornitori specializzati. Il CoE è un\'unità specializzata interna, la CoP uno spazio collaborativo di condivisione, "dispersed" l\'integrazione della funzione nei singoli reparti. Molte organizzazioni combinano più forme.'
  },
  {
    id: 'D3-24', style: 'applied', domain: 3, activity: '3.4', type: 'situational',
    source: 'The Business Analysis Standard, 4.4.2',
    stem: 'A statement reads: "Call centre staff need to see a customer\'s last five interactions when answering a call." How is this best classified?',
    options: [
      { id: 'A', text: 'A business requirement, because it supports the goal of improving service.' },
      { id: 'B', text: 'A stakeholder requirement, because it expresses the need of a stakeholder group that must be met to achieve the business requirements.' },
      { id: 'C', text: 'A transition requirement, because it applies during the move to the future state.' },
      { id: 'D', text: 'A design, because it specifies what appears on screen.' }
    ],
    answer: 'B',
    explanation: 'Gli stakeholder requirement sono i bisogni degli stakeholder che devono essere soddisfatti per raggiungere i business requirement, e fanno da ponte tra questi ultimi e i solution requirement. Il requisito non dice ancora come mostrare le interazioni, quindi non è un design ({D}).'
  },
/* ---- Dominio 4, serie B ---- */

  {
    id: 'D4-11', style: 'knowledge', domain: 4, activity: '4.1', type: 'standard',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'How does the BABOK Guide describe business needs?',
    options: [
      { id: 'A', text: 'The features that stakeholders have requested for the solution.' },
      { id: 'B', text: 'The problems and opportunities of strategic importance faced by the enterprise.' },
      { id: 'C', text: 'The constraints imposed on the initiative by regulators.' },
      { id: 'D', text: 'The gaps identified between requirements and designs.' }
    ],
    answer: 'B',
    explanation: 'I business need sono i problemi e le opportunità di importanza strategica affrontati dall\'impresa; un reclamo di un cliente, una perdita di ricavi o una nuova opportunità di mercato ne innescano tipicamente la valutazione. Nota ancora la coppia problema/opportunità: il need non è mai solo un problema.'
  },
  {
    id: 'D4-12', style: 'applied', domain: 4, activity: '4.1', type: 'situational',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'A business analysis professional is told that "the need is a new mobile app". What is the concern with this statement?',
    options: [
      { id: 'A', text: 'None: a mobile app is a valid business need.' },
      { id: 'B', text: 'It states a solution rather than the problem or opportunity of strategic importance to be addressed.' },
      { id: 'C', text: 'It should have been expressed as a transition requirement.' },
      { id: 'D', text: 'It cannot be traced unless a sponsor has approved it.' }
    ],
    answer: 'B',
    explanation: 'Un need è un problema o un\'opportunità da affrontare; una app è una soluzione, cioè un modo specifico di soddisfare un need in un contesto. Partire dalla soluzione salta l\'analisi del perché e rischia di risolvere il problema sbagliato: è uno degli errori che l\'esame mette più spesso in scena.'
  },
  {
    id: 'D4-13', style: 'knowledge', domain: 4, activity: '4.2', type: 'standard',
    source: 'BABOK Guide, 5.1 Trace Requirements',
    stem: 'What is the purpose of Trace Requirements?',
    options: [
      { id: 'A', text: 'To ensure requirements and designs at different levels are aligned to one another, and to manage the effects of change on related requirements.' },
      { id: 'B', text: 'To confirm that elicitation results are accurate and consistent.' },
      { id: 'C', text: 'To rank requirements in order of relative importance.' },
      { id: 'D', text: 'To ensure requirements meet quality standards.' }
    ],
    answer: 'A',
    explanation: 'Trace Requirements (5.1) allinea requisiti e design a livelli diversi e gestisce gli effetti di un cambiamento su un livello sui requisiti correlati. È la base tecnica su cui poggia l\'impact analysis di Assess Requirements Changes.'
  },
  {
    id: 'D4-14', style: 'knowledge', domain: 4, activity: '4.2', type: 'standard',
    source: 'BABOK Guide, 5.2 Maintain Requirements',
    stem: 'Besides retaining accuracy and consistency, what else does Maintain Requirements support?',
    options: [
      { id: 'A', text: 'The approval of requirements by the sponsor.' },
      { id: 'B', text: 'The reuse of requirements in other solutions.' },
      { id: 'C', text: 'The estimation of the delivery effort.' },
      { id: 'D', text: 'The selection of the elicitation techniques.' }
    ],
    answer: 'B',
    explanation: 'Il purpose del task 5.2 cita esplicitamente il mantenimento dell\'accuratezza e della coerenza durante e oltre il cambiamento, per l\'intero ciclo di vita del requisito, e il supporto al riutilizzo dei requisiti in altre soluzioni. Il riuso è la parte che si dimentica più facilmente.'
  },
  {
    id: 'D4-15', style: 'applied', domain: 4, activity: '4.2', type: 'situational',
    source: 'BABOK Guide, 5.4 Assess Requirements Changes',
    stem: 'A proposed change would deliver a benefit to one department but would require reworking three components already built. What should the assessment of this change consider?',
    options: [
      { id: 'A', text: 'Only the benefit to the requesting department, since they are the customer.' },
      { id: 'B', text: 'The implications of the change, weighing benefit against cost and impact on related requirements and designs.' },
      { id: 'C', text: 'Only whether the change fits within the remaining schedule.' },
      { id: 'D', text: 'Only whether the sponsor has authorized additional budget.' }
    ],
    answer: 'B',
    explanation: 'Assess Requirements Changes valuta le implicazioni delle modifiche proposte: significa considerarne benefici, costo e impatto sugli elementi correlati, non guardare a una sola dimensione. La tracciabilità rende visibile quali requisiti e componenti sono coinvolti.'
  },
  {
    id: 'D4-16', style: 'knowledge', domain: 4, activity: '4.3', type: 'standard',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'What is the purpose of Define Future State?',
    options: [
      { id: 'A', text: 'To describe how the enterprise currently operates.' },
      { id: 'B', text: 'To determine the set of necessary conditions to meet the business need.' },
      { id: 'C', text: 'To select the recommended approach to the change.' },
      { id: 'D', text: 'To measure whether the change has succeeded.' }
    ],
    answer: 'B',
    explanation: 'Define Future State (6.2) determina l\'insieme di condizioni necessarie a soddisfare il business need. Non descrive il come arrivarci — quella è la change strategy (6.4) — ma il dove si vuole arrivare.'
  },
  {
    id: 'D4-17', style: 'applied', domain: 4, activity: '4.3', type: 'situational',
    source: 'BABOK Guide, 8.1 e 8.2',
    stem: 'Six months after go-live, a business analysis professional collects the agreed measures and turns them into insights about how the solution is performing against the value expected. Which two tasks are being performed, in order?',
    options: [
      { id: 'A', text: 'Analyze Performance Measures, then Measure Solution Performance.' },
      { id: 'B', text: 'Measure Solution Performance, then Analyze Performance Measures.' },
      { id: 'C', text: 'Assess Solution Limitations, then Recommend Actions to Increase Solution Value.' },
      { id: 'D', text: 'Validate Requirements, then Verify Requirements.' }
    ],
    answer: 'B',
    explanation: 'Prima si definiscono e si raccolgono le misure (8.1 Measure Solution Performance), poi si trasformano in insight sulla prestazione rispetto al valore portato (8.2 Analyze Performance Measures). L\'ordine dei task di Solution Evaluation è materia d\'esame e {A} lo inverte.'
  },
  {
    id: 'D4-18', style: 'knowledge', domain: 4, activity: '4.3', type: 'standard',
    source: 'BABOK Guide, 3.5 Identify Business Analysis Performance Improvements',
    stem: 'Business analysis performance assessments are used as an input to which activity?',
    options: [
      { id: 'A', text: 'Planning the stakeholder engagement approach and preparing for elicitation.' },
      { id: 'B', text: 'Approving the solution design.' },
      { id: 'C', text: 'Calculating the return on investment of the initiative.' },
      { id: 'D', text: 'Selecting the vendors for implementation.' }
    ],
    answer: 'A',
    explanation: 'La Business Analysis Performance Assessment prodotta dal task 3.5 alimenta fra l\'altro Plan Stakeholder Engagement (3.2) e Prepare for Elicitation (4.1): quanto appreso su come sta andando il lavoro di analisi torna a migliorare il modo in cui lo si pianifica.'
  },
  {
    id: 'D4-19', style: 'applied', domain: 4, activity: '4.4', type: 'situational',
    source: 'BABOK Guide, 8.5 Recommend Actions to Increase Solution Value',
    stem: 'Measurements show that a solution is delivering less value than expected. What is the appropriate next step for a practitioner at the foundational level?',
    options: [
      { id: 'A', text: 'Decommission the solution and restart the initiative.' },
      { id: 'B', text: 'Understand the factors creating the difference between potential and actual value, and contribute recommendations to align them.' },
      { id: 'C', text: 'Increase the target metrics so the solution meets them.' },
      { id: 'D', text: 'Attribute the shortfall to the implementation team and close the assessment.' }
    ],
    answer: 'B',
    explanation: 'Recommend Actions to Increase Solution Value (8.5) parte proprio dalla comprensione dei fattori che creano la differenza fra valore potenziale e valore effettivo, per poi raccomandare un corso d\'azione che li allinei. Ritoccare le metriche perché il risultato torni ({C}) è l\'opposto di una valutazione onesta.'
  },
  {
    id: 'D4-20', style: 'knowledge', domain: 4, activity: '4.4', type: 'standard',
    source: 'BABOK Guide, 10.35 Process Modelling',
    stem: 'What is a process model?',
    options: [
      { id: 'A', text: 'A standardized graphical model used to show how work is carried out, and a foundation for process analysis.' },
      { id: 'B', text: 'A description of the entities and relationships in a data domain.' },
      { id: 'C', text: 'A list of the roles and reporting lines within an organization.' },
      { id: 'D', text: 'A ranked list of the work remaining on an initiative.' }
    ],
    answer: 'A',
    explanation: 'Il process model è un modello grafico standardizzato che mostra come il lavoro viene svolto e costituisce il fondamento della process analysis. Il rapporto fra le due tecniche è quello fra descrivere (10.35) e valutare (10.34).'
  },
  {
    id: 'D4-21', style: 'applied', domain: 4, activity: '4.1', type: 'situational',
    source: 'BABOK Guide, 6.3 Assess Risks',
    stem: 'Which of the following would be assessed as a risk during a transition to a future state?',
    options: [
      { id: 'A', text: 'A defect found by testers in the current release.' },
      { id: 'B', text: 'The possibility that key staff leave during the migration, delaying adoption and reducing the value delivered.' },
      { id: 'C', text: 'The number of requirements approved to date.' },
      { id: 'D', text: 'The cost already spent on the initiative.' }
    ],
    answer: 'B',
    explanation: 'Assess Risks guarda alle conseguenze indesiderate di forze interne ed esterne durante la transizione allo stato futuro o una volta raggiuntolo, e al loro impatto potenziale sul valore. Un difetto già trovato è un fatto, non un\'incertezza; costi già spesi e requisiti approvati sono misure di avanzamento.'
  },
  {
    id: 'D4-22', style: 'knowledge', domain: 4, activity: '4.4', type: 'standard',
    source: 'BABOK Guide, 10.2 Backlog Management',
    stem: 'What is a backlog used for?',
    options: [
      { id: 'A', text: 'To record, track, and prioritize remaining work items.' },
      { id: 'B', text: 'To document the rules governing operational decisions.' },
      { id: 'C', text: 'To record the lessons learned at the end of a phase.' },
      { id: 'D', text: 'To define the boundaries of the solution.' }
    ],
    answer: 'A',
    explanation: 'Il backlog registra, traccia e prioritizza gli elementi di lavoro rimanenti. È una delle 20 tecniche valutate all\'ECBA ed è anche una delle cinque tecniche fondazionali citate da The Business Analysis Standard.'
  },
  {
    id: 'D4-23', style: 'knowledge', domain: 4, activity: '4.2', type: 'standard',
    source: 'BABOK Guide, 5.5 Approve Requirements',
    stem: 'What is the purpose of Approve Requirements?',
    options: [
      { id: 'A', text: 'To rank requirements by importance so that work can be sequenced.' },
      { id: 'B', text: 'To obtain agreement on and approval of requirements and designs so that business analysis work can continue or construction can proceed.' },
      { id: 'C', text: 'To check requirements against quality characteristics.' },
      { id: 'D', text: 'To evaluate the implications of proposed changes.' }
    ],
    answer: 'B',
    explanation: 'Approve Requirements (5.5) ottiene accordo e approvazione affinché il lavoro di analisi prosegua o la costruzione della soluzione possa iniziare. Approvare non è verificare ({C}) né prioritizzare ({A}): riguarda il consenso, non la qualità o l\'ordine.'
  },
  {
    id: 'D4-24', style: 'applied', domain: 4, activity: '4.3', type: 'situational',
    source: 'BABOK Guide, 3.5 Identify Business Analysis Performance Improvements',
    stem: 'Stakeholders complain that requirements documents arrive too late to be useful. What should the business analysis professional do with this feedback?',
    options: [
      { id: 'A', text: 'Treat it as input to assessing business analysis work and planning improvements to the process.' },
      { id: 'B', text: 'Treat it as a solution limitation to be assessed after implementation.' },
      { id: 'C', text: 'Treat it as a change request to the approved requirements.' },
      { id: 'D', text: 'Treat it as an enterprise limitation outside the practitioner\'s control.' }
    ],
    answer: 'A',
    explanation: 'Il feedback riguarda il processo di business analysis, non la soluzione: rientra in Identify Business Analysis Performance Improvements (3.5), che valuta il lavoro di analisi e pianifica il miglioramento dei processi dove serve.'
  },

  /* ---- Dominio 5, serie B ---- */

  {
    id: 'D5-11', style: 'knowledge', domain: 5, activity: '5.1', type: 'standard',
    source: 'BABOK Guide, 4.1 Prepare for Elicitation',
    stem: 'What does preparing for elicitation include?',
    options: [
      { id: 'A', text: 'Analysing the elicited information into requirements and designs.' },
      { id: 'B', text: 'Defining the desired outcomes of the activity, deciding which techniques suit those outcomes, and establishing the logistics and supporting materials.' },
      { id: 'C', text: 'Obtaining approval of the requirements from the sponsor.' },
      { id: 'D', text: 'Checking the elicited information for accuracy and consistency.' }
    ],
    answer: 'B',
    explanation: 'Prepare for Elicitation (4.1) definisce gli outcome desiderati considerando stakeholder e obiettivi, determina i work product da produrre, sceglie le tecniche più adatte, stabilisce la logistica e i materiali di supporto e comprende le circostanze che favoriscono la collaborazione. {D} è Confirm Elicitation Results (4.3).'
  },
  {
    id: 'D5-12', style: 'applied', domain: 5, activity: '5.1', type: 'situational',
    source: 'BABOK Guide, 10.50 Workshops e 10.25 Interviews',
    stem: 'A business analysis professional must gather requirements from twelve people across four departments who each hold part of the picture, and needs them to reach a shared view in a single session. Which technique is most appropriate?',
    options: [
      { id: 'A', text: 'Interviews, conducted one by one.' },
      { id: 'B', text: 'Workshops, which bring stakeholders together to collaborate on achieving a predefined goal.' },
      { id: 'C', text: 'Document Analysis of the departments\' procedures.' },
      { id: 'D', text: 'Observation of each department at work.' }
    ],
    answer: 'B',
    explanation: 'I workshop riuniscono gli stakeholder per collaborare al raggiungimento di un obiettivo predefinito: sono la scelta naturale quando serve una visione condivisa fra molte persone in un\'unica sessione. Le interviste individuali sono efficaci ma non producono, da sole, la condivisione fra i partecipanti.'
  },
  {
    id: 'D5-13', style: 'knowledge', domain: 5, activity: '5.1', type: 'standard',
    source: 'BABOK Guide, 10.5 Brainstorming',
    stem: 'What is the aim of brainstorming?',
    options: [
      { id: 'A', text: 'To evaluate options against agreed criteria and select the best one.' },
      { id: 'B', text: 'To produce numerous new ideas and derive from them themes for further analysis.' },
      { id: 'C', text: 'To identify the underlying causes of a problem.' },
      { id: 'D', text: 'To document the rules that guide operational decisions.' }
    ],
    answer: 'B',
    explanation: 'Il brainstorming favorisce il pensiero creativo su un problema con l\'obiettivo di produrre molte idee nuove e ricavarne temi per l\'analisi successiva. La valutazione delle opzioni ({A}) è un\'attività distinta e successiva: confonderle svuota la tecnica del suo scopo.'
  },
  {
    id: 'D5-14', style: 'applied', domain: 5, activity: '5.2', type: 'situational',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'A requirement reads: "The system must allow users to export data and must send a confirmation email to the supervisor." Which quality characteristic is compromised?',
    options: [
      { id: 'A', text: 'Atomic, because the statement is not self-contained and combines two separate requirements.' },
      { id: 'B', text: 'Feasible, because both parts cannot be delivered in the same release.' },
      { id: 'C', text: 'Understandable, because the terminology is technical.' },
      { id: 'D', text: 'Prioritized, because no ranking has been assigned.' }
    ],
    answer: 'A',
    explanation: 'Atomic significa autosufficiente e comprensibile indipendentemente dagli altri requisiti. Qui ci sono due requisiti distinti in una frase sola: se uno viene implementato e l\'altro no, lo stato del requisito diventa ambiguo, e anche la testabilità ne risente.'
  },
  {
    id: 'D5-15', style: 'knowledge', domain: 5, activity: '5.2', type: 'standard',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'What does the quality characteristic "testable" require?',
    options: [
      { id: 'A', text: 'That a test script has already been written for the requirement.' },
      { id: 'B', text: 'That it is possible to verify that the requirement or design has been fulfilled.' },
      { id: 'C', text: 'That the requirement has been approved by the testing team.' },
      { id: 'D', text: 'That the requirement can be automated.' }
    ],
    answer: 'B',
    explanation: 'Testable significa che è possibile verificare che il requisito o il design sia stato soddisfatto; i livelli accettabili di verifica dipendono dal livello di astrazione del requisito. Non richiede che esistano già script di test né che il requisito sia automatizzabile.'
  },
  {
    id: 'D5-16', style: 'applied', domain: 5, activity: '5.2', type: 'situational',
    source: 'BABOK Guide, 4.3 Confirm Elicitation Results',
    stem: 'After a workshop, the notes taken by the business analysis professional differ from what one participant remembers agreeing. What should happen?',
    options: [
      { id: 'A', text: 'The notes prevail, since they were taken during the session.' },
      { id: 'B', text: 'Collaborate with the stakeholder to ensure their input was captured correctly; if the information is not correct, determine what is correct, which may require more elicitation.' },
      { id: 'C', text: 'Both versions are recorded and the discrepancy is left to the delivery team.' },
      { id: 'D', text: 'The disagreement is escalated to the sponsor for a decision.' }
    ],
    answer: 'B',
    explanation: 'Confermare i risultati richiede la collaborazione con gli stakeholder per assicurarsi che i loro input siano stati catturati correttamente; se l\'informazione non è corretta il professionista determina cosa lo è, e questo può richiedere ulteriore elicitation. Lasciare la discrepanza aperta ({C}) è esattamente ciò che il task previene.'
  },
  {
    id: 'D5-17', style: 'knowledge', domain: 5, activity: '5.3', type: 'standard',
    source: 'BABOK Guide, 7.3 Validate Requirements',
    stem: 'According to Validate Requirements, what happens to a requirement that delivers no benefit to any stakeholder?',
    options: [
      { id: 'A', text: 'It is implemented last, after all other requirements.' },
      { id: 'B', text: 'It is a strong candidate for elimination.' },
      { id: 'C', text: 'It is reclassified as a non-functional requirement.' },
      { id: 'D', text: 'It is retained for traceability purposes.' }
    ],
    answer: 'B',
    explanation: 'Un requisito che non porta benefici a nessuno stakeholder è un forte candidato all\'eliminazione. Il BABOK aggiunge il caso complementare: un requisito può portare beneficio e non essere comunque parte desiderabile della soluzione, e allora o si rivede il future state e lo scope, o si rimuove il requisito.'
  },
  {
    id: 'D5-18', style: 'applied', domain: 5, activity: '5.3', type: 'situational',
    source: 'BABOK Guide, 7.3 Validate Requirements',
    stem: 'A team has assumed that customers will adopt a new self-service channel, but the product is unprecedented and there is no comparable experience to rely on. What does the BABOK Guide advise?',
    options: [
      { id: 'A', text: 'Proceed, since assumptions are unavoidable in innovation.' },
      { id: 'B', text: 'Identify and define the assumption so that the associated risks can be managed.' },
      { id: 'C', text: 'Replace the assumption with a requirement.' },
      { id: 'D', text: 'Cancel the initiative until customer behaviour can be proven.' }
    ],
    answer: 'B',
    explanation: 'Quando un\'organizzazione lancia un prodotto senza precedenti può essere necessario fare assunzioni sulla risposta di clienti e stakeholder: queste vanno identificate e definite proprio perché i rischi associati possano essere gestiti. Un\'assunzione esplicita è gestibile, una implicita no.'
  },
  {
    id: 'D5-19', style: 'knowledge', domain: 5, activity: '5.4', type: 'standard',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Which prioritization factor refers to the "best before" date of a requirement, after which its value diminishes?',
    options: [
      { id: 'A', text: 'Stability' },
      { id: 'B', text: 'Time sensitivity' },
      { id: 'C', text: 'Penalty' },
      { id: 'D', text: 'Dependencies' }
    ],
    answer: 'B',
    explanation: 'La time sensitivity è la "data di scadenza" del requisito: oltre un certo momento il valore che porterebbe si riduce o svanisce. La stability riguarda invece la probabilità che il requisito cambi ancora, e quindi la convenienza di lavorarci ora.'
  },
  {
    id: 'D5-20', style: 'applied', domain: 5, activity: '5.4', type: 'situational',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Stakeholders assign top priority to a requirement, but after learning the implementation cost from the delivery team they lower it. Which prioritization factor caused the change?',
    options: [
      { id: 'A', text: 'Cost, information about which typically comes from the implementation team or the vendor.' },
      { id: 'B', text: 'Penalty, because not implementing it now has consequences.' },
      { id: 'C', text: 'Regulatory compliance, because budgets are governed by policy.' },
      { id: 'D', text: 'Stability, because the requirement has changed.' }
    ],
    answer: 'A',
    explanation: 'Il cost è lo sforzo e le risorse necessarie a implementare il requisito, e l\'informazione arriva tipicamente dal team di implementazione o dal fornitore; il BABOK nota esplicitamente che i clienti possono cambiare la priorità di un requisito dopo averne appreso il costo. Il costo è spesso usato insieme ad altri criteri, come nella cost-benefit analysis.'
  },
  {
    id: 'D5-21', style: 'knowledge', domain: 5, activity: '5.4', type: 'standard',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Who agrees the basis on which requirements are prioritized?',
    options: [
      { id: 'A', text: 'The business analyst alone, to remain objective.' },
      { id: 'B', text: 'The relevant stakeholders, as defined in the Business Analysis Planning and Monitoring knowledge area.' },
      { id: 'C', text: 'The implementation team, since they know the cost.' },
      { id: 'D', text: 'The regulator, where the initiative is subject to compliance.' }
    ],
    answer: 'B',
    explanation: 'La base della prioritizzazione è concordata con gli stakeholder rilevanti secondo quanto definito in Business Analysis Planning and Monitoring. Prioritizzare non è una decisione tecnica del professionista: è una decisione di business che va concordata prima di applicarla.'
  },
  {
    id: 'D5-22', style: 'applied', domain: 5, activity: '5.1', type: 'situational',
    source: 'BABOK Guide, 4.2 Conduct Elicitation',
    stem: 'How may stakeholders collaborate in elicitation, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'Only by attending facilitated sessions in person.' },
      { id: 'B', text: 'By participating and interacting during the activity, and by researching, studying, and providing feedback on documents, systems, models, and interfaces.' },
      { id: 'C', text: 'Only by approving the elicitation results afterwards.' },
      { id: 'D', text: 'Only by nominating a representative to speak on their behalf.' }
    ],
    answer: 'B',
    explanation: 'La collaborazione degli stakeholder ha due forme: partecipare e interagire durante l\'attività, e ricercare, studiare e fornire feedback su documenti, sistemi, modelli e interfacce. Anche nell\'elicitation di tipo research gli stakeholder possono partecipare.'
  },
  {
    id: 'D5-23', style: 'knowledge', domain: 5, activity: '5.2', type: 'standard',
    source: 'BABOK Guide, 7.1 Specify and Model Requirements',
    stem: 'Which three activities does Specify and Model Requirements perform on elicitation results?',
    options: [
      { id: 'A', text: 'Analyze, synthesize, and refine' },
      { id: 'B', text: 'Verify, validate, and approve' },
      { id: 'C', text: 'Trace, maintain, and prioritize' },
      { id: 'D', text: 'Collect, store, and archive' }
    ],
    answer: 'A',
    explanation: 'Il task 7.1 analizza, sintetizza e raffina i risultati dell\'elicitation trasformandoli in requisiti e design. {B} e {C} elencano altri task reali del BABOK — rispettivamente di RADD e di RLCM — ma non descrivono questo.'
  },
  {
    id: 'D5-24', style: 'knowledge', domain: 5, activity: '5.3', type: 'standard',
    source: 'BABOK Guide, 4.3 Confirm Elicitation Results',
    stem: 'How does confirming elicitation results compare with the review performed during analysis?',
    options: [
      { id: 'A', text: 'It is much less rigorous and formal.' },
      { id: 'B', text: 'It is more rigorous, since errors found later cost more.' },
      { id: 'C', text: 'It is identical, applying the same quality characteristics.' },
      { id: 'D', text: 'It replaces the review performed during analysis.' }
    ],
    answer: 'A',
    explanation: 'Il BABOK afferma esplicitamente che confermare i risultati dell\'elicitation è una revisione molto meno rigorosa e formale di quella che avviene durante l\'analisi. Serve a intercettare presto errori, omissioni, conflitti e ambiguità, non a sostituire la verifica formale dei requisiti.'
  },
/* ---- Dominio 6, serie B ---- */

  {
    id: 'D6-11', style: 'knowledge', domain: 6, activity: '6.1', type: 'standard',
    source: 'BABOK Guide, 8.1 Measure Solution Performance',
    stem: 'From where do performance measures for a solution commonly come?',
    options: [
      { id: 'A', text: 'Exclusively from the delivery team\'s tooling.' },
      { id: 'B', text: 'From business goals, objectives, and business processes, and they may also be influenced or imposed by third parties such as vendors or regulators.' },
      { id: 'C', text: 'Exclusively from the requirements documentation.' },
      { id: 'D', text: 'From the project schedule and cost baseline.' }
    ],
    answer: 'B',
    explanation: 'Goal, obiettivi e processi di business sono fonti comuni di misure, e le misure possono essere influenzate o imposte da terzi come fornitori, enti governativi o organizzazioni regolatrici. Il tipo e la natura delle misure incidono poi sulla scelta del metodo di elicitation.'
  },
  {
    id: 'D6-12', style: 'applied', domain: 6, activity: '6.1', type: 'situational',
    source: 'BABOK Guide, 8.1 Measure Solution Performance',
    stem: 'A business analysis professional proposes a performance measure that no stakeholder considers meaningful. What does the BABOK Guide prescribe?',
    options: [
      { id: 'A', text: 'Adopt it anyway, since objectivity requires independence from opinion.' },
      { id: 'B', text: 'Validate the performance measures and any influencing criteria with stakeholders, so the assessment of performance is useful.' },
      { id: 'C', text: 'Replace it with a qualitative measure.' },
      { id: 'D', text: 'Defer the measurement until after the next release.' }
    ],
    answer: 'B',
    explanation: 'Validare le misure di prestazione con gli stakeholder serve ad assicurare che la valutazione sia utile; le misure specifiche devono inoltre allinearsi con eventuali misure di livello superiore esistenti nel contesto. Una misura che nessuno ritiene significativa non produrrà decisioni.'
  },
  {
    id: 'D6-13', style: 'knowledge', domain: 6, activity: '6.2', type: 'standard',
    source: 'BABOK Guide, 7.4 Define Requirements Architecture',
    stem: 'What is the purpose of Define Requirements Architecture?',
    options: [
      { id: 'A', text: 'To ensure that the requirements collectively support one another to fully achieve the objectives.' },
      { id: 'B', text: 'To define the technical architecture of the solution components.' },
      { id: 'C', text: 'To store requirements so that they can be retrieved later.' },
      { id: 'D', text: 'To estimate the effort required to implement each requirement.' }
    ],
    answer: 'A',
    explanation: 'Il task 7.4 riguarda l\'insieme: i requisiti presi collettivamente devono sostenersi a vicenda e raggiungere pienamente gli obiettivi. Non è l\'architettura tecnica della soluzione ({B}), che appartiene al design, né la gestione documentale ({C}).'
  },
  {
    id: 'D6-14', style: 'applied', domain: 6, activity: '6.2', type: 'situational',
    source: 'BABOK Guide, 7.5 e 7.6',
    stem: 'Three design options have been represented. What is the correct next step according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'Implement the option preferred by the sponsor.' },
      { id: 'B', text: 'Estimate the potential value of each option and establish which is most appropriate to meet the enterprise\'s requirements.' },
      { id: 'C', text: 'Verify that each option meets the requirements quality characteristics.' },
      { id: 'D', text: 'Measure the performance of each option in production.' }
    ],
    answer: 'B',
    explanation: 'Dopo Define Design Options (7.5) viene Analyze Potential Value and Recommend Solution (7.6), che stima il valore potenziale di ciascuna opzione e stabilisce quale sia la più appropriata. La preferenza dello sponsor ({A}) non sostituisce l\'analisi del valore.'
  },
  {
    id: 'D6-15', style: 'applied', domain: 6, activity: '6.3', type: 'situational',
    source: 'BABOK Guide, 6.4 Define Change Strategy',
    stem: 'Why might a solution scope explicitly describe components that are out of scope?',
    options: [
      { id: 'A', text: 'To reserve them for a future phase of funding.' },
      { id: 'B', text: 'To provide clarity about the boundaries of the solution.' },
      { id: 'C', text: 'Because governance requires a complete inventory of rejected options.' },
      { id: 'D', text: 'To allow the delivery team to implement them if time allows.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK indica che il solution scope può includere anche la descrizione dei componenti fuori scope proprio per fornire chiarezza. Dire cosa non si farà elimina ambiguità tanto quanto dire cosa si farà.'
  },
  {
    id: 'D6-16', style: 'knowledge', domain: 6, activity: '6.3', type: 'standard',
    source: 'BABOK Guide, 6.4 Define Change Strategy',
    stem: 'Which statement about the solution scope is correct?',
    options: [
      { id: 'A', text: 'It is fixed once approved and cannot change during the initiative.' },
      { id: 'B', text: 'It might evolve throughout an initiative as more information is discovered.' },
      { id: 'C', text: 'It is defined only after the solution has been built.' },
      { id: 'D', text: 'It is identical to the project scope.' }
    ],
    answer: 'B',
    explanation: 'Il solution scope può evolvere durante l\'iniziativa man mano che emergono nuove informazioni. Trattarlo come immutabile ({A}) contraddice il testo ed è incompatibile con gli approcci adattivi.'
  },
  {
    id: 'D6-17', style: 'knowledge', domain: 6, activity: '6.4', type: 'standard',
    source: 'BABOK Guide, 2.5 Requirements and Designs',
    stem: 'Can the same task and technique be used to produce both a requirement and a design?',
    options: [
      { id: 'A', text: 'No: requirements and designs are produced by mutually exclusive tasks.' },
      { id: 'B', text: 'Yes: the same tasks and techniques can be used for both, since what differs is the purpose they serve.' },
      { id: 'C', text: 'Yes, but only in adaptive approaches.' },
      { id: 'D', text: 'No: designs may only be produced after all requirements are approved.' }
    ],
    answer: 'B',
    explanation: 'Requisiti e design sono simili per natura e le stesse task e tecniche possono servire a crearli: a differire è lo scopo, perché il requisito rappresenta un need e il design rappresenta una soluzione. Sono inoltre interdipendenti e ciclici, quindi {D} è doppiamente errata.'
  },
  {
    id: 'D6-18', style: 'applied', domain: 6, activity: '6.4', type: 'situational',
    source: 'BABOK Guide, 10.15 Data Modelling e 10.35 Process Modelling',
    stem: 'A team must document both the sequence of steps in an approval workflow and the structure of the information the workflow handles. Which pair of techniques is appropriate?',
    options: [
      { id: 'A', text: 'Process Modelling for the steps, Data Modelling for the information structure.' },
      { id: 'B', text: 'Data Modelling for the steps, Process Modelling for the information structure.' },
      { id: 'C', text: 'Scope Modelling for both.' },
      { id: 'D', text: 'Organizational Modelling for the steps, Business Rules Analysis for the information structure.' }
    ],
    answer: 'A',
    explanation: 'Il process model mostra graficamente come il lavoro viene svolto; il data model descrive entità, attributi e relazioni di un dominio. {B} inverte le due tecniche: è il tipo di distrattore che si smonta ricordando l\'oggetto di ciascun modello — attività contro informazioni.'
  },
  {
    id: 'D6-19', style: 'knowledge', domain: 6, activity: '6.1', type: 'standard',
    source: 'BABOK Guide, 7.3 Validate Requirements',
    stem: 'What are baseline metrics, as used when defining measurable evaluation criteria?',
    options: [
      { id: 'A', text: 'Target values that reflect achievement of the business objectives.' },
      { id: 'B', text: 'Metrics established from the current state, against which change can later be assessed.' },
      { id: 'C', text: 'The minimum acceptable performance defined by the vendor.' },
      { id: 'D', text: 'The measures collected during solution testing.' }
    ],
    answer: 'B',
    explanation: 'Le baseline metric sono stabilite a partire dal current state; le target metric sono invece sviluppate per riflettere il raggiungimento degli obiettivi di business ({A}). Senza baseline non è possibile dire quanto il cambiamento abbia migliorato la situazione.'
  },
  {
    id: 'D6-20', style: 'knowledge', domain: 6, activity: '6.2', type: 'standard',
    source: 'BABOK Guide, 10.6 Business Capability Analysis',
    stem: 'Business capability analysis provides a scope and prioritization filter. What else does it generate?',
    options: [
      { id: 'A', text: 'A shared understanding of outcomes and an identification of alignment with strategy.' },
      { id: 'B', text: 'A ranked backlog of the work remaining.' },
      { id: 'C', text: 'A set of acceptance criteria for testing.' },
      { id: 'D', text: 'A model of the roles and reporting structures.' }
    ],
    answer: 'A',
    explanation: 'La business capability analysis fornisce un framework per scoping e pianificazione generando comprensione condivisa degli outcome, identificando l\'allineamento con la strategia e fungendo da filtro di scope e prioritizzazione. Le capability rispondono a "cosa sa fare l\'organizzazione", non a "chi riporta a chi" ({D}).'
  },
  {
    id: 'D6-21', style: 'applied', domain: 6, activity: '6.3', type: 'situational',
    source: 'BABOK Guide, 10.41 Scope Modelling',
    stem: 'Stakeholders keep adding expectations that the team believes fall outside what was agreed. Which technique most directly addresses this?',
    options: [
      { id: 'A', text: 'Scope Modelling, which defines limits or boundaries and places elements inside or outside them.' },
      { id: 'B', text: 'Backlog Management, which records and prioritizes remaining work.' },
      { id: 'C', text: 'Lessons Learned, which captures improvement opportunities.' },
      { id: 'D', text: 'Brainstorming, which generates ideas about the problem.' }
    ],
    answer: 'A',
    explanation: 'Gli scope model definiscono la natura di uno o più limiti o confini e collocano gli elementi dentro o fuori: sono lo strumento diretto per rendere esplicito cosa appartiene all\'iniziativa e cosa no. Il backlog ordina il lavoro accettato, ma non stabilisce i confini.'
  },
  {
    id: 'D6-22', style: 'knowledge', domain: 6, activity: '6.4', type: 'standard',
    source: 'BABOK Guide, 10.9 Business Rules Analysis',
    stem: 'A rule states: "A refund may be issued only within 30 days of purchase and only by a supervisor." Which technique governs the identification and organization of such rules?',
    options: [
      { id: 'A', text: 'Business Rules Analysis' },
      { id: 'B', text: 'Data Modelling' },
      { id: 'C', text: 'Process Analysis' },
      { id: 'D', text: 'Risk Analysis and Management' }
    ],
    answer: 'A',
    explanation: 'La business rules analysis identifica, esprime, valida, raffina e organizza le regole che modellano il comportamento quotidiano del business e guidano le decisioni operative. La regola citata è esattamente questo: un vincolo che governa una decisione operativa.'
  },
  {
    id: 'D6-23', style: 'applied', domain: 6, activity: '6.1', type: 'situational',
    source: 'BABOK Guide, 8.3 Assess Solution Limitations',
    stem: 'A reporting solution is fast in every component except one database query, which slows the entire report. What principle does this illustrate?',
    options: [
      { id: 'A', text: 'Solutions often have internal dependencies that limit the performance of the entire solution to that of the least effective component.' },
      { id: 'B', text: 'Enterprise culture determines whether a solution delivers value.' },
      { id: 'C', text: 'Non-functional requirements cannot be verified before implementation.' },
      { id: 'D', text: 'Qualitative measures are more reliable than quantitative ones.' }
    ],
    answer: 'A',
    explanation: 'È il principio alla base di Assess Solution Limitations: le soluzioni hanno spesso dipendenze interne che limitano la prestazione dell\'insieme a quella del componente meno efficace. Individuare quel componente è il primo passo dell\'assessment.'
  },
  {
    id: 'D6-24', style: 'knowledge', domain: 6, activity: '6.2', type: 'standard',
    source: 'BABOK Guide, 6.4 Define Change Strategy',
    stem: 'What must be in place before a gap analysis can be performed?',
    options: [
      { id: 'A', text: 'The solution must already be implemented.' },
      { id: 'B', text: 'Both the current state and the future state must be defined.' },
      { id: 'C', text: 'The requirements must have been approved.' },
      { id: 'D', text: 'The delivery approach must have been selected.' }
    ],
    answer: 'B',
    explanation: 'Per eseguire una gap analysis devono essere definiti sia il current state sia il future state; usare le stesse tecniche per descriverli semplifica il confronto. Senza uno dei due termini non esiste alcun divario da misurare.'
  },

  /* ---- Dominio 7, serie B ---- */

  {
    id: 'D7-11', style: 'knowledge', domain: 7, activity: '7.1', type: 'standard',
    source: 'BABOK Guide, 4.4 Communicate Business Analysis Information',
    stem: 'Communication of business analysis information is described as which of the following?',
    options: [
      { id: 'A', text: 'One-directional and final, once the requirements are baselined.' },
      { id: 'B', text: 'Bi-directional and iterative, involving determining recipients, content, purpose, context, and expected outcomes.' },
      { id: 'C', text: 'A formality performed at the end of each phase.' },
      { id: 'D', text: 'The responsibility of the project manager rather than the business analyst.' }
    ],
    answer: 'B',
    explanation: 'La comunicazione è bidirezionale e iterativa, e comporta determinare destinatari, contenuto, scopo, contesto e outcome attesi. Non è spingere fuori informazione dando per scontato che sia stata ricevuta e compresa: il professionista verifica la comprensione e agisce sui disaccordi.'
  },
  {
    id: 'D7-12', style: 'knowledge', domain: 7, activity: '7.2', type: 'standard',
    source: 'BABOK Guide, 2.4.4 End User e 2.4.6 Operational Support',
    stem: 'Who are end users?',
    options: [
      { id: 'A', text: 'Stakeholders responsible for the day-to-day management and maintenance of a system.' },
      { id: 'B', text: 'Stakeholders who directly interact with the solution, including all participants in a business process.' },
      { id: 'C', text: 'Stakeholders with specialized knowledge of solution implementation.' },
      { id: 'D', text: 'Stakeholders who define and enforce standards.' }
    ],
    answer: 'B',
    explanation: 'Gli end user interagiscono direttamente con la soluzione e includono tutti i partecipanti a un processo di business o chi usa il prodotto. {A} è Operational Support, {C} l\'Implementation SME, {D} il Regulator.'
  },
  {
    id: 'D7-13', style: 'applied', domain: 7, activity: '7.2', type: 'situational',
    source: 'BABOK Guide, 3.2 Plan Stakeholder Engagement',
    stem: 'Where can a business analysis professional look to identify stakeholders outside the organization?',
    options: [
      { id: 'A', text: 'Only in the organizational chart.' },
      { id: 'B', text: 'In existing contracts, anticipated vendors, regulatory and governing bodies, shareholders, customers, and suppliers.' },
      { id: 'C', text: 'Only in the list provided by the sponsor.' },
      { id: 'D', text: 'External stakeholders are out of scope for business analysis.' }
    ],
    answer: 'B',
    explanation: 'L\'organigramma e i processi di business sono la fonte iniziale per gli stakeholder interni; per quelli esterni si guarda ai contratti in essere, ai fornitori attesi in base alle relazioni esistenti, agli enti regolatori, e si considerano azionisti, clienti e fornitori. Lo sponsor può indicarne alcuni, ma non è l\'unica fonte.'
  },
  {
    id: 'D7-14', style: 'knowledge', domain: 7, activity: '7.2', type: 'standard',
    source: 'BABOK Guide, 3.2 Plan Stakeholder Engagement',
    stem: 'How often is stakeholder analysis performed?',
    options: [
      { id: 'A', text: 'Once, at the start of the initiative.' },
      { id: 'B', text: 'Repeatedly, as business analysis activities continue.' },
      { id: 'C', text: 'Only when a stakeholder raises a complaint.' },
      { id: 'D', text: 'At each formal governance gate only.' }
    ],
    answer: 'B',
    explanation: 'La stakeholder analysis si esegue ripetutamente man mano che le attività di business analysis proseguono: nuovi stakeholder possono emergere in qualsiasi momento e ruolo, influenza e atteggiamento di quelli noti possono cambiare.'
  },
  {
    id: 'D7-15', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 4.5 Manage Stakeholder Collaboration',
    stem: 'A change is highly visible across the organization and will affect many departments. What does this imply for stakeholder collaboration?',
    options: [
      { id: 'A', text: 'Less attention is needed, since visibility ensures awareness.' },
      { id: 'B', text: 'More attention is directed to managing stakeholder collaboration, the more significant the impact or visibility of the change.' },
      { id: 'C', text: 'Collaboration should be delegated to departmental representatives.' },
      { id: 'D', text: 'Collaboration should be formalized into written approvals only.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK afferma che quanto più è significativo l\'impatto del cambiamento o la sua visibilità nell\'organizzazione, tanta più attenzione va dedicata alla gestione della collaborazione con gli stakeholder, per capitalizzare le reazioni positive e mitigare quelle negative.'
  },
  {
    id: 'D7-16', style: 'knowledge', domain: 7, activity: '7.3', type: 'standard',
    source: 'BABOK Guide, 9.5.1 Facilitation',
    stem: 'How does the BABOK Guide define facilitation?',
    options: [
      { id: 'A', text: 'The skill of moderating discussions within a group so that all participants can effectively articulate their views and recognize differing points of view.' },
      { id: 'B', text: 'The ability to motivate people to work together towards shared goals.' },
      { id: 'C', text: 'The process of leading others to gain knowledge.' },
      { id: 'D', text: 'The ability to change techniques, style, methods, and approach.' }
    ],
    answer: 'A',
    explanation: 'La facilitation è moderare le discussioni di gruppo perché tutti possano esprimere efficacemente il proprio punto di vista e riconoscere e apprezzare quelli altrui. {B} è Leadership and Influencing, {C} Teaching, {D} Adaptability: quattro competenze del cap. 9 facilmente confondibili.'
  },
  {
    id: 'D7-17', style: 'knowledge', domain: 7, activity: '7.4', type: 'standard',
    source: 'BABOK Guide, 9.5.2 Leadership and Influencing',
    stem: 'What does the Leadership and Influencing competency involve?',
    options: [
      { id: 'A', text: 'Assigning tasks and monitoring their completion.' },
      { id: 'B', text: 'Motivating people to act in ways that enable them to work together to achieve shared goals, understanding individual motives, needs, and capabilities.' },
      { id: 'C', text: 'Escalating decisions to the appropriate level of authority.' },
      { id: 'D', text: 'Ensuring tasks are completed on time and to expectations.' }
    ],
    answer: 'B',
    explanation: 'La competenza riguarda il motivare le persone ad agire in modo da lavorare insieme verso obiettivi condivisi; comprendere motivazioni, bisogni e capacità individuali di ciascuno stakeholder e come indirizzarli efficacemente è ciò che la rende possibile. {D} descrive la Personal Accountability.'
  },
  {
    id: 'D7-18', style: 'applied', domain: 7, activity: '7.4', type: 'situational',
    source: 'BABOK Guide, 3.2 Plan Stakeholder Engagement',
    stem: 'A stakeholder has consistently opposed a change in meetings. What is the appropriate use of this observation?',
    options: [
      { id: 'A', text: 'Exclude them from further sessions to avoid delays.' },
      { id: 'B', text: 'Analyse the attitude to understand what may impact their actions and behaviours, and plan collaboration accordingly to mitigate negative reactions.' },
      { id: 'C', text: 'Report the opposition in the project status report.' },
      { id: 'D', text: 'Reduce the weight of their input in prioritization decisions.' }
    ],
    answer: 'B',
    explanation: 'Gli atteggiamenti degli stakeholder possono impattare positivamente o negativamente il cambiamento e vanno analizzati per capire cosa ne guida azioni e comportamenti, così da pianificare collaborazione ed engagement in modo mirato. L\'obiettivo è mitigare o evitare le reazioni negative, non escludere chi dissente.'
  },
  {
    id: 'D7-19', style: 'knowledge', domain: 7, activity: '7.1', type: 'standard',
    source: 'BABOK Guide, 9.4.3 Written Communication',
    stem: 'What does effective written communication require, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'Using the maximum level of formality regardless of audience.' },
      { id: 'B', text: 'An understanding of the audience, since presenting information and ideas requires selecting the correct words.' },
      { id: 'C', text: 'Avoiding models and sketches, which introduce ambiguity.' },
      { id: 'D', text: 'Producing a single document that serves every stakeholder group.' }
    ],
    answer: 'B',
    explanation: 'La comunicazione scritta usa testo, simboli, modelli formali o informali e schizzi per trasmettere informazione, e la comprensione del pubblico è utile per usarla efficacemente, perché presentare informazioni e idee richiede di scegliere le parole corrette. I modelli sono parte della comunicazione scritta, non un\'eccezione ({C}).'
  },
  {
    id: 'D7-20', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 4.5 Manage Stakeholder Collaboration',
    stem: 'A new stakeholder group is identified halfway through an initiative. What should happen?',
    options: [
      { id: 'A', text: 'They are added to the distribution list for status reports.' },
      { id: 'B', text: 'Their role, influence, and relationship to the initiative are analysed, as new stakeholders may be identified at any point.' },
      { id: 'C', text: 'They are deferred to the next initiative, since the stakeholder list is baselined.' },
      { id: 'D', text: 'They are represented by the sponsor to avoid rework.' }
    ],
    answer: 'B',
    explanation: 'Nuovi stakeholder possono essere identificati in qualsiasi momento dell\'iniziativa e, quando emergono, se ne analizzano ruolo, influenza e relazione con l\'iniziativa. Rimandarli ({C}) significa rischiare di scoprire tardi bisogni critici, con la conseguente revisione di attività già svolte.'
  },
  {
    id: 'D7-21', style: 'knowledge', domain: 7, activity: '7.2', type: 'standard',
    source: 'BABOK Guide, 2.4.1 Business Analyst',
    stem: 'What does the BABOK Guide say about the business analyst as a stakeholder?',
    options: [
      { id: 'A', text: 'The business analyst is a neutral observer and not a stakeholder.' },
      { id: 'B', text: 'The business analyst is inherently a stakeholder in all business analysis activities, and may also perform activities falling under another stakeholder role.' },
      { id: 'C', text: 'The business analyst becomes a stakeholder only when they hold approval authority.' },
      { id: 'D', text: 'The business analyst is a stakeholder only in adaptive initiatives.' }
    ],
    answer: 'B',
    explanation: 'Il business analyst è intrinsecamente uno stakeholder in tutte le attività di business analysis: il BABOK presume che sia responsabile della loro esecuzione, e in alcuni casi può anche svolgere attività che ricadono sotto un altro ruolo di stakeholder.'
  },
  {
    id: 'D7-22', style: 'applied', domain: 7, activity: '7.1', type: 'situational',
    source: 'BABOK Guide, 4.4 Communicate Business Analysis Information',
    stem: 'A business analysis professional presents a model and the stakeholders nod, but their later questions reveal they did not understand it. What should the professional do?',
    options: [
      { id: 'A', text: 'Re-send the same model with a written summary attached.' },
      { id: 'B', text: 'Change the method of delivering the information, since stakeholders are not receiving or understanding it, and engage them to gain agreement.' },
      { id: 'C', text: 'Record the misunderstanding as a risk and proceed.' },
      { id: 'D', text: 'Ask the sponsor to instruct the stakeholders to review the material again.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK è esplicito: il metodo di consegna dell\'informazione può dover cambiare se gli stakeholder non la ricevono o non la comprendono, e più forme di comunicazione possono essere necessarie per la stessa informazione. Il professionista li coinvolge per assicurarsi che abbiano capito e agisce sui disaccordi.'
  },
  {
    id: 'D7-23', style: 'knowledge', domain: 7, activity: '7.4', type: 'standard',
    source: 'BABOK Guide, 4.5 Manage Stakeholder Collaboration',
    stem: 'Why are stakeholders described as an important source beyond their approval authority?',
    options: [
      { id: 'A', text: 'They are an important source of needs, constraints, and assumptions.' },
      { id: 'B', text: 'They provide the budget for the initiative.' },
      { id: 'C', text: 'They determine the delivery methodology.' },
      { id: 'D', text: 'They own the traceability model.' }
    ],
    answer: 'A',
    explanation: 'Gli stakeholder detengono vari gradi di influenza e autorità sull\'approvazione dei work product, ma sono anche una fonte importante di need, vincoli e assunzioni. È questa seconda natura a rendere dannose le relazioni deboli, che portano fra l\'altro alla mancata fornitura di informazioni di qualità.'
  },
  {
    id: 'D7-24', style: 'knowledge', domain: 7, activity: '7.3', type: 'standard',
    source: 'BABOK Guide, 9.5.3 Teamwork',
    stem: 'Which statement reflects the Teamwork competency?',
    options: [
      { id: 'A', text: 'Business analysts work independently to preserve objectivity.' },
      { id: 'B', text: 'Business analysts often work as part of a team with other analysts, project managers, stakeholders, and SMEs, and those relationships are critical to success.' },
      { id: 'C', text: 'Teamwork applies only to co-located teams.' },
      { id: 'D', text: 'Teamwork is the responsibility of the project manager.' }
    ],
    answer: 'B',
    explanation: 'Il teamwork riconosce che il business analyst lavora spesso in team con altri analisti, project manager, stakeholder e SME, e che le relazioni con queste figure sono parte critica del successo di qualsiasi progetto o impresa.'
  },
/* ---- Dominio 8, serie B ---- */

  {
    id: 'D8-11', style: 'knowledge', domain: 8, activity: '8.1', type: 'standard',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'What do business goals and objectives describe?',
    options: [
      { id: 'A', text: 'The ends that the organization is seeking to achieve.' },
      { id: 'B', text: 'The means by which the solution will be built.' },
      { id: 'C', text: 'The constraints imposed by the operating environment.' },
      { id: 'D', text: 'The risks associated with the transition.' }
    ],
    answer: 'A',
    explanation: 'Goal e obiettivi descrivono i fini che l\'organizzazione cerca di raggiungere, e possono riguardare sia cambiamenti che si vogliono realizzare sia condizioni attuali che si vogliono mantenere. Il "come" appartiene alla change strategy e al design.'
  },
  {
    id: 'D8-12', style: 'applied', domain: 8, activity: '8.1', type: 'situational',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'A goal reads "increase number of high-revenue customers". The business analysis professional refines it to "increase the number of high-revenue customers in the 30–45 age bracket by 30% within 6 months". What has been done?',
    options: [
      { id: 'A', text: 'The goal has been converted into a more descriptive, granular, and specific objective.' },
      { id: 'B', text: 'The goal has been converted into a business requirement.' },
      { id: 'C', text: 'The goal has been converted into a design.' },
      { id: 'D', text: 'The goal has been replaced by a key performance indicator.' }
    ],
    answer: 'A',
    explanation: 'È l\'esempio riportato dal BABOK: man mano che i goal vengono analizzati sono convertiti in obiettivi più descrittivi, granulari e specifici. Il goal resta qualitativo e di lungo periodo; l\'obiettivo aggiunge misura e orizzonte temporale.'
  },
  {
    id: 'D8-13', style: 'knowledge', domain: 8, activity: '8.2', type: 'standard',
    source: 'BABOK Guide, 8.4 Assess Enterprise Limitations',
    stem: 'How is enterprise culture defined in the BABOK Guide?',
    options: [
      { id: 'A', text: 'The documented policies and procedures of the organization.' },
      { id: 'B', text: 'The deeply rooted beliefs, values, and norms shared by the members of an enterprise, which drive the actions taken even when not directly visible.' },
      { id: 'C', text: 'The organizational chart and reporting structure.' },
      { id: 'D', text: 'The set of tools and technologies the enterprise has adopted.' }
    ],
    answer: 'B',
    explanation: 'La cultura d\'impresa è fatta di credenze, valori e norme profondamente radicate e condivise: pur non essendo direttamente visibili, guidano le azioni dell\'impresa. Per questo l\'assessment culturale fa parte della valutazione dei limiti esterni alla soluzione.'
  },
  {
    id: 'D8-14', style: 'applied', domain: 8, activity: '8.2', type: 'situational',
    source: 'BABOK Guide, 8.4 Assess Enterprise Limitations',
    stem: 'One purpose of a cultural assessment is to identify what?',
    options: [
      { id: 'A', text: 'Whether stakeholders understand the reasons why a solution exists.' },
      { id: 'B', text: 'Whether the solution meets its non-functional requirements.' },
      { id: 'C', text: 'Whether the delivery team followed the chosen methodology.' },
      { id: 'D', text: 'Whether the requirements were approved by the correct authority.' }
    ],
    answer: 'A',
    explanation: 'Fra gli scopi dichiarati dell\'assessment culturale c\'è identificare se gli stakeholder comprendano o meno le ragioni per cui una soluzione esiste. Una soluzione tecnicamente conforme può fallire nel realizzare valore proprio perché quella comprensione manca.'
  },
  {
    id: 'D8-15', style: 'knowledge', domain: 8, activity: '8.3', type: 'standard',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'What is an indicator?',
    options: [
      { id: 'A', text: 'The target value an organization commits to reaching.' },
      { id: 'B', text: 'The result of analysing one or more specific measures for addressing a concern about a need, value, output, activity, or input, displayed in a table or graphical form.' },
      { id: 'C', text: 'A numerical measure collected automatically by a system.' },
      { id: 'D', text: 'A qualitative judgement expressed by a stakeholder.' }
    ],
    answer: 'B',
    explanation: 'L\'indicatore mostra il risultato dell\'analisi di una o più misure specifiche rispetto a una preoccupazione riguardante un need, un valore, un output, un\'attività o un input. Ogni preoccupazione richiede almeno un indicatore per essere misurata adeguatamente, e alcune ne richiedono diversi.'
  },
  {
    id: 'D8-16', style: 'applied', domain: 8, activity: '8.3', type: 'situational',
    source: 'BABOK Guide, 8.2 Analyze Performance Measures',
    stem: 'Data has been collected for six months but nobody has drawn any conclusion from it. Which task has not been performed?',
    options: [
      { id: 'A', text: 'Measure Solution Performance' },
      { id: 'B', text: 'Analyze Performance Measures' },
      { id: 'C', text: 'Assess Enterprise Limitations' },
      { id: 'D', text: 'Define Future State' }
    ],
    answer: 'B',
    explanation: 'Raccogliere i dati è Measure Solution Performance (8.1); trasformarli in insight sulla prestazione della soluzione rispetto al valore che porta è Analyze Performance Measures (8.2). Dati senza analisi non producono alcuna decisione: è la distinzione che la domanda mette alla prova.'
  },
  {
    id: 'D8-17', style: 'knowledge', domain: 8, activity: '8.4', type: 'standard',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'What must a business analyst consider when establishing an indicator?',
    options: [
      { id: 'A', text: 'Its source, method of collection, collector, and the cost, frequency, and difficulty of collection.' },
      { id: 'B', text: 'Only whether the data is already available in a system.' },
      { id: 'C', text: 'Only whether the sponsor finds the indicator convincing.' },
      { id: 'D', text: 'Only the statistical significance of the sample.' }
    ],
    answer: 'A',
    explanation: 'Il BABOK elenca fonte, metodo di raccolta, chi raccoglie, costo, frequenza e difficoltà della raccolta. Le fonti secondarie possono essere le più economiche, ma per soddisfare le altre caratteristiche di un buon indicatore può servire ricerca primaria come survey o interviste.'
  },
  {
    id: 'D8-18', style: 'applied', domain: 8, activity: '8.4', type: 'situational',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'A proposed indicator would require a costly monthly audit to collect. Which characteristic of a good indicator is at risk?',
    options: [
      { id: 'A', text: 'Clear' },
      { id: 'B', text: 'Economical' },
      { id: 'C', text: 'Trustworthy and credible' },
      { id: 'D', text: 'Relevant' }
    ],
    answer: 'B',
    explanation: 'Economical significa disponibile a un costo ragionevole. Un indicatore può essere chiaro, rilevante e credibile e restare comunque inutilizzabile perché troppo costoso da raccogliere con la frequenza richiesta: in quel caso si valuta l\'uso di un proxy.'
  },
  {
    id: 'D8-19', style: 'knowledge', domain: 8, activity: '8.2', type: 'standard',
    source: 'BABOK Guide, 8.3 Assess Solution Limitations',
    stem: 'When a solution consistently or repeatedly produces ineffective outputs, what is performed?',
    options: [
      { id: 'A', text: 'Problem analysis, in order to identify the source of the problem.' },
      { id: 'B', text: 'A new elicitation cycle with all stakeholders.' },
      { id: 'C', text: 'An enterprise culture assessment.' },
      { id: 'D', text: 'A re-approval of the original requirements.' }
    ],
    answer: 'A',
    explanation: 'Quando si determina che la soluzione produce output inefficaci in modo costante o ripetuto si esegue problem analysis per identificare la fonte del problema. L\'assessment culturale ({C}) appartiene invece ai limiti esterni alla soluzione.'
  },
  {
    id: 'D8-20', style: 'knowledge', domain: 8, activity: '8.1', type: 'standard',
    source: 'BABOK Guide, 6.2 Define Future State',
    stem: 'Which of the following is given as an example of a business goal?',
    options: [
      { id: 'A', text: 'Reduce the average handling time per ticket to under 4 minutes by Q3.' },
      { id: 'B', text: 'Create a new capability such as a new product or service, or address a competitive disadvantage.' },
      { id: 'C', text: 'Deploy the new platform to all regions by December.' },
      { id: 'D', text: 'Migrate the customer database without data loss.' }
    ],
    answer: 'B',
    explanation: 'Fra gli esempi di business goal il BABOK cita: creare una nuova capability, affrontare uno svantaggio competitivo o crearne uno nuovo, migliorare i ricavi, aumentare la soddisfazione di clienti e dipendenti, conformarsi a nuove regolamentazioni, migliorare la sicurezza, ridurre il time to market. Le altre opzioni sono obiettivi o attività, misurabili e datate.'
  },
  {
    id: 'D8-21', style: 'applied', domain: 8, activity: '8.3', type: 'situational',
    source: 'BABOK Guide, 4.4 Communicate Business Analysis Information',
    stem: 'A business analysis professional must report to executives how a solution is performing against business goals. What should guide the format of the report?',
    options: [
      { id: 'A', text: 'The level of technical detail available, to demonstrate rigour.' },
      { id: 'B', text: 'The audience: information should be expressed in language, tone, and style appropriate to them.' },
      { id: 'C', text: 'The organization\'s document template, regardless of audience.' },
      { id: 'D', text: 'The preferences of the delivery team who produced the data.' }
    ],
    answer: 'B',
    explanation: 'L\'activity statement 8.3 dell\'ECBA parla di descrivere come le soluzioni raggiungono i goal di business e trasmettere l\'informazione in modo efficace: vale la regola di Communicate Business Analysis Information, cioè esprimere l\'informazione con linguaggio, tono e stile appropriati al pubblico.'
  },
  {
    id: 'D8-22', style: 'knowledge', domain: 8, activity: '8.4', type: 'standard',
    source: 'BABOK Guide, 10.28 Metrics and Key Performance Indicators (KPIs)',
    stem: 'Which statement about indicators over time is correct?',
    options: [
      { id: 'A', text: 'Once validated, an indicator should not be changed, to preserve comparability.' },
      { id: 'B', text: 'Weaknesses in some indicators can be identified over time and improved.' },
      { id: 'C', text: 'Indicators should be replaced at every reporting cycle.' },
      { id: 'D', text: 'Indicators are set by the vendor and cannot be modified.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK nota che nel tempo si possono individuare le debolezze di alcuni indicatori e migliorarli; conta anche l\'interesse degli stakeholder, perché certi indicatori aiutano a performare o migliorare più di altri. Un indicatore non è intoccabile ({A}) né usa e getta ({C}).'
  },
  {
    id: 'D8-23', style: 'applied', domain: 8, activity: '8.2', type: 'situational',
    source: 'BABOK Guide, 8.3 e 8.4',
    stem: 'A solution underperforms because a legacy system it depends on is slow, and that legacy system is part of the solution scope. How is this classified?',
    options: [
      { id: 'A', text: 'A solution limitation, being a factor internal to the solution restricting value realization.' },
      { id: 'B', text: 'An enterprise limitation, being external to the solution.' },
      { id: 'C', text: 'A risk, to be assessed before the transition.' },
      { id: 'D', text: 'A constraint imposed by a regulator.' }
    ],
    answer: 'A',
    explanation: 'Se il sistema legacy rientra nello scope della soluzione, il fattore che ne limita il valore è interno: è un solution limitation (8.3), tipicamente una dipendenza fra componenti. Fosse stato fuori scope — cultura, struttura o policy aziendali — sarebbe stato un enterprise limitation (8.4).'
  },
  {
    id: 'D8-24', style: 'knowledge', domain: 8, activity: '8.1', type: 'standard',
    source: 'BABOK Guide, 8.1 Measure Solution Performance',
    stem: 'What are quantitative measures?',
    options: [
      { id: 'A', text: 'Numerical, countable, or finite measures, usually involving amounts, quantities, or rates.' },
      { id: 'B', text: 'Subjective measures reflecting attitudes and perceptions.' },
      { id: 'C', text: 'Measures that can only be collected after implementation.' },
      { id: 'D', text: 'Measures derived from the requirements documentation.' }
    ],
    answer: 'A',
    explanation: 'Le misure quantitative sono numeriche, contabili o finite e riguardano tipicamente importi, quantità o tassi; quelle qualitative ({B}) sono soggettive e includono atteggiamenti e percezioni. Le misure di prestazione possono essere quantitative, qualitative o entrambe, a seconda del valore che si misura.'
  },

  /* ---- Dominio 9, serie B ---- */

  {
    id: 'D9-11', style: 'knowledge', domain: 9, activity: '9.1', type: 'standard',
    source: 'BABOK Guide, 4.3 Confirm Elicitation Results',
    stem: 'What is the risk of committing resources to business analysis activities based on unconfirmed elicitation results?',
    options: [
      { id: 'A', text: 'The traceability model becomes invalid.' },
      { id: 'B', text: 'Stakeholder expectations may not be met.' },
      { id: 'C', text: 'The requirements cannot be prioritized.' },
      { id: 'D', text: 'The change strategy must be re-approved.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK avverte che impegnare risorse su risultati non confermati può significare che le aspettative degli stakeholder non vengano soddisfatte. È il motivo per cui la conferma precede l\'impiego dell\'informazione, anche se è una revisione leggera.'
  },
  {
    id: 'D9-12', style: 'applied', domain: 9, activity: '9.1', type: 'situational',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'A requirement is written in terminology that only the finance department understands, and other stakeholders cannot follow it. Which quality characteristic is compromised?',
    options: [
      { id: 'A', text: 'Understandable' },
      { id: 'B', text: 'Atomic' },
      { id: 'C', text: 'Feasible' },
      { id: 'D', text: 'Consistent' }
    ],
    answer: 'A',
    explanation: 'Understandable significa rappresentato usando terminologia comune, comprensibile a chi deve usare il requisito. La qualità è determinata in ultima analisi dai bisogni degli stakeholder che useranno i requisiti o i design: se non li capiscono, il requisito non serve al suo scopo.'
  },
  {
    id: 'D9-13', style: 'knowledge', domain: 9, activity: '9.2', type: 'standard',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'What does the quality characteristic "feasible" mean?',
    options: [
      { id: 'A', text: 'That the requirement has already been implemented elsewhere.' },
      { id: 'B', text: 'That it is reasonable and possible within the agreed risk, schedule, and budget, or feasible enough to investigate further through experiments or prototypes.' },
      { id: 'C', text: 'That the requirement carries no technical risk.' },
      { id: 'D', text: 'That the delivery team has estimated it.' }
    ],
    answer: 'B',
    explanation: 'Feasible non significa privo di rischio ({C}): significa ragionevole e possibile entro rischio, tempi e budget concordati, oppure abbastanza fattibile da meritare un\'indagine ulteriore tramite esperimenti o prototipi.'
  },
  {
    id: 'D9-14', style: 'applied', domain: 9, activity: '9.2', type: 'situational',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'A requirement must be implemented to satisfy a legal obligation. How does this affect prioritization?',
    options: [
      { id: 'A', text: 'It is treated like any other requirement, ranked by benefit.' },
      { id: 'B', text: 'Regulatory or policy demands imposed on the organization may take precedence over other stakeholder interests.' },
      { id: 'C', text: 'It is removed from prioritization and handled by the legal department.' },
      { id: 'D', text: 'It is deprioritized until the deadline approaches.' }
    ],
    answer: 'B',
    explanation: 'Sotto il fattore "penalty" il BABOK include la prioritizzazione dei requisiti per soddisfare obblighi normativi o di policy imposti all\'organizzazione, che possono prevalere sugli altri interessi degli stakeholder. La compliance è un criterio di prioritizzazione, non un percorso separato.'
  },
  {
    id: 'D9-15', style: 'knowledge', domain: 9, activity: '9.3', type: 'standard',
    source: 'BABOK Guide, 9.6.2 Business Analysis Tools and Technology',
    stem: 'What capabilities do tools specific to the field of business analysis provide?',
    options: [
      { id: 'A', text: 'Modelling, diagramming, documenting, analyzing and mapping requirements, identifying relationships between requirements, and tracking and storing requirements artifacts.' },
      { id: 'B', text: 'Managing project schedules, budgets, and resource allocation.' },
      { id: 'C', text: 'Automated testing and continuous integration.' },
      { id: 'D', text: 'Payroll, procurement, and human resources administration.' }
    ],
    answer: 'A',
    explanation: 'Sono le capacità elencate al punto 9.6.2. Da distinguere dagli office productivity tools (9.6.1), che servono a organizzare, analizzare e comunicare informazioni in generale, e dai communication tools (9.6.3), che supportano interazioni conversazionali e collaborative con team virtuali e co-locati.'
  },
  {
    id: 'D9-16', style: 'applied', domain: 9, activity: '9.3', type: 'situational',
    source: 'BABOK Guide, 9.3.2 Industry Knowledge',
    stem: 'Before proposing changes, a business analysis professional studies current trends, market forces, key processes, customer segments, and regulations in the sector. Which underlying competency is this?',
    options: [
      { id: 'A', text: 'Organization Knowledge' },
      { id: 'B', text: 'Industry Knowledge' },
      { id: 'C', text: 'Solution Knowledge' },
      { id: 'D', text: 'Business Acumen' }
    ],
    answer: 'B',
    explanation: 'Industry knowledge è la comprensione di trend, forze e driver di mercato, processi chiave, servizi, prodotti, definizioni, segmenti di clientela, fornitori, pratiche e regolamentazioni del settore, e di come l\'azienda vi si posiziona. Organization knowledge guarda invece dentro l\'impresa.'
  },
  {
    id: 'D9-17', style: 'knowledge', domain: 9, activity: '9.4', type: 'standard',
    source: 'BABOK Guide, 9.3.5 Methodology Knowledge',
    stem: 'What do methodologies determine, according to the BABOK Guide?',
    options: [
      { id: 'A', text: 'The timing, the approach, the role of those involved, and the accepted risk level of how a change is approached and managed.' },
      { id: 'B', text: 'The financial return expected from the change.' },
      { id: 'C', text: 'The stakeholders who must approve the requirements.' },
      { id: 'D', text: 'The technical architecture of the solution.' }
    ],
    answer: 'A',
    explanation: 'Le metodologie determinano il timing (grandi passi o piccoli incrementi), l\'approccio, il ruolo dei coinvolti, il livello di rischio accettato e altri aspetti di come un cambiamento viene affrontato e gestito. Le organizzazioni le adottano o le creano per adattarle a cultura, maturità, adattabilità, rischio, incertezza e governance.'
  },
  {
    id: 'D9-18', style: 'applied', domain: 9, activity: '9.4', type: 'situational',
    source: 'BABOK Guide, 10.32 Organizational Modelling',
    stem: 'A business analysis professional needs to document which units exist, who reports to whom, and how those structures align with organizational goals. Which technique applies?',
    options: [
      { id: 'A', text: 'Organizational Modelling' },
      { id: 'B', text: 'Business Capability Analysis' },
      { id: 'C', text: 'Stakeholder List, Map, or Personas' },
      { id: 'D', text: 'Scope Modelling' }
    ],
    answer: 'A',
    explanation: 'L\'organizational modelling descrive ruoli, responsabilità e strutture di riporto esistenti in un\'organizzazione e le allinea agli obiettivi organizzativi. La stakeholder map ({C}) analizza invece caratteristiche e influenza degli stakeholder rispetto a una specifica iniziativa.'
  },
  {
    id: 'D9-19', style: 'knowledge', domain: 9, activity: '9.1', type: 'standard',
    source: 'BABOK Guide, 10.18 Document Analysis',
    stem: 'What can Document Analysis elicit?',
    options: [
      { id: 'A', text: 'Business analysis information, including contextual understanding and requirements, by examining available materials describing the business environment or existing organizational assets.' },
      { id: 'B', text: 'The attitudes and perceptions of stakeholders towards a change.' },
      { id: 'C', text: 'Information that cannot be known without a controlled test.' },
      { id: 'D', text: 'The relative priority stakeholders assign to each requirement.' }
    ],
    answer: 'A',
    explanation: 'Document analysis esamina materiali disponibili che descrivono l\'ambiente di business o gli asset organizzativi esistenti. {C} descrive gli experiments, un tipo diverso di elicitation: la document analysis non può rivelare ciò che non è ancora stato scritto da nessuna parte.'
  },
  {
    id: 'D9-20', style: 'knowledge', domain: 9, activity: '9.2', type: 'situational',
    source: 'BABOK Guide, 6.1 Analyze Current State',
    stem: 'Why does understanding the current state matter before defining constraints on a change?',
    options: [
      { id: 'A', text: 'Because the current state description is required for governance approval.' },
      { id: 'B', text: 'Because it reveals what would be directly or indirectly affected by the change, including policies, technology, and external influencers.' },
      { id: 'C', text: 'Because constraints can only be identified by the regulator.' },
      { id: 'D', text: 'Because the current state determines the delivery methodology.' }
    ],
    answer: 'B',
    explanation: 'Analyze Current State serve a capire perché l\'impresa deve cambiare e cosa ne sarebbe toccato, direttamente o indirettamente. Policy, tecnologia, cultura, struttura e influencer esterni emergono qui, ed è da questa comprensione che si riconoscono i vincoli reali entro cui adattare i piani.'
  },
  {
    id: 'D9-21', style: 'knowledge', domain: 9, activity: '9.3', type: 'standard',
    source: 'BABOK Guide, 9.6.3 Communication Tools and Technology',
    stem: 'What are communication tools used for?',
    options: [
      { id: 'A', text: 'To plan and complete tasks related to conversational and collaborative interactions, allowing work with virtual and co-located teams.' },
      { id: 'B', text: 'To model and diagram requirements.' },
      { id: 'C', text: 'To track defects found during testing.' },
      { id: 'D', text: 'To calculate the financial return of design options.' }
    ],
    answer: 'A',
    explanation: 'I communication tools servono a pianificare e completare i compiti legati alle interazioni conversazionali e collaborative e consentono di lavorare con team virtuali e co-locati; conoscerne le opzioni e saperli usare è parte della competenza. Modellare e diagrammare ({B}) rientra nei business analysis tools.'
  },
  {
    id: 'D9-22', style: 'applied', domain: 9, activity: '9.4', type: 'situational',
    source: 'BABOK Guide, 9.3.1 Business Acumen',
    stem: 'A business analysis professional moving to a new employer recognizes that the legal, finance, and supply chain practices resemble those of their previous organization, and applies that experience. Which competency is at work?',
    options: [
      { id: 'A', text: 'Business Acumen' },
      { id: 'B', text: 'Organization Knowledge' },
      { id: 'C', text: 'Methodology Knowledge' },
      { id: 'D', text: 'Solution Knowledge' }
    ],
    answer: 'A',
    explanation: 'Business acumen è la capacità di comprendere i business need usando esperienza e conoscenza acquisite in altre situazioni: le organizzazioni condividono spesso pratiche simili — requisiti legali e regolatori, finanza, logistica, vendite, marketing, supply chain, risorse umane, tecnologia — e la competenza sta nell\'applicare quella conoscenza comune.'
  },
  {
    id: 'D9-23', style: 'knowledge', domain: 9, activity: '9.1', type: 'standard',
    source: 'BABOK Guide, 7.2 Verify Requirements',
    stem: 'Who ultimately determines the quality of a requirement?',
    options: [
      { id: 'A', text: 'The business analyst who wrote it.' },
      { id: 'B', text: 'The needs of the stakeholders who will use the requirement or design.' },
      { id: 'C', text: 'The governance body that approves it.' },
      { id: 'D', text: 'The testing team that verifies it.' }
    ],
    answer: 'B',
    explanation: 'Il BABOK apre l\'elenco delle caratteristiche di qualità precisando che la qualità è in ultima analisi determinata dai bisogni degli stakeholder che useranno i requisiti o i design. Le caratteristiche sono una guida, non un criterio assoluto slegato dall\'uso.'
  },
  {
    id: 'D9-24', style: 'knowledge', domain: 9, activity: '9.2', type: 'standard',
    source: 'BABOK Guide, 5.3 Prioritize Requirements',
    stem: 'Which prioritization factor refers to the likelihood that a requirement will still change?',
    options: [
      { id: 'A', text: 'Stability' },
      { id: 'B', text: 'Risk' },
      { id: 'C', text: 'Time sensitivity' },
      { id: 'D', text: 'Cost' }
    ],
    answer: 'A',
    explanation: 'La stability riguarda quanto è probabile che il requisito cambi ancora: lavorare su un requisito instabile rischia di produrre rilavorazione. Il risk è invece la possibilità che il requisito non porti il valore atteso o non sia realizzabile affatto — due incertezze diverse, che l\'esame accosta volentieri.'
  },
/* ============================================================
     Domande in stile ECBA sample question: scenario di lavoro,
     giudizio professionale, opzioni tutte plausibili.
     Domini 1-3.
     ============================================================ */

  { id: 'A1-01', style: 'applied', domain: 1, activity: '1.1', type: 'situational',
    source: 'The Business Analysis Standard, 2.1',
    stem: 'A project manager asks you to "just write down what the developers need to build". What is the MOST appropriate response?',
    options: [
      { id: 'A', text: 'Produce the technical specification as requested, since the delivery team is blocked without it.' },
      { id: 'B', text: 'Clarify the need behind the request first, then determine what representation will deliver value.' },
      { id: 'C', text: 'Explain that writing specifications is outside the business analysis role.' },
      { id: 'D', text: 'Ask the developers to document their own requirements from the existing system.' }
    ], answer: 'B',
    explanation: 'Business analysis definisce i need e raccomanda soluzioni che portano valore: partire dal need, non dal formato dell\'artefatto, è ciò che rende utile il lavoro. Rifiutare il compito ({C}) o delegarlo ({D}) non affronta la richiesta.' },

  { id: 'A1-02', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.2-2.3',
    stem: 'You have documented the problem, the people affected and the proposed solution, but the initiative keeps stalling on unexpected regulatory issues. Which BACCM concept did the analysis MOST likely neglect?',
    options: [
      { id: 'A', text: 'Value' },
      { id: 'B', text: 'Change' },
      { id: 'C', text: 'Context' },
      { id: 'D', text: 'Stakeholder' }
    ], answer: 'C',
    explanation: 'Regolamenti e circostanze ambientali appartengono al Context. Il BACCM serve anche a controllare la completezza dell\'analisi: un concetto non esplorato è dove nascono le sorprese.' },

  { id: 'A1-03', style: 'applied', domain: 1, activity: '1.2', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'Six months after a successful system rollout, a department reports that a report they depended on no longer exists. What should you conclude FIRST?',
    options: [
      { id: 'A', text: 'The change has created a new need by altering the value delivered by existing solutions.' },
      { id: 'B', text: 'The original requirements were incomplete and should be re-approved.' },
      { id: 'C', text: 'The department failed to participate in the elicitation activities.' },
      { id: 'D', text: 'The solution should be rolled back until the report is restored.' }
    ], answer: 'A',
    explanation: 'Nel BACCM anche i change generano need, riducendo o aumentando il valore erogato dalle soluzioni esistenti. Riconoscerlo apre l\'analisi; incolpare l\'elicitation ({C}) o tornare indietro ({D}) la chiude.' },

  { id: 'A1-04', style: 'applied', domain: 1, activity: '1.3', type: 'situational',
    source: 'The Business Analysis Standard, 2.4',
    stem: 'Customers repeatedly complain about late deliveries. Your team proposes adding a tracking notification. What should you do FIRST?',
    options: [
      { id: 'A', text: 'Prototype the notification so stakeholders can see it quickly.' },
      { id: 'B', text: 'Estimate the cost and benefit of the notification feature.' },
      { id: 'C', text: 'Investigate why deliveries are late before evaluating any solution.' },
      { id: 'D', text: 'Survey customers to confirm that notifications would satisfy them.' }
    ], answer: 'C',
    explanation: 'Problem understanding: la business analysis va oltre i sintomi e indaga le cause sottostanti. Una notifica informa il cliente del ritardo ma non lo elimina: valutarla prima di capire la causa rischia di risolvere il problema sbagliato.' },

  { id: 'A1-05', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.2',
    stem: 'A sponsor dismisses a proposed initiative because "it produces no measurable return". The initiative would reduce the risk of a costly compliance breach. What is the BEST response?',
    options: [
      { id: 'A', text: 'Accept the decision, since value must be demonstrable to justify investment.' },
      { id: 'B', text: 'Explain that value can also be preserved by mitigating losses, risks and costs, and quantify the exposure avoided.' },
      { id: 'C', text: 'Reframe the initiative as a revenue-generating opportunity to secure approval.' },
      { id: 'D', text: 'Escalate the decision to the compliance function for enforcement.' }
    ], answer: 'B',
    explanation: 'Il valore può essere realized attraverso guadagni oppure preserved mitigando perdite, rischi e costi. Riformulare artificiosamente l\'iniziativa ({C}) sarebbe disonesto e comunque fragile.' },

  { id: 'A1-06', style: 'applied', domain: 1, activity: '1.4', type: 'situational',
    source: 'The Business Analysis Standard, 2.5',
    stem: 'An executive asks when the organization will start seeing value from an eighteen-month programme. Which answer is MOST accurate?',
    options: [
      { id: 'A', text: 'Value will be measurable once all deliverables are complete and adopted.' },
      { id: 'B', text: 'Value is discovered throughout, as benefits are delivered along the way.' },
      { id: 'C', text: 'Value can only be confirmed in the financial year following implementation.' },
      { id: 'D', text: 'Value depends on adoption and therefore cannot be forecast reliably.' }
    ], answer: 'B',
    explanation: 'Il valore si scopre lungo tutta l\'iniziativa, man mano che i benefici vengono erogati nel modo più efficiente ed efficace possibile. Trattarlo come evento finale è l\'errore concettuale che la domanda mette alla prova.' },

  { id: 'A2-01', style: 'applied', domain: 2, activity: '2.1', type: 'situational',
    source: 'The Business Analysis Standard, 3.1',
    stem: 'You join an initiative where nobody can say precisely what needs to be done. What is the MOST appropriate way to proceed?',
    options: [
      { id: 'A', text: 'Request that requirements be defined before analysis work begins.' },
      { id: 'B', text: 'Impose a predictive approach to force clarity onto the initiative.' },
      { id: 'C', text: 'Start work, adapting techniques and approach to what the situation reveals.' },
      { id: 'D', text: 'Escalate to the sponsor that the initiative is not ready to start.' }
    ], answer: 'C',
    explanation: 'Lo Standard descrive esattamente le situazioni in cui sapere cosa fare è impossibile, e indica che abitudini, atteggiamenti e pratiche servono a navigarle con sicurezza. Attendere la certezza ({A}, {D}) non la produce.' },

  { id: 'A2-02', style: 'applied', domain: 2, activity: '2.2', type: 'situational',
    source: 'The Business Analysis Standard, 3.2',
    stem: 'You discover that a requirement approved last month rests on an assumption you now know is wrong. The sponsor championed it personally. What should you do FIRST?',
    options: [
      { id: 'A', text: 'Raise the issue openly, explaining what changed and what it implies.' },
      { id: 'B', text: 'Collect further evidence before mentioning it to anyone.' },
      { id: 'C', text: 'Let the requirement proceed and correct course at the next review.' },
      { id: 'D', text: 'Discuss it privately with the delivery team to gauge the impact.' }
    ], answer: 'A',
    explanation: 'Courage è uno dei valori condivisi, e vale proprio quando sollevare un problema è scomodo. Raccogliere altre evidenze ({B}) è ragionevole solo se non ritarda una comunicazione già dovuta.' },

  { id: 'A2-03', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'Your team produces a detailed weekly status document that, you discover, nobody reads. Which action BEST reflects the business analysis principles?',
    options: [
      { id: 'A', text: 'Keep producing it, since governance may require it later.' },
      { id: 'B', text: 'Shorten the document to reduce the effort it takes.' },
      { id: 'C', text: 'Stop producing it and confirm with stakeholders what they actually need.' },
      { id: 'D', text: 'Move it to a shared folder so those interested can find it.' }
    ], answer: 'C',
    explanation: 'Avoid waste: identificare le attività che non contribuiscono a soddisfare il need e rimuoverle. Abbreviare ({B}) o riposizionare ({D}) riduce lo spreco ma non lo elimina.' },

  { id: 'A2-04', style: 'applied', domain: 2, activity: '2.3', type: 'situational',
    source: 'The Business Analysis Standard, 3.3',
    stem: 'Two departments disagree about how a refund rule should behave, and the discussion keeps going in circles. Which approach is MOST likely to resolve it?',
    options: [
      { id: 'A', text: 'Bring three concrete refund cases and walk through what should happen in each.' },
      { id: 'B', text: 'Ask each department to submit its position in writing for comparison.' },
      { id: 'C', text: 'Escalate to a manager empowered to decide between the two positions.' },
      { id: 'D', text: 'Implement both behaviours behind a configuration option.' }
    ], answer: 'A',
    explanation: 'Get real using examples: gli esempi concreti costruiscono comprensione condivisa e servono anche a derivare acceptance criteria. Una decisione imposta ({C}) chiude la discussione senza produrre comprensione.' },

  { id: 'A2-05', style: 'applied', domain: 2, activity: '2.4', type: 'situational',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'A workshop has stalled: two groups are talking past each other and time is running out. Which competency should you draw on FIRST?',
    options: [
      { id: 'A', text: 'Systems Thinking, to show how the two positions affect the whole' },
      { id: 'B', text: 'Facilitation, to help both groups articulate and recognize each other\'s views' },
      { id: 'C', text: 'Problem Solving, to identify the root cause of the disagreement' },
      { id: 'D', text: 'Adaptability, to change the format of the session' }
    ], answer: 'B',
    explanation: 'La facilitation è moderare le discussioni perché tutti esprimano efficacemente il proprio punto di vista e riconoscano quelli altrui: è la risposta immediata a una sessione bloccata. Le altre competenze aiuterebbero dopo.' },

  { id: 'A2-06', style: 'applied', domain: 2, activity: '2.4', type: 'situational',
    source: 'The Business Analysis Standard, 3.4',
    stem: 'You prefer detailed written specifications, but the team you have joined works through conversation and lightweight models. What is the MOST appropriate response?',
    options: [
      { id: 'A', text: 'Propose adopting written specifications, explaining the traceability benefits.' },
      { id: 'B', text: 'Maintain your own detailed documents privately alongside the team\'s practice.' },
      { id: 'C', text: 'Adjust your style to the team\'s way of working while watching for real gaps.' },
      { id: 'D', text: 'Ask the sponsor which documentation standard should apply.' }
    ], answer: 'C',
    explanation: 'Adaptability è la capacità di cambiare tecniche, stile, metodi e approccio, interagendo nel modo preferibile per gli stakeholder. Tenere documenti paralleli ({B}) duplica il lavoro senza allinearsi al team.' },

  { id: 'A3-01', style: 'applied', domain: 3, activity: '3.2', type: 'situational',
    source: 'The Business Analysis Standard, 4.2',
    stem: 'An initiative addresses a poorly defined challenge in a domain nobody has worked in before. Which approach is MOST appropriate?',
    options: [
      { id: 'A', text: 'Predictive, so that the uncertainty is resolved through detailed up-front planning.' },
      { id: 'B', text: 'Adaptive, delivering in increments and letting the needs emerge as work proceeds.' },
      { id: 'C', text: 'Predictive, because the organization must know the total cost before committing.' },
      { id: 'D', text: 'Postpone the initiative until the challenge can be defined precisely.' }
    ], answer: 'B',
    explanation: 'L\'approccio adattivo è indicato per need complessi, sfide mal definite, incertezza e bisogni emergenti durante la costruzione. Pianificare in dettaglio ciò che non si conosce ({A}, {C}) produce piani, non conoscenza.' },

  { id: 'A3-02', style: 'applied', domain: 3, activity: '3.2', type: 'situational',
    source: 'The Business Analysis Standard, 4.2',
    stem: 'The programme office has mandated a predictive approach for an initiative you consider better suited to an adaptive one. What should you do?',
    options: [
      { id: 'A', text: 'Follow the mandate and focus on creating value within that approach.' },
      { id: 'B', text: 'Apply adaptive practices informally while reporting against the mandated plan.' },
      { id: 'C', text: 'Decline to proceed until the approach can be reconsidered.' },
      { id: 'D', text: 'Escalate to the sponsor to have the mandate overturned before starting.' }
    ], answer: 'A',
    explanation: 'Lo Standard riconosce che a volte l\'approccio è imposto al team, e l\'aspettativa è saper creare valore con qualunque approccio. Lavorare in un modo e riportare in un altro ({B}) mina la trasparenza.' },

  { id: 'A3-03', style: 'applied', domain: 3, activity: '3.4', type: 'situational',
    source: 'The Business Analysis Standard, 4.4',
    stem: 'A stakeholder sends you a screen mock-up and asks you to "add it to the requirements". What is the MOST appropriate action?',
    options: [
      { id: 'A', text: 'Add it as written, since it expresses what the stakeholder wants.' },
      { id: 'B', text: 'Reject it, because a mock-up is a design and not a requirement.' },
      { id: 'C', text: 'Record it as a design and work back to the need it is meant to satisfy.' },
      { id: 'D', text: 'Forward it to the delivery team as an implementation instruction.' }
    ], answer: 'C',
    explanation: 'Il mock-up è una rappresentazione di una soluzione, quindi un design; requisiti e design sono interdipendenti e ciclici, e un design può rivelare il need che lo motiva. Rifiutarlo ({B}) butta via informazione utile.' },
/* ---- Domande in stile sample: domini 4-6 ---- */

  { id: 'A4-01', style: 'applied', domain: 4, activity: '4.1', type: 'situational',
    source: 'BABOK Guide, 6.1; Syllabus Map 4.1',
    stem: 'You are asked to analyze why a recently implemented process is underperforming. Which factor should you consider FIRST?',
    options: [
      { id: 'A', text: 'The training and tooling provided to the people who run the process' },
      { id: 'B', text: 'The alignment of the process with the organization\'s business objectives' },
      { id: 'C', text: 'The attitudes of the staff towards the change that introduced it' },
      { id: 'D', text: 'The market conditions that changed since the process was designed' }
    ], answer: 'B',
    explanation: 'L\'allineamento con gli obiettivi di business fornisce il metro rispetto a cui giudicare la prestazione: senza di esso "sottoperformante" non ha un riferimento. Gli altri fattori sono cause possibili, da esaminare dopo aver fissato il termine di paragone.' },

  { id: 'A4-02', style: 'applied', domain: 4, activity: '4.2', type: 'situational',
    source: 'BABOK Guide, 6.1; Syllabus Map 4.2',
    stem: 'Before recommending changes to an order management system, what is the primary objective of analyzing the current state?',
    options: [
      { id: 'A', text: 'Identify the workflows, processes and systems affected, and who is impacted' },
      { id: 'B', text: 'Build a prototype of the future system so stakeholders can react to it' },
      { id: 'C', text: 'Produce a risk register covering the challenges of implementation' },
      { id: 'D', text: 'Determine which managers will use the system once it is in place' }
    ], answer: 'A',
    explanation: 'Analyze Current State serve a capire perché serve il cambiamento e cosa ne sarebbe toccato, direttamente o indirettamente. Prototipi e registri dei rischi vengono dopo, e su una base che questa analisi deve ancora fornire.' },

  { id: 'A4-03', style: 'applied', domain: 4, activity: '4.2', type: 'situational',
    source: 'BABOK Guide, 5.1 e 5.4',
    stem: 'A stakeholder proposes a change late in delivery. You need to establish quickly what else it would affect. What should you use FIRST?',
    options: [
      { id: 'A', text: 'The traceability between requirements, designs and solution components' },
      { id: 'B', text: 'The prioritization ranking agreed with stakeholders' },
      { id: 'C', text: 'The risk register maintained for the initiative' },
      { id: 'D', text: 'The change control log of previously approved changes' }
    ], answer: 'A',
    explanation: 'La tracciabilità esiste proprio per gestire gli effetti di una modifica su un livello sugli elementi correlati: senza di essa l\'impact analysis diventa una ricerca manuale. Gli altri strumenti dicono altro.' },

  { id: 'A4-04', style: 'applied', domain: 4, activity: '4.3', type: 'situational',
    source: 'BABOK Guide, 3.5; Syllabus Map 4.3',
    stem: 'During implementation you notice that a milestone will be missed. Which action is MOST appropriate?',
    options: [
      { id: 'A', text: 'Escalate immediately to senior management with a proposed resolution.' },
      { id: 'B', text: 'Adjust the plan and communicate the revised timeline to stakeholders.' },
      { id: 'C', text: 'Wait for the scheduled milestone review to raise the delay formally.' },
      { id: 'D', text: 'Inform customers of the delay and ask them how to proceed.' }
    ], answer: 'B',
    explanation: 'Ripianificare e comunicare mantiene la gestione proattiva e gli stakeholder informati. Attendere la revisione formale ({C}) sacrifica il tempo utile; l\'escalation immediata ({A}) salta il livello a cui il problema è ancora governabile.' },

  { id: 'A4-05', style: 'applied', domain: 4, activity: '4.4', type: 'situational',
    source: 'BABOK Guide, 8.5; Syllabus Map 4.4',
    stem: 'Measurements show a solution is delivering less value than expected. What should you do NEXT?',
    options: [
      { id: 'A', text: 'Revise the target metrics so they reflect what the solution actually achieves.' },
      { id: 'B', text: 'Understand what is causing the gap between potential and actual value.' },
      { id: 'C', text: 'Recommend replacing the solution with one of the rejected design options.' },
      { id: 'D', text: 'Report the shortfall to the sponsor and await direction.' }
    ], answer: 'B',
    explanation: 'Recommend Actions to Increase Solution Value parte dalla comprensione dei fattori che creano la differenza fra valore potenziale ed effettivo. Ritoccare le metriche ({A}) fa sparire il sintomo, non il problema.' },

  { id: 'A4-06', style: 'applied', domain: 4, activity: '4.1', type: 'situational',
    source: 'BABOK Guide, 6.3',
    stem: 'A migration is planned for a period when two key specialists will be on leave. How should you treat this?',
    options: [
      { id: 'A', text: 'As a risk to assess, because it could reduce the value the change delivers.' },
      { id: 'B', text: 'As a constraint that fixes the migration date.' },
      { id: 'C', text: 'As a resourcing matter for the project manager alone.' },
      { id: 'D', text: 'As an assumption to record and revisit later.' }
    ], answer: 'A',
    explanation: 'Assess Risks guarda alle conseguenze indesiderate di forze interne ed esterne durante la transizione allo stato futuro, e nel BABOK il rischio è legato al valore. L\'indisponibilità è un\'incertezza che può incidere sull\'esito, quindi si valuta come rischio.' },

  { id: 'A5-01', style: 'applied', domain: 5, activity: '5.1', type: 'situational',
    source: 'BABOK Guide, 10.25; Syllabus Map 5.1',
    stem: 'A stakeholder struggles to articulate their needs during a workshop. How should you approach this?',
    options: [
      { id: 'A', text: 'Propose solutions drawn from industry practice to give them something to react to.' },
      { id: 'B', text: 'Arrange a follow-up interview using targeted, clarifying questions.' },
      { id: 'C', text: 'Work with the needs they were able to express and move on.' },
      { id: 'D', text: 'Ask colleagues to describe that stakeholder\'s needs on their behalf.' }
    ], answer: 'B',
    explanation: 'L\'intervista consente domande di approfondimento e permette di esprimere in privato ciò che in pubblico si tace. Far parlare altri al posto suo ({D}) sostituisce la fonte; proporre soluzioni ({A}) le mette in bocca la risposta.' },

  { id: 'A5-02', style: 'applied', domain: 5, activity: '5.2', type: 'situational',
    source: 'BABOK Guide, 4.3; Syllabus Map 5.2',
    stem: 'You have documented the stakeholder needs, but one requirement remains ambiguous. What should you do NEXT?',
    options: [
      { id: 'A', text: 'Submit it for approval and note the ambiguity as an open point.' },
      { id: 'B', text: 'Ask the development team whether it is technically feasible as written.' },
      { id: 'C', text: 'Go back to the stakeholder to refine and confirm it.' },
      { id: 'D', text: 'Remove it from the documentation to avoid downstream confusion.' }
    ], answer: 'C',
    explanation: 'Tornare dagli stakeholder assicura che il requisito sia compreso e corrisponda alle aspettative. Un requisito ambiguo non è testabile: approvarlo ({A}) o valutarne la fattibilità ({B}) prima di chiarirlo sposta l\'ambiguità più a valle.' },

  { id: 'A5-03', style: 'applied', domain: 5, activity: '5.3', type: 'situational',
    source: 'BABOK Guide, 7.3; Syllabus Map 5.3',
    stem: 'Two stakeholder groups have stated needs that cannot both be satisfied. What is the MOST appropriate action at foundational level?',
    options: [
      { id: 'A', text: 'Choose the need of the group with the greater organizational weight.' },
      { id: 'B', text: 'Flag the conflict so it can be reviewed and resolved with the relevant stakeholders.' },
      { id: 'C', text: 'Remove both needs until the groups agree between themselves.' },
      { id: 'D', text: 'Pass both needs to delivery and let the design resolve the tension.' }
    ], answer: 'B',
    explanation: 'L\'activity statement 5.3 chiede di confrontare i bisogni con gli outcome e segnalare i conflitti per la revisione. {A} questo livello si rileva e si segnala: decidere unilateralmente ({A}) o scaricare a valle ({D}) non è il ruolo atteso.' },

  { id: 'A5-04', style: 'applied', domain: 5, activity: '5.4', type: 'situational',
    source: 'BABOK Guide, 5.3; Syllabus Map 5.4',
    stem: 'A requirement is technically difficult and there is genuine doubt it can be delivered at all. Where should it sit in the priority order?',
    options: [
      { id: 'A', text: 'Near the top, to limit the resources spent before discovering it is not viable.' },
      { id: 'B', text: 'Near the bottom, so that achievable work is delivered first.' },
      { id: 'C', text: 'In the middle, balancing its risk against its benefit.' },
      { id: 'D', text: 'Outside the backlog until feasibility has been proven separately.' }
    ], answer: 'A',
    explanation: 'È il criterio "risk": quando la fattibilità tecnica è in dubbio, il requisito più difficile può essere portato in cima proprio per minimizzare le risorse spese prima di scoprire che la soluzione non è realizzabile. Un proof of concept serve allo stesso scopo.' },

  { id: 'A5-05', style: 'applied', domain: 5, activity: '5.1', type: 'situational',
    source: 'BABOK Guide, 4.2',
    stem: 'You need to know whether a novel interface concept will work, but no stakeholder and no document can tell you. What is the MOST appropriate next step?',
    options: [
      { id: 'A', text: 'Run additional workshops until a consensus view emerges.' },
      { id: 'B', text: 'Analyse historical data from comparable systems in the market.' },
      { id: 'C', text: 'Build a proof of concept or prototype and observe the result.' },
      { id: 'D', text: 'Defer the question until after implementation, when it can be measured.' }
    ], answer: 'C',
    explanation: 'Gli experiments servono a identificare informazioni che non si possono conoscere senza un test controllato, perché non sono note a nessuno. Cercare consenso ({A}) produce opinioni, non conoscenza.' },

  { id: 'A5-06', style: 'applied', domain: 5, activity: '5.2', type: 'situational',
    source: 'BABOK Guide, 7.2',
    stem: 'A reviewer objects to the requirement "the report must load quickly". What is the BEST way to address the objection?',
    options: [
      { id: 'A', text: 'Split it into two requirements, one for loading and one for display.' },
      { id: 'B', text: 'Replace "quickly" with a stated threshold under defined conditions.' },
      { id: 'C', text: 'Move it to the non-functional section of the document.' },
      { id: 'D', text: 'Add a note that performance will be tuned after go-live.' }
    ], answer: 'B',
    explanation: '"Quickly" rende il requisito ambiguo e quindi non testabile: non si può stabilire se una soluzione lo soddisfa. Riclassificarlo ({C}) non lo rende verificabile.' },

  { id: 'A6-01', style: 'applied', domain: 6, activity: '6.1', type: 'situational',
    source: 'BABOK Guide, 7.3; Syllabus Map 6.1',
    stem: 'During user acceptance testing a key feature does not behave as expected. What is the FIRST step you should take?',
    options: [
      { id: 'A', text: 'Stop testing so the team can concentrate on the failure.' },
      { id: 'B', text: 'Document the issue and discuss next steps with the implementation team.' },
      { id: 'C', text: 'Escalate to senior management for a decision on how to proceed.' },
      { id: 'D', text: 'Carry on testing and add the feature to the risk register.' }
    ], answer: 'B',
    explanation: 'Documentare e discutere assicura trasparenza e informa le azioni successive: l\'activity statement 6.1 chiede di partecipare alla validazione e registrare le osservazioni. Fermare tutto ({A}) o escalare subito ({C}) salta il passaggio che rende la decisione informata.' },

  { id: 'A6-02', style: 'applied', domain: 6, activity: '6.2', type: 'situational',
    source: 'BABOK Guide, 7.5-7.6; Syllabus Map 6.2',
    stem: 'Three design options have been represented and the sponsor already favours one. What should you do NEXT?',
    options: [
      { id: 'A', text: 'Proceed with the sponsor\'s preference to preserve momentum.' },
      { id: 'B', text: 'Estimate the potential value of each option before recommending one.' },
      { id: 'C', text: 'Verify that each option meets the requirement quality characteristics.' },
      { id: 'D', text: 'Ask the delivery team which option is cheapest to build.' }
    ], answer: 'B',
    explanation: 'Analyze Potential Value and Recommend Solution stima il valore potenziale di ciascuna opzione e stabilisce quale sia la più appropriata. La preferenza dello sponsor è un input, non un sostituto dell\'analisi; il costo da solo ({D}) è una dimensione sola.' },

  { id: 'A6-03', style: 'applied', domain: 6, activity: '6.3', type: 'situational',
    source: 'BABOK Guide, 6.4; Syllabus Map 6.3',
    stem: 'Stakeholders keep adding expectations that the team believes fall outside what was agreed. What is the MOST appropriate response?',
    options: [
      { id: 'A', text: 'Refuse the additions, citing the approved scope statement.' },
      { id: 'B', text: 'Accept them, since stakeholder needs evolve during an initiative.' },
      { id: 'C', text: 'Make the boundaries explicit, then assess each addition against them.' },
      { id: 'D', text: 'Record them in the backlog for a future phase without discussion.' }
    ], answer: 'C',
    explanation: 'Il solution scope definisce i confini e può includere anche ciò che è fuori, per chiarezza; può però evolvere man mano che emergono informazioni. Né il rifiuto rigido ({A}) né l\'accettazione automatica ({B}) valutano l\'aggiunta.' },

  { id: 'A6-04', style: 'applied', domain: 6, activity: '6.4', type: 'situational',
    source: 'BABOK Guide, 8.3',
    stem: 'A reporting solution is fast in every component except one database query, which slows the whole report. What does this MOST directly indicate?',
    options: [
      { id: 'A', text: 'An enterprise limitation arising outside the solution.' },
      { id: 'B', text: 'A solution limitation caused by an internal dependency.' },
      { id: 'C', text: 'A non-functional requirement that was never verified.' },
      { id: 'D', text: 'A risk that should have been identified before implementation.' }
    ], answer: 'B',
    explanation: 'Le soluzioni hanno spesso dipendenze interne che limitano la prestazione dell\'insieme a quella del componente meno efficace: è un solution limitation, interno alla soluzione. Fosse stato un fattore esterno — cultura, policy — sarebbe stato un enterprise limitation.' },

  { id: 'A6-05', style: 'applied', domain: 6, activity: '6.2', type: 'situational',
    source: 'BABOK Guide, 10.38',
    stem: 'While comparing solution options, what is the MOST useful way to treat the uncertainties attached to each?',
    options: [
      { id: 'A', text: 'Exclude the options carrying uncertainty until it has been removed.' },
      { id: 'B', text: 'Identify and evaluate them as risks to the value each option would deliver.' },
      { id: 'C', text: 'Note them in the recommendation for the sponsor to weigh.' },
      { id: 'D', text: 'Assign each option a confidence percentage based on team judgement.' }
    ], answer: 'B',
    explanation: 'Risk Analysis and Management identifica le aree di incertezza che potrebbero incidere negativamente sul valore, le valuta e sviluppa modi per affrontarle. Escludere le opzioni incerte ({A}) eliminerebbe spesso quelle più promettenti.' },

  { id: 'A6-06', style: 'applied', domain: 6, activity: '6.1', type: 'situational',
    source: 'BABOK Guide, 7.3',
    stem: 'The sponsor asks how the organization will know whether the change succeeded. When should the evaluation criteria be defined?',
    options: [
      { id: 'A', text: 'Before implementation, with baseline metrics from the current state.' },
      { id: 'B', text: 'At go-live, when the solution behaviour is finally observable.' },
      { id: 'C', text: 'After a settling period, so the measures are not distorted.' },
      { id: 'D', text: 'Whenever the sponsor requests a formal benefits review.' }
    ], answer: 'A',
    explanation: 'Define Measurable Evaluation Criteria stabilisce metriche di baseline sul current state e metriche target che riflettono gli obiettivi. Senza baseline presa prima, dopo non c\'è modo di dire quanto sia cambiato.' },
/* ---- Domande in stile sample: domini 7-9 ---- */

  { id: 'A7-01', style: 'applied', domain: 7, activity: '7.1', type: 'situational',
    source: 'BABOK Guide, 4.4; Syllabus Map 7.1',
    stem: 'You present a model to stakeholders, who nod along. Their later questions reveal they did not understand it. What should you do NEXT?',
    options: [
      { id: 'A', text: 'Resend the same model with a written summary attached.' },
      { id: 'B', text: 'Change the way you deliver the information and confirm understanding.' },
      { id: 'C', text: 'Record the misunderstanding as a risk and continue as planned.' },
      { id: 'D', text: 'Ask the sponsor to instruct the stakeholders to review the material again.' }
    ], answer: 'B',
    explanation: 'Se gli stakeholder non ricevono o non comprendono, il metodo di consegna va cambiato, e più forme di comunicazione possono servire per la stessa informazione. Rimandare lo stesso artefatto ({A}) ripete ciò che ha già fallito.' },

  { id: 'A7-02', style: 'applied', domain: 7, activity: '7.2', type: 'situational',
    source: 'BABOK Guide, 3.2; Syllabus Map 7.2',
    stem: 'Halfway through an initiative you discover a department that will be significantly affected but was never consulted. What should you do FIRST?',
    options: [
      { id: 'A', text: 'Analyse their role, influence and relationship to the initiative.' },
      { id: 'B', text: 'Add them to the distribution list for status reports.' },
      { id: 'C', text: 'Defer their involvement to the next phase, since the analysis is advanced.' },
      { id: 'D', text: 'Ask the sponsor to represent their interests to avoid rework.' }
    ], answer: 'A',
    explanation: 'Nuovi stakeholder possono emergere in qualsiasi momento e, quando emergono, se ne analizzano ruolo, influenza e relazione con l\'iniziativa. Rimandarli ({C}) è proprio ciò che fa scoprire tardi bisogni critici, con revisione del lavoro già svolto.' },

  { id: 'A7-03', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 4.5; Syllabus Map 7.3',
    stem: 'A stakeholder requests a feature that exceeds the budget and timeline of the initiative. What is the MOST appropriate response?',
    options: [
      { id: 'A', text: 'Approve it and request additional funding from management.' },
      { id: 'B', text: 'Reject it, since it cannot be accommodated within the current scope.' },
      { id: 'C', text: 'Assess its feasibility and recommend a viable alternative.' },
      { id: 'D', text: 'Defer it to a future phase without further discussion.' }
    ], answer: 'C',
    explanation: 'Analizzare la fattibilità e proporre alternative bilancia le aspettative dello stakeholder con i vincoli, mantenendo la relazione. Il rifiuto secco ({B}) e il rinvio silenzioso ({D}) chiudono la conversazione senza esplorare cosa sia realizzabile.' },

  { id: 'A7-04', style: 'applied', domain: 7, activity: '7.4', type: 'situational',
    source: 'BABOK Guide, 3.2; Syllabus Map 7.4',
    stem: 'A stakeholder has consistently opposed the change in every meeting. What is the MOST useful way to act on this?',
    options: [
      { id: 'A', text: 'Reduce their involvement so the sessions can progress.' },
      { id: 'B', text: 'Understand what drives their position and plan engagement accordingly.' },
      { id: 'C', text: 'Report the opposition in the initiative status report.' },
      { id: 'D', text: 'Give less weight to their input in prioritization decisions.' }
    ], answer: 'B',
    explanation: 'Gli atteggiamenti si analizzano per capire cosa incide su azioni e comportamenti, così da pianificare collaborazione ed engagement in modo mirato: l\'obiettivo è mitigare le reazioni negative, non escludere chi dissente.' },

  { id: 'A7-05', style: 'applied', domain: 7, activity: '7.1', type: 'situational',
    source: 'BABOK Guide, 4.4',
    stem: 'You must report on the same initiative to executives, to developers and to end users. What is the BEST approach?',
    options: [
      { id: 'A', text: 'Produce one authoritative document and let each group take what it needs.' },
      { id: 'B', text: 'Tailor the language, tone and level of detail to each audience.' },
      { id: 'C', text: 'Use the most precise technical wording throughout, for consistency.' },
      { id: 'D', text: 'Brief the executives and let them cascade the message downward.' }
    ], answer: 'B',
    explanation: 'L\'informazione va espressa con linguaggio, tono e stile appropriati al pubblico, e più forme di comunicazione possono servire per lo stesso contenuto. Un documento unico ({A}) scarica sul lettore il lavoro di traduzione.' },

  { id: 'A7-06', style: 'applied', domain: 7, activity: '7.3', type: 'situational',
    source: 'BABOK Guide, 4.5',
    stem: 'A key stakeholder has stopped attending sessions and no longer replies. Why does this matter MOST?',
    options: [
      { id: 'A', text: 'Their approval will be needed before the requirements can be baselined.' },
      { id: 'B', text: 'They are a primary source of needs, constraints and assumptions.' },
      { id: 'C', text: 'Their absence will be visible in the initiative\'s governance reporting.' },
      { id: 'D', text: 'Other stakeholders may follow their example and disengage.' }
    ], answer: 'B',
    explanation: 'Gli stakeholder hanno autorità sull\'approvazione, ma sono anche fonte primaria di need, vincoli e assunzioni: il primo effetto elencato di relazioni deboli è la mancata fornitura di informazioni di qualità. L\'approvazione ({A}) è la conseguenza minore.' },

  { id: 'A8-01', style: 'applied', domain: 8, activity: '8.1', type: 'situational',
    source: 'BABOK Guide, 6.2; Syllabus Map 8.1',
    stem: 'A sponsor states the goal as "improve customer satisfaction". What should you do NEXT to make it usable?',
    options: [
      { id: 'A', text: 'Accept it as the business goal and derive requirements directly from it.' },
      { id: 'B', text: 'Convert it into specific, measurable objectives with a timeframe.' },
      { id: 'C', text: 'Ask the sponsor to approve it formally before proceeding.' },
      { id: 'D', text: 'Replace it with a technical target the delivery team can act on.' }
    ], answer: 'B',
    explanation: 'I goal sono qualitativi e continuativi; man mano che vengono analizzati si convertono in obiettivi più descrittivi, granulari e specifici. Senza quel passaggio non esiste un criterio per dire se il cambiamento ha funzionato.' },

  { id: 'A8-02', style: 'applied', domain: 8, activity: '8.2', type: 'situational',
    source: 'BABOK Guide, 8.4; Syllabus Map 8.2',
    stem: 'A new system works exactly as specified, but staff keep using the old spreadsheets because they do not see why it was introduced. How should you classify this barrier?',
    options: [
      { id: 'A', text: 'A solution limitation, since the system has failed to replace the old way of working.' },
      { id: 'B', text: 'An enterprise limitation, to be examined through a cultural assessment.' },
      { id: 'C', text: 'A defect to be logged against the solution requirements.' },
      { id: 'D', text: 'A training gap to be resolved by the implementation team.' }
    ], answer: 'B',
    explanation: 'La soluzione funziona come specificato, quindi il limite non è interno ad essa. Uno degli scopi dichiarati dell\'assessment culturale è capire se gli stakeholder comprendano le ragioni per cui la soluzione esiste.' },

  { id: 'A8-03', style: 'applied', domain: 8, activity: '8.3', type: 'situational',
    source: 'BABOK Guide, 4.4; Syllabus Map 8.3',
    stem: 'Which of the following BEST communicates the value of a new solution to stakeholders?',
    options: [
      { id: 'A', text: 'A report justifying the work hours and resources the project consumed' },
      { id: 'B', text: 'A breakdown of implementation timelines showing deadlines were met' },
      { id: 'C', text: 'A demonstration showing the solution will cut processing costs by 20%' },
      { id: 'D', text: 'A complete list of the technical features the solution provides' }
    ], answer: 'C',
    explanation: 'Quantificare il valore in termini di obiettivi di business è più convincente delle metriche di progetto. Ore spese, rispetto delle scadenze ed elenchi di funzionalità descrivono il progetto o il prodotto, non il beneficio per l\'organizzazione.' },

  { id: 'A8-04', style: 'applied', domain: 8, activity: '8.4', type: 'situational',
    source: 'BABOK Guide, 10.28; Syllabus Map 8.4',
    stem: 'You want to track client satisfaction, but there is no survey in place and running one regularly is not feasible. What is the MOST appropriate action?',
    options: [
      { id: 'A', text: 'Use a proxy such as the proportion of contracts renewed.' },
      { id: 'B', text: 'Track an internal measure such as tickets closed per week instead.' },
      { id: 'C', text: 'Defer measurement until a survey can be funded.' },
      { id: 'D', text: 'Ask account managers to estimate satisfaction each quarter.' }
    ], answer: 'A',
    explanation: 'Quando i dati per un indicatore diretto non sono disponibili o non è fattibile raccoglierli a intervalli regolari si usa un proxy, ed è proprio l\'esempio del BABOK. {B} misura attività interna, che non è soddisfazione.' },

  { id: 'A8-05', style: 'applied', domain: 8, activity: '8.4', type: 'situational',
    source: 'BABOK Guide, 10.28',
    stem: 'A proposed indicator is precise, relevant and credible, but collecting it would require a costly monthly audit. What should you conclude?',
    options: [
      { id: 'A', text: 'It qualifies as a good indicator, since three characteristics are satisfied.' },
      { id: 'B', text: 'It fails on being economical, so a cheaper alternative should be sought.' },
      { id: 'C', text: 'It should be collected less frequently to bring the cost down.' },
      { id: 'D', text: 'The cost should be accepted, since measurement quality justifies it.' }
    ], answer: 'B',
    explanation: 'Economical — disponibile a un costo ragionevole — è una delle sei caratteristiche di un buon indicatore. Ridurre la frequenza ({C}) può essere una soluzione, ma solo se l\'indicatore resta adeguato allo scopo.' },

  { id: 'A8-06', style: 'applied', domain: 8, activity: '8.2', type: 'situational',
    source: 'BABOK Guide, 8.1-8.2',
    stem: 'Six months of performance data have been collected but no conclusion has been drawn. What is missing?',
    options: [
      { id: 'A', text: 'The definition of the measures, which should precede collection.' },
      { id: 'B', text: 'The analysis that turns the data into insight about performance against value.' },
      { id: 'C', text: 'The validation of the measures with the stakeholders concerned.' },
      { id: 'D', text: 'The baseline against which the data should be compared.' }
    ], answer: 'B',
    explanation: 'Measure Solution Performance definisce e raccoglie; Analyze Performance Measures trasforma i dati in insight sulla prestazione rispetto al valore. I dati sono stati raccolti, quindi manca il secondo passo.' },

  { id: 'A9-01', style: 'applied', domain: 9, activity: '9.1', type: 'situational',
    source: 'BABOK Guide, 4.3; Syllabus Map 9.1',
    stem: 'After a workshop, your notes differ from what one participant remembers agreeing. What should you do FIRST?',
    options: [
      { id: 'A', text: 'Treat the notes as authoritative, since they were taken during the session.' },
      { id: 'B', text: 'Work with the stakeholder to establish what is correct.' },
      { id: 'C', text: 'Record both versions and let the delivery team resolve the difference.' },
      { id: 'D', text: 'Escalate the discrepancy to the sponsor for a ruling.' }
    ], answer: 'B',
    explanation: 'Confermare i risultati richiede la collaborazione con gli stakeholder per verificare che l\'input sia stato catturato correttamente; se l\'informazione non è corretta il professionista determina cosa lo è, anche con ulteriore elicitation.' },

  { id: 'A9-02', style: 'applied', domain: 9, activity: '9.2', type: 'situational',
    source: 'BABOK Guide, 3.1; Syllabus Map 9.2',
    stem: 'Your organization\'s policy blocks access to an external tool that would streamline the initiative. How can you maximize efficiency while respecting the policy?',
    options: [
      { id: 'A', text: 'Adopt the tool anyway, since it clearly serves stakeholder needs.' },
      { id: 'B', text: 'Identify alternative tools or processes that comply with the policy.' },
      { id: 'C', text: 'Proceed without it and document the resulting inefficiency.' },
      { id: 'D', text: 'Pause the initiative until the policy can be reviewed.' }
    ], answer: 'B',
    explanation: 'Individuare alternative conformi permette di procedere rispettando il vincolo. Documentare l\'inefficienza ({C}) la subisce senza affrontarla; fermarsi ({D}) o violare la policy ({A}) sono gli estremi opposti, entrambi evitabili.' },

  { id: 'A9-03', style: 'applied', domain: 9, activity: '9.3', type: 'situational',
    source: 'Syllabus Map 9.3',
    stem: 'You are exploring an emerging technology for a new initiative. What is the FIRST step you should take?',
    options: [
      { id: 'A', text: 'Assess its risks and benefits to judge its relevance to the initiative.' },
      { id: 'B', text: 'Build a prototype to demonstrate what the technology can do.' },
      { id: 'C', text: 'Secure senior leadership support before investing analysis effort.' },
      { id: 'D', text: 'Have the team set up a sandbox so the technology can be tested safely.' }
    ], answer: 'A',
    explanation: 'Valutare rischi e benefici stabilisce se la tecnologia sia pertinente agli obiettivi dell\'iniziativa, prima di impegnare risorse. Prototipi e sandbox ({B}, {D}) hanno senso una volta stabilita la pertinenza.' },

  { id: 'A9-04', style: 'applied', domain: 9, activity: '9.2', type: 'situational',
    source: 'BABOK Guide, 6.1 e 6.4',
    stem: 'A new regulation appears mid-initiative and makes the chosen approach unworkable. What is the MOST appropriate response?',
    options: [
      { id: 'A', text: 'Continue with the approved approach, since the change strategy was agreed.' },
      { id: 'B', text: 'Re-examine the change strategy and scope so they stay aligned with the future state.' },
      { id: 'C', text: 'Remove the affected requirements from the initiative.' },
      { id: 'D', text: 'Request an exemption from the regulator before revising anything.' }
    ], answer: 'B',
    explanation: 'I vincoli fanno parte del current state e influenzano la change strategy; il solution scope può evolvere man mano che emergono informazioni. Proseguire su un approccio ormai impraticabile ({A}) garantisce solo di arrivare tardi allo stesso risultato.' },

  { id: 'A9-05', style: 'applied', domain: 9, activity: '9.4', type: 'situational',
    source: 'Syllabus Map 9.4',
    stem: 'Leadership asks whether the organization\'s claims-handling performance is good. What is the MOST useful thing to establish FIRST?',
    options: [
      { id: 'A', text: 'The internal trend of the measure over the last four quarters.' },
      { id: 'B', text: 'A relevant industry benchmark to compare the measure against.' },
      { id: 'C', text: 'The satisfaction of the stakeholders who run the process.' },
      { id: 'D', text: 'The cost of the process relative to the department budget.' }
    ], answer: 'B',
    explanation: '"Buono" richiede un termine di paragone esterno: l\'activity statement 9.4 riguarda l\'uso di benchmark e standard di settore per valutare le pratiche di un\'organizzazione rispetto alle norme e individuare opportunità di miglioramento. Il trend interno ({A}) dice se si migliora, non se si è competitivi.' },

  { id: 'A9-06', style: 'applied', domain: 9, activity: '9.1', type: 'situational',
    source: 'BABOK Guide, 7.2',
    stem: 'A requirement is written in terminology only the finance department understands. Which quality characteristic does this MOST directly compromise?',
    options: [
      { id: 'A', text: 'Atomic' },
      { id: 'B', text: 'Consistent' },
      { id: 'C', text: 'Understandable' },
      { id: 'D', text: 'Feasible' }
    ], answer: 'C',
    explanation: 'Understandable significa espresso con terminologia comune a chi userà il requisito, e la qualità è in ultima analisi determinata dai bisogni degli stakeholder che lo useranno. Il requisito può essere atomico, coerente e fattibile e restare comunque inservibile per metà del pubblico.' }
];
