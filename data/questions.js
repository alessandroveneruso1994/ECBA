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
 * Copertura attuale: domini 1-3 (The Business Analysis Standard).
 * Domini 4-9 in arrivo dal BABOK Guide.
 */
window.ECBA_QUESTIONS = [

  /* ============================================================
     DOMINIO 1 — Understanding Business Analysis (20% · 10 domande)
     ============================================================ */

  {
    id: 'D1-01', domain: 1, activity: '1.1', type: 'standard',
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
    id: 'D1-02', domain: 1, activity: '1.1', type: 'situational',
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
    id: 'D1-03', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-04', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-05', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-06', domain: 1, activity: '1.2', type: 'situational',
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
    id: 'D1-07', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-08', domain: 1, activity: '1.3', type: 'standard',
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
    id: 'D1-09', domain: 1, activity: '1.3', type: 'situational',
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
    id: 'D1-10', domain: 1, activity: '1.3', type: 'situational',
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
    id: 'D1-11', domain: 1, activity: '1.4', type: 'standard',
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
    id: 'D1-12', domain: 1, activity: '1.4', type: 'standard',
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
    id: 'D1-13', domain: 1, activity: '1.4', type: 'standard',
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
    id: 'D1-14', domain: 1, activity: '1.4', type: 'situational',
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
    id: 'D1-15', domain: 1, activity: '1.4', type: 'standard',
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
    id: 'D1-16', domain: 1, activity: '1.4', type: 'standard',
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
    id: 'D1-17', domain: 1, activity: '1.1', type: 'standard',
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
    id: 'D1-18', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-19', domain: 1, activity: '1.2', type: 'situational',
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
    id: 'D1-20', domain: 1, activity: '1.2', type: 'standard',
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
    id: 'D1-21', domain: 1, activity: '1.3', type: 'standard',
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
    id: 'D1-22', domain: 1, activity: '1.4', type: 'situational',
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
    id: 'D2-01', domain: 2, activity: '2.1', type: 'standard',
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
    id: 'D2-02', domain: 2, activity: '2.1', type: 'standard',
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
    id: 'D2-03', domain: 2, activity: '2.2', type: 'standard',
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
    id: 'D2-04', domain: 2, activity: '2.2', type: 'situational',
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
    id: 'D2-05', domain: 2, activity: '2.3', type: 'standard',
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
    id: 'D2-06', domain: 2, activity: '2.3', type: 'situational',
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
    id: 'D2-07', domain: 2, activity: '2.3', type: 'situational',
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
    id: 'D2-08', domain: 2, activity: '2.3', type: 'standard',
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
    id: 'D2-09', domain: 2, activity: '2.4', type: 'standard',
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
    id: 'D2-10', domain: 2, activity: '2.4', type: 'standard',
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
    id: 'D2-11', domain: 2, activity: '2.4', type: 'situational',
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
    id: 'D2-12', domain: 2, activity: '2.4', type: 'standard',
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
    id: 'D2-13', domain: 2, activity: '2.1', type: 'situational',
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
    id: 'D2-14', domain: 2, activity: '2.2', type: 'standard',
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
    id: 'D2-15', domain: 2, activity: '2.3', type: 'situational',
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
    id: 'D2-16', domain: 2, activity: '2.4', type: 'standard',
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
    id: 'D3-01', domain: 3, activity: '3.2', type: 'standard',
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
    id: 'D3-02', domain: 3, activity: '3.2', type: 'situational',
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
    id: 'D3-03', domain: 3, activity: '3.2', type: 'situational',
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
    id: 'D3-04', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-05', domain: 3, activity: '3.4', type: 'situational',
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
    id: 'D3-06', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-07', domain: 3, activity: '3.4', type: 'situational',
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
    id: 'D3-08', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-09', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-10', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-11', domain: 3, activity: '3.3', type: 'standard',
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
    id: 'D3-12', domain: 3, activity: '3.3', type: 'situational',
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
    id: 'D3-13', domain: 3, activity: '3.3', type: 'standard',
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
    id: 'D3-14', domain: 3, activity: '3.3', type: 'standard',
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
    id: 'D3-15', domain: 3, activity: '3.1', type: 'standard',
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
    id: 'D3-16', domain: 3, activity: '3.1', type: 'standard',
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
    id: 'D3-17', domain: 3, activity: '3.2', type: 'standard',
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
    id: 'D3-18', domain: 3, activity: '3.3', type: 'standard',
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
    id: 'D3-19', domain: 3, activity: '3.2', type: 'situational',
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
    id: 'D3-20', domain: 3, activity: '3.1', type: 'standard',
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
    id: 'D3-21', domain: 3, activity: '3.4', type: 'standard',
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
    id: 'D3-22', domain: 3, activity: '3.1', type: 'situational',
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
  }
];
