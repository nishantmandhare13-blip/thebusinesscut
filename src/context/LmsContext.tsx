'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Lesson,
  UserProfile,
  UserRole,
  LearningProgress,
  AssignmentSubmission,
  Cohort,
  LearningPath,
  AdminSettings,
  SubjectCategory
} from '@/types/lms';
import { SEED_LESSONS } from '@/data/seedLessons';
import { LEARNING_PATHS } from '@/data/learningPaths';
import { INITIAL_USERS, INITIAL_COHORTS, INITIAL_PROGRESS, INITIAL_SUBMISSIONS } from '@/data/mockUsers';

interface LmsContextType {
  // Current user & active role
  currentUser: UserProfile;
  currentRole: UserRole;
  allUsers: UserProfile[];
  switchRole: (role: UserRole) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isOnboardingOpen: boolean;
  setIsOnboardingOpen: (open: boolean) => void;
  completeOnboarding: (data: Partial<UserProfile>) => void;

  // Catalog & Lessons
  lessons: Lesson[];
  getLessonById: (id: string) => Lesson | undefined;
  createLesson: (lesson: Partial<Lesson>) => string;
  updateLesson: (id: string, updates: Partial<Lesson>) => void;
  deleteLesson: (id: string) => void;

  // Progress & Bookmarks
  progress: Record<string, LearningProgress>;
  getLessonProgress: (lessonId: string) => LearningProgress;
  markLessonStatus: (lessonId: string, status: 'not_started' | 'in_progress' | 'completed', addedSeconds?: number) => void;
  toggleBookmark: (lessonId: string) => void;
  recordQuizAttempt: (lessonId: string, score: number, passed: boolean) => void;
  saveLessonNotes: (lessonId: string, notes: string) => void;

  // Assignments & Grading
  submissions: AssignmentSubmission[];
  getLessonSubmission: (lessonId: string) => AssignmentSubmission | undefined;
  submitAssignment: (lessonId: string, content: string, links?: string[]) => string;
  gradeSubmission: (
    submissionId: string,
    grade: number,
    feedback: string,
    rubricScores?: { criteria: string; score: number; maxScore: number }[]
  ) => void;

  // Cohorts & Paths
  cohorts: Cohort[];
  createCohort: (name: string, term: string, assignedLessonIds: string[]) => string;
  assignLessonToCohort: (cohortId: string, lessonId: string) => void;
  learningPaths: LearningPath[];

  // Admin & System
  adminSettings: AdminSettings;
  updateAdminSettings: (settings: Partial<AdminSettings>) => void;
  resetDemoData: () => void;
  exportLearnerData: () => string;
  requestAccountDeletion: () => void;
}

const STORAGE_KEY = 'the_business_cut_lms_v2';

const DEFAULT_ADMIN_SETTINGS: AdminSettings = {
  tmdbApiKey: '',
  tmdbApiConnected: false,
  catalogPublishedOnly: false,
  allowStudentSubmissions: true,
  audioPlaybackEnabled: true,
  demoModeActive: true
};

const LmsContext = createContext<LmsContextType | undefined>(undefined);

export function LmsProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole>('student');
  const [currentUser, setCurrentUser] = useState<UserProfile>(INITIAL_USERS[0]);
  const [allUsers, setAllUsers] = useState<UserProfile[]>(INITIAL_USERS);
  const [lessons, setLessons] = useState<Lesson[]>(SEED_LESSONS);
  const [progress, setProgress] = useState<Record<string, LearningProgress>>(INITIAL_PROGRESS);
  const [submissions, setSubmissions] = useState<AssignmentSubmission[]>(INITIAL_SUBMISSIONS);
  const [cohorts, setCohorts] = useState<Cohort[]>(INITIAL_COHORTS);
  const [learningPaths] = useState<LearningPath[]>(LEARNING_PATHS);
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(DEFAULT_ADMIN_SETTINGS);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  // Initialize from localStorage on client mount
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.currentRole) setCurrentRole(parsed.currentRole);
        if (parsed.currentUser) setCurrentUser(parsed.currentUser);
        if (parsed.allUsers) setAllUsers(parsed.allUsers);
        if (parsed.lessons && parsed.lessons.length > 0) {
          // Merge latest verified seed artwork with custom lessons
          const seedMap = new Map(SEED_LESSONS.map(l => [l.id, l]));
          const merged = parsed.lessons.map((pl: Lesson) => {
            const seed = seedMap.get(pl.id);
            if (seed && (!pl.imageAttribution?.posterPath || pl.imageAttribution.posterPath.startsWith('/q4r'))) {
              return { ...pl, imageAttribution: seed.imageAttribution };
            }
            return pl;
          });
          setLessons(merged);
        }
        if (parsed.progress) setProgress(parsed.progress);
        if (parsed.submissions) setSubmissions(parsed.submissions);
        if (parsed.cohorts) setCohorts(parsed.cohorts);
        if (parsed.adminSettings) setAdminSettings(parsed.adminSettings);
      }
    } catch (e) {
      console.warn('Could not hydrate LMS state from localStorage:', e);
    }
  }, []);

  // Save to localStorage when critical state changes
  useEffect(() => {
    if (!isClient) return;
    try {
      const stateToPersist = {
        currentRole,
        currentUser,
        allUsers,
        lessons,
        progress,
        submissions,
        cohorts,
        adminSettings
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToPersist));
    } catch (e) {
      console.warn('Failed to persist LMS state to localStorage:', e);
    }
  }, [isClient, currentRole, currentUser, allUsers, lessons, progress, submissions, cohorts, adminSettings]);

  // Switch role & update active user object accordingly
  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
    const targetUser = allUsers.find(u => u.role === role) || {
      ...INITIAL_USERS.find(u => u.role === role)!,
      role
    };
    setCurrentUser(targetUser);
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    setAllUsers(prev => prev.map(u => (u.id === currentUser.id ? updated : u)));
  };

  const completeOnboarding = (data: Partial<UserProfile>) => {
    updateProfile(data);
    setIsOnboardingOpen(false);
  };

  const getLessonById = (id: string) => {
    return lessons.find(l => l.id === id);
  };

  const createLesson = (newLessonData: Partial<Lesson>): string => {
    const newId = `lms-${String(lessons.length + 1).padStart(3, '0')}`;
    const fullLesson: Lesson = {
      id: newId,
      filmTitle: newLessonData.filmTitle || 'Untitled Film',
      releaseYear: newLessonData.releaseYear || new Date().getFullYear(),
      tmdbMovieId: newLessonData.tmdbMovieId || null,
      subject: newLessonData.subject || 'Product discovery and user research',
      topicTags: newLessonData.topicTags || ['Case Study'],
      lessonTitle: newLessonData.lessonTitle || 'New Lesson Title',
      learningObjective: newLessonData.learningObjective || 'Master a core concept through cinematic case study.',
      difficulty: newLessonData.difficulty || 'Intermediate',
      durationMinutes: newLessonData.durationMinutes || 30,
      format: newLessonData.format || 'Case Study',
      sceneDescription: newLessonData.sceneDescription || 'Instructor scene context.',
      sceneTimestampRef: newLessonData.sceneTimestampRef || 'Instructor reference needed',
      conceptExplanation: newLessonData.conceptExplanation || 'Concept breakdown.',
      framework: newLessonData.framework || {
        name: 'MBA Analytical Framework',
        description: 'Structured framework description.',
        keySteps: ['Step 1: Diagnose', 'Step 2: Synthesize', 'Step 3: Execute']
      },
      discussionQuestions: newLessonData.discussionQuestions || [
        'How does this decision apply to modern product management?',
        'What was the primary trade-off faced by the protagonists?'
      ],
      practicalAssignment: newLessonData.practicalAssignment || {
        title: 'Strategic Analysis Brief',
        prompt: 'Formulate an actionable response memo for executive leadership.',
        deliverables: ['1-page executive brief', 'Risk matrix'],
        rubric: [
          { criteria: 'Analytical rigor', maxPoints: 10, description: 'Demonstrates deep concept comprehension.' },
          { criteria: 'Actionable recommendations', maxPoints: 15, description: 'Proposes realistic, defensible solutions.' }
        ]
      },
      knowledgeCheck: newLessonData.knowledgeCheck || [
        {
          question: 'What is the primary takeaway of this framework?',
          options: ['Option A', 'Option B (Correct)', 'Option C', 'Option D'],
          correctOptionIndex: 1,
          explanation: 'Option B correctly captures the core pedagogical framework.'
        }
      ],
      instructorGuidance: newLessonData.instructorGuidance || {
        answerKeySummary: 'Instructor guidance summary.',
        teachingNotes: 'Emphasize strategic trade-offs.',
        commonStudentPitfalls: ['Superficial analysis']
      },
      verificationStatus: newLessonData.verificationStatus || 'needs_instructor_review',
      status: newLessonData.status || 'draft',
      imageAttribution: newLessonData.imageAttribution || {
        source: 'editorial_placeholder',
        license: 'Educational Metadata',
        notes: 'Editorial placeholder artwork'
      },
      audioCue: newLessonData.audioCue || {
        title: 'Discussion Cue',
        description: 'Audio prompt for transition.',
        transcript: 'Sound cue: "Instructor to add licensed audio."',
        durationSeconds: 3,
        rightsStatus: 'instructor_reference_needed'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setLessons(prev => [fullLesson, ...prev]);
    return newId;
  };

  const updateLesson = (id: string, updates: Partial<Lesson>) => {
    setLessons(prev =>
      prev.map(l => (l.id === id ? { ...l, ...updates, updatedAt: new Date().toISOString() } : l))
    );
  };

  const deleteLesson = (id: string) => {
    setLessons(prev => prev.filter(l => l.id !== id));
  };

  const getLessonProgress = (lessonId: string): LearningProgress => {
    return (
      progress[lessonId] || {
        lessonId,
        status: 'not_started',
        timeSpentSeconds: 0,
        lastActivityDate: '',
        bookmarked: false
      }
    );
  };

  const markLessonStatus = (
    lessonId: string,
    status: 'not_started' | 'in_progress' | 'completed',
    addedSeconds: number = 0
  ) => {
    setProgress(prev => {
      const current = prev[lessonId] || {
        lessonId,
        status: 'not_started',
        timeSpentSeconds: 0,
        lastActivityDate: new Date().toISOString(),
        bookmarked: false
      };
      return {
        ...prev,
        [lessonId]: {
          ...current,
          status,
          timeSpentSeconds: current.timeSpentSeconds + addedSeconds,
          lastActivityDate: new Date().toISOString()
        }
      };
    });
  };

  const toggleBookmark = (lessonId: string) => {
    setProgress(prev => {
      const current = prev[lessonId] || {
        lessonId,
        status: 'not_started',
        timeSpentSeconds: 0,
        lastActivityDate: new Date().toISOString(),
        bookmarked: false
      };
      return {
        ...prev,
        [lessonId]: {
          ...current,
          bookmarked: !current.bookmarked,
          lastActivityDate: new Date().toISOString()
        }
      };
    });
  };

  const recordQuizAttempt = (lessonId: string, score: number, passed: boolean) => {
    setProgress(prev => {
      const current = prev[lessonId] || {
        lessonId,
        status: 'not_started',
        timeSpentSeconds: 0,
        lastActivityDate: new Date().toISOString(),
        bookmarked: false
      };
      return {
        ...prev,
        [lessonId]: {
          ...current,
          quizScore: score,
          quizAttempts: (current.quizAttempts || 0) + 1,
          quizPassed: passed || current.quizPassed,
          status: passed ? 'completed' : current.status,
          lastActivityDate: new Date().toISOString()
        }
      };
    });
  };

  const saveLessonNotes = (lessonId: string, notes: string) => {
    setProgress(prev => {
      const current = prev[lessonId] || {
        lessonId,
        status: 'not_started',
        timeSpentSeconds: 0,
        lastActivityDate: new Date().toISOString(),
        bookmarked: false
      };
      return {
        ...prev,
        [lessonId]: {
          ...current,
          notes,
          lastActivityDate: new Date().toISOString()
        }
      };
    });
  };

  const getLessonSubmission = (lessonId: string) => {
    return submissions.find(s => s.lessonId === lessonId && s.userId === currentUser.id);
  };

  const submitAssignment = (lessonId: string, content: string, links?: string[]): string => {
    const lesson = getLessonById(lessonId);
    const newId = `sub-${Date.now()}`;
    const newSubmission: AssignmentSubmission = {
      id: newId,
      assignmentTitle: lesson?.practicalAssignment.title || 'Practical Assignment',
      lessonId,
      filmTitle: `${lesson?.filmTitle} (${lesson?.releaseYear})`,
      userId: currentUser.id,
      userName: currentUser.name,
      cohortId: currentUser.cohortId || 'cohort-01',
      submittedAt: new Date().toISOString(),
      status: 'submitted',
      content,
      deliverableLinks: links || [],
      maxGrade: 25
    };

    setSubmissions(prev => [newSubmission, ...prev.filter(s => !(s.lessonId === lessonId && s.userId === currentUser.id))]);
    markLessonStatus(lessonId, 'in_progress', 600);
    return newId;
  };

  const gradeSubmission = (
    submissionId: string,
    grade: number,
    feedback: string,
    rubricScores?: { criteria: string; score: number; maxScore: number }[]
  ) => {
    setSubmissions(prev =>
      prev.map(s =>
        s.id === submissionId
          ? {
              ...s,
              grade,
              instructorFeedback: feedback,
              rubricScores,
              status: 'graded',
              gradedBy: currentUser.name,
              gradedAt: new Date().toISOString()
            }
          : s
      )
    );
  };

  const createCohort = (name: string, term: string, assignedLessonIds: string[]): string => {
    const newId = `cohort-${Date.now()}`;
    const newCohort: Cohort = {
      id: newId,
      name,
      term,
      instructorId: currentUser.id,
      studentCount: 1,
      assignedLessonIds
    };
    setCohorts(prev => [...prev, newCohort]);
    return newId;
  };

  const assignLessonToCohort = (cohortId: string, lessonId: string) => {
    setCohorts(prev =>
      prev.map(c =>
        c.id === cohortId
          ? {
              ...c,
              assignedLessonIds: c.assignedLessonIds.includes(lessonId)
                ? c.assignedLessonIds
                : [...c.assignedLessonIds, lessonId]
            }
          : c
      )
    );
  };

  const updateAdminSettings = (newSettings: Partial<AdminSettings>) => {
    setAdminSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetDemoData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setLessons(SEED_LESSONS);
    setCurrentUser(INITIAL_USERS[0]);
    setCurrentRole('student');
    setAllUsers(INITIAL_USERS);
    setProgress(INITIAL_PROGRESS);
    setSubmissions(INITIAL_SUBMISSIONS);
    setCohorts(INITIAL_COHORTS);
    setAdminSettings(DEFAULT_ADMIN_SETTINGS);
  };

  const exportLearnerData = (): string => {
    const data = {
      userProfile: currentUser,
      progressFootprint: progress,
      completedLessons: Object.values(progress).filter(p => p.status === 'completed'),
      bookmarkedLessons: Object.values(progress).filter(p => p.bookmarked),
      assignmentSubmissions: submissions.filter(s => s.userId === currentUser.id),
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  };

  const requestAccountDeletion = () => {
    // Reset user data and local progress for privacy/consent
    setProgress({});
    setSubmissions(prev => prev.filter(s => s.userId !== currentUser.id));
    alert('Account data deletion request processed. Your local progress records have been purged.');
  };

  return (
    <LmsContext.Provider
      value={{
        currentUser,
        currentRole,
        allUsers,
        switchRole,
        updateProfile,
        isOnboardingOpen,
        setIsOnboardingOpen,
        completeOnboarding,
        lessons,
        getLessonById,
        createLesson,
        updateLesson,
        deleteLesson,
        progress,
        getLessonProgress,
        markLessonStatus,
        toggleBookmark,
        recordQuizAttempt,
        saveLessonNotes,
        submissions,
        getLessonSubmission,
        submitAssignment,
        gradeSubmission,
        cohorts,
        createCohort,
        assignLessonToCohort,
        learningPaths,
        adminSettings,
        updateAdminSettings,
        resetDemoData,
        exportLearnerData,
        requestAccountDeletion
      }}
    >
      {children}
    </LmsContext.Provider>
  );
}

export function useLms() {
  const context = useContext(LmsContext);
  if (!context) {
    throw new Error('useLms must be used within an LmsProvider');
  }
  return context;
}
