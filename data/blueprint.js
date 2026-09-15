/**
 * ECBA Exam Blueprint V1.1 — struttura ufficiale IIBA.
 * Fonti: ECBA Exam Blueprint, ECBA Certification Handbook, ECBA Syllabus Map,
 * ECBA Learning Outcomes e ECBA Sample Exam Questions (IIBA).
 *
 * I titoli delle activity statement sono quelli del Syllabus Map, che sono
 * anche quelli mostrati a schermo durante l'esame; `detail` conserva la
 * formulazione estesa del Blueprint V1.1 e `study` i rimandi di studio che il
 * Syllabus Map associa a ciascuna activity.
 *
 * L'esame reale: 75 minuti, 50 domande a scelta multipla
 * (situation-based + standard), online remote proctored.
 */
window.ECBA_BLUEPRINT = {
  exam: {
    durationMinutes: 75,
    questionCount: 50,
    // IIBA non pubblica la soglia di superamento: il punteggio è scalato.
    // Il 70% è la soglia di riferimento che usiamo per l'autovalutazione.
    referencePassMark: 0.7,
    // Quota di domande di stile applicativo nella simulazione. Le dieci sample
    // question pubblicate da IIBA sono tutte situazionali e chiedono un
    // giudizio professionale; il blueprint parla però di domande
    // "situation-based AND standard", quindi la miscela non è 100%.
    appliedShare: 0.7
  },

  /**
   * I nove domini con il peso percentuale sull'esame.
   * `questions` è il numero di domande su 50 derivato dal peso.
   * Domini 1-3: The Business Analysis Standard.
   * Domini 4-9: BABOK Guide, applicazione pratica del BACCM.
   */
  domains: [
    {
      id: 1,
      name: 'Understanding Business Analysis',
      nameIt: 'Comprendere la business analysis',
      weight: 0.20,
      questions: 10,
      source: 'The Business Analysis Standard',
      activities: {
        '1.1': { title: 'Define Business Analysis',
               detail: 'Define business analysis, describe its role in enabling change, and outline key activities across contexts.',
               study: ['BA Standard 2', 'BABOK 1'] },
        '1.2': { title: 'Business Analysis Core Concept Model (BACCM)',
               detail: 'Describe the six BACCM concepts, explain how they relate, and use them to support structured thinking.',
               study: ['BA Standard 2', 'BABOK 2', 'BABOK 7.6'] },
        '1.3': { title: 'Importance of Business Analysis',
               detail: 'Explain how business analysis supports value creation and benefits organizations in various industries.',
               study: ['BA Standard 2', 'BABOK 3.5', 'BABOK 4.5', 'BABOK 6.3', 'BABOK 7.5', 'BABOK 7.6', 'BABOK 8.5'] },
        '1.4': { title: 'Outcomes and Value Creation',
               detail: 'Define value in business analysis and explain how outcomes are assessed to support value realization.',
               study: ['BA Standard 2', 'BABOK 7.3', 'BABOK 7.4', 'BABOK 7.6'] }
      }
    },
    {
      id: 2,
      name: 'Mindset for Effective Business Analysis',
      nameIt: 'Mindset per una business analysis efficace',
      weight: 0.14,
      questions: 7,
      source: 'The Business Analysis Standard',
      activities: {
        '2.1': { title: 'Importance of Mindset',
               detail: 'Explain how mindset influences your effectiveness and identify ways to adopt an empowering mindset.',
               study: ['BA Standard 3'] },
        '2.2': { title: 'Ways to Think About Business Analysis',
               detail: 'Recognize the shared values that drive work and explain how those values support the work to be done.',
               study: ['BA Standard 3'] },
        '2.3': { title: 'Business Analysis Principles',
               detail: 'Identify core business analysis principles and apply them to guide your work and improve outcomes.',
               study: ['BA Standard 3', 'BABOK 8.4', 'Agile Extension 2.6-2.7'] },
        '2.4': { title: 'Foundational Competencies',
               detail: 'Recognize foundational competencies and assess when to apply them in your work.',
               study: ['BA Standard 3'] }
      }
    },
    {
      id: 3,
      name: 'Implementing Business Analysis',
      nameIt: 'Implementare la business analysis',
      weight: 0.06,
      questions: 3,
      source: 'The Business Analysis Standard',
      activities: {
        '3.1': { title: 'Who Performs Business Analysis',
               detail: 'Identify roles that perform business analysis and describe how responsibilities vary across contexts.',
               study: ['BA Standard 4', 'BABOK 1'] },
        '3.2': { title: 'Approaches to Business Analysis Work and Techniques',
               detail: 'Compare business analysis approaches and explain how to choose an approach based on the situation.',
               study: ['BA Standard 4', 'BABOK 3.1'] },
        '3.3': { title: 'Understand Organizational Considerations',
               detail: 'Identify organizational considerations that influence your work and explain their potential impact.',
               study: ['BA Standard 4'] },
        '3.4': { title: 'Understand Requirements and Designs',
               detail: 'Describe the difference between requirements and designs and explain how they evolve throughout the initiative.',
               study: ['BA Standard 4', 'BABOK 2'] }
      }
    },
    {
      id: 4,
      name: 'Change',
      nameIt: 'Change',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '4.1': { title: 'Understand the factors that impact the work that you are doing',
               detail: 'Recognize how key organizational, environmental, and stakeholder factors can influence your work.',
               study: ['BABOK 6.1', 'BABOK 8.4'] },
        '4.2': { title: 'Analyze the impact of proposed changes',
               detail: 'Describe processes and systems to identify areas impacted by changes, and evaluate the impacts.',
               study: ['BABOK 3.3', 'BABOK 3.4', 'BABOK 5.4'] },
        '4.3': { title: 'Support the implementation of changes',
               detail: 'Track progress toward goals and support teams in adapting to changes, under direction.',
               study: ['BABOK 3.3', 'BABOK 4.1', 'BABOK 5.1', 'BABOK 6.2'] },
        '4.4': { title: 'Enable change through straightforward initiatives',
               detail: 'Suggest and help implement simple improvements, working within clear guidelines.',
               study: ['BABOK 5.1'] }
      }
    },
    {
      id: 5,
      name: 'Need',
      nameIt: 'Need',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '5.1': { title: 'Elicit needs from stakeholders',
               detail: 'Use basic elicitation methods and build positive rapport with stakeholders to elicit information.',
               study: ['BABOK 4.3', 'BABOK 6.1'] },
        '5.2': { title: 'Capture and refine the needs elicited from stakeholders',
               detail: 'Document requirements clearly and collaborate with stakeholders to validate needs, under guidance.',
               study: ['BABOK 7.1'] },
        '5.3': { title: 'Analyze needs to ensure they are feasible and align with business outcomes',
               detail: 'Compare stakeholder needs with outcomes to check alignment and flag conflicts for review.',
               study: ['BABOK 4.3', 'BABOK 5.1', 'BABOK 6.1'] },
        '5.4': { title: 'Prioritize needs based on their business value and urgency',
               detail: 'Support stakeholders in prioritizing needs, considering business value and urgency.',
               study: ['BABOK 6.1', 'BABOK 5.3'] }
      }
    },
    {
      id: 6,
      name: 'Solution',
      nameIt: 'Solution',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '6.1': { title: 'Participate in validating solutions to ensure they meet the need',
               detail: 'Explain basic solution validation concepts and record findings.',
               study: ['BABOK 7.2', 'BABOK 7.3'] },
        '6.2': { title: 'Develop recommendations for potential solutions to business problems',
               detail: 'Assist in evaluating solution options, considering feasibility and risks, and contribute to preparing recommendations.',
               study: ['BABOK 4.2', 'BABOK 6.3', 'BABOK 8.5'] },
        '6.3': { title: 'Implement the scope of solutions to business problems',
               detail: 'Support defining scope and collaborate on planning and monitoring implementation activities.',
               study: ['BABOK 6.3', 'BABOK 7.4', 'BABOK 8.1'] },
        '6.4': { title: 'Support the design of business solutions',
               detail: 'Support preparation and updating of design artifacts to maintain clarity.',
               study: ['BABOK 3.1', 'BABOK 5.1', 'BABOK 8.3'] }
      }
    },
    {
      id: 7,
      name: 'Stakeholder',
      nameIt: 'Stakeholder',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '7.1': { title: 'Communicate with stakeholders throughout the initiative',
               detail: 'Communicate with stakeholders using tailored messages to maintain engagement.',
               study: ['BABOK 3.3', 'BABOK 3.4'] },
        '7.2': { title: 'Identify stakeholders for your initiatives',
               detail: 'Identify stakeholder roles and interests, and support analysis of their impact.',
               study: ['BABOK 3.2', 'BABOK 3.3'] },
        '7.3': { title: 'Manage collaboration and relationships with stakeholders',
               detail: 'Facilitate stakeholder collaboration and feedback throughout the initiative.',
               study: ['BABOK 4.1', 'BABOK 4.2', 'BABOK 4.5'] },
        '7.4': { title: 'Analyze the motivations and expectations of stakeholders',
               detail: 'Identify key stakeholder motivations, drivers, and concerns to understand their decisions.',
               study: ['BABOK 3.3', 'BABOK 4.5'] }
      }
    },
    {
      id: 8,
      name: 'Value',
      nameIt: 'Value',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '8.1': { title: 'Understand the outcome that needs to be produced',
               detail: 'Confirm understanding of desired outcomes aligned with business objectives.',
               study: ['BABOK 6.2', 'BABOK 8.4'] },
        '8.2': { title: 'Help support the team in creating value',
               detail: 'Support identification of value opportunities and help address barriers to delivery.',
               study: ['BABOK 6.3', 'BABOK 6.4', 'BABOK 8.2', 'BABOK 8.3'] },
        '8.3': { title: 'Communicate the value of initiatives or solutions to stakeholders',
               detail: 'Describe how solutions meet business goals and relay information effectively for stakeholders.',
               study: ['BABOK 3.4', 'BABOK 5.5'] },
        '8.4': { title: 'Measure the value delivered by your initiatives or solutions',
               detail: 'Support defining key performance indicators (KPIs) aligned with value to measure success.',
               study: ['BABOK 3.5', 'BABOK 8.3', 'BABOK 8.4'] }
      }
    },
    {
      id: 9,
      name: 'Context',
      nameIt: 'Context',
      weight: 0.10,
      questions: 5,
      source: 'BABOK Guide',
      activities: {
        '9.1': { title: 'Ensure that information within your initiative is validated for the intended purpose',
               detail: 'Assist in validating information quality and alignment to your situation, and document those validation outcomes.',
               study: ['BABOK 3.4', 'BABOK 5.1', 'BABOK 5.2'] },
        '9.2': { title: 'Understand the environmental constraints in which your organization operates',
               detail: 'Support recognizing constraints and adapt plans to maintain alignment.',
               study: ['BA Standard 4', 'BABOK 3.1'] },
        '9.3': { title: 'Understand the impact of technology trends on your initiative',
               detail: 'Assist in analyzing technology trends and support technology integration.',
               study: ['BABOK 3.4', 'BABOK 5.1'] },
        '9.4': { title: 'Understand industry benchmarks and reference standards of practice',
               detail: 'Apply relevant industry standards and frameworks to guide the work to be done.',
               study: ['BABOK 4.4', 'BABOK 7.3', 'BABOK 7.6'] }
      }
    }
  ],

  /** Le 20 tecniche del cap. 10 del BABOK Guide valutate all'ECBA. */
  techniques: [
    { ref: '10.2', name: 'Backlog Management' },
    { ref: '10.5', name: 'Brainstorming' },
    { ref: '10.6', name: 'Business Capability Analysis' },
    { ref: '10.9', name: 'Business Rules Analysis' },
    { ref: '10.10', name: 'Collaborative Games' },
    { ref: '10.15', name: 'Data Modelling' },
    { ref: '10.18', name: 'Document Analysis' },
    { ref: '10.25', name: 'Interviews' },
    { ref: '10.27', name: 'Lessons Learned' },
    { ref: '10.28', name: 'Metrics and Key Performance Indicators (KPIs)' },
    { ref: '10.32', name: 'Organizational Modelling' },
    { ref: '10.34', name: 'Process Analysis' },
    { ref: '10.35', name: 'Process Modelling' },
    { ref: '10.38', name: 'Risk Analysis and Management' },
    { ref: '10.40', name: 'Root Cause Analysis' },
    { ref: '10.41', name: 'Scope Modelling' },
    { ref: '10.43', name: 'Stakeholder List, Map, or Personas' },
    { ref: '10.46', name: 'SWOT Analysis' },
    { ref: '10.48', name: 'User Stories' },
    { ref: '10.50', name: 'Workshops' }
  ],

  /**
   * Le 29 underlying competencies del cap. 9 del BABOK Guide, nei sei gruppi.
   * Il `ref` è la sezione BABOK e fa da chiave per le domande di data/topics.js.
   */
  competencies: [
    { group: 'Analytical Thinking and Problem Solving', ref: '9.1', items: [
      { ref: '9.1.1', name: 'Creative Thinking' },
      { ref: '9.1.2', name: 'Decision Making' },
      { ref: '9.1.3', name: 'Learning' },
      { ref: '9.1.4', name: 'Problem Solving' },
      { ref: '9.1.5', name: 'Systems Thinking' },
      { ref: '9.1.6', name: 'Conceptual Thinking' },
      { ref: '9.1.7', name: 'Visual Thinking' }
    ] },
    { group: 'Behavioural Characteristics', ref: '9.2', items: [
      { ref: '9.2.1', name: 'Ethics' },
      { ref: '9.2.2', name: 'Personal Accountability' },
      { ref: '9.2.3', name: 'Trustworthiness' },
      { ref: '9.2.4', name: 'Organization and Time Management' },
      { ref: '9.2.5', name: 'Adaptability' }
    ] },
    { group: 'Business Knowledge', ref: '9.3', items: [
      { ref: '9.3.1', name: 'Business Acumen' },
      { ref: '9.3.2', name: 'Industry Knowledge' },
      { ref: '9.3.3', name: 'Organization Knowledge' },
      { ref: '9.3.4', name: 'Solution Knowledge' },
      { ref: '9.3.5', name: 'Methodology Knowledge' }
    ] },
    { group: 'Communication Skills', ref: '9.4', items: [
      { ref: '9.4.1', name: 'Verbal Communication' },
      { ref: '9.4.2', name: 'Non-Verbal Communication' },
      { ref: '9.4.3', name: 'Written Communication' },
      { ref: '9.4.4', name: 'Listening' }
    ] },
    { group: 'Interaction Skills', ref: '9.5', items: [
      { ref: '9.5.1', name: 'Facilitation' },
      { ref: '9.5.2', name: 'Leadership and Influencing' },
      { ref: '9.5.3', name: 'Teamwork' },
      { ref: '9.5.4', name: 'Negotiation and Conflict Resolution' },
      { ref: '9.5.5', name: 'Teaching' }
    ] },
    { group: 'Tools and Technology', ref: '9.6', items: [
      { ref: '9.6.1', name: 'Office Productivity Tools and Technology' },
      { ref: '9.6.2', name: 'Business Analysis Tools and Technology' },
      { ref: '9.6.3', name: 'Communication Tools and Technology' }
    ] }
  ],

  /** Lunghezza dei test delle sezioni tecniche e competenze. */
  topicTestSize: 10
};
