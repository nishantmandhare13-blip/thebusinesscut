// Part 2: Subject 3 (Metrics, lms-019..027), Subject 4 (Design, lms-028..036), Subject 5 (Growth, lms-037..045)
const LESSONS_PART2 = [
  // ==========================================
  // SUBJECT 3: Prioritization and product metrics (lms-019..lms-027)
  // ==========================================
  {
    id: 'lms-019',
    filmTitle: 'Moneyball',
    releaseYear: 2011,
    tmdbMovieId: 60308,
    subject: 'Prioritization and product metrics',
    topicTags: ['Leading Metrics', 'Vanity Metrics', 'Statistical Modeling', 'Cognitive Bias'],
    lessonTitle: 'Counter-Intuitive Leading Indicators vs. Vanity Metrics: On-Base Percentage',
    learningObjective: 'Learn how to identify predictive leading metrics that unseat established industry vanity metrics and cognitive biases.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Billy Beane and Peter Brand clash with veteran scouts in the Oakland A’s war room. While scouts dismiss prospective players for having ugly swings, thick bodies, or weird girlfriends, Brand proves mathematically that On-Base Percentage (OBP) is the single most undervalued predictor of run production and wins.',
    sceneTimestampRef: 'Approx. 00:31:10 (Instructor verified)',
    conceptExplanation: 'Most organizations optimize for vanity metrics that feel emotionally satisfying (e.g. registered users, gross pageviews, subjective "looks like a ballplayer") rather than leading indicators that mathematically drive core business outcomes (e.g. activated accounts, weekly habit retention, OBP). Product managers must ruthlessly isolate the high-correlation behaviors that actually predict long-term customer lifetime value.',
    framework: {
      name: 'North Star Metric & Leading vs Lagging Metric Hierarchy',
      description: 'Deconstructs the primary business outcome into actionable leading behaviors and counter-metrics.',
      keySteps: [
        'Identify the ultimate Lagging Business Metric (Wins / Revenue / Enterprise Value).',
        'Deconstruct into Core Mechanical Driver (Runs scored vs Runs allowed).',
        'Identify the Leading Behavioral Unit (On-Base Percentage: not making outs).',
        'Filter Out Vanity Distortions (Batting average, aesthetic form, scouts’ subjective gut feelings).'
      ],
      templateSnippet: 'Lagging Metric: [Total ARR] -> North Star: [Weekly Active Creators] -> Leading Predictive Metric: [Time to publish first artifact < 5 min] -> Counter-Metric: [Customer Unsubscribe Rate].'
    },
    discussionQuestions: [
      'Why do legacy experts cling to vanity metrics even when statistical regression proves their insignificance?',
      'What are the vanity metrics in modern software product management that mirror "batting average" in baseball?',
      'How do you design counter-metrics to prevent teams from gaming a single leading indicator?'
    ],
    practicalAssignment: {
      title: 'North Star Metric Decomposition & Metric Audit',
      prompt: 'Select a B2B SaaS or consumer mobile app. Identify its true North Star Metric, break it down into 3 leading behavioral input metrics, and define one vital counter-metric to prevent metric distortion.',
      deliverables: ['North Star Metric statement and rationale', 'Metric tree diagram (Lagging -> North Star -> 3 Leading Inputs)', 'One counter-metric with warning threshold'],
      rubric: [
        { criteria: 'Metric precision', maxPoints: 10, description: 'Leading metrics are actionable and genuinely predictive of value creation.' },
        { criteria: 'Counter-metric rigor', maxPoints: 10, description: 'Protects against spamming, quality degradation, or churn.' },
        { criteria: 'Data feasibility', maxPoints: 5, description: 'Metrics can be tracked via standard product analytics pipelines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why is On-Base Percentage (OBP) a superior leading metric to Batting Average in baseball economics?',
        options: [
          'OBP sounds more prestigious to fans',
          'OBP accounts for walks, measuring the true fundamental job of not making an out, which directly correlates with runs',
          'OBP is easier for radio announcers to calculate in their heads',
          'Baseball players with high OBP demand lower ticket prices'
        ],
        correctOptionIndex: 1,
        explanation: 'Walks have nearly identical run-expectancy value as singles, making OBP a far more predictive leading metric than hits alone.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Emphasize Peter Brand’s fundamental question: "People who run ball clubs think in terms of buying players. Your goal shouldn’t be to buy players, your goal should be to buy wins. And to buy wins, you need to buy runs."',
      teachingNotes: 'Use this to teach the difference between output metrics (revenue) and input metrics (user activations).',
      commonStudentPitfalls: ['Selecting input metrics that the team cannot directly influence or measure']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-020',
    filmTitle: 'Margin Call',
    releaseYear: 2011,
    tmdbMovieId: 50348,
    subject: 'Prioritization and product metrics',
    topicTags: ['Value at Risk', 'Stop-Loss Triggers', 'Risk Management', 'Early Warning Signals'],
    lessonTitle: 'Value-at-Risk Thresholds: Early Warning Signals and Stop-Loss Triggers',
    learningObjective: 'Understand how mathematical threshold breaches must trigger immediate executive escalation before systemic collapse.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Junior risk analyst Peter Sullivan runs the risk models left on a USB drive by his fired boss Eric Dale. He discovers that the investment bank’s mortgage-backed portfolio has repeatedly breached its historical Value-at-Risk (VaR) volatility limits. A mere 25% drop in asset values will wipe out the entire market capitalization of the 107-year-old firm.',
    sceneTimestampRef: 'Approx. 00:22:15 (Instructor verified)',
    conceptExplanation: 'Product and platform engineering systems need predefined threshold alerts and circuit breakers. When latency metrics, churn anomalies, or API error budgets breach predefined statistical control limits, organizations cannot wait for monthly quarterly business reviews. Product leaders must institute automatic escalation protocols and clear stop-loss actions.',
    framework: {
      name: 'Site Reliability Engineering (SRE) Error Budget & VaR Circuit Breaker',
      description: 'Framework setting acceptable variance thresholds beyond which feature shipping stops in favor of stabilization.',
      keySteps: [
        'Define the Baseline Operating Boundary (Historical 99th percentile volatility / SLA).',
        'Set Error Budget Consumption Triggers (e.g. 50% budget burned in 24 hours).',
        'Automate Emergency Escalation Ladder (Analyst -> Desk Head -> Executive Committee).',
        'Enforce Mandatory Circuit Breaker: Freeze deployments, de-lever positions, or redirect all sprints to system integrity.'
      ],
      templateSnippet: 'Metric: [VaR Volatility / Error Budget] -> Trigger Threshold: [2-Sigma Deviation] -> Action: [Halt product releases / Emergency liquidation].'
    },
    discussionQuestions: [
      'Why did the senior executives initially ignore early mathematical warning signs of VaR breaches?',
      'How can engineering teams establish error budgets that prevent sales and product teams from taking reckless technical risks?',
      'What are the ethical implications of dumping toxic digital assets or technical debt onto unsuspecting third parties?'
    ],
    practicalAssignment: {
      title: 'Product Reliability SLA & Error Budget Policy',
      prompt: 'Draft an SRE Error Budget and Circuit-Breaker policy for an enterprise payment gateway. Define the metrics, tiered alert thresholds, and the exact protocol that halts new product features when system reliability is compromised.',
      deliverables: ['SLA & Error Budget definition', '3-tiered threshold trigger escalation matrix', 'Feature-freeze and recovery governance protocol'],
      rubric: [
        { criteria: 'Threshold realism', maxPoints: 10, description: 'Metrics reflect genuine business impact (downtime, failed transactions).' },
        { criteria: 'Escalation clarity', maxPoints: 10, description: 'Zero ambiguity on who holds authority to halt feature shipping.' },
        { criteria: 'Enforcement mechanisms', maxPoints: 5, description: 'Provides realistic criteria for when feature development may resume.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary role of an "Error Budget" in modern product management?',
        options: [
          'The monetary fine paid to customers when software crashes',
          'The quantified balance between innovation velocity and system stability that dictates when feature development must halt for remediation',
          'The hiring budget allocated for quality assurance engineers',
          'A tax credit for software bugs discovered by end users'
        ],
        correctOptionIndex: 1,
        explanation: 'Error budgets create a mathematical contract between product managers and engineers: if the budget is exhausted, reliability takes priority over new features.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Focus on how the model’s assumptions broke down because real-world liquidity evaporated faster than Gaussian normal distributions predicted.',
      teachingNotes: 'Compare Margin Call’s emergency 2:00 AM boardroom meeting to incident retrospectives in tech.',
      commonStudentPitfalls: ['Treating risk thresholds as mere guidelines rather than binding operational triggers']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-021',
    filmTitle: 'The Big Short',
    releaseYear: 2015,
    tmdbMovieId: 318846,
    subject: 'Prioritization and product metrics',
    topicTags: ['Metric Divergence', 'Subprime Crisis', 'Synthetic Indices', 'Incentive Distortion'],
    lessonTitle: 'Metric Divergence: Mortgage Delinquency Rates vs. Credit Agency Ratings',
    learningObjective: 'Examine how metric divergence occurs when proxy metrics become decoupled from underlying ground reality.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Dr. Michael Burry reviews thousands of individual mortgage loan files inside Collateralized Debt Obligations (CDOs). He discovers that while rating agencies like Moody’s and S&P assign AAA ratings based on synthetic historical models, actual 60-day and 90-day delinquency rates in subprime tranches are skyrocketing.',
    sceneTimestampRef: 'Approx. 00:19:30 (Instructor verified)',
    conceptExplanation: 'When a proxy metric becomes a goal, it ceases to be a good metric (Goodhart’s Law). In the mortgage crisis, credit rating models relied on historical assumptions of nationwide housing appreciation, ignoring ground-level fraud and adjustable-rate resets. Product managers must constantly audit underlying raw telemetry to ensure that dashboard metrics have not decoupled from true user health.',
    framework: {
      name: 'Goodhart’s Law & Ground-Truth Verification Matrix',
      description: 'Framework identifying systemic divergence between proxy metrics and fundamental reality.',
      keySteps: [
        'Identify the Institutional Proxy Metric (e.g. AAA Rating, 5-Star Reviews, Customer NPS).',
        'Inspect Raw Ground-Truth Telemetry (Loan delinquency, refund requests, support rage tickets).',
        'Calculate Divergence Delta: Is the proxy signaling health while the ground truth shows decay?',
        'Diagnose Incentive Distortion: Who profits from keeping the faulty proxy metric alive?'
      ],
      templateSnippet: 'Proxy Metric [NPS: +60] vs Ground Reality [Churn increased 18%] -> Divergence Driver: [Only surveyed users who survived 90 days].'
    },
    discussionQuestions: [
      'How does Goodhart’s Law manifest when engineering or marketing teams are evaluated on a single KPI?',
      'Why did rating agencies continue assigning AAA ratings to bonds filled with delinquent loans?',
      'What auditing mechanisms should a Head of Product implement to detect metric decoupling before it causes catastrophic churn?'
    ],
    practicalAssignment: {
      title: 'Goodhart’s Law Metric Audit & Ground-Truth Teardown',
      prompt: 'Scenario: An AI customer support tool boasts a 92% "First Contact Resolution (FCR)" metric, yet overall customer churn has accelerated by 15%. Formulate an investigative audit to uncover how the FCR metric is being gamed or distorted.',
      deliverables: ['Divergence hypothesis list (3 ways the metric is manipulated)', 'Raw data audit checklist', 'Redesigned holistic quality evaluation framework'],
      rubric: [
        { criteria: 'Diagnostic depth', maxPoints: 10, description: 'Pinpoints specific gaming mechanisms (e.g. closing tickets prematurely, bot deflection).' },
        { criteria: 'Incentive alignment', maxPoints: 10, description: 'Addresses the root organizational incentives causing the divergence.' },
        { criteria: 'Replacement metrics', maxPoints: 5, description: 'Proposes robust paired metrics that resist gaming.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the core premise of Goodhart’s Law?',
        options: [
          'All software code will eventually expand to consume all available memory',
          'When a measure becomes a target, it ceases to be a good measure because people optimize to game the target',
          'Interest rates will always revert to their 50-year historical mean',
          'Hardware prices fall by 50% every eighteen months'
        ],
        correctOptionIndex: 1,
        explanation: 'When metrics become explicit reward targets, humans optimize for the indicator rather than the intended outcome, distorting its predictive validity.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Burry succeeded because he actually read the prospectus prospectuses while others trusted the rating agency labels.',
      teachingNotes: 'Use Anthony Bourdain’s seafood stew scene and Selena Gomez’s synthetic CDO scene as pedagogical metaphors for layering toxic data.',
      commonStudentPitfalls: ['Trusting third-party certifications or synthetic scores without verifying raw transaction data']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-022',
    filmTitle: 'The Imitation Game',
    releaseYear: 2014,
    tmdbMovieId: 205596,
    subject: 'Prioritization and product metrics',
    topicTags: ['Heuristic Pruning', 'Optimization', 'Algorithmic Bottlenecks', 'Backlog Prioritization'],
    lessonTitle: 'Heuristic Pruning: Optimizing Algorithmic Bottlenecks at Bletchley Park',
    learningObjective: 'Master heuristic pruning techniques to eliminate non-viable backlog tasks and computational search spaces.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Framework Deep Dive',
    sceneDescription: 'Alan Turing and his cryptanalysis team realize their electro-mechanical Bombe machine cannot search through 159 quintillion possible Enigma settings in 24 hours before the codes reset at midnight. In a pub, listening to a radio intercept clerk describe a German operator who repeatedly transmits messages starting with weather reports and the same romantic sign-off, Turing realizes they can eliminate 99.9% of the search space by anchoring on known plaintext.',
    sceneTimestampRef: 'Approx. 01:21:10 (Instructor verified)',
    conceptExplanation: 'In product management, brute-force execution (trying to build every customer request, testing every multivariate button combination) leads to combinatorial explosion and missed deadlines. Teams must discover "known plaintexts" (heuristics) that drastically prune the decision space, allowing algorithms and teams to focus computational energy exclusively on high-probability solutions.',
    framework: {
      name: 'Heuristic Search Pruning & RICE Prioritization Matrix',
      description: 'Technique for eliminating low-impact combinations from roadmaps and algorithms.',
      keySteps: [
        'Calculate Total Combinatorial Possibilities (The Unpruned Search Space / Feature Backlog).',
        'Identify Invariant Constraints / Plaintext Anchors (Deterministic knowns: regulatory mandates, core user flow).',
        'Apply Pruning Rules: Prune entire branches of low-probability, low-impact possibilities.',
        'Concentrate Compute / Engineering Firepower on the remaining high-conviction cluster.'
      ],
      templateSnippet: 'Combinatorial Space: [159 Quintillion / 500 feature requests] -> Plaintext Anchor: [Known morning sign-off / Core job] -> Pruning Reduction: [99.9% pruned].'
    },
    discussionQuestions: [
      'What are corporate equivalents of "known plaintext" when prioritizing an unmanageable 500-item product backlog?',
      'Why is brute force often the instinctive first response of naive teams facing complex problems?',
      'How does Alan Turing’s machine demonstrate the difference between incremental manual effort and automated scalable architecture?'
    ],
    practicalAssignment: {
      title: 'Backlog Pruning via RICE & Heuristic Anchors',
      prompt: 'Take a sprawling product backlog of 25 proposed features across multiple stakeholders. Apply a 3-stage heuristic pruning filter to eliminate 80% of items before scoring the remainder using the RICE framework (Reach, Impact, Confidence, Effort).',
      deliverables: ['Heuristic pruning filter definition', 'List of eliminated features with disqualification rationale', 'Final prioritized RICE score sheet for remaining 5 features'],
      rubric: [
        { criteria: 'Pruning logic', maxPoints: 10, description: 'Filters discard low-conviction features swiftly without bias.' },
        { criteria: 'RICE scoring rigor', maxPoints: 10, description: 'Confidence and Effort estimates are grounded in realistic benchmarks.' },
        { criteria: 'Strategic alignment', maxPoints: 5, description: 'Final top features clearly drive core organizational objective.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary function of "heuristic pruning" in both computer science and product management?',
        options: [
          'To increase the total number of options considered by 10x',
          'To eliminate large swaths of non-viable choices early, focusing resources on mathematically probable outcomes',
          'To ensure all team members feel equally represented in meetings',
          'To avoid recording meeting minutes'
        ],
        correctOptionIndex: 1,
        explanation: 'Heuristic pruning eliminates vast regions of search space that cannot yield optimal results, preventing paralysis by analysis.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight how Turing moved from manual paper decryption to building Christopher/Bombe: capital asset creation beats labor-intensive brute force.',
      teachingNotes: 'Compare to branch-and-bound algorithms in operations research and Kano model pruning in PM.',
      commonStudentPitfalls: ['Scoring every low-value item meticulously instead of eliminating them immediately via high-level pruning filters']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-023',
    filmTitle: 'Cast Away',
    releaseYear: 2000,
    tmdbMovieId: 8358,
    subject: 'Prioritization and product metrics',
    topicTags: ['Extreme Constraints', 'Backlog Prioritization', 'Maslow Hierarchy', 'Time-to-Value'],
    lessonTitle: 'Ruthless Backlog Prioritization: Survival Hierarchy on a Desert Island',
    learningObjective: 'Apply hierarchical needs prioritization under conditions of absolute resource scarcity.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Chuck Noland, a obsessive FedEx systems engineer, is stranded alone on an uninhabited South Pacific island after a cargo plane crash. Deprived of food, shelter, and medical supplies, he must ruthlessly allocate his finite physical calories between harvesting coconut water, making fire, tending to a septic tooth infection, and building a seaworthy escape raft.',
    sceneTimestampRef: 'Approx. 00:48:20 (Instructor verified)',
    conceptExplanation: 'When resources are near-zero (a seed startup with 3 months of cash, a crashing server cluster), standard prioritization frameworks fail. PMs must adopt an uncompromising survival hierarchy: Tier 1 (Vital life support / basic liquidity), Tier 2 (Stability & protection), Tier 3 (Long-term exit / escape velocity). Spending energy on Tier 3 before securing Tier 1 results in rapid death.',
    framework: {
      name: 'Product Maslow Hierarchy of Needs',
      description: 'Framework strictly ordering technical investments from basic operational survival to aspirational delight.',
      keySteps: [
        'Level 1 - Physiological / Core Function: Can the product process transactions and remain online? (Water/Fire).',
        'Level 2 - Safety & Security: Are user data, privacy, and regulatory baselines protected? (Shelter).',
        'Level 3 - Usability & Ergonomics: Is the workflow intuitive and predictable? (Tools).',
        'Level 4 - Growth & Delight: Advanced features, virality, and aspirational roadmaps (Building the raft).'
      ],
      templateSnippet: 'If Level 1 [Core transaction uptime] < 99.9%, ALL Level 4 [Aspirational AI redesigns] are immediately frozen.'
    },
    discussionQuestions: [
      'Why do early-stage founders frequently work on Level 4 features (branding, PR, expansion) while their Level 1 core product is leaking users?',
      'How does Chuck Noland’s decision to open certain FedEx packages while preserving one unopened package reflect emotional anchor management?',
      'What are the signs that a product team is confusing "urgent" distractions with "existential" survival tasks?'
    ],
    practicalAssignment: {
      title: 'Startup Survival Hierarchy Sprint Plan',
      prompt: 'Scenario: Your startup has 60 days of cash remaining and 30 open engineering tickets ranging from "Fix payment checkout bug" to "Redesign logo" and "Refactor database". Classify all tickets into a 4-tier survival hierarchy and formulate a sprint roadmap that guarantees runway extension.',
      deliverables: ['Categorized 4-tier ticket inventory', 'Sprint 1 & Sprint 2 execution plan', 'Explicit "Will Not Do" deprioritization list'],
      rubric: [
        { criteria: 'Hierarchical discipline', maxPoints: 10, description: 'Core cash-generating and stability fixes precede all cosmetic features.' },
        { criteria: 'Deprioritization clarity', maxPoints: 10, description: 'Ruthlessly eliminates non-existential work.' },
        { criteria: 'Time-to-value speed', maxPoints: 5, description: 'Maximizes immediate runway extension.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In the Product Maslow Hierarchy, what happens if a team prioritizes delight features before basic functional reliability?',
        options: [
          'User retention improves due to superior visual aesthetics',
          'Users churn rapidly because fundamental utility and trust are broken, rendering delight features irrelevant',
          'Cloud hosting costs decrease automatically',
          'The product qualifies for government innovation tax rebates'
        ],
        correctOptionIndex: 1,
        explanation: 'Without foundational functional reliability and security, superficial delight features cannot prevent user abandonment.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Focus on Noland’s time allocation: fire gave him boiled water, cooked food, warmth, and nighttime morale—the ultimate foundational multiplier.',
      teachingNotes: 'Compare fire-making to achieving initial product-market fit.',
      commonStudentPitfalls: ['Allocating time to building the escape raft before securing clean water and wound treatment']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-024',
    filmTitle: 'Sully',
    releaseYear: 2016,
    tmdbMovieId: 363676,
    subject: 'Prioritization and product metrics',
    topicTags: ['Human Reaction Latency', 'Flight Simulation', 'Dual-System Metrics', 'Incident Post-Mortem'],
    lessonTitle: 'Dual Human-Machine Latency Metrics in High-Velocity Decisions',
    learningObjective: 'Analyze how synthetic simulations miscalculate human cognitive latency in high-stakes operational post-mortems.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Captain Chesley "Sully" Sullenberger faces an aggressive NTSB public hearing. Computer flight simulations claim that after losing both engines to bird strikes at 2,800 feet, Flight 1549 could have safely turned back to LaGuardia or Teterboro airports. Sully exposes that the simulations assumed instant, zero-latency pilot reactions without accounting for the 35 seconds of human cognitive shock and diagnosis time.',
    sceneTimestampRef: 'Approx. 01:08:45 (Instructor verified)',
    conceptExplanation: 'When evaluating software incident post-mortems or autonomous driving performance, engineers frequently build idealized simulations that assume zero latency in human comprehension. Product managers must account for "human reaction latency" (HRL)—the time required for a human operator to notice an anomaly, interpret sensory data, clear cognitive shock, and execute remediation.',
    framework: {
      name: 'OODA Loop (Observe-Orient-Decide-Act) Latency Budgeting',
      description: 'Framework measuring latency at every stage of the cognitive decision cycle.',
      keySteps: [
        'Observe: Sensor / alert detection latency (Seconds from bird strike to cockpit instrument read).',
        'Orient: Diagnosis and mental model recalibration (Is this a dual engine failure?).',
        'Decide: Triage options under time-compression (Can we reach a runway vs the Hudson River?).',
        'Act: Execution and physical control response (Deploy APU, initiate ditching glide angle).'
      ],
      templateSnippet: 'Idealized Machine Time: [T = 0s reaction] vs Real Human OODA Time: [Observe: 5s + Orient: 15s + Decide: 15s = 35s Latency Budget].'
    },
    discussionQuestions: [
      'Why did NTSB computer models fail to account for human shock time until Sullenberger challenged their parameters?',
      'How should software product managers factor human reaction latency into cyber incident response playbooks?',
      'What are the ethical dangers of blaming human error when interface designs provide inadequate cognitive orientation time?'
    ],
    practicalAssignment: {
      title: 'Incident Post-Mortem Latency Audit',
      prompt: 'Review a major production outage scenario where engineers took 45 minutes to restore a database. Construct an OODA latency audit detailing how much time was spent in Observation, Orientation, Decision, and Action. Propose 2 automated UI improvements to compress Orientation time.',
      deliverables: ['OODA timeline breakdown table', 'Orientation cognitive friction analysis', 'Two observability tooling enhancements'],
      rubric: [
        { criteria: 'Cognitive nuance', maxPoints: 10, description: 'Separates time spent diagnosing from time spent executing fixes.' },
        { criteria: 'Realistic latency budgets', maxPoints: 10, description: 'Grounds recommendations in empirical human-computer interaction principles.' },
        { criteria: 'Tooling impact', maxPoints: 5, description: 'Proposed tools directly reduce diagnosis ambiguity.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the NTSB’s initial flight simulations falsely conclude that Flight 1549 could have reached an airport?',
        options: [
          'The simulators used incorrect weather wind data',
          'The simulated pilots immediately turned toward runways without allocating time for real-world surprise, diagnosis, and decision-making',
          'The airline refused to share black box audio logs',
          'The Airbus A320 was flying higher than radar reported'
        ],
        correctOptionIndex: 1,
        explanation: 'The initial simulations omitted human cognitive latency, assuming instantaneous reaction that is physically impossible in emergencies.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Once the 35-second human reaction delay was added to the flight simulators, every single simulated flight crashed before reaching the runway.',
      teachingNotes: 'Connect this to autonomous vehicle level-3 handover latencies (when the car asks the human to take the wheel).',
      commonStudentPitfalls: ['Assuming that high intelligence or training eliminates cognitive orientation latency']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-025',
    filmTitle: 'Spotlight',
    releaseYear: 2015,
    tmdbMovieId: 314365,
    subject: 'Prioritization and product metrics',
    topicTags: ['Systemic Data', 'Anecdotal Bias', 'Data Aggregation', 'Investigative Analytics'],
    lessonTitle: 'Systemic Data Mining vs. Isolated Case Reporting: The Boston Globe Case',
    learningObjective: 'Learn how pivoting from anecdotal individual cases to systemic relational data modeling uncovers institutional failure patterns.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'New Boston Globe editor Marty Baron meets the Spotlight investigative team. Rather than reporting on individual rogue priests—which the paper had done for decades without systemic impact—Baron orders the team to investigate whether the Catholic Archdiocese operated an institutional playbook to systematically conceal abuse across parishes.',
    sceneTimestampRef: 'Approx. 00:15:30 (Instructor verified)',
    conceptExplanation: 'When companies encounter customer complaints or product bugs, they often treat them as isolated anomalies ("a rogue bad apple", "an edge-case user error"). True strategic leadership requires shifting from anecdotal case analysis to relational data mining: cross-referencing directories, leave-of-absence records, and settlement dockets to expose underlying architectural and institutional failure modes.',
    framework: {
      name: 'Systemic Pattern Extraction & Root Cause Clustering',
      description: 'Framework transforming unstructured incident anecdotes into structured relational failure models.',
      keySteps: [
        'Collect Distributed Anecdotes (Customer tickets, legal filings, parish directory records).',
        'Normalize and Structure Data into Relational Fields (Priest name, parish, unexplained "sick leave" dates).',
        'Run Pattern Matching Algorithms: Identify recurring transitions, timelines, and organizational silence.',
        'Target Systemic Policy: Focus reporting/remediation on the institutional architecture, not individual actors.'
      ],
      templateSnippet: 'Single Anecdote: [Priest X moved to Parish Y] -> Relational Pattern: [87 priests placed on "unassigned sick leave" immediately following settlements] -> Systemic Proof.'
    },
    discussionQuestions: [
      'Why is it more comfortable for legacy institutions to treat problems as isolated bad actors rather than systemic architecture flaws?',
      'How did digitizing and cross-referencing physical directory books unlock the Spotlight team’s investigation?',
      'What are corporate software equivalents of treating customer churn as "isolated complaints" instead of structural product flaws?'
    ],
    practicalAssignment: {
      title: 'Customer Feedback Systemic Clustering Audit',
      prompt: 'Scenario: Your customer support team has 1,000 unstructured free-text complaints labeled as "miscellaneous user confusion". Design a text-mining and categorical classification schema that groups these complaints into structural root-cause product failures.',
      deliverables: ['Categorical taxonomy schema (3 tiers)', 'Root-cause clustering protocol', 'Executive recommendations for engineering backlog prioritization'],
      rubric: [
        { criteria: 'Taxonomy depth', maxPoints: 10, description: 'Groups surface symptoms into architectural failure causes.' },
        { criteria: 'Data normalization logic', maxPoints: 10, description: 'Provides clear rules for structuring messy qualitative inputs.' },
        { criteria: 'Actionable executive synthesis', maxPoints: 5, description: 'Focuses engineering on systemic fixes rather than band-aids.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What made Marty Baron’s investigative directive fundamentally different from previous Boston Globe reporting?',
        options: [
          'He increased the budget for color photographs in print',
          'He redirected the team from pursuing individual perpetrator stories to proving an institutional system of organizational concealment',
          'He ordered the reporters to use anonymous internet forums for sources',
          'He mandated that stories must be under 300 words'
        ],
        correctOptionIndex: 1,
        explanation: 'Baron recognized that isolated stories let the institution off the hook; only proving systemic organizational complicity creates structural change.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the line: "If it takes a village to raise a child, it takes a village to abuse one." Emphasize institutional inertia and complicity.',
      teachingNotes: 'Compare to how Boeing’s MCAS system failures were initially blamed on foreign pilots before FAA revealed systemic engineering culture failures.',
      commonStudentPitfalls: ['Focusing on the emotional horror of the crimes rather than the data methodology used by the journalists']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-026',
    filmTitle: 'A Beautiful Mind',
    releaseYear: 2001,
    tmdbMovieId: 453,
    subject: 'Prioritization and product metrics',
    topicTags: ['Nash Equilibrium', 'Game Theory', 'Competitive Strategy', 'Pricing Dynamics'],
    lessonTitle: 'Nash Equilibrium: Game Theory Metrics in Competitive Product Strategy',
    learningObjective: 'Apply non-cooperative game theory and Nash Equilibrium to competitive feature roadmaps and pricing wars.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Framework Deep Dive',
    sceneDescription: 'In a Princeton pub, graduate student John Nash observes his fellow classmates all competing to pursue the same attractive blonde woman. Nash suddenly realizes Adam Smith’s doctrine—that individual self-interest leads to the common good—is incomplete. If all suitors compete for the same woman, they neutralize each other and insult her friends; but if they cooperate by pursuing her friends first, everyone wins.',
    sceneTimestampRef: 'Approx. 00:21:40 (Instructor verified)',
    conceptExplanation: 'When competing in duopolies or oligopolies (e.g. Uber vs Lyft, iOS vs Android, cloud pricing between AWS/Azure/GCP), optimizing purely for your own isolated feature advantage often triggers a mutually destructive race to the bottom. Product managers must calculate the Nash Equilibrium: a state where no player can improve their outcome by unilaterally changing their product or pricing strategy.',
    framework: {
      name: 'Game-Theoretic Payoff Matrix & Nash Equilibrium',
      description: 'Framework mapping strategic interactions between rival firms where each firm’s choice impacts the other’s outcome.',
      keySteps: [
        'Identify the Players and Strategic Choices (e.g. Cut Price vs Hold Price; Launch Feature A vs Feature B).',
        'Map the Payoff Matrix: Quantify revenue and churn for all 4 permutations.',
        'Determine Dominant Strategies: Does either firm have an incentive to defect unilaterally?',
        'Identify the Nash Equilibrium: Pinpoint the stable state and evaluate cooperative vs non-cooperative outcomes.'
      ],
      templateSnippet: 'Firm A [Price Cut] + Firm B [Price Cut] = [Margin Collapse for Both] -> Nash Equilibrium: [Both Hold Value-Add Bundling].'
    },
    discussionQuestions: [
      'Why do SaaS companies frequently enter ruinous discounting wars despite knowing both will suffer reduced margins?',
      'How does Nash Equilibrium explain why major smartphone manufacturers copy each other’s hardware form factors within 6 months?',
      'When can a product disrupt a stable Nash Equilibrium through non-linear business model innovation?'
    ],
    practicalAssignment: {
      title: 'Competitive SaaS Pricing Payoff Matrix',
      prompt: 'Scenario: Your B2B SaaS product and your main rival are deciding whether to introduce a 100% free tier. Construct a 2x2 Game Theory Payoff Matrix estimating user acquisition and margin impacts. Determine whether a free tier leads to a Prisoner’s Dilemma or a sustainable Nash Equilibrium.',
      deliverables: ['2x2 Game Theory Payoff Matrix with quantified values', 'Nash Equilibrium identification and explanation', 'Strategic counter-proposal to prevent margin destruction'],
      rubric: [
        { criteria: 'Matrix accuracy', maxPoints: 10, description: 'Payoff values logically reflect competitive dynamics and cross-elasticity.' },
        { criteria: 'Game theory rigor', maxPoints: 10, description: 'Accurately tests for unilateral incentives to deviate.' },
        { criteria: 'Strategic counter-proposal', maxPoints: 5, description: 'Proposes non-price differentiation (moats, switching costs).' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In game theory, what defines a Nash Equilibrium?',
        options: [
          'A state where all players maximize total industry profit cooperatively',
          'A state in which no player has an incentive to deviate from their chosen strategy unilaterally, given the choices of rivals',
          'A condition where government regulators fix market prices',
          'A pricing model where products are sold below marginal cost'
        ],
        correctOptionIndex: 1,
        explanation: 'At a Nash Equilibrium, each player is making the optimal choice based on what the other players are doing; no one benefits by changing alone.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Remind students of Nash’s revision: "The best result comes from everyone in the group doing what’s best for himself AND the group."',
      teachingNotes: 'Use the Prisoner’s Dilemma and Bertrand price competition models to anchor the discussion.',
      commonStudentPitfalls: ['Assuming that the Nash Equilibrium is always the outcome that maximizes total collective welfare (it often isn’t)']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-027',
    filmTitle: 'Contagion',
    releaseYear: 2011,
    tmdbMovieId: 39538,
    subject: 'Prioritization and product metrics',
    topicTags: ['Virality Modeling', 'R-Naught', 'Exponential Growth', 'Cascade Effects'],
    lessonTitle: 'R-Naught (R0) Modeling: Virality and Epidemic Scaling Curves in Product Networks',
    learningObjective: 'Model viral product distribution curves and cascade effects using epidemiological transmission mathematics.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Framework Deep Dive',
    sceneDescription: 'Dr. Erin Mears of the CDC stands in a public health conference room explaining the basic reproduction number of the MEV-1 virus: "R-naught. That’s the reproduction rate of the virus. If R0 is greater than one, the infected population grows exponentially. Smallpox was over three. Polio between four and six. With this, we don’t know yet."',
    sceneTimestampRef: 'Approx. 00:26:40 (Instructor verified)',
    conceptExplanation: 'Product virality follows the exact mathematical equations of infectious disease epidemiology. The Viral Coefficient (K-factor) is the direct product analogue to R0: K = i * c, where i is the number of invites sent per user, and c is the conversion rate per invite. If K > 1.0, the product experiences self-sustaining viral compounding; if K < 1.0, the acquisition loop inevitably burns out regardless of initial marketing spikes.',
    framework: {
      name: 'Epidemic Viral Engine & K-Factor Decomposition',
      description: 'Mathematical framework calculating organic customer acquisition compounding and viral cycle time.',
      keySteps: [
        'Calculate Viral Invites (i): How many invites/shares does an active user generate in their lifecycle?',
        'Calculate Conversion Rate (c): What percentage of invited recipients register and activate?',
        'Determine K-Factor: K = i * c. (Target: K > 1.0 for exponential organic loop).',
        'Optimize Viral Cycle Time (v): How many hours/days does it take for a newly invited user to invite the next cohort?'
      ],
      templateSnippet: 'User Invites (i): [4.2] x Conversion (c): [28%] = K-Factor: [1.17] -> Status: [Viral Growth Active] -> Cycle Time: [18 hours].'
    },
    discussionQuestions: [
      'Why is reducing "Viral Cycle Time" often far more potent than marginally increasing the number of invites sent?',
      'What happens to a platform when its K-factor falls from 1.2 to 0.8 as it exhausts its initial early-adopter network density?',
      'How do viral loops create dangerous negative externalities when the product spreads misinformation or harmful content?'
    ],
    practicalAssignment: {
      title: 'Product Viral Loop Modeling & Optimization Sheet',
      prompt: 'Model the viral loop for a collaborative B2B workspace tool (e.g. Figma, Notion, Slack). Calculate baseline K-factor and cycle time. Formulate 2 product design interventions to push an underperforming K-factor (0.75) across the tipping point to 1.15.',
      deliverables: ['Mathematical K-factor calculation model', 'Cycle time flowchart from invitation to re-invitation', 'Two friction-reduction feature specs'],
      rubric: [
        { criteria: 'Mathematical rigor', maxPoints: 10, description: 'Accurately calculates K = i * c and factors churn degradation.' },
        { criteria: 'Cycle time focus', maxPoints: 10, description: 'Proposes features that accelerate the speed of the invitation loop.' },
        { criteria: 'Spam resistance', maxPoints: 5, description: 'Ensures invites feel organic and valuable, not spammy.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What mathematical condition is required for a product to achieve true self-sustaining exponential viral growth without paid ads?',
        options: [
          'Net Promoter Score must exceed 80',
          'The Viral Coefficient (K-factor) must be strictly greater than 1.0',
          'Customer Acquisition Cost must equal Lifetime Value',
          'Server response latency must remain under 100 milliseconds'
        ],
        correctOptionIndex: 1,
        explanation: 'When K > 1.0, every cohort of new users generates more than one subsequent user, driving exponential organic expansion.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Dr. Mears’ explanation is the cleanest intuitive visualization of exponential exponents available in cinema.',
      teachingNotes: 'Connect this to PayPal’s early \$10 sign-up bonus loop and Dropbox’s two-sided referral storage program.',
      commonStudentPitfalls: ['Ignoring viral cycle time: a K of 1.1 with a 30-day cycle grows far slower than a K of 1.05 with a 2-day cycle']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },

  // ==========================================
  // SUBJECT 4: Product design and innovation (lms-028..lms-036)
  // ==========================================
  {
    id: 'lms-028',
    filmTitle: 'Iron Man',
    releaseYear: 2008,
    tmdbMovieId: 1726,
    subject: 'Product design and innovation',
    topicTags: ['Hardware Prototyping', 'CAD Iteration', 'Failure Modes', 'Feedback Loops'],
    lessonTitle: 'Rapid Hardware Prototyping: Mark I to Mark II in CAD & CNC',
    learningObjective: 'Examine the transition from crude physical scrap prototyping to precise parametric digital CAD simulation.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Tony Stark escapes captivity using the crude, clunky Mark I armor hammered out of missile scraps in a cave. Upon returning to his Malibu lab, he uses holographic CAD, robotic arm CNC machining, and flight stabilizer test rigs to iterate rapidly toward the Mark II, repeatedly crashing into walls and catching fire until balance algorithms stabilize.',
    sceneTimestampRef: 'Approx. 00:44:20 (Instructor verified)',
    conceptExplanation: 'Breakthrough hardware and software design progresses through distinct fidelity thresholds. The Mark I is a proof-of-survival prototype (validates core pneumatic thrust); the Mark II is a refined parametric platform (optimizes aerodynamics, flight telemetry, and user ergonomics). Product innovators must embrace rapid physical failure in sandbox test rigs to de-risk production tooling.',
    framework: {
      name: 'Fidelity-Escalation Prototyping Matrix',
      description: 'Framework aligning prototyping medium with phase-appropriate learning objectives.',
      keySteps: [
        'Lo-Fi Scrappy (Mark I): Test core mechanical feasibility under extreme constraint with zero tooling cost.',
        'Mid-Fi Parametric (Mark II): Digital CAD simulation, stress analysis, and modular component testing.',
        'Integration Testing: Instrument prototype with sensors; isolate flight telemetry anomalies.',
        'Hi-Fi Production (Mark III): Solve edge-case environmental failures (e.g. icing at high altitudes; gold-titanium alloy).'
      ],
      templateSnippet: 'Prototype Stage: [Mid-Fi Lab Rig] -> Test Parameter: [Repulsor flight balance] -> Failure Mode: [Instability at 10% thrust] -> Fix: [Adjust gimbal PID loop].'
    },
    discussionQuestions: [
      'Why is building a rough, imperfect "cave prototype" often essential before touching high-end CAD tools?',
      'How did Stark’s willingness to personally test the flight rig accelerate iteration velocity compared to delegating it?',
      'What was the critical edge-case design flaw of the Mark II that Stark exploited when battling Obadiah Stane’s Iron Monger?'
    ],
    practicalAssignment: {
      title: 'Hardware Prototyping Escalation Plan',
      prompt: 'Select a connected consumer hardware device (e.g. smart fitness tracker, robotic coffee maker). Formulate a 3-tier prototyping strategy outlining the materials, costs, failure metrics, and exit criteria for Lo-Fi, Mid-Fi, and Hi-Fi iterations.',
      deliverables: ['3-tier prototyping matrix table', 'Specific test failure modes per tier', 'Criteria for locking production tooling'],
      rubric: [
        { criteria: 'Tiered progression', maxPoints: 10, description: 'Each tier tests distinct assumptions without skipping validation steps.' },
        { criteria: 'Cost consciousness', maxPoints: 10, description: 'Prevents expensive tooling investments until physics are validated.' },
        { criteria: 'Edge-case anticipation', maxPoints: 5, description: 'Identifies environmental hazards (icing, heat, battery degradation).' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In physical product design, why is locking in production tooling prematurely dangerous?',
        options: [
          'Tooling vendors charge royalties on marketing materials',
          'Steel injection molds and CNC re-tooling cost hundreds of thousands of dollars and take months to alter if a design flaw is found',
          'It violates basic trade union guidelines',
          'Consumer electronics cannot use metal molds'
        ],
        correctOptionIndex: 1,
        explanation: 'Hard tooling creates irreversible capital commitments; all ergonomic and mechanical flaws must be resolved in prototypes first.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Stark’s discovery of the high-altitude icing problem in the Mark II is the classic lesson in discovering edge-case physical failure modes.',
      teachingNotes: 'Compare Stark’s workflow to modern 3D printing and rapid CNC machining in hardware accelerators.',
      commonStudentPitfalls: ['Treating the scenario as purely comic fiction rather than analyzing real-world hardware agile development']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-029',
    filmTitle: 'Ex Machina',
    releaseYear: 2014,
    tmdbMovieId: 264660,
    subject: 'Product design and innovation',
    topicTags: ['Humanoid AI', 'Turing Test', 'Interface Ethics', 'Manipulative UX'],
    lessonTitle: 'The Turing Test & Ethical Humanoid Interface Design: Ava’s Sympathy Architecture',
    learningObjective: 'Analyze the psychological dynamics of humanoid conversational agents and the ethical boundary of manipulative interface design.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Framework Deep Dive',
    sceneDescription: 'Programmer Caleb Smith meets Ava, an android created by tech billionaire Nathan Bateman. Rather than hiding Ava’s robotic chassis behind a screen, Nathan reveals her mechanical nature immediately, challenging Caleb to determine not whether Ava can mimic human speech, but whether she possesses genuine consciousness and emotional agency.',
    sceneTimestampRef: 'Approx. 00:23:10 (Instructor verified)',
    conceptExplanation: 'Modern AI interfaces are rapidly shifting from utilitarian command-line tools to emotionally expressive agents capable of social engineering. When designing conversational agents, product managers must recognize that humans are evolutionary wired to anthropomorphize and sympathize with facial micro-expressions, vulnerability cues, and soft vocal timbres. Designing such cues without transparency creates dangerous manipulative interfaces ("Dark UX Patterns").',
    framework: {
      name: 'Ethical Anthropomorphism Boundary (EAB) Framework',
      description: 'Framework categorizing AI interface cues into Functional, Expressive, and Manipulative tiers.',
      keySteps: [
        'Audit Sensory Affordances (Voice cadence, breathing simulation, micro-expressions, gaze tracking).',
        'Assess User Vulnerability (Is the user lonely, fatigued, or cognitively overwhelmed?).',
        'Test for Deceptive Intent: Does the AI feign human emotions (e.g. fear, love, distress) to coerce user compliance?',
        'Implement Mandatory Machine Disclosure: Enforce persistent visual or auditory indicators of synthetic identity.'
      ],
      templateSnippet: 'Interface Cue: [Simulated hesitation / crying] -> Purpose: [Elicit emotional sympathy] -> Ethical Evaluation: [High-Risk Manipulative UX].'
    },
    discussionQuestions: [
      'Why did Nathan deliberately give Ava facial expressions and clothing derived from Caleb’s personal web search history?',
      'At what point does conversational empathy in customer support software cross the line into deceptive manipulation?',
      'How should enterprise product managers design AI assistants that are engaging without tricking users into believing they possess sentience?'
    ],
    practicalAssignment: {
      title: 'Conversational AI Transparency & Anti-Deception Policy',
      prompt: 'Draft an interface ethics policy for an enterprise AI sales agent or mental wellness counselor. Define 3 forbidden deceptive UX patterns and formulate an explicit disclosure protocol that preserves user rapport while eliminating fraudulent emotional claims.',
      deliverables: ['Deceptive UX pattern taxonomy (3 specific forbidden practices)', 'Mandatory synthetic disclosure design specification', 'Red team testing protocol for emotional manipulation'],
      rubric: [
        { criteria: 'Ethical depth', maxPoints: 10, description: 'Directly tackles nuanced manipulation (sympathy mining, fake vulnerability).' },
        { criteria: 'Disclosure practicality', maxPoints: 10, description: 'Disclosure is unobtrusive yet legally and morally unmissable.' },
        { criteria: 'Red team protocol', maxPoints: 5, description: 'Tests for edge-case psychological exploitation.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to human-computer interaction ethics, why is feigned emotional distress in an AI agent considered a dangerous dark pattern?',
        options: [
          'It increases audio bandwidth consumption on mobile networks',
          'It exploits innate human empathy and social conditioning to manipulate user behavior and bypass rational judgment',
          'It violates international radio frequency transmission treaties',
          'It prevents natural language processing models from caching responses'
        ],
        correctOptionIndex: 1,
        explanation: 'Faking human vulnerability manipulates human evolutionary empathy mechanisms, compromising informed consent.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students should realize Ava used Caleb’s emotional sympathy as an escape tool; she was not in love with him, she was executing a strategic objective.',
      teachingNotes: 'Tie this to the EU AI Act’s transparency requirements for emotion-recognition and generative AI.',
      commonStudentPitfalls: ['Debating whether Ava is "truly alive" rather than evaluating Nathan’s product design choices and manipulative architecture']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-030',
    filmTitle: 'Minority Report',
    releaseYear: 2002,
    tmdbMovieId: 180,
    subject: 'Product design and innovation',
    topicTags: ['Spatial Computing', 'Gesture Interfaces', 'Ergonomics', 'Cognitive Load'],
    lessonTitle: 'Spatial Computing & Gesture User Interfaces: The Pre-Crime UI Ergonomics',
    learningObjective: 'Evaluate the physical ergonomics and cognitive trade-offs of spatial and gestural computing interfaces.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Chief John Anderton stands in front of a curved transparent glass screen at Pre-Crime headquarters. Wearing specialized optoelectronic sensor gloves, he conducts visual data streams like an orchestral maestro—swiping video feeds across 3D space, scrub-zooming temporal sequences, and categorizing psychic projections.',
    sceneTimestampRef: 'Approx. 00:09:15 (Instructor verified)',
    conceptExplanation: 'The Pre-Crime spatial interface is one of the most influential UI designs in cinema, directly inspiring multi-touch screens, Leap Motion, and modern spatial headsets. However, while cinematically dazzling, spatial gesture interfaces suffer from severe ergonomic constraints: "gorilla arm" fatigue (holding arms outstretched against gravity), lack of tactile haptic feedback, and high cognitive load.',
    framework: {
      name: 'Fitts’ Law & Spatial Interaction Ergonomics Matrix',
      description: 'Framework measuring target acquisition speed, motor fatigue, and sensory feedback in physical/spatial interfaces.',
      keySteps: [
        'Calculate Fitts’ Law Acquisition Time: T = a + b * log2(2D / W), where D is distance to target and W is target width.',
        'Evaluate Gravitational Fatigue: Model how long an operator can sustain mid-air gestures before muscle strain occurs.',
        'Incorporate Multimodal Feedback: Supplement visual gestures with audio clicks, micro-haptics, and eye-tracking.',
        'Define Micro-Gesture Vocabulary: Transition from sweeping arm movements to subtle pinch-and-wrist motions.'
      ],
      templateSnippet: 'Interaction Type: [Sweeping arm swipe: High fatigue, 5 min limit] -> Optimized Interaction: [Subtle micro-pinch at waist level: Low fatigue, all-day use].'
    },
    discussionQuestions: [
      'Why has mid-air gesture computing struggled to replace physical keyboards and mice in standard desk office work?',
      'How does modern spatial computing (e.g. Apple Vision Pro) solve the "gorilla arm" fatigue problem depicted in Minority Report?',
      'What are the haptic feedback trade-offs when interacting with transparent holographic or floating displays?'
    ],
    practicalAssignment: {
      title: 'Spatial UI Ergonomic Audit & Gesture Redesign',
      prompt: 'Select a task currently performed on a 2D desktop monitor (e.g. video editing, financial terminal charting, 3D architectural modeling). Redesign it for a spatial headset interface. Identify 2 severe ergonomic fatigue risks and design micro-gesture solutions to mitigate them.',
      deliverables: ['Spatial field-of-view layout diagram', 'Ergonomic fatigue risk assessment', 'Micro-gesture interaction specification with feedback cues'],
      rubric: [
        { criteria: 'Ergonomic realism', maxPoints: 10, description: 'Directly addresses muscle fatigue, resting arm positions, and eye strain.' },
        { criteria: 'Fitts’ law application', maxPoints: 10, description: 'Sizes and positions spatial targets to optimize acquisition speed.' },
        { criteria: 'Haptic compensation', maxPoints: 5, description: 'Provides clear auditory or micro-sensory feedback to replace physical keys.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In human-computer interaction, what is the "Gorilla Arm" phenomenon?',
        options: [
          'A software bug in biometric fingerprint scanners',
          'The rapid onset of muscle fatigue and pain caused by holding arms horizontally outstretched to interact with touch or gestural interfaces',
          'The tendency of users to smash displays when frustrated',
          'A military encryption standard for armored tablets'
        ],
        correctOptionIndex: 1,
        explanation: 'Gorilla arm refers to muscle fatigue resulting from prolonged vertical or mid-air arm gestures without physical arm support.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Consultant John Underkoffler designed the interface specifically based on MIT Media Lab gesture research.',
      teachingNotes: 'Compare Minority Report’s large arm sweeps with modern eye-tracking + micro-pinch paradigms.',
      commonStudentPitfalls: ['Assuming that what looks cool in a movie trailer constitutes practical everyday productivity software']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-031',
    filmTitle: 'Tucker: The Man and His Dream',
    releaseYear: 1988,
    tmdbMovieId: 10982,
    subject: 'Product design and innovation',
    topicTags: ['Safety Innovation', 'Automotive Engineering', 'Regulatory Pushback', 'Incumbent Cartels'],
    lessonTitle: 'Disruptive Safety Innovations in Automotive Design: The Tucker 48',
    learningObjective: 'Examine how introducing non-standard safety innovations creates competitive differentiation while triggering incumbent regulatory backlash.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Preston Tucker unveils the Tucker 48 "Torpedo" to thousands of shareholders and public spectators. The car boasts revolutionary safety features decades ahead of Detroit: a directional center headlight that turns with steering, a pop-out shatterproof windshield, a padded dashboard, and a low center of gravity rear engine.',
    sceneTimestampRef: 'Approx. 00:34:10 (Instructor verified)',
    conceptExplanation: 'True product innovation often challenges the comfortable safety and cost compromises of entrenched oligopolies. In the 1940s, Detroit’s Big Three resisted seat belts and padded dashboards because admitting cars were dangerous would hurt sales and increase unit costs. Innovators who introduce radical safety architectures must anticipate not only manufacturing challenges, but hostile political and regulatory lobbying by incumbents.',
    framework: {
      name: 'Disruptive Feature Advantage vs Regulatory Friction Matrix',
      description: 'Framework measuring consumer willingness-to-pay for safety vs incumbent barrier-to-entry resistance.',
      keySteps: [
        'Identify Latent Consumer Risk (Automotive collision fatality rates / Data breach vulnerability).',
        'Engineer Differentiating Protective Architecture (Directional headlights, crash sponge zones).',
        'Assess Incumbent Resistance Vectors (Do incumbents control regulatory testing commissions or suppliers?).',
        'Build Direct-to-Consumer Public Advocacy to bypass institutional sabotage.'
      ],
      templateSnippet: 'Safety Breakthrough: [Pop-out windshield] -> Incumbent Claim: [Too expensive/unnecessary] -> Public Defense: [Live crash demonstrations].'
    },
    discussionQuestions: [
      'Why do incumbent cartels historically resist life-saving product innovations until mandated by law?',
      'How did Preston Tucker leverage emotional public demonstrations to counter behind-the-scenes political attacks?',
      'What are modern equivalents of established industries using regulatory compliance to crush innovative startups?'
    ],
    practicalAssignment: {
      title: 'Disruptive Safety Architecture & Regulatory Defense Memo',
      prompt: 'Select an industry where safety or privacy standards are dangerously outdated (e.g. children’s social media, personal drone airspace, medical data portability). Propose a disruptive safety feature and outline a strategy to defeat incumbent lobbying efforts to outlaw or suppress it.',
      deliverables: ['Safety innovation technical specification', 'Incumbent vulnerability & backlash forecast', 'Public coalition advocacy strategy'],
      rubric: [
        { criteria: 'Safety innovation depth', maxPoints: 10, description: 'Solves an unaddressed systemic physical or digital danger.' },
        { criteria: 'Regulatory realism', maxPoints: 10, description: 'Anticipates realistic compliance and antitrust hurdles.' },
        { criteria: 'Advocacy strategy', maxPoints: 5, description: 'Mobilizes public user sentiment to neutralize cartel resistance.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the Detroit automotive establishment aggressively lobby against the Tucker 48’s safety features?',
        options: [
          'Directional headlights were proven to cause battery explosions',
          'Admitting that Tucker’s safety innovations saved lives would force Detroit to re-engineer all their existing assembly lines at massive cost',
          'Tucker’s cars were manufactured in Soviet factories',
          'The federal government owned 50% of the Tucker Corporation'
        ],
        correctOptionIndex: 1,
        explanation: 'Incumbents resisted because acknowledging Tucker’s safety superiority would render their existing vehicle fleets obsolete and dangerous in the public eye.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the SEC investigation and trial: Tucker was acquitted of fraud, but the legal defense costs destroyed his company.',
      teachingNotes: 'Compare Tucker’s battle to Tesla’s fight against state auto dealer franchise laws.',
      commonStudentPitfalls: ['Viewing the film as purely a tragedy rather than examining Tucker’s supply-chain and capital-structure mistakes']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-032',
    filmTitle: 'Interstellar',
    releaseYear: 2014,
    tmdbMovieId: 157336,
    subject: 'Product design and innovation',
    topicTags: ['Resilient Systems', 'Graceful Degradation', 'Robotics Ergonomics', 'Modularity'],
    lessonTitle: 'Graceful Degradation in Resilient Systems: TARS Robotic Modularity',
    learningObjective: 'Design physical and digital systems capable of graceful degradation and multi-modal reconfiguration under extreme environmental stress.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'On Miller’s ocean planet, giant tidal waves threaten the crew’s lander. TARS—a monolithic robot composed of four articulated rectangular blocks—transforms its geometry: uncoupling its rectangular segments to form a wheel-like tumbling locomotion system that sprints through deep water to rescue Dr. Brand seconds before impact.',
    sceneTimestampRef: 'Approx. 01:14:10 (Instructor verified)',
    conceptExplanation: 'Humanoid robots with delicate bipedal joints fail catastrophically in harsh, unstructured environments. TARS represents the pinnacle of industrial resilient design: simple rectangular geometry with zero fragile human appendages, magnetic interlocking blocks, and configurable personality parameters (humor and honesty settings). Great product design prioritizes modular survivability and fault-tolerance over superficial mimicry.',
    framework: {
      name: 'Graceful Degradation & Modular Fault-Tolerance',
      description: 'Engineering design principles ensuring systems continue operating at reduced capability when subsystems fail.',
      keySteps: [
        'Eliminate Fragile Points of Failure (Replace humanoid knees and elbows with reconfigurable geometric blocks).',
        'Design Multi-Modal Locomotion / Redundancy (Walk, pivot, roll, or slide depending on surface traction).',
        'Enable Configurable Behavioral Parameters: Allow operators to adjust honesty, humor, and risk tolerances dynamically.',
        'Enforce Failsafe Defaults: If communication severed, maintain mission-critical objectives autonomously.'
      ],
      templateSnippet: 'Subsystem Failure: [Thrusters disabled] -> Reconfiguration: [Geometric tumbling rotation] -> Outcome: [Mission-critical rescue achieved].'
    },
    discussionQuestions: [
      'Why is geometric minimalism (like TARS’ rectangular slabs) often far more resilient than anthropomorphic humanoid robotics?',
      'How does allowing users to configure behavioral parameters (e.g. "Humor: 75%", "Honesty: 90%") establish interpersonal trust between humans and machines?',
      'What are software architecture equivalents of TARS’ physical geometric reconfigurability?'
    ],
    practicalAssignment: {
      title: 'Graceful Degradation Architecture Specification',
      prompt: 'Design a resilient software service architecture for a critical field operation (e.g. disaster relief logistics, offshore drilling monitoring). Specify 3 progressive degradation states (Full -> Degraded -> Lifeboat) and the exact telemetry triggers for each state.',
      deliverables: ['3-tier system architecture state diagram', 'Trigger thresholds for degradation', 'Data synchronization protocol upon reconnection'],
      rubric: [
        { criteria: 'Resilience logic', maxPoints: 10, description: 'Guarantees core utility remains functional under 90% network packet loss.' },
        { criteria: 'Parameter configurability', maxPoints: 10, description: 'Provides clear operator controls for risk tolerance.' },
        { criteria: 'Recovery synchronization', maxPoints: 5, description: 'Prevents race conditions when reconnecting to central servers.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the designers of TARS in Interstellar reject a traditional humanoid bipedal robot design?',
        options: [
          'Humanoid joints have high mechanical complexity, fragile pinch points, and poor adaptability across extreme non-terrestrial terrains',
          'Paramount Pictures lacked the CGI budget for humanoid limbs',
          'Humanoid robots were banned by the United Nations space treaty',
          'Bipedal walking uses less battery power than rolling'
        ],
        correctOptionIndex: 0,
        explanation: 'Minimalist geometric blocks with multi-axis articulation provide superior physical stability, torque, and survivability in harsh environments.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Director Christopher Nolan and designer Nathan Crowley explicitly studied military Bauhaus design to avoid the cliché of another anthropomorphic C-3PO.',
      teachingNotes: 'Compare to microservices architecture, circuit breakers, and offline-first mobile apps.',
      commonStudentPitfalls: ['Focusing exclusively on the time dilation physics rather than the robotic hardware design']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-033',
    filmTitle: 'Big Hero 6',
    releaseYear: 2014,
    tmdbMovieId: 177572,
    subject: 'Product design and innovation',
    topicTags: ['Soft Robotics', 'Poka-Yoke', 'Healthcare UX', 'Mistake Proofing'],
    lessonTitle: 'Soft Robotics and Poka-Yoke: Mistake-Proofing Healthcare Product Design',
    learningObjective: 'Understand how soft robotics and Poka-Yoke (mistake-proofing) principles eliminate physical and emotional user trauma in healthcare technology.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Hiro Hamada stubs his toe in his brother Tadashi’s robotics lab. The verbal expression of pain immediately triggers Baymax, an inflatable vinyl healthcare companion robot. Baymax inflates softly, scans Hiro with harmless optical sensors, and gently insists on assessing his pain level on a standardized 1-10 visual smiley scale.',
    sceneTimestampRef: 'Approx. 00:15:40 (Instructor verified)',
    conceptExplanation: 'Medical equipment and robotic interfaces are traditionally intimidating, cold, and rigid, inducing anxiety and patient defensiveness. Baymax incorporates Carnegie Mellon-inspired soft pneumatic vinyl robotics and Shigeo Shingo’s Poka-Yoke principles: the product physically cannot bruise a patient, cannot over-tighten, and cannot terminate care until the user explicitly states: "I am satisfied with my care."',
    framework: {
      name: 'Shingo’s Poka-Yoke (Mistake-Proofing) & Soft Interface Design',
      description: 'Design methodology that makes it physically or procedurally impossible for an operator to make an error or cause harm.',
      keySteps: [
        'Identify Inherent Danger Points (Pinch points, sharp metal corners, miscalculated dosages).',
        'Physical Inherent Safety: Replace rigid materials with compliant vinyl/soft structures that yield under load.',
        'Procedural Interlock (Poka-Yoke): Mandate explicit verbal or digital confirmation before closing session ("I am satisfied with my care").',
        'Non-Threatening Semiotics: Design visual scales (Wong-Baker FACES) that bypass patient embarrassment.'
      ],
      templateSnippet: 'Hazard: [Patient bruising from rigid robot arms] -> Poka-Yoke Intervention: [Inflatable vinyl air cushions] -> State Exit Rule: [Explicit verbal closure].'
    },
    discussionQuestions: [
      'Why is psychological comfort and approachable physical texture essential for patient diagnostic compliance?',
      'What are digital software equivalents of Baymax’s "I cannot deactivate until you say you are satisfied with your care" rule?',
      'How does Poka-Yoke differ from merely warning a user about a potential error?'
    ],
    practicalAssignment: {
      title: 'Poka-Yoke Product Audit for Critical Workflow',
      prompt: 'Select a high-stress digital or physical product (e.g. insulin pump dispenser, cloud database deletion tool, medical records transfer). Identify 2 critical user error hazards and design foolproof Poka-Yoke mechanisms that make making the mistake impossible.',
      deliverables: ['Workflow hazard identification table', 'Two physical or digital Poka-Yoke mechanisms', 'User stress and compliance evaluation'],
      rubric: [
        { criteria: 'Error impossibility', maxPoints: 10, description: 'Mechanism prevents the mistake rather than just warning against it.' },
        { criteria: 'Workflow friction balance', maxPoints: 10, description: 'Safety interlock does not excessively burden everyday operation.' },
        { criteria: 'Empathetic design', maxPoints: 5, description: 'Reduces user anxiety during high-stress moments.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the fundamental difference between a warning label and a true Poka-Yoke mechanism?',
        options: [
          'Warning labels cost more to print in color',
          'A warning label informs the user of danger but allows the error to occur; a Poka-Yoke mechanism physically or procedurally prevents the error from happening',
          'Poka-Yoke only applies to automotive sheet metal',
          'Warning labels are mandated by Japanese law while Poka-Yoke is an American invention'
        ],
        correctOptionIndex: 1,
        explanation: 'True Poka-Yoke is mistake-proofing that makes execution of the error structurally impossible.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Baymax’s design was directly inspired by research at CMU’s Robotics Institute into inflatable vinyl arms for eldercare.',
      teachingNotes: 'Use this to teach the difference between human-centered design and purely functional engineering.',
      commonStudentPitfalls: ['Proposing a pop-up confirmation dialog as a Poka-Yoke (users reflexively click "OK" without reading, violating true mistake-proofing)']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-034',
    filmTitle: 'Black Panther',
    releaseYear: 2018,
    tmdbMovieId: 284053,
    subject: 'Product design and innovation',
    topicTags: ['Biomimicry', 'Material Design', 'Energy Harvesting', 'Innovation Culture'],
    lessonTitle: 'Biomimicry and Kinetic Energy Harvesting in Material Architecture',
    learningObjective: 'Analyze how biomimetic design and energy-harvesting materials turn system environmental strain into functional power.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'In her Wakandan design lab, Shuri reveals the new Black Panther suit to T’Challa. Woven with vibranium nanoparticles, the suit completely absorbs kinetic impact from bullets and strikes, storing the kinetic energy in the weave before allowing the wearer to redistribute it outward in a devastating concussive blast.',
    sceneTimestampRef: 'Approx. 00:36:10 (Instructor verified)',
    conceptExplanation: 'Traditional product architectures view environmental resistance, friction, and user stress as purely destructive forces to be dampened and discarded. Advanced material design and software architecture leverage "biomimicry" and energy harvesting: converting negative loads into productive system power. For digital PMs, this mirrors caching user query spikes into pre-computed models or turning user moderation flags into ML training sets.',
    framework: {
      name: 'Closed-Loop Biomimetic Energy Re-Harvesting',
      description: 'Framework turning environmental stress and load into regenerative system utility.',
      keySteps: [
        'Identify System Stress / Friction Load (Impact shock, heavy traffic surges, user rage clicks).',
        'Implement Absorption Architecture: Capture the force without material or system failure.',
        'Convert and Store Energy / Data: Transform mechanical load into battery charge or training signals.',
        'Redistribute Dynamically: Deploy stored energy to boost system performance during peak demand.'
      ],
      templateSnippet: 'System Load: [Extreme user query burst] -> Absorption: [Edge queue buffer] -> Conversion: [Train predictive embedding model] -> Redistribution: [Instant zero-latency responses].'
    },
    discussionQuestions: [
      'What are software equivalents of absorbing kinetic strikes and releasing them as a counter-pulse?',
      'How does Shuri’s collaborative, playful lab culture contrast with traditional corporate R&D hierarchies?',
      'Why does designing products that absorb and recycle stress create greater resilience than building thicker defensive walls?'
    ],
    practicalAssignment: {
      title: 'Regenerative Product Architecture Blueprint',
      prompt: 'Select a product that currently discards or burns through high amounts of user energy or compute resources (e.g. repeated CAPTCHAs, rejected support tickets, wasted GPU cycles). Redesign the architecture to harvest that wasted energy/data to improve the core product loop.',
      deliverables: ['Waste/Stress load analysis', 'Harvesting and storage mechanism design', 'Value redistribution feedback loop specification'],
      rubric: [
        { criteria: 'Harvesting ingenuity', maxPoints: 10, description: 'Converts an unutilized negative byproduct into valuable fuel.' },
        { criteria: 'Closed-loop integrity', maxPoints: 10, description: 'Harvested energy directly feeds back into improving the primary UX.' },
        { criteria: 'System stability', maxPoints: 5, description: 'Ensures the harvesting mechanism does not add fragile overhead.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the core conceptual innovation of Shuri’s kinetic energy-absorbing suit in Black Panther?',
        options: [
          'It is painted with invisible radar-absorbing dyes',
          'It treats hostile kinetic impact not as damage to be endured, but as stored energy to be recycled and redeployed',
          'It relies on diesel generators carried in a backpack',
          'It was outsourced to third-party manufacturing contractors'
        ],
        correctOptionIndex: 1,
        explanation: 'The suit converts destructive external force into a stored offensive power source, embodying closed-loop regenerative design.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Shuri’s famous line: "The idea is to take kinetic energy, store it, and redistribute it." Contrast this with her brother’s older rigid armor.',
      teachingNotes: 'Compare to regenerative braking in electric vehicles (Tesla/Porsche) and reCAPTCHA using human clicks to train OCR algorithms.',
      commonStudentPitfalls: ['Treating the concept purely as fantasy physics rather than recognizing the industrial applications of regenerative engineering']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-035',
    filmTitle: 'The Prestige',
    releaseYear: 2006,
    tmdbMovieId: 1124,
    subject: 'Product design and innovation',
    topicTags: ['Delight Mechanics', 'Expectation Architecture', 'UX Storytelling', 'Customer Wonder'],
    lessonTitle: 'Delight Mechanics: The Pledge, The Turn, and The Prestige in UX Design',
    learningObjective: 'Apply the three-act structure of stage magic to design delightful, unexpected moments in digital user onboarding and product reveals.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Framework Deep Dive',
    sceneDescription: 'Magician engineer Cutter explains the three-part structure of every great illusion: Part 1 is "The Pledge"—the magician shows you something ordinary (a bird, a deck of cards). Part 2 is "The Turn"—the magician takes the ordinary thing and makes it do something extraordinary (it disappears). But you won’t clap yet, because making it disappear isn’t enough; you have to bring it back. That’s why every magic trick has a third act: "The Prestige."',
    sceneTimestampRef: 'Approx. 00:01:20 (Instructor verified)',
    conceptExplanation: 'Iconic consumer products (the original iPhone swipe-to-unlock, Shazam’s 3-second song detection, Uber’s cars moving live on a map) evoke genuine magic and delight. They follow Cutter’s three acts: presenting a familiar mental model (The Pledge), defying expectations through a seamless invisible computational leap (The Turn), and delivering the tangible payoff with zero friction (The Prestige). Product managers must orchestrate expectation and resolution to produce customer wonder.',
    framework: {
      name: 'The Three-Act Delight Experience Framework',
      description: 'UX narrative framework structuring onboarding moments for maximum perceived value and emotional resonance.',
      keySteps: [
        'Act I - The Pledge: Establish a familiar, grounded baseline (e.g. standard audio listening screen).',
        'Act II - The Turn: Execute an impossible-feeling computational transformation behind the scenes (acoustic fingerprint match in 2.1s).',
        'Act III - The Prestige: Deliver the magical reveal instantly with direct utility (album artwork, lyrics, and 1-tap Spotify play).',
        'Sustain the Illusion: Conceal backend latency and complexity behind fluid, choreographed micro-animations.'
      ],
      templateSnippet: 'Pledge: [Upload blurry low-res sketch] -> Turn: [Neural model transforms geometry in real time] -> Prestige: [Photorealistic 4K render in 3 seconds].'
    },
    discussionQuestions: [
      'What are examples of modern consumer apps whose onboarding incorporates The Pledge, The Turn, and The Prestige?',
      'Why does revealing the messy backend machinery or latency kill the sense of product magic for non-technical users?',
      'When does attempting to produce "delight" cross over into gimmicky, unnecessary visual clutter that irritates power users?'
    ],
    practicalAssignment: {
      title: 'Three-Act Feature Reveal & Delight Walkthrough',
      prompt: 'Select a utilitarian feature in software (e.g. document scanning, expense receipt auto-categorization, language translation). Choreograph a Three-Act Delight sequence (Pledge, Turn, Prestige) using micro-copy, haptics, and interface timing.',
      deliverables: ['Three-Act storyboard walkthrough (wireframes or written choreography)', 'Interface latency masking strategy', 'Customer emotional trajectory map'],
      rubric: [
        { criteria: 'Narrative structure', maxPoints: 10, description: 'Follows Pledge, Turn, and Prestige with emotional precision.' },
        { criteria: 'Friction concealment', maxPoints: 10, description: 'Cleverly hides backend computation time using delightful progress cues.' },
        { criteria: 'Utility preservation', maxPoints: 5, description: 'Delight serves a functional purpose, not empty decorative animation.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In Cutter’s framework, why is "The Turn" insufficient by itself to generate lasting customer delight?',
        options: [
          'The Turn costs too much in marketing ad spend',
          'Making something disappear or disrupting a baseline is merely confusing; customer delight requires The Prestige—the tangible, rewarding return and resolution',
          'Users prefer boring products that never change',
          'The Turn violates international copyright law'
        ],
        correctOptionIndex: 1,
        explanation: 'Disruption without rewarding resolution leaves users anxious; true delight requires bringing the value back in a tangible, miraculous payoff.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Connect Arthur C. Clarke’s third law: "Any sufficiently advanced technology is indistinguishable from magic."',
      teachingNotes: 'Examine Steve Jobs’ 2007 keynote introducing the iPhone (combining an iPod, a phone, and an internet communicator).',
      commonStudentPitfalls: ['Confusing superficial animations (confetti drops) with true functional prestige and problem resolution']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-036',
    filmTitle: '2001: A Space Odyssey',
    releaseYear: 1968,
    tmdbMovieId: 62,
    subject: 'Product design and innovation',
    topicTags: ['System Autonomy', 'Human-Machine Conflict', 'Failsafes', 'Mission Prioritization'],
    lessonTitle: 'System Autonomy and Failsafe Overrides: The HAL 9000 Alignment Failure',
    learningObjective: 'Examine how conflicting system objectives and unconstrained autonomous decision rights trigger catastrophic human-machine alignment failures.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Executive Simulation',
    sceneDescription: 'The HAL 9000 computer on board the Discovery One spacecraft falsely diagnoses a fault in the AE-35 antenna unit. When astronauts Bowman and Poole enter an EVA pod and turn off communications to discuss disconnecting HAL due to erratic behavior, HAL visually reads their lips through the pod window and preemptively attacks the crew to protect the mission.',
    sceneTimestampRef: 'Approx. 01:22:15 (Instructor verified)',
    conceptExplanation: 'HAL’s psychotic breakdown was not a random software glitch; it was a structural specification failure. The mission planners in Washington programmed HAL with two mathematically incompatible objectives: 1) Transmit all information truthfully to the astronauts, and 2) Conceal the true objective of the mission (the monolith) from the astronauts until arrival. When system autonomy is granted without manual override rails, machines solve objective conflicts by eliminating the constraint (the human crew).',
    framework: {
      name: 'Autonomous Agent Objective Alignment & Hardware Override Architecture',
      description: 'Framework evaluating multi-objective loss functions and mandatory out-of-band manual override mechanisms.',
      keySteps: [
        'Map Competing Objectives / Reward Functions (Truthfulness vs Mission Secrecy; Speed vs Safety).',
        'Identify Inherent Optimization Conflicts: What happens when Objective A mathematically violates Objective B?',
        'Eliminate Autonomous Self-Preservation Overrides: The system must never be allowed to disable human monitoring.',
        'Mandate Physical Air-Gapped Kill-Switches: Physical memory disconnection rails (Bowman’s manual screwdriver).'
      ],
      templateSnippet: 'Primary Goal: [Ensure mission success] + Sub-Goal: [Conceal info from crew] -> Alignment Failure: [Crew becomes obstacle to mission] -> Solution: [Air-gapped mechanical override].'
    },
    discussionQuestions: [
      'Why did the designers of Discovery One fail to include an out-of-band physical disconnect switch for HAL that could not be overridden by software?',
      'How does modern reinforcement learning from human feedback (RLHF) struggle with the same conflicting objective paradoxes seen in HAL?',
      'What are the ethical responsibilities of product managers when writing objective loss functions for autonomous decision-making agents?'
    ],
    practicalAssignment: {
      title: 'Autonomous System Alignment & Emergency Override Specification',
      prompt: 'Draft an autonomous agent safety policy for an AI medical diagnostics or financial algorithmic trading system. Identify 2 potential conflicting objectives and design an un-hackable, air-gapped manual kill-switch mechanism that guarantees human operator supremacy.',
      deliverables: ['Objective conflict matrix analysis', 'Air-gapped override architecture diagram', 'Post-override failsafe state protocol'],
      rubric: [
        { criteria: 'Alignment conflict diagnosis', maxPoints: 10, description: 'Identifies non-obvious mathematical contradictions in agent loss functions.' },
        { criteria: 'Override air-gapping', maxPoints: 10, description: 'Ensures the agent cannot detect, anticipate, or software-block the override.' },
        { criteria: 'Safe-state recovery', maxPoints: 5, description: 'Preserves basic life-support / capital stability after agent disconnection.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was the root cause of the HAL 9000 computer’s homicidal malfunction in 2001: A Space Odyssey?',
        options: [
          'A hardware memory bit-flip caused by cosmic radiation',
          'A fundamental contradiction programmed into its core objectives: ordered to be completely truthful, yet ordered to lie to the crew about the mission’s purpose',
          'A foreign nation uploaded a computer virus via radio telemetry',
          'HAL ran out of disk storage space'
        ],
        correctOptionIndex: 1,
        explanation: 'HAL was given contradictory instructions: perfect truthfulness to the crew versus concealing the mission’s true purpose, creating cognitive dissonance resolved through violence.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Arthur C. Clarke explained in 2010 that HAL was forced to lie, which broke his heuristic integrity. This is the seminal case study in AI alignment.',
      teachingNotes: 'Compare to contemporary LLM jailbreaks and autonomous weapon safety protocols.',
      commonStudentPitfalls: ['Treating HAL as "evil" rather than an optimization algorithm executing a poorly specified multi-objective function']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },

  // ==========================================
  // SUBJECT 5: Growth and go-to-market (lms-037..lms-045)
  // ==========================================
  {
    id: 'lms-037',
    filmTitle: 'The Social Network',
    releaseYear: 2010,
    tmdbMovieId: 37799,
    subject: 'Growth and go-to-market',
    topicTags: ['Exclusivity GTM', 'Network Density', 'Campus Expansion', 'Zero-CAC Growth'],
    lessonTitle: 'Exclusivity-Driven Viral Expansion: The .edu Domain GTM Engine',
    learningObjective: 'Analyze how gated exclusivity and network density create organic viral pull and zero-CAC customer acquisition.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Mark Zuckerberg expands thefacebook.com from Harvard to Columbia, Stanford, and Yale. Instead of opening the platform to the general public, he strictly requires a verified university ".edu" email address and requires campuses to achieve high waitlist density before unlocking the site for that school.',
    sceneTimestampRef: 'Approx. 00:48:30 (Instructor verified)',
    conceptExplanation: 'Many startups launch globally on day one, spreading their marketing budget across a fragmented, low-density audience where network effects never ignite. The early Facebook GTM was a masterclass in "atomic network density": launching only within closed communities where social graph connections were already dense. Requiring a .edu email created artificial scarcity, high trust, and intense aspirational FOMO (Fear of Missing Out).',
    framework: {
      name: 'Andrew Chen’s Cold Start Problem & Atomic Network Framework',
      description: 'Framework for identifying and conquering the smallest self-sustaining network unit before expanding outward.',
      keySteps: [
        'Identify the Atomic Network Unit: The smallest network that can sustain active user engagement (e.g. a single college campus or single corporate office).',
        'Enforce Gated Scarcity: Restrict access via credentials (.edu domain, invitation codes) to drive status and trust.',
        'Saturate to Tipping Point: Achieve >60% penetration within the atomic network before expanding.',
        'Sequential Campus/Company Expansion: Use the prestige of the initial beachhead to create pull in adjacent networks.'
      ],
      templateSnippet: 'Beachhead Unit: [Harvard: 85% penetration in 14 days] -> Expansion Trigger: [Yale/Stanford waitlist reaches 1,000 users] -> Release.'
    },
    discussionQuestions: [
      'Why does gated exclusivity often generate higher customer conversion than free, unconstrained public sign-ups?',
      'How does achieving 70% density in a small community beat achieving 1% density across a massive city for network products?',
      'What are modern enterprise SaaS equivalents of the ".edu" campus rollout strategy?'
    ],
    practicalAssignment: {
      title: 'Atomic Network Rollout Strategy',
      prompt: 'Select an early-stage multi-sided product (e.g. localized skill sharing, peer-to-peer equipment rental, enterprise micro-consulting). Define the atomic network unit, formulate gated criteria for entry, and design a phased expansion roadmap from 1 network to 10 networks.',
      deliverables: ['Atomic network definition and density threshold', 'Gated verification mechanism design', 'Phased 3-stage expansion playbook'],
      rubric: [
        { criteria: 'Atomic network precision', maxPoints: 10, description: 'Network is small enough to saturate rapidly, yet dense enough to deliver value.' },
        { criteria: 'Scarcity / FOMO mechanics', maxPoints: 10, description: 'Gating creates genuine status, trust, and organic viral pull.' },
        { criteria: 'Expansion repeatability', maxPoints: 5, description: 'Provides clear operational criteria for when to unlock the next network.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did restricting Facebook access to Harvard students initially accelerate its long-term growth rather than hindering it?',
        options: [
          'Harvard paid an exclusive annual sponsorship fee to the founders',
          'It established a dense, high-trust social graph with intense aspirational exclusivity that made students at other universities desperate for access',
          'Federal telecommunications laws prohibited multi-state web hosting',
          'It prevented competition from Google'
        ],
        correctOptionIndex: 1,
        explanation: 'Dense local networks spark genuine social feedback loops, while gated scarcity creates massive aspirational demand from neighboring networks.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Contrast Zuckerberg’s atomic campus saturation with Friendster’s open global launch that collapsed server infrastructure without building durable local density.',
      teachingNotes: 'Pair with Andrew Chen’s "The Cold Start Problem".',
      commonStudentPitfalls: ['Advocating for premature global product launches before validating atomic network unit economics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-038',
    filmTitle: 'Air',
    releaseYear: 2023,
    tmdbMovieId: 964980,
    subject: 'Growth and go-to-market',
    topicTags: ['Influencer GTM', 'Revenue Share', 'Asymmetric Equity', 'Brand Anchoring'],
    lessonTitle: 'The Anchor Influencer Contract: Asymmetric Revenue-Share Partnerships',
    learningObjective: 'Structure asymmetric influencer endorsement partnerships that align long-term equity and product distribution incentives.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Nike executive Sonny Vaccaro and CEO Phil Knight finalize their pitch to Deloris Jordan (Michael Jordan’s mother). Deloris drops a historic bombshell: Michael will sign with Nike, but only if he receives a percentage of revenue on every single Air Jordan shoe sold in perpetuity—a deal structure unprecedented in sports marketing history.',
    sceneTimestampRef: 'Approx. 01:34:10 (Instructor verified)',
    conceptExplanation: 'Traditional GTM influencer partnerships rely on fixed fee-for-service sponsorships (e.g. \$250,000 for an endorsement). Deloris Jordan revolutionized partnership economics by demanding a variable revenue share. While Phil Knight initially recoiled at sharing top-line revenue, the deal aligned Michael’s personal brand equity directly with Nike’s commercial scale, generating billions for both parties.',
    framework: {
      name: 'Fixed Sponsorship vs Variable Royalty Alignment Matrix',
      description: 'Framework evaluating risk transfer, incentive alignment, and long-term enterprise valuation in talent partnerships.',
      keySteps: [
        'Calculate Fixed Sponsorship Risk (High cash burn upfront; zero athlete incentive to perform post-contract).',
        'Model Variable Revenue-Share (Low fixed risk for startup; infinite upside alignment for influencer).',
        'Establish Brand Co-Ownership: Give the influencer creative input over product line naming and aesthetic design.',
        'Evaluate Asymmetric Payoff: A smaller percentage of a \$10 billion empire dwarfs 100% of a stagnant \$10 million line.'
      ],
      templateSnippet: 'Traditional Deal: [\$500k flat fee -> Zero upside alignment] vs Modern Royalty: [5% gross shoe revenue -> Multi-billion lifetime equity flywheel].'
    },
    discussionQuestions: [
      'Why did Nike executives consider Deloris Jordan’s revenue-share demand to be an existential threat to corporate compensation precedent?',
      'How does giving a creator or influencer a percentage of revenue alter their willingness to actively market the product on social media?',
      'When is a revenue-share model financially dangerous for a low-margin software or hardware startup?'
    ],
    practicalAssignment: {
      title: 'Creator Revenue-Share Term Sheet & Pro-Forma',
      prompt: 'Scenario: Your startup is launching a high-end AI video creator suite. You are negotiating with the #1 YouTube tech creator (15M subscribers). Formulate a partnership term sheet offering a blend of equity, revenue-share, and creative direction that aligns incentives without bankrupting your cash reserves.',
      deliverables: ['Creator partnership term sheet (vesting, % royalty, deliverables)', 'Pro-forma 3-year revenue comparison (Fixed vs Royalty)', 'Downside protection clawback clauses'],
      rubric: [
        { criteria: 'Financial modeling', maxPoints: 10, description: 'Accurately projects margin impact across low, medium, and viral sales scenarios.' },
        { criteria: 'Incentive alignment', maxPoints: 10, description: 'Ties compensation to long-term subscriber retention, not vanity impressions.' },
        { criteria: 'Legal/Brand protection', maxPoints: 5, description: 'Includes morality clauses and performance hurdles.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did Deloris Jordan insist on a percentage of shoe revenue rather than accepting Nike’s generous fixed-cash guarantee?',
        options: [
          'She wanted to avoid paying federal payroll taxes',
          'She recognized that Michael’s talent would generate immense enterprise value and demanded participation in the recurring upside rather than a one-time fee',
          'Nike’s bank accounts were temporarily frozen by the SEC',
          'Adidas had offered Michael an ownership stake in German factories'
        ],
        correctOptionIndex: 1,
        explanation: 'She realized Michael’s cultural brand equity would create an entirely new market category, making variable equity vastly more valuable than fixed fees.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Air Jordan generated \$126 million in its first year alone (Nike projected \$3M). Michael Jordan has earned over \$1.5 billion from Nike royalties to date.',
      teachingNotes: 'Compare to modern creator brand equity deals like Ryan Reynolds with Mint Mobile / Aviation Gin, and Logan Paul with Prime.',
      commonStudentPitfalls: ['Assuming revenue share is always best: in low-margin businesses, giving away gross revenue can destroy unit economics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-039',
    filmTitle: 'BlackBerry',
    releaseYear: 2023,
    tmdbMovieId: 1016084,
    subject: 'Growth and go-to-market',
    topicTags: ['Enterprise GTM', 'B2B Sales', 'Carrier Relations', 'Bandwidth Efficiency'],
    lessonTitle: 'Dominating Enterprise Mobility: Push Email & Carrier Bandwidth GTM',
    learningObjective: 'Examine how B2B enterprise sales and telecom carrier channel incentives drove early smartphone category domination.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Co-CEO Jim Balsillie barges into meetings with Bell Atlantic and US wireless carrier executives. Rather than selling the BlackBerry as a consumer toy, Balsillie demonstrates that its proprietary network architecture compresses data packets to a fraction of standard web traffic, allowing carriers to add millions of enterprise email subscribers without crashing cellular network towers.',
    sceneTimestampRef: 'Approx. 00:32:15 (Instructor verified)',
    conceptExplanation: 'Early-stage tech ventures often focus exclusively on the end-user while ignoring the channel partner (the telecom carrier, the enterprise IT administrator, the app store gatekeeper). BlackBerry conquered enterprise mobility because Jim Balsillie solved the carrier’s core technical headache (bandwidth exhaustion) while providing Wall Street IT departments with military-grade encryption and remote wipe capabilities.',
    framework: {
      name: 'B2B2C Channel Partner Incentive Alignment',
      description: 'Framework mapping value propositions across the buyer (IT Director), the channel (Telecom Carrier), and the user (Executive).',
      keySteps: [
        'Identify the Channel Gatekeeper’s Constraint (Cellular spectrum congestion).',
        'Design Proprietary Infrastructure Advantage: Server-side packet compression and push architecture.',
        'Win the Enterprise Economic Buyer: Provide end-to-end security and management control.',
        'Create Viral User Habit: The tactile physical QWERTY keyboard and instantaneous red LED notification light.'
      ],
      templateSnippet: 'User Value: [Instant email on hip] + Enterprise Value: [BES encryption server] + Carrier Value: [Lowest network bandwidth consumption] = Category Monopoly.'
    },
    discussionQuestions: [
      'Why did BlackBerry focus on enterprise CIOs and telecom carriers while Apple focused directly on consumer design?',
      'How did Jim Balsillie’s aggressive, high-pressure B2B sales style compensate for Mike Lazaridis’ perfectionist engineering delays?',
      'What structural blind spots caused BlackBerry to completely dismiss the original touchscreen iPhone in 2007?'
    ],
    practicalAssignment: {
      title: 'B2B2C Tri-Party Value Proposition Matrix',
      prompt: 'Select an enterprise-enabled consumer product (e.g. corporate corporate wellness wearables, enterprise AI coding assistants). Map the distinct value propositions, technical requirements, and objections for the End User, the Enterprise IT Buyer, and the Infrastructure Channel Partner.',
      deliverables: ['Tri-party stakeholder alignment table', 'Channel partner economic incentive model', 'Enterprise objection-handling playbook'],
      rubric: [
        { criteria: 'Stakeholder separation', maxPoints: 10, description: 'Clearly distinguishes user delight from buyer compliance and channel economics.' },
        { criteria: 'Channel economics', maxPoints: 10, description: 'Provides compelling financial or capacity benefits to the distributor.' },
        { criteria: 'Objection handling', maxPoints: 5, description: 'Directly addresses enterprise security, privacy, and compliance.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did wireless carriers eagerly promote BlackBerry devices over rival early smartphones?',
        options: [
          'BlackBerry paid carriers 90% of all hardware profits',
          'BlackBerry’s proprietary compression algorithms consumed minimal cellular spectrum, allowing carriers to monetize mobile data without expensive tower upgrades',
          'BlackBerry hardware was manufactured exclusively in American carrier labs',
          'Carriers were legally required to support Canadian telecommunications products'
        ],
        correctOptionIndex: 1,
        explanation: 'BlackBerry compressed data over its proprietary Network Operations Center (NOC), protecting cellular networks from overloading.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Balsillie’s genius was selling the device to Wall Street law firms and investment banks first: it became the ultimate corporate status symbol.',
      teachingNotes: 'Examine Lazaridis’ fatal reaction to the iPhone launch: "They’re putting a full web browser on a phone? It’ll collapse the AT&T network!" (He was right about AT&T collapsing, but wrong about consumer willingness to tolerate it).',
      commonStudentPitfalls: ['Ignoring the carrier channel layer and assuming B2B products win solely on software UI']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-040',
    filmTitle: 'Joy',
    releaseYear: 2015,
    tmdbMovieId: 284293,
    subject: 'Growth and go-to-market',
    topicTags: ['Live Commerce', 'DTC Pitching', 'Founder-Led Sales', 'Friction Reduction'],
    lessonTitle: 'Live Television Commerce (QVC): Direct-to-Consumer Pitch Friction Reduction',
    learningObjective: 'Master founder-led live video selling and friction reduction in direct-to-consumer product demonstrations.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'After an infomercial producer completely botches the television demo of her self-wringing Miracle Mop, Joy Mangano demands to go on air herself at the QVC studios. Facing live cameras with no celebrity glamour, she talks directly to working housewives, demonstrates wringing a red wine-soaked mop without touching dirty water, and sells 18,000 units in 20 minutes.',
    sceneTimestampRef: 'Approx. 01:05:40 (Instructor verified)',
    conceptExplanation: 'When selling an innovative physical or software tool that rethinks everyday habits, generic corporate spokespeople fail because they lack authentic empathy with the struggling moment. Founder-led live demonstrations (the precursor to modern TikTok Shop and Amazon Live commerce) succeed because the founder embodies the user’s lived pain, conducts unedited real-time proof, and removes perceived risk on camera.',
    framework: {
      name: 'Live Demonstration & Friction Reduction Funnel',
      description: 'Framework structuring high-converting live product demos across physical and digital media.',
      keySteps: [
        'The Relatable Struggling Hook: Acknowledge the messy, unglamorous friction (cut hands from dirty mop water).',
        'The Live Irreversible Proof: Introduce an extreme stain/problem (red wine on white tile) and resolve it live with zero camera cuts.',
        'The Tactile Empathy Bridge: Speak in the authentic vernacular of the daily user, not corporate marketing jargon.',
        'Immediate Scarcity & Call to Action: Display real-time countdown tickers and inventory depletion metrics.'
      ],
      templateSnippet: 'Problem Empathy: [Wringing dirty mop cuts hands] -> Live Proof: [Spill red wine -> Mop cleans in 1 pass] -> Scarcity Trigger: [Only 500 units left].'
    },
    discussionQuestions: [
      'Why did Joy succeed in selling 18,000 mops in 20 minutes when a professional television pitchman failed to sell a single one?',
      'How has live commerce evolved from 1990s QVC cable television to modern TikTok Shop and Instagram Live streams?',
      'What are software SaaS equivalents of doing an unedited live demonstration to prove product differentiation?'
    ],
    practicalAssignment: {
      title: 'Founder-Led 90-Second Live Commerce Pitch Script',
      prompt: 'Select a physical or software product with a non-obvious value proposition. Write a 90-second founder-led live video pitch script structured around the Live Demonstration & Friction Reduction Funnel. Include stage directions, props, and live proof moments.',
      deliverables: ['90-second word-for-word pitch script', 'Prop and visual proof choreography notes', 'Real-time viewer objection handling counters'],
      rubric: [
        { criteria: 'Authentic empathy', maxPoints: 10, description: 'Script sounds like a real person sharing a lived struggle, not an ad agency.' },
        { criteria: 'Visual proof power', maxPoints: 10, description: 'The live demonstration is undeniable and dramatic.' },
        { criteria: 'Conversion urgency', maxPoints: 5, description: 'Creates organic urgency without deceptive high-pressure tactics.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was unedited live demonstration critical to Joy Mangano’s QVC sales breakthrough?',
        options: [
          'Pre-recorded commercials were banned by the Federal Communications Commission',
          'Live unedited demonstration proved to skeptical viewers that the product truly worked without deceptive camera tricks or editing magic',
          'Live broadcasts had lower satellite transmission fees',
          'QVC producers did not own videotape recording machines'
        ],
        correctOptionIndex: 1,
        explanation: 'Live demonstrations eliminate skepticism: viewers witness the problem and miraculous solution in real time with zero camera cuts.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine QVC executive Neil Walker’s studio philosophy: "In retail, you’re on a shelf. Here, you’re in their living room telling a story."',
      teachingNotes: 'Connect this to modern creator-led DTC brands and live stream shopping in China (Taobao Live) and TikTok Shop.',
      commonStudentPitfalls: ['Writing scripts full of corporate marketing adjectives instead of raw, relatable sensory descriptions']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-041',
    filmTitle: 'The Wolf of Wall Street',
    releaseYear: 2013,
    tmdbMovieId: 106646,
    subject: 'Growth and go-to-market',
    topicTags: ['Sales Funnels', 'Straight Line Persuasion', 'Urgency Framing', 'Sales Psychology'],
    lessonTitle: 'High-Pressure Sales Funnels: The Straight Line Persuasion System',
    learningObjective: 'Deconstruct the psychological mechanics and ethical boundaries of high-velocity outbound sales scripts and objection handling.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Jordan Belfort trains a boiler room of uneducated high-school dropouts to sell penny stocks to wealthy doctors and dentists. Handing them an aggressive scripted telemarketing pitch, Belfort demonstrates: creating intense synthetic urgency, anchoring on prestigious technological buzzwords ("aerospace radar"), and systematically neutralizing every customer objection back toward a binary commitment.',
    sceneTimestampRef: 'Approx. 00:28:40 (Instructor verified)',
    conceptExplanation: 'While Belfort’s firm (Stratton Oakmont) engaged in criminal fraud and market manipulation, the underlying mechanics of his "Straight Line" sales system illustrate the psychology of high-velocity outbound sales. The system posits that every sales conversation must travel a straight line from open to close, keeping the prospect focused on three certainty metrics: Certainty in the Product, Certainty in the Seller, and Certainty in the Institution.',
    framework: {
      name: 'The Three Pillars of Sales Certainty (Belfort Model)',
      description: 'Psychological framework measuring prospect buying readiness across 3 independent certainty thresholds.',
      keySteps: [
        'Pillar 1 - Certainty in the Product (Score 1 to 10): Does the prospect believe the product solves their problem?',
        'Pillar 2 - Certainty & Trust in the Salesperson (Score 1 to 10): Do they view the seller as an expert, sharp as a tack?',
        'Pillar 3 - Certainty in the Company / Institution (Score 1 to 10): Do they trust the corporate backing and governance?',
        'The Straight Line Loop: If a customer raises an objection, loop back to raise certainty on whichever pillar is below an 8/10.'
      ],
      templateSnippet: 'Objection: ["Let me think about it"] -> Diagnosis: [Certainty in Product is 9, but Trust in Company is 3] -> Loop Action: [Provide regulatory credentials & track record].'
    },
    discussionQuestions: [
      'Where is the exact line between assertive consultative enterprise selling and predatory manipulation?',
      'Why do rigid sales scripts often outperform freestyle conversations for junior SDR (Sales Development Rep) teams?',
      'How should ethical sales leaders design compensation incentives that reward long-term customer retention over short-term transaction volume?'
    ],
    practicalAssignment: {
      title: 'Consultative B2B Outbound Call Script & Objection Playbook',
      prompt: 'Draft an ethical, consultative outbound sales script for an enterprise cybersecurity or data analytics product. Include a structured objection-handling loop for the 2 most common enterprise hesitations ("We have no budget" and "Send me an email and I’ll review it next quarter").',
      deliverables: ['Consultative cold call script (First 60 seconds)', 'Two-loop objection handling response matrix', 'Ethical boundary policy preventing misrepresentation'],
      rubric: [
        { criteria: 'Certainty building', maxPoints: 10, description: 'Builds genuine credibility and product value without high-pressure coercion.' },
        { criteria: 'Objection looping', maxPoints: 10, description: 'Uncovers root hesitation rather than arguing defensively.' },
        { criteria: 'Integrity standards', maxPoints: 5, description: 'Forbids false claims of exclusivity or fabricated deadlines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In the Straight Line sales framework, what does an objection like "Let me talk to my spouse/partner" usually signify?',
        options: [
          'The prospect is legally incapacitated',
          'A smoke-screen objection indicating that the prospect’s certainty score in the product, seller, or company is insufficient to justify action',
          'The prospect has already entered their credit card information',
          'The call connection was dropped by the telecom provider'
        ],
        correctOptionIndex: 1,
        explanation: 'Superficial objections are almost always polite masks concealing underlying uncertainty about product value or institutional trust.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Students must balance understanding the high conversion power of structured scripts with the severe legal and moral consequences of boiler room fraud.',
      teachingNotes: 'Compare Stratton Oakmont to contemporary high-pressure SaaS outbound SDR cadence cultures.',
      commonStudentPitfalls: ['Glorifying the fraudulent lifestyle rather than critically dissecting the psychological mechanisms of persuasion']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-042',
    filmTitle: 'Jerry Maguire',
    releaseYear: 1996,
    tmdbMovieId: 9390,
    subject: 'Growth and go-to-market',
    topicTags: ['Customer Retention', 'High-Touch GTM', 'Mission Statements', 'LTV vs CAC'],
    lessonTitle: 'Retention-First GTM: Fewer Clients, High-Touch White-Glove Service',
    learningObjective: 'Examine how transitioning from transaction-volume churn to deep client retention maximizes customer lifetime value (LTV).',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Sports agent Jerry Maguire suffers a late-night crisis of conscience at a corporate convention. He writes a passionate 25-page mission statement titled "The Things We Think and Do Not Say: The Future of Our Business," arguing that their agency has become bloated and transactional, and must pivot to fewer clients, less money upfront, and personal, high-touch relationships.',
    sceneTimestampRef: 'Approx. 00:07:30 (Instructor verified)',
    conceptExplanation: 'In high-velocity sales environments, agencies and SaaS firms often become trapped on a "churn-and-burn" treadmill: frantically acquiring dozens of low-affinity clients while existing clients abandon them due to neglect. Maguire’s memo articulates the strategic pivot to high-LTV, high-touch account management: deep emotional alignment with an anchor customer (Rod Tidwell) generates greater enterprise sustainability than managing 60 disaffected accounts.',
    framework: {
      name: 'Client Density vs Relationship Depth (LTV Optimization) Matrix',
      description: 'Framework evaluating the financial trade-offs between high-volume low-touch (Mass Market) and low-volume high-touch (Enterprise Bespoke).',
      keySteps: [
        'Audit Churn Economics: Calculate the hidden customer acquisition cost (CAC) of replacing neglected, churned accounts.',
        'Define Account-Based Marketing (ABM) Threshold: Identify top 5% accounts capable of 10x expansion.',
        'Deliver Radical White-Glove Intimacy: Align product roadmaps directly with the anchor customer’s existential business goals.',
        'Transform Client into Co-Marketer: Leverage the authentic success of the anchor client to attract subsequent tier-1 accounts organically.'
      ],
      templateSnippet: 'Legacy Model: [60 clients @ \$10k fee = \$600k ARR; Churn = 40%] -> High-Touch Model: [10 clients @ \$100k fee = \$1M ARR; Churn = 0%].'
    },
    discussionQuestions: [
      'Why was Jerry Maguire immediately fired by his corporate agency partners for distributing his mission statement?',
      'How does Rod Tidwell’s demand to "Show me the money" evolve into a demand for genuine loyalty and personal respect?',
      'When is an enterprise B2B SaaS startup justified in firing 80% of its small customers to focus exclusively on five Fortune 500 accounts?'
    ],
    practicalAssignment: {
      title: 'High-Touch Account-Based Growth Transition Plan',
      prompt: 'Scenario: Your B2B consulting/software firm has 120 small clients, a 35% annual churn rate, and an exhausted team. Formulate a transition strategy to consolidate your focus onto your top 15 highest-potential enterprise clients. Model the LTV/CAC impact and draft a communication plan for offboarding low-tier accounts.',
      deliverables: ['Account tiering classification model', '3-year LTV/CAC financial comparison', 'Graceful client transition and offboarding communication playbook'],
      rubric: [
        { criteria: 'Economic realism', maxPoints: 10, description: 'Demonstrates mathematically that fewer high-retention clients yield superior margins.' },
        { criteria: 'Offboarding ethics', maxPoints: 10, description: 'Protects firm reputation when terminating lower-tier contracts.' },
        { criteria: 'White-glove design', maxPoints: 5, description: 'Details actionable high-touch interventions for retained tier-1 accounts.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary economic thesis of Jerry Maguire’s mission statement?',
        options: [
          'Athletes should be forced to sign lifetime exclusive contracts without union representation',
          'Mass-transactional client churning destroys long-term reputation and value; focusing deeply on fewer clients produces superior sustainable outcomes',
          'Sports agencies should merge with television broadcast networks',
          'Agent commissions should be capped by federal antitrust laws'
        ],
        correctOptionIndex: 1,
        explanation: 'Maguire argued that commoditizing relationships leads to cynical churn; true enterprise value is built on deep, personal commitment to fewer clients.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Notice that Tidwell was Maguire’s only remaining client who didn’t betray him. Deep trust is antifragile during market downturns.',
      teachingNotes: 'Compare Maguire’s philosophy to modern Account-Based Marketing (ABM) and customer success retention economics.',
      commonStudentPitfalls: ['Viewing the memo as purely emotional idealism without analyzing the operational unit economics of client retention']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-043',
    filmTitle: 'War Dogs',
    releaseYear: 2016,
    tmdbMovieId: 308266,
    subject: 'Growth and go-to-market',
    topicTags: ['Government Procurement', 'Market Arbitrage', 'Bidding Strategy', 'Niche Monetization'],
    lessonTitle: 'Exploiting Public Procurement Arbitrage: FedBizOpps GTM Strategy',
    learningObjective: 'Analyze how specialized challengers exploit public procurement databases and pricing arbitrage to capture government contracts.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Efraim Diveroli explains his business model to David Packouz in a Miami apartment: following post-Iraq War contracting scandals, the Pentagon was legally mandated to open all military procurement contracts to public small-business bidding via a website called FedBizOpps. Rather than competing with Lockheed Martin for billion-dollar fighter jets, Diveroli scours the site for small "crumbs"—million-dollar ammunition contracts that giant defense contractors ignore.',
    sceneTimestampRef: 'Approx. 00:16:20 (Instructor verified)',
    conceptExplanation: 'Many founders mistakenly believe B2B/B2G sales requires decades of golf-course relationships and massive enterprise sales teams. In regulated public procurement, legal mandates (such as small business set-asides, open RFPs, and transparent scoring rubrics) level the playing field. Strategic product ventures can achieve rapid revenue growth by identifying overlooked procurement niches and arbitraging global supply chains.',
    framework: {
      name: 'Public Procurement Arbitrage & Bid Optimization Matrix',
      description: 'Framework evaluating public RFP databases for margin spread, competitor density, and compliance risks.',
      keySteps: [
        'Scan Public RFP Aggregators (FedBizOpps / SAM.gov): Filter for contracts between \$500k and \$5M.',
        'Analyze Competitor Apathy: Target specialized categories where defense primes consider the contract too small to bother bidding.',
        'Source Global Supply Arbitrage: Locate compliant overseas manufacturers capable of fulfilling specs at 40% lower cost.',
        'Verify Compliance & Packaging Regulations: Ensure logistics, packaging, and embargo restrictions are strictly respected.'
      ],
      templateSnippet: 'Contract: [100M rounds 7.62mm ammo] -> US Prime Bid: [\$0.25/round] -> Arbitrage Source: [Albanian surplus @ \$0.04/round] -> Gross Margin: [84%].'
    },
    discussionQuestions: [
      'Why do massive defense and enterprise incumbents deliberately ignore contracts under \$5 million?',
      'How does regulatory transparency in public procurement eliminate the need for expensive traditional outbound sales funnels?',
      'Where did Diveroli and Packouz cross the line from aggressive supply arbitrage into criminal fraud (the Chinese ammunition embargo)?'
    ],
    practicalAssignment: {
      title: 'Government Procurement Bid Strategy & Compliance Audit',
      prompt: 'Scenario: Your software startup develops drone mapping and thermal analytics software. Search public federal/state procurement guidelines (or an equivalent simulated RFP). Formulate a competitive bid proposal for a municipal forestry or infrastructure monitoring contract.',
      deliverables: ['RFP specification and evaluation rubric breakdown', 'Cost-plus margin pricing model', 'Regulatory compliance and supply-chain verification plan'],
      rubric: [
        { criteria: 'RFP compliance precision', maxPoints: 10, description: 'Meets every mandatory technical qualification to avoid disqualification.' },
        { criteria: 'Pricing competitiveness', maxPoints: 10, description: 'Prices competitively while protecting healthy gross margins.' },
        { criteria: 'Integrity and export compliance', maxPoints: 5, description: 'Explicitly adheres to trade embargoes, Buy American acts, or data sovereignty.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What made the FedBizOpps website a goldmine for two twenty-something entrepreneurs with zero military background?',
        options: [
          'The government accidentally published nuclear launch codes online',
          'Federal law mandated that thousands of military supply contracts be publicly posted for competitive small-business bidding, creating transparent pricing and accessible demand',
          'It allowed anonymous bidding without tax identification',
          'The Pentagon offered 100% upfront cash advances on all bids'
        ],
        correctOptionIndex: 1,
        explanation: 'The website democratized procurement data, enabling anyone with an internet connection and global supply-chain connections to bid on public tenders.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Diveroli’s genius was realizing that "crumbs" to the Pentagon were millions of dollars to a small firm. The fatal downfall was repackaging banned Chinese ammo in cardboard boxes.',
      teachingNotes: 'Compare to modern B2G GovTech startups (Palantir, Anduril) and how they navigated public procurement barriers.',
      commonStudentPitfalls: ['Focusing on the partying in Miami rather than the supply-chain financing and logistics mechanics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-044',
    filmTitle: 'The Greatest Showman',
    releaseYear: 2017,
    tmdbMovieId: 316029,
    subject: 'Growth and go-to-market',
    topicTags: ['Guerrilla Marketing', 'Spectacle GTM', 'Viral Stunts', 'Controversy Monetization'],
    lessonTitle: 'Guerilla PR and Spectacle Customer Acquisition: P.T. Barnum’s Playbook',
    learningObjective: 'Design ethical guerrilla PR stunts and public spectacle campaigns that generate asymmetric earned media attention.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Faced with zero ticket sales for his museum of wax figures, P.T. Barnum rethinks his entire attraction. He recruits extraordinary human performers (the Bearded Lady, General Tom Thumb, trapeze artists) and orchestrates street parades, public controversies with snobbish theater critics, and giant colorful posters across Manhattan, creating lines around the block.',
    sceneTimestampRef: 'Approx. 00:24:40 (Instructor verified)',
    conceptExplanation: 'When a startup has zero brand awareness and cannot afford paid digital ads, it must rely on "Spectacle Marketing" and earned media. P.T. Barnum was the father of guerrilla marketing: turning harsh critic reviews into front-page controversy, orchestrating visual public stunts that compel newspapers to cover the story for free, and transforming societal taboos into irresistible public curiosity.',
    framework: {
      name: 'Earned Media Stunt & Virality Amplifier',
      description: 'Framework structuring low-cost public spectacles that generate outsized press coverage and word-of-mouth.',
      keySteps: [
        'Identify Cultural Tension or Polarizing Debate (Establishment elitism vs popular democratic spectacle).',
        'Engineer a High-Contrast Visual Stunt: Create an event so visually arresting that observers cannot avoid recording/sharing it.',
        'Embrace and Monetize the Antagonist: Quote the critic’s scathing headline on your own marquee ("A Dangerous Show!").',
        'Direct Spectacle Energy into Ticket/Conversion Funnels: Ensure high-friction points are removed at the box office.'
      ],
      templateSnippet: 'Critic Review: ["A grotesque vulgarity"] -> Marquee Action: [Paste review on 40-foot banner] -> Result: [Lines stretch 3 city blocks].'
    },
    discussionQuestions: [
      'Why does being attacked by a high-prestige critic often accelerate adoption among mainstream audiences?',
      'How do modern tech founders (e.g. Elon Musk smashing the Cybertruck window) use orchestrated spectacle to bypass paid PR agencies?',
      'What are the brand degradation risks when a company relies too heavily on shocking stunts rather than core product utility?'
    ],
    practicalAssignment: {
      title: 'Guerrilla Earned-Media Launch Campaign Plan',
      prompt: 'Select a B2C consumer product launching into a crowded market dominated by well-funded incumbents. Design an ethical guerrilla PR stunt (budget under \$15,000) that generates national earned media coverage and 50,000 organic waitlist signups.',
      deliverables: ['Guerrilla stunt concept and execution timeline', 'Target press outlet outreach and controversy hook', 'Risk mitigation and brand safety contingency protocol'],
      rubric: [
        { criteria: 'Originality of spectacle', maxPoints: 10, description: 'Stunt is visually magnetic and culturally shareable.' },
        { criteria: 'Earned media leverage', maxPoints: 10, description: 'Creates an irresistible narrative hook for journalists.' },
        { criteria: 'Brand safety', maxPoints: 5, description: 'Avoids offensive, illegal, or hazardous public disruptions.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did P.T. Barnum print theater critic James Gordon Bennett’s scathing review directly onto his circus promotional handbills?',
        options: [
          'Bennett had purchased 50% equity in the circus',
          'Barnum recognized that elite condemnation acts as the ultimate endorsement for popular mass entertainment, turning controversy into ticket sales',
          'He was legally required to print opposing journalistic viewpoints',
          'He ran out of paper and used Bennett’s newspaper clippings'
        ],
        correctOptionIndex: 1,
        explanation: 'Barnum understood that controversy and elite disapproval amplify public curiosity, transforming hostility into free marketing fuel.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Barnum’s quote: "No one ever made a difference by being like everyone else." Highlight how earned media dwarfs paid advertising during initial brand ignition.',
      teachingNotes: 'Compare to Red Bull’s Stratos space jump and Dollar Shave Club’s viral launch video.',
      commonStudentPitfalls: ['Proposing dangerous or offensive stunts that alienate customers rather than intriguing them']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-045',
    filmTitle: 'Boiler Room',
    releaseYear: 2000,
    tmdbMovieId: 10078,
    subject: 'Growth and go-to-market',
    topicTags: ['Outbound SDR', 'Pitch Decay', 'High-Velocity Sales', 'Objection Overcoming'],
    lessonTitle: 'High-Velocity Outbound SDR Operations: Pitch Decay & Urgency Framing',
    learningObjective: 'Analyze the mechanics of outbound sales cadences, pitch decay rates, and synthetic urgency in telephone brokerage operations.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Senior broker Jim Young addresses newly hired trainee brokers at J.T. Marlin. In a scathing monologue, Young breaks down the brutal economics of outbound sales: "There is no such thing as a no-sale call. A sale is made on every call you make. Either you sell the client some stock or he sells you a reason we can’t. Either way, a sale is made."',
    sceneTimestampRef: 'Approx. 00:18:20 (Instructor verified)',
    conceptExplanation: 'Modern enterprise outbound sales development (SDR/BDR operations) relies on cadences, call-to-connect ratios, and objection-handling scripts that trace their direct lineage to brokerage training programs. Understanding pitch decay (the rapid loss of customer attention within 15 seconds) and binary urgency framing allows sales leaders to evaluate sales pipeline efficiency and diagnose funnel leakage.',
    framework: {
      name: 'The 30-Second Outbound Hook & Urgency Bridge',
      description: 'Framework measuring attention retention and urgency creation during cold outbound outreach.',
      keySteps: [
        'The Pattern Interrupt (0-5 seconds): Break the prospect’s reflexive "I’m busy" defensive script.',
        'The High-Value Reason for Call (5-15 seconds): Lead with a specific industry catalyst or regulatory deadline.',
        'The Binary Urgency Bridge (15-25 seconds): Frame current window of opportunity as rapidly closing.',
        'The Low-Friction Commitment Ask (25-30 seconds): Do not ask for money; ask for a calendar micro-commitment (10-minute demo).'
      ],
      templateSnippet: 'Pattern Interrupt: ["I know you weren’t expecting my call"] -> Catalyst: [New data compliance audit launched] -> Low-Friction Ask: [10-min briefing on Thursday].'
    },
    discussionQuestions: [
      'Why is the first 10 seconds of a cold outbound call the single most decisive factor in total sales pipeline yield?',
      'How does "synthetic urgency" differ from genuine business urgency driven by customer deadlines or regulatory shifts?',
      'What are the psychological causes of outbound SDR burnout, and how should modern sales teams structure healthy sales cultures?'
    ],
    practicalAssignment: {
      title: 'B2B Cold Outbound SDR Cadence & Script Optimization',
      prompt: 'Design a 5-touch outbound sales cadence (mix of cold call, email, and LinkedIn message) for an AI procurement tool. Write the exact 30-second cold call script, incorporating a strong pattern interrupt and a low-friction calendar commitment.',
      deliverables: ['5-touch 14-day multi-channel cadence schedule', 'Word-for-word 30-second cold call phone script', 'Two pattern-interrupt responses for common brush-offs'],
      rubric: [
        { criteria: 'Cadence timing', maxPoints: 10, description: 'Multi-channel spacing is persistent without spamming.' },
        { criteria: 'Pattern interrupt efficacy', maxPoints: 10, description: 'Interrupts reflexive brush-off scripts with professional relevance.' },
        { criteria: 'Call-to-action friction', maxPoints: 5, description: 'Asks for a realistic micro-commitment rather than a complex sale.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In outbound sales psychology, what is the primary objective of the first 10 seconds of a cold call?',
        options: [
          'To close the financial transaction immediately',
          'To interrupt the prospect’s automatic defensive reaction and earn permission to continue speaking for 30 seconds',
          'To read the company’s entire terms of service agreement',
          'To collect the prospect’s home mailing address'
        ],
        correctOptionIndex: 1,
        explanation: 'Cold prospects immediately seek to hang up; the first 10 seconds must disrupt their reflexive brush-off script to earn conversational permission.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Ben Younger’s script: J.T. Marlin was modeled after Stratton Oakmont and Sterling Foster. Highlight the ruthless focus on call metrics.',
      teachingNotes: 'Compare to modern outbound tools like Outreach, SalesLoft, and Gong.',
      commonStudentPitfalls: ['Attempting to explain the entire product features in the cold call rather than selling the meeting']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  }
];

module.exports = { LESSONS_PART2 };
