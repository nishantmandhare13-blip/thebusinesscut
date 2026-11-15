'use client';

import React from 'react';
import Link from 'next/link';
import {
  Film,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Brain,
  Layers
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SUBJECT_METADATA } from '@/data/subjects';
import { LessonCard } from '@/components/lessons/LessonCard';
import { SubjectCategory } from '@/types/lms';

export default function HomePage() {
  const { lessons, learningPaths, switchRole } = useLms();

  const featuredLessons = lessons.filter(l => l.featured).slice(0, 6);
  const subjectsList = Object.keys(SUBJECT_METADATA) as SubjectCategory[];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle cinematic spotlight glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Cinematic Case Method for MBA Product Managers</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight">
            Master Product Management & Executive Strategy Through the Power of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Cinema
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Move beyond static 30-page paper case studies. Deconstruct high-stakes decisions, product discovery pivots, market manipulation, and boardroom coups depicted in iconic Hollywood films.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/catalog"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition flex items-center gap-2 group"
            >
              <span>Explore 104 Case Lessons</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/paths"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>View Learning Paths</span>
            </Link>
          </div>

          {/* Key Stat Highlights */}
          <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="font-serif text-3xl font-bold text-amber-400">104</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Original Case Studies
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-slate-100">12</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Core MBA Subject Tracks
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-slate-100">8</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Curated Career Paths
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-emerald-400">100%</div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                Copyright Compliant & Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section: Why Cinema as Case Method? */}
      <section className="py-16 md:py-24 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Pedagogical Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 mt-2">
              Why Cinema as the Modern MBA Case Method?
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Harvard Business School pioneered the business case method in the 1920s using printed text. Film enhances this method by conveying human pressure, cognitive bias, and non-verbal organizational politics in visceral detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-100">
                Decision Under Extreme Ambiguity
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In real product leadership, data is never clean and stakeholders have hidden agendas. Films like <em>Margin Call</em> and <em>Oppenheimer</em> force students to diagnose systemic crisis when metrics diverge and time is expiring.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-100">
                Rigorous Framework Application
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every film scene is paired with an authentic MBA framework: Jobs-to-be-Done in <em>Jobs</em>, Little’s Law in <em>The Founder</em>, Porter’s Trade-offs in <em>Ford v Ferrari</em>, and Nash Equilibrium in <em>A Beautiful Mind</em>.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-100">
                Human Dynamics & Ethical Scaffolding
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Spreadsheets cannot teach emotional intelligence or moral courage. Analyzing <em>12 Angry Men</em>, <em>Spotlight</em>, and <em>Dark Waters</em> trains future executives to cultivate dissent and resist institutional blind spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lessons Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Featured Case Studies
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-100 mt-1">
              Curated Masterclasses from the Catalog
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Hand-picked executive lessons spanning product discovery, unit economics, and leadership.
            </p>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 transition"
          >
            <span>View Full 104-Lesson Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>

      {/* 12 Core Subject Areas Explorer */}
      <section className="py-16 md:py-24 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Comprehensive Curriculum
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-100 mt-2">
              Explore 12 Specialized MBA & PM Domains
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Every lesson is tagged to an essential management competency. Click any subject to filter the catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjectsList.map((subject) => {
              const meta = SUBJECT_METADATA[subject];
              const lessonCount = lessons.filter(l => l.subject === subject).length;

              return (
                <Link
                  key={subject}
                  href={`/catalog?subject=${encodeURIComponent(subject)}`}
                  className="group p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-850 hover:border-amber-500/30 transition flex items-start gap-4"
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 border ${meta.bgLightClass} ${meta.colorClass} ${meta.borderClass}`}
                  >
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-200 group-hover:text-amber-400 transition truncate">
                        {meta.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {lessonCount} cases
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {meta.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role Demonstration Callout */}
      <section className="py-16 border-t border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-8 sm:p-10 text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Pair-Programming & Role-Aware LMS Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
              Built for Students, Faculty, and Academic Administrators
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience the platform as a student completing assignments, an instructor managing cohorts and grading with rubrics, or an admin configuring TMDB integration and publishing rules.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => switchRole('student')}
                className="px-4 py-2.5 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-200 font-mono text-xs hover:bg-sky-500/30 transition flex items-center gap-2"
              >
                <span>Switch to Student (Sarah Chen)</span>
              </button>

              <button
                type="button"
                onClick={() => switchRole('instructor')}
                className="px-4 py-2.5 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-200 font-mono text-xs hover:bg-purple-500/30 transition flex items-center gap-2"
              >
                <span>Switch to Instructor (Prof. Vance)</span>
              </button>

              <button
                type="button"
                onClick={() => switchRole('admin')}
                className="px-4 py-2.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 font-mono text-xs hover:bg-amber-500/30 transition flex items-center gap-2"
              >
                <span>Switch to Admin (Elena Rostova)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
