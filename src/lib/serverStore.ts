import {
  Lesson,
  UserProfile,
  UserRole,
  LearningProgress,
  AssignmentSubmission,
  Cohort,
  LearningPath,
  AdminSettings
} from '@/types/lms';
import { SEED_LESSONS } from '@/data/seedLessons';
import { LEARNING_PATHS } from '@/data/learningPaths';
import { INITIAL_USERS, INITIAL_COHORTS, INITIAL_PROGRESS, INITIAL_SUBMISSIONS } from '@/data/mockUsers';

// In-memory singleton store for Next.js server-side route handlers
class ServerStore {
  private lessons: Lesson[] = [...SEED_LESSONS];
  private users: UserProfile[] = [...INITIAL_USERS];
  private currentUserId: string = INITIAL_USERS[0].id;
  private currentRole: UserRole = 'student';
  private progress: Record<string, LearningProgress> = { ...INITIAL_PROGRESS };
  private submissions: AssignmentSubmission[] = [...INITIAL_SUBMISSIONS];
  private cohorts: Cohort[] = [...INITIAL_COHORTS];
  private learningPaths: LearningPath[] = [...LEARNING_PATHS];
  private adminSettings: AdminSettings = {
    tmdbApiKey: process.env.TMDB_API_KEY || '',
    tmdbApiConnected: !!process.env.TMDB_API_KEY,
    catalogPublishedOnly: false,
    allowStudentSubmissions: true,
    audioPlaybackEnabled: true,
    demoModeActive: true
  };

  // Auth & Session
  getCurrentUser(): UserProfile {
    const user = this.users.find(u => u.id === this.currentUserId) || this.users[0];
    return { ...user, role: this.currentRole };
  }

  getCurrentRole(): UserRole {
    return this.currentRole;
  }

  switchRole(role: UserRole): UserProfile {
    this.currentRole = role;
    const targetUser = this.users.find(u => u.role === role);
    if (targetUser) {
      this.currentUserId = targetUser.id;
    }
    return this.getCurrentUser();
  }

  updateProfile(updates: Partial<UserProfile>): UserProfile {
    const idx = this.users.findIndex(u => u.id === this.currentUserId);
    if (idx !== -1) {
      this.users[idx] = { ...this.users[idx], ...updates };
      return this.users[idx];
    }
    return this.getCurrentUser();
  }

  getAllUsers(): UserProfile[] {
    return this.users;
  }

  // Lessons
  getLessons(params?: {
    search?: string;
    subject?: string;
    difficulty?: string;
    status?: string;
    sort?: string;
  }): Lesson[] {
    let list = [...this.lessons];

    if (params?.search) {
      const q = params.search.toLowerCase();
      list = list.filter(
        l =>
          l.lessonTitle.toLowerCase().includes(q) ||
          l.filmTitle.toLowerCase().includes(q) ||
          l.learningObjective.toLowerCase().includes(q) ||
          l.conceptExplanation.toLowerCase().includes(q) ||
          l.topicTags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (params?.subject && params.subject !== 'all') {
      list = list.filter(l => l.subject.toLowerCase() === params.subject?.toLowerCase());
    }

    if (params?.difficulty && params.difficulty !== 'all') {
      list = list.filter(l => l.difficulty.toLowerCase() === params.difficulty?.toLowerCase());
    }

    if (params?.status && params.status !== 'all') {
      list = list.filter(l => l.status === params.status);
    } else if (this.adminSettings.catalogPublishedOnly) {
      list = list.filter(l => l.status === 'published');
    }

    if (params?.sort === 'duration-asc') {
      list.sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (params?.sort === 'duration-desc') {
      list.sort((a, b) => b.durationMinutes - a.durationMinutes);
    } else if (params?.sort === 'year-desc') {
      list.sort((a, b) => b.releaseYear - a.releaseYear);
    }

    return list;
  }

  getLessonById(id: string): Lesson | undefined {
    return this.lessons.find(l => l.id === id);
  }

  createLesson(lessonData: Partial<Lesson>): Lesson {
    const newId = `lms-${String(this.lessons.length + 1).padStart(3, '0')}`;
    const newLesson: Lesson = {
      id: newId,
      filmTitle: lessonData.filmTitle || 'Untitled Film',
      releaseYear: lessonData.releaseYear || new Date().getFullYear(),
      tmdbMovieId: lessonData.tmdbMovieId || null,
      subject: lessonData.subject || 'Product strategy and roadmaps',
      topicTags: lessonData.topicTags || ['Strategy'],
      lessonTitle: lessonData.lessonTitle || 'New Lesson Analysis',
      learningObjective: lessonData.learningObjective || 'Master core business strategy principles.',
      difficulty: lessonData.difficulty || 'Intermediate',
      durationMinutes: lessonData.durationMinutes || 25,
      format: lessonData.format || 'Case Study',
      sceneDescription: lessonData.sceneDescription || 'Original instructor scene description pending.',
      conceptExplanation: lessonData.conceptExplanation || 'Concept explanation breakdown pending.',
      framework: lessonData.framework || {
        name: 'Strategic Analysis Framework',
        description: 'Analytical methodology for assessing business trade-offs.',
        keySteps: ['Step 1: Problem Definition', 'Step 2: Strategy Evaluation', 'Step 3: Execution Plan']
      },
      discussionQuestions: lessonData.discussionQuestions || [
        'How does this decision affect product-market fit?',
        'What trade-offs were made by leadership?'
      ],
      practicalAssignment: lessonData.practicalAssignment || {
        title: 'Executive Reflection',
        prompt: 'Synthesize the strategic takeaways in a 500-word memo.',
        deliverables: ['1-page executive briefing'],
        rubric: [
          { criteria: 'Strategic Depth', maxPoints: 50, description: 'Evaluation of business factors.' },
          { criteria: 'Actionable Insights', maxPoints: 50, description: 'Practical recommendations.' }
        ]
      },
      knowledgeCheck: lessonData.knowledgeCheck || [],
      instructorGuidance: lessonData.instructorGuidance || {
        answerKeySummary: 'Encourage students to focus on opportunity cost.',
        teachingNotes: 'Facilitate active debate on stakeholder conflicts.',
        commonStudentPitfalls: ['Ignoring second-order consequences']
      },
      verificationStatus: 'verified',
      status: lessonData.status || 'published',
      imageAttribution: lessonData.imageAttribution || {
        source: 'editorial_placeholder',
        license: 'Educational Fair Use',
        notes: 'Instructor verified educational reference.'
      },
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.lessons.unshift(newLesson);
    return newLesson;
  }

  updateLesson(id: string, updates: Partial<Lesson>): Lesson | null {
    const idx = this.lessons.findIndex(l => l.id === id);
    if (idx !== -1) {
      this.lessons[idx] = {
        ...this.lessons[idx],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      return this.lessons[idx];
    }
    return null;
  }

  deleteLesson(id: string): boolean {
    const initialLen = this.lessons.length;
    this.lessons = this.lessons.filter(l => l.id !== id);
    return this.lessons.length < initialLen;
  }

  // Progress
  getProgress(): Record<string, LearningProgress> {
    return this.progress;
  }

  updateProgress(
    lessonId: string,
    updates: Partial<LearningProgress>
  ): LearningProgress {
    const current = this.progress[lessonId] || {
      lessonId,
      status: 'not_started',
      timeSpentSeconds: 0,
      lastActivityDate: new Date().toISOString(),
      bookmarked: false
    };

    const updated: LearningProgress = {
      ...current,
      ...updates,
      timeSpentSeconds: (current.timeSpentSeconds || 0) + (updates.timeSpentSeconds || 0),
      lastActivityDate: new Date().toISOString()
    };

    this.progress[lessonId] = updated;
    return updated;
  }

  // Learning Paths
  getLearningPaths(): LearningPath[] {
    return this.learningPaths;
  }

  // Assignments & Submissions
  getSubmissions(filter?: { userId?: string; cohortId?: string }): AssignmentSubmission[] {
    let list = [...this.submissions];
    if (filter?.userId) {
      list = list.filter(s => s.userId === filter.userId);
    }
    if (filter?.cohortId) {
      list = list.filter(s => s.cohortId === filter.cohortId);
    }
    return list;
  }

  createSubmission(data: {
    lessonId: string;
    content: string;
    deliverableLinks?: string[];
  }): AssignmentSubmission {
    const lesson = this.getLessonById(data.lessonId);
    const user = this.getCurrentUser();
    const newSubmission: AssignmentSubmission = {
      id: `sub-${Date.now()}`,
      assignmentTitle: lesson?.practicalAssignment.title || 'Coursework Assignment',
      lessonId: data.lessonId,
      filmTitle: lesson?.filmTitle || 'Case Study Film',
      userId: user.id,
      userName: user.name,
      cohortId: user.cohortId || 'cohort-01',
      submittedAt: new Date().toISOString(),
      status: 'submitted',
      content: data.content,
      deliverableLinks: data.deliverableLinks || [],
      maxGrade: 100
    };
    this.submissions.unshift(newSubmission);
    return newSubmission;
  }

  gradeSubmission(
    submissionId: string,
    grade: number,
    feedback: string,
    rubricScores?: { criteria: string; score: number; maxScore: number }[]
  ): AssignmentSubmission | null {
    const idx = this.submissions.findIndex(s => s.id === submissionId);
    if (idx !== -1) {
      const user = this.getCurrentUser();
      this.submissions[idx] = {
        ...this.submissions[idx],
        grade,
        instructorFeedback: feedback,
        rubricScores,
        gradedBy: user.name,
        gradedAt: new Date().toISOString(),
        status: 'graded'
      };
      return this.submissions[idx];
    }
    return null;
  }

  // Cohorts
  getCohorts(): Cohort[] {
    return this.cohorts;
  }

  createCohort(name: string, term: string, assignedLessonIds: string[]): Cohort {
    const user = this.getCurrentUser();
    const newCohort: Cohort = {
      id: `cohort-${String(this.cohorts.length + 1).padStart(2, '0')}`,
      name,
      term,
      instructorId: user.id,
      studentCount: 1,
      assignedLessonIds
    };
    this.cohorts.push(newCohort);
    return newCohort;
  }

  // Admin Settings
  getAdminSettings(): AdminSettings {
    return this.adminSettings;
  }

  updateAdminSettings(updates: Partial<AdminSettings>): AdminSettings {
    this.adminSettings = { ...this.adminSettings, ...updates };
    return this.adminSettings;
  }

  resetDemoData(): void {
    this.lessons = [...SEED_LESSONS];
    this.users = [...INITIAL_USERS];
    this.currentUserId = INITIAL_USERS[0].id;
    this.currentRole = 'student';
    this.progress = { ...INITIAL_PROGRESS };
    this.submissions = [...INITIAL_SUBMISSIONS];
    this.cohorts = [...INITIAL_COHORTS];
  }
}

// Global server singleton
const globalForServerStore = globalThis as unknown as { serverStore?: ServerStore };
export const serverStore = globalForServerStore.serverStore ?? new ServerStore();
if (process.env.NODE_ENV !== 'production') globalForServerStore.serverStore = serverStore;
