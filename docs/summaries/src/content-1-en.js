/** Study summaries: domains 1-3 (The Business Analysis Standard). */
module.exports = [

{
  id: 1,
  title: 'Understanding Business Analysis',
  weight: '20%',
  questions: '10 of 50 questions',
  source: 'The Business Analysis Standard, ch. 2',
  blocks: [
    { t: 'p', v: 'The heaviest domain on the exam: one question in five. Its four activities cover what business analysis is, the BACCM, why business analysis matters and how it creates value. The BACCM must be known word for word: IIBA\'s Candidate Q&A lists "a stronger focus on the BACCM concepts" among the changes in the new exam.' },

    { t: 'h3', v: 'Activity statement 1.1 — Define Business Analysis' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 1' },
    { t: 'p', v: 'Business analysis enables change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders. It is not project management, not testing, not writing technical specifications: those are adjacent disciplines it works with, but they do not define it.' },
    { t: 'ul', v: [
      'It is not confined to a job title: it is a skill set applicable to any role. According to the Standard, anyone who, for example, analyses needs and designs solutions, facilitates stakeholder collaboration or creates new or improved value propositions stands to benefit from it.',
      'It is not confined to a project life cycle and does not stop at implementation: it keeps monitoring and evaluating outcomes.',
      'It is critical at all three organizational levels: strategic, tactical and operational.'
    ]},

    { t: 'h3', v: 'Activity statement 1.2 — Business Analysis Core Concept Model (BACCM)' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 2 · BABOK 7.6' },
    { t: 'p', v: 'Business Analysis Core Concept Model. The definitions must be known verbatim, because they resemble one another: it is easy to attribute to one concept the definition of another.' },
    { t: 'table', head: ['Concept', 'Official definition'], widths: [2200, 6800], rows: [
      ['Change', 'The act of transformation in response to a need.'],
      ['Need', 'A problem or opportunity to be addressed.'],
      ['Solution', 'A specific way of satisfying one or more needs in a context.'],
      ['Stakeholder', 'A group or individual with a relationship to the change, the need, or the solution.'],
      ['Value', 'The worth, importance, or usefulness of something to a stakeholder within a context.'],
      ['Context', 'The dynamic circumstances that influence, are influenced by, and provide an understanding of the change.']
    ]},
    { t: 'key', v: 'Requirement is NOT a core concept: it is a usable representation of a need, and therefore a different concept. Precisely because it sits so close to the six, it is easy to mistake for a seventh.' },

    { t: 'p', v: 'The relationships matter as much as the definitions:' },
    { t: 'ul', v: [
      'Need → Change: needs cause changes by motivating stakeholders to act.',
      'Change → Need: changes also cause needs, by reducing or increasing the value delivered by existing solutions. This is the less intuitive of the two directions, and the one that is easier to forget.',
      'Solution: satisfies a need by resolving a problem OR by enabling stakeholders to take advantage of an opportunity.',
      'Stakeholder: internal or external, often defined by interest, impact and influence; grouped by their relationship to needs, changes and solutions.'
    ]},
    { t: 'p', v: 'A solution can combine technology-based initiatives, manual procedures, process changes, business model updates and improved organizational capabilities. It is never only software.' },
    { t: 'p', v: 'Context is everything in the environment relevant to the change: attitudes, behaviours, beliefs, competitors, culture, demographics, geopolitics, goals, history, industry, infrastructure, market trends, processes, products, projects, regulations, sales, seasons, structure, technology — even weather. When a description brings together assorted environmental circumstances that influence the change, are influenced by it and help explain it, it is describing Context.' },

    { t: 'h3', v: 'What the BACCM is for' },
    { t: 'p', v: 'It is both a "thinking model" and an "organizing model". Its official uses:' },
    { t: 'ul', v: [
      'Describe effective and efficient business analysis',
      'Communicate about business analysis with a common language',
      'Identify professional development opportunities for individuals',
      'Perform better business analysis by evaluating the relationships among the six concepts',
      'Evaluate the impact of these concepts and relationships',
      'Establish both a foundation and a path forward',
      'Consider the quality and completeness of the work being done'
    ]},
    { t: 'p', v: 'Estimating budgets, assigning responsibilities and selecting methodologies are not among these uses: the BACCM is a conceptual model, not a process to follow.' },

    { t: 'h3', v: 'Activity statement 1.3 — Importance of Business Analysis' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 3.5 · BABOK 4.5 · BABOK 6.3 · BABOK 7.5 · BABOK 7.6 · BABOK 8.5' },
    { t: 'p', v: 'The Standard lists nine critical functions of business analysis. They should be recognized from their description rather than recited.' },
    { t: 'table', head: ['Function', 'How to recognize it'], widths: [2800, 6200], rows: [
      ['Problem understanding', 'Goes beyond symptoms, digs into the underlying causes.'],
      ['Needs prioritization', '"The compass": allocates resources by relative importance.'],
      ['Value-centric solutions', 'Cohesive solutions delivering meaningful, measurable value.'],
      ['Risk management', 'Proactively identifies and assesses risks, integrating them into decision-making.'],
      ['Performance enhancement', 'Does not stop at implementation: monitors and improves continuously.'],
      ['Value delivery', 'Generates change in order to deliver value.'],
      ['Stakeholder collaboration', 'Breaks down silos, aligns diverse perspectives.'],
      ['Leadership support', 'Helps leaders articulate purpose, set goals and communicate expectations.'],
      ['Agility', 'Supports predictive, adaptive and hybrid approaches.']
    ]},
    { t: 'key', v: 'On value delivery the Standard is explicit: it may not always be possible to deliver value for all stakeholders. The goal is to maximize value for the majority while addressing and managing the concerns of others.' },

    { t: 'h3', v: 'Activity statement 1.4 — Outcomes and Value Creation' },
    { t: 'ref', v: 'BA Standard 2 · BABOK 7.3 · BABOK 7.4 · BABOK 7.6' },
    { t: 'p', v: 'Three distinctions to be able to recognize:' },
    { t: 'table', head: ['Distinction', 'Meaning', 'Example'], widths: [2200, 3600, 3200], rows: [
      ['Realized / Preserved', 'Realized through returns, gains and improvements; preserved by mitigating losses, risks and costs.', 'A new channel raising revenue / a compliance upgrade avoiding fines'],
      ['Tangible / Intangible', 'Tangible = directly measurable, often monetary. Intangible = measured indirectly, often motivational.', '€80,000 saved / employee morale, company reputation'],
      ['Absolute / Relative', 'Value can be assessed in itself or by comparing two options from a group\'s perspective.', '"Option B delivers more value than A for our customer service group"']
    ]},
    { t: 'p', v: 'Value is discovered throughout the initiative, as benefits are delivered as efficiently and effectively as possible. It is not a final event.' },

    { t: 'trap', v: 'Typical traps · BACCM definitions swapped between concepts · "Requirement" offered as a seventh core concept · Value reduced to its monetary dimension alone · Options that unduly narrow a definition (only IT, only the sponsor, only end users) · The idea that business analysis ends at go-live.' }
  ]
},

{
  id: 2,
  title: 'Mindset for Effective Business Analysis',
  weight: '14%',
  questions: '7 of 50 questions',
  source: 'The Business Analysis Standard, ch. 3',
  blocks: [
    { t: 'p', v: 'A domain made of three lists — shared values, principles, foundational competencies — plus the concept of mindset itself. Reciting them is not enough: it pays to be able to match a described behaviour to the right item.' },

    { t: 'h3', v: 'Activity statement 2.1 — Importance of Mindset' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Mindset is the mental framework that guides decision-making, behaviour and team dynamics. It exists to navigate, with confidence, the situations where knowing exactly what needs to be done is impossible: every situation is unique and there is no single analysis approach.' },
    { t: 'p', v: 'It is developed through deliberate practice on six fronts: achieving organizational outcomes, discovering value for stakeholders, adopting appropriate principles, deciding how to approach the work, actively developing foundational competencies, being able to use foundational techniques.' },

    { t: 'h3', v: 'Activity statement 2.2 — Ways to Think About Business Analysis' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Applying the BACCM helps develop and share information about the outcome to be created, and shared values help drive this work: Respect · Courage · Collaboration · Ethics · Curiosity · Continuous learning · Improvement · Customer focus · Value maximization.' },
    { t: 'trap', v: 'Plausible words that are ABSENT from the list and easy to mistake for values: predictability, standardization, specialization, efficiency, compliance, hierarchy, formality, speed, autonomy, competition.' },

    { t: 'h3', v: 'Activity statement 2.3 — Business Analysis Principles' },
    { t: 'ref', v: 'BA Standard 3 · BABOK 8.4 · Agile Extension 2.6-2.7' },
    { t: 'p', v: 'The Standard takes them from the Agile Extension as critical ingredients for an effective mindset. There are seven, with short names: worth learning verbatim, because changing a single word is enough to produce a plausible but non-existent principle.' },
    { t: 'table', head: ['Principle', 'What it requires'], widths: [3000, 6000], rows: [
      ['See the whole', 'Analyze needs in the big picture context and identify why a change is necessary.'],
      ['Think as a customer', 'Start from the customer experience, from a high-level view broken down into detail.'],
      ['Analyze to determine what is valuable', 'Continuously assess and prioritize work to maximize the value being delivered.'],
      ['Get real using examples', 'Use concrete examples to build shared understanding; they also serve for acceptance criteria and testing.'],
      ['Understand what is doable', 'Understand how to deliver within constraints, including those of the operational environment.'],
      ['Stimulate collaboration and continuous improvement', 'Create an environment of ongoing contribution; use feedback to adapt solution and processes.'],
      ['Avoid waste', 'Identify the activities that do not add value and remove them.']
    ]},

    { t: 'h3', v: 'Activity statement 2.4 — Foundational Competencies' },
    { t: 'ref', v: 'BA Standard 3' },
    { t: 'p', v: 'Two levels, not to be confused:' },
    { t: 'ul', v: [
      'Foundational competencies: the basic skills necessary to perform effective business analysis. The global community identified FIVE as important for any type of initiative.',
      'Underlying competencies: the 29 of BABOK chapter 9, in six groups, built on top of that foundation.'
    ]},
    { t: 'table', head: ['The five foundational', 'Short definition', 'BABOK'], widths: [2600, 5000, 1400], rows: [
      ['Adaptability', 'Adjusting behavioural style to increase effectiveness.', '9.2.5'],
      ['Facilitation', 'Facilitating workshops, negotiating, helping resolve conflicts.', '9.5.1'],
      ['Leadership and Influencing', 'Building consensus, recommending solutions, guiding stakeholders to the desired value.', '9.5.2'],
      ['Problem Solving', 'Ensuring the value created addresses the root cause of problems.', '9.1.4'],
      ['Systems Thinking', 'Holistically understanding the enterprise and context to maximize value delivered.', '9.1.5']
    ]},
    { t: 'key', v: 'Numbers not to confuse: 5 foundational competencies · 29 underlying competencies in 6 groups · 20 techniques assessed on the ECBA · more than 90 techniques in total across the four IIBA documents · 30 tasks · 6 knowledge areas · 9 exam domains.' },

    { t: 'trap', v: 'Typical traps · Techniques presented as competencies (Data Modelling is not a competency) · Real chapter 9 competencies passed off as one of the five foundational ones (Written Communication, Industry Knowledge) · In situation-based questions several options are "generally true": pick the one that answers the situation described, not the noblest one.' }
  ]
},

{
  id: 3,
  title: 'Implementing Business Analysis',
  weight: '6%',
  questions: '3 of 50 questions',
  source: 'The Business Analysis Standard, ch. 4',
  blocks: [
    { t: 'p', v: 'It carries little weight (3 questions) but contains a lot of material, in particular the requirements/designs distinction that returns throughout the BABOK domains. Worth studying properly regardless.' },

    { t: 'h3', v: 'Activity statement 3.1 — Who Performs Business Analysis' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 1' },
    { t: 'p', v: 'According to the Standard, anyone engaged in the following stands to benefit from applying business analysis: developing strategy and objectives, creating value propositions, enabling change, analysing needs and designing solutions, facilitating collaboration, creating innovative products, designing or improving processes, streamlining operational activities. The reference for developing competencies is the Business Analysis Competency Model.' },

    { t: 'h3', v: 'Activity statement 3.2 — Approaches to Business Analysis Work and Techniques' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 3.1' },
    { t: 'table', head: ['Approach', 'How it works', 'When to choose it'], widths: [1800, 4000, 3200], rows: [
      ['Predictive', 'Plans all the work up front, produces documents and models (scope statement, requirements, designs, schedule and cost baselines, test plans), tracks progress against the plan.', 'Work that is well-defined, heavily regulated, relatively straightforward, or can be completed sequentially.'],
      ['Adaptive', 'Delivers value in small prioritized increments, just-enough and just-in-time documentation, continuous feedback.', 'Complex needs, poorly defined challenges, uncertainty, needs emerging as the solution is built.'],
      ['Hybrid', 'Some initiatives predictive and others adaptive, or parts of the same initiative using different approaches.', 'When both are needed.']
    ]},
    { t: 'key', v: 'Sometimes an approach is imposed on the team. In that case the expectation is not to protest: it is to know how to create value using any of the approaches.' },

    { t: 'h3', v: 'The five foundational techniques' },
    { t: 'p', v: 'Backlog Management · Customer Journey Mapping · Data Storytelling · Process Analysis · Workshops/Interviews' },
    { t: 'trap', v: 'NOT to be confused with the 20 techniques assessed on the ECBA: only Backlog Management, Process Analysis, Workshops and Interviews belong to both lists. Customer Journey Mapping and Data Storytelling come from other IIBA documents (POA Guide and BDA Guide).' },

    { t: 'h3', v: 'Activity statement 3.3 — Understand Organizational Considerations' },
    { t: 'ref', v: 'BA Standard 4' },
    { t: 'table', head: ['Topic', 'The practitioner\'s role'], widths: [2400, 6600], rows: [
      ['Security integration', 'Need not be a security SME, but with a solid understanding of security principles helps stakeholders from different backgrounds work together and identify risks.'],
      ['Ethical analysis', 'Careful analysis that eliminates personal biases. When the "best" choice and the "ethical" choice diverge, the reference is IIBA\'s Code of Ethical Conduct and Professional Standards.'],
      ['Inclusion and representation', 'More than an ethical consideration: a key driver of innovation and sustainable growth, because diverse perspectives drive creative problem-solving.'],
      ['Sustainability', 'Meeting current needs while preserving resources for future generations, including social equity, health and economic viability.']
    ]},

    { t: 'h3', v: 'How business analysis is delivered' },
    { t: 'p', v: 'Centre of Excellence (a specialized unit) · Community of Practice (a collaborative space for sharing) · Business Analysis as a Service (outsourcing to specialized providers) · Dispersed across business units. Many organizations combine them.' },

    { t: 'h3', v: 'Activity statement 3.4 — Understand Requirements and Designs' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 2' },
    { t: 'p', v: 'The central distinction of this domain: requirements and designs are best understood side by side.' },
    { t: 'table', head: ['', 'Requirement', 'Design'], widths: [1600, 3700, 3700], rows: [
      ['What it is', 'A usable representation of a NEED', 'A usable representation of a SOLUTION'],
      ['Question', 'What value could be delivered', 'How value might be realized'],
      ['Example', '"Provide information in English and French"', 'Prototype with text in both languages']
    ]},
    { t: 'p', v: 'The difference lies in PURPOSE, not in author, format or approval status: the same tasks and techniques can create both. They are interdependent and cyclical — designs reveal insights that enhance requirements, and changing requirements lead to design updates.' },

    { t: 'h3', v: 'The four requirement classifications' },
    { t: 'table', head: ['Class', 'Definition'], widths: [2200, 6800], rows: [
      ['Business', 'Statements of goals, objectives and outcomes for why a change has been initiated. May apply to the enterprise, a business area or an initiative.'],
      ['Stakeholder', 'The needs of stakeholders that must be met to achieve the business requirements. A bridge between business and solution requirements.'],
      ['Solution', 'The capabilities and qualities of a solution. Split into functional (behaviour and information) and non-functional or quality of service (conditions and qualities: performance, security, availability).'],
      ['Transition', 'Capabilities and conditions needed to move from the current to the future state. Temporary: data conversion, training, business continuity.']
    ]},
    { t: 'p', v: 'In the requirements and design cycle, business requirements answer WHY, stakeholder and solution requirements answer WHAT, and designs answer HOW. Transition requirements stand apart because they are temporary.' },

    { t: 'h3', v: 'Traceability' },
    { t: 'p', v: 'Tracks the relationships between requirements and designs, from the original stakeholder need to the implemented solution. Backward traceability leads back to the business need; forward traceability leads down to solution components. It supports change control and helps detect missing requirements or solution components supported by no requirement.' },

    { t: 'trap', v: 'Typical traps · Requirement and design distinguished by author ("the business writes requirements, IT writes designs") or by format ("a requirement is text, a design is a diagram"): both false · Response time classified as functional rather than non-functional · The five foundational techniques confused with the 20 assessed on the exam.' }
  ]
}

];
