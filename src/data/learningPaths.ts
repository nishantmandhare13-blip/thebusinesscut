import { LearningPath } from '@/types/lms';

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-01',
    title: 'Product Discovery & Customer Validation',
    slug: 'product-discovery-validation',
    description: 'Master qualitative user ethnography, Jobs-to-be-Done (JTBD), empathy mapping, and rapid MVP testing through the lens of iconic cinema.',
    targetRole: 'Aspiring & Junior Product Managers',
    estimatedHours: 6.5,
    subject: 'Product discovery and user research',
    badge: 'Discovery Fellow',
    lessonIds: [
      'lms-001', // Jobs: Latent Needs
      'lms-002', // The Founder: Speedee Ergonomics
      'lms-003', // Chef: MVP Food Truck
      'lms-004', // Air: Extreme Personas
      'lms-005', // Her: Affective AI Intimacy
      'lms-006', // Julie & Julia: Build in Public
      'lms-007', // Ratatouille: Non-Obvious Creators
      'lms-008', // The Social Network: Relationship Status
      'lms-009'  // Ford v Ferrari: Telemetry & Human-in-Loop
    ]
  },
  {
    id: 'path-02',
    title: 'Product Strategy & Competitive Moats',
    slug: 'product-strategy-moats',
    description: 'Long-term portfolio positioning, Michael Porter trade-offs, three-horizon product sequencing, and platform ecosystem lock-in.',
    targetRole: 'Senior Product Managers & Group PMs',
    estimatedHours: 8.0,
    subject: 'Product strategy and roadmaps',
    badge: 'Strategy Strategist',
    lessonIds: [
      'lms-010', // The Aviator: Moonshot Stage-Gate
      'lms-011', // Ford v Ferrari: Disrupting Luxury Incumbent
      'lms-012', // Oppenheimer: Critical Path Method
      'lms-013', // Steve Jobs: NeXT Three-Act Trojan Horse
      'lms-014', // Tetris: Platform Bundling & Game Boy
      'lms-015', // Dunkirk: Triage Strategy
      'lms-016', // Apollo 13: Crisis Roadmapping
      'lms-017', // First Man: TRL Flight De-risking
      'lms-018'  // Pirates of Silicon Valley: Windows vs Mac OS
    ]
  },
  {
    id: 'path-03',
    title: 'Data-Driven Prioritization & Product Metrics',
    slug: 'prioritization-metrics',
    description: 'Overcome cognitive biases, avoid Goodhart’s Law, model North Star input trees, and budget for system reliability error budgets.',
    targetRole: 'Product Leaders & Analytics Directors',
    estimatedHours: 7.5,
    subject: 'Prioritization and product metrics',
    badge: 'Metrics Master',
    lessonIds: [
      'lms-019', // Moneyball: OBP vs Vanity Metrics
      'lms-020', // Margin Call: VaR & Stop-Loss Limits
      'lms-021', // The Big Short: Metric Divergence
      'lms-022', // The Imitation Game: Heuristic Pruning
      'lms-023', // Cast Away: Product Maslow Survival
      'lms-024', // Sully: Dual Latency & OODA Loop
      'lms-025', // Spotlight: Systemic Relational Mining
      'lms-026', // A Beautiful Mind: Nash Equilibrium
      'lms-027'  // Contagion: R0 & K-Factor Virality
    ]
  },
  {
    id: 'path-04',
    title: 'Growth Engines & Go-to-Market Strategy',
    slug: 'growth-gtm-playbook',
    description: 'From atomic campus saturation to creator revenue share and B2B channel partner alignment: the complete GTM masterclass.',
    targetRole: 'Growth PMs, Founders, & Heads of Growth',
    estimatedHours: 7.0,
    subject: 'Growth and go-to-market',
    badge: 'Growth Architect',
    lessonIds: [
      'lms-037', // The Social Network: .edu Exclusivity
      'lms-038', // Air: Creator Royalty Share
      'lms-039', // BlackBerry: Carrier Channel Alignment
      'lms-040', // Joy: Live QVC Commerce
      'lms-041', // Wolf of Wall Street: Straight Line Persuasion
      'lms-042', // Jerry Maguire: Retention-First High-Touch
      'lms-043', // War Dogs: FedBizOpps Procurement
      'lms-044', // The Greatest Showman: Guerrilla Spectacle
      'lms-045'  // Boiler Room: Outbound SDR Pitch Decay
    ]
  },
  {
    id: 'path-05',
    title: 'Corporate Finance, Securitization & LBOs',
    slug: 'finance-unit-economics',
    description: 'Deconstruct Leveraged Buyouts (LBOs), credit default swaps, liquidity fire-sales, systemic bank contagion, and micro-cap manipulation.',
    targetRole: 'Chief Financial Officers & Corporate Strategists',
    estimatedHours: 8.5,
    subject: 'Finance and unit economics',
    badge: 'Finance Titan',
    lessonIds: [
      'lms-063', // The Big Short: CDS Asymmetric Payoff
      'lms-064', // Margin Call: First-Mover Liquidity
      'lms-065', // Wall Street: Blue Star LBO Raid
      'lms-066', // Too Big to Fail: TARP Warrants
      'lms-067', // Rogue Trader: Segregation of Duties
      'lms-068', // Inside Job: Principal-Agent Securitization
      'lms-069', // Barbarians at the Gate: RJR Nabisco Mega-LBO
      'lms-070', // Trading Places: Commodities Futures Short
      'lms-071'  // Boiler Room: Pump and Dump Float Cornering
    ]
  },
  {
    id: 'lms-06',
    title: 'High-Stakes Negotiation & Stakeholder Politics',
    slug: 'high-stakes-negotiation',
    description: 'Master Harvard Principled Bargaining, multi-party linkages, hostage leverage, and legislative vote whipping in hostile environments.',
    targetRole: 'Executive Leaders, General Counsels, & Dealmakers',
    estimatedHours: 7.0,
    subject: 'Negotiation and stakeholder management',
    badge: 'Master Negotiator',
    lessonIds: [
      'lms-089', // Bridge of Spies: Glienicke Bridge BATNA
      'lms-090', // Michael Clayton: Asymmetric Entrapment
      'lms-091', // The Godfather: Godfather Value Offer
      'lms-092', // Erin Brockovich: Thick Data Settlement
      'lms-093', // A Few Good Men: Ego Trap Cross-Examination
      'lms-094', // Lincoln: Vote Whipping Economics
      'lms-095', // Margin Call: Boardroom Severance Bargaining
      'lms-096'  // Dark Waters: Document Discovery Attrition
    ]
  },
  {
    id: 'path-07',
    title: 'Executive Leadership & Organizational Dynamics',
    slug: 'leadership-organizational-behavior',
    description: 'Break tribalism, cultivate minority dissent, build servant frontline credibility, and overcome institutional change resistance.',
    targetRole: 'Chief Executive Officers & Team Directors',
    estimatedHours: 8.0,
    subject: 'Leadership and organizational behavior',
    badge: 'Executive Leader',
    lessonIds: [
      'lms-080', // 12 Angry Men: Dissent Cultivation
      'lms-081', // Remember the Titans: Superordinate Goals
      'lms-082', // Spotlight: Institutional Blind Spots
      'lms-083', // Whiplash: Psychological Safety vs Abuse
      'lms-084', // Invictus: Symbolic Springbok Leadership
      'lms-085', // Gladiator: Frontline Servant Leadership
      'lms-086', // Lincoln: Compass vs Swamp Pragmatism
      'lms-087', // Hidden Figures: Unlocking Cognitive Surplus
      'lms-088'  // Moneyball: Burning the Boats in Change
    ]
  },
  {
    id: 'path-08',
    title: 'Business Ethics, Governance & Corporate Fiduciary Risk',
    slug: 'ethics-governance-risk',
    description: 'Whistleblower dilemmas, toxic externalities, mark-to-market accounting fraud, and frontier artificial intelligence governance.',
    targetRole: 'Board Members, Chief Compliance Officers, & Risk PMs',
    estimatedHours: 7.5,
    subject: 'Ethics, governance, and risk',
    badge: 'Fiduciary Guardian',
    lessonIds: [
      'lms-097', // The Insider: Whistleblower NDAs
      'lms-098', // Spotlight: Complicity by Silence
      'lms-099', // Dark Waters: DuPont PFOA Externalities
      'lms-100', // The Post: Pentagon Papers Decision
      'lms-101', // Enron: Mark-to-Market Fraud
      'lms-102', // Margin Call: Toxic Asset Moral Hazard
      'lms-103', // Ex Machina: AI Data Surveillance
      'lms-104'  // Dopesick: Regulatory Capture & OxyContin
    ]
  }
];
