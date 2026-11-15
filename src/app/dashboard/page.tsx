'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Bookmark,
  Award,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Sparkles,
  Download,
  Trash2,
  GraduationCap,
  Play
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SUBJECT_METADATA } from '@/data/subjects';
import { LessonCard } from '@/components/lessons/LessonCard';

export default function StudentDashboardPage() {
  const {
    currentUser,
    lessons,
    progress,
    submissions,
    cohorts,
    setIsOnboardingOpen,
    exportLearnerData,
    requestAccountDeletion
  } = useLms();

  // Progress metrics
  const progressEntries = Object.values(progress);
  const completedLessons = progressEntries.filter(p => p.status === 'completed');
  const inProgressLessons = progressEntries.filter(p => p.status === 'in_progress');
  const bookmarkedLessonIds = progressEntries.filter(p => p.bookmarked).map(p => p.lessonId);
  const bookmarkedLessons = lessons.filter(l => bookmarkedLessonIds.includes(l.id));

  const totalTimeMinutes = Math.round(
    progressEntries.reduce((acc, p) => acc + (p.timeSpentSeconds || 0), 0) / 60
  );

  // Calculate average quiz score
  const quizScores = progressEntries.filter(p => p.quizScore !== undefined).map(p => p.quizScore!);
  const avgQuizScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
    : 100;

  // Active lesson to resume
  const activeProgress = inProgressLessons.length > 0 ? inProgressLessons[0] : null;
  const activeLesson = activeProgress ? lessons.find(l => l.id === activeProgress.lessonId) : null;

  // Recommended lessons based on user's preferred topics
  const recommendedLessons = lessons
    .filter(l => {
      const isCompleted = progress[l.id]?.status === 'completed';
      const isPreferred = currentUser.preferredTopics.includes(l.subject);
      return !isCompleted && isPreferred;
    })
    .slice(0, 4);

  // Assigned lessons for user's cohort
  const userCohort = cohorts.find(c => c.id === currentUser.cohortId) || cohorts[0];
  const assignedLessons = lessons.filter(l => userCohort?.assignedLessonIds.includes(l.id));

  const handleExport = () => {
    const jsonStr = exportLearnerData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `the-business-cut-learning-data-${currentUser.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10">
      {/* Student Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/30">
        <div className="flex items-center gap-4">
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/40 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
                Welcome back, {currentUser.name}
              </h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                MBA Candidate
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {currentUser.mbaProgram} • {currentUser.specialization}
            </p>
            <p className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-2">
              <span>Cohort: {userCohort?.name}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
          <button
            type="button"
            onClick={() => setIsOnboardingOpen(true)}
            className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition border border-slate-700"
          >
            Edit Profile & Goals
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 transition border border-slate-700 flex items-center gap-1.5"
            title="Download JSON Learning Data"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>COMPLETED</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-2">
            {completedLessons.length}
            <span className="text-xs text-slate-400 font-mono font-normal"> / {lessons.length}</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Cases fully completed</div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>TIME INVESTED</span>
            <Clock className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-2">
            {totalTimeMinutes}
            <span className="text-xs text-slate-400 font-mono font-normal"> min</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Study & framework time</div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>QUIZ MASTERY</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-2">
            {avgQuizScore}%
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Avg. knowledge check score</div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
            <span>SAVED FOR REVIEW</span>
            <Bookmark className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-2">
            {bookmarkedLessons.length}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">Bookmarked cases</div>
        </div>
      </div>

      {/* Active Lesson / Continue Learning Card */}
      {activeLesson && (
        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Continue Where You Left Off
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-100">
                {activeLesson.lessonTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activeLesson.filmTitle} ({activeLesson.releaseYear}) • {activeLesson.subject}
              </p>
              <p className="text-xs text-slate-300 mt-2 italic font-mono">
                Notes: &ldquo;{activeProgress?.notes || 'Framework study in progress...'}&rdquo;
              </p>
            </div>

            <Link
              href={`/lessons/${activeLesson.id}`}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center gap-2 shrink-0 self-start sm:self-center"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Resume Case Study</span>
            </Link>
          </div>
        </div>
      )}

      {/* Assigned Cohort Coursework */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-100">
              Assigned Cohort Coursework
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Curated by {userCohort?.name} faculty for this term
            </p>
          </div>
          <Link
            href="/assignments"
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
          >
            <span>View All Assignments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {assignedLessons.slice(0, 4).map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>

      {/* Recommended Next Lessons */}
      {recommendedLessons.length > 0 && (
        <div className="space-y-4">
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-100">
              Recommended Next Lessons
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Personalized based on your preferred tracks ({currentUser.preferredTopics.slice(0, 2).join(', ')})
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      )}

      {/* Bookmarked / Saved Cases */}
      {bookmarkedLessons.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-slate-100">
              Saved Case Studies ({bookmarkedLessons.length})
            </h2>
            <span className="text-xs font-mono text-slate-400">Archived for review</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bookmarkedLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      )}

      {/* Account Privacy & GDPR Deletion Section */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div>
          <h4 className="font-semibold text-slate-200">Data Sovereignty & Account Privacy</h4>
          <p className="text-slate-400 mt-0.5">
            Your progress data is stored locally in your browser. You can purge all learning records at any time.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (confirm('Are you sure you want to request account data deletion? This will purge your local learning progress.')) {
              requestAccountDeletion();
            }
          }}
          className="px-3.5 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-mono transition flex items-center gap-1.5 shrink-0"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Request Data Deletion</span>
        </button>
      </div>
    </div>
  );
}
