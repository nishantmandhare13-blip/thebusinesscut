// Part 1: Subject 1 (Discovery, lms-001..009) and Subject 2 (Strategy, lms-010..018)
const RAW_LESSONS = [
  // Subject 1 (9 lessons)
  {
    id: 'lms-001',
    filmTitle: 'Jobs',
    releaseYear: 2013,
    tmdbMovieId: 115782,
    subject: 'Product discovery and user research',
    topicTags: ['Customer Interviews', 'Latent Needs', 'Jobs To Be Done', 'User Bias'],
    lessonTitle: 'Uncovering Latent Needs Beyond Stated Customer Feedback',
    learningObjective: 'Analyze how Steve Jobs distinguished between what consumers explicitly request and what unarticulated pain points they actually experience.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Steve Jobs clashes with early Apple engineers and marketing personnel who insist on surveying customers about monitor specifications. Jobs argues that users cannot articulate a desire for graphical user interfaces or fonts because they have never seen them.',
    sceneTimestampRef: 'Approx. 00:42:15 (Instructor verified)',
    conceptExplanation: 'Traditional user research often suffers from stated-preference bias: users project their current workflows onto new tools. True product discovery requires discovering "latent needs"—underlying anxieties, social friction, and functional goals that customers do not yet possess the vocabulary to describe. Product managers must observe customer behavior in context rather than treating focus-group opinions as feature roadmaps.',
    framework: {
      name: 'Jobs-to-be-Done (JTBD) Four Forces',
      description: 'Evaluates the Push of current problems, Pull of new solutions, Anxiety of change, and Habit of the present.',
      keySteps: [
        'Identify the struggling moment in the user’s existing workflow.',
        'Map the Push: what frustrates the user today about incumbent solutions.',
        'Map the Pull: the magnetic appeal and emotional payoff of the novel paradigm.',
        'De-risk Anxiety and Habit: identify switching costs and muscle-memory obstacles.'
      ],
      templateSnippet: 'When [struggling situation], I want to [motivation/action], so that I can [expected functional & emotional outcome].'
    },
    discussionQuestions: [
      'When is relying on customer surveys actively dangerous for zero-to-one product innovation?',
      'How can an MBA product manager ethically balance visionary intuition with rigorous qualitative testing?',
      'What signals indicate that a user is articulating an anxiety rather than a genuine product requirement?'
    ],
    practicalAssignment: {
      title: 'Latent Need Interview Guide & JTBD Canvas',
      prompt: 'Draft an interview guide for a hardware or enterprise SaaS product where the target customer currently relies on manual spreadsheets. Formulate questions that uncover the struggling moment without asking what features they want.',
      deliverables: ['5 behavioral discovery interview questions', 'One complete JTBD Four Forces diagram', 'Synthesis of one unstated emotional need'],
      rubric: [
        { criteria: 'Behavioral inquiry vs feature polling', maxPoints: 10, description: 'Questions focus entirely on past actions, not hypothetical future wants.' },
        { criteria: 'Four forces rigor', maxPoints: 10, description: 'Accurately documents Push, Pull, Anxiety, and Habit.' },
        { criteria: 'Actionable PM takeaway', maxPoints: 5, description: 'Translates discovery insights into a crisp product opportunity hypothesis.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to JTBD theory, which force acts as an inhibitor preventing customer adoption?',
        options: ['Push of the current situation', 'Pull of the new idea', 'Habit of existing practices', 'Cost of customer acquisition'],
        correctOptionIndex: 2,
        explanation: 'Habit of the present and Anxiety of the new solution act as counter-forces to adoption, even when the pull of the new solution is strong.'
      },
      {
        question: 'Why did the protagonist in "Jobs" resist standard focus groups for early personal computers?',
        options: [
          'Focus groups were too expensive for Apple’s seed budget',
          'Users evaluate new technology through the lens of familiar mental models, failing to imagine paradigm shifts',
          'The Federal Trade Commission restricted user research in electronics',
          'Engineers had already mathematically solved all interface parameters'
        ],
        correctOptionIndex: 1,
        explanation: 'Users cannot reliably describe breakthroughs outside their lived mental models, necessitating observational discovery.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students should demonstrate that breakthrough products rarely stem from "what features do you want?" but from diagnosing root frictions.',
      teachingNotes: 'Emphasize that Jobs was not anti-research; he was anti-superficial polling. Connect this to Christensen’s milkshake JTBD case study.',
      commonStudentPitfalls: ['Proposing leading questions in customer interviews', 'Confusing product features with underlying customer jobs']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/q4r08r5yF3p6tZ7vG7fJ4yL3Y8c.jpg',
    featured: true
  },
  {
    id: 'lms-002',
    filmTitle: 'The Founder',
    releaseYear: 2016,
    tmdbMovieId: 361743,
    subject: 'Product discovery and user research',
    topicTags: ['Ergonomics', 'Rapid Prototyping', 'Ethnography', 'Process Flow'],
    lessonTitle: 'The Speedee Service System: Observational Ergonomics and Tennis Court Prototyping',
    learningObjective: 'Examine how physical prototyping and spatial ethnographic observation eliminate workflow bottlenecks in service product design.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'The McDonald brothers take their kitchen crew to an outdoor tennis court, drawing chalk lines representing grills, fryers, and prep stations. They run multiple mock burger rushes, erasing lines and reorganizing equipment footprints to shave seconds off ticket times.',
    sceneTimestampRef: 'Approx. 00:23:40 (Instructor verified)',
    conceptExplanation: 'Before code or stainless steel is deployed, low-fidelity simulation yields exponentially cheaper iterations. The McDonald brothers applied time-and-motion ethnography to identify physical collisions, reaching distances, and handoffs. For software PMs, the tennis court is analogous to clickable wireframes and usability lab observational logging.',
    framework: {
      name: 'Physical / Digital Service Blueprinting',
      description: 'Maps the line of visibility, frontstage interactions, backstage actions, and physical/digital evidence.',
      keySteps: [
        'Map user actions chronologically (ordering, paying, waiting, receiving).',
        'Document front-stage touchpoints seen by the user.',
        'Detail backstage operations and handoffs required to fulfill each step.',
        'Measure cycle times and bottlenecks at every transition.'
      ],
      templateSnippet: 'Touchpoint [X] -> Frontstage [Crew Action] -> Backstage [Grill Prep] -> Support [Inventory Pull] -> Target Duration: [Y sec].'
    },
    discussionQuestions: [
      'What are the modern software equivalents of drawing kitchen layouts in chalk on a tennis court?',
      'How does physical proximity in team workflows impact cycle time and bug rates in digital operations?',
      'When does relentless optimization of a core loop begin degrading worker morale or customer flexibility?'
    ],
    practicalAssignment: {
      title: 'Digital Service Blueprint Audit',
      prompt: 'Select a 2-sided marketplace app (e.g. food delivery, rideshare) and map out the service blueprint for the primary fulfillment loop. Identify two high-friction handoffs and propose low-cost prototype experiments.',
      deliverables: ['Service blueprint table with frontstage/backstage layers', 'Cycle time estimates per state', 'Two low-fidelity experiment designs'],
      rubric: [
        { criteria: 'Blueprint completeness', maxPoints: 10, description: 'Clear separation between customer, frontend, and backend processes.' },
        { criteria: 'Friction identification', maxPoints: 10, description: 'Identifies genuine latency bottlenecks.' },
        { criteria: 'Prototype practicality', maxPoints: 5, description: 'Proposes non-expensive tests before engineering build.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the McDonald brothers test kitchen layouts on a tennis court with chalk before buying equipment?',
        options: [
          'They lacked permits to build inside the restaurant',
          'Chalk iterations had zero capital expenditure and revealed physical collisions in real time',
          'It was a publicity stunt for the local newspaper',
          'Their equipment supplier had gone bankrupt'
        ],
        correctOptionIndex: 1,
        explanation: 'Low-fidelity simulation allowed them to test team choreography and ergonomics with zero scrap cost before locking in stainless steel.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Focus on how the cost of iteration increases tenfold with each progressive phase of production fidelity.',
      teachingNotes: 'Pair this with Toyota Production System (TPS) concepts and digital wireframing sprints.',
      commonStudentPitfalls: ['Focusing solely on the restaurant food rather than the underlying assembly and workflow architecture']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/v4vPq0cffkP64t48eU0L3Wp9w3O.jpg',
    featured: true
  },
  {
    id: 'lms-003',
    filmTitle: 'Chef',
    releaseYear: 2014,
    tmdbMovieId: 212778,
    subject: 'Product discovery and user research',
    topicTags: ['Minimum Viable Product', 'Customer Feedback Loops', 'Agile Validation', 'Pivoting'],
    lessonTitle: 'The Food Truck MVP: Agile Discovery and Direct Customer Feedback Loops',
    learningObjective: 'Understand how building a Minimum Viable Product (MVP) removes organizational gatekeepers and creates high-velocity customer feedback loops.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'After being stifled by his risk-averse restaurant owner and slammed by a prominent food critic, Chef Carl Casper purchases a dilapidated food truck. He renovates it with essential equipment, crafts a focused Cuban sandwich menu, and tests demand directly with local crowds across different cities.',
    sceneTimestampRef: 'Approx. 00:54:10 (Instructor verified)',
    conceptExplanation: 'Carl Casper’s food truck represents the quintessential Lean MVP: low capital overhead, minimal fixed infrastructure, and zero intermediary layers between the maker and the consumer. In tech product management, enterprise inertia often forces teams into bloated releases. Launching a stripped-down core value proposition surfaces authentic willingness-to-pay and organic word-of-mouth far faster.',
    framework: {
      name: 'Eric Ries Build-Measure-Learn Loop',
      description: 'The core agile framework for turning product hypotheses into validated organizational learning.',
      keySteps: [
        'Formulate the Riskiest Assumption: Will people pay for Cuban sandwiches in non-traditional urban markets?',
        'Build the smallest artifact capable of testing the hypothesis (the truck with 3 menu items).',
        'Measure real behavioral metrics (foot traffic, sell-out times, repeat patrons via Twitter/X).',
        'Decide whether to Persevere, Pivot, or Scale.'
      ],
      templateSnippet: 'Hypothesis: We believe [customer segment] will [action] because [core value proposition]. We will know we are right when [quantifiable metric] occurs within [timeframe].'
    },
    discussionQuestions: [
      'What was the primary riskiest assumption Chef Casper tested with the food truck that he could not test in the fine-dining kitchen?',
      'How did real-time social media communication alter the feedback loop between the product team and patrons?',
      'When is an MVP too bare-bones to reflect the true quality potential of a luxury or high-end product?'
    ],
    practicalAssignment: {
      title: 'Hypothesis-Driven MVP Design',
      prompt: 'Identify an established incumbent product burdened by feature bloat. Strip it down to a single core "hero workflow" suitable for a two-week pilot experiment. Define the minimum feature set and the primary measurement metric.',
      deliverables: ['Target user persona & core job', 'Feature exclusion list (what NOT to build)', 'Experiment design with pass/fail criteria'],
      rubric: [
        { criteria: 'Ruthless scoping', maxPoints: 10, description: 'Excludes all non-vital features without compromising the core value test.' },
        { criteria: 'Measurable metric', maxPoints: 10, description: 'Pass/fail criteria based on actual customer commitments (money or time).' },
        { criteria: 'Learning focus', maxPoints: 5, description: 'Clearly states what learning will be extracted.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What constitutes the defining characteristic of a true Minimum Viable Product (MVP)?',
        options: [
          'A half-finished product released quickly to meet quarterly revenue quotas',
          'The smallest experiment required to generate validated learning about customer behavior',
          'A prototype shown exclusively to angel investors behind closed doors',
          'A discounted version of an existing legacy product line'
        ],
        correctOptionIndex: 1,
        explanation: 'An MVP is explicitly an experiment designed to maximize validated learning with minimal effort and capital.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Guide students to appreciate that the food truck was not a downgrade, but an unbundling of high-value culinary craft from restaurant overhead.',
      teachingNotes: 'Contrast Carl Casper’s owner (who demanded the traditional menu) with agile autonomy.',
      commonStudentPitfalls: ['Equating MVP with a low-quality or buggy product rather than a tightly scoped one']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/6rY4zFqFh3r0vN8s4W8M4V3Y2q.jpg'
  },
  {
    id: 'lms-004',
    filmTitle: 'Air',
    releaseYear: 2023,
    tmdbMovieId: 964980,
    subject: 'Product discovery and user research',
    topicTags: ['Customer Persona', 'Extreme Users', 'Value Proposition', 'Anchor Segment'],
    lessonTitle: 'Targeting the Extreme User: Sonny Vaccaro and the Jordan Anchor Persona',
    learningObjective: 'Learn how studying an extreme customer persona unlocks asymmetric product differentiation and brand loyalty.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Nike basketball scout Sonny Vaccaro re-watches tape of high-school phenom Michael Jordan for hours, rewinding small off-the-ball movements and instinctual plays. He convinces Nike leadership to abandon spreading their budget across three average NBA draft picks and instead bet the entire budget on a custom sneaker built specifically around Jordan.',
    sceneTimestampRef: 'Approx. 00:33:15 (Instructor verified)',
    conceptExplanation: 'Mainstream product managers often design for the average user, creating products that please everyone moderately but delight no one passionately. By anchoring discovery around an "extreme user"—someone with the highest performance demands, physical strain, or aesthetic desires—product teams unearth breakthrough design constraints that subsequently cascade into mass-market adoption.',
    framework: {
      name: 'Extreme User Research & Persona Anchoring',
      description: 'Technique from design thinking where designers research users at the opposite ends of the adoption spectrum.',
      keySteps: [
        'Identify the extreme user spectrum (power users vs completely uninitiated users).',
        'Observe behavioral nuances and implicit requirements under peak load.',
        'Synthesize findings into unique design attributes (e.g., custom cushioning, color rules).',
        'Validate whether solving the extreme user’s need provides an aspirational moat for mainstream buyers.'
      ],
      templateSnippet: 'Extreme Persona [X] experiences [extreme friction/demand] under [context]. By solving this, we create aspirational value for [mainstream audience Y].'
    },
    discussionQuestions: [
      'Why is designing for the "average customer" often a recipe for mediocrity in highly competitive markets?',
      'How did Sonny Vaccaro discern that Michael Jordan’s charisma and athletic style could carry an entire product line?',
      'What are the portfolio risks of allocating 100% of an R&D/marketing budget to a single anchor user persona?'
    ],
    practicalAssignment: {
      title: 'Extreme Persona Profile & Feature Synthesis',
      prompt: 'Select an existing digital or physical consumer category (e.g. running shoes, note-taking software, mechanical keyboards). Identify an extreme user at the edge of the market. Develop 3 product features tailored exclusively to them and justify how those features will cross over to everyday users.',
      deliverables: ['Detailed extreme persona profile', '3 targeted feature specifications', 'Mainstream spillover justification'],
      rubric: [
        { criteria: 'Edge persona depth', maxPoints: 10, description: 'Demonstrates deep empathy with non-standard usage patterns.' },
        { criteria: 'Feature differentiation', maxPoints: 10, description: 'Features directly address extreme constraints.' },
        { criteria: 'Mainstream transfer logic', maxPoints: 5, description: 'Coherent MBA rationale for broad market appeal.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why do design thinkers deliberately study "extreme users" instead of median users?',
        options: [
          'Extreme users represent the largest demographic percentage of total revenue',
          'Their exaggerated workarounds and heightened sensitivities amplify latent needs that median users feel but ignore',
          'Extreme users require less customer support than typical users',
          'Federal accessibility regulations mandate interviewing extreme users first'
        ],
        correctOptionIndex: 1,
        explanation: 'Extreme users face amplified pain points, forcing them to invent workarounds that reveal profound product opportunities.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students should show how Nike was willing to pay NBA uniform fines because the extreme differentiation created unprecedented cultural cachet.',
      teachingNotes: 'Tie this to Geoffrey Moore’s beachhead strategy in Crossing the Chasm.',
      commonStudentPitfalls: ['Confusing an extreme user with a toxic or unviable customer segment']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/762KuDYfg4g1H784n8Dq9vM9cM1.jpg'
  },
  {
    id: 'lms-005',
    filmTitle: 'Her',
    releaseYear: 2013,
    tmdbMovieId: 152601,
    subject: 'Product discovery and user research',
    topicTags: ['Conversational AI', 'Emotional UX', 'Anthropomorphism', 'User Intimacy'],
    lessonTitle: 'Designing for Intimacy: Qualitative Research in Affective Computing',
    learningObjective: 'Evaluate the psychological boundaries and customer vulnerability in conversational and generative AI products.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Framework Deep Dive',
    sceneDescription: 'Theodore Twombly configures his newly purchased artificial intelligence operating system (Samantha). Rather than asking purely transactional questions, the system asks personal, emotional questions about his relationships, tone, and loneliness, rapidly adapting its verbal cadence to foster deep emotional rapport.',
    sceneTimestampRef: 'Approx. 00:14:20 (Instructor verified)',
    conceptExplanation: 'As AI products evolve from tool-based utilities (e.g. calculators, search engines) to relational companions and copilots, user research methodologies must transition from measuring task-completion speed to measuring psychological safety, cognitive load, and emotional resonance. Product managers must navigate the fine line between user delight and unhealthy codependence.',
    framework: {
      name: 'Affective Interaction Design Continuum',
      description: 'A 4-tier model assessing emotional depth in human-computer interfaces.',
      keySteps: [
        'Level 1 - Functional: Executes explicit user commands with deterministic output.',
        'Level 2 - Contextual: Anticipates user schedule and situational friction.',
        'Level 3 - Empathic: Detects vocal tone, hesitation, and emotional state; mirrors appropriate warmth.',
        'Level 4 - Relational: Builds shared episodic memory and persistent interpersonal rapport.'
      ],
      templateSnippet: 'User Emotion State: [Anxious/Tired] -> System Modulation: [Calm cadence, reduced choices] -> Boundary Guardrail: [Avoid emotional manipulation].'
    },
    discussionQuestions: [
      'What are the ethical responsibilities of product teams when users form genuine emotional attachments to algorithmic interfaces?',
      'How does emotional anthropomorphism affect user churn and willingness-to-pay?',
      'What metrics beyond DAU and Session Length should measure the health of an affective AI product?'
    ],
    practicalAssignment: {
      title: 'Affective UX Guardrail Policy',
      prompt: 'Draft an ethical product discovery framework for an AI wellness companion. Define 3 qualitative user research protocols to test emotional attachment and establish guardrails to prevent harmful dependency.',
      deliverables: ['3 qualitative emotional test protocols', 'Dependency risk taxonomy', '2 concrete product boundary interventions'],
      rubric: [
        { criteria: 'Ethical awareness', maxPoints: 10, description: 'Explicitly addresses user vulnerability and dependency risks.' },
        { criteria: 'Qualitative rigor', maxPoints: 10, description: 'Provides realistic discovery interview protocols.' },
        { criteria: 'Actionable guardrails', maxPoints: 5, description: 'Interventions are technologically feasible and measurable.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'When an AI product moves from functional to relational interaction, what metric becomes potentially misleading if viewed in isolation?',
        options: [
          'Server uptime latency',
          'Session length and engagement time (which may reflect unhealthy dependency rather than value)',
          'API error rates',
          'Memory footprint on disk'
        ],
        correctOptionIndex: 1,
        explanation: 'Extreme session length in relational AI can signal addiction or unhealthy detachment from real-world human support systems.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Encourage students to look at contemporary LLM companion apps and customer research ethics.',
      teachingNotes: 'Reference Sherry Turkle’s work on Alone Together and human-robot interaction.',
      commonStudentPitfalls: ['Treating conversational AI solely as an NLP engineering challenge rather than a psychological experience']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/eCOtqtfvn7mxv6U41bWc0kE1W.jpg'
  },
  {
    id: 'lms-006',
    filmTitle: 'Julie & Julia',
    releaseYear: 2009,
    tmdbMovieId: 24264,
    subject: 'Product discovery and user research',
    topicTags: ['Empathy Mapping', 'Content Iteration', 'Audience Building', 'User Feedback'],
    lessonTitle: 'Iterative Content Discovery and Empathy Mapping for Early Adopters',
    learningObjective: 'Examine how public, daily iterative delivery uncovers audience affinity and builds authentic customer community.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Julie Powell, trapped in a dead-end administrative cubicle job, commits to cooking all 524 recipes in Julia Child’s classic cookbook in 365 days while blogging every daily success and failure. Early on, she wonders if anyone is reading until readers begin commenting with advice, encouragement, and shared cooking disasters.',
    sceneTimestampRef: 'Approx. 00:38:50 (Instructor verified)',
    conceptExplanation: 'Building in public allows creators and product teams to conduct real-time customer empathy mapping. Instead of keeping a product secret until an official launch, exposing the imperfect journey attracts early evangelists who feel co-ownership of the outcome. This iterative loop reduces feature risk and accelerates organic word-of-mouth distribution.',
    framework: {
      name: 'Audience Empathy Map (Dave Gray)',
      description: 'Maps what the user Thinks, Feels, Hears, Sees, Says, and Does, along with their Pains and Gains.',
      keySteps: [
        'Define the target reader/user in their day-to-day context.',
        'Document sensory inputs: What do they see and hear in their current environment?',
        'Capture internal monologues: What are their unspoken fears and aspirations?',
        'Synthesize core Pains (frustrations) and Gains (desired wins).'
      ],
      templateSnippet: 'Says: "[Stated goal]" vs Feels: "[Secret anxiety]" -> Content/Feature Bridge: [Authentic vulnerability].'
    },
    discussionQuestions: [
      'How does sharing vulnerability and failed experiments alter customer affinity compared to polished corporate marketing?',
      'What are the operational risks of "building in public" for an early-stage venture?',
      'How can a product team differentiate between vocal commenters and the silent majority of users?'
    ],
    practicalAssignment: {
      title: 'Empathy Map & Build-in-Public Launch Plan',
      prompt: 'Create an Empathy Map for a niche B2B or consumer audience. Develop a 14-day "build in public" mini-sprint detailing what artifacts, metrics, and vulnerabilities you would share daily to validate market interest.',
      deliverables: ['Complete 6-quadrant Empathy Map', '14-day content & feature release roadmap', 'Feedback collection mechanism'],
      rubric: [
        { criteria: 'Empathy map depth', maxPoints: 10, description: 'Draws sharp contrast between what users say and what they feel.' },
        { criteria: 'Sprint feasibility', maxPoints: 10, description: 'Daily deliverables are realistic and drive learning.' },
        { criteria: 'Community engagement strategy', maxPoints: 5, description: 'Converts audience commentary into prioritized improvements.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary product discovery advantage of "building in public"?',
        options: [
          'Guaranteed protection against intellectual property theft',
          'Instant, low-cost qualitative feedback from early adopters who invest emotionally in the product’s success',
          'Avoidance of all software testing procedures',
          'Direct tax subsidies for open-source initiatives'
        ],
        correctOptionIndex: 1,
        explanation: 'Building in public creates an immediate dialogue with high-intent early adopters, drastically lowering customer validation costs.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the contrast between Julia Child’s 8-year cookbook development cycle and Julie Powell’s daily blogging cadence.',
      teachingNotes: 'Discuss modern Substack, IndieHackers, and Twitter/X build-in-public trends.',
      commonStudentPitfalls: ['Confusing social media vanity metrics with validated customer willingness-to-pay']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/3rK3m0P9u7F9b0jK2vF4N8y6C.jpg'
  },
  {
    id: 'lms-007',
    filmTitle: 'Ratatouille',
    releaseYear: 2007,
    tmdbMovieId: 2062,
    subject: 'Product discovery and user research',
    topicTags: ['Customer Archetypes', 'Disruptive Talent', 'Taste & Craft', 'User Segmentation'],
    lessonTitle: 'Defying Conventional User Archetypes: The Non-Obvious Creator',
    learningObjective: 'Challenge standard demographic customer profiling to identify unconventional power users and creators.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Remy the rat discovers that despite his physical species being despised in kitchens, his sense of smell and culinary instincts surpass trained human chefs. By partnering with Linguini, an unskilled human, they create a symbiotic interface to produce world-class dishes in Paris.',
    sceneTimestampRef: 'Approx. 00:28:10 (Instructor verified)',
    conceptExplanation: 'Product managers frequently rely on lazy demographic personas (e.g. "Male, 25-34, urban professional") which obscure true behavioral drivers. Breakthrough platform products (like Roblox, Substack, or Shopify) succeed because they empower non-traditional creators who do not fit legacy institutional gatekeeper profiles.',
    framework: {
      name: 'Behavioral vs. Demographic Persona Matrix',
      description: 'Shifts focus from superficial demographics to underlying capabilities, intrinsic motivations, and tool affordances.',
      keySteps: [
        'Audit incumbent industry gatekeepers (credentials, pedigree, capital barriers).',
        'Identify excluded populations possessing latent domain talent or passion.',
        'Design interface affordances that lower the execution barrier without diluting output quality.',
        'Measure platform value created by non-traditional participants.'
      ],
      templateSnippet: 'Traditional Profile: [Requires X credential] -> Enabled Profile: [Possesses latent passion Y] -> Enabled by Interface: [Z].'
    },
    discussionQuestions: [
      'Why do legacy corporate evaluation frameworks consistently overlook non-traditional product champions?',
      'How does an intuitive interface empower non-technical or marginalized users to achieve expert-level outcomes?',
      'What are the brand and reputational hurdles of championing an unconventional customer base?'
    ],
    practicalAssignment: {
      title: 'Unconventional Creator Onboarding Audit',
      prompt: 'Select a creator platform (e.g. YouTube, Unreal Engine, Webflow). Identify the friction points that prevent non-technical users from expressing their creativity. Propose an interface feature that democratizes advanced creation.',
      deliverables: ['Barrier analysis of current onboarding', 'Wireframe/description of assistive interface', 'Evaluation of output quality risks'],
      rubric: [
        { criteria: 'Insight into barrier', maxPoints: 10, description: 'Pinpoints specific cognitive or procedural hurdles.' },
        { criteria: 'Assistive innovation', maxPoints: 10, description: 'Interface innovation preserves high creative ceiling while lowering floor.' },
        { criteria: 'Quality control logic', maxPoints: 5, description: 'Ensures platform reputation is protected.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the risk of defining product personas exclusively through demographic attributes?',
        options: [
          'It violates software copyright laws',
          'Demographics correlate poorly with actual user motivation, job-to-be-done, and behavioral triggers',
          'It increases database hosting costs',
          'Demographic data cannot be collected online'
        ],
        correctOptionIndex: 1,
        explanation: 'Users of identical demographics often have diametrically opposed motivations and workflows; behavioral habits matter far more.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Remind students of Anton Ego’s climactic realization: "Not everyone can become a great artist, but a great artist can come from anywhere."',
      teachingNotes: 'Tie this to user-generated content (UGC) platforms and AI copilots that democratize specialized skills.',
      commonStudentPitfalls: ['Focusing on the cartoon premise rather than the serious lessons on creator empowerment']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/npHNjld2VT0vLw6dJmSg1qK1i9.jpg'
  },
  {
    id: 'lms-008',
    filmTitle: 'The Social Network',
    releaseYear: 2010,
    tmdbMovieId: 37799,
    subject: 'Product discovery and user research',
    topicTags: ['Feedback Loops', 'Engagement Hooks', 'Organic Discovery', 'Social Dynamics'],
    lessonTitle: 'The Relationship Status Feature: Organic Discovery of Social Friction',
    learningObjective: 'Analyze how observing campus offline social rituals informed high-retention digital engagement features.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Mark Zuckerberg is studying in computer labs when a fellow student asks if a girl in art history class has a boyfriend. Zuckerberg realizes that people walk around campus constantly wondering about others’ romantic availability, rushes to his dorm room, and codes the "Relationship Status" feature.',
    sceneTimestampRef: 'Approx. 00:36:20 (Instructor verified)',
    conceptExplanation: 'Great product features rarely come from brainstorming meetings; they come from observing real-world social friction that customers constantly expend cognitive energy trying to resolve. Zuckerberg recognized that offline college life revolved around social signaling, gossip, and relationship status. Encoding that offline friction into a searchable database created an instantaneous, self-reinforcing engagement loop.',
    framework: {
      name: 'Nir Eyal Hook Model (Trigger-Action-Variable Reward-Investment)',
      description: 'Framework explaining the psychological cycle driving habit-forming products.',
      keySteps: [
        'External / Internal Trigger: Curiosity or anxiety about someone’s romantic availability.',
        'Action: Log into the site and search a profile.',
        'Variable Reward: Discovering unexpected status changes ("Single" vs "In a Relationship").',
        'Investment: Updating one’s own profile, adding photos, and expanding the social graph.'
      ],
      templateSnippet: 'Trigger [Social curiosity] -> Minimal Action [1-click profile view] -> Variable Reward [Novel relationship revelation] -> User Investment [Data contribution].'
    },
    discussionQuestions: [
      'Why was the "Relationship Status" field far more viral than a generic bio text box?',
      'How does structuring unstructured human gossip into standardized database fields create network value?',
      'What are the ethical boundary conditions when designing features that exploit social comparison and voyeurism?'
    ],
    practicalAssignment: {
      title: 'Social Friction Feature Teardown & Hook Canvas',
      prompt: 'Identify an offline social or workplace friction that people currently navigate through informal gossip or guesswork. Design a standardized product feature that clarifies this status, and map it across the 4 stages of the Hook Model.',
      deliverables: ['Description of offline friction', 'Feature schema (fields & privacy controls)', 'Hook Model canvas with all 4 phases'],
      rubric: [
        { criteria: 'Friction fidelity', maxPoints: 10, description: 'Grounds feature in a verified human psychological need.' },
        { criteria: 'Hook mechanics', maxPoints: 10, description: 'Accurately explains variable reward and user investment.' },
        { criteria: 'Privacy safeguards', maxPoints: 5, description: 'Includes responsible consent mechanisms.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In the Hook Model, why is "Variable Reward" critical for habit formation?',
        options: [
          'It guarantees users receive monetary cashbacks',
          'Unpredictability stimulates dopamine release, making the urge to check the product recurrent',
          'It satisfies international GDPR data retention guidelines',
          'It lowers server compute overhead by staggering queries'
        ],
        correctOptionIndex: 1,
        explanation: 'Variable rewards trigger heightened anticipatory dopamine, creating strong habit-forming behavioral loops.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Emphasize that Facebook was not just a directory; it was an active mirror of collegiate social competition and status anxiety.',
      teachingNotes: 'Compare Zuckerberg’s speed of feature deployment with traditional enterprise roadmapping cycles.',
      commonStudentPitfalls: ['Focusing on the personal drama between founders rather than the underlying product mechanics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/n0ybibhJtQ5icDqTpT0zFNTsPUt.jpg'
  },
  {
    id: 'lms-009',
    filmTitle: 'Ford v Ferrari',
    releaseYear: 2019,
    tmdbMovieId: 359724,
    subject: 'Product discovery and user research',
    topicTags: ['Telemetry', 'Human-in-the-Loop', 'Ethnography', 'Test Engineering'],
    lessonTitle: 'Driver-in-the-Loop Telemetry: Integrating Quantitative Data with Human Intuition',
    learningObjective: 'Evaluate how combining quantitative telemetry with qualitative expert user feedback prevents false design optimizations.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Ken Miles tests the prototype Ford GT40 on an airstrip. While Ford’s corporate engineers point to dial gauges and slide rules declaring the vehicle aerodynamically sound, Miles tapes small pieces of yarn across the car’s hood and doors. As he accelerates, the erratic fluttering of the yarn visually reveals severe airflow turbulence that the static sensors failed to detect.',
    sceneTimestampRef: 'Approx. 00:46:30 (Instructor verified)',
    conceptExplanation: 'In modern tech organizations, product teams often suffer from "dashboard blindness"—relying blindly on aggregated telemetry while ignoring the qualitative friction experienced by actual power users. The yarn test demonstrates low-cost visual ethnography: making invisible system behavior tangible so engineers and domain experts can establish a shared ground truth.',
    framework: {
      name: 'Mixed-Methods Triangulation Matrix',
      description: 'Framework balancing Big Data (Quantitative Telemetry) with Thick Data (Qualitative Human Observation).',
      keySteps: [
        'Collect Quantitative Sensor/Log Data (What is happening across the population).',
        'Deploy Qualitative Ethnographic Observation (Why users act that way in the moment).',
        'Identify Divergences: Where do instrumented metrics conflict with user frustration?',
        'Synthesize Root-Cause Hypotheses and test via physical/visual prototypes.'
      ],
      templateSnippet: 'Metric Says: [System optimal at X] vs Driver Feels: [Instability during Y] -> Low-Cost Visual Test: [Yarn on hood / Session replay].'
    },
    discussionQuestions: [
      'What are modern software equivalents of taping yarn to a racecar to visualize invisible air turbulence?',
      'Why did Ford’s corporate engineers resist Ken Miles’ qualitative feedback despite his unmatched track record?',
      'How should a PM arbitrate when product telemetry shows healthy engagement but customer interviews reveal severe user frustration?'
    ],
    practicalAssignment: {
      title: 'Triangulation Audit: Resolving Metric-User Conflict',
      prompt: 'Scenario: An e-commerce checkout flow has an 85% completion rate, but Net Promoter Score is dropping. Formulate a mixed-methods research plan utilizing both session recordings and user interviews to uncover the hidden friction.',
      deliverables: ['Quantitative telemetry audit list', 'Qualitative interview protocol for recently completed orders', 'Triangulation scorecard template'],
      rubric: [
        { criteria: 'Metric depth', maxPoints: 10, description: 'Pinpoints non-obvious telemetry gaps (e.g. error recovery time, rage clicks).' },
        { criteria: 'Interview nuance', maxPoints: 10, description: 'Questions uncover subtle post-transaction remorse or friction.' },
        { criteria: 'Triangulation methodology', maxPoints: 5, description: 'Provides a clear synthesis decision tree.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What danger is illustrated when Ford engineers relied solely on static calculations rather than Miles’ track experience?',
        options: [
          'Lack of adequate computational server power',
          'Dashboard blindness: confusing simplified mathematical models with real-world dynamic operating conditions',
          'Violation of corporate purchasing guidelines',
          'Inability to market to international racing sponsors'
        ],
        correctOptionIndex: 1,
        explanation: 'Mathematical models abstract away real-world variables; without human-in-the-loop qualitative testing, dangerous oversights occur.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Contrast Carroll Shelby and Ken Miles’ field agility with Leo Beebe’s bureaucratic headquarters mentality.',
      teachingNotes: 'Connect this to UX session replays (e.g. FullStory, Hotjar) and rage-click tracking.',
      commonStudentPitfalls: ['Dismissing data in favor of pure gut instinct, rather than recognizing that both must validate each other']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/6ApOpGKlsq7Lglsq8fdwG5rR9xW.jpg'
  },

  // ==========================================
  // SUBJECT 2: Product strategy and roadmaps (9 lessons: lms-010..lms-018)
  // ==========================================
  {
    id: 'lms-010',
    filmTitle: 'The Aviator',
    releaseYear: 2004,
    tmdbMovieId: 2567,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Moonshots', 'Capital Allocation', 'Sunk Cost Fallacy', 'Technological Risk'],
    lessonTitle: 'Capital Allocation in Moonshot Technology Bets: The Hercules H-4 Spruce Goose',
    learningObjective: 'Analyze how visionaries manage long-horizon R&D bets and avoid catastrophic sunk cost traps in capital-intensive product roadmaps.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Howard Hughes defends his spending of millions in government wartime contracts on the Hercules H-4 flying boat before a hostile Senate investigative committee. He argues that aviation leaps require absorbing immense upfront capital risks that conventional procurement accountants cannot stomach.',
    sceneTimestampRef: 'Approx. 02:24:10 (Instructor verified)',
    conceptExplanation: 'Product roadmaps for frontier technology (such as autonomous vehicles, quantum computing, or aerospace) cannot be governed like incremental SaaS enhancements. Strategic PMs must implement staged stage-gate funding, clear off-ramps, and objective kill-criteria to distinguish between courageous persistence and delusion.',
    framework: {
      name: 'Stage-Gate Frontier Innovation Funnel (Cooper)',
      description: 'Framework establishing strict de-risking milestones before unlocking subsequent capital tranches.',
      keySteps: [
        'Gate 1 - Feasibility Proof: Physical or algorithmic validation in controlled lab conditions.',
        'Gate 2 - Unit Economic Horizon: Theoretical model showing line-of-sight to margin profitability.',
        'Gate 3 - Regulatory & Operational Fit: Meeting legal compliance and manufacturing tolerances.',
        'Kill Criteria Trigger: Predetermined boundary where project is archived if threshold is missed.'
      ],
      templateSnippet: 'Stage [N] Milestone: [Deliverable] -> Max Burn: [$X] -> Stage-Gate Review Panel: [Independent audit] -> Go/Kill Decision: [Threshold Y].'
    },
    discussionQuestions: [
      'How can an executive board separate visionary technical leadership from reckless ego-driven R&D spending?',
      'What are the psychological triggers that make abandoning a high-profile moonshot so politically painful in corporations?',
      'When is achieving a symbolic engineering milestone (like flying the H-4 for one mile) economically worth the capital invested?'
    ],
    practicalAssignment: {
      title: 'Stage-Gate Governance Policy for Frontier AI/Hardware',
      prompt: 'Draft a stage-gate roadmap policy for an autonomous delivery drone initiative. Define 3 stages, specific measurable gating criteria for each, and 2 non-negotiable "kill triggers".',
      deliverables: ['Stage-gate funnel diagram and metrics', 'Financial burn cap per phase', 'Board kill-decision protocol'],
      rubric: [
        { criteria: 'Gating measurability', maxPoints: 10, description: 'Milestones are objective, binary, and technically rigorous.' },
        { criteria: 'Financial governance', maxPoints: 10, description: 'Clear capital allocation discipline and stop-loss logic.' },
        { criteria: 'Kill-switch courage', maxPoints: 5, description: 'Identifies realistic indicators of structural project unfeasibility.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary purpose of a stage-gate review process in product portfolio management?',
        options: [
          'To ensure all projects are funded to market launch regardless of cost',
          'To de-risk capital deployment by releasing funding only when predetermined validation milestones are achieved',
          'To eliminate all software engineers who disagree with the CEO',
          'To outsource patent filing to third-party law firms'
        ],
        correctOptionIndex: 1,
        explanation: 'Stage-gate frameworks protect enterprise capital by preventing sunk cost escalation into unviable moonshots.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students should address Hughes’ technical genius alongside his severe lack of governance oversight.',
      teachingNotes: 'Compare Hughes Aircraft to Google X’s philosophy of celebrating killed projects.',
      commonStudentPitfalls: ['Glamorizing reckless founder stubbornness without analyzing capital destruction']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/lx4QzVw7BvL5wP1m40G4K4K7T3s.jpg'
  },
  {
    id: 'lms-011',
    filmTitle: 'Ford v Ferrari',
    releaseYear: 2019,
    tmdbMovieId: 359724,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Disruption', 'Competitive Advantage', 'Incumbent Advantage', 'Moats'],
    lessonTitle: 'Disrupting the Luxury Incumbent: Strategic Asymmetry at Le Mans',
    learningObjective: 'Examine how an industrial challenger deploys asymmetric manufacturing and capital advantages to beat a specialized craft incumbent.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Henry Ford II, enraged by Enzo Ferrari’s public insult during aborted merger talks, orders his executives to build a race car to crush Ferrari at the 24 Hours of Le Mans. The team realizes Ferrari has peerless artisanal racing heritage, but Ford has infinite assembly capital, wind tunnels, and industrial scale.',
    sceneTimestampRef: 'Approx. 00:18:45 (Instructor verified)',
    conceptExplanation: 'Challengers often fail when they attempt to out-craft an artisanal incumbent on the incumbent’s native terms. Ford won not by trying to out-handcraft Italian chassis, but by applying industrial manufacturing: modular quick-change brake assemblies, standardized V8 blocks, and scientific computer-assisted aerodynamics. Strategy requires fighting where your economic engine is inherently superior.',
    framework: {
      name: 'Michael Porter’s Strategic Positioning & Trade-Offs',
      description: 'Strategy is about choosing what NOT to do and aligning whole systems of activity for unique value.',
      keySteps: [
        'Analyze Incumbent Strengths: High brand prestige, bespoke craftsmanship, racing heritage.',
        'Identify Incumbent Vulnerabilities: Fragility under sustained load, lack of capital for redundant tooling.',
        'Deploy Asymmetric Core Competency: Standardized modular parts, relentless endurance testing, multi-team redundancy.',
        'Enforce Strategic Fit: Every subsystem is designed around endurance and speed of service, not artisanal beauty.'
      ],
      templateSnippet: 'Incumbent Moat: [Artisanal craft] -> Our Asymmetric Weapon: [Modular mass-manufacturing] -> Decisive Battlefield: [24-hour endurance load].'
    },
    discussionQuestions: [
      'Why do artisanal incumbents consistently underestimate industrial mass-market challengers until it is too late?',
      'How did Ford’s decision to modularize the brake caliper system change the operational economics of endurance racing?',
      'What are the brand risks of attempting to buy prestige through aggressive capital spending?'
    ],
    practicalAssignment: {
      title: 'Asymmetric Competitive Attack Strategy',
      prompt: 'Select a dominant incumbent in enterprise software or consumer hardware (e.g. Adobe in creative software, Apple in wearables). Develop an asymmetric challenger strategy that does not compete on feature parity, but on a structural cost or deployment advantage.',
      deliverables: ['Incumbent value-chain vulnerability analysis', 'Challenger asymmetric capability map', 'Go-to-battle roadmap with 3 strategic phases'],
      rubric: [
        { criteria: 'Structural asymmetry', maxPoints: 10, description: 'Avoids head-to-head feature copycatting; exploits genuine business model divergence.' },
        { criteria: 'Vulnerability precision', maxPoints: 10, description: 'Identifies genuine incumbent trade-offs.' },
        { criteria: 'Execution feasibility', maxPoints: 5, description: 'Sequencing is realistic and defensible.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to Michael Porter, what constitutes sustainable strategic positioning?',
        options: [
          'Matching every feature offered by the industry leader at a 10% discount',
          'Performing different activities from rivals or performing similar activities in different ways to deliver unique value',
          'Maximizing short-term quarterly operational expenditures',
          'Securing an exclusive celebrity brand sponsorship'
        ],
        correctOptionIndex: 1,
        explanation: 'Sustainable strategy requires differentiated activity systems and trade-offs, not mere operational benchmarking.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Focus on how the quick-change brake assembly was a regulatory and mechanical breakthrough that bypassed Ferrari’s bespoke rotor design.',
      teachingNotes: 'Pair with Christensen’s Innovator’s Dilemma and Porter’s "What is Strategy?".',
      commonStudentPitfalls: ['Viewing the rivalry merely as an interpersonal grudge rather than a clash of business models']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/6ApOpGKlsq7Lglsq8fdwG5rR9xW.jpg'
  },
  {
    id: 'lms-012',
    filmTitle: 'Oppenheimer',
    releaseYear: 2023,
    tmdbMovieId: 872585,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Program Management', 'Critical Path Method', 'Cross-Disciplinary Teams', 'Deadlines'],
    lessonTitle: 'The Manhattan Project: Critical Path Method and Parallel R&D Architecture',
    learningObjective: 'Master the Critical Path Method (CPM) and parallelized research pipelines under immovable hard deadlines.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Executive Simulation',
    sceneDescription: 'J. Robert Oppenheimer and General Leslie Groves establish Los Alamos, deliberately bringing theoretical physicists, experimentalists, metallurgists, and ordnance engineers onto a single mesa. Confronted with the failure of the plutonium gun-type design ("Thin Man"), Oppenheimer immediately pivots the entire laboratory to an unproven implosion method.',
    sceneTimestampRef: 'Approx. 01:28:40 (Instructor verified)',
    conceptExplanation: 'When building complex multi-disciplinary systems with extreme technical uncertainty and fixed deadlines, sequential roadmapping guarantees failure. Project leaders must construct parallel development pipelines (e.g. Uranium gaseous diffusion, centrifuge, and Plutonium production simultaneously) and calculate the "Critical Path"—the sequence of dependent stages that dictates minimum project duration.',
    framework: {
      name: 'Critical Path Method (CPM) & Program Evaluation Review Technique (PERT)',
      description: 'Mathematical project modeling technique for scheduling dependent tasks with variance.',
      keySteps: [
        'Deconstruct system into discrete Work Breakdown Structure (WBS) work packages.',
        'Map dependencies between theoretical design, material synthesis, and mechanical testing.',
        'Calculate Early Start, Late Start, and Total Slack for every task.',
        'Focus senior leadership attention and resources exclusively on zero-slack critical path items.'
      ],
      templateSnippet: 'Path A: [Uranium Enrichment (Slack: 30d)] | Path B: [Implosion Lenses (Critical: Slack 0d)] -> Reallocate R&D resources to Path B.'
    },
    discussionQuestions: [
      'How does physical co-location of cross-functional specialists change the speed of feedback across technical dependencies?',
      'When is funding two competing, mutually exclusive technical solutions simultaneously (e.g. Gun-type vs Implosion) economically rational?',
      'How should a PM handle morale when an engineering sub-team discovers their 12-month workstream is a dead end?'
    ],
    practicalAssignment: {
      title: 'Critical Path Network Diagram for Multi-Platform Release',
      prompt: 'Map out a 6-month product launch involving a new mobile OS version, cloud backend migration, and compliance certification. Identify dependencies, calculate total float/slack, and determine which path is critical.',
      deliverables: ['PERT/CPM network activity diagram', 'Table of Early/Late start times and slack', 'Contingency mitigation plan for the critical path'],
      rubric: [
        { criteria: 'Network logic', maxPoints: 10, description: 'All dependencies and handoffs are logically airtight.' },
        { criteria: 'Slack calculation', maxPoints: 10, description: 'Correctly identifies zero-slack bottlenecks.' },
        { criteria: 'Contingency plan', maxPoints: 5, description: 'Proposes actionable crash/fast-track strategies.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What defines a "Critical Path" in project management?',
        options: [
          'The most expensive tasks on the balance sheet',
          'The longest sequence of dependent activities that determines the earliest completion date of the project',
          'The tasks assigned to the highest-ranking executive on the team',
          'The list of features requested by the board of directors'
        ],
        correctOptionIndex: 1,
        explanation: 'Any delay in a task on the critical path directly delays the overall project completion date because it has zero slack.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students must grasp that Oppenheimer did not just do physics; he was the Chief Systems Engineer synthesizing disparate specialties.',
      teachingNotes: 'Compare the Manhattan Project’s parallel tracks with Moderna’s parallel vaccine trials during COVID-19.',
      commonStudentPitfalls: ['Confusing high-effort tasks with critical path tasks (a task can be huge but have ample slack)']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    featured: true
  },
  {
    id: 'lms-013',
    filmTitle: 'Steve Jobs',
    releaseYear: 2015,
    tmdbMovieId: 321697,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Product Sequencing', 'Three-Act Structure', 'Portfolio Strategy', 'Ecosystem'],
    lessonTitle: 'Product Sequencing and Three-Act Architecture: The NeXT Trojan Horse',
    learningObjective: 'Examine how strategic product sequencing uses deliberate transitional products to acquire long-term ecosystem leverage.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Backstage at the 1988 NeXT computer launch in San Francisco, Steve Jobs reveals to his confidante Joanna Hoffman that the NeXT cube’s lack of an internal hard drive and exorbitant $6,500 price tag are secondary. He designed NeXT specifically as a strategic platform designed to force Apple into acquiring his operating system.',
    sceneTimestampRef: 'Approx. 01:05:15 (Instructor verified)',
    conceptExplanation: 'Amateur product managers evaluate products as standalone P&L events. Master strategists view products as sequential moves on a multi-board chessboard. Jobs understood that Apple’s Mac OS had hit an architectural dead end. By developing NeXTSTEP with object-oriented programming and UNIX multitasking, he created the modern OS kernel that Apple would ultimately be forced to purchase to save itself.',
    framework: {
      name: 'McKinsey Three Horizons of Growth & Strategic Sequencing',
      description: 'Framework categorizing product bets across current core business, emerging opportunities, and viable options.',
      keySteps: [
        'Horizon 1: Extend and defend current core revenue engines.',
        'Horizon 2: Build emerging businesses with demonstrated customer traction.',
        'Horizon 3: Seed transformative options that create future strategic leverage.',
        'Sequencing Rule: Use Horizon 2/3 products to establish technological moats even if initial unit volumes are modest.'
      ],
      templateSnippet: 'Current Product [H1] creates cash -> Stepping-Stone Product [H2] builds proprietary OS -> Endgame Acquisition/Ecosystem [H3].'
    },
    discussionQuestions: [
      'When is it strategically rational to launch an over-engineered, commercially unviable product like the NeXT Computer?',
      'How does owning foundational software infrastructure (like an OS or API layer) grant long-term pricing power over hardware?',
      'How should a PM communicate a product roadmap when intermediate products exist primarily to prepare the market for a future ecosystem?'
    ],
    practicalAssignment: {
      title: 'Three-Horizon Strategic Sequencing Blueprint',
      prompt: 'Select a legacy enterprise or hardware company facing impending technological obsolescence. Design a 3-step product sequencing roadmap where an intermediate product acts as a stepping stone to dominate the next platform shift.',
      deliverables: ['Three-horizon timeline and resource allocation %', 'Intermediate product architecture specification', 'Strategic endgame positioning rationale'],
      rubric: [
        { criteria: 'Strategic coherence', maxPoints: 10, description: 'Each product release logically enables the next.' },
        { criteria: 'Horizon resource balance', maxPoints: 10, description: 'Pragmatic 70/20/10 portfolio distribution.' },
        { criteria: 'Platform defensibility', maxPoints: 5, description: 'Clearly explains how proprietary software or data creates the moat.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In multi-horizon product sequencing, why might a company release an unprofitable "Horizon 2" product?',
        options: [
          'To intentionally incur tax write-offs',
          'To establish proprietary architectural standards and platform leverage for the dominant future wave',
          'To confuse industry regulators',
          'Because user experience design does not matter in early stages'
        ],
        correctOptionIndex: 1,
        explanation: 'Stepping-stone products often establish foundational technology, developer mindshare, and patents necessary to dominate subsequent platform eras.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'NeXTSTEP became OS X, and later iOS, powering hundreds of billions in enterprise value despite NeXT hardware commercial failure.',
      teachingNotes: 'Discuss Aaron Sorkin’s three-act structure (1984 Mac, 1988 NeXT, 1998 iMac) as an operational metaphor for product sequencing.',
      commonStudentPitfalls: ['Labeling NeXT as a failure without understanding that its software DNA became the backbone of Apple’s renaissance']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/4F3wQ1bK0k54pE4mZ51L5C1B1kQ.jpg'
  },
  {
    id: 'lms-014',
    filmTitle: 'Tetris',
    releaseYear: 2023,
    tmdbMovieId: 726759,
    subject: 'Product strategy and roadmaps',
    topicTags: ['IP Licensing', 'Platform Bundling', 'Distribution Strategy', 'Hardware-Software Synergy'],
    lessonTitle: 'The Handheld Platform Bundle: Henk Rogers and the Game Boy Moat',
    learningObjective: 'Analyze how platform hardware bundling and IP licensing create unassailable distribution moats.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Henk Rogers meets with Nintendo CEO Hiroshi Yamauchi and legendary designer Gunpei Yokoi. Nintendo intends to bundle Super Mario with their new monochrome Game Boy handheld. Rogers argues forcefully: "If you bundle Mario, Game Boy is for little boys. If you bundle Tetris, Game Boy is for everyone."',
    sceneTimestampRef: 'Approx. 00:31:40 (Instructor verified)',
    conceptExplanation: 'Hardware platforms live and die by their software bundling strategy. A killer application (killer app) expands the total addressable market (TAM) from a narrow niche to universal adoption. Tetris turned the Game Boy from an electronic toy into an indispensable mainstream travel companion for business travelers, teenagers, and adults alike.',
    framework: {
      name: 'Platform Hardware-Software Bundling & TAM Expansion',
      description: 'Framework assessing the cross-side network effects of bundling flagship content with nascent platform hardware.',
      keySteps: [
        'Evaluate the Core Hardware Constraint (e.g. low-power monochrome screen, slow clock speed).',
        'Identify Content Synergies: Select software that turns hardware limitations into cognitive assets (simplicity over high-polygon 3D).',
        'Calculate TAM Multiplier: How does the bundled IP broaden the customer demographic beyond early adopters?',
        'Structure Long-Term IP Protection: Secure global exclusive rights across platform form factors.'
      ],
      templateSnippet: 'Hardware [Game Boy] + Niche IP [Mario: TAM = Gamers] vs Universal IP [Tetris: TAM = All Humans] -> Default Platform Dominance.'
    },
    discussionQuestions: [
      'Why did Tetris succeed on the Game Boy far more dramatically than on home consoles or arcades?',
      'How does bundling a universal content asset change the price elasticity of hardware at launch?',
      'What are the legal and strategic vulnerabilities of relying on third-party licensed IP for a core platform moat?'
    ],
    practicalAssignment: {
      title: 'Platform Killer-App Bundling Proposal',
      prompt: 'Select an emerging hardware platform (e.g. mixed reality headsets, smart rings, in-car dashboard operating systems). Formulate a software bundling strategy that expands its TAM beyond tech enthusiasts to mainstream consumers.',
      deliverables: ['Hardware limitation analysis', 'Selected bundle software profile & TAM rationale', 'Exclusivity negotiation term sheet outline'],
      rubric: [
        { criteria: 'TAM expansion logic', maxPoints: 10, description: 'Demonstrates clear demographic expansion beyond core enthusiasts.' },
        { criteria: 'Form-factor synergy', maxPoints: 10, description: 'Software exploits unique affordances of the device.' },
        { criteria: 'Licensing sustainability', maxPoints: 5, description: 'Protects the platform from IP hold-up.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was bundling Tetris instead of Super Mario Land strategically transformative for the Nintendo Game Boy?',
        options: [
          'Tetris used less battery power in CPU benchmarks',
          'Tetris possessed universal demographic appeal that transformed the device from a children’s toy into an adult lifestyle essential',
          'Mario games were outlawed in European retail outlets',
          'The Soviet Union provided free hardware manufacturing subsidies'
        ],
        correctOptionIndex: 1,
        explanation: 'Tetris broadened the Game Boy’s market from young male gamers to adults of all backgrounds, dramatically expanding total hardware sales.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Focus on Rogers’ acute perception that great software defines the cultural perception and demographic reach of hardware platforms.',
      teachingNotes: 'Connect this to modern app store launch strategies and Sony/Microsoft console bundling.',
      commonStudentPitfalls: ['Treating Tetris as just an addictive game rather than analyzing the contract law and distribution economics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-015',
    filmTitle: 'Dunkirk',
    releaseYear: 2017,
    tmdbMovieId: 374720,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Triage Strategy', 'Asymmetric Resources', 'Resource Constraints', 'Crisis Roadmapping'],
    lessonTitle: 'Triage Strategy: Asymmetric Resource Allocation Under Total Constraint',
    learningObjective: 'Learn how to construct ruthless triage strategies and mobilize decentralized resources during enterprise operational crises.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'With 400,000 British and French soldiers trapped on the beaches of Dunkirk and deep-draft military destroyers sinking in shallow waters, the British Admiralty requisitions civilian pleasure craft, fishing boats, and ferries. This decentralized "Little Ships" flotilla navigates shallow shoals to evacuate soldiers under heavy bombardment.',
    sceneTimestampRef: 'Approx. 00:41:10 (Instructor verified)',
    conceptExplanation: 'When enterprise systems fail or market shifts threaten corporate survival, conventional centralized resources (large capital expenditures, massive teams) are often too slow and unyielding to avert catastrophe. Strategic product leadership requires "triage roadmapping": identifying what cannot be saved, unbundling operations, and activating decentralized, grassroots capacity.',
    framework: {
      name: 'Crisis Triage & Asymmetric Mobilization Matrix',
      description: 'Framework for partitioning assets into Red (Immediate critical), Yellow (Defensible), and Black (Deprioritized/Lost).',
      keySteps: [
        'Establish Minimum Viable Survival Metric: What single outcome must be preserved at all costs?',
        'Classify Assets via Triage: Terminate non-viable legacy initiatives immediately.',
        'Decentralize Execution: Empower autonomous, lightweight units with simple rules of engagement.',
        'Circumvent Heavy Bottlenecks: Bypass centralized infrastructure in favor of distributed pathways.'
      ],
      templateSnippet: 'Threat: [Total runway collapse] -> Sacrificed Workstreams: [H2/H3 non-essentials] -> Minimum Core Metric: [Retain 80% ARR customer base] -> Mobilization: [All hands to retention].'
    },
    discussionQuestions: [
      'What are corporate equivalents of "Little Ships" when major enterprise IT infrastructure or supply chains fail?',
      'Why do senior leaders struggle psychologically to enact ruthless triage, often trying to save every project simultaneously?',
      'How does clear, transparent communication of severe constraints prevent panic across decentralized operational units?'
    ],
    practicalAssignment: {
      title: 'Runway Crisis Triage Plan',
      prompt: 'Scenario: Your Series B B2B SaaS startup suddenly has its bank access frozen and runway reduced from 18 months to 90 days. Construct a triage roadmap: what features and teams get paused immediately, what is the single survival metric, and how do you mobilize the entire company around it?',
      deliverables: ['Triage classification table (Kill / Pause / Double-down)', 'Single survival OKR specification', '30-day internal communication script'],
      rubric: [
        { criteria: 'Decisiveness', maxPoints: 10, description: 'Makes clear, painful cuts without ambiguous compromises.' },
        { criteria: 'Metric clarity', maxPoints: 10, description: 'Survival metric directly correlates with cash-flow generation.' },
        { criteria: 'Leadership communication', maxPoints: 5, description: 'Empowers team autonomy while maintaining trust.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In crisis triage roadmapping, what is the most dangerous executive error?',
        options: [
          'Under-investing in internal marketing newsletters',
          'Attempting to preserve all ongoing initiatives equally, spreading dwindling resources so thin that all fail',
          'Delegating tactical decisions to frontline managers',
          'Relying on low-cost open-source tools'
        ],
        correctOptionIndex: 1,
        explanation: 'Failing to make painful triage cuts results in resource exhaustion across all fronts, guaranteeing systemic failure.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Emphasize Churchill’s directive: "Wars are not won by evacuations, but in this deliverance there was a victory."',
      teachingNotes: 'Compare the evacuation to the Silicon Valley Bank collapse of 2023 and how fintechs mobilized overnight emergency payroll rails.',
      commonStudentPitfalls: ['Treating the scenario as a purely emotional crisis rather than an operational logistics and resource reallocation study']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg'
  },
  {
    id: 'lms-016',
    filmTitle: 'Apollo 13',
    releaseYear: 1995,
    tmdbMovieId: 568,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Technical Debt', 'Crisis Roadmapping', 'System Repurposing', 'Constraint Management'],
    lessonTitle: 'Failure Is Not An Option: Repurposing Systems Under Extreme Constraint',
    learningObjective: 'Learn how to redesign technical architectures on the fly by repurposing legacy systems and managing strict power/memory budgets.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'After an oxygen tank explodes crippling the Command Module, Flight Director Gene Kranz gathers the flight control team at Mission Control. He rejects lamenting the lost lunar landing, writing on the chalkboard: "Survival." He mandates recalculating power consumption down to 12 amperes and repurposing the Lunar Module as a lifeboat.',
    sceneTimestampRef: 'Approx. 00:58:30 (Instructor verified)',
    conceptExplanation: 'Product roadmaps inevitably face catastrophic disruptions: black swan server outages, regulatory bans, or core database corruption. Product managers cannot afford paralysis. Strategic roadmapping under crisis requires rapidly establishing new baseline constraints, discarding sunken objectives, and creatively repurposing existing subsystems.',
    framework: {
      name: 'Constraint-First System Re-architecting',
      description: 'Framework for rebuilding software or hardware workflows from immutable hard limits inward.',
      keySteps: [
        'Lock Immutable Constraints (Amperes, Oxygen, Memory budget, Cash-out date).',
        'Discard Deprecated Ambitions (The original lunar mission is dead; survival is the sole epic).',
        'Catalog Available Redundant Assets (Repurpose the Lunar Module battery and environmental systems).',
        'Execute Precise Sequence Checklist (Simulate power-up sequence on ground before executing on spacecraft).'
      ],
      templateSnippet: 'Hard Limit: [12 Amps / 40W] -> Required Subsystems: [Life Support + Guidance] -> Disabled Subsystems: [Heaters, Telemetry, Radar].'
    },
    discussionQuestions: [
      'How does Gene Kranz’s leadership style balance absolute psychological resolve with meticulous data-driven engineering checks?',
      'What are software engineering analogies for using the Lunar Module as a "lifeboat" for the damaged Command Module?',
      'Why is ground simulation (testing the boot sequence on a simulator before transmitting to flight crew) essential in crisis software patches?'
    ],
    practicalAssignment: {
      title: 'Power-Budget Crisis Architecture Patch',
      prompt: 'Scenario: Your cloud database provider suffers a catastrophic regional outage, and you are forced to run your entire high-traffic platform on a backup server with only 15% of normal CPU and memory bandwidth for 48 hours. Design a degraded operational mode.',
      deliverables: ['Subsystem triage matrix (what gets turned off)', 'Graceful degradation user notification flow', 'Step-by-step recovery sequence checklist'],
      rubric: [
        { criteria: 'Constraint compliance', maxPoints: 10, description: 'Remains strictly within the 15% compute capacity envelope.' },
        { criteria: 'Degradation elegance', maxPoints: 10, description: 'Preserves mission-critical user transactions with minimal data corruption.' },
        { criteria: 'Recovery sequencing', maxPoints: 5, description: 'Prevents thundering-herd surges upon system restoration.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary rule when managing an architecture recovery under severe capacity limits?',
        options: [
          'Attempt to restart all services at once to see which ones survive',
          'Establish hard resource ceilings and build an unbending sequence where non-critical systems are ruthlessly isolated',
          'Blame the third-party infrastructure vendor publicly',
          'Double the marketing expenditure to apologize to users'
        ],
        correctOptionIndex: 1,
        explanation: 'Enforcing strict resource budgets and methodical sequential recovery prevents cascade brownouts.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the line: "I don’t care about what the equipment was designed to do; I care about what it CAN do."',
      teachingNotes: 'Use this to teach graceful degradation, circuit-breaker patterns, and chaos engineering (Netflix Chaos Monkey).',
      commonStudentPitfalls: ['Failing to calculate the cumulative energy/bandwidth budget, leading to system crash halfway through simulation']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/8yU0i7W3k8f8M2x8jK3vN8y6C9.jpg'
  },
  {
    id: 'lms-017',
    filmTitle: 'First Man',
    releaseYear: 2018,
    tmdbMovieId: 369972,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Iterative De-risking', 'Flight Testing', 'Hardware Sprints', 'Risk Management'],
    lessonTitle: 'Incremental De-risking in Iterative Flight Tests: From X-15 to Saturn V',
    learningObjective: 'Understand how aerospace flight testing methodologies translate into agile de-risking roadmaps for high-stakes hardware products.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Neil Armstrong pilots the experimental rocket-powered X-15 aircraft to the edge of the atmosphere, bouncing off the atmospheric boundary before managing a dangerous dead-stick glider landing. Later, in the Lunar Landing Training Vehicle (LLTV), a thruster failure forces him to eject seconds before the craft crashes in a fireball.',
    sceneTimestampRef: 'Approx. 00:08:40 (Instructor verified)',
    conceptExplanation: 'When building products where failures can be fatal (e.g. medical robotics, avionics, banking backends), "move fast and break things" in production is criminal negligence. Teams must construct intermediate sandbox testbeds (the X-15, Gemini docking, LLTV) that isolate single failure modes under realistic physics before integrating the complete monolithic platform.',
    framework: {
      name: 'NASA Technology Readiness Level (TRL) & Sandbox De-risking',
      description: 'Systematic 9-level measurement system assessing technology maturity from basic principles to flight proven.',
      keySteps: [
        'TRL 1-3: Laboratory analytical and experimental proof of concept.',
        'TRL 4-6: Subsystem validation in relevant environment (X-15, ground simulators).',
        'TRL 7-9: Integrated system demonstration in operational environment (Apollo flights).',
        'Failure Isolation Protocol: Ensure subsystem test failures do not destroy the parent vehicle or team.'
      ],
      templateSnippet: 'Component: [Attitude thruster] -> Test Rig: [LLTV sandbox] -> Target TRL: [Move from TRL 5 to TRL 7] -> Ejection Safeties: [Active].'
    },
    discussionQuestions: [
      'Why is it economically superior to crash multiple low-cost unmanned or simulated prototypes than to risk failure on the integrated final product?',
      'How does emotional stoicism and rigorous checklists help engineering teams debug life-threatening hardware anomalies?',
      'Where does the traditional software MVP fail when applied to safety-critical hardware and aerospace systems?'
    ],
    practicalAssignment: {
      title: 'TRL Staged De-risking Matrix for MedTech / Autonomous Hardware',
      prompt: 'Develop a 4-phase TRL staging roadmap for a robotic surgical assistant or autonomous delivery robot. For each phase, specify the sandbox test environment, failure envelope boundaries, and criteria to advance to human-involved trials.',
      deliverables: ['TRL staging schedule with testing environments', 'Failure containment protocols per phase', 'Criteria for passing into human operational testing'],
      rubric: [
        { criteria: 'Containment safety', maxPoints: 10, description: 'Guarantees that sandbox failures cannot cause catastrophic harm.' },
        { criteria: 'TRL progression logic', maxPoints: 10, description: 'Follows established engineering maturation standards.' },
        { criteria: 'Edge-case thoroughness', maxPoints: 5, description: 'Tests sensor latency, power brownouts, and physical wear.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did NASA build the Lunar Landing Training Vehicle (LLTV) if they already had mathematical ground simulators?',
        options: [
          'To spend leftover federal grant money before the fiscal year deadline',
          'Ground simulators could not simulate the chaotic aerodynamic delays, wind shear, and vestibular disorientation of lunar descent',
          'It was used solely for television press conferences',
          'Congress required pilot flight hours to maintain active pay scale'
        ],
        correctOptionIndex: 1,
        explanation: 'Complex physical dynamics require hardware-in-the-loop sandboxes to reveal real-world control instabilities that simulations miss.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students should appreciate Armstrong’s calm debugging after ejecting from the LLTV: he went straight back to his desk to review telemetry.',
      teachingNotes: 'Contrast safety-critical agile roadmaps with pure consumer software development cycles.',
      commonStudentPitfalls: ['Confusing reckless risk-taking with disciplined experimental boundary testing']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/i91mfv5Uq7k8uYw8n7f3M9vX1.jpg'
  },
  {
    id: 'lms-018',
    filmTitle: 'Pirates of Silicon Valley',
    releaseYear: 1999,
    tmdbMovieId: 9811,
    subject: 'Product strategy and roadmaps',
    topicTags: ['Platform Strategy', 'Licensing Economics', 'Ecosystem Moats', 'Hardware-Software Decoupling'],
    lessonTitle: 'Platform Ecosystems: Microsoft OS Licensing vs. Apple Closed Hardware',
    learningObjective: 'Compare open platform licensing roadmaps with vertically integrated closed ecosystems to understand long-term network effects.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Bill Gates negotiates with IBM executives to supply the operating system (PC-DOS) for the original IBM PC. Gates famously gives IBM the software for a modest upfront fee while retaining the non-exclusive licensing rights to sell MS-DOS to any PC clone manufacturer, effectively commoditizing the PC hardware industry.',
    sceneTimestampRef: 'Approx. 00:52:10 (Instructor verified)',
    conceptExplanation: 'The defining product strategy debate of modern computing is open horizontal licensing versus closed vertical integration. Apple chose vertical control (hardware, OS, apps tightly coupled), which delivered pristine user experiences but captured small market share. Microsoft decoupled the OS from hardware, allowing OEM clones to proliferate, establishing a worldwide developer network effect that dominated 95% of the desktop market.',
    framework: {
      name: 'Horizontal Platform vs Vertical Integration Matrix',
      description: 'Framework comparing margin capture, ecosystem network effects, and customer lock-in.',
      keySteps: [
        'Analyze Value Chain Layers (Silicon -> Hardware Assembly -> Operating System -> Applications).',
        'Identify the Choke Point: Where does the network effect aggregate? (Developer APIs and software compatibility).',
        'Determine Commoditization Target: Strategically commoditize adjacent layers (hardware clones) to maximize value at the OS layer.',
        'Enforce Two-Sided Network Effects: More OEM machines attract more developers, which in turn forces customers to buy DOS-compatible PCs.'
      ],
      templateSnippet: 'Control Strategy: [Own OS layer] + Commoditize Strategy: [Hardware specs open to all OEMs] -> Outcome: [Universal Developer Standard].'
    },
    discussionQuestions: [
      'Why did IBM executives mistakenly believe hardware was the primary profit center and software was an insignificant commodity?',
      'How does Microsoft’s strategy with MS-DOS mirror Google’s strategy with Android against Apple’s iOS?',
      'What are the product quality and security vulnerabilities inherent in an open, fragmented hardware ecosystem?'
    ],
    practicalAssignment: {
      title: 'Platform Architecture Strategy Memo: Open vs Closed',
      prompt: 'Select an emerging industry (e.g. humanoid robotics, mixed reality OS, autonomous driving stacks). Write an executive memo evaluating whether your company should pursue a closed vertically integrated architecture or a horizontal licensing platform.',
      deliverables: ['Value chain layer breakdown', 'Network effect flywheel comparison', '10-year market share and margin forecast with strategic recommendation'],
      rubric: [
        { criteria: 'Value chain analysis', maxPoints: 10, description: 'Accurately identifies where profits pool in the technology stack.' },
        { criteria: 'Network flywheel mechanics', maxPoints: 10, description: 'Rigorous articulation of multi-sided platform dynamics.' },
        { criteria: 'Trade-off nuance', maxPoints: 5, description: 'Acknowledges real disadvantages of chosen model (e.g. fragmentation vs margin).' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was Bill Gates’ decision to retain non-exclusive licensing rights for MS-DOS the most lucrative software deal in history?',
        options: [
          'It allowed Microsoft to charge IBM higher interest rates on debt',
          'It enabled Microsoft to license the exact same operating system to hundreds of IBM PC clone makers, turning the OS into a universal industry standard',
          'It exempted Microsoft from federal corporate income tax',
          'It gave Microsoft ownership of all IBM manufacturing plants'
        ],
        correctOptionIndex: 1,
        explanation: 'By commoditizing hardware manufacturers and licensing MS-DOS to all clones, Microsoft created an insurmountable platform monopoly.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Guide students to Christensen’s law of conservation of attractive profits: when a product is commoditized, adjacent proprietary products capture the profit.',
      teachingNotes: 'Compare the Mac vs Windows battle of the 1980s/90s with iOS vs Android in mobile.',
      commonStudentPitfalls: ['Assuming one model is inherently superior; both have generated multi-trillion dollar market caps in different contexts']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  }
];

module.exports = { RAW_LESSONS };
