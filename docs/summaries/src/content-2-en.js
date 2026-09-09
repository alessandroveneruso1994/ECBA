/** Study summaries: domains 4-6 (BABOK Guide). */
module.exports = [

{
  id: 4,
  title: 'Change',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — Strategy Analysis (ch. 6), Requirements Life Cycle Management (ch. 5), BA Planning and Monitoring (ch. 3)',
  blocks: [
    { t: 'p', v: 'The domain of change: understanding why it is needed, what it touches, how to track progress and how to propose improvements.' },

    { t: 'h3', v: '4.1 Understand the factors that impact the work that you are doing' },
    { t: 'ref', v: 'BABOK 6.1 · BABOK 8.4' },
    { t: 'p', v: 'The key task is Analyze Current State (6.1): understanding why the enterprise needs to change some aspect of how it operates, and what would be directly or indirectly affected.' },
    { t: 'p', v: 'The current state includes organizational structure and culture, capabilities, technology and infrastructure, policies, business architecture, internal and external influencers. Business needs are the problems and opportunities of strategic importance: a complaint, a loss of revenue, a new market opportunity usually trigger their evaluation.' },
    { t: 'key', v: '"The need is a new app" is a wrong answer in disguise: the app is a solution, not a need. Starting from the solution skips the analysis of why.' },
    { t: 'p', v: 'Assess Risks (6.3) evaluates the undesirable consequences of internal and external forces during the transition to, and once in, the future state. In the BABOK, risk is always tied to VALUE, not generically to time and cost.' },
    { t: 'key', v: 'In the official sample question for this activity, the first factor to consider when working out why a process underperforms is its alignment with organizational strategy and business objectives: that is the benchmark performance is judged against. Tools, market conditions and stakeholder attitudes matter, but come later.' },

    { t: 'h3', v: '4.2 Analyze the impact of proposed changes' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 3.4 · BABOK 5.4' },
    { t: 'p', v: 'The five Requirements Life Cycle Management tasks are told apart by the verb in their purpose:' },
    { t: 'table', head: ['Task', 'Purpose'], widths: [2600, 6400], rows: [
      ['5.1 Trace Requirements', 'Align requirements and designs at different levels and manage the effects of change on related elements.'],
      ['5.2 Maintain Requirements', 'Retain accuracy and consistency across the whole life cycle, and support REUSE in other solutions.'],
      ['5.3 Prioritize Requirements', 'Rank requirements in order of relative importance.'],
      ['5.4 Assess Requirements Changes', 'Evaluate the implications of proposed changes.'],
      ['5.5 Approve Requirements', 'Obtain agreement and approval so that work can continue.']
    ]},
    { t: 'p', v: 'Gap analysis (within Define Change Strategy, 6.4) identifies the difference between current state and future state capabilities. It requires both states to be defined; using the same techniques to describe them simplifies the comparison.' },
    { t: 'p', v: 'Define Future State (6.2) determines the set of necessary conditions to meet the business need. Define Change Strategy (6.4) develops and assesses alternative approaches and selects the recommended one. The first says WHERE you want to arrive, the second HOW.' },

    { t: 'h3', v: '4.3 Support the implementation of changes' },
    { t: 'ref', v: 'BABOK 3.3 · BABOK 4.1 · BABOK 5.1 · BABOK 6.2' },
    { t: 'p', v: 'Supporting implementation means staying alongside the change while it is being delivered. Trace Requirements (5.1) keeps the link between needs and delivered components, so you can see at once what a delay or a modification actually touches. Plan Business Analysis Governance (3.3) defines who approves changes and through which process: during implementation you go through it, not through informal agreements. Define Future State (6.2) remains the reference against which you judge whether the work is still heading where it should.' },
    { t: 'key', v: 'In the official sample question for this activity, faced with a missed milestone the correct answer is neither to escalate straight to management nor to pause monitoring: it is to adjust the plan and communicate the updated timelines to stakeholders. Proactive management plus transparency, not escalation.' },
    { t: 'p', v: 'Prepare for Elicitation (4.1) is useful here too: when implementation surfaces missing information, you organise fresh elicitation instead of proceeding on assumptions. Lessons Learned (10.27) compiles successes, opportunities for improvement, failures and recommendations for future projects or phases.' },

    { t: 'h3', v: '4.4 Enable change through straightforward initiatives' },
    { t: 'ref', v: 'BABOK 5.1' },
    { t: 'p', v: 'Straightforward initiatives are the small, well-bounded changes a foundational practitioner can carry through alone: a process step to simplify, a report to rework, a rule to clarify. Traceability applies there too (Trace Requirements, 5.1): the link between the need and what you deliver is what separates an improvement from an improvised fix.' },
    { t: 'p', v: 'Recommend Actions to Increase Solution Value (8.5) starts from understanding the factors creating the difference between potential and actual value, and recommends how to align them.' },
    { t: 'p', v: 'Process Analysis (10.34) assesses a process for efficiency and effectiveness and identifies opportunities for change. Process Modelling (10.35) is the graphical representation that founds the analysis: modelling describes, analysis evaluates.' },

    { t: 'trap', v: 'Typical traps · Process analysis mistaken for process modelling · Assess Requirements Changes judged only by the benefit to the requester · Risk reduced to going over budget · Confusing improvement of the analysis process with improvement of the solution.' }
  ]
},

{
  id: 5,
  title: 'Need',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — Elicitation and Collaboration (ch. 4), RADD (ch. 7), RLCM (ch. 5)',
  blocks: [
    { t: 'p', v: 'Eliciting, documenting, validating and prioritizing needs. The domain with the most techniques involved.' },

    { t: 'h3', v: '5.1 Elicit needs from stakeholders' },
    { t: 'ref', v: 'BABOK 4.3 · BABOK 6.1' },
    { t: 'table', head: ['Type', 'What it is', 'Typical techniques'], widths: [1800, 4400, 2800], rows: [
      ['Collaborative', 'Direct interaction with stakeholders, relying on their experiences, expertise and judgment.', 'Interviews, Workshops, Brainstorming, Collaborative Games'],
      ['Research', 'Systematically discovering and studying information from materials or sources not directly known to stakeholders, including analysis of historical data.', 'Document Analysis, Data Mining'],
      ['Experiments', 'Information that cannot be known without a controlled test, because nobody knows it yet.', 'Observational studies, proofs of concept, prototypes']
    ]},
    { t: 'key', v: 'A recurring question: "what are the three common types of elicitation?" The most insidious distractor lists TECHNIQUES (interviews, workshops, surveys) instead of TYPES.' },
    { t: 'p', v: 'Prepare for Elicitation (4.1) defines the desired outcomes, selects techniques, establishes logistics and materials. Conduct Elicitation (4.2) draws out and explores the information. Stakeholders collaborate in two ways: by participating in the activity, and by researching and providing feedback on documents, systems, models and interfaces.' },
    { t: 'p', v: 'Interviews (10.25) also serve to establish relationships and build trust — the "rapport" that activity statement 5.1 explicitly requires.' },

    { t: 'h3', v: '5.2 Capture and refine the needs elicited from stakeholders' },
    { t: 'ref', v: 'BABOK 7.1' },
    { t: 'p', v: 'Three distinct checks, in increasing order of rigour:' },
    { t: 'table', head: ['Task', 'Question it answers', 'Rigour'], widths: [2800, 4400, 1800], rows: [
      ['4.3 Confirm Elicitation Results', 'Did I understand correctly what I was told? Checks accuracy and consistency against the source and other results.', 'Much less rigorous and formal than the review during analysis'],
      ['7.2 Verify Requirements', 'Is the requirement well written? Checks the quality characteristics.', 'Formal'],
      ['7.3 Validate Requirements', 'Is the requirement worth anything? Checks alignment with business requirements and the value expected.', 'Formal']
    ]},
    { t: 'key', v: 'Verify versus Validate is one of the most tested distinctions. A beautifully written requirement contributing to no objective passes verification and fails validation — and is a strong candidate for elimination.' },
    { t: 'p', v: 'The nine quality characteristics (Verify Requirements): atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable. Quality is ultimately determined by the needs of the stakeholders who will use the requirements and designs.' },
    { t: 'p', v: 'Specify and Model Requirements (7.1) analyzes, synthesizes and refines elicitation results into requirements and designs.' },

    { t: 'h3', v: '5.3 Analyze needs to ensure they are feasible and align with business outcomes' },
    { t: 'ref', v: 'BABOK 4.3 · BABOK 5.1 · BABOK 6.1' },
    { t: 'p', v: 'At foundational level the expectation is precise: compare stakeholder needs with outcomes and FLAG conflicts for review. Not decide unilaterally, not remove, not escalate without analysis.' },
    { t: 'p', v: 'Validate Requirements also identifies ASSUMPTIONS: when a product is unprecedented the customer response is assumed, and the assumption must be made explicit so the associated risk can be managed.' },

    { t: 'h3', v: '5.4 Prioritize needs based on their business value and urgency' },
    { t: 'ref', v: 'BABOK 5.3 · BABOK 6.1' },
    { t: 'p', v: 'The eight typical factors of Prioritize Requirements (5.3):' },
    { t: 'table', head: ['Factor', 'Meaning'], widths: [2400, 6600], rows: [
      ['Benefit', 'The advantage accruing to stakeholders, measured against the goals of the change.'],
      ['Penalty', 'The consequences of NOT implementing. Includes regulatory demands, which may take precedence over other stakeholder interests.'],
      ['Cost', 'Effort and resources. The information comes from the implementation team or the vendor; customers often change priority once they learn it.'],
      ['Risk', 'The chance the requirement cannot deliver the potential value, or cannot be met at all. If technical feasibility is in doubt, it is moved to the top to limit resources spent before finding out.'],
      ['Dependencies', 'A requirement that cannot be fulfilled unless another is. They may also be external: other teams\' decisions, funding commitments, resource availability.'],
      ['Time sensitivity', 'The "best before" date of the requirement: past a certain point its value diminishes.'],
      ['Stability', 'How likely the requirement is to change again. Working on an unstable requirement produces rework.'],
      ['Regulatory or policy compliance', 'Obligations imposed on the organization.']
    ]},
    { t: 'p', v: 'The basis for prioritization is agreed with the relevant stakeholders: it is a business decision, not the practitioner\'s technical choice.' },

    { t: 'trap', v: 'Typical traps · Types of elicitation confused with techniques · Verify and Validate swapped · Risk and Stability confused (the first is "will not deliver value", the second is "will change again") · Invented prioritization criteria: who proposed the requirement, how long it is, the order in which it was elicited.' }
  ]
},

{
  id: 6,
  title: 'Solution',
  weight: '10%',
  questions: '5 of 50 questions',
  source: 'BABOK Guide — RADD (ch. 7), Solution Evaluation (ch. 8), Strategy Analysis (ch. 6)',
  blocks: [
    { t: 'p', v: 'Evaluating options, defining scope and designs, checking that the solution actually works.' },

    { t: 'h3', v: '6.1 Participate in validating solutions to ensure they meet the need' },
    { t: 'ref', v: 'BABOK 7.2 · BABOK 7.3' },
    { t: 'p', v: 'Define Measurable Evaluation Criteria, within Validate Requirements (7.3): the expected benefits are defined in the future state, but the measurement criteria often are not. BASELINE metrics are established from the current state and TARGET metrics reflect the achievement of the objectives.' },
    { t: 'p', v: 'Measure Solution Performance (8.1): first check whether measures or collection methods already exist, ensuring the existing ones are accurate and relevant, then elicit the missing ones. Business goals, objectives and processes are common sources; measures may also be imposed by third parties such as vendors or regulators.' },
    { t: 'table', head: ['Type of measure', 'What it is'], widths: [2400, 6600], rows: [
      ['Quantitative', 'Numerical, countable or finite: amounts, quantities, rates.'],
      ['Qualitative', 'Subjective: attitudes, perceptions, responses of customers and users about how well the solution meets the need.']
    ]},
    { t: 'p', v: 'Measures must be validated with stakeholders, so the assessment is useful, and aligned with any higher-level measures that already exist.' },

    { t: 'h3', v: '6.2 Develop recommendations for potential solutions to business problems' },
    { t: 'ref', v: 'BABOK 4.2 · BABOK 6.3 · BABOK 8.5' },
    { t: 'p', v: 'A sequence worth remembering:' },
    { t: 'ul', v: [
      'Define Design Options (7.5): defines the solution approach, identifies opportunities to improve the business, allocates requirements across components and represents the options.',
      'Analyze Potential Value and Recommend Solution (7.6): estimates the potential value of EACH option and establishes which is most appropriate.'
    ]},
    { t: 'p', v: 'Risk Analysis and Management (10.38) identifies areas of uncertainty that could negatively affect value, analyses them and develops ways of dealing with them. It applies to strategic, tactical and operational risks. Identification is an ongoing activity, and the risk level varies over time.' },

    { t: 'h3', v: '6.3 Implement the scope of solutions to business problems' },
    { t: 'ref', v: 'BABOK 6.3 · BABOK 7.4 · BABOK 8.1' },
    { t: 'p', v: 'The solution scope defines the BOUNDARIES of the solution, described in enough detail for stakeholders to understand which new capabilities the change will deliver, and how the solution enables the future state\'s goals.' },
    { t: 'key', v: 'Two frequently tested points: the solution scope MAY EVOLVE throughout an initiative as more information is discovered, and it may include descriptions of OUT-OF-SCOPE components, for clarity.' },
    { t: 'p', v: 'Scope Modelling (10.41) defines limits or boundaries and places elements inside or outside them. It clarifies span of control, relevance of elements and where effort will be applied.' },

    { t: 'h3', v: '6.4 Support the design of business solutions' },
    { t: 'ref', v: 'BABOK 3.1 · BABOK 5.1 · BABOK 8.3' },
    { t: 'p', v: 'Specify and Model Requirements (7.1) produces requirements and designs; Define Requirements Architecture (7.4) ensures that requirements COLLECTIVELY support one another to fully achieve the objectives.' },
    { t: 'p', v: 'The same tasks and techniques can produce both requirements and designs: what differs is the purpose.' },
    { t: 'table', head: ['Model', 'What it represents'], widths: [2600, 6400], rows: [
      ['Process Modelling (10.35)', 'How work is carried out: sequential activities, roles, parallel branches.'],
      ['Data Modelling (10.15)', 'Entities/classes of a domain, attributes and relationships: provides shared semantics.'],
      ['Scope Modelling (10.41)', 'The boundaries: what is in and what is out.'],
      ['Organizational Modelling (10.32)', 'Roles, responsibilities and reporting structures.']
    ]},

    { t: 'h3', v: 'When the solution underperforms' },
    { t: 'p', v: 'Assess Solution Limitations (8.3) looks at factors INTERNAL to the solution. Solutions often have internal dependencies limiting the performance of the whole to that of the least effective component; when outputs are repeatedly ineffective, problem analysis is performed to find the source.' },

    { t: 'trap', v: 'Typical traps · Define Design Options and Analyze Potential Value put in the wrong order · Solution scope treated as fixed once approved · Process modelling and data modelling swapped (activities versus information) · The sponsor\'s preference presented as a substitute for value analysis.' }
  ]
}

];
