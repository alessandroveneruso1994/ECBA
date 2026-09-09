/** Appendices: the 20 techniques and the 29 competencies, assessed across domains. */
module.exports = [

{
  id: 'A',
  title: 'The 20 techniques assessed',
  weight: 'cross-cutting',
  questions: 'assessed within the nine domains',
  source: 'BABOK Guide, ch. 10',
  blocks: [
    { t: 'p', v: 'The blueprint asks you to study the purpose, description and usage considerations of these twenty techniques. They are not a domain of their own: the questions arrive inside the nine domains. The one-line purpose answers most of them.' },

    { t: 'h3', v: 'Eliciting information' },
    { t: 'table', head: ['Technique', 'Purpose'], widths: [2800, 6200], rows: [
      ['10.25 Interviews', 'Elicit information by talking to one or more people. ALSO establishes relationships and builds trust. Limitation: significant time required.'],
      ['10.50 Workshops', 'Bring stakeholders together to collaborate on achieving a PREDEFINED goal. Success depends heavily on facilitator and participants; too many slow it down, too few overlook needs.'],
      ['10.5 Brainstorming', 'Produce numerous new ideas and derive themes for analysis. No discussion, criticism or evaluation during the session. Aim for six to eight participants.'],
      ['10.10 Collaborative Games', 'Get participants to build a joint understanding of a problem or solution. Reveals hidden assumptions and draws in the normally quiet. Risk: false confidence in the conclusions.'],
      ['10.18 Document Analysis', 'Elicit information by examining existing materials describing the business environment or organizational assets. Mostly useful for the current state; documentation may be out of date.']
    ]},

    { t: 'h3', v: 'Modelling and analysing' },
    { t: 'table', head: ['Technique', 'Purpose'], widths: [2800, 6200], rows: [
      ['10.34 Process Analysis', 'Assess a process for efficiency and effectiveness and identify opportunities for change. Less effective on knowledge- or decision-intensive processes.'],
      ['10.35 Process Modelling', 'Standardized graphical model of how work is carried out; the foundation for process analysis. BPMN spans business and IT.'],
      ['10.15 Data Modelling', 'Describe entities/classes of a domain, attributes and relationships, providing shared semantics. A class also has operations, an entity does not.'],
      ['10.32 Organizational Modelling', 'Describe roles, responsibilities and reporting structures, aligning them with goals. Limitation: does not capture informal authority and influence.'],
      ['10.41 Scope Modelling', 'Define limits or boundaries and place elements inside or outside. Clarifies span of control and where effort will be applied.'],
      ['10.6 Business Capability Analysis', 'A framework for scoping and planning: shared understanding of outcomes, alignment with strategy, a scope and prioritization filter. Capabilities say WHAT the organization can do, not how.'],
      ['10.9 Business Rules Analysis', 'Identify, express, validate, refine and organize the rules guiding operational decisions. They must be managed independently of technology.']
    ]},

    { t: 'h3', v: 'Deciding and evaluating' },
    { t: 'table', head: ['Technique', 'Purpose'], widths: [2800, 6200], rows: [
      ['10.40 Root Cause Analysis', 'Identify and evaluate the UNDERLYING causes of a problem. The fishbone (Ishikawa) organizes possible causes. Without training you stop at symptoms.'],
      ['10.46 SWOT Analysis', 'Evaluate strengths and weaknesses (INTERNAL) and opportunities and threats (EXTERNAL). A high-level view; without a clear context the result is unfocused.'],
      ['10.38 Risk Analysis and Management', 'Identify areas of uncertainty that could negatively affect VALUE, evaluate and manage them. Covers strategic, tactical and operational risks.'],
      ['10.28 Metrics and KPIs', 'Measure the performance of solutions, components and matters of interest. Six characteristics of a good indicator: clear, relevant, economical, adequate, quantifiable, trustworthy and credible.'],
      ['10.27 Lessons Learned', 'Compile successes, opportunities for improvement, failures and recommendations for the future. If blame is assigned, honest discussion dies.']
    ]},

    { t: 'h3', v: 'Organizing work and stakeholders' },
    { t: 'table', head: ['Technique', 'Purpose'], widths: [2800, 6200], rows: [
      ['10.2 Backlog Management', 'Record, track and prioritize remaining work items. An item is added if it has value to a stakeholder. Only the top is elaborated in detail.'],
      ['10.48 User Stories', 'A small, concise statement of functionality or quality delivering value to a specific stakeholder. Format: who / what / why. NOT for long-term knowledge retention or detailed analysis.'],
      ['10.43 Stakeholder List, Map, or Personas', 'Analyse stakeholders and their characteristics, to identify all sources of requirements. Beware reusing old lists: the landscape changes.']
    ]}
  ]
},

{
  id: 'B',
  title: 'The 29 underlying competencies',
  weight: 'cross-cutting',
  questions: 'assessed within the nine domains',
  source: 'BABOK Guide, ch. 9',
  blocks: [
    { t: 'p', v: 'The blueprint asks for purpose, definition and effectiveness measures. Six groups: knowing which group a competency belongs to is already an exam question.' },

    { t: 'h3', v: '9.1 Analytical Thinking and Problem Solving — 7 competencies' },
    { t: 'table', head: ['Competency', 'In one line'], widths: [2600, 6400], rows: [
      ['Creative Thinking', 'Generating and productively considering new ideas, and applying them to existing problems.'],
      ['Decision Making', 'Understanding the criteria of a decision and helping others decide better. Remaining uncertainty is knowingly accepted.'],
      ['Learning', 'Rapidly absorbing new concepts, applying them to new areas and presenting them to others. Learning is a process for ALL stakeholders.'],
      ['Problem Solving', 'Defining the problem so it is clear to everyone, and solving the ROOT CAUSE while avoiding unvalidated assumptions.'],
      ['Systems Thinking', 'The whole has properties emerging from the interaction of components, not predictable from the components alone.'],
      ['Conceptual Thinking', 'Connecting information and patterns that may not be obviously related, abstractly and in the big picture.'],
      ['Visual Thinking', 'Creating graphical representations so stakeholders understand and provide input.']
    ]},

    { t: 'h3', v: '9.2 Behavioural Characteristics — 5 competencies' },
    { t: 'table', head: ['Competency', 'In one line'], widths: [2600, 6400], rows: [
      ['Ethics', 'Fairness, consideration and moral behaviour. Includes prompt disclosure of conflicts of interest and honesty about one\'s abilities.'],
      ['Personal Accountability', 'Planning the work, completing it as planned or RE-PLANNING it with sufficient reasoning and lead time. Builds credibility.'],
      ['Trustworthiness', 'The PERCEPTION by others that one is worthy of trust. Measured by how stakeholders behave: they bring issues, discuss difficult topics, do not blame.'],
      ['Organization and Time Management', 'Prioritizing tasks, managing time, organizing accumulated information for reuse. Stakeholders must feel their time is well spent.'],
      ['Adaptability', 'Changing techniques, style, methods and approach. Includes the courage to act differently from others.']
    ]},

    { t: 'h3', v: '9.3 Business Knowledge — 5 competencies' },
    { t: 'p', v: 'Told apart by the OBJECT of the knowledge: business in general, industry, own enterprise, solution, methodology.' },
    { t: 'table', head: ['Competency', 'In one line'], widths: [2600, 6400], rows: [
      ['Business Acumen', 'Understanding needs using experience from other situations: organizations share similar practices.'],
      ['Industry Knowledge', 'Trends, market forces, key processes, products, customer segments, regulations of the industry.'],
      ['Organization Knowledge', 'How the enterprise generates profits, its structure, who occupies key positions, formal AND INFORMAL channels.'],
      ['Solution Knowledge', 'Knowledge of an existing solution and of the market of alternatives. Includes knowing when a larger change is justified by business benefit.'],
      ['Methodology Knowledge', 'Methodologies determine timing, approach, roles and the accepted risk level.']
    ]},

    { t: 'h3', v: '9.4 Communication Skills — 4 competencies' },
    { t: 'p', v: 'Communication = the act of conveying information in a method which delivers the MEANING INTENDED.' },
    { t: 'table', head: ['Competency', 'In one line'], widths: [2600, 6400], rows: [
      ['Verbal Communication', 'Spoken words; also transfers emotional cues. Restating concepts so everyone understands the same information.'],
      ['Non-Verbal Communication', 'Conveys more meaning than words alone. Be aware of it without ASSUMING complete understanding; address mismatches between verbal and non-verbal.'],
      ['Written Communication', 'Text, symbols, models and sketches. The most demanding measure: the reader can paraphrase the content.'],
      ['Listening', 'Not just hearing words but understanding their meaning IN CONTEXT. Undivided attention, feedback, deferring judgment.']
    ]},

    { t: 'h3', v: '9.5 Interaction Skills — 5 competencies' },
    { t: 'table', head: ['Competency', 'In one line'], widths: [2600, 6400], rows: [
      ['Facilitation', 'Moderating discussions so all can articulate their views and appreciate those of others. A neutral third party, but intervenes when required.'],
      ['Leadership and Influencing', 'Motivating people towards shared goals, understanding individual motives and capabilities.'],
      ['Teamwork', 'A collaborative environment, trust, a shared sense of ownership of goals. Includes RESOLVING conflict, not preventing it.'],
      ['Negotiation and Conflict Resolution', 'Mediating so parties recognize differences and reach agreed conclusions. Needs are not always in opposition; separate the problem from the people.'],
      ['Teaching', 'Leading others to gain knowledge, VERIFYING that they can demonstrate it.']
    ]},

    { t: 'h3', v: '9.6 Tools and Technology — 3 competencies' },
    { t: 'p', v: 'Office Productivity Tools (organizing and communicating information) · Business Analysis Tools (modelling, documenting, tracking requirements) · Communication Tools (conversational and collaborative interactions, virtual teams).' },

    { t: 'trap', v: 'Typical traps · Facilitation, Teaching and Teamwork placed among the Communication Skills: they belong to Interaction Skills · Chapter 10 techniques presented as chapter 9 competencies · Systems Thinking and Conceptual Thinking confused (emergent properties versus connecting disparate information) · Personal Accountability and Trustworthiness confused (what you do versus how others perceive you).' }
  ]
}

];
