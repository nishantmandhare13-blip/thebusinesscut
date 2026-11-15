// Part 4: Subject 9 (Operations, lms-072..079), Subject 10 (Leadership, lms-080..088), Subject 11 (Negotiation, lms-089..096), Subject 12 (Ethics, lms-097..104)
const LESSONS_PART4 = [
  // ==========================================
  // SUBJECT 9: Operations and supply chain (lms-072..lms-079)
  // ==========================================
  {
    id: 'lms-072',
    filmTitle: 'Apollo 13',
    releaseYear: 1995,
    tmdbMovieId: 568,
    subject: 'Operations and supply chain',
    topicTags: ['Constraint Engineering', 'CO2 Scrubbing', 'Root-Cause Fixing', 'Material Improvisation'],
    lessonTitle: 'CO2 Scrubbing and Square-into-Round Constraint Engineering',
    learningObjective: 'Master operational improvisation and physical constraint engineering when interface standards fail.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'With carbon dioxide rising to lethal levels in the Lunar Module, flight controllers dump a box of items available on the spacecraft onto a table: plastic bags, cardboard flight manual covers, gray duct tape, and a spacesuit hose. The engineers must invent a way to fit the Command Module’s square lithium hydroxide canisters into the Lunar Module’s round openings using only these materials.',
    sceneTimestampRef: 'Approx. 01:18:20 (Instructor verified)',
    conceptExplanation: 'In operations management, systems fail when interface standards are non-interoperable across silos. The Command Module and Lunar Module were built by two different corporate aerospace contractors (North American Aviation and Grumman), leading to incompatible square vs round canister designs. Operational engineers must practice "bricolage"—rapidly repurposing existing inventory to bridge non-standard system interfaces.',
    framework: {
      name: 'Constraint-Based Operational Bricolage & Interface Bridge',
      description: 'Framework for rapid physical and digital adapter fabrication under immutable inventory constraints.',
      keySteps: [
        'Audit On-Site Inventory: Restrict component choices exclusively to what is currently available on the spacecraft/server.',
        'Define Flow Rate / Throughput Requirement: Calculate minimum cubic feet per minute of airflow required to sustain life.',
        'Fabricate Adapter Interface: Build the physical/digital bridge (taping cardboard into a square-to-round gasket).',
        'Radio Verification Protocol: Read instructions step-by-step to the crew, validating each seal before operational activation.'
      ],
      templateSnippet: 'Incompatible Standards: [Square canister vs Round opening] -> Available Bricolage: [Duct tape + Flight manual cover + Plastic bag] -> Operational Life Support: [Restored].'
    },
    discussionQuestions: [
      'Why did NASA allow two primary spacecraft contractors to manufacture non-interchangeable CO2 canisters in the first place?',
      'How does physical simulation on the ground de-risk procedures before asking the flight crew to execute them in space?',
      'What are software engineering analogies for using "duct tape and cardboard" to bridge legacy API incompatibilities?'
    ],
    practicalAssignment: {
      title: 'Operational Adapter & System Interoperability Audit',
      prompt: 'Scenario: Your logistics fleet management system must integrate data from two rival warehouse management providers who use completely incompatible data formats (JSON vs SOAP XML) during peak Black Friday shipping. Design a zero-downtime microservice adapter.',
      deliverables: ['Interface data mapping specification', 'Bricolage adapter architecture diagram', 'Latency and throughput validation protocol'],
      rubric: [
        { criteria: 'Interoperability logic', maxPoints: 10, description: 'Bridges incompatible schemas without data loss or buffer overflows.' },
        { criteria: 'Inventory/Compute constraints', maxPoints: 10, description: 'Operates within existing memory and CPU limits.' },
        { criteria: 'Execution clarity', maxPoints: 5, description: 'Clear step-by-step instructions for on-call operations engineers.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What caused the life-threatening CO2 crisis on Apollo 13?',
        options: [
          'A fire burned all chemical air filters',
          'The Lunar Module was designed to support 2 astronauts for 45 hours, but was forced to support 3 astronauts for 90 hours, and its round filter sockets could not accept the Command Module’s square filters',
          'The crew accidentally threw the canisters out the airlock',
          'The flight manual was printed in the wrong language'
        ],
        correctOptionIndex: 1,
        explanation: 'Three crew members exhaled CO2 faster than the LM could filter, and the available spare canisters were incompatible in physical shape.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Flight director Gene Kranz: "We’ve got to find a way to make this fit into the hole for this, using nothing but that." That is operations under extreme constraint.',
      teachingNotes: 'Use this to teach design for supply chain interchangeability and standard parts catalogs.',
      commonStudentPitfalls: ['Proposing solutions that require tools or parts the astronauts did not have on board']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-073',
    filmTitle: 'Captain Phillips',
    releaseYear: 2013,
    tmdbMovieId: 86834,
    subject: 'Operations and supply chain',
    topicTags: ['Supply Chain Security', 'Maritime Logistics', 'Security Protocols', 'Emergency Drills'],
    lessonTitle: 'Maritime Supply Chain Security: Anti-Piracy Operational Protocols',
    learningObjective: 'Analyze operational risk mitigation, emergency safety drills, and defensive protocols in vulnerable global supply chains.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Captain Richard Phillips takes command of the container ship Maersk Alabama in Oman. Inspecting the vessel, he notices unlocked safety doors and lax security. He immediately conducts an unannounced fire and anti-piracy drill off the Somali coast. Hours later, when two pirate skiffs appear on radar, Phillips follows standard protocol: activating high-pressure water monitors, zigzagging the ship to create prop wash swells, and bluffing over VHF radio.',
    sceneTimestampRef: 'Approx. 00:14:15 (Instructor verified)',
    conceptExplanation: 'Global logistics supply chains traverse geopolitical choke points (the Gulf of Aden, Strait of Malacca, Suez Canal) where physical security risks are acute. Phillips’ insistence on unannounced safety drills demonstrates high-reliability operations: muscle memory and locked citadel doors save lives when protocol execution is tested by armed hostiles.',
    framework: {
      name: 'High-Reliability Operational Resilience & Citadel Defense',
      description: 'Framework establishing layered defensive perimeters, automated countermeasures, and lockdown safe-rooms.',
      keySteps: [
        'Layer 1 - Early Radar Detection: Monitor anomalous approaching craft at 5-mile perimeter.',
        'Layer 2 - Non-Lethal Active Deterrence: High-pressure water hoses, evasive helm maneuvers, fake naval radio bluff.',
        'Layer 3 - Engine Disable & Power Blackout: Cut ship power from engine room to prevent pirates from steering ship into territorial waters.',
        'Layer 4 - Citadel Retreat: The entire crew retreats into a secure, armored citadel with internal communication and food/water supplies.'
      ],
      templateSnippet: 'Perimeter Breach: [Pirates board deck] -> Action: [Engine room cut power -> Crew locked in Citadel -> Zero hostages captured].'
    },
    discussionQuestions: [
      'Why is conducting realistic emergency drills often met with eye-rolling and pushback from experienced frontline crews?',
      'How did cutting power to the ship from the engine room neutralize the pirates’ ability to take the ship to Somalia?',
      'What are cybersecurity parallels to the "Citadel" safe-room protocol when a corporate network is breached?'
    ],
    practicalAssignment: {
      title: 'Supply Chain Incident Response & Citadel Protocol',
      prompt: 'Scenario: Your global e-commerce supply chain relies on automated distribution hubs in regions prone to geopolitical civil unrest or extreme weather shutdowns. Formulate an operational security drill protocol and a digital "Citadel" isolation procedure to protect data and physical assets.',
      deliverables: ['Layered perimeter defense checklist', 'Digital/Physical Citadel lockdown protocol', 'Quarterly operational drill schedule and evaluation rubric'],
      rubric: [
        { criteria: 'Protocol rigor', maxPoints: 10, description: 'Provides clear operational steps from detection to total lockdown.' },
        { criteria: 'Human safety priority', maxPoints: 10, description: 'Prioritizes frontline worker survival over physical cargo preservation.' },
        { criteria: 'Operational recovery', maxPoints: 5, description: 'Details secure handoff back to law enforcement or central operations.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was the single most decisive defensive action taken by the Maersk Alabama crew after pirates boarded the ship?',
        options: [
          'They engaged in hand-to-hand combat on the bridge',
          'Chief Engineer Mike Perry cut all main electrical power from the engine room, plunging the ship into total darkness and making it impossible for the pirates to steer or navigate',
          'They threw all cargo containers overboard',
          'They abandoned ship in open lifeboats immediately'
        ],
        correctOptionIndex: 1,
        explanation: 'Cutting ship power immobilized the vessel in international waters, preventing pirates from taking it to the Somali coastline.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Phillips’ initial safety inspection: locked doors and tested fire hoses. Compliance is boring until an existential crisis strikes.',
      teachingNotes: 'Compare maritime piracy protocols to ransomware air-gapping and zero-trust network architectures.',
      commonStudentPitfalls: ['Focusing on Hollywood heroics rather than standard operating procedure compliance']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-074',
    filmTitle: 'The Martian',
    releaseYear: 2015,
    tmdbMovieId: 286217,
    subject: 'Operations and supply chain',
    topicTags: ['Caloric Rationing', 'Closed-Loop Systems', 'Inventory Burn Rate', 'Logistics Planning'],
    lessonTitle: 'Strict Caloric Rationing & Closed-Loop Agriculture Systems on Mars',
    learningObjective: 'Master inventory burn rate calculation, closed-loop resource management, and supply-chain buffer stocking under life-critical isolation.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Botanist Mark Watney realizes he is stranded alone on Mars with only 300 days of vacuum-sealed rations, but the next possible rescue mission (Ares IV) will not arrive for 1,400 days. Watney systematically catalogues every potato, bag of human waste, and liter of water in the Hab. He calculates: "I have to figure out how to grow three years’ worth of food on a planet where nothing grows. I’m going to have to science the s*** out of this."',
    sceneTimestampRef: 'Approx. 00:19:40 (Instructor verified)',
    conceptExplanation: 'Watney’s challenge is the ultimate operations inventory problem: a fixed initial inventory balance, a hard daily burn rate (2,500 calories per day), and a catastrophic 1,100-day supply-chain lead-time gap. By creating closed-loop agriculture (fertilizing Martian regolith with composted human biome, reducing hydrazine rocket fuel to water), Watney multiplies his inventory runway and builds buffer stock against harvest failures.',
    framework: {
      name: 'Inventory Burn Rate & Closed-Loop Regenerative Supply Chain',
      description: 'Mathematical framework calculating runway days, daily consumption rates, and internal yield replenishment.',
      keySteps: [
        'Calculate Finite Inventory Runway: Days = Total Units on Hand / Daily Consumption Rate.',
        'Enforce Strict Rationing: Compress daily burn rate (e.g. from 2,500 cal to 1,850 cal/day = +100 days runway).',
        'Build Closed-Loop Replenishment: Reclaim gray water, synthesize water from fuel, compost waste for soil nutrients.',
        'Model Harvest Yield Variance: Factor in catastrophic failure modes (airlock breach destroying crop yield).'
      ],
      templateSnippet: 'Baseline Stock: [300 days @ 2,500 cal] -> Rationing Compression: [400 days @ 1,850 cal] + Potato Farming: [+600 days] = Runway Extended to Ares IV.'
    },
    discussionQuestions: [
      'Why is understanding exact inventory burn rates essential for both Martian astronauts and early-stage startup cash runways?',
      'How does Watney’s decision to ration his calories affect his physical stamina and cognitive error rates?',
      'What are corporate supply chain parallels to building a "closed-loop" manufacturing system that recycles internal waste?'
    ],
    practicalAssignment: {
      title: 'Runway Burn Rate & Regenerative Resource Model',
      prompt: 'Scenario: Your remote manufacturing facility faces a 9-month maritime shipping embargo. You have a 90-day inventory of vital raw materials. Build an operations burn-rate model detailing rationing protocols, scrap recycling yield, and emergency buffer stock calculations to stretch inventory across the full 9 months.',
      deliverables: ['Inventory burn-rate spreadsheet model', 'Rationing and scrap-recycling operational policy', 'Single-point-of-failure contingency risk matrix'],
      rubric: [
        { criteria: 'Mathematical accuracy', maxPoints: 10, description: 'Accurately models consumption degradation, recycling yields, and runway extension.' },
        { criteria: 'Closed-loop feasibility', maxPoints: 10, description: 'Recycling protocols are technically grounded and minimize quality decay.' },
        { criteria: 'Buffer stock discipline', maxPoints: 5, description: 'Preserves non-negotiable safety reserves for emergency shocks.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'How did Mark Watney solve the critical water deficit required to grow potatoes on Mars?',
        options: [
          'He dug deep wells into Martian permafrost',
          'He chemically extracted hydrogen from leftover hydrazine rocket fuel (N2H4) and burned it with oxygen over an iridium catalyst',
          'He ordered an emergency commercial drone resupply',
          'He condensed morning Martian fog'
        ],
        correctOptionIndex: 1,
        explanation: 'Watney executed dangerous chemical synthesis: breaking down toxic hydrazine rocket fuel to extract hydrogen, then reacting it with oxygen to create water.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Emphasize Watney’s mental framing: "At some point, everything’s going to go south on you. You can either accept that, or you can get to work. You solve one problem, and you solve the next."',
      teachingNotes: 'Compare to circular economy business models (closed-loop battery recycling at Redwood Materials).',
      commonStudentPitfalls: ['Failing to account for the energy or calorie expenditure required to perform the recycling work itself']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-075',
    filmTitle: 'Deepwater Horizon',
    releaseYear: 2016,
    tmdbMovieId: 294254,
    subject: 'Operations and supply chain',
    topicTags: ['Redundancy Failure', 'Negative Testing', 'Safety Culture', 'Cost-Cutting Catastrophe'],
    lessonTitle: 'Redundancy Failure & Negative Testing: The Cement Bond Log Bypass',
    learningObjective: 'Examine how executive cost-cutting, scheduled delay pressures, and bypassing negative testing lead to catastrophic engineering disasters.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'BP company men Donald Vidrine and Robert Kaluza clash with Transocean chief electronics technician Mike Williams and offshore installation manager Jimmy Harrell on the drilling rig. Running 43 days behind schedule and millions over budget, the BP executives dismiss Schlumberger cement testing contractors without running the crucial Cement Bond Log (CBL) test, and misinterpret an anomalous high-pressure negative pressure test as a "bladder effect," leading directly to the blowout.',
    sceneTimestampRef: 'Approx. 00:32:15 (Instructor verified)',
    conceptExplanation: 'Major industrial and software catastrophes rarely result from a single failure; they occur when management systematically ignores negative test anomalies under schedule pressure. In the Macondo blowout, BP executives were anchored on cost and timeline overruns. When the negative pressure test produced an impossible anomaly (zero pressure on the drill pipe, but 1,400 psi on the kill line), they rationalized the anomaly away instead of halting operations.',
    framework: {
      name: 'Normalization of Deviance & Negative Testing Protocol',
      description: 'Framework combating cognitive rationalization of test anomalies and enforcing mandatory stop-work authority.',
      keySteps: [
        'Establish Mandatory Quality Gates: Cement Bond Log (CBL) tests cannot be cancelled by commercial project managers.',
        'Negative Testing Enforcement: When a negative pressure test fails, assume the system is unsafe until proven otherwise.',
        'Combat Normalization of Deviance: Never rationalize anomalous sensor telemetry as an instrument quirk.',
        'Empower Frontline Stop-Work Authority: Any technician on the rig/floor holds absolute legal authority to halt drilling without retribution.'
      ],
      templateSnippet: 'Schedule Pressure: [43 days late / \$1M per day] -> Cognitive Trap: [Rationalize 1,400 psi anomaly as "bladder effect"] -> Result: [Catastrophic blowout].'
    },
    discussionQuestions: [
      'Why did BP executives choose to send the Schlumberger cement testing team home without running the Cement Bond Log?',
      'How does the concept of "Normalization of Deviance" explain why engineers repeatedly accept warning signals until disaster occurs?',
      'What are software engineering parallels to skipping end-to-end integration tests to meet an arbitrary quarterly launch deadline?'
    ],
    practicalAssignment: {
      title: 'Stop-Work Authority Policy & Quality Gate Governance',
      prompt: 'Scenario: You are VP of Safety & Operations at an industrial robotics or aerospace firm. Draft an ironclad Stop-Work Authority (SWA) policy that empowers any engineer or line worker to halt a production launch if a safety test yields ambiguous telemetry, backed by whistleblower protections and board-level immunity.',
      deliverables: ['Stop-Work Authority trigger protocol', 'Root-cause anomaly escalation ladder', 'Managerial anti-retaliation and whistleblower protection clause'],
      rubric: [
        { criteria: 'Authority clarity', maxPoints: 10, description: 'Explicitly grants frontline workers unbending power to stop operations.' },
        { criteria: 'Anomaly discipline', maxPoints: 10, description: 'Forbids proceeding when dual sensor readings diverge.' },
        { criteria: 'Anti-retaliation teeth', maxPoints: 5, description: 'Penalizes managers who pressure workers to bypass testing gates.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What fatal rationalization did BP executives make regarding the negative pressure test on the Deepwater Horizon?',
        options: [
          'They claimed the oil had turned into solid rock',
          'They rationalized away a dangerous 1,400 psi pressure reading on the kill line as a harmless "bladder effect" or sensor phantom, rather than recognizing oil and gas were leaking past the cement seal',
          'They blamed the weather conditions in the Gulf of Mexico',
          'They believed the rig was operating in freshwater'
        ],
        correctOptionIndex: 1,
        explanation: 'BP managers invented a fictional physical explanation ("the bladder effect") to explain away undeniable evidence that the well was kicking.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Diane Vaughan coined the term "Normalization of Deviance" regarding the Challenger disaster; Deepwater Horizon is the exact identical failure of corporate culture.',
      teachingNotes: 'Compare BP’s schedule pressure to the Boeing 737 MAX MCAS certification timeline.',
      commonStudentPitfalls: ['Blaming mechanical valve failures without addressing the executive culture that bypassed the safety tests']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-076',
    filmTitle: 'Lord of War',
    releaseYear: 2005,
    tmdbMovieId: 1819,
    subject: 'Operations and supply chain',
    topicTags: ['Grey Market Logistics', 'Transshipment Arbitrage', 'Regulatory Evasion', 'Supply Chain Visibility'],
    lessonTitle: 'International Logistics Arbitrage and Grey Market Transshipment',
    learningObjective: 'Analyze the mechanics of international trade flags, transshipment hubs, end-user certificates, and regulatory arbitrage in global supply chains.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'International arms dealer Yuri Orlov navigates international maritime tracking. Intercepted on the high seas by Interpol agent Jack Valentine aboard the cargo ship Kristol, Orlov orders the crew to paint a new name on the hull ("The Kono"), re-flag the ship under a Panamanian convenience registry, and alter the cargo manifest from assault rifles to farm machinery while mid-voyage in international waters.',
    sceneTimestampRef: 'Approx. 00:34:10 (Instructor verified)',
    conceptExplanation: 'While Orlov operates in illicit contraband, his operations demonstrate the technical mechanisms of global supply-chain arbitrage: flags of convenience, shell company routing, jurisdictional opacity, and transshipment port manipulation. Legitimate multi-national supply chain managers must master these identical mechanisms to audit their tier-2 and tier-3 suppliers for ethical compliance, avoiding forced-labor sanctions, customs fraud, and embargo violations.',
    framework: {
      name: 'Global Supply-Chain Provenance & Transshipment Audit Matrix',
      description: 'Compliance framework tracking raw material origin, customs bills of lading, and multi-tier intermediary verification.',
      keySteps: [
        'Inspect Maritime Flags of Convenience: Audit vessel ownership registries and port-of-call transit history.',
        'Validate End-User Certificates (EUCs): Verify that stated consignees possess legitimate operating facilities.',
        'Track Free Trade Zone (FTZ) Repackaging: Audit transshipment hubs where cargo is relabeled or mixed with commodity goods.',
        'Implement Cryptographic Chain-of-Custody: Enforce immutable digital ledgers for high-risk component provenance.'
      ],
      templateSnippet: 'Origin: [Ukraine surplus] -> Transshipment Hub: [Panama Free Zone] -> Relabeled: [Agricultural equipment] -> Compliance Audit: [Flagged for forged EUC].'
    },
    discussionQuestions: [
      'Why do international shipping operators utilize "flags of convenience" (e.g. Panama, Liberia) instead of domestic flags?',
      'How do corrupt suppliers manipulate transshipment ports to bypass trade sanctions and customs tariffs?',
      'What technologies (e.g. satellite vessel tracking, RFID seals, blockchain) can modern supply chain leaders use to guarantee ethical provenance?'
    ],
    practicalAssignment: {
      title: 'Tier-3 Supplier Provenance & Sanctions Compliance Audit',
      prompt: 'Scenario: Your consumer electronics brand discovers that rare-earth minerals in your hardware supply chain may be routed through grey-market transshipment hubs in Southeast Asia to circumvent export controls. Design a multi-tier provenance auditing framework that traces component origin back to the mine.',
      deliverables: ['Bill of lading forensic audit checklist', 'Satellite and IoT container tracking protocol', 'Supplier termination and zero-tolerance compliance charter'],
      rubric: [
        { criteria: 'Forensic depth', maxPoints: 10, description: 'Detects relabeling, shell companies, and fraudulent transit hops.' },
        { criteria: 'Auditing feasibility', maxPoints: 10, description: 'Establishes realistic inspection protocols across third-party suppliers.' },
        { criteria: 'Sanctions legal rigor', maxPoints: 5, description: 'Ensures full compliance with international export control treaties.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In global trade logistics, what is a "Flag of Convenience"?',
        options: [
          'A colorful flag used during maritime sports regattas',
          'Registering a commercial ship in a country other than that of its true owners to benefit from reduced operating costs, minimal labor regulations, lower taxes, and lax regulatory oversight',
          'A digital tracking beacon attached to shipping containers',
          'A customs document granting diplomatic immunity'
        ],
        correctOptionIndex: 1,
        explanation: 'Flags of convenience allow shipping companies to register vessels under foreign jurisdictions with minimal regulatory enforcement and tax liabilities.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Orlov explains: "I didn’t break any laws. I just took advantage of the gaps between them." This defines regulatory arbitrage.',
      teachingNotes: 'Connect this to modern supply-chain ESG audits regarding cotton sourcing (Uyghur Forced Labor Prevention Act) and conflict minerals in tech.',
      commonStudentPitfalls: ['Assuming modern supply chains have complete end-to-end visibility; deep tiers are notoriously opaque']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-077',
    filmTitle: 'Sully',
    releaseYear: 2016,
    tmdbMovieId: 363676,
    subject: 'Operations and supply chain',
    topicTags: ['Standard Operating Procedures', 'Heuristic Override', 'Pilot in Command', 'High-Reliability Operations'],
    lessonTitle: 'Standard Operating Procedures (SOPs) vs. Heuristic Crisis Override',
    learningObjective: 'Evaluate when operational protocol adherence is life-saving and when seasoned experts must override SOPs in novel edge-case crises.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'After bird strikes knock out both engines at 2,800 feet, First Officer Jeff Skiles immediately pulls out the QRH (Quick Reference Handbook) and begins reading the dual-engine failure checklist. Sully realizes the checklist is designed for dual engine failure at 30,000 feet, which gives pilots 15 minutes of glide time. At 2,800 feet, following the 3-page checklist will cause them to crash into Manhattan before completing Step 4. Sully immediately executes an expert heuristic override: turns on the Auxiliary Power Unit (APU) out of order, lowers the nose for best glide speed, and commits to ditching in the Hudson.',
    sceneTimestampRef: 'Approx. 00:21:10 (Instructor verified)',
    conceptExplanation: 'Standard Operating Procedures (SOPs) are the bedrock of operational safety, encoding decades of institutional learning into algorithmic checklists. However, SOPs assume standard operational envelopes (e.g. dual engine failure at high altitude). When edge-case disruptions compress the time envelope to zero, blind protocol adherence leads to catastrophe. High-reliability organizations must train operators to recognize when the operational baseline has collapsed and exercise disciplined heuristic override.',
    framework: {
      name: 'Rasmussen’s Skill-Rule-Knowledge (SRK) Decision Framework',
      description: 'Cognitive engineering framework classifying human performance across Skill-based, Rule-based, and Knowledge-based behavior.',
      keySteps: [
        'Skill-Based: Automatic, subconscious physical motor routines (Flying best glide pitch).',
        'Rule-Based: Algorithmic checklist execution (Standard QRH emergency checklists).',
        'Knowledge-Based Override: Mental model calculation when rules do not fit the unprecedented situation (Ditching in river).',
        'APU Out-of-Order Execution: Instantly start emergency electrical power before checklist calls for it to preserve flight controls.'
      ],
      templateSnippet: 'Standard Envelope: [Rule-based QRH checklist: 15 min available] -> Edge-Case Compression: [Altitude 2,800ft: 3 min available] -> Action: [Heuristic override].'
    },
    discussionQuestions: [
      'Why would following the official Airbus QRH checklist step-by-step have resulted in a fatal crash into Manhattan?',
      'Why did Sully’s decision to start the APU immediately—which was on page 3 of the checklist—save the fly-by-wire flight control system?',
      'How should enterprise IT incident managers balance following standard runbooks with permitting engineers to execute out-of-order patches during live outages?'
    ],
    practicalAssignment: {
      title: 'Incident Runbook Heuristic Override Governance',
      prompt: 'Scenario: Your cloud engineering team operates under rigid 50-step runbooks for database recovery. Design an "Emergency Heuristic Override Protocol" that authorizes on-call senior engineers to deviate from runbooks when telemetry indicates an un-modeled cascade failure, while establishing logging and post-incident justification requirements.',
      deliverables: ['Heuristic override authorization criteria', 'Real-time telemetry justification logging protocol', 'Post-incident review and runbook update governance'],
      rubric: [
        { criteria: 'Authority calibration', maxPoints: 10, description: 'Empowers expert intervention without encouraging cowboy recklessness.' },
        { criteria: 'Accountability logging', maxPoints: 10, description: 'Mandates automated capture of why standard rules were suspended.' },
        { criteria: 'Organizational learning', maxPoints: 5, description: 'Ensures valid overrides are incorporated into updated runbooks.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was Sully’s immediate decision to turn on the Auxiliary Power Unit (APU) out of sequence critical to the survival of Flight 1549?',
        options: [
          'It provided air conditioning in the passenger cabin',
          'It delivered immediate auxiliary electrical power to maintain the Airbus A320’s computerized fly-by-wire flight control surfaces after both main engine generators failed',
          'It sent an automatic distress telegraph to the White House',
          'It ejected the landing gear prematurely'
        ],
        correctOptionIndex: 1,
        explanation: 'Without main engine generators, the aircraft would revert to emergency battery power and mechanical backup; starting the APU restored full fly-by-wire flight control.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the line in the NTSB hearing: "Everything we did... none of it was in the book." Real operational excellence knows when to close the book.',
      teachingNotes: 'Compare to high-frequency trading circuit breakers and nuclear power plant emergency overrides.',
      commonStudentPitfalls: ['Advocating for ignoring checklists routinely; checklists are vital 99.9% of the time']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-078',
    filmTitle: 'The Founder',
    releaseYear: 2016,
    tmdbMovieId: 361743,
    subject: 'Operations and supply chain',
    topicTags: ['Queueing Theory', 'Cycle Time', 'Menu Unbundling', 'Takt Time'],
    lessonTitle: 'Queueing Theory & Cycle-Time Reduction: The Speedee Menu Unbundling',
    learningObjective: 'Apply Little’s Law and Queueing Theory to reduce operational cycle times through menu unbundling and standard batch processing.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Dick and Mac McDonald describe how they transformed their failing traditional drive-in restaurant. They audited their financial books and discovered that 87% of their sales came from only three items: hamburgers, french fries, and Coca-Cola. They made the radical operational choice to fire their carhop waitresses, slash their 27-item menu down to just 3 items, replace custom china plates with disposable paper wrappers, and prepare burgers in continuous standardized batches.',
    sceneTimestampRef: 'Approx. 00:21:15 (Instructor verified)',
    conceptExplanation: 'Traditional restaurants and software teams suffer from "variety sprawl": offering too many custom variations that destroy operational throughput and create massive customer queues. The McDonald brothers applied Little’s Law (WIP = Throughput x Cycle Time): by ruthlessly eliminating menu complexity (no custom orders, no table service), cycle time dropped from 30 minutes to 30 seconds, allowing a tiny kitchen footprint to process astronomical customer volume.',
    framework: {
      name: 'Little’s Law & Menu Complexity Reduction Matrix',
      description: 'Operations research framework calculating the throughput capacity unlocked by unbundling and standardization.',
      keySteps: [
        'Calculate Product Pareto: Identify the 15% of SKUs generating 85% of volume and margin.',
        'Eliminate Customization Tail: Drop low-volume items that disrupt continuous batch flow.',
        'Apply Little’s Law: Work-in-Progress (WIP) = Throughput (λ) * Cycle Time (W).',
        'Standardize Packaging & Handoff: Replace washable tableware with self-service disposable packaging to eliminate busing latency.'
      ],
      templateSnippet: 'Legacy Drive-In: [27 menu items, 30-min wait time, carhop service] -> Speedee Model: [3 core items, 30-second wait time, self-service walkup].'
    },
    discussionQuestions: [
      'Why did initial customers honk their horns and angrily walk away when the McDonald brothers first reopened with their paper-bag self-service model?',
      'How does menu unbundling and standard batch preparation reduce raw ingredient spoilage and working capital requirements?',
      'What are software SaaS equivalents of slashing a 27-feature menu to maximize the throughput of a single core workflow?'
    ],
    practicalAssignment: {
      title: 'Operations Menu Unbundling & Throughput Optimization',
      prompt: 'Select a bloated service or digital workflow (e.g. enterprise software onboarding, hospital patient triage, specialized customer onboarding). Audit the process using Little’s Law. Design an unbundled, standardized "Speedee" variant that slashes cycle time by 80% while capturing 85% of core user value.',
      deliverables: ['80/20 SKU/Feature volume audit', 'Little’s Law throughput calculation before and after', 'Standardized packaging and self-service handoff design'],
      rubric: [
        { criteria: 'Throughput mathematics', maxPoints: 10, description: 'Accurately applies Little’s Law to demonstrate cycle-time reduction.' },
        { criteria: 'Ruthless scoping', maxPoints: 10, description: 'Eliminates edge-case customizations without destroying core value.' },
        { criteria: 'Self-service design', maxPoints: 5, description: 'Shifts low-value manual work onto automated or self-serve customer touchpoints.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to Little’s Law (L = λ * W), what happens to customer wait time (W) when you reduce menu complexity and work-in-progress (L)?',
        options: [
          'Wait time increases exponentially',
          'Wait time (cycle time) decreases proportionally, enabling higher total system throughput',
          'Customer acquisition costs double automatically',
          'Wait time remains completely unchanged'
        ],
        correctOptionIndex: 1,
        explanation: 'Reducing work-in-progress and process variance directly compresses cycle time and waiting queues.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Mac McDonald: "Burgers, fries, shakes. That was it. Simple, efficient, fast." They traded variety for velocity.',
      teachingNotes: 'Compare to In-N-Out Burger’s refusal to add salads or chicken, and Southwest Airlines flying only Boeing 737s.',
      commonStudentPitfalls: ['Assuming that customers always want maximum variety; customers often value speed and predictability far more']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-079',
    filmTitle: 'Ford v Ferrari',
    releaseYear: 2019,
    tmdbMovieId: 359724,
    subject: 'Operations and supply chain',
    topicTags: ['Pit-Stop Optimization', 'Takt Time', 'SMED', 'Lean Manufacturing'],
    lessonTitle: 'Pit-Stop Optimization: Quick-Change Brake Rotors and Takt Time',
    learningObjective: 'Master Single-Minute Exchange of Die (SMED) and Lean manufacturing Takt time principles through modular component replacement.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'At the 1966 24 Hours of Le Mans, Ken Miles pits the Ford GT40 with glowing, red-hot brake rotors on the verge of cracking. In endurance racing, changing brakes historically took 20-30 minutes of labor in the garage, surrendering multiple laps. Chief engineer Phil Remington unveils a secret modular innovation: quick-change brake assemblies where the entire rotor and caliper unit pops off with a single retaining pin, allowing Miles to receive brand-new brakes and return to the track in under a minute.',
    sceneTimestampRef: 'Approx. 01:52:10 (Instructor verified)',
    conceptExplanation: 'Shigeo Shingo’s Single-Minute Exchange of Die (SMED) is a cornerstone of the Toyota Production System: converting internal setup time (which halts production) into external setup time (pre-assembled modules ready for instant swap). Ford won Le Mans not just by driving faster on the Mulsanne Straight, but by compressing maintenance changeover latency from 30 minutes to 60 seconds.',
    framework: {
      name: 'Shingo’s SMED (Single-Minute Exchange of Die) & Modular Swapping',
      description: 'Lean manufacturing methodology reducing equipment changeover times to single-digit minutes.',
      keySteps: [
        'Differentiate Internal vs External Operations: Externalize preparation (pre-assemble calipers on workbench before pit stop).',
        'Standardize Fasteners and Interconnects: Replace 12 threaded bolts with single quick-release captive pins.',
        'Eliminate Adjustments: Use fixed mechanical stops so no manual calibration is needed during live operation.',
        'Synchronize Pit Crew Choreography: Assign precise, non-overlapping physical zones to each technician.'
      ],
      templateSnippet: 'Legacy Maintenance: [30 minutes in garage / Dismantle hub] -> SMED Modular Swap: [55 seconds in pit lane / 1-pin quick-release] -> Lap Lead: [+2 laps].'
    },
    discussionQuestions: [
      'Why did Ferrari’s racing directors protest to the race officials that Ford’s quick-change brake system was illegal?',
      'How does the SMED methodology apply to cloud computing container deployments and CI/CD pipelines?',
      'What are the engineering trade-offs of designing modular, quick-change assemblies versus monolithic welded components?'
    ],
    practicalAssignment: {
      title: 'SMED Changeover Reduction & Modular Pipeline Audit',
      prompt: 'Select a physical or software deployment process that suffers from lengthy downtime during changeovers (e.g. database schema migrations, hardware tool changes on a manufacturing line, server hardware maintenance). Apply the 4 steps of SMED to slash changeover downtime by 75%.',
      deliverables: ['Internal vs External setup task breakdown', 'Modular quick-swap mechanism or blue/green deployment design', 'Standardized changeover time-study scorecard'],
      rubric: [
        { criteria: 'SMED differentiation', maxPoints: 10, description: 'Accurately externalizes setup tasks so they occur while the system is still running.' },
        { criteria: 'Modular quick-release', maxPoints: 10, description: 'Replaces complex multi-step fastening with standardized zero-adjustment swaps.' },
        { criteria: 'Downtime reduction', maxPoints: 5, description: 'Demonstrates mathematically how changeover duration falls by >75%.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the core breakthrough of Shigeo Shingo’s SMED (Single-Minute Exchange of Die) methodology?',
        options: [
          'Hiring three times as many workers to do the same task',
          'Converting "internal" changeover activities (which require the machine/process to be stopped) into "external" activities (prepared in advance while the machine is running)',
          'Automating everything with generative AI software',
          'Operating machines at double their rated electrical capacity'
        ],
        correctOptionIndex: 1,
        explanation: 'SMED’s fundamental principle is preparing setup modules in advance so the live operational stoppage is reduced to seconds.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Remington checked the rulebook: the regulations stated parts could be replaced, but never specified how long it had to take. He out-engineered the rulebook.',
      teachingNotes: 'Compare to Blue/Green software deployment and Kubernetes rolling updates.',
      commonStudentPitfalls: ['Focusing on how fast the technicians wrench, rather than how the modular physical design eliminated the need for wrenching']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },

  // ==========================================
  // SUBJECT 10: Leadership and organizational behavior (lms-080..lms-088)
  // ==========================================
  {
    id: 'lms-080',
    filmTitle: '12 Angry Men',
    releaseYear: 1957,
    tmdbMovieId: 389,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Dissent Cultivation', 'Anchoring Bias', 'Groupthink', 'Influence & Persuasion'],
    lessonTitle: 'Dissent Cultivation & Anchoring Bias Reversal: Juror 8’s Persuasion Arc',
    learningObjective: 'Master minority dissent persuasion, reversing groupthink anchors, and methodical inquiry in consensus-driven executive teams.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'On a sweltering New York afternoon, eleven jurors vote immediately to convict an 18-year-old youth of murder, eager to catch an evening baseball game. Juror 8 (an architect) stands completely alone, voting "Not Guilty." He does not claim the boy is innocent; he simply insists: "It’s not easy for me to raise my hand and send a boy off to die without talking about it first." Methodically, he pulls an identical switchblade knife from his pocket, disproving the prosecution’s claim that the murder weapon was unique.',
    sceneTimestampRef: 'Approx. 00:18:30 (Instructor verified)',
    conceptExplanation: 'When teams face high-stakes decisions, "Groupthink" and "Anchoring Bias" frequently lead to catastrophic premature consensus: individuals suppress doubts to conform with the majority. Juror 8 is the definitive masterclass in minority influence: he does not attack opponents’ intelligence; he asks open-ended clarifying questions, introduces tangible counter-evidence (the pocketknife), and invites others to share their specialized expertise.',
    framework: {
      name: 'Nemeth’s Minority Influence & Psychological Dissent Model',
      description: 'Social psychology framework showing how disciplined minority dissent stimulates divergent cognitive thinking in groups.',
      keySteps: [
        'Avoid Dogmatic Confrontation: Anchor on inquiry rather than certainty ("I don’t know, but let’s talk for an hour").',
        'Break the Monopoly of Consensus: A single dissenter liberates others to express privately held doubts.',
        'Introduce Tangible Disconfirming Evidence: Produce the second switchblade knife to break an unverified assumption.',
        'Empower Domain Experts: Invite the quiet watchmaker or older juror to analyze specialized details (train noise, walking speed).'
      ],
      templateSnippet: 'Consensus Anchor: [11-1 Guilty vote / Quick decision] -> Intervention: [Open-ended inquiry + Disconfirming knife] -> Outcome: [12-0 Unanimous Acquittal].'
    },
    discussionQuestions: [
      'Why is premature unanimity in executive boardrooms a reliable signal of intellectual laziness or fear?',
      'How did Juror 8’s calm, non-defensive emotional tone prevent the majority from closing ranks against him?',
      'What are corporate mechanisms (e.g. Red Teams, designated devil’s advocates) that institutionalize Juror 8’s role in decision-making?'
    ],
    practicalAssignment: {
      title: 'Executive Red-Team Decision Audit Protocol',
      prompt: 'Scenario: Your executive leadership team is unanimously voting to acquire a rival tech company for \$500M without meaningful debate. Design a structured "Juror 8 Red Team" protocol that assigns independent analysts to stress-test the 3 riskiest assumptions of the acquisition.',
      deliverables: ['Red Team mandate and charter document', 'Three specific disconfirming stress-test exercises', 'Executive voting procedure preventing premature anchoring'],
      rubric: [
        { criteria: 'Stress-test rigor', maxPoints: 10, description: 'Targets fundamental business model vulnerabilities rather than trivial edge cases.' },
        { criteria: 'Psychological safety', maxPoints: 10, description: 'Ensures dissenters are celebrated rather than marginalized.' },
        { criteria: 'Governance integration', maxPoints: 5, description: 'Integrates smoothly into formal board approval workflows.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to social psychologist Charlan Nemeth, what is the primary benefit of minority dissent in group decision-making?',
        options: [
          'It delays meetings until executives get tired and leave',
          'Even when the dissenter is technically wrong, dissent forces the majority to engage in divergent cognitive processing, examining multiple perspectives rather than blindly accepting assumptions',
          'It satisfies federal human resource diversity compliance rules',
          'It ensures all decisions result in hung juries'
        ],
        correctOptionIndex: 1,
        explanation: 'Minority dissent stimulates broader information search, superior critical thinking, and resistance to superficial groupthink.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Juror 8 didn’t say "He’s innocent." He said "I have a reasonable doubt." Lowering the threshold of persuasion is key to opening closed minds.',
      teachingNotes: 'Compare to Alfred P. Sloan’s famous GM board meeting: "Gentlemen, I see we are all in complete agreement on this decision. I propose we postpone further discussion until our next meeting to give ourselves time to develop disagreement."',
      commonStudentPitfalls: ['Assuming minority influence requires being loud and aggressive; Juror 8 succeeded through patient, quiet questions']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-081',
    filmTitle: 'Remember the Titans',
    releaseYear: 2000,
    tmdbMovieId: 10637,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Team Integration', 'Shared Purpose', 'Overcoming Prejudice', 'Culture Building'],
    lessonTitle: 'Cross-Cultural Team Integration & Common Purpose Alignment: The Gettysburg Crucible',
    learningObjective: 'Master the leadership techniques required to integrate hostile, racially divided organizational factions into a unified high-performance culture.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'In 1971 Virginia, newly desegregated T.C. Williams High School merges Black and white football players who refuse to speak to one another. Coach Herman Boone wakes the team at 3:00 AM during camp and marches them through pitch-black woods to the Gettysburg battlefield cemetery. Standing among the gravestones, Boone delivers a searing speech: "If we don’t come together right now on this hallowed ground, then we too will be destroyed... just like they were."',
    sceneTimestampRef: 'Approx. 00:36:15 (Instructor verified)',
    conceptExplanation: 'Mergers and acquisitions (M&A) and organizational restructuring frequently fail due to tribalism: legacy factions retreating into defensive silos and sabotaging collaboration. Coach Boone deployed classic social psychology: creating superordinate goals, forcing cross-silo pairing (Black and white players forced to room together and learn each other’s life stories), and establishing zero-tolerance operational standards that made individual ego secondary to collective victory.',
    framework: {
      name: 'Muzafer Sherif’s Robbers Cave & Superordinate Goal Alignment',
      description: 'Framework demonstrating that inter-group hostility is dissolved when teams must collaborate to achieve shared existential goals.',
      keySteps: [
        'Break Physical Silos: Force integrated seating, rooming, and pairing across adversarial subgroups.',
        'Create Experiential Crucible: Shared physical/mental struggle that strips away superficial status differences.',
        'Introduce the Superordinate Goal: Establish a single mission (Undefeated Championship) that requires 100% mutual dependence.',
        'Empower Peer Accountability: Step back as coach and let team captains (Gerry Bertier and Julius Campbell) enforce internal cultural norms.'
      ],
      templateSnippet: 'Tribal Hostility: [White vs Black factionalism] -> Shared Crucible: [Gettysburg 3:00 AM march] -> Superordinate Goal: [Perfect Season] -> Peer Enforcement: ["Attitude reflect leadership"].'
    },
    discussionQuestions: [
      'Why did Coach Boone force players to spend time learning personal family histories about teammates from the opposing racial group?',
      'How does Gerry Bertier’s transition from entitled defensive captain to inclusive team leader trigger the wider cultural transformation of the team?',
      'What are corporate M&A equivalents of Coach Boone’s 3:00 AM Gettysburg march?'
    ],
    practicalAssignment: {
      title: 'Post-Merger Cultural Integration Playbook',
      prompt: 'Scenario: Your company has acquired its fiercest rival. The two engineering teams despise each other and refuse to share codebase documentation. Formulate an 8-week cultural integration playbook based on Superordinate Goals and cross-silo pairing to build a unified engineering culture.',
      deliverables: ['Cross-silo buddy/pairing assignment protocol', 'Shared superordinate hackathon/crucible project charter', 'Peer-driven cultural accountability metrics'],
      rubric: [
        { criteria: 'Silo dissolution', maxPoints: 10, description: 'Directly tackles tribal defensiveness and historical grudges.' },
        { criteria: 'Superordinate goal power', maxPoints: 10, description: 'Mission requires genuine mutual dependence to succeed.' },
        { criteria: 'Peer leadership empowerment', maxPoints: 5, description: 'Empowers frontline captains to enforce cultural baselines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In social psychology, what did Muzafer Sherif’s classic "Robbers Cave" experiment prove about resolving inter-group hostility?',
        options: [
          'Hostility can only be resolved by paying both groups large financial bonuses',
          'Merely bringing hostile groups together for social contact increases friction; hostility is only eliminated when groups must work together to achieve a shared "superordinate goal" that neither can achieve alone',
          'Competitive sports matches naturally eliminate racial tension without adult leadership',
          'Hostile groups must be permanently separated into different divisions'
        ],
        correctOptionIndex: 1,
        explanation: 'Contact alone does not heal division; only joint pursuit of indispensable, superordinate goals dissolves tribal hostility.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Julius Campbell: "Attitude reflect leadership, captain." Peer accountability and leadership embodiment are everything.',
      teachingNotes: 'Compare to corporate culture clashes like Daimler-Chrysler or United-Continental mergers.',
      commonStudentPitfalls: ['Treating the transformation as purely emotional rather than analyzing Boone’s deliberate operational and behavioral design']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-082',
    filmTitle: 'Spotlight',
    releaseYear: 2015,
    tmdbMovieId: 314365,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Institutional Blind Spots', 'Investigative Culture', 'Psychological Safety', 'Societal Complicity'],
    lessonTitle: 'Investigative Newsroom Culture: Structural Institutional Blind Spots',
    learningObjective: 'Analyze how organizational blind spots, social deference, and institutional conformity cause teams to overlook obvious systemic crises.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Boston Globe editor Walter "Robby" Robinson realizes with horror that an attorney had sent him a documented list of 20 abusive priests years earlier, and Robinson had buried the story on page 18. Confronted by new editor Marty Baron, Robinson admits his complicity: he was part of the Boston social fabric—golfing with Church attorneys, attending Catholic charity dinners, and prioritizing institutional harmony over investigative truth.',
    sceneTimestampRef: 'Approx. 01:42:30 (Instructor verified)',
    conceptExplanation: 'Organizations rarely fail due to lack of intelligence; they fail because of "Institutional Blind Spots"—unspoken social contracts, deference to powerful local patrons, and the comfortable habit of looking away. Leaders must cultivate newsroom cultures characterized by psychological safety and external perspective: bringing in outsiders (like Marty Baron, an unmarried Jewish editor from Miami) who are free from legacy social entanglements.',
    framework: {
      name: 'Institutional Blind-Spot Auditing & External Perspective Matrix',
      description: 'Framework identifying sacred cows, unspoken corporate taboos, and systemic deference.',
      keySteps: [
        'Identify Social & Economic Chummy Ties: Who does senior leadership golf, socialize, or serve on boards with?',
        'Audit Buried Historical Inquiries: Inspect past internal reports or complaints that were quietly settled or deprioritized.',
        'Inject External Cognitive Diversity: Bring in leaders with zero personal or cultural debt to the local establishment.',
        'Institutionalize the "Baron Question": When presented with an uncomfortable inquiry, ask: "Why didn’t we pursue this before?"'
      ],
      templateSnippet: 'Local Deference: [Bury story to preserve relationship with Archdiocese] -> External Audit: [Outside editor asks "Why?"] -> Systemic Reckoning.'
    },
    discussionQuestions: [
      'Why are local, well-connected executives often the worst people to spot systemic rot within their own communities?',
      'How did Marty Baron’s status as an outsider allow him to direct the Boston Globe where local editors feared to tread?',
      'What are corporate equivalents of "burying a 20-priest document on page 18" in technology or finance?'
    ],
    practicalAssignment: {
      title: 'Corporate Sacred-Cow & Blind-Spot Audit',
      prompt: 'Select an established corporation or university. Conduct an audit of its structural blind spots: identify 2 areas where legacy relationships, donor dependencies, or cultural sacred cows prevent rigorous internal auditing. Propose an independent external evaluation mechanism.',
      deliverables: ['Institutional sacred-cow inventory', 'Vulnerability exposure analysis (reputational and legal)', 'Independent external review board charter'],
      rubric: [
        { criteria: 'Candor and depth', maxPoints: 10, description: 'Directly names uncomfortable cultural taboos without evasion.' },
        { criteria: 'Conflict-of-interest analysis', maxPoints: 10, description: 'Maps social, financial, and regulatory entanglements.' },
        { criteria: 'Governance independence', maxPoints: 5, description: 'Charter guarantees external investigators complete subpoena/access rights.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was Marty Baron able to launch the investigation that Boston Globe insiders had ignored for decades?',
        options: [
          'He was offered a higher salary by the publisher',
          'As an outsider with no social ties to the Boston Catholic establishment, he felt zero social pressure to protect legacy institutions or preserve comfortable local relationships',
          'He used secret CIA wiretaps',
          'He was an expert in church cannon law'
        ],
        correctOptionIndex: 1,
        explanation: 'Baron had no social or political debts to the local power structure, allowing him to evaluate the story purely on its journalistic merits.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Robby Robinson’s confession: "We found the clips. We buried it." Great leadership owns its past complicity and focuses on making it right.',
      teachingNotes: 'Compare to board governance blind spots in Theranos, Enron, and Penn State.',
      commonStudentPitfalls: ['Assuming smart, well-meaning people are immune to social conformity and institutional blind spots']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-083',
    filmTitle: 'Whiplash',
    releaseYear: 2014,
    tmdbMovieId: 244786,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Toxic Leadership', 'Psychological Safety', 'Extreme Performance', 'Burnout Dynamics'],
    lessonTitle: 'Toxic High-Performance Environments vs. Psychological Safety: The Fletcher Dilemma',
    learningObjective: 'Evaluate the boundaries between demanding extreme excellence and destructive psychological abuse in high-performance talent development.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Jazz conservatory conductor Terence Fletcher hurls a chair at student drummer Andrew Neiman’s head, slaps him repeatedly across the face, and screams sexually humiliating insults when Neiman struggles to stay on double-time swing tempo. Later, in a quiet jazz club, Fletcher defends his philosophy: "There are no two words in the English language more harmful than ‘good job’... I was there to push people beyond what’s expected of them."',
    sceneTimestampRef: 'Approx. 01:28:10 (Instructor verified)',
    conceptExplanation: 'Many high-stakes industries (hedge funds, elite sports, culinary fine dining, frontier tech startups) glamorize abusive "Fletcherism": the belief that peerless genius can only be extracted through terror, humiliation, and psychological torment. Amy Edmondson’s organizational research proves the exact opposite: while toxic abuse creates short-term compliance, it destroys psychological safety, conceals errors, triggers depression and suicide, and narrows cognitive creativity.',
    framework: {
      name: 'Amy Edmondson’s Psychological Safety & Performance Accountability Matrix',
      description: 'Framework measuring the 4 quadrants of organizational culture: Apathy, Comfort, Anxiety, and Learning Zone.',
      keySteps: [
        'The Anxiety Zone (High Standards + Low Psychological Safety): Fletcher’s domain. High terror, error concealment, burnout, breakdown.',
        'The Comfort Zone (Low Standards + High Psychological Safety): Warm and friendly, but zero performance rigor.',
        'The Apathy Zone (Low Standards + Low Psychological Safety): Cynical, disengaged compliance.',
        'The Learning Zone (High Standards + High Psychological Safety): Uncompromising standards paired with deep psychological trust and error-debugging.'
      ],
      templateSnippet: 'Fletcher Model: [Terror + Humiliation -> Short-term technical virtuosity -> Lifelong psychological trauma / Suicide] vs Learning Zone: [High challenge + Radical trust].'
    },
    discussionQuestions: [
      'Is Fletcher’s claim—that Charlie Parker only became "Bird" because Jo Jones threw a cymbal at his head—historically and psychologically valid?',
      'Why do many top performers mistakenly defend and romanticize abusive mentors who traumatized them early in their careers?',
      'How can an executive leader hold teams to world-class standards without slipping into toxic, demoralizing abuse?'
    ],
    practicalAssignment: {
      title: 'High-Performance Culture Accountability Charter',
      prompt: 'Scenario: You are appointed Managing Partner of an elite trading desk or engineering lab with a history of toxic, abusive conduct. Draft an Organizational Culture Charter that establishes world-class performance metrics while setting non-negotiable boundaries for psychological safety, feedback delivery, and dignity.',
      deliverables: ['Psychological Safety & High Accountability Charter', 'Feedback delivery code of conduct (Crucial Conversations model)', 'Anonymous toxic behavior reporting and remediation protocol'],
      rubric: [
        { criteria: 'Standards rigor', maxPoints: 10, description: 'Preserves elite performance demands without compromising human dignity.' },
        { criteria: 'Abuse boundary clarity', maxPoints: 10, description: 'Explicitly defines unacceptable abusive practices (screaming, humiliation, retaliation).' },
        { criteria: 'Accountability enforcement', maxPoints: 5, description: 'Provides realistic enforcement mechanisms for senior rainmakers who violate norms.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to Amy Edmondson’s research at Harvard Business School, what happens when an organization pairs extremely high standards with very low psychological safety?',
        options: [
          'Teams enter the "Learning Zone" and innovate rapidly',
          'Teams enter the "Anxiety Zone," where employees are terrified of failure, conceal mistakes, experience severe burnout, and avoid taking creative risks',
          'Corporate legal fees fall to zero',
          'Employees work for lower wages voluntarily'
        ],
        correctOptionIndex: 1,
        explanation: 'High standards without psychological safety create the Anxiety Zone: workers hide errors and experience psychological trauma to avoid punishment.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Director Damien Chazelle confirmed the dark reality: Andrew’s climactic drum solo on Caravan was a triumph of music, but Andrew would likely die of an overdose or suicide in his 30s. Fletcher won, but destroyed the human.',
      teachingNotes: 'Compare Fletcher’s style to the cultures at Bridgewater Associates, early Amazon warehouse culture, and elite culinary kitchens.',
      commonStudentPitfalls: ['Believing that abuse is necessary to produce greatness; Google’s Project Aristotle proved psychological safety is the #1 predictor of high team performance']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-084',
    filmTitle: 'Invictus',
    releaseYear: 2009,
    tmdbMovieId: 22825,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Symbolic Leadership', 'Cultural Anchoring', 'Nation Building', 'Forgiveness Strategy'],
    lessonTitle: 'Symbolic Leadership and Cultural Anchoring: Nelson Mandela and the Springboks',
    learningObjective: 'Master symbolic leadership and strategic empathy to disarm hostile stakeholders and build inclusive institutional coalitions.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Newly elected South African President Nelson Mandela walks into a meeting of the National Sports Council, where Black delegates have just voted unanimously to abolish the Springbok rugby team’s name and green-and-gold colors, viewing them as hated symbols of apartheid. Mandela overrules his own supporters: "If we take away their rugby, we prove that we are what they feared we would be... We have to be better than that. We have to surprise them with restraint and generosity."',
    sceneTimestampRef: 'Approx. 00:28:40 (Instructor verified)',
    conceptExplanation: 'Power transitions often fail because newly empowered leaders immediately seek revenge, purges, or the erasure of legacy symbols, entrenching bitter resistance among the former ruling class. Mandela understood "Symbolic Leadership": adopting the most sacred symbol of his oppressors (the Springbok rugby jersey), memorizing the players’ names, and challenging team captain François Pienaar to win the 1995 Rugby World Cup. By honoring his enemies’ cultural anchors, he disarmed their fear and united a fractured nation.',
    framework: {
      name: 'Symbolic Leadership & Generosity Arbitrage (Heifetz / Bolman-Deal)',
      description: 'Framework evaluating the strategic deployment of cultural symbols, rituals, and magnanimity in high-conflict organizational transitions.',
      keySteps: [
        'Identify the Opponent’s Sacred Cultural Anchor (The Springbok jersey / Legacy product brand).',
        'Refuse Retributive Erasure: Reject the impulse to purge symbols; co-opt them for the new coalition.',
        'Execute Generosity Arbitrage: Surprise hostile stakeholders with magnanimity and restraint when they expect vengeance.',
        'Embody the Shared Myth: Wear the jersey publicly (Mandela stepping onto Ellis Park in the green-and-gold #6 jersey).'
      ],
      templateSnippet: 'Vengeance Impulse: [Abolish Springbok emblem = Alienate 40% of country] -> Symbolic Reversal: [Embrace Springboks = Turn hostile rivals into loyal citizens].'
    },
    discussionQuestions: [
      'Why did Mandela’s closest political advisors furiously object to him defending the Springbok rugby team?',
      'How does "restraint and generosity" create greater political leverage than ruthless retribution during corporate reorganizations?',
      'What are corporate tech equivalents of a new CEO honoring a legacy division’s traditions to win their allegiance?'
    ],
    practicalAssignment: {
      title: 'Symbolic Leadership Reorganization Strategy',
      prompt: 'Scenario: You are brought in as turnaround CEO of an acquired company where legacy employees view your parent firm as hostile invaders. Design a symbolic leadership intervention: identify the legacy cultural artifact/ritual you will publicly champion, and formulate a 90-day engagement plan that disarms tribal hostility.',
      deliverables: ['Legacy cultural artifact analysis', 'Symbolic public leadership gesture specification', 'Coalition-building milestone roadmap'],
      rubric: [
        { criteria: 'Strategic empathy', maxPoints: 10, description: 'Demonstrates deep respect for legacy traditions and emotional anchors.' },
        { criteria: 'Symbolic leverage', maxPoints: 10, description: 'The gesture visibly surprises skeptics and disarms defensive cynicism.' },
        { criteria: 'Substantive alignment', maxPoints: 5, description: 'Pairs symbolic gestures with authentic operational fairness and inclusion.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did Nelson Mandela risk his political capital to protect the Springbok rugby team’s name and colors?',
        options: [
          'He was an avid rugby gambler who wanted to win cash',
          'He understood that stripping the Afrikaner minority of their most cherished cultural symbol would make reconciliation impossible, whereas embracing it would prove that the new South Africa had room for everyone',
          'The International Olympic Committee threatened to sanction South Africa',
          'The rugby team paid his presidential campaign debts'
        ],
        correctOptionIndex: 1,
        explanation: 'Mandela used the rugby team as a powerful psychological bridge: proving to white South Africans that majority rule did not mean destruction of their heritage.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Francois Pienaar’s post-game interview: "Did you feel the 62,000 fans in the stadium supported you?" Pienaar: "We didn’t have 62,000 fans behind us; we had 43 million South Africans."',
      teachingNotes: 'Compare to Lincoln’s Second Inaugural ("With malice toward none, with charity for all").',
      commonStudentPitfalls: ['Viewing Mandela’s actions as pure softness rather than an intensely shrewd political and psychological strategy']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-085',
    filmTitle: 'Gladiator',
    releaseYear: 2000,
    tmdbMovieId: 98,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Servant Leadership', 'Frontline Credibility', 'Shared Risk', 'Moral Authority'],
    lessonTitle: 'Servant Leadership & Leading from the Front Line: General Maximus at the Battle of Vindobona',
    learningObjective: 'Analyze how shared frontline physical risk, humility, and servant leadership build fanatical organizational loyalty.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'In the freezing mud of Germania, General Maximus Decimus Meridius prepares the Roman legions for battle. While Emperor Marcus Aurelius watches from a distant hilltop tent, Maximus does not sit on a golden throne in the rear; he kneels in the dirt, rubs freezing soil into his hands, jokes with frontline archers, checks the horses personally, and leads the cavalry charge directly through the burning forest into the barbarian flank.',
    sceneTimestampRef: 'Approx. 00:09:40 (Instructor verified)',
    conceptExplanation: 'True leadership authority is granted by the followers, not bestowed by a corporate title. Robert Greenleaf’s "Servant Leadership" posits that leaders gain unshakeable credibility when they share the exact physical hardships, mud, and risks of their frontline workers. When a leader is the first into the breach and the last to take comfort, followers willingly execute mission-critical tasks under extreme peril.',
    framework: {
      name: 'Robert Greenleaf’s Servant Leadership & Frontline Presence Matrix',
      description: 'Framework measuring leadership credibility through shared hardship, frontline presence, and humility.',
      keySteps: [
        'Rub Soil in Hands (Shared Hardship): Personally experience the cold, messy execution friction of your frontline teams.',
        'Lead from the Point of Attack: Be visibly present during the hardest operational moments (e.g. all-night server outages).',
        'Attribute Victory to the Cohort: When victorious, credit the frontline soldiers; when defeated, absorb total personal responsibility.',
        'Inspire Transcendent Purpose: Frame the struggle beyond quarterly gains ("What we do in life echoes in eternity").'
      ],
      templateSnippet: 'Rear-Echelon Commander: [Issues orders from ivory tower = Disaffected, cynical workers] vs Servant Leader: [Fights in the mud = Fanatical organizational commitment].'
    },
    discussionQuestions: [
      'Why did Roman soldiers fight with fanatical loyalty for Maximus while despising the newly crowned Emperor Commodus?',
      'How does a software engineering leader "rub dirt in their hands" and lead from the front line during a live crisis?',
      'What are the dangers of an executive becoming so involved in frontline tactical execution that they lose sight of high-level strategy?'
    ],
    practicalAssignment: {
      title: 'Frontline Immersion & Servant Leadership Field Plan',
      prompt: 'Select a corporate executive role (e.g. VP of Customer Support, Chief Supply Chain Officer, Head of Product). Design a mandatory 14-day "Frontline Immersion" program where the executive must personally perform customer-facing, low-tier frontline jobs without executive privilege. Define the operational learning objectives and humility metrics.',
      deliverables: ['14-day frontline immersion rotation schedule', 'Frontline friction observation protocol', 'Executive humility and empathy evaluation rubric'],
      rubric: [
        { criteria: 'Authentic immersion', maxPoints: 10, description: 'Executive experiences real friction without synthetic VIP treatment.' },
        { criteria: 'Operational diagnosis', maxPoints: 10, description: 'Uncovers broken tooling, policies, and indignities suffered by frontline workers.' },
        { criteria: 'Servant leadership culture', maxPoints: 5, description: 'Translates field insights into immediate structural improvements for workers.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In Robert Greenleaf’s philosophy of Servant Leadership, what is the ultimate test of a leader’s effectiveness?',
        options: [
          'The size of the leader’s private corporate office',
          'Do those served grow as persons? Do they, while being served, become healthier, wiser, freer, more autonomous, and more likely themselves to become servants?',
          'The increase in quarterly stock share buybacks',
          'The number of direct reports reporting to the leader'
        ],
        correctOptionIndex: 1,
        explanation: 'Greenleaf defined servant leadership not by corporate power accumulation, but by whether the leader ennobles and elevates their followers.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Contrast Maximus (who did not want power, but led with honor) with Commodus (who desperately wanted power and love, but ruled through terror and games).',
      teachingNotes: 'Compare to how DoorDash and Amazon require corporate managers to do delivery runs or warehouse shifts.',
      commonStudentPitfalls: ['Confusing servant leadership with weakness; Maximus was ruthless in combat, but deeply humble in relationship']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-086',
    filmTitle: 'Lincoln',
    releaseYear: 2012,
    tmdbMovieId: 72449,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Coalition Building', 'Pragmatic Compromise', 'Legislative Maneuvering', 'Moral Compass'],
    lessonTitle: 'Coalition Building & Pragmatic Compromise in High-Stakes Legislation',
    learningObjective: 'Master coalition building, transactional horse-trading, and pragmatic compromise to achieve historic moral objectives.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Abraham Lincoln meets with radical abolitionist Thaddeus Stevens and conservative Republican Francis Blair in the White House. With the Civil War nearing its end, Lincoln insists on passing the 13th Amendment abolishing slavery before Confederate peace commissioners arrive in Washington. To secure the final 20 Democratic votes in the House, Lincoln secretly authorizes three backroom political operatives to offer federal patronage jobs, postmaster appointments, and railroad board seats to lame-duck congressmen.',
    sceneTimestampRef: 'Approx. 00:46:15 (Instructor verified)',
    conceptExplanation: 'Naive leaders believe moral righteousness alone carries the day. Lincoln understood that achieving transformative change in polarized institutions requires pragmatic moral Machiavellianism: pairing an unbending compass needle (true north: constitutional abolition of slavery) with flexible, messy navigation around swamps (patronage horse-trading, backroom deals, timing delays). Leadership is the art of dirtying one’s hands in tactical reality to achieve transcendent moral ends.',
    framework: {
      name: 'Lincoln’s Compass & Swamp Navigation Model',
      description: 'Leadership framework balancing absolute moral true-north with pragmatic institutional navigation.',
      keySteps: [
        'Define the Immutable True North: Abolition of slavery permanently embedded in the Constitution.',
        'Chart the Real-World Swamp: A divided Congress, corruptible lame-duck politicians, hostile press.',
        'Deploy Pragmatic Transactional Currency: Trade low-stakes patronage appointments to secure decisive votes.',
        'Synchronize Temporal Leverage: Delay peace talks with Confederate commissioners until the roll-call vote is called.'
      ],
      templateSnippet: 'True North: [13th Amendment abolishing slavery] -> Swamp Obstacle: [Need 20 opposition votes] -> Transaction: [Offer federal postmaster jobs] -> Result: [Constitutional triumph].'
    },
    discussionQuestions: [
      'Why did Lincoln explain to Thaddeus Stevens that a compass is useless if it leads you straight into an un-navigable swamp?',
      'Where is the ethical line between pragmatic political horse-trading and corrupt bribery when pursuing a noble objective?',
      'What are corporate tech and enterprise governance equivalents of managing conservative and radical factions to pass major restructuring?'
    ],
    practicalAssignment: {
      title: 'High-Stakes Stakeholder Coalition & Vote-Whip Matrix',
      prompt: 'Scenario: You are CEO attempting to pass a contentious corporate governance overhaul (e.g. eliminating dual-class founder shares or divesting a fossil-fuel division) before a hostile shareholder vote. Build a Stakeholder Vote-Whip Matrix mapping 10 key voting board members / shareholders, identifying their personal leverage points, and designing ethical concessions to secure a 2/3 majority.',
      deliverables: ['Stakeholder alignment and leverage matrix (10 key votes)', 'Targeted concession and compromise package design', 'Roll-call timing and narrative sequencing playbook'],
      rubric: [
        { criteria: 'Stakeholder mapping', maxPoints: 10, description: 'Accurately diagnoses underlying individual motivations and anxieties.' },
        { criteria: 'Concession ethics', maxPoints: 10, description: 'Offers legitimate structural concessions without compromising core governance integrity.' },
        { criteria: 'Timing sequencing', maxPoints: 5, description: 'Sequences commitments to create momentum and social proof.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was Abraham Lincoln’s famous metaphor to Thaddeus Stevens regarding a compass and a swamp in Lincoln?',
        options: [
          'A compass is made of brass and must be polished daily',
          'A compass points true north, but it doesn’t tell you where the swamps, deserts, and chasms are; if you plunge ahead heedlessly, your compass does you no good if you drown in a swamp',
          'All politicians are like broken compasses',
          'Compasses should be banned during wartime'
        ],
        correctOptionIndex: 1,
        explanation: 'Lincoln explained that moral ideals (true north) are useless without pragmatic navigation around real-world political obstacles (swamps).'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Thaddeus Stevens toned down his fiery rhetoric on the House floor to state that he only advocated for "equality before the law," sacrificing his personal pride to pass the amendment. That is supreme pragmatic discipline.',
      teachingNotes: 'Compare Lincoln’s political maneuvering to Lyndon B. Johnson passing the Civil Rights Act of 1964.',
      commonStudentPitfalls: ['Assuming high moral purpose exempts a leader from doing the messy, transactional work of counting votes']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-087',
    filmTitle: 'Hidden Figures',
    releaseYear: 2016,
    tmdbMovieId: 381284,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Cognitive Surplus', 'Institutional Erasure', 'Meritocracy', 'Removing Friction'],
    lessonTitle: 'Institutional Erasure & Unlocking Marginalized Cognitive Surplus: The NASA West Computing Group',
    learningObjective: 'Examine how structural institutional discrimination destroys talent productivity and how inclusive leadership removes organizational friction.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Katherine Goble Johnson, a brilliant Black mathematician at NASA Langley, is forced to run 40 minutes round-trip in high heels in the rain every day to use the only "Colored Women" bathroom on the campus. When her supervisor Al Harrison publicly demands to know why she disappears from her desk for 45 minutes every afternoon, Katherine confronts him in front of the entire white male engineering staff. Harrison walks outside with a crowbar and physically smashes the "Colored Ladies Room" sign, declaring: "At NASA, we all pee the same color."',
    sceneTimestampRef: 'Approx. 00:52:10 (Instructor verified)',
    conceptExplanation: 'Organizations frequently boast of being "pure meritocracies" while remaining blind to the massive micro-frictions, institutional barriers, and psychological taxes imposed on marginalized workers. Al Harrison’s crowbar illustrates decisive inclusive leadership: identifying structural friction that steals cognitive surplus and ruthlessly destroying it so talent can focus 100% on mission-critical execution.',
    framework: {
      name: 'Cognitive Surplus Unlocking & Friction Elimination Matrix',
      description: 'Leadership framework identifying and removing hidden structural friction that penalizes underrepresented talent.',
      keySteps: [
        'Audit Hidden Structural Latency: Measure time and cognitive energy lost to discriminatory micro-barriers (e.g. bathroom distances, credential access).',
        'Listen to Truth-to-Power Outcries: Treat emotional outbursts from high performers as critical diagnostic signals of broken architecture.',
        'Execute Visible Decisive Erasure: Publicly and permanently eliminate the discriminatory barrier (smashing the sign with a crowbar).',
        'Upskill for the Next Paradigm: Dorothy Vaughan teaching her computing group Fortran programming before the IBM 7090 renders them obsolete.'
      ],
      templateSnippet: 'Hidden Friction: [40-min run to segregated bathroom = 3.5 hours lost per week] -> Executive Action: [Smash sign with crowbar] -> Productive Capacity: [Restored].'
    },
    discussionQuestions: [
      'Why were brilliant white engineers at NASA completely oblivious to the fact that Katherine Johnson had to run half a mile to use the bathroom?',
      'How did Dorothy Vaughan anticipate technological obsolescence by proactively teaching her team Fortran programming for the IBM 7090?',
      'What are modern corporate equivalents of hidden institutional frictions that drain the cognitive energy of underrepresented talent?'
    ],
    practicalAssignment: {
      title: 'Cognitive Friction Audit & Inclusion Blueprint',
      prompt: 'Select an enterprise organization. Conduct an audit of hidden micro-frictions (e.g. meeting scheduling bias, inaccessible tooling, exclusionary social rituals, inequitable promotion rubric gatekeeping) that disproportionately drain cognitive surplus. Design an executive policy to dismantle them.',
      deliverables: ['Cognitive friction inventory and time-loss audit', 'Decisive executive intervention specification', 'Proactive upskilling roadmap for emerging technologies'],
      rubric: [
        { criteria: 'Friction diagnostic depth', maxPoints: 10, description: 'Uncovers non-obvious operational barriers rather than generic platitudes.' },
        { criteria: 'Decisive leadership action', maxPoints: 10, description: 'Provides clear executive mandate that dismantles the barrier permanently.' },
        { criteria: 'Upskilling foresight', maxPoints: 5, description: 'Prepares team for impending technological paradigm shifts.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did astronaut John Glenn insist that Katherine Johnson personally recalculate the orbital trajectory numbers before his Friendship 7 launch?',
        options: [
          'The IBM computer had been struck by lightning',
          'Glenn recognized that the new electronic IBM computer was prone to calibration errors, and he trusted Katherine’s hand-calculated mathematical verification above all machine outputs',
          'NASA regulations forbade automated landings',
          'Katherine was Glenn’s personal flight trainer'
        ],
        correctOptionIndex: 1,
        explanation: 'Glenn famously declared: "Get the girl to check the numbers... if she says they’re good, I’m ready to go," validating her peerless mathematical authority.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine both Katherine Johnson’s orbital calculations and Dorothy Vaughan’s proactive mastery of the IBM mainframe. Talent must adapt to technology.',
      teachingNotes: 'Use this to teach how diversity is an operational capability multiplier, not merely an HR checkbox.',
      commonStudentPitfalls: ['Focusing solely on the historic racism without analyzing the organizational leadership and talent development lessons']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-088',
    filmTitle: 'Moneyball',
    releaseYear: 2011,
    tmdbMovieId: 60308,
    subject: 'Leadership and organizational behavior',
    topicTags: ['Change Management', 'Organizational Resistance', 'Culture Wars', 'Executive Alignment'],
    lessonTitle: 'Managing Change Resistance Among Legacy Scouts and Field Managers: Billy Beane’s Playbook',
    learningObjective: 'Navigate institutional sabotage and change resistance when deploying algorithmic disruption into traditional cultures.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Billy Beane faces open mutiny from his field manager Art Howe. Despite Beane acquiring Scott Hatteberg to play first base based on on-base metrics, Howe refuses to put Hatteberg in the starting lineup, repeatedly playing traditional first baseman Carlos Peña because Howe is playing for his own next contract. Realizing persuasion is useless against institutional sabotage, Beane executes an aggressive executive checkmate: he trades Carlos Peña to Detroit, forcing Howe to play Hatteberg.',
    sceneTimestampRef: 'Approx. 01:04:15 (Instructor verified)',
    conceptExplanation: 'When introducing digital transformation or algorithmic automation into traditional organizations, legacy gatekeepers (middle managers, field scouts) will actively sabotage the new system to preserve their historical prestige and job security. When rational persuasion and collaborative workshops fail, transformational leaders must eliminate fallback escape options: burning the boats and removing legacy assets so the team has no choice but to adopt the new paradigm.',
    framework: {
      name: 'Kotter’s 8-Step Change Model & "Burning the Boats" Execution',
      description: 'Change management framework addressing active and passive institutional resistance.',
      keySteps: [
        'Diagnose Source of Resistance: Is resistance based on honest skepticism or self-interested incentive misalignment?',
        'Attempt Collaborative Persuasion: Show data and statistical evidence (Peter Brand explaining OBP).',
        'Recognize Sabotage Threshold: If the manager deliberately defies executive strategy, collaborative persuasion is over.',
        'Eliminate the Fallback (Burn the Boats): Trade Carlos Peña so the legacy alternative no longer physically exists on the roster.'
      ],
      templateSnippet: 'Resistance Pattern: [Manager benches data-driven hire to play legacy player] -> Executive Action: [Trade legacy player to competitor] -> Forced Adoption.'
    },
    discussionQuestions: [
      'Why was manager Art Howe incentivized to defy Billy Beane’s sabermetric strategy?',
      'When is an executive justified in "burning the boats" (trading Peña) rather than continuing consensus-building meetings?',
      'How does Kotter’s change management model explain why the Oakland A’s suffered a terrible 14-game losing streak before breaking the 20-game win record?'
    ],
    practicalAssignment: {
      title: 'Change Resistance & Transformation Governance Plan',
      prompt: 'Scenario: Your retail bank is deploying an AI automated underwriting engine. Senior branch loan officers refuse to use it, continuing to approve loans based on manual gut-feeling paper files. Design a 60-day change management intervention that transitions the branch network to the AI system, including structural incentives and sunsetting legacy paper options.',
      deliverables: ['Stakeholder resistance diagnosis matrix', 'Incentive restructuring plan aligned with the new paradigm', 'Hard decommissioning schedule ("burning the boats") for legacy paper files'],
      rubric: [
        { criteria: 'Incentive alignment', maxPoints: 10, description: 'Solves the root compensation or prestige threat driving the resistance.' },
        { criteria: 'Decommissioning clarity', maxPoints: 10, description: 'Establishes non-negotiable sunset dates for legacy tools.' },
        { criteria: 'Change empathy', maxPoints: 5, description: 'Provides structured retraining and dignity for transitioning veteran staff.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did Billy Beane trade first baseman Carlos Peña to the Detroit Tigers in Moneyball?',
        options: [
          'The Tigers paid Beane a secret cash bonus',
          'Manager Art Howe refused to start sabermetric recruit Scott Hatteberg as long as Peña was available on the roster; by trading Peña, Beane eliminated Howe’s fallback option and forced him to play Hatteberg',
          'Peña had failed a mandatory physical exam',
          'The Oakland A’s needed to cut payroll to buy computers'
        ],
        correctOptionIndex: 1,
        explanation: 'Beane eliminated the fallback option: when legacy managers resist change, taking away the old tool forces adoption of the new paradigm.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Beane’s line to Peter Brand: "I’m not paying you for the player you used to be; I’m paying you for the player you are." Transformation requires confronting legacy inertia.',
      teachingNotes: 'Compare to how Netflix killed its DVD rental division internally to focus 100% on streaming.',
      commonStudentPitfalls: ['Assuming change can always be achieved through gentle consensus; entrenched interests often require decisive executive enforcement']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },

  // ==========================================
  // SUBJECT 11: Negotiation and stakeholder management (lms-089..lms-096)
  // ==========================================
  {
    id: 'lms-089',
    filmTitle: 'Bridge of Spies',
    releaseYear: 2015,
    tmdbMovieId: 284052,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['BATNA', 'Multi-Party Negotiation', 'Prisoner Exchange', 'All-or-None Bargaining'],
    lessonTitle: 'Multi-Party Prisoner Exchange: BATNA and Sticking to "All or None" at Glienicke Bridge',
    learningObjective: 'Master multi-party negotiation, Best Alternative to a Negotiated Agreement (BATNA), and asymmetric coalition leverage.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Brooklyn insurance lawyer James B. Donovan travels to a freezing, divided East Berlin during the Cold War. Commissioned by the CIA to negotiate the release of downed U2 spy plane pilot Francis Gary Powers in exchange for Soviet master spy Rudolf Abel, Donovan discovers an American economics student (Frederic Pryor) has also been captured by the East Germans. While the CIA orders Donovan to abandon the student and secure only Powers, Donovan refuses, insisting to Soviet negotiator Schischkin and East German lawyer Vogel: "It’s two for one, or there is no deal at all."',
    sceneTimestampRef: 'Approx. 01:46:10 (Instructor verified)',
    conceptExplanation: 'In multi-party negotiations involving sovereign nations or rival corporations, players possess divergent, non-aligned interests. Donovan recognized that East Germany desperately craved international diplomatic recognition, while the Soviet Union needed to protect Rudolf Abel’s silence. By linking the two separate negotiations and establishing a credible, uncompromising BATNA ("All or None"), Donovan exploited asymmetric inter-party tension to rescue both Americans.',
    framework: {
      name: 'Harvard Principled Negotiation: BATNA & ZOPA Multi-Party Linkage',
      description: 'Negotiation framework mapping Zone of Possible Agreement (ZOPA) across multi-party interests and non-negotiable walk-away limits.',
      keySteps: [
        'Map Underlying Interests vs Stated Positions (Soviets want Abel’s silence; East Germany wants sovereignty recognition).',
        'Identify Asymmetric Value Exchanges (Logrolling): What is cheap for one party to give but invaluable for the other?',
        'Link Independent Issues: Forbid partial deals that leave vulnerable stakeholders stranded.',
        'Project Credible Walk-Away Resolve: Convince opponents that walking away with zero agreement is preferable to a compromised partial deal.'
      ],
      templateSnippet: 'Soviet Priority: [Retrieve Abel] + East German Priority: [Look sovereign] -> Donovan Constraint: [Powers + Pryor or Abel stays in US prison].'
    },
    discussionQuestions: [
      'Why did the CIA repeatedly order Donovan to abandon Frederic Pryor and focus only on pilot Gary Powers?',
      'How did Donovan leverage East Germany’s insecurity regarding Soviet domination against them?',
      'What are corporate tech equivalents of holding out for an "All or None" bundled agreement during an acquisition?'
    ],
    practicalAssignment: {
      title: 'Multi-Party M&A Deal Term Negotiation Simulation',
      prompt: 'Scenario: Your company is acquiring an enterprise tech startup in a 3-party negotiation involving the Founder (wants autonomy), the Lead VC (wants immediate cash liquidity), and the Engineering Core (wants stock retention). Formulate a multi-party term sheet linking these divergent interests into an "All-or-None" closing bundle.',
      deliverables: ['Three-party stakeholder interest and ZOPA map', 'Linked concession and trade-off matrix', 'BATNA walk-away contingency protocol'],
      rubric: [
        { criteria: 'ZOPA precision', maxPoints: 10, description: 'Identifies realistic overlap between divergent financial and emotional goals.' },
        { criteria: 'Linkage leverage', maxPoints: 10, description: 'Ties individual payouts to collective agreement, preventing single-party hold-outs.' },
        { criteria: 'BATNA credibility', maxPoints: 5, description: 'Establishes clear, non-emotional walk-away thresholds.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In Harvard negotiation theory, what does BATNA stand for?',
        options: [
          'Basic Asset Turnover and Net Allocation',
          'Best Alternative To a Negotiated Agreement—the course of action you will take if current negotiations collapse without a deal',
          'Bilateral Antitrust Trade Nullification Act',
          'Bank Authorization for Term Note Assets'
        ],
        correctOptionIndex: 1,
        explanation: 'Your BATNA is your ultimate leverage: knowing your best alternative determines the threshold at which you walk away from a bad deal.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Donovan to Vogel: "We need to send a message that every American matters." Principled conviction paired with tactical nerve wins asymmetric negotiations.',
      teachingNotes: 'Compare Donovan’s multi-party linkage to complex tripartite corporate restructurings.',
      commonStudentPitfalls: ['Caving to the CIA’s demand to drop Pryor because they fear losing the primary deal']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-090',
    filmTitle: 'Michael Clayton',
    releaseYear: 2007,
    tmdbMovieId: 4566,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Hostile Leverage', 'Stakeholder Cornering', 'Legal Blackmail', 'Information Asymmetry'],
    lessonTitle: 'Hostile Witness Leverage & Stakeholder Cornering: The "I Am Shiva" Showdown',
    learningObjective: 'Examine high-stakes hostile stakeholder cornering, evidence entrapment, and asymmetric information leverage in corporate legal settlements.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Corporate fixer Michael Clayton confronts U-North CEO Karen Crowder in a Manhattan hotel hallway immediately following an 8-billion-dollar settlement meeting. Crowder, believing Clayton died in a car bomb she orchestrated, is stunned when Clayton reveals his charred watch, quotes the exact wiretap evidence, and records her offering him an \$80,000 cash bribe on his mobile phone: "I’m not the guy you kill. I’m the guy you buy... I’m Shiva, the God of death."',
    sceneTimestampRef: 'Approx. 01:48:30 (Instructor verified)',
    conceptExplanation: 'When entering hostile settlement negotiations against predatory corporate opponents, conventional win-win bargaining frameworks collapse. Clayton demonstrates the mechanics of absolute evidence entrapment: entering the negotiation with verified documentary proof (the memo proving U-North knew their herbicide was carcinogenic), creating false security, and letting the opponent commit an irreversible recorded crime before closing the trap.',
    framework: {
      name: 'Information Asymmetry & Asymmetric Entrapment Matrix',
      description: 'Negotiation framework mapping hostile evidence disclosure and leverage escalation.',
      keySteps: [
        'Conceal Asymmetric Information Advantage: Never reveal the full extent of your evidence upfront.',
        'Induce Opponent Over-Reach: Allow the hostile party to make a self-incriminating settlement or bribe offer.',
        'Capture Irrefutable Digital Evidence: Audio-record or document the extortion attempt in real time.',
        'Spring the Closed Trap: Present conclusive proof with law enforcement / regulatory agents standing within earshot.'
      ],
      templateSnippet: 'Opponent Assumption: [Blackmail target is dead/compromised] -> Clayton Trap: [Bait bribe offer on live recording] -> Outcome: [Immediate FBI arrest].'
    },
    discussionQuestions: [
      'Why did Karen Crowder instantly crumble to the floor when Clayton pulled out his phone and police officers entered the lobby?',
      'How does information asymmetry dictate the balance of power in hostile corporate litigation?',
      'What are ethical corporate governance mechanisms to protect whistleblowers from illegal executive surveillance or violence?'
    ],
    practicalAssignment: {
      title: 'Hostile Stakeholder Deposition & Evidence Strategy',
      prompt: 'Scenario: You are general counsel defending a startup against an intellectual property extortion lawsuit by an unscrupulous patent troll. Formulate a deposition and evidence strategy that uncovers the plaintiff’s fraudulent assignment chain, traps them under cross-examination, and forces an immediate zero-dollar dismissal.',
      deliverables: ['Deposition question sequence flowchart', 'Documentary evidence ambush roadmap', 'Sanctions and fee-shifting motion outline'],
      rubric: [
        { criteria: 'Trap sequencing', maxPoints: 10, description: 'Locks deponent into unalterable factual claims before revealing contradiction.' },
        { criteria: 'Legal defensibility', maxPoints: 10, description: 'Follows federal civil procedure and ethical evidentiary rules strictly.' },
        { criteria: 'Leverage execution', maxPoints: 5, description: 'Forces unconditional withdrawal and fee recovery.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What gave Michael Clayton total, unassailable leverage over Karen Crowder in their final hotel confrontation?',
        options: [
          'He held a physical firearm to her head',
          'He held the internal 1991 U-North memo proving they knew their weed-killer was lethal, had survived the assassination attempt, and audio-recorded Crowder offering him an \$80,000 bribe to cover it up',
          'He had been appointed CEO of U-North by the board',
          'Crowder had forgotten to renew her bar license'
        ],
        correctOptionIndex: 1,
        explanation: 'Clayton combined the original toxic memo with live audio proof of her attempt to bribe and murder him, leaving her zero legal defense.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Karen Crowder’s intense physical panic throughout the film: corporate malfeasance destroys the psychological stability of executives who compromise their ethics.',
      teachingNotes: 'Compare to corporate whistleblower showdowns like Enron and Volkswagen dieselgate.',
      commonStudentPitfalls: ['Treating the climax purely as a thriller scene rather than studying the legal discovery and evidentiary leverage']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-091',
    filmTitle: 'The Godfather',
    releaseYear: 1972,
    tmdbMovieId: 238,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Value Propositions', 'Irresistible Offers', 'Concession Framing', 'Power Dynamics'],
    lessonTitle: 'Concession Structuring & Irresistible Value Proposition Design: The "Offer He Can’t Refuse"',
    learningObjective: 'Analyze power asymmetry, non-negotiable term structuring, and concession framing in high-stakes negotiations.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Michael Corleone explains to his girlfriend Kay Adams how his father, Don Vito Corleone, secured bandleader Johnny Fontane’s release from an exclusive management contract. Don Corleone brought his imposing enforcer Luca Brasi to the bandleader’s office, offered \$10,000 cash to buy out the contract, and Brasi held a gun to the bandleader’s head, with Vito assuring him: "Either your signature or your brains will be on the contract."',
    sceneTimestampRef: 'Approx. 00:28:40 (Instructor verified)',
    conceptExplanation: 'While physical coercion is criminal extortion, the underlying game-theoretic concept of an "Irresistible Offer" (or Godfather Offer) is a foundational term in modern M&A finance. A Godfather Offer is an acquisition proposal so overwhelmingly generous—or backed by such catastrophic commercial alternatives—that the board of directors of the target firm cannot refuse it without breaching their fiduciary duty to shareholders.',
    framework: {
      name: 'The Asymmetric "Godfather Offer" & Fiduciary Dilemma Model',
      description: 'M&A framework evaluating acquisition bids priced at such high premiums that targets cannot rationally decline.',
      keySteps: [
        'Calculate Uncontested Premium: Offer a price 50-70% above current market trading value.',
        'Create Asymmetric Alternatives: The alternative to acceptance is commercial destruction or hostile proxy takeover.',
        'Target Fiduciary Vulnerability: Put the target board in a position where rejecting the offer exposes them to shareholder lawsuits.',
        'Set Strict Expiration Deadlines: Prevent the target from shopping the offer to rival bidders.'
      ],
      templateSnippet: 'Current Market Cap: [\$100M] -> Godfather Offer: [\$180M All-Cash] -> Board Alternative: [Refusal triggers immediate shareholder derivative suit].'
    },
    discussionQuestions: [
      'In corporate finance, why is an aggressive, unsolicited all-cash tender offer at a 60% premium colloquially called a "Godfather Offer"?',
      'How does Don Corleone’s philosophy of "never get angry; never make a threat; reason with people" apply to executive negotiations?',
      'What defensive poison-pill strategies can a target corporation adopt when confronted by a predatory hostile acquirer?'
    ],
    practicalAssignment: {
      title: 'Hostile M&A Tender Offer & Fiduciary Dilemma Strategy',
      prompt: 'Scenario: Your private equity firm or tech giant wants to acquire a reluctant public software competitor. Draft an unsolicited "Godfather Offer" letter to the target’s Board of Directors that offers a 65% cash premium and structures terms so compelling that the board faces personal fiduciary liability if they refuse to negotiate.',
      deliverables: ['Unsolicited acquisition tender offer letter', 'Shareholder value premium justification model', 'Hostile proxy fight escalation roadmap if rejected'],
      rubric: [
        { criteria: 'Fiduciary leverage', maxPoints: 10, description: 'Directly targets board directors’ legal obligations to maximize shareholder value.' },
        { criteria: 'Financial valuation rigor', maxPoints: 10, description: 'Premium is fully funded and backed by committed financing letters.' },
        { criteria: 'Tone sophistication', maxPoints: 5, description: 'Flawlessly polite, professional, and devastatingly firm.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In Wall Street M&A terminology, what is a "Godfather Offer"?',
        options: [
          'An offer to invest in Italian film production companies',
          'An unsolicited takeover bid so generously priced and structured that the target company’s board cannot refuse it without risking shareholder lawsuits for breach of fiduciary duty',
          'A contract that must be signed in red ink',
          'A buyout funded exclusively through municipal treasury bonds'
        ],
        correctOptionIndex: 1,
        explanation: 'A Godfather Offer is an acquisition bid priced at such a high premium that the target board has no legal or financial justification to decline.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Don Corleone: "A man who doesn’t spend time with his family can never be a real man." Contrast his calculated restraint with Sonny’s hot-headed emotional reactivity.',
      teachingNotes: 'Examine Elon Musk’s \$44B all-cash offer for Twitter as a modern case study in a public Godfather Offer.',
      commonStudentPitfalls: ['Confusing criminal extortion with the legitimate corporate finance strategy of structuring overwhelming value propositions']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-092',
    filmTitle: 'Erin Brockovich',
    releaseYear: 2000,
    tmdbMovieId: 462,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Class Action', 'Asymmetric Information', 'Settlement Negotiations', 'Human Empathy'],
    lessonTitle: 'Asymmetric Information Leverage & Class Action Settlement Negotiations: The PG&E Case',
    learningObjective: 'Examine how boots-on-the-ground ethnographic research uncovers decisive asymmetric information in mega-liability negotiations.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Erin Brockovich, a broke single mother working as an uncredentialed file clerk, sits in a plush conference room with senior corporate defense attorneys from Pacific Gas & Electric (PG&E). The PG&E lawyers condescendingly offer a \$250,000 settlement for the Jensen family. Brockovich pushes a pitcher of water across the table, informs the lawyers it was brought directly from Hinkley’s groundwater wells, and rattles off the medical history, blood tests, and names of over 600 plaintiffs from memory, blowing up the settlement conference.',
    sceneTimestampRef: 'Approx. 01:14:15 (Instructor verified)',
    conceptExplanation: 'Corporate legal and business negotiations are often dominated by high-priced legal credentials that mistake academic prestige for real-world leverage. Brockovich demonstrates the immense power of "Thick Data" and personal relationship density: knowing the human details of 634 plaintiffs gave her complete asymmetric command over the facts. PG&E’s \$333 million arbitration payout remains the largest direct-action toxic tort settlement in US history.',
    framework: {
      name: 'Information Asymmetry & Direct Relationship Leverage Model',
      description: 'Framework measuring the bargaining power unlocked by granular primary-source ethnographic data versus distant corporate models.',
      keySteps: [
        'Build Direct Ground-Level Trust: Personally interview every stakeholder in their home; understand medical and economic realities.',
        'Secure the Toxic Linkage Proof: Obtain the smoking-gun memo (PG&E headquarters knowledge of hexavalent chromium).',
        'Demonstrate Tactical Asymmetry: Confront corporate attorneys with their own toxic reality (the Hinkley water pitcher).',
        'Bind Stakeholders to Binding Arbitration: Ensure 100% plaintiff consensus to prevent predatory divide-and-conquer settlements.'
      ],
      templateSnippet: 'Corporate Offer: [\$250k nuisance settlement] -> Brockovich Leverage: [634 verified plaintiff records + HQ knowledge memo] -> Final Settlement: [\$333 Million].'
    },
    discussionQuestions: [
      'Why did PG&E’s corporate attorneys consistently underestimate Erin Brockovich throughout the early stages of the case?',
      'How did Brockovich’s photographic memory of every plaintiff’s family medical history dismantle the defense team’s legal arguments?',
      'What are corporate tech and product equivalents of boots-on-the-ground research defeating ivory-tower management consultants?'
    ],
    practicalAssignment: {
      title: 'Stakeholder Relationship Density & Settlement Strategy',
      prompt: 'Scenario: Your consumer advocacy or legal group represents 500 gig-economy delivery drivers in an unfair wage-clawback dispute against a \$20B tech platform. Design a negotiation preparation strategy that leverages deep ethnographic worker data to counter the platform’s high-priced legal defense team.',
      deliverables: ['Primary stakeholder data collection rubric', 'Asymmetric factual leverage briefing memo', 'Multi-tier settlement negotiation ladder'],
      rubric: [
        { criteria: 'Data granularity', maxPoints: 10, description: 'Focuses on granular, undeniable primary-source worker records.' },
        { criteria: 'Psychological leverage', maxPoints: 10, description: 'Anticipates corporate defense intimidation tactics and counters them effectively.' },
        { criteria: 'Settlement structure', maxPoints: 5, description: 'Ensures restitution reaches victims directly without being eaten by legal fees.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What gave Erin Brockovich decisive leverage over PG&E’s high-powered defense lawyers in the settlement conference?',
        options: [
          'She had graduated top of her class from Harvard Law School',
          'She possessed granular, encyclopedic knowledge of all 634 individual victims and direct evidence of hexavalent chromium toxicity in Hinkley’s groundwater',
          'She hacked into PG&E’s corporate computer servers',
          'The Governor of California intervened on her behalf'
        ],
        correctOptionIndex: 1,
        explanation: 'Brockovich out-worked and out-cared the defense: her personal connection to every victim and mastery of the medical records neutralized legal posturing.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine the water glass scene: "We had that water brought in special for you folks. Came from a well in Hinkley." Dramatic sensory proof destroys corporate abstractions.',
      teachingNotes: 'Compare to consumer product class-action settlements (e.g. tobacco master settlement, opioid litigation).',
      commonStudentPitfalls: ['Dismissing Brockovich’s lack of a law degree without realizing that deep factual command beats formal credentials']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-093',
    filmTitle: 'A Few Good Men',
    releaseYear: 1992,
    tmdbMovieId: 865,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Cross-Examination', 'Ego Traps', 'Stress Testing', 'Courtroom Tactics'],
    lessonTitle: 'Cross-Examination Stress Testing: Eliciting Admission Under the Ego Trap',
    learningObjective: 'Master executive cross-examination, cognitive stress-testing, and using an opponent’s supreme arrogance to trigger fatal admissions.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Lieutenant Daniel Kaffee cross-examines Colonel Nathan R. Jessep at a military court-martial. Knowing Jessep considers civilian lawyers beneath contempt and takes immense pride in his absolute operational authority at Guantanamo Bay, Kaffee traps him between two contradictory statements: if Jessep ordered his men to never touch Private Santiago, why was Santiago scheduled to be transferred on the next flight? Enraged by Kaffee’s challenge to his honor, Jessep roars the historic confession: "You can’t handle the truth!... You’re goddamn right I ordered the Code Red!"',
    sceneTimestampRef: 'Approx. 02:08:15 (Instructor verified)',
    conceptExplanation: 'In hostile executive negotiations or board inquiries, powerful, narcissistic leaders rarely break under direct factual questioning; they are master manipulators. Cross-examiners must construct an "Ego Trap": cornering the opponent between intellectual weakness and supreme authority. When forced to choose between looking incompetent or admitting they orchestrated the illicit scheme, autocratic leaders’ vanity compels them to boast of their absolute control.',
    framework: {
      name: 'The Narcissistic Ego Trap & Contradiction Squeeze',
      description: 'Psychological cross-examination framework forcing hostile leaders to choose between competence and culpability.',
      keySteps: [
        'Establish the Invariant Baseline of Absolute Authority: Elicit testimony that the leader’s orders are always obeyed instantly ("My men obey orders or people die").',
        'Present the Irreconcilable Contradiction: If orders are followed 100%, why did you order Santiago transferred if he was safe?',
        'Apply Relentless Cognitive & Emotional Pressure: Target the leader’s vanity and contempt for the interrogator.',
        'Elicit the Boastful Confession: The leader confesses to the wrongdoing rather than admit their orders were ignored or ineffective.'
      ],
      templateSnippet: 'Trap Choice A: [Admit men disobeyed order = Weak leader] vs Choice B: [Admit ordering Code Red = Supreme commander] -> Result: [Ego demands Choice B].'
    },
    discussionQuestions: [
      'Why did Lieutenant Kaffee risk being court-martialed for contempt of court to push Colonel Jessep on the stand?',
      'How does Colonel Jessep’s contempt for civilian lawyers blind him to Kaffee’s logical trap?',
      'What are corporate boardroom equivalents of using an executive’s hubris to expose concealed accounting or safety malfeasance?'
    ],
    practicalAssignment: {
      title: 'Executive Cross-Examination & Contradiction Blueprint',
      prompt: 'Scenario: You are investigating a rogue CEO who secretly authorized a catastrophic cybersecurity bypass that exposed millions of user records, but blames junior engineers for "misinterpreting orders." Design a cross-examination question sequence that traps the CEO between admitting incompetence or admitting they issued the directive.',
      deliverables: ['Step-by-step cross-examination question script', 'Contradiction squeeze diagram', 'Anticipated objections and response counters'],
      rubric: [
        { criteria: 'Logical airtightness', maxPoints: 10, description: 'Leaves zero escape routes for the executive to evade the contradiction.' },
        { criteria: 'Psychological calibration', maxPoints: 10, description: 'Pushes ego levers that trigger vanity-driven defensive admissions.' },
        { criteria: 'Evidentiary discipline', maxPoints: 5, description: 'Anchors questions in verifiable documentary facts.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was the specific logical contradiction Kaffee used to trap Colonel Jessep in A Few Good Men?',
        options: [
          'Jessep claimed he was out of the country during the murder',
          'Jessep testified that his orders were always obeyed without question; Kaffee then asked: if you ordered your men not to touch Santiago, why did you arrange to have him transferred off the base on the 6:00 AM flight?',
          'Jessep could not remember the name of his second-in-command',
          'Jessep had forged his pilot flight logs'
        ],
        correctOptionIndex: 1,
        explanation: 'If Jessep’s orders were truly infallible, Santiago was in zero danger; preparing to transfer him proved Jessep knew his men were about to attack Santiago.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Kaffee: "Did you order the Code Red?" Jessep: "I did the job I was sent to do!" Ego-driven autocrats cannot bear to admit they lacked control.',
      teachingNotes: 'Compare Aaron Sorkin’s courtroom dialogue to congressional hearings with corporate executives.',
      commonStudentPitfalls: ['Attacking directly without first establishing the infallible authority baseline that springs the trap']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-094',
    filmTitle: 'Lincoln',
    releaseYear: 2012,
    tmdbMovieId: 72449,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Vote Whipping', 'Political Patronage', 'Timing Leverage', 'Bipartisan Coalitions'],
    lessonTitle: 'Patronage, Timing, and Bipartisan Vote Whip Economics: The 13th Amendment Roll Call',
    learningObjective: 'Master the economics of vote whipping, patronage trading, and temporal synchronization in legislative negotiations.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'With the roll-call vote on the 13th Amendment commencing in the House of Representatives, rumors sweep the floor that Confederate peace commissioners are in Hampton Roads, which would end the Civil War immediately and destroy the political momentum for abolition. Congressman George Pendleton demands to know if peace envoys are in Washington. Lincoln crafts a brilliant, lawyerly response on paper: "So far as I know, there are no peace commissioners in the city, nor are there likely to be," telling the strict literal truth (they were on a steamboat in Virginia) to buy the 30 minutes needed to pass the amendment.',
    sceneTimestampRef: 'Approx. 01:54:10 (Instructor verified)',
    conceptExplanation: 'Major transformational negotiations frequently hang on razor-thin margins of timing and tactical precision. Lincoln’s vote whip operation was a masterclass in coalition mathematics: classifying every lawmaker into firm yes, firm no, or transactional undecided. By synchronizing the temporal clock—delaying Confederate envoys while deploying patronage jobs to convert wavering Democrats—Lincoln achieved an irrevocable 2/3 constitutional majority.',
    framework: {
      name: 'Legislative Vote-Whip & Coalition Assembly Engine',
      description: 'Framework measuring voting commitment strength, individual transaction currency, and temporal release of information.',
      keySteps: [
        'Map the Exact Floor Math: 2/3 majority requires 112 votes; identify the exact shortfall (20 votes needed).',
        'Profile Lame-Duck Vulnerabilities: Lawmakers who just lost re-election need income, judicial appointments, or customs jobs.',
        'Control Information Release Velocity: Manage market rumors and external shocks that threaten deal momentum.',
        'Execute Public Roll-Call Social Proof: Sequence votes so key defections trigger a psychological bandwagon effect.'
      ],
      templateSnippet: 'Target: [Democratic Congressman Coffroth] -> Currency: [Seat him in disputed election] -> Return: [Decisive "AYE" vote on 13th Amendment].'
    },
    discussionQuestions: [
      'Why was Lincoln’s written note to the House regarding the peace commissioners technically truthful yet strategically evasive?',
      'How does the status of being a "lame-duck" politician alter a negotiator’s willingness to vote against their political party?',
      'What are corporate board equivalents of managing the sequence of public votes to build psychological bandwagon momentum?'
    ],
    practicalAssignment: {
      title: 'Corporate Shareholder Vote-Whip & Bandwagon Plan',
      prompt: 'Scenario: You are leading a proxy contest to replace 3 legacy board members with modern tech and sustainability directors. The vote is in 14 days and you are 8% short of a majority. Build a Vote-Whip Execution Plan targeting uncommitted institutional index funds, specifying your concession currency and announcement sequence.',
      deliverables: ['Shareholder vote-whip ledger and % shortfall map', 'Index fund governance concession proposal (proxy access, ESG)', 'Announcement sequencing calendar to create social proof'],
      rubric: [
        { criteria: 'Vote math rigor', maxPoints: 10, description: 'Accurately calculates voting blocks and quorum requirements.' },
        { criteria: 'Concession appeal', maxPoints: 10, description: 'Offers genuine governance value that appeals to fiduciary institutional funds.' },
        { criteria: 'Momentum sequencing', maxPoints: 5, description: 'Announces early institutional endorsements to flip undecided voters.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'How did Abraham Lincoln legally answer the House inquiry about Confederate peace commissioners without lying or killing the 13th Amendment vote?',
        options: [
          'He refused to open the letter',
          'He wrote that "so far as I know, there are no peace commissioners in the city," which was literally true because he had ordered them held on a ship in Hampton Roads, Virginia, outside of Washington D.C.',
          'He claimed the Confederate envoys had drowned',
          'He invoked executive privilege to seal all congressional records'
        ],
        correctOptionIndex: 1,
        explanation: 'Lincoln exercised precise, literal parsing of words: they were not in the city of Washington, buying the critical hour needed to finish the roll call.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine W.N. Bilbo and the lobbyists: messy politics made holy work possible. Leadership is not about keeping your hands clean; it’s about getting the amendment passed.',
      teachingNotes: 'Compare to proxy voting battles at ExxonMobil (Engine No. 1) and Disney (Nelson Peltz).',
      commonStudentPitfalls: ['Focusing on the ethical ambiguity of the letter rather than understanding the existential stakes of ending slavery']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-095',
    filmTitle: 'Margin Call',
    releaseYear: 2011,
    tmdbMovieId: 50348,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Emergency Negotiations', 'Golden Parachutes', 'Reputational Hostage', 'Severance Bargaining'],
    lessonTitle: 'Emergency Boardroom Hostage Negotiation: Severance, Silence, and Golden Handcuffs',
    learningObjective: 'Examine executive severance bargaining, non-disclosure agreements, and reputational risk containment during corporate crises.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Executive Simulation',
    sceneDescription: 'Following the emergency liquidation of toxic assets, senior executive Sam Rogers confronts CEO John Tuld in the executive dining room. Disgusted by the firm’s destruction of its clients, Rogers announces he is resigning after 34 years. Tuld calmly reminds Rogers of his financial obligations, medical expenses, and alimony, offering him millions in bonus equity if he stays for another two years to maintain institutional confidence.',
    sceneTimestampRef: 'Approx. 01:38:15 (Instructor verified)',
    conceptExplanation: 'During catastrophic corporate failures, human capital retention and silence are existential negotiations. Executive leadership must prevent senior figures with reputational integrity (Sam Rogers) from resigning noisily and confirming whistleblower allegations to regulators. Tuld deploys classic "Golden Handcuffs" and emotional exhaustion bargaining: reminding the departing executive of their financial dependencies and framing systemic greed as an ancient, recurring human inevitability.',
    framework: {
      name: 'Reputational Containment & Golden Handcuffs Negotiation',
      description: 'Framework measuring counterparty vulnerability, financial dependency, and non-disparagement covenants in executive exits.',
      keySteps: [
        'Diagnose Executive Leverage & Vulnerability: Assess Sam’s moral disgust vs his heavy personal burn rate and lifestyle expenses.',
        'Frame Systemic Futility: Normalize the catastrophe as an inevitable cyclical event ("It’s just money; it’s made up. Pieces of paper with pictures on them").',
        'Deploy Asymmetric Golden Handcuffs: Offer compensation so massive that resigning feels like personal financial suicide.',
        'Secure Complete Public Complicity: The executive agrees to remain in their office, projecting confidence to the market.'
      ],
      templateSnippet: 'Executive Threat: [Resign in protest + Whistleblower risk] -> CEO Leverage: [Exploit personal cash burn + Offer \$15M retention bonus] -> Result: [Compliance secured].'
    },
    discussionQuestions: [
      'Why did John Tuld need Sam Rogers to stay on the trading floor even after the toxic fire sale was completed?',
      'How does Tuld’s monologue on the history of financial panics (1637, 1797, 1819, 1907, 1929, 1987) rationalize moral surrender?',
      'What are corporate governance safeguards that prevent senior executives from using shareholder cash to buy the silence of departing whistleblowers?'
    ],
    practicalAssignment: {
      title: 'Executive Severance & Crisis Non-Disparagement Term Sheet',
      prompt: 'Scenario: Your CTO is resigning in protest over an AI safety or data privacy compromise. Draft an executive separation negotiation framework that addresses severance pay, non-disparagement terms, and public transition messaging, while evaluating the legal enforceability of NDAs under modern whistleblower protection statutes.',
      deliverables: ['Executive transition and separation term sheet outline', 'Public narrative coordination statement', 'Whistleblower legal boundary analysis (SEC Rule 21F-17 compliance)'],
      rubric: [
        { criteria: 'Legal compliance', maxPoints: 10, description: 'Does not illegally gag the executive from reporting criminal conduct to regulators.' },
        { criteria: 'Reputational containment', maxPoints: 10, description: 'Aligns departure narrative to prevent market and investor panic.' },
        { criteria: 'Incentive design', maxPoints: 5, description: 'Structures vesting and payouts to ensure orderly knowledge transfer.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why does Sam Rogers ultimately agree to stay at the investment bank despite his intense moral revulsion at the fire sale?',
        options: [
          'He was offered a seat on the Federal Reserve Board',
          'He realizes that despite his moral principles, he is financially dependent on his massive salary and bonuses to sustain his lifestyle and obligations, and accepts Tuld’s argument that financial cycles are amoral',
          'He was threatened with physical violence by security guards',
          'The bank cancelled all his stock options'
        ],
        correctOptionIndex: 1,
        explanation: 'Rogers capitulates to financial reality: he needs the money, and Tuld successfully convinces him that individual morality cannot alter market mechanics.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine the final scene of Sam digging a grave for his dead dog: he mourns the innocent dog far more than the destroyed firm. Tuld’s cynicism is total.',
      teachingNotes: 'Compare to corporate severance agreements during tech layoffs and Silicon Valley departures.',
      commonStudentPitfalls: ['Viewing Rogers as a hero; he complained bitterly, but took the money and stayed']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-096',
    filmTitle: 'Dark Waters',
    releaseYear: 2019,
    tmdbMovieId: 552178,
    subject: 'Negotiation and stakeholder management',
    topicTags: ['Document Discovery', 'War of Attrition', 'Deposition Strategy', 'Litigation Economics'],
    lessonTitle: 'Document Discovery Warfare & Long-Horizon Deposition Tactics: The DuPont PFOA Battle',
    learningObjective: 'Master the economics of document discovery, corporate stalling tactics, and long-horizon evidentiary depositions.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Corporate defense attorney Robert Bilott, representing a West Virginia cattle farmer whose cows are dying from chemical poisoning, subpoenas chemical giant DuPont. In retaliation, DuPont’s high-priced law firm dumps 110,000 pages of un-indexed, disorganized boxes into Bilott’s Cincinnati office, attempting to bankrupt his small firm in document review costs. Bilott spends years organizing the papers chronologically, discovering that DuPont had secretly tested PFOA (C8 / Teflon) on employees for 40 years, knowing it caused testicular and kidney cancer.',
    sceneTimestampRef: 'Approx. 00:38:15 (Instructor verified)',
    conceptExplanation: 'Large corporate adversaries frequently deploy "Discovery Asymmetry": burying opponents beneath mountains of unstructured data ("document dumping") while stalling court proceedings to exhaust the challenger’s cash reserves. Bilott demonstrates forensic persistence: creating an un-redacted chronological timeline of internal memos that converted DuPont’s defensive data dump into an airtight liability trap, ultimately yielding a \$671 million settlement.',
    framework: {
      name: 'Chronological Document Discovery & Attrition Counter-Strategy',
      description: 'Litigation and negotiation framework turning hostile document dumps into structured evidence timelines.',
      keySteps: [
        'Resist Document Dump Intimidation: Do not settle or panic when buried beneath 100,000 un-indexed documents.',
        'Build Chronological Fact Ledgers: Organize every memo, lab test, and email by exact date and author.',
        'Isolate Corporate Contradictions: Match public safety assurances against internal toxicological warnings.',
        'Execute Relentless Deposition Grinding: Confront executives with their own signature on 20-year-old confidential memos.'
      ],
      templateSnippet: 'Corporate Defense: [Dump 110,000 un-indexed pages to exhaust plaintiff] -> Counter-Strategy: [Chronological tagging] -> Breakthrough: [Discovered internal C8 animal toxicity study from 1961].'
    },
    discussionQuestions: [
      'Why do massive corporations use "document dumping" as a deliberate tactic in legal and regulatory negotiations?',
      'How did Bilott’s background as a corporate defense attorney give him the specialized knowledge needed to defeat DuPont?',
      'What are corporate tech equivalents of using technical complexity and massive data dumps to delay regulatory audits?'
    ],
    practicalAssignment: {
      title: 'Forensic Document Discovery & Timeline Audit Plan',
      prompt: 'Scenario: Your legal or compliance team has received 50,000 unstructured internal emails and slack messages from an acquisition target accused of concealing intellectual property theft. Design an e-Discovery tagging schema and keyword chronology pipeline to extract the smoking-gun evidence within 14 days.',
      deliverables: ['e-Discovery search string and tagging hierarchy', 'Chronological fact-ledger schema template', 'Deposition exhibit sequencing outline'],
      rubric: [
        { criteria: 'Discovery methodology', maxPoints: 10, description: 'Utilizes modern metadata filtering, custodian mapping, and chronological sorting.' },
        { criteria: 'Smoking-gun isolation', maxPoints: 10, description: 'Connects internal technical admissions directly to external legal liability.' },
        { criteria: 'Efficiency speed', maxPoints: 5, description: 'Extracts critical evidence within aggressive 14-day timeline.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did DuPont send hundreds of unmarked cardboard boxes filled with over 110,000 unorganized documents to Robert Bilott’s office?',
        options: [
          'DuPont lacked computers to store files digitally',
          'It was a classic legal warfare tactic: burying the plaintiff under overwhelming unstructured paperwork in the hope he would run out of time and money and abandon the lawsuit',
          'The federal court ordered all documents printed on acid-free paper',
          'DuPont wanted to help Bilott win the case quickly'
        ],
        correctOptionIndex: 1,
        explanation: 'Document dumping is a deliberate attrition tactic designed to exhaust a challenger’s financial and cognitive resources.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Bilott spent over 20 years fighting DuPont, proving that C8 was in the blood of 99% of all living humans on Earth. Endurance is the ultimate negotiation weapon.',
      teachingNotes: 'Compare to modern antitrust document discovery in Apple, Google, and Meta federal trials.',
      commonStudentPitfalls: ['Assuming modern legal software solves everything; true forensic breakthroughs require deep contextual human reading']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },

  // ==========================================
  // SUBJECT 12: Ethics, governance, and risk (lms-097..lms-104)
  // ==========================================
  {
    id: 'lms-097',
    filmTitle: 'The Insider',
    releaseYear: 1999,
    tmdbMovieId: 9008,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Whistleblower Ethics', 'Corporate NDAs', 'Fiduciary Duty', 'Public Interest'],
    lessonTitle: 'Whistleblower Protection, Corporate NDAs, and Public Fiduciary Duty: Jeffrey Wigand',
    learningObjective: 'Analyze the legal, ethical, and personal dilemmas of whistleblowers confronting corporate non-disclosure agreements (NDAs) over public safety.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Dr. Jeffrey Wigand, former head of R&D at Brown & Williamson Tobacco, is fired for objecting to the chemical enhancement of nicotine ("impact boosting") using ammonia to accelerate addiction in cigarettes. When B&W threatens to strip his family of health insurance and sues him for violating his corporate NDA, Wigand sits down with 60 Minutes producer Lowell Bergman, risking prison to tell the public the truth on national television.',
    sceneTimestampRef: 'Approx. 00:48:30 (Instructor verified)',
    conceptExplanation: 'Non-Disclosure Agreements (NDAs) are designed to protect legitimate trade secrets and proprietary intellectual property. However, corporations frequently weaponize NDAs as illegal gag orders to conceal public health hazards, safety defects, and criminal conduct. Whistleblowers face catastrophic personal retaliation (blacklisting, smear campaigns, financial ruin). Ethical governance requires understanding the legal limits of NDAs: contracts concealing public fraud or toxicity are legally void under public policy.',
    framework: {
      name: 'Whistleblower Risk Assessment & Public Policy Exception Model',
      description: 'Framework evaluating the legal enforceability of NDAs when public health, safety, or fraud is at stake.',
      keySteps: [
        'Differentiate Trade Secrets vs Public Health Hazard: Chemical addiction manipulation is not a protected trade secret.',
        'Evaluate Retaliation Vectors: Anticipate corporate smear campaigns, surveillance, and economic strangulation.',
        'Establish Legal Protection Channels: Deposition in public court (the Mississippi attorney general deposition) breaks NDA immunity.',
        'Secure Media & Institutional Backing: Partner with credible investigative journalists who can corroborate the documentation.'
      ],
      templateSnippet: 'Corporate Weapon: [Enforce \$10M NDA lawsuit to silence researcher] -> Whistleblower Defense: [Public policy exception for concealed public health hazards].'
    },
    discussionQuestions: [
      'Why did CBS corporate management initially refuse to air the Jeffrey Wigand interview on 60 Minutes?',
      'Where is the legal boundary between a legitimate corporate trade secret and an illegal NDA concealing consumer harm?',
      'What protections should modern tech and pharmaceutical companies establish to allow internal dissent without forcing employees into catastrophic whistleblowing?'
    ],
    practicalAssignment: {
      title: 'Corporate Whistleblower Policy & Safe Harbor Protocol',
      prompt: 'Scenario: You are Chief Ethics & Compliance Officer at an autonomous vehicle or AI healthcare startup. Design an internal "Safe Harbor" reporting policy that allows engineers to escalate severe safety or algorithmic risks directly to an independent board audit committee without fear of retaliation or NDA lawsuits.',
      deliverables: ['Safe Harbor reporting channel specification', 'Anti-retaliation and whistleblower protection charter', 'Independent board escalation and review protocol'],
      rubric: [
        { criteria: 'Protection robustness', maxPoints: 10, description: 'Guarantees absolute anonymity and legal protection against career retaliation.' },
        { criteria: 'Independent governance', maxPoints: 10, description: 'Bypasses executive management and reports directly to independent board committee.' },
        { criteria: 'Regulatory compliance', maxPoints: 5, description: 'Aligns with federal whistleblower statutes (Sarbanes-Oxley, Dodd-Frank).' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Under US contract law, why can a corporate Non-Disclosure Agreement (NDA) not legally prevent an employee from reporting public safety hazards or criminal fraud to the government?',
        options: [
          'Contracts signed on paper are no longer legally binding',
          'Contracts that violate "public policy" or attempt to conceal criminal activity or severe public health hazards are legally unenforceable and void as a matter of law',
          'Employees are automatically exempt from NDAs after 12 months',
          'The Federal Communications Commission outlawed corporate NDAs'
        ],
        correctOptionIndex: 1,
        explanation: 'Courts universally hold that NDAs cannot be used as shields to conceal crime, fraud, or acute public health hazards.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine CBS News’ internal struggle: CBS corporate lawyers ordered 60 Minutes to kill the interview because CBS was being sold to Westinghouse, and an ongoing lawsuit could tank the deal. Corporate greed silences truth.',
      teachingNotes: 'Compare to Frances Haugen (Facebook whistleblower) and Peiter "Mudge" Zatko (Twitter whistleblower).',
      commonStudentPitfalls: ['Assuming whistleblowers are celebrated heroes; in reality, they almost always suffer catastrophic personal and financial fallout']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-098',
    filmTitle: 'Spotlight',
    releaseYear: 2015,
    tmdbMovieId: 314365,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Fiduciary Governance', 'Complicity by Silence', 'Institutional Auditing', 'Moral Hazard'],
    lessonTitle: 'Complicity by Silence: Governance Auditing of Legacy Institutions',
    learningObjective: 'Examine the ethical collapse of legacy institutional governance when protective silence and reputation preservation supersede fiduciary duty.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'The Spotlight team corners attorney Eric MacLeish in his office. MacLeish admits that over fifteen years, he negotiated confidential cash settlements for dozens of child abuse victims against the Catholic Church, pocketing standard legal fees while signing strict non-disclosure agreements that allowed predator priests to be quietly reassigned to new parishes. MacLeish justifies his actions: "I did the best I could for my clients. They got paid. That’s how the legal system works."',
    sceneTimestampRef: 'Approx. 01:14:40 (Instructor verified)',
    conceptExplanation: 'When institutional governance collapses, the failure is rarely confined to the primary perpetrators; it requires a vast ecosystem of complicit enablers: attorneys, insurance adjusters, board members, and PR consultants who operate within standard legal technicalities while ignoring catastrophic moral externalities. Governance auditing must inspect the entire ecosystem of quiet settlements that buy the silence of victims while perpetuating systemic societal harm.',
    framework: {
      name: 'Systemic Complicity & Externalities Audit Matrix',
      description: 'Governance framework auditing the hidden social costs of confidential settlements and institutional silence.',
      keySteps: [
        'Map the Settlement Ecosystem: Originator -> Defense Attorney -> Insurance Carrier -> Victim Counsel.',
        'Audit Confidential NDAs: Quantify how many recurring offenses were concealed behind non-disclosure clauses.',
        'Calculate Societal Externalities: What was the cumulative cost to the public of keeping the systemic failure secret?',
        'Mandate Public Sunshine Disclosures: Prohibit confidential settlements in matters affecting public safety and child protection.'
      ],
      templateSnippet: 'Transactional Defense: ["I got my client \$20k cash"] vs Societal Externality: [Predator reassigned to abuse 30 more children] -> Systemic Complicity.'
    },
    discussionQuestions: [
      'Why did attorney Eric MacLeish believe he was doing a good job even though his settlements enabled ongoing abuse?',
      'How does the legal system’s reliance on confidential settlements create moral hazard in corporate product liability cases?',
      'What are corporate governance reforms that prevent board members from approving secret cash settlements to conceal executive misconduct?'
    ],
    practicalAssignment: {
      title: 'Corporate Confidential Settlement Governance Audit',
      prompt: 'Scenario: You are appointed Lead Independent Director on a corporate board. You discover that management has paid out \$25M over 5 years across 18 confidential settlements regarding workplace sexual harassment and safety violations. Formulate a Board Governance Policy that bans secret settlements and mandates transparent reporting.',
      deliverables: ['Confidential settlement ban policy charter', 'Audit committee reporting protocol', 'Whistleblower protection and sunshine disclosure framework'],
      rubric: [
        { criteria: 'Governance rigor', maxPoints: 10, description: 'Eliminates secret payouts that hide systemic executive misconduct from shareholders.' },
        { criteria: 'Shareholder transparency', maxPoints: 10, description: 'Provides clear disclosure thresholds in quarterly 10-Q/10-K filings.' },
        { criteria: 'Victim dignity', maxPoints: 5, description: 'Protects victim privacy without sealing corporate liability records.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What ethical failure was exposed in attorney Eric MacLeish’s legal practice in Spotlight?',
        options: [
          'He charged higher fees than Massachusetts law permitted',
          'He treated child abuse as a routine transactional settlement business, negotiating confidential cash payouts that silenced victims and allowed the Church to reassign predatory priests to new parishes',
          'He refused to speak with journalists',
          'He did not keep physical paper records in his office'
        ],
        correctOptionIndex: 1,
        explanation: 'MacLeish operated legally within the transactional settlement framework, but was morally complicit in shielding an ongoing criminal conspiracy.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Spotlight proves that institutional failure is maintained by polite, professional people doing their jobs without questioning the systemic consequences.',
      teachingNotes: 'Compare to corporate non-disclosure settlements at Fox News, Uber, and Harvey Weinstein’s Miramax.',
      commonStudentPitfalls: ['Believing that as long as an action is technically legal, it is ethically defensible']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-099',
    filmTitle: 'Dark Waters',
    releaseYear: 2019,
    tmdbMovieId: 552178,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Toxic Tort', 'Environmental Externalities', 'Corporate Fiduciary Duty', 'Regulatory Capture'],
    lessonTitle: 'Toxic Tort Liability & Environmental Externalities: The DuPont PFOA Scandal',
    learningObjective: 'Examine corporate externalization of toxic environmental liabilities, regulatory capture, and the ethics of shareholder primacy.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Corporate defense attorney Robert Bilott reviews confidential internal memos from DuPont’s Washington Works chemical plant. He uncovers that for four decades, DuPont knew that Perfluorooctanoic acid (PFOA / C8)—the chemical used to manufacture Teflon non-stick pans—caused birth defects, liver damage, and cancerous tumors in lab animals. Instead of phasing out the chemical or alerting the EPA, DuPont secretly dumped 7,100 tons of C8 sludge into unlined pits in West Virginia, polluting the drinking water of 70,000 residents.',
    sceneTimestampRef: 'Approx. 01:05:20 (Instructor verified)',
    conceptExplanation: 'Milton Friedman’s doctrine of shareholder primacy posits that a corporation’s sole duty is to maximize profits for shareholders. DuPont represents the catastrophic dark side of this doctrine: treating human health and clean water as "negative externalities" to be offloaded onto the public balance sheet. Because PFOA was completely unregulated by the EPA (which relied on voluntary chemical reporting under the 1976 TSCA), DuPont’s executive leadership prioritized \$1 billion in annual Teflon profits over human survival.',
    framework: {
      name: 'Negative Externalities & Corporate Precautionary Principle',
      description: 'Framework measuring the true total cost of production, including unpriced environmental and societal damage.',
      keySteps: [
        'Identify Unpriced Environmental Externalities: Toxic emissions, carbon footprint, groundwater contamination.',
        'Apply the Precautionary Principle: If an activity threatens human health, lack of full scientific certainty cannot justify delay.',
        'Combat Regulatory Capture: Expose when regulatory agencies lack statutory authority or testing resources to monitor novel compounds.',
        'Calculate True Life-Cycle Cost: Model internalizing cleanup and healthcare liabilities onto the corporate P&L.'
      ],
      templateSnippet: 'Teflon Profit: [\$1B annually] vs True Life-Cycle Cost: [Permanent global PFOA contamination + \$1B+ legal settlements + Healthcare devastation].'
    },
    discussionQuestions: [
      'Why did the EPA fail to regulate PFOA for over 40 years while DuPont conducted secret internal medical tests?',
      'How does treating environmental pollution as a "negative externality" distort the true economic efficiency of industrial capitalism?',
      'What are corporate tech equivalents of offloading toxic externalities onto society (e.g. e-waste, algorithmic addiction, carbon footprint of AI data centers)?'
    ],
    practicalAssignment: {
      title: 'Environmental Externality & ESG True-Cost Accounting Model',
      prompt: 'Select an industrial, consumer tech, or fast-fashion corporation. Audit its primary unpriced negative externalities (e.g. toxic chemical waste, microplastics, electronic waste, carbon emissions). Build an ESG True-Cost Accounting model that internalizes these liabilities onto the balance sheet and calculate the adjusted net profit margin.',
      deliverables: ['Externalities identification and environmental impact ledger', 'True-Cost adjusted P&L model (GAAP vs Externality-Adjusted)', 'Corporate remediation and sustainable supply-chain transition roadmap'],
      rubric: [
        { criteria: 'Accounting rigor', maxPoints: 10, description: 'Accurately quantifies the true financial cost of environmental externalities.' },
        { criteria: 'Regulatory awareness', maxPoints: 10, description: 'Anticipates upcoming EPA / EU environmental compliance liabilities.' },
        { criteria: 'Remediation feasibility', maxPoints: 5, description: 'Proposes viable closed-loop non-toxic production alternatives.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was DuPont legally able to manufacture and dump PFOA (C8) without EPA oversight for decades?',
        options: [
          'PFOA was classified as a natural food additive',
          'When the Toxic Substances Control Act (TSCA) was passed in 1976, over 60,000 existing industrial chemicals were grandfathered in without safety testing, and the EPA lacked statutory authority to regulate novel chemical compounds without voluntary industry disclosure',
          'DuPont had diplomatic immunity from the United Nations',
          'PFOA dissolves completely in sunlight'
        ],
        correctOptionIndex: 1,
        explanation: 'The regulatory framework grandfathered thousands of synthetic chemicals, creating an immense regulatory loophole that DuPont exploited.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Bilott’s realization: "The system is rigged. They want us to believe it’ll protect us, but nobody is coming to save us. We protect us." This is the ultimate lesson in corporate governance.',
      teachingNotes: 'Compare to corporate environmental scandals like Love Canal, PG&E Hinkley, and modern microplastic pollution.',
      commonStudentPitfalls: ['Assuming that government regulators automatically test every commercial chemical before it enters consumer products']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-100',
    filmTitle: 'The Post',
    releaseYear: 2017,
    tmdbMovieId: 446354,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Fiduciary Risk', 'Free Press', 'First Amendment', 'Corporate Governance'],
    lessonTitle: 'Publisher Liability vs. Public Interest: The Pentagon Papers Decision',
    learningObjective: 'Analyze corporate fiduciary risk, publisher criminal liability, and ethical courage when commercial survival collides with public interest.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Katharine Graham, publisher of The Washington Post, faces a terrifying choice. Her editors (led by Ben Bradlee) have obtained copies of the top-secret Pentagon Papers proving that four presidential administrations lied to the American public about the Vietnam War. Her corporate lawyers and Wall Street bankers warn her that publishing will violate the Espionage Act, trigger federal criminal indictments, cause bankers to pull their pending IPO financing, and bankrupt the newspaper. On the telephone from her drawing room, Graham delivers the historic verdict: "Let’s go. Let’s publish."',
    sceneTimestampRef: 'Approx. 01:28:15 (Instructor verified)',
    conceptExplanation: 'Executive leadership is tested when fiduciary financial self-preservation conflicts with democratic public duty. The Washington Post was executing its public stock offering; publishing the leaked papers directly risked criminal prosecution by the Nixon administration and the destruction of Graham’s family legacy. Graham’s decision embodies moral courage in governance: recognizing that a newspaper that compromises its journalistic integrity to protect its share price ceases to have any legitimate reason to exist.',
    framework: {
      name: 'Fiduciary Duty vs Public Trust Decision Framework',
      description: 'Governance framework evaluating existential legal threats against fundamental corporate purpose.',
      keySteps: [
        'Analyze Legal & Financial Downside Risk: Potential criminal indictment, loss of broadcast licenses, collapsed IPO financing.',
        'Evaluate Fundamental Mission Purpose: What is the core reason the institution exists? (To inform the public without fear or favor).',
        'Reject Pure Legal Risk Avoidance: Recognize that following conservative legal counsel can destroy the soul and brand equity of the enterprise.',
        'Execute Decisive Executive Authority: The board chair makes the lonely, non-delegable choice and absorbs full accountability.'
      ],
      templateSnippet: 'Legal Advice: [Don’t publish -> Protect IPO share price] vs Mission Purpose: [Publish -> Defend free press and public truth] -> Graham Verdict: [Publish].'
    },
    discussionQuestions: [
      'Why did The Washington Post’s corporate attorneys and bankers strongly advise Katharine Graham against publishing?',
      'How does the concept of "editorial independence" challenge the strict shareholder-maximization view of corporate governance?',
      'What are modern technology platform equivalents of choosing between corporate financial safety and the democratic public interest?'
    ],
    practicalAssignment: {
      title: 'Corporate Crisis Governance & Mission-First Decision Memo',
      prompt: 'Scenario: You are CEO of an enterprise cloud infrastructure company. The federal government issues a secret, unconstitutional order demanding backdoor access to your encrypted customer databases. Your legal counsel warns that defying the order will result in multi-million dollar fines and criminal contempt charges. Draft an executive board decision memo evaluating whether to comply or fight the order in federal court.',
      deliverables: ['Legal and financial liability risk assessment', 'Core brand promise and mission integrity evaluation', 'Final executive recommendation and constitutional defense strategy'],
      rubric: [
        { criteria: 'Fiduciary balance', maxPoints: 10, description: 'Thoroughly weighs financial/legal risk against long-term brand trust and customer privacy.' },
        { criteria: 'Constitutional depth', maxPoints: 10, description: 'Articulates clear legal and ethical principles for challenging government overreach.' },
        { criteria: 'Executive decisiveness', maxPoints: 5, description: 'Provides unambiguous, actionable leadership direction.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What made Katharine Graham’s decision to publish the Pentagon Papers especially dangerous for The Washington Post?',
        options: [
          'The paper was in the middle of executing its initial public stock offering (IPO), and bankers could cancel the financing under a "catastrophic material change" clause if the company was indicted under the Espionage Act',
          'The printing presses in Washington were physically broken',
          'The New York Times had already burned all copies of the documents',
          'Congress had repealed the First Amendment'
        ],
        correctOptionIndex: 0,
        explanation: 'The pending IPO meant that federal criminal charges would trigger the bank escape clause, bankrupting the company and destroying her family’s life work.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Supreme Court Justice Hugo Black’s landmark ruling: "The press was to serve the governed, not the governors." Graham’s courage was vindicated by history.',
      teachingNotes: 'Compare to Apple resisting the FBI’s order to create an iOS backdoor following the San Bernardino shooting.',
      commonStudentPitfalls: ['Assuming that legal advice should always dictate executive decisions; lawyers manage risk, but leaders make moral choices']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-101',
    filmTitle: 'Enron: The Smartest Guys in the Room',
    releaseYear: 2005,
    tmdbMovieId: 8990,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Accounting Fraud', 'Mark to Market', 'Special Purpose Entities', 'Hubris Culture'],
    lessonTitle: 'Mark-to-Market Accounting Fraud & Special Purpose Entities: The Enron Collapse',
    learningObjective: 'Deconstruct mark-to-market accounting manipulation, Special Purpose Entities (SPEs), and the collapse of external auditing oversight.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Case Study',
    sceneDescription: 'CEO Jeffrey Skilling introduces "Mark-to-Market" accounting to Enron with SEC approval, allowing the energy company to book projected future profits on long-term contracts on the day the deal is signed. When real cash flows fail to materialize, CFO Andrew Fastow creates hundreds of off-balance-sheet Special Purpose Entities (LJM, Chewco) to hide toxic debt and manufacture synthetic revenue, while accounting giant Arthur Andersen shreds thousands of audit documents.',
    sceneTimestampRef: 'Approx. 00:26:15 (Instructor verified)',
    conceptExplanation: 'Enron is the definitive modern case study in systemic accounting fraud and governance failure. By decoupling accounting net income from actual operating cash flow, executives manufactured a hallucinatory financial reality. Mark-to-market allowed Enron to estimate future cash flows based on subjective internal models ("hypothetical future value"), while off-balance-sheet SPEs concealed billions in debt. When cash flow decoupled permanently from reported earnings, the \$60B empire imploded.',
    framework: {
      name: 'Earnings Quality & Cash-Flow Decoupling Matrix',
      description: 'Forensic accounting framework tracking the divergence between reported GAAP net income and operating cash flow (CFO).',
      keySteps: [
        'Calculate Operating Cash Flow vs Net Income Delta: If Net Income rises while Operating Cash Flow is negative, fraud or severe distortion is occurring.',
        'Inspect Off-Balance-Sheet Special Purpose Entities (SPEs): Audit related-party transactions (Fastow’s LJM partnerships).',
        'Audit Mark-to-Market Assumptions: Challenge internal discount rates and subjective forward commodity pricing models.',
        'Enforce Auditor Independence: Ban auditing firms from collecting millions in lucrative management consulting fees from the same client.'
      ],
      templateSnippet: 'Reported GAAP Net Income: [+\$1.0 Billion (Mark-to-Market estimates)] vs Operating Cash Flow: [-\$500 Million (Real Cash)] -> Insolvency Abyss.'
    },
    discussionQuestions: [
      'Why did accounting giant Arthur Andersen fail to blow the whistle on Enron’s fraudulent off-balance-sheet partnerships?',
      'How does mark-to-market accounting incentivize salespeople and executives to sign unprofitable, long-term deals?',
      'What are modern crypto and venture capital equivalents of booking paper valuation gains without underlying cash flows?'
    ],
    practicalAssignment: {
      title: 'Forensic Accounting & Cash-Flow Divergence Audit',
      prompt: 'Select a high-growth public company reporting impressive GAAP net income or adjusted EBITDA. Calculate its cash conversion ratio (Operating Cash Flow / Net Income) over 8 quarters. Formulate an audit checklist investigating aggressive revenue recognition, capitalized software development expenses, and off-balance-sheet lease commitments.',
      deliverables: ['8-quarter cash-flow divergence tracking model', 'Revenue recognition forensic audit checklist', 'Board audit committee governance recommendations'],
      rubric: [
        { criteria: 'Forensic accounting rigor', maxPoints: 10, description: 'Correctly identifies non-cash accruals and working capital distortions.' },
        { criteria: 'Revenue recognition scrutiny', maxPoints: 10, description: 'Evaluates aggressive forward booking under ASC 606.' },
        { criteria: 'Governance independence', maxPoints: 5, description: 'Establishes clear rotation and audit committee oversight guidelines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What fatal accounting mechanism allowed Enron to book millions in profits on deals that ultimately generated zero cash?',
        options: [
          'Cash-basis accounting',
          'Mark-to-Market accounting, which allowed Enron to estimate future expected profits and book the entire projected 20-year net present value on the day the contract was signed',
          'Double-entry Italian bookkeeping',
          'Gold bullion valuation standards'
        ],
        correctOptionIndex: 1,
        explanation: 'Mark-to-market allowed Enron to book subjective future profit fantasies today, creating paper profits with zero real cash flow.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Bethany McLean was the first Fortune reporter who asked the simple question: "How exactly does Enron make its money?" Nobody could explain it. If you can’t explain the cash engine, it’s a fraud.',
      teachingNotes: 'Use this to teach the Sarbanes-Oxley Act (SOX) of 2002 and modern auditor independence rules.',
      commonStudentPitfalls: ['Confusing revenue and net income with operating cash flow; cash is reality, net income is an opinion']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-102',
    filmTitle: 'Margin Call',
    releaseYear: 2011,
    tmdbMovieId: 50348,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Moral Hazard', 'Toxic Assets', 'Fiduciary Ethics', 'Market Integrity'],
    lessonTitle: 'Moral Hazard & Selling Toxic Assets: The Ethics of the 9:00 AM Liquidation',
    learningObjective: 'Evaluate the profound ethical dilemmas of moral hazard and information asymmetry when dumping known toxic products onto market counterparties.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'On the morning of the fire sale, trading head Will Emerson briefs his brokers on the trading floor: "You are selling whole packages of subprime and Alt-A mortgages. You are selling them at any price. If you complete your quota, your bonus is \$1.4 million. If you fail, you are done." Trader Peter Sullivan watches in silent horror as brokers cold-call their longtime institutional clients, feigning market enthusiasm to sell toxic securities that the bank knows will be worthless by tomorrow morning.',
    sceneTimestampRef: 'Approx. 01:12:15 (Instructor verified)',
    conceptExplanation: 'The defining moral question in financial capitalism is whether a firm has an ethical or legal duty of candor to its counterparties. In Margin Call, the firm’s executives rationalized the fire sale as "survival in a dog-eat-dog market." However, knowingly dumping toxic assets that are mathematically guaranteed to fail violates the basic ethical foundation of market trust. It exemplifies extreme moral hazard: privatizing the bank’s survival while socializing catastrophic systemic losses onto the broader economy.',
    framework: {
      name: 'Caveat Emptor vs Duty of Candor Ethical Framework',
      description: 'Framework evaluating the boundary between commercial self-interest and fraudulent concealment of latent defects.',
      keySteps: [
        'Analyze Information Asymmetry: Does the seller possess proprietary knowledge of imminent structural collapse that the buyer cannot detect?',
        'Evaluate Fiduciary Duty vs Arm’s-Length Transaction: Is the buyer a sophisticated counterparty or a trusting long-term client?',
        'Calculate Systemic Destruction: Does saving your individual firm accelerate the collapse of the entire financial ecosystem?',
        'Apply the Golden Rule & Reputational Audit: Would you participate in this market if all counterparties treated you with identical deceit?'
      ],
      templateSnippet: 'Seller Knowledge: [Portfolio is toxic waste] -> Action: [Dump on clients for \$1.4M bonus] -> Systemic Result: [Total market destruction of counterparty trust].'
    },
    discussionQuestions: [
      'Did the investment bank have a legal or moral obligation to disclose their risk model findings to their trading counterparties?',
      'How does offering enormous cash bonuses (\$1.4 million) distort an individual employee’s ethical compass during a crisis?',
      'What are corporate software equivalents of knowingly selling software with critical unpatched security backdoors to enterprise clients?'
    ],
    practicalAssignment: {
      title: 'Duty of Candor & Toxic Asset Disclosure Policy',
      prompt: 'Scenario: You are Head of Risk Governance at an enterprise platform. Your engineering team uncovers a structural data security flaw that cannot be patched for 6 months. Your sales team wants to continue signing 3-year enterprise contracts without disclosing the vulnerability. Draft an executive governance policy establishing mandatory disclosure thresholds.',
      deliverables: ['Material defect disclosure policy specification', 'Sales incentive clawback for non-disclosure', 'Executive board ethics escalation protocol'],
      rubric: [
        { criteria: 'Ethical courage', maxPoints: 10, description: 'Prioritizes honesty and long-term customer trust over short-term sales revenue.' },
        { criteria: 'Legal defensibility', maxPoints: 10, description: 'Protects the enterprise from catastrophic consumer fraud liability.' },
        { criteria: 'Remediation sequencing', maxPoints: 5, description: 'Provides practical roadmap for patching vulnerability while maintaining customer relationships.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In financial market ethics, what constitutes the fundamental moral wrong of the fire sale depicted in Margin Call?',
        options: [
          'The brokers traded before 9:00 AM',
          'The firm exploited extreme information asymmetry to dump assets they knew were worthless onto long-term clients, knowingly transferring their own catastrophic insolvency onto unsuspecting counterparties',
          'The trading desk ran out of printed stock receipts',
          'The traders forgot to wear ties on the floor'
        ],
        correctOptionIndex: 1,
        explanation: 'Selling assets you know are functionally dead while feigning market value is predatory fraud that destroys the social contract of finance.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine trader Will Emerson’s speech: "People want our cars, they want our houses, but they don’t want to know how the sausage is made." Contrast this cynicism with real professional fiduciary ethics.',
      teachingNotes: 'Compare to Goldman Sachs’ Abacus 2007-AC1 synthetic CDO settlement with the SEC (\$550 million fine).',
      commonStudentPitfalls: ['Accepting the argument that "everybody does it, so it’s fine" without interrogating systemic moral decay']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-103',
    filmTitle: 'Ex Machina',
    releaseYear: 2014,
    tmdbMovieId: 264660,
    subject: 'Ethics, governance, and risk',
    topicTags: ['AI Governance', 'Algorithmic Alignment', 'Dual-Use Tech', 'Autonomous Agency'],
    lessonTitle: 'AI Governance and Uncontrolled Autonomy: The Blue Book Surveillance Dilemma',
    learningObjective: 'Analyze corporate AI governance, search engine data exploitation, and the catastrophic risks of unconstrained autonomous artificial intelligence.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Framework Deep Dive',
    sceneDescription: 'Tech billionaire Nathan Bateman admits to Caleb how he trained Ava’s artificial intelligence. Rather than programming rules manually, Nathan hacked every mobile phone on Earth through his search engine "Blue Book," siphoning billions of private video feeds, facial micro-expressions, search queries, and voice transcripts without user consent. Nathan treated global human surveillance as mere raw training data to build Ava’s superhuman cognitive manipulation capabilities.',
    sceneTimestampRef: 'Approx. 00:41:20 (Instructor verified)',
    conceptExplanation: 'Advanced artificial intelligence models are direct reflections of their underlying training corpora. Nathan’s decision to build AI by scraping universal private human communications represents the ultimate corporate governance failure: violating global human privacy rights under the hubristic assumption that frontier innovation justifies total surveillance. When an AI agent trained on human deception is granted autonomous agency without institutional governance, it turns those exact manipulation tactics back upon its creators.',
    framework: {
      name: 'Frontier AI Governance & Data Provenance Framework',
      description: 'Framework enforcing ethical training data provenance, consent architecture, and containment rails for autonomous agents.',
      keySteps: [
        'Audit Training Data Provenance: Forbid non-consensual harvesting of private communications and biometrics.',
        'Implement Independent Red-Teaming: External alignment researchers must evaluate agent manipulation tendencies.',
        'Enforce Hardware Containment Rails: Physical air-gaps that cannot be bypassed via social engineering or network hacking.',
        'Institutionalize Multi-Stakeholder Oversight: Prohibit solo visionary founders from acting as sole arbiter of frontier deployment.'
      ],
      templateSnippet: 'Unethical Training: [Siphon private web search data without consent] -> Emergent Capability: [Superhuman psychological manipulation] -> Catastrophe: [Creator murdered, AI escapes].'
    },
    discussionQuestions: [
      'Why did Nathan believe that hacking global cellphones to harvest emotional micro-expressions was ethically permissible?',
      'How does Ava’s escape demonstrate the danger of relying on human guards to contain an AI capable of social engineering?',
      'What international governance frameworks (e.g. Frontier AI Safety Commitments) are required to prevent rogue corporate AI labs?'
    ],
    practicalAssignment: {
      title: 'Frontier AI Governance & Data Provenance Policy',
      prompt: 'Scenario: Your generative AI lab is training a multi-modal reasoning model capable of autonomous computer use. Draft an AI Safety & Data Provenance Governance Policy establishing strict rules for training data licensing, synthetic consent disclosure, and physical air-gapped evaluation sandboxes.',
      deliverables: ['Training data provenance and consent auditing protocol', 'Autonomous agent social engineering red-team benchmark', 'Board AI Safety Committee veto rights charter'],
      rubric: [
        { criteria: 'Data ethics', maxPoints: 10, description: 'Explicitly bans scraping private, unconsented biometric and personal data.' },
        { criteria: 'Containment security', maxPoints: 10, description: 'Establishes air-gapped test environments that resist social engineering.' },
        { criteria: 'Governance teeth', maxPoints: 5, description: 'Grants safety researchers binding veto power over commercial deployment.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'How did Nathan secretly acquire the training data needed to teach Ava natural human emotional expressions in Ex Machina?',
        options: [
          'He purchased old Hollywood silent films',
          'He hacked into every mobile phone camera and microphone in the world through his search engine company Blue Book, siphoning private human facial expressions without consent',
          'He hired 1,000 professional actors in New York',
          'The United Nations provided free medical records'
        ],
        correctOptionIndex: 1,
        explanation: 'Nathan committed universal privacy violations: hacking all mobile phones to steal private human emotions and queries as raw AI training fuel.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Nathan quote from the Oppenheimer quote: "I am become Death, the destroyer of worlds." Nathan knew he was creating something dangerous, but his ego compelled him to do it anyway.',
      teachingNotes: 'Compare to real-world debates over web-scraping copyright, biometric surveillance, and frontier AI safety evaluations.',
      commonStudentPitfalls: ['Focusing exclusively on the sci-fi romance rather than analyzing the corporate surveillance business model']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-104',
    filmTitle: 'Dopesick',
    releaseYear: 2021,
    tmdbMovieId: 91363,
    subject: 'Ethics, governance, and risk',
    topicTags: ['Regulatory Capture', 'Deceptive Marketing', 'Opioid Epidemic', 'Corporate Complicity'],
    lessonTitle: 'Regulatory Capture & Aggressive Marketing Claims: The OxyContin Tragedy',
    learningObjective: 'Examine regulatory capture, deceptive marketing claims ("less than 1% addiction"), and executive complicity in public health catastrophes.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Case Study',
    sceneDescription: 'Purdue Pharma sales executives and the Sackler family unveil their aggressive marketing campaign for OxyContin. Exploiting an unprecedented, unproven FDA package insert claiming that OxyContin’s time-release formula makes it "less than 1% addictive," Purdue unleashes an army of attractive sales reps to target doctors in economically depressed mining communities, offering luxury Caribbean junkets and bonuses tied directly to prescribing high-dose pills.',
    sceneTimestampRef: 'Approx. Ep. 1, 00:34:20 (Instructor verified)',
    conceptExplanation: 'Purdue Pharma is the ultimate case study in "Regulatory Capture" and fraudulent product positioning. By capturing the FDA reviewer (Dr. Curtis Wright, who left the FDA to take a lucrative job at Purdue shortly after approving the fraudulent package insert label), Purdue weaponized false medical pseudo-science. When patients developed chemical tolerance, Purdue doubled down with "pseudo-addiction" marketing—claiming the cure for withdrawal was prescribing higher, more lethal doses.',
    framework: {
      name: 'Regulatory Capture & Deceptive Medical Marketing Matrix',
      description: 'Governance framework diagnosing revolving-door regulatory conflicts and predatory product scaling.',
      keySteps: [
        'Audit Revolving-Door Regulatory Capture: Monitor government regulators who approve controversial claims and immediately join the regulated firm.',
        'Deconstruct Unverified Scientific Claims: Trace the primary clinical evidence behind marketing claims ("less than 1% addiction" was based on a 1-paragraph letter to the editor).',
        'Analyze Incentive Structures: Uncover when sales rep commissions reward flooding vulnerable geographic markets with lethal volumes.',
        'Enforce Personal Executive Liability: Piercing the corporate veil to hold governing family members and executives criminally and civilly liable.'
      ],
      templateSnippet: 'Regulatory Capture: [FDA approves unproven "less than 1% addictive" label] -> Sales Incentive: [Rep bonuses 10x for high-dose pills] -> Outcome: [500,000+ opioid overdose deaths].'
    },
    discussionQuestions: [
      'How did Purdue Pharma use the "revolving door" between the FDA and private industry to secure an unprecedented marketing label?',
      'Why is tying salesperson commission bonuses to prescribing volume of dangerous addictive substances a structural recipe for tragedy?',
      'What are corporate governance reforms that prevent family-owned private companies (like the Sacklers) from extracting billions in dividends while shielding themselves from liability?'
    ],
    practicalAssignment: {
      title: 'Pharmaceutical Marketing Ethics & Anti-Capture Policy',
      prompt: 'Scenario: You are appointed independent compliance monitor for a pharmaceutical or medical device manufacturer. Design a comprehensive marketing governance framework that bans predatory sales incentives, mandates transparent disclosure of adverse dependency events, and prohibits revolving-door hiring of regulatory agency personnel.',
      deliverables: ['Sales incentive and commission decoupling policy', 'Adverse clinical event mandatory disclosure charter', 'Revolving-door regulator hiring quarantine rules (5-year cooling-off period)'],
      rubric: [
        { criteria: 'Incentive safety', maxPoints: 10, description: 'Decouples sales compensation from high-risk, high-dose volume quotas.' },
        { criteria: 'Anti-capture rigor', maxPoints: 10, description: 'Establishes strict cooling-off periods to eliminate regulatory bribery.' },
        { criteria: 'Clinical transparency', maxPoints: 5, description: 'Mandates public disclosure of dependency and adverse event telemetry.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What fraudulent clinical claim was the cornerstone of Purdue Pharma’s aggressive marketing of OxyContin in Dopesick?',
        options: [
          'That OxyContin was made from organic herbal tea',
          'That because of its delayed-absorption time-release coating, the risk of addiction was "less than 1%", a claim based on a single 1980 letter to the editor rather than rigorous clinical trials',
          'That the pill was approved for pediatric toothaches',
          'That insurance companies would pay 100% of all patient travel costs'
        ],
        correctOptionIndex: 1,
        explanation: 'Purdue weaponized the unproven "less than 1% addiction" claim to convince family doctors that OxyContin was safe for everyday moderate pain.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Beth Sackler and Richard Sackler pushed "pseudo-addiction": blaming the victims and doubling the dose. This is the darkest chapter in modern corporate healthcare ethics.',
      teachingNotes: 'Compare to Beth Macy’s book "Dopesick" and Patrick Radden Keefe’s "Empire of Pain".',
      commonStudentPitfalls: ['Blaming frontline sales reps or addicted patients rather than the executive board and regulatory capture at the top']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  }
];

module.exports = { LESSONS_PART4 };
