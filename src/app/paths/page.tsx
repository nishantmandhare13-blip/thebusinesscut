'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SUBJECT_METADATA } from '@/data/subjects';
import { TbcMonogram } from '@/components/brand/Logo';

export default function LearningPathsPage() {
  const { learningPaths, lessons, progress } = useLms();
  const [expandedPathId, setExpandedPathId] = useState<string>(learningPaths[0].id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <TbcMonogram size="xs" subtext="Continuous Track: TBC" />
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            Curated Executive Curricula
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
          MBA & PM Learning Paths
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-2xl">
          Follow structured sequences of cinematic case studies designed to build deep, end-to-end competency in specialized product management and executive leadership domains.
        </p>
      </div>

      {/* Learning Paths List */}
      <div className="space-y-6">
        {learningPaths.map((path) => {
          const isExpanded = expandedPathId === path.id;
          const subjectMeta = SUBJECT_METADATA[path.subject];

          // Calculate path progress
          const pathLessons = path.lessonIds
            .map(id => lessons.find(l => l.id === id))
            .filter(Boolean);

          const completedCount = path.lessonIds.filter(
            id => progress[id]?.status === 'completed'
          ).length;

          const progressPercent = Math.round((completedCount / path.lessonIds.length) * 100);

          return (
            <div
              key={path.id}
              className={`rounded-2xl border transition duration-200 overflow-hidden ${
                isExpanded
                  ? 'border-amber-500/30 bg-slate-900 shadow-xl'
                  : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              {/* Path Header Bar */}
              <div
                onClick={() => setExpandedPathId(isExpanded ? '' : path.id)}
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${subjectMeta?.bgLightClass} ${subjectMeta?.colorClass} ${subjectMeta?.borderClass}`}
                    >
                      {subjectMeta?.shortTitle || path.subject}
                    </span>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      Target: {path.targetRole}
                    </span>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      <span>Badge: {path.badge}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 hover:text-amber-400 transition">
                    {path.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                    {path.description}
                  </p>
                </div>

                {/* Progress & Stats Widget */}
                <div className="flex items-center gap-6 shrink-0 self-end md:self-center">
                  <div className="text-right">
                    <div className="text-xs font-mono text-slate-300 font-bold">
                      {completedCount} / {path.lessonIds.length} Cases
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      ~{path.estimatedHours} Hours
                    </div>
                    {/* Progress Bar */}
                    <div className="w-32 h-1.5 rounded-full bg-slate-800 mt-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    aria-label={isExpanded ? 'Collapse path' : 'Expand path'}
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Expanded Lesson Sequence */}
              {isExpanded && (
                <div className="p-6 pt-0 border-t border-slate-800/80 bg-slate-950/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-4 mt-4">
                    Course Curriculum & Step-by-Step Sequence:
                  </div>

                  <div className="space-y-3">
                    {pathLessons.map((lesson, idx) => {
                      if (!lesson) return null;
                      const isCompleted = progress[lesson.id]?.status === 'completed';

                      return (
                        <div
                          key={lesson.id}
                          className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-700 transition"
                        >
                          <div className="flex items-start sm:items-center gap-3 min-w-0">
                            <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                              {idx + 1}
                            </span>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-amber-400 font-semibold">
                                  {lesson.filmTitle} ({lesson.releaseYear})
                                </span>
                                <span className="text-[10px] text-slate-500">•</span>
                                <span className="text-[10px] font-mono text-slate-400">
                                  {lesson.durationMinutes} min
                                </span>
                              </div>
                              <h4 className="text-sm font-bold text-slate-100 truncate mt-0.5">
                                {lesson.lessonTitle}
                              </h4>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                Framework: {lesson.framework.name}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                            {isCompleted && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Completed</span>
                              </span>
                            )}

                            <Link
                              href={`/lessons/${lesson.id}`}
                              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center gap-1"
                            >
                              <span>Study Case</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
