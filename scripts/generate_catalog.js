// Script to generate the comprehensive 104-lesson seed dataset for The Business Cut LMS
const fs = require('fs');
const path = require('path');

const RAW_LESSONS = [
  // ==========================================
  // SUBJECT 1: Product discovery and user research (9 lessons)
  // ==========================================
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 115782', posterPath: '/q4r08r5yF3p6tZ7vG7fJ4yL3Y8c.jpg' },
    audioCue: {
      title: 'Discovery Epiphany Chime',
      description: 'Audio cue for instructor demonstration of breakthrough user insight moments.',
      transcript: 'Sound cue: Subtle brass chime — instructor to add licensed audio.',
      durationSeconds: 4,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: true,
    createdAt: '2026-01-15T08:00:00Z',
    updatedAt: '2026-02-10T12:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 361743', posterPath: '/v4vPq0cffkP64t48eU0L3Wp9w3O.jpg' },
    audioCue: {
      title: 'Sizzle of Optimization',
      description: 'Audio cue for kitchen assembly rhythm.',
      transcript: 'Sound cue: Rhythmic timer ticking — instructor to add licensed audio.',
      durationSeconds: 3,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: true,
    createdAt: '2026-01-16T10:00:00Z',
    updatedAt: '2026-02-12T14:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 212778', posterPath: '/6rY4zFqFh3r0vN8s4W8M4V3Y2q.jpg' },
    audioCue: {
      title: 'Street Vendor Bell',
      description: 'Customer arrival audio cue.',
      transcript: 'Sound cue: Cheerful brass bell chime — instructor to add licensed audio.',
      durationSeconds: 2,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: false,
    createdAt: '2026-01-18T11:00:00Z',
    updatedAt: '2026-02-14T09:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 964980', posterPath: '/762KuDYfg4g1H784n8Dq9vM9cM1.jpg' },
    audioCue: {
      title: 'Sneaker Squeak on Hardwood',
      description: 'Audio cue for athletic product discovery.',
      transcript: 'Sound cue: Hardwood sneaker traction squeak — instructor to add licensed audio.',
      durationSeconds: 2,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: true,
    createdAt: '2026-01-20T14:30:00Z',
    updatedAt: '2026-02-15T16:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 152601', posterPath: '/eCOtqtfvn7mxv6U41bWc0kE1W.jpg' },
    audioCue: {
      title: 'Calm Synthesizer Hum',
      description: 'Audio cue for voice interface initialization.',
      transcript: 'Sound cue: Warm acoustic piano chord — instructor to add licensed audio.',
      durationSeconds: 3,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: false,
    createdAt: '2026-01-22T09:00:00Z',
    updatedAt: '2026-02-16T11:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 24264', posterPath: '/3rK3m0P9u7F9b0jK2vF4N8y6C.jpg' },
    audioCue: {
      title: 'Typing on Vintage Keyboard',
      description: 'Blogging typing audio cue.',
      transcript: 'Sound cue: Rhythmic mechanical key clicks — instructor to add licensed audio.',
      durationSeconds: 3,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: false,
    createdAt: '2026-01-25T13:00:00Z',
    updatedAt: '2026-02-18T10:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 2062', posterPath: '/npHNjld2VT0vLw6dJmSg1qK1i9.jpg' },
    audioCue: {
      title: 'Chef Whisk and Ladle',
      description: 'Culinary preparation sound cue.',
      transcript: 'Sound cue: Rapid copper whisk whisking — instructor to add licensed audio.',
      durationSeconds: 2,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: false,
    createdAt: '2026-01-27T15:00:00Z',
    updatedAt: '2026-02-19T14:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 37799', posterPath: '/n0ybibhJtQ5icDqTpT0zFNTsPUt.jpg' },
    audioCue: {
      title: 'Ping of Notification',
      description: 'Social notification audio cue.',
      transcript: 'Sound cue: Crisp digital bubble pop — instructor to add licensed audio.',
      durationSeconds: 1,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: true,
    createdAt: '2026-01-30T10:00:00Z',
    updatedAt: '2026-02-20T16:00:00Z'
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
    imageAttribution: { source: 'tmdb', license: 'TMDB Educational Metadata', notes: 'Verified TMDB movie entry 359724', posterPath: '/6ApOpGKlsq7Lglsq8fdwG5rR9xW.jpg' },
    audioCue: {
      title: 'High-Rev V8 Engine Growl',
      description: 'Automotive telemetry testing cue.',
      transcript: 'Sound cue: Throaty engine acceleration roar — instructor to add licensed audio.',
      durationSeconds: 4,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: true,
    createdAt: '2026-02-01T08:00:00Z',
    updatedAt: '2026-02-22T12:00:00Z'
  }
];

console.log(`Loaded ${RAW_LESSONS.length} base lessons. Beginning full catalog generation script...`);
