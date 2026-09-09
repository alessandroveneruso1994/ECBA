/** Study summaries: domains 7-9 (BABOK Guide). */
module.exports = [

{
  id: 7,
  title: 'Stakeholder',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — Key Concepts (ch. 2), BA Planning and Monitoring (ch. 3), Elicitation and Collaboration (ch. 4)',
  blocks: [
    { t: 'p', v: 'Who they are, what they want, how to communicate with them and how to keep them engaged.' },

    { t: 'h3', v: 'Activity statement 7.2 — Identify stakeholders for your initiatives' },
    { t: 'ref', v: 'BABOK 3.2 · BABOK 3.3' },
    { t: 'p', v: 'Eleven roles defined in chapter 2. They should be recognized from the description of their responsibility.' },
    { t: 'table', head: ['Role', 'Responsibility'], widths: [2600, 6400], rows: [
      ['Business analyst', 'Inherently a stakeholder in all business analysis activities, and responsible for executing them.'],
      ['Customer', 'Uses the products or services of the enterprise; may hold contractual or moral rights.'],
      ['Domain SME', 'In-depth knowledge of a topic relevant to the business need or solution scope.'],
      ['End user', 'Interacts DIRECTLY with the solution; includes all participants in a business process.'],
      ['Implementation SME', 'Specialized knowledge of implementing solution components: developer, architect, DBA, trainer, change manager.'],
      ['Operational support', 'Day-to-day management and maintenance of a system: help desk, release manager.'],
      ['Project manager', 'Manages the work to deliver the solution, balancing scope, budget, schedule, resources, quality and risk.'],
      ['Regulator', 'Defines and enforces standards, imposed through legislation, corporate governance or audit standards.'],
      ['Sponsor', 'Initiates the effort, authorizes the work, controls budget and scope.'],
      ['Supplier', 'External provider of products or services to the organization.'],
      ['Tester', 'Verifies that the solution meets quality standards.']
    ]},

    { t: 'h3', v: 'Analysing stakeholders' },
    { t: 'p', v: 'Plan Stakeholder Engagement (3.2) identifies who is directly or indirectly impacted and analyses their characteristics. It is performed REPEATEDLY, not once.' },
    { t: 'ul', v: [
      'Internal sources: organizational chart and business processes; the sponsor may also identify some.',
      'External sources: existing contracts, anticipated vendors, regulatory bodies; shareholders, customers and suppliers are considered.',
      'Roles (where and how they will contribute) and attitudes (what may impact their actions and behaviours) are analysed.'
    ]},
    { t: 'key', v: 'Why it matters: if stakeholders are not identified, critical needs may go undiscovered. Those found late force the revision of tasks in progress or already completed, increasing cost and decreasing satisfaction.' },
    { t: 'p', v: 'Stakeholder List, Map, or Personas (10.43) supports this analysis. Not to be confused with Organizational Modelling (10.32), which describes the stable structure of the organization rather than the participants in a specific initiative.' },

    { t: 'h3', v: 'Activity statement 7.1 — Communicate with stakeholders throughout the initiative' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 3.4' },
    { t: 'p', v: 'Communicate Business Analysis Information (4.4) exists to ensure a SHARED UNDERSTANDING. It is bi-directional and iterative: recipients, content, purpose, context and expected outcomes are determined.' },
    { t: 'p', v: 'Communicating does not mean pushing information out and assuming it was received and understood. The practitioner engages stakeholders to check understanding, acts on disagreements, and CHANGES THE METHOD of delivery if they are not receiving or understanding. Multiple forms of communication may be required for the same information.' },
    { t: 'p', v: 'Language, tone and style must suit the audience: the same document sent to executives, developers and end users does not work.' },

    { t: 'h3', v: 'Activity statement 7.3 — Manage collaboration and relationships with stakeholders' },
    { t: 'ref', v: 'BABOK 4.1 · BABOK 4.2 · BABOK 4.5' },
    { t: 'p', v: 'Manage Stakeholder Collaboration (4.5) encourages stakeholders to work towards a common goal. It is an ONGOING activity: new stakeholders may be identified at any point, and each one\'s role, responsibility, influence, attitude and authority may change over time.' },
    { t: 'p', v: 'The more significant the impact of the change or its visibility, the more attention it requires. The goal is to capitalize on positive reactions and mitigate or avoid negative ones — not to exclude those who disagree.' },
    { t: 'key', v: 'Stakeholders hold authority over approvals, but they are also a primary source of needs, constraints and assumptions. That is why poor relationships damage the work: the first effect listed is failure to provide quality information.' },
    { t: 'p', v: 'Workshops (10.50) bring stakeholders together to collaborate on a predefined goal. Collaborative Games (10.10) get them to build a joint understanding through structured activities.' },

    { t: 'h3', v: 'Activity statement 7.4 — Analyze the motivations and expectations of stakeholders' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 4.5' },
    { t: 'p', v: 'Relevant competencies from chapter 9:' },
    { t: 'ul', v: [
      'Facilitation (9.5.1): moderating discussions so all participants articulate their views and recognize those of others. The facilitator is a third party, not a decision maker: neutral, but intervening when required.',
      'Leadership and Influencing (9.5.2): motivating people to work together towards shared goals, understanding individual motives, needs and capabilities. Among its measures: influencing stakeholders to consider broader objectives over personal motivations.'
    ]},

    { t: 'trap', v: 'Typical traps · End user confused with operational support (who uses the solution versus who maintains it) · Domain SME confused with implementation SME (knows the business versus knows the build) · Sponsor confused with project manager (authorizes and funds versus manages execution) · The idea that stakeholder analysis is done once at the start.' }
  ]
},

{
  id: 8,
  title: 'Value',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — Solution Evaluation (ch. 8), Strategy Analysis (ch. 6), technique 10.28',
  blocks: [
    { t: 'p', v: 'Defining expected outcomes, measuring them, understanding why actual value diverges from potential value.' },

    { t: 'h3', v: 'Activity statement 8.1 — Understand the outcome that needs to be produced' },
    { t: 'ref', v: 'BABOK 6.2 · BABOK 8.4' },
    { t: 'table', head: ['', 'Goal', 'Objective'], widths: [1600, 3700, 3700], rows: [
      ['Nature', 'Longer term, ongoing, QUALITATIVE', 'Descriptive, granular, SPECIFIC'],
      ['Example', '"Increase the number of high-revenue customers"', '"Increase the number of high-revenue customers in the 30-45 age bracket by 30% within 6 months"']
    ]},
    { t: 'p', v: 'Goals and objectives describe the ENDS the organization is seeking to achieve, and can relate both to changes it wants to accomplish and to current conditions it wants to maintain. As goals are analyzed they are converted into objectives.' },
    { t: 'p', v: 'Business goal examples cited by the BABOK: create a new capability, address or create a competitive advantage, improve revenue, increase customer and employee satisfaction, comply with new regulations, improve safety, reduce time to deliver.' },

    { t: 'h3', v: 'Activity statement 8.2 — Help support the team in creating value' },
    { t: 'ref', v: 'BABOK 6.3 · BABOK 6.4 · BABOK 8.2 · BABOK 8.3' },
    { t: 'p', v: 'The fundamental distinction of this domain is inside/outside the solution:' },
    { t: 'table', head: ['Task', 'What it examines', 'Examples'], widths: [2600, 3200, 3200], rows: [
      ['8.3 Assess Solution Limitations', 'Factors INTERNAL to the solution restricting its value.', 'Dependencies between components, one slow component holding back the whole, repeatedly ineffective outputs.'],
      ['8.4 Assess Enterprise Limitations', 'Factors EXTERNAL to the solution.', 'Enterprise culture, structure, policies, stakeholders who do not understand why the solution exists.']
    ]},
    { t: 'key', v: 'Enterprise culture is defined as the deeply rooted beliefs, values and norms shared by members: not directly visible, yet they drive the actions taken. One purpose of a cultural assessment is to find out whether stakeholders understand the reasons why a solution exists.' },
    { t: 'p', v: 'Recommend Actions to Increase Solution Value (8.5) closes the loop: understand the factors creating the difference between potential and actual value, and recommend how to align them.' },
    { t: 'p', v: 'The sequence of the five Solution Evaluation tasks: 8.1 Measure (define and collect) → 8.2 Analyze (turn data into insights about performance relative to value) → 8.3 and 8.4 Assess Limitations (internal and external) → 8.5 Recommend Actions. Data collected without analysis produces no decisions: this is the 8.1 versus 8.2 distinction.' },

    { t: 'h3', v: 'Activity statement 8.3 — Communicate the value of initiatives or solutions to stakeholders' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.5' },
    { t: 'p', v: 'Communicating value is not listing what was done: it is showing what benefit the organization gets, in the terms that matter to the audience. Plan Business Analysis Information Management (3.4) sets out how information is organised, stored and made accessible; Approve Requirements (5.5) is the moment stakeholders with the necessary authority confirm their agreement.' },
    { t: 'key', v: 'In the official sample question for this activity, the winning option quantifies the business benefit — "reduces costs by 20% and increases efficiency" — not the one listing technical specifications, hours invested, or adherence to deadlines. Hours, milestones and features are project metrics, not stakeholder value.' },
    { t: 'p', v: 'Language and level of detail adapt to the audience, as in Communicate Business Analysis Information (4.4): the sponsor cares about the effect on objectives, the implementation SME about the how.' },

    { t: 'h3', v: 'Activity statement 8.4 — Measure the value delivered by your initiatives or solutions' },
    { t: 'ref', v: 'BABOK 3.5 · BABOK 8.3 · BABOK 8.4' },
    { t: 'p', v: 'Two distinct planes, often confused: Identify Business Analysis Performance Improvements (3.5) assesses the ANALYSIS WORK and plans how to improve it, and its output feeds Plan Stakeholder Engagement and Prepare for Elicitation; Measure Solution Performance (8.1) and Analyze Performance Measures (8.2) assess the SOLUTION instead.' },
    { t: 'p', v: 'Metrics and KPIs measure the performance of solutions, solution components and other matters of interest to stakeholders. They do not appraise people nor control budgets.' },
    { t: 'p', v: 'An INDICATOR displays the result of analysing one or more measures addressing a concern. Each concern requires at least one indicator; some require several.' },
    { t: 'table', head: ['The six characteristics of a good indicator', ''], widths: [2600, 6400], rows: [
      ['Clear', 'Precise and unambiguous.'],
      ['Relevant', 'Appropriate to the concern.'],
      ['Economical', 'Available at reasonable cost.'],
      ['Adequate', 'Provides a sufficient basis on which to assess performance.'],
      ['Quantifiable', 'Can be independently validated.'],
      ['Trustworthy and credible', 'Based on evidence and research.']
    ]},
    { t: 'p', v: 'Not all factors can be measured directly: when data for direct indicators is unavailable or not feasible to collect at regular intervals, a PROXY is used. The BABOK example: in the absence of a client satisfaction survey, the proportion of contracts renewed.' },
    { t: 'p', v: 'When establishing an indicator, consider its source, method of collection, collector, cost, frequency and difficulty. Over time, weaknesses in some indicators can be identified and improved: they are not immutable.' },
    { t: 'p', v: 'A stated limitation: gathering excessive data causes unnecessary expense and distracts the team; a bureaucratic metrics programme fails by collecting too much and generating too little.' },

    { t: 'trap', v: 'Typical traps · The six indicator characteristics confused with the nine requirement quality characteristics or with the SMART acronym · Goal and objective inverted ("goals are measurable, objectives aspirational" is the reverse) · Internal and external limitations swapped · The idea that a validated indicator should never change.' }
  ]
},

{
  id: 9,
  title: 'Context',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — Elicitation and Collaboration (ch. 4), RADD (ch. 7), Strategy Analysis (ch. 6), competencies ch. 9',
  blocks: [
    { t: 'p', v: 'Information quality, constraints, technology and industry standards: the domain of what surrounds the change.' },

    { t: 'h3', v: 'Activity statement 9.1 — Ensure that information within your initiative is validated for the intended purpose' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.1 · BABOK 5.2' },
    { t: 'p', v: 'Confirm Elicitation Results (4.3) checks accuracy and consistency. Results are compared against THEIR SOURCE and against other elicitation results. The review may discover errors, omissions, conflicts and ambiguity.' },
    { t: 'p', v: 'If the information is not correct, the practitioner determines what is correct — which may require more elicitation. Committing resources based on unconfirmed results risks failing to meet stakeholder expectations. It remains a MUCH LESS rigorous and formal review than the one performed during analysis.' },
    { t: 'p', v: 'The quality characteristics of Verify Requirements (7.2), useful for spotting what is wrong with a badly written requirement:' },
    { t: 'table', head: ['Characteristic', 'Meaning', 'Typical defect'], widths: [2000, 4200, 2800], rows: [
      ['Atomic', 'Self-contained, understandable independently of others.', 'Two requirements in one sentence'],
      ['Complete', 'Enough to guide further work, at the appropriate level of detail.', 'Missing information to proceed'],
      ['Consistent', 'Aligned with identified needs, not conflicting with other requirements.', 'Contradicts another requirement'],
      ['Concise', 'Contains no extraneous content.', 'Redundant prose'],
      ['Feasible', 'Reasonable within agreed risk, schedule and budget, or feasible enough to investigate through experiments.', 'Technically impossible'],
      ['Unambiguous', 'Stated so that it is clear whether a solution meets it or not.', '"The report must load quickly"'],
      ['Testable', 'It is possible to verify that it has been fulfilled.', 'No verifiable criterion'],
      ['Prioritized', 'Ranked or negotiated for importance against the others.', 'No priority assigned'],
      ['Understandable', 'Expressed in terminology common to those who will use it.', 'One department\'s jargon']
    ]},

    { t: 'h3', v: 'Activity statement 9.2 — Understand the environmental constraints in which your organization operates' },
    { t: 'ref', v: 'BA Standard 4 · BABOK 3.1' },
    { t: 'p', v: 'Constraints — policies, regulations, technology, structure — emerge from the current state analysis and influence the change strategy. When a new constraint makes the chosen approach unworkable, change strategy and solution scope are re-examined to keep them aligned with the future state: the scope can evolve.' },
    { t: 'key', v: 'In the official sample question for this activity, faced with a policy that rules out a useful tool the correct answer is to identify alternative tools or processes that comply with the policy: not to use it anyway, not merely to document the inefficiency, and not to pause the initiative until the rule changes.' },
    { t: 'p', v: 'In prioritization, regulatory demands imposed on the organization may take precedence over other stakeholder interests (the "penalty" factor).' },

    { t: 'h3', v: 'Activity statement 9.3 — Understand the impact of technology trends on your initiative' },
    { t: 'ref', v: 'BABOK 3.4 · BABOK 5.1' },
    { t: 'p', v: 'Technology and infrastructure are part of the current state. When a question cannot be answered by people or documents, the answer is elicitation through EXPERIMENTS: observational studies, proofs of concept, prototypes.' },
    { t: 'key', v: 'In the official sample question for this activity, the first step with an emerging technology is a risk-benefit analysis: you assess whether the technology is relevant to the initiative\'s goals and what it implies before building prototypes, setting up sandboxes, or seeking leadership support.' },
    { t: 'p', v: 'The three competencies of the Tools and Technology group (9.6), told apart by the purpose of the tools:' },
    { t: 'table', head: ['Competency', 'What the tools are for'], widths: [3000, 6000], rows: [
      ['Office Productivity Tools (9.6.1)', 'Organizing, dissecting, manipulating, understanding and communicating information clearly.'],
      ['Business Analysis Tools (9.6.2)', 'Modelling, diagramming, documenting, analyzing and mapping requirements, identifying relationships, tracking and storing artifacts.'],
      ['Communication Tools (9.6.3)', 'Planning and completing conversational and collaborative interactions, with virtual and co-located teams.']
    ]},
    { t: 'key', v: 'A notable effectiveness measure: knowing WHEN NOT to use communication technology. Sometimes the direct conversation is the right choice.' },

    { t: 'h3', v: 'Activity statement 9.4 — Understand industry benchmarks and reference standards of practice' },
    { t: 'ref', v: 'BABOK 4.4 · BABOK 7.3 · BABOK 7.6' },
    { t: 'p', v: 'The Regulator defines and enforces standards, imposed on the solution through legislation, corporate governance standards, audit standards or standards defined by organizational centers of competency.' },
    { t: 'p', v: 'Relevant Business Knowledge competencies:' },
    { t: 'ul', v: [
      'Industry Knowledge (9.3.2): trends, market forces and drivers, key processes, products, customer segments, suppliers, practices and regulations of the industry. Looks OUTSIDE the enterprise.',
      'Organization Knowledge (9.3.3): how the enterprise generates profits, its structure, the relationships between units, who occupies key positions, the formal AND INFORMAL authority channels. Looks INSIDE.',
      'Methodology Knowledge (9.3.5): methodologies determine timing, approach, the role of those involved and the accepted risk level.',
      'Business Acumen (9.3.1): understanding needs using experience from other situations, because organizations frequently share similar practices.'
    ]},
    { t: 'p', v: 'Business Rules Analysis (10.9) identifies, expresses, validates, refines and organizes the rules governing day-to-day operational behaviour. Rules must be managed INDEPENDENTLY of implementation technology, so they remain available for reference by business people.' },

    { t: 'trap', v: 'Typical traps · Industry Knowledge and Organization Knowledge swapped (outside versus inside) · "Feasible" read as "risk-free" · Confirming elicitation results described as more rigorous than analysis (it is the opposite) · Regulatory constraints treated as exclusively a legal matter.' }
  ]
}

];
