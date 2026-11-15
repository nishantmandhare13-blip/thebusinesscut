'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Grid3X3,
  List,
  RotateCcw,
  Sparkles,
  BookOpen,
  Clock,
  Film,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SUBJECT_METADATA } from '@/data/subjects';
import { LessonCard } from '@/components/lessons/LessonCard';
import { SubjectCategory, DifficultyLevel, LessonFormat, VerificationStatus } from '@/types/lms';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'all';

  const { lessons, adminSettings } = useLms();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedVerification, setSelectedVerification] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'newest' | 'duration_asc' | 'duration_desc'>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allSubjects = Object.keys(SUBJECT_METADATA) as SubjectCategory[];

  // Filter & Sort logic
  const filteredLessons = useMemo(() => {
    return lessons
      .filter((lesson) => {
        // Admin catalog published only rule
        if (adminSettings.catalogPublishedOnly && lesson.status !== 'published') {
          return false;
        }

        // Search text matching (film, title, objective, framework, tags)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = lesson.lessonTitle.toLowerCase().includes(q);
          const matchFilm = lesson.filmTitle.toLowerCase().includes(q);
          const matchFramework = lesson.framework.name.toLowerCase().includes(q);
          const matchConcept = lesson.conceptExplanation.toLowerCase().includes(q);
          const matchTags = lesson.topicTags.some(t => t.toLowerCase().includes(q));
          if (!matchTitle && !matchFilm && !matchFramework && !matchConcept && !matchTags) {
            return false;
          }
        }

        // Subject filter
        if (selectedSubject !== 'all' && lesson.subject !== selectedSubject) {
          return false;
        }

        // Difficulty filter
        if (selectedDifficulty !== 'all' && lesson.difficulty !== selectedDifficulty) {
          return false;
        }

        // Format filter
        if (selectedFormat !== 'all' && lesson.format !== selectedFormat) {
          return false;
        }

        // Duration filter
        if (selectedDuration === 'short' && lesson.durationMinutes > 30) return false;
        if (selectedDuration === 'medium' && (lesson.durationMinutes <= 30 || lesson.durationMinutes > 40)) return false;
        if (selectedDuration === 'long' && lesson.durationMinutes <= 40) return false;

        // Verification filter
        if (selectedVerification !== 'all' && lesson.verificationStatus !== selectedVerification) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          return b.releaseYear - a.releaseYear;
        }
        if (sortBy === 'duration_asc') {
          return a.durationMinutes - b.durationMinutes;
        }
        if (sortBy === 'duration_desc') {
          return b.durationMinutes - a.durationMinutes;
        }
        return 0; // Default relevance
      });
  }, [
    lessons,
    adminSettings.catalogPublishedOnly,
    searchQuery,
    selectedSubject,
    selectedDifficulty,
    selectedFormat,
    selectedDuration,
    selectedVerification,
    sortBy
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSubject('all');
    setSelectedDifficulty('all');
    setSelectedFormat('all');
    setSelectedDuration('all');
    setSelectedVerification('all');
    setSortBy('relevance');
  };

  const hasActiveFilters =
    searchQuery ||
    selectedSubject !== 'all' ||
    selectedDifficulty !== 'all' ||
    selectedFormat !== 'all' ||
    selectedDuration !== 'all' ||
    selectedVerification !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-8">
      {/* Catalog Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Film className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              The Business Cut Catalog
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Cinematic Case Catalog
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Explore 104 structured MBA lessons pairing Hollywood masterworks with executive frameworks.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center rounded-lg border border-slate-800 bg-slate-900 p-1">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition ${
                viewMode === 'grid' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition ${
                viewMode === 'list' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by film title (e.g. Moneyball), concept (e.g. OBP), framework, or keyword..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Multi-Filter Dropdowns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Subject Filter */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Subject Area
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">All 12 Subjects</option>
              {allSubjects.map((s) => (
                <option key={s} value={s}>
                  {SUBJECT_METADATA[s]?.shortTitle || s}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">All Difficulties</option>
              <option value="Foundational">Foundational</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Format Filter */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Lesson Format
            </label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">All Formats</option>
              <option value="Case Study">Case Study</option>
              <option value="Executive Simulation">Executive Simulation</option>
              <option value="Framework Deep Dive">Framework Deep Dive</option>
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">Any Duration</option>
              <option value="short">Quick (&lt; 30 min)</option>
              <option value="medium">Standard (30-40 min)</option>
              <option value="long">Deep Dive (40+ min)</option>
            </select>
          </div>

          {/* Verification Status */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Verification
            </label>
            <select
              value={selectedVerification}
              onChange={(e) => setSelectedVerification(e.target.value)}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="all">All Verification</option>
              <option value="verified">Verified Details</option>
              <option value="needs_instructor_review">Needs Review</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'relevance' | 'newest' | 'duration_asc' | 'duration_desc')}
              className="w-full px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Film Year (Newest)</option>
              <option value="duration_asc">Duration (Shortest)</option>
              <option value="duration_desc">Duration (Longest)</option>
            </select>
          </div>
        </div>

        {/* Results Counter and Active Filter Tags */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="text-slate-400 font-mono">
            Showing <span className="font-bold text-amber-400">{filteredLessons.length}</span> of {lessons.length} case records
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Catalog Results Grid / List */}
      {filteredLessons.length > 0 ? (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }
        >
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/60 max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
            <Film className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-slate-200">No matching cases found</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            No lesson matched your search &ldquo;{searchQuery}&rdquo; and selected filter parameters. Try broadening your criteria or reset filters.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400 font-mono">Loading catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
