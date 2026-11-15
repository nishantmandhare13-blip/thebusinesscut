'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Bookmark, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Lesson } from '@/types/lms';
import { SUBJECT_METADATA } from '@/data/subjects';
import { PosterPlaceholder } from './PosterPlaceholder';
import { PosterImage } from './PosterImage';
import { useLms } from '@/context/LmsContext';

interface LessonCardProps {
  lesson: Lesson;
  viewMode?: 'grid' | 'list';
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, viewMode = 'grid' }) => {
  const { getLessonProgress, toggleBookmark } = useLms();
  const progress = getLessonProgress(lesson.id);
  const subjectMeta = SUBJECT_METADATA[lesson.subject] || {
    shortTitle: lesson.subject,
    colorClass: 'text-amber-400',
    bgLightClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30'
  };

  const isCompleted = progress.status === 'completed';
  const isInProgress = progress.status === 'in_progress';
  const isBookmarked = progress.bookmarked;

  if (viewMode === 'list') {
    return (
      <div className="group relative rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-850 hover:border-slate-700 transition p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        {/* Left thumbnail & basic info */}
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-16 h-24 shrink-0 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
            <PosterImage
              posterPath={lesson.imageAttribution?.posterPath}
              filmTitle={lesson.filmTitle}
              releaseYear={lesson.releaseYear}
              className="w-full h-full"
              imageClassName="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${subjectMeta.bgLightClass} ${subjectMeta.colorClass} ${subjectMeta.borderClass}`}
              >
                {subjectMeta.shortTitle}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {lesson.filmTitle} ({lesson.releaseYear})
              </span>
              {lesson.verificationStatus === 'verified' && (
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              )}
            </div>

            <Link href={`/lessons/${lesson.id}`} className="block focus:outline-none focus:underline">
              <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition truncate">
                {lesson.lessonTitle}
              </h3>
            </Link>

            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{lesson.learningObjective}</p>
          </div>
        </div>

        {/* Right meta & actions */}
        <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {lesson.durationMinutes}m
            </span>
            <span className="text-slate-500">•</span>
            <span
              className={
                lesson.difficulty === 'Foundational'
                  ? 'text-emerald-400'
                  : lesson.difficulty === 'Intermediate'
                  ? 'text-sky-400'
                  : 'text-amber-400'
              }
            >
              {lesson.difficulty}
            </span>
          </div>

          {isCompleted && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Done</span>
            </span>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark(lesson.id);
            }}
            className={`p-2 rounded-lg border transition ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
          >
            <Bookmark className="w-4 h-4 fill-current" />
          </button>

          <Link
            href={`/lessons/${lesson.id}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition"
          >
            <span>Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  // Grid view (Standard)
  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/80 hover:border-amber-500/40 hover:bg-slate-900 transition duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg">
      <div>
        {/* Vertical Theatrical Poster Frame (2:3 Aspect Ratio) */}
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <PosterImage
            posterPath={lesson.imageAttribution?.posterPath}
            filmTitle={lesson.filmTitle}
            releaseYear={lesson.releaseYear}
            className="w-full h-full"
            imageClassName="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 opacity-95 group-hover:opacity-100"
          />

          {/* Subtle bottom vignette to blend seamlessly into card */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />

          {/* Subject tag overlay */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
            <span
              className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md backdrop-blur-md border shadow-sm ${subjectMeta.bgLightClass} ${subjectMeta.colorClass} ${subjectMeta.borderClass}`}
            >
              {subjectMeta.shortTitle}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark(lesson.id);
            }}
            className={`absolute top-3 right-3 z-10 p-2 rounded-lg backdrop-blur-md border shadow-sm transition ${
              isBookmarked
                ? 'bg-amber-500 text-slate-950 border-amber-400'
                : 'bg-slate-900/80 text-slate-400 border-slate-700/80 hover:text-white hover:bg-slate-800'
            }`}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark lesson'}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
          </button>

          {/* Completion status pill */}
          {isCompleted && (
            <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Completed</span>
            </div>
          )}

          {isInProgress && !isCompleted && (
            <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/90 border border-amber-500/40 text-[11px] font-mono text-amber-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>In Progress</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="font-semibold text-slate-300">
              {lesson.filmTitle} ({lesson.releaseYear})
            </span>
            <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400">
              {lesson.format}
            </span>
          </div>

          <Link href={`/lessons/${lesson.id}`} className="group-hover:text-amber-400 transition">
            <h3 className="font-serif text-lg font-bold text-slate-100 leading-snug line-clamp-2">
              {lesson.lessonTitle}
            </h3>
          </Link>

          <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
            {lesson.learningObjective}
          </p>

          {/* Framework pill */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 shrink-0">Framework:</span>
            <span className="text-xs font-medium text-amber-300/90 truncate">
              {lesson.framework.name}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-slate-950/50 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {lesson.durationMinutes} min
          </span>
          <span className="text-slate-600">•</span>
          <span
            className={
              lesson.difficulty === 'Foundational'
                ? 'text-emerald-400'
                : lesson.difficulty === 'Intermediate'
                ? 'text-sky-400'
                : 'text-amber-400'
            }
          >
            {lesson.difficulty}
          </span>
        </div>

        <Link
          href={`/lessons/${lesson.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
        >
          <span>Explore</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
        </Link>
      </div>
    </div>
  );
};
