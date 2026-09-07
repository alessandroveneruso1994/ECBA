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
  },

  /* ============================================================
     DOMINIO 4 — Change (10% · 5 domande)
     ============================================================ */

  {
    id: 'D4-01', domain: 4, activity: '4.1', type: 'standard',
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
    id: 'D4-02', domain: 4, activity: '4.1', type: 'situational',
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
    id: 'D4-03', domain: 4, activity: '4.2', type: 'standard',
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
    id: 'D4-04', domain: 4, activity: '4.2', type: 'situational',
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
    id: 'D4-05', domain: 4, activity: '4.2', type: 'standard',
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
    id: 'D4-06', domain: 4, activity: '4.3', type: 'standard',
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
    id: 'D4-07', domain: 4, activity: '4.3', type: 'situational',
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
    id: 'D4-08', domain: 4, activity: '4.4', type: 'standard',
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
    id: 'D4-09', domain: 4, activity: '4.4', type: 'situational',
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
    id: 'D4-10', domain: 4, activity: '4.1', type: 'standard',
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
    id: 'D5-01', domain: 5, activity: '5.1', type: 'standard',
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
    id: 'D5-02', domain: 5, activity: '5.1', type: 'situational',
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
    id: 'D5-03', domain: 5, activity: '5.1', type: 'standard',
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
    id: 'D5-04', domain: 5, activity: '5.2', type: 'standard',
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
    id: 'D5-05', domain: 5, activity: '5.2', type: 'situational',
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
    id: 'D5-06', domain: 5, activity: '5.2', type: 'standard',
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
    id: 'D5-07', domain: 5, activity: '5.3', type: 'situational',
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
    id: 'D5-08', domain: 5, activity: '5.4', type: 'standard',
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
    id: 'D5-09', domain: 5, activity: '5.4', type: 'situational',
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
    id: 'D5-10', domain: 5, activity: '5.4', type: 'standard',
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
    id: 'D6-01', domain: 6, activity: '6.1', type: 'standard',
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
    id: 'D6-02', domain: 6, activity: '6.1', type: 'situational',
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
    id: 'D6-03', domain: 6, activity: '6.2', type: 'standard',
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
    id: 'D6-04', domain: 6, activity: '6.2', type: 'situational',
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
    id: 'D6-05', domain: 6, activity: '6.3', type: 'standard',
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
    id: 'D6-06', domain: 6, activity: '6.3', type: 'standard',
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
    id: 'D6-07', domain: 6, activity: '6.4', type: 'standard',
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
    id: 'D6-08', domain: 6, activity: '6.4', type: 'situational',
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
    id: 'D6-09', domain: 6, activity: '6.2', type: 'standard',
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
    id: 'D6-10', domain: 6, activity: '6.1', type: 'standard',
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
    id: 'D7-01', domain: 7, activity: '7.1', type: 'standard',
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
    id: 'D7-02', domain: 7, activity: '7.1', type: 'situational',
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
    id: 'D7-03', domain: 7, activity: '7.2', type: 'standard',
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
    id: 'D7-04', domain: 7, activity: '7.2', type: 'situational',
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
    id: 'D7-05', domain: 7, activity: '7.2', type: 'standard',
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
    id: 'D7-06', domain: 7, activity: '7.3', type: 'standard',
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
    id: 'D7-07', domain: 7, activity: '7.3', type: 'situational',
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
    id: 'D7-08', domain: 7, activity: '7.4', type: 'standard',
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
    id: 'D7-09', domain: 7, activity: '7.4', type: 'standard',
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
    id: 'D7-10', domain: 7, activity: '7.3', type: 'situational',
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
    id: 'D8-01', domain: 8, activity: '8.1', type: 'standard',
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
    id: 'D8-02', domain: 8, activity: '8.1', type: 'situational',
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
    id: 'D8-03', domain: 8, activity: '8.2', type: 'standard',
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
    id: 'D8-04', domain: 8, activity: '8.2', type: 'situational',
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
    id: 'D8-05', domain: 8, activity: '8.3', type: 'standard',
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
    id: 'D8-06', domain: 8, activity: '8.4', type: 'standard',
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
    id: 'D8-07', domain: 8, activity: '8.4', type: 'situational',
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
    id: 'D8-08', domain: 8, activity: '8.3', type: 'standard',
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
    id: 'D8-09', domain: 8, activity: '8.1', type: 'situational',
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
    id: 'D8-10', domain: 8, activity: '8.2', type: 'standard',
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
    id: 'D9-01', domain: 9, activity: '9.1', type: 'standard',
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
    id: 'D9-02', domain: 9, activity: '9.1', type: 'situational',
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
    id: 'D9-03', domain: 9, activity: '9.2', type: 'standard',
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
    id: 'D9-04', domain: 9, activity: '9.2', type: 'situational',
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
    id: 'D9-05', domain: 9, activity: '9.3', type: 'standard',
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
    id: 'D9-06', domain: 9, activity: '9.3', type: 'situational',
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
    id: 'D9-07', domain: 9, activity: '9.4', type: 'standard',
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
    id: 'D9-08', domain: 9, activity: '9.4', type: 'standard',
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
    id: 'D9-09', domain: 9, activity: '9.4', type: 'situational',
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
    id: 'D9-10', domain: 9, activity: '9.1', type: 'standard',
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

];
