import { UserProfile, Cohort, AssignmentSubmission, LearningProgress } from '@/types/lms';

export const INITIAL_USERS: UserProfile[] = [
  {
    id: 'user-student-01',
    name: 'Sarah Chen',
    email: 'sarah.chen@stanford.edu',
    role: 'student',
    mbaProgram: 'Stanford Graduate School of Business',
    specialization: 'Tech & Product Management',
    experienceLevel: 'Mid-Career PM (4 yrs in Enterprise SaaS)',
    learningGoals: [
      'Transition from Senior PM to Director of Product',
      'Master capital allocation and M&A valuation dynamics',
      'Lead cross-functional teams through technological crises'
    ],
    preferredTopics: [
      'Product discovery and user research',
      'Product strategy and roadmaps',
      'Prioritization and product metrics',
      'Growth and go-to-market'
    ],
    cohortId: 'cohort-01',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
    dataSharingConsent: true,
    analyticsConsent: true,
    createdAt: '2026-01-10T09:00:00Z'
  },
  {
    id: 'user-instructor-01',
    name: 'Prof. Julian Vance',
    email: 'jvance@hbs.edu',
    role: 'instructor',
    mbaProgram: 'Harvard Business School',
    specialization: 'Technology Strategy & Competitive Dynamics',
    experienceLevel: 'Clinical Professor of Business Administration',
    learningGoals: [
      'Pioneer cinematic case-method pedagogy in MBA curricula',
      'Train next-generation tech and product executives'
    ],
    preferredTopics: [
      'Product strategy and roadmaps',
      'Leadership and organizational behavior',
      'Negotiation and stakeholder management',
      'Ethics, governance, and risk'
    ],
    cohortId: 'cohort-01',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    dataSharingConsent: true,
    analyticsConsent: true,
    createdAt: '2025-09-01T08:00:00Z'
  },
  {
    id: 'user-admin-01',
    name: 'Elena Rostova',
    email: 'elena.rostova@businesscut.edu',
    role: 'admin',
    mbaProgram: 'Wharton Executive Education',
    specialization: 'Academic Technology & Institutional Governance',
    experienceLevel: 'Director of Digital Learning Platforms',
    learningGoals: [
      'Maintain rigorous TMDB metadata attribution and licensing',
      'Ensure institutional accessibility and data sovereignty'
    ],
    preferredTopics: [
      'Operations and supply chain',
      'Ethics, governance, and risk'
    ],
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    dataSharingConsent: true,
    analyticsConsent: true,
    createdAt: '2025-08-15T08:00:00Z'
  }
];

export const INITIAL_COHORTS: Cohort[] = [
  {
    id: 'cohort-01',
    name: 'Fall 2026 Product Leadership Fellows',
    term: 'Fall 2026',
    instructorId: 'user-instructor-01',
    studentCount: 38,
    assignedLessonIds: ['lms-001', 'lms-002', 'lms-011', 'lms-019', 'lms-064', 'lms-080', 'lms-089', 'lms-097']
  },
  {
    id: 'cohort-02',
    name: 'Executive MBA Cohort 14 (Tech & Media)',
    term: 'Spring 2026',
    instructorId: 'user-instructor-01',
    studentCount: 29,
    assignedLessonIds: ['lms-010', 'lms-012', 'lms-020', 'lms-037', 'lms-063', 'lms-083', 'lms-101']
  },
  {
    id: 'cohort-03',
    name: 'Silicon Valley Founders & Venture Fellows',
    term: 'Winter 2026',
    instructorId: 'user-instructor-01',
    studentCount: 42,
    assignedLessonIds: ['lms-003', 'lms-004', 'lms-018', 'lms-038', 'lms-054', 'lms-056', 'lms-103']
  }
];

export const INITIAL_PROGRESS: Record<string, LearningProgress> = {
  'lms-001': {
    lessonId: 'lms-001',
    status: 'completed',
    timeSpentSeconds: 2100,
    lastActivityDate: '2026-02-18T14:30:00Z',
    bookmarked: true,
    quizScore: 100,
    quizAttempts: 1,
    quizPassed: true,
    notes: 'Key takeaway: Jobs avoided standard feature polling because user imagination is bound by current workflows. Push/Pull forces are crucial.'
  },
  'lms-002': {
    lessonId: 'lms-002',
    status: 'completed',
    timeSpentSeconds: 1850,
    lastActivityDate: '2026-02-19T11:20:00Z',
    bookmarked: true,
    quizScore: 100,
    quizAttempts: 1,
    quizPassed: true,
    notes: 'The tennis court layout simulation saved thousands in stainless steel remodeling. Physical blueprinting translates directly to user flow diagrams.'
  },
  'lms-011': {
    lessonId: 'lms-011',
    status: 'in_progress',
    timeSpentSeconds: 980,
    lastActivityDate: '2026-02-21T16:45:00Z',
    bookmarked: false,
    notes: 'Halfway through the Michael Porter competitive advantage section. Ford’s quick-change brake assembly was a decisive operational moat.'
  },
  'lms-019': {
    lessonId: 'lms-019',
    status: 'completed',
    timeSpentSeconds: 2200,
    lastActivityDate: '2026-02-22T09:15:00Z',
    bookmarked: true,
    quizScore: 100,
    quizAttempts: 1,
    quizPassed: true,
    notes: 'On-base percentage: buying wins vs buying players. Deconstruct output metrics into leading input behaviors.'
  },
  'lms-064': {
    lessonId: 'lms-064',
    status: 'in_progress',
    timeSpentSeconds: 720,
    lastActivityDate: '2026-02-23T10:00:00Z',
    bookmarked: true
  }
};

export const INITIAL_SUBMISSIONS: AssignmentSubmission[] = [
  {
    id: 'sub-001',
    assignmentTitle: 'Latent Need Interview Guide & JTBD Canvas',
    lessonId: 'lms-001',
    filmTitle: 'Jobs (2013)',
    userId: 'user-student-01',
    userName: 'Sarah Chen',
    cohortId: 'cohort-01',
    submittedAt: '2026-02-18T15:00:00Z',
    status: 'graded',
    content: `Executive Summary:
For this assignment, I designed a customer discovery interview protocol targeting Enterprise Financial Controllers who currently manage multi-million dollar capital expenditure reconciliations on manual Excel spreadsheets.

1. Five Behavioral Discovery Questions:
- "Walk me through the exact moment last quarter when you realized an expenditure reconciliation had an error. What was happening around you?"
- "When that discrepancy was found, what physical workarounds did you use to patch the gap before the board meeting?"
- "What is the most emotionally stressful part of your month-end closing process that you dread starting on Sunday evening?"
- "Who in your department do you hesitate to delegate reporting to, and why?"
- "Tell me about the last software tool your company purchased for accounting that your team quietly stopped using after 60 days."

2. Four Forces Synthesis:
- Push: Late-night reconciliation panic, spreadsheet version drift, human copy-paste errors.
- Pull: Instant automated audit reconciliation, board-ready exports, zero weekend spreadsheet firefighting.
- Anxiety: Fear of cloud data breach, fear of looking incompetent during the ERP software migration.
- Habit: 15 years of Excel keyboard shortcut muscle memory (VLOOKUP, INDEX-MATCH).

Recommendation:
The product should not market "features", but "closing the books in 15 minutes with zero stress."`,
    grade: 24,
    maxGrade: 25,
    rubricScores: [
      { criteria: 'Behavioral inquiry vs feature polling', score: 10, maxScore: 10 },
      { criteria: 'Four forces rigor', score: 9, maxScore: 10 },
      { criteria: 'Actionable PM takeaway', score: 5, maxScore: 5 }
    ],
    instructorFeedback: 'Outstanding work, Sarah. Question #5 on the shelfware software quietly abandoned after 60 days is a brilliant diagnostic for organizational anxiety and habit inertia.',
    gradedBy: 'Prof. Julian Vance',
    gradedAt: '2026-02-19T08:30:00Z'
  },
  {
    id: 'sub-002',
    assignmentTitle: 'North Star Metric Decomposition & Metric Audit',
    lessonId: 'lms-019',
    filmTitle: 'Moneyball (2011)',
    userId: 'user-student-01',
    userName: 'Sarah Chen',
    cohortId: 'cohort-01',
    submittedAt: '2026-02-22T10:30:00Z',
    status: 'under_review',
    content: `Product: Linear (Issue Tracking for High-Performance Engineering Teams)

1. North Star Metric:
"Weekly Active Workspaces with >= 3 Resolved Pull Requests per Engineer"

2. Decomposition Tree:
- Lagging Metric: Net ARR & Enterprise Seat Expansion (Annual retention).
- Input Metric 1: Time from ticket creation to first git branch checkout (< 2 hours).
- Input Metric 2: Keyboard shortcut velocity (Actions completed via Command+K menu).
- Input Metric 3: Weekly Active Engineers initiating status transitions.

3. Counter-Metric & Guardrail:
Counter-Metric: "Ticket Re-Open Rate within 7 days."
Rationale: If engineers close tickets prematurely just to game the velocity score, bugs leak into production. A spike in ticket re-open rate immediately penalizes the workspace health score.`,
    maxGrade: 25
  }
];
