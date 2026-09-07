/**
 * ECBA Exam Blueprint V1.1 — struttura ufficiale IIBA.
 * Fonte: ECBA Exam Blueprint (IIBA) e ECBA Handbook, ottobre 2025.
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
    referencePassMark: 0.7
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
        '1.1': 'Define business analysis, describe its role in enabling change, and outline key activities across contexts.',
        '1.2': 'Describe the six BACCM concepts, explain how they relate, and use them to support structured thinking.',
        '1.3': 'Explain how business analysis supports value creation and benefits organizations in various industries.',
        '1.4': 'Define value in business analysis and explain how outcomes are assessed to support value realization.'
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
        '2.1': 'Explain how mindset influences your effectiveness and identify ways to adopt an empowering mindset.',
        '2.2': 'Recognize the shared values that drive work and explain how those values support the work to be done.',
        '2.3': 'Identify core business analysis principles and apply them to guide your work and improve outcomes.',
        '2.4': 'Recognize foundational competencies and assess when to apply them in your work.'
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
        '3.1': 'Identify roles that perform business analysis and describe how responsibilities vary across contexts.',
        '3.2': 'Compare business analysis approaches and explain how to choose an approach based on the situation.',
        '3.3': 'Identify organizational considerations that influence your work and explain their potential impact.',
        '3.4': 'Describe the difference between requirements and designs and explain how they evolve throughout the initiative.'
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
        '4.1': 'Recognize how key organizational, environmental, and stakeholder factors can influence your work.',
        '4.2': 'Describe processes and systems to identify areas impacted by changes, and evaluate the impacts.',
        '4.3': 'Track progress toward goals and support teams in adapting to changes, under direction.',
        '4.4': 'Suggest and help implement simple improvements, working within clear guidelines.'
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
        '5.1': 'Use basic elicitation methods and build positive rapport with stakeholders to elicit information.',
        '5.2': 'Document requirements clearly and collaborate with stakeholders to validate needs, under guidance.',
        '5.3': 'Compare stakeholder needs with outcomes to check alignment and flag conflicts for review.',
        '5.4': 'Support stakeholders in prioritizing needs, considering business value and urgency.'
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
        '6.1': 'Explain basic solution validation concepts and record findings.',
        '6.2': 'Assist in evaluating solution options, considering feasibility and risks, and contribute to preparing recommendations.',
        '6.3': 'Support defining scope and collaborate on planning and monitoring implementation activities.',
        '6.4': 'Support preparation and updating of design artifacts to maintain clarity.'
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
        '7.1': 'Communicate with stakeholders using tailored messages to maintain engagement.',
        '7.2': 'Identify stakeholder roles and interests, and support analysis of their impact.',
        '7.3': 'Facilitate stakeholder collaboration and feedback throughout the initiative.',
        '7.4': 'Identify key stakeholder motivations, drivers, and concerns to understand their decisions.'
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
        '8.1': 'Confirm understanding of desired outcomes aligned with business objectives.',
        '8.2': 'Support identification of value opportunities and help address barriers to delivery.',
        '8.3': 'Describe how solutions meet business goals and relay information effectively for stakeholders.',
        '8.4': 'Support defining key performance indicators (KPIs) aligned with value to measure success.'
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
        '9.1': 'Assist in validating information quality and alignment to your situation, and document those validation outcomes.',
        '9.2': 'Support recognizing constraints and adapt plans to maintain alignment.',
        '9.3': 'Assist in analyzing technology trends and support technology integration.',
        '9.4': 'Apply relevant industry standards and frameworks to guide the work to be done.'
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
