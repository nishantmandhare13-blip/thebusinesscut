export type UserRole = 'student' | 'instructor' | 'admin';

export type SubjectCategory =
  | 'Product discovery and user research'
  | 'Product strategy and roadmaps'
  | 'Prioritization and product metrics'
  | 'Product design and innovation'
  | 'Growth and go-to-market'
  | 'Marketing and brand'
  | 'Entrepreneurship and business models'
  | 'Finance and unit economics'
  | 'Operations and supply chain'
  | 'Leadership and organizational behavior'
  | 'Negotiation and stakeholder management'
  | 'Ethics, governance, and risk';

export type DifficultyLevel = 'Foundational' | 'Intermediate' | 'Advanced';

export type LessonFormat =
  | 'Case Study'
  | 'Executive Simulation'
  | 'Framework Deep Dive'
  | 'Post-Mortem';

export type VerificationStatus = 'verified' | 'needs_instructor_review' | 'draft';

export type LessonPublishStatus = 'published' | 'draft' | 'review' | 'archived';

export interface Framework {
  name: string;
  description: string;
  keySteps: string[];
  templateSnippet?: string;
}

export interface RubricCriterion {
  criteria: string;
  maxPoints: number;
  description: string;
}

export interface PracticalAssignment {
  title: string;
  prompt: string;
  deliverables: string[];
  rubric: RubricCriterion[];
}

export interface KnowledgeCheckQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface InstructorGuidance {
  answerKeySummary: string;
  teachingNotes: string;
  commonStudentPitfalls: string[];
}

export interface ImageAttribution {
  source: 'tmdb' | 'editorial_placeholder';
  license: string;
  notes: string;
  posterPath?: string | null;
  backdropPath?: string | null;
}

export interface AudioCue {
  title: string;
  description: string;
  transcript: string;
  durationSeconds: number;
  rightsStatus: 'licensed' | 'original' | 'instructor_reference_needed' | 'public_domain';
  audioUrl?: string; // If absent, audio player renders text fallback: "Sound cue: '...' — instructor to add licensed audio"
}

export interface Lesson {
  id: string; // e.g. "lms-001"
  filmTitle: string;
  releaseYear: number;
  tmdbMovieId: number | null;
  subject: SubjectCategory;
  topicTags: string[];
  lessonTitle: string;
  learningObjective: string;
  difficulty: DifficultyLevel;
  durationMinutes: number;
  format: LessonFormat;
  sceneDescription: string; // Original, non-copyrighted description of the scene
  sceneTimestampRef?: string;
  conceptExplanation: string; // Deep business / MBA analysis
  framework: Framework;
  discussionQuestions: string[];
  practicalAssignment: PracticalAssignment;
  knowledgeCheck: KnowledgeCheckQuestion[];
  instructorGuidance: InstructorGuidance;
  verificationStatus: VerificationStatus;
  status: LessonPublishStatus;
  imageAttribution: ImageAttribution;
  audioCue?: AudioCue;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  mbaProgram: string;
  specialization: string;
  experienceLevel: string;
  learningGoals: string[];
  preferredTopics: SubjectCategory[];
  cohortId?: string;
  avatarUrl?: string;
  dataSharingConsent: boolean;
  analyticsConsent: boolean;
  createdAt: string;
}

export interface LearningProgress {
  lessonId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  timeSpentSeconds: number;
  lastActivityDate: string;
  bookmarked: boolean;
  quizScore?: number;
  quizAttempts?: number;
  quizPassed?: boolean;
  notes?: string;
}

export interface AssignmentSubmission {
  id: string;
  assignmentTitle: string;
  lessonId: string;
  filmTitle: string;
  userId: string;
  userName: string;
  cohortId: string;
  submittedAt: string;
  status: 'submitted' | 'under_review' | 'graded';
  content: string;
  deliverableLinks?: string[];
  grade?: number;
  maxGrade: number;
  rubricScores?: { criteria: string; score: number; maxScore: number }[];
  instructorFeedback?: string;
  gradedBy?: string;
  gradedAt?: string;
}

export interface Cohort {
  id: string;
  name: string;
  term: string;
  instructorId: string;
  studentCount: number;
  assignedLessonIds: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  slug: string;
  description: string;
  targetRole: string;
  estimatedHours: number;
  lessonIds: string[];
  badge: string;
  subject: SubjectCategory;
}

export interface AdminSettings {
  tmdbApiKey: string;
  tmdbApiConnected: boolean;
  catalogPublishedOnly: boolean;
  allowStudentSubmissions: boolean;
  audioPlaybackEnabled: boolean;
  demoModeActive: boolean;
}
