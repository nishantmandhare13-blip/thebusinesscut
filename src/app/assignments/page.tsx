'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Award,
  BookOpen,
  Filter,
  GraduationCap
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';

export default function AssignmentsPage() {
  const { lessons, cohorts, currentUser, submissions, progress } = useLms();
  const [filterTab, setFilterTab] = useState<'all' | 'submitted' | 'pending' | 'graded'>('all');

  const userCohort = cohorts.find(c => c.id === currentUser.cohortId) || cohorts[0];
  const assignedLessons = lessons.filter(l => userCohort?.assignedLessonIds.includes(l.id));

  // Build assignment items matching assigned lessons with user submissions
  const assignmentItems = assignedLessons.map((lesson) => {
    const submission = submissions.find(
      s => s.lessonId === lesson.id && s.userId === currentUser.id
    );
    const status = submission ? submission.status : 'pending';

    return {
      lesson,
      submission,
      status, // 'pending' | 'submitted' | 'under_review' | 'graded'
      dueDate: 'November 30, 2026'
    };
  });

  const filteredItems = assignmentItems.filter(item => {
    if (filterTab === 'submitted') return item.status === 'submitted' || item.status === 'under_review';
    if (filterTab === 'graded') return item.status === 'graded';
    if (filterTab === 'pending') return item.status === 'pending';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FileCheck2 className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Coursework & Grading
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Executive Case Assignments
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Assigned problem sets, framework memos, and rubric evaluations for {userCohort?.name}.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
          {(['all', 'pending', 'submitted', 'graded'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilterTab(tab)}
              className={`px-3 py-1.5 rounded-lg capitalize transition ${
                filterTab === tab
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Assignment List */}
      <div className="space-y-4">
        {filteredItems.map(({ lesson, submission, status, dueDate }) => (
          <div
            key={lesson.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4 shadow-sm hover:border-slate-700 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-amber-400 font-semibold">
                    {lesson.filmTitle} ({lesson.releaseYear})
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{lesson.subject}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-100">
                  {lesson.practicalAssignment.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {lesson.practicalAssignment.prompt}
                </p>
              </div>

              {/* Status Pill */}
              <div className="shrink-0">
                {status === 'graded' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Graded: {submission?.grade} / {submission?.maxGrade} pts</span>
                  </span>
                ) : status === 'submitted' || status === 'under_review' ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 font-mono text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Under Faculty Review</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono text-xs font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Pending Submission</span>
                  </span>
                )}
              </div>
            </div>

            {/* Rubric Criteria Summary */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[10px] font-mono uppercase text-slate-400">Rubric Focus:</span>
              {lesson.practicalAssignment.rubric.map((r, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]"
                >
                  {r.criteria} ({r.maxPoints} pts)
                </span>
              ))}
            </div>

            {/* Instructor Feedback Box if Graded */}
            {submission && submission.status === 'graded' && (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-xs text-slate-300 space-y-1">
                <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                  <span>Instructor Evaluation ({submission.gradedBy}):</span>
                  <span>{submission.grade} / 25 pts</span>
                </div>
                <p className="italic">&ldquo;{submission.instructorFeedback}&rdquo;</p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Cohort Due Date: {dueDate}
              </span>

              <Link
                href={`/lessons/${lesson.id}`}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span>{submission ? 'View / Update Submission' : 'Open Case & Submit Brief'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
