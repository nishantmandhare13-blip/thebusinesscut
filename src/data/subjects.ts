import { SubjectCategory } from '@/types/lms';

export interface SubjectMetadata {
  id: SubjectCategory;
  title: string;
  shortTitle: string;
  iconName: string;
  colorClass: string;
  bgLightClass: string;
  borderClass: string;
  description: string;
  primaryFrameworks: string[];
}

export const SUBJECT_METADATA: Record<SubjectCategory, SubjectMetadata> = {
  'Product discovery and user research': {
    id: 'Product discovery and user research',
    title: 'Product Discovery & User Research',
    shortTitle: 'Discovery & Research',
    iconName: 'Compass',
    colorClass: 'text-sky-400',
    bgLightClass: 'bg-sky-500/10',
    borderClass: 'border-sky-500/30',
    description: 'Uncovering latent customer needs, ethnographic observation, customer interviews, and validating early problem-solution fit.',
    primaryFrameworks: ['Jobs-to-be-Done (JTBD)', 'Empathy Mapping', 'Customer Journey Mapping', 'Problem Hypothesis Validation']
  },
  'Product strategy and roadmaps': {
    id: 'Product strategy and roadmaps',
    title: 'Product Strategy & Roadmaps',
    shortTitle: 'Strategy & Roadmaps',
    iconName: 'Milestone',
    colorClass: 'text-indigo-400',
    bgLightClass: 'bg-indigo-500/10',
    borderClass: 'border-indigo-500/30',
    description: 'Long-term product positioning, platform defensibility, multi-horizon roadmapping, and technological moats.',
    primaryFrameworks: ['Porter’s Five Forces', 'McKinsey 3 Horizons', 'Blue Ocean Strategy', 'Platform Network Effects']
  },
  'Prioritization and product metrics': {
    id: 'Prioritization and product metrics',
    title: 'Prioritization & Product Metrics',
    shortTitle: 'Prioritization & Metrics',
    iconName: 'BarChart3',
    colorClass: 'text-emerald-400',
    bgLightClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/30',
    description: 'Data-driven decision making, north star metrics, vanity vs. leading metrics, and high-velocity backlog prioritization.',
    primaryFrameworks: ['RICE Scoring', 'Kano Model', 'North Star Metric Hierarchy', 'AARRR Pirate Funnel']
  },
  'Product design and innovation': {
    id: 'Product design and innovation',
    title: 'Product Design & Innovation',
    shortTitle: 'Design & Innovation',
    iconName: 'Palette',
    colorClass: 'text-pink-400',
    bgLightClass: 'bg-pink-500/10',
    borderClass: 'border-pink-500/30',
    description: 'Human-centered system design, rapid physical/digital prototyping, fail-safe ergonomics, and delightful interaction loops.',
    primaryFrameworks: ['Design Thinking 5-Stage', 'Poka-Yoke (Mistake-Proofing)', 'Hook Model (Nir Eyal)', 'Graceful Degradation']
  },
  'Growth and go-to-market': {
    id: 'Growth and go-to-market',
    title: 'Growth & Go-to-Market',
    shortTitle: 'Growth & GTM',
    iconName: 'TrendingUp',
    colorClass: 'text-violet-400',
    bgLightClass: 'bg-violet-500/10',
    borderClass: 'border-violet-500/30',
    description: 'Viral distribution mechanics, closed-beta expansion strategies, high-velocity outbound pipelines, and influencer anchoring.',
    primaryFrameworks: ['Viral Coefficient (K-factor)', 'Crossing the Chasm', 'Inbound vs Outbound GTM Matrix', 'Product-Led Growth (PLG)']
  },
  'Marketing and brand': {
    id: 'Marketing and brand',
    title: 'Marketing & Brand Strategy',
    shortTitle: 'Brand & Marketing',
    iconName: 'Megaphone',
    colorClass: 'text-amber-400',
    bgLightClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30',
    description: 'Narrative positioning, brand equity architecture, subversive product modernization, and high-stakes framing theory.',
    primaryFrameworks: ['Brand Resonance Pyramid (Keller)', 'Framing Theory', 'Brand Archetype Matrix', 'Positioning Statement (Geoffrey Moore)']
  },
  'Entrepreneurship and business models': {
    id: 'Entrepreneurship and business models',
    title: 'Entrepreneurship & Business Models',
    shortTitle: 'Entrepreneurship',
    iconName: 'Rocket',
    colorClass: 'text-cyan-400',
    bgLightClass: 'bg-cyan-500/10',
    borderClass: 'border-cyan-500/30',
    description: 'Pivoting core revenue engines, franchise economics, bootstrapping under extreme constraint, and IP defensibility.',
    primaryFrameworks: ['Business Model Canvas', 'Unit Economic LTV/CAC', 'Lean Canvas', 'Network Density Economics']
  },
  'Finance and unit economics': {
    id: 'Finance and unit economics',
    title: 'Finance & Unit Economics',
    shortTitle: 'Finance & Economics',
    iconName: 'DollarSign',
    colorClass: 'text-green-400',
    bgLightClass: 'bg-green-500/10',
    borderClass: 'border-green-500/30',
    description: 'Cash-flow dynamics, structured debt & securitization, liquidity fire-sales, systemic financial contagion, and LBO mechanics.',
    primaryFrameworks: ['Discounted Cash Flow (DCF)', 'Contribution Margin & Burn Multiple', 'VaR (Value at Risk)', 'Capital Asset Pricing Model (CAPM)']
  },
  'Operations and supply chain': {
    id: 'Operations and supply chain',
    title: 'Operations & Supply Chain',
    shortTitle: 'Operations & Supply',
    iconName: 'Cpu',
    colorClass: 'text-orange-400',
    bgLightClass: 'bg-orange-500/10',
    borderClass: 'border-orange-500/30',
    description: 'Cycle-time reduction, Theory of Constraints, redundancy fail-safes, crisis resource rationing, and maritime logistics.',
    primaryFrameworks: ['Theory of Constraints (Goldratt)', 'Six Sigma DMAIC', 'Takt Time & Lean Flow', 'FMEA (Failure Mode & Effects Analysis)']
  },
  'Leadership and organizational behavior': {
    id: 'Leadership and organizational behavior',
    title: 'Leadership & Organizational Behavior',
    shortTitle: 'Leadership & Teams',
    iconName: 'Users',
    colorClass: 'text-teal-400',
    bgLightClass: 'bg-teal-500/10',
    borderClass: 'border-teal-500/30',
    description: 'Minority dissent persuasion, cross-silo coalition building, psychological safety vs. extreme performance, and symbolic change.',
    primaryFrameworks: ['Psychological Safety Matrix (Edmondson)', 'Kotter 8-Step Change Model', 'Situational Leadership (Hersey-Blanchard)', 'Lencioni 5 Dysfunctions']
  },
  'Negotiation and stakeholder management': {
    id: 'Negotiation and stakeholder management',
    title: 'Negotiation & Stakeholder Management',
    shortTitle: 'Negotiation & Stakeholders',
    iconName: 'Handshake',
    colorClass: 'text-yellow-400',
    bgLightClass: 'bg-yellow-500/10',
    borderClass: 'border-yellow-500/30',
    description: 'Multi-party hostage negotiation, BATNA valuation, asymmetric leverage discovery, and executive courtroom cross-examination.',
    primaryFrameworks: ['Harvard Principled Negotiation (BATNA & ZOPA)', 'Stakeholder Power-Interest Grid', 'Logrolling & Concession Bundling', 'Anchoring & Framing']
  },
  'Ethics, governance, and risk': {
    id: 'Ethics, governance, and risk',
    title: 'Ethics, Governance, & Risk',
    shortTitle: 'Ethics & Governance',
    iconName: 'ShieldAlert',
    colorClass: 'text-rose-400',
    bgLightClass: 'bg-rose-500/10',
    borderClass: 'border-rose-500/30',
    description: 'Whistleblower dilemmas, fiduciary governance breakdowns, toxic externalities, regulatory capture, and algorithmic accountability.',
    primaryFrameworks: ['Stakeholder vs Shareholder Primacy', 'Moral Hazard & Principal-Agent Problem', 'Precautionary Principle', 'Corporate Governance Audit Checklist']
  }
};
