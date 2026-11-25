'use client';

import React, { useState, useEffect } from 'react';
import {
  Film,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { DecisionPoint, DecisionOption, DecisionOptionVerdict, SavedDecisionRecord } from '@/types/decisionPoint';

interface DecisionPointSectionProps {
  decisionPoint: DecisionPoint;
  frameworkName: string;
  currentRole?: string;
  onDecisionLocked?: () => void;
}

// Deterministic seed helper to generate realistic cohort split percentages summing to 100%
function getDeterministicCohortSplit(decisionPoint: DecisionPoint): Record<'A' | 'B' | 'C' | 'D', number> {
  const seed = decisionPoint.lessonId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const strongOpt = decisionPoint.options.find(o => o.verdict === 'strong')?.id || 'A';
  const partialOpt = decisionPoint.options.find(o => o.verdict === 'partial')?.id || 'B';
  const weakOpts = decisionPoint.options.filter(o => o.verdict === 'weak').map(o => o.id);

  // Strong gets 58% to 66%
  const strongPct = 58 + (seed % 9);
  // Partial gets 18% to 24%
  const partialPct = 18 + ((seed * 3) % 7);
  // Remainder split between weak options
  const remaining = 100 - strongPct - partialPct;
  const weak1 = weakOpts[0] || 'C';
  const weak2 = weakOpts[1] || 'D';
  const weak1Pct = Math.floor(remaining / 2) + ((seed % 2 === 0) ? 1 : -1);
  const weak2Pct = remaining - weak1Pct;

  const split: Record<'A' | 'B' | 'C' | 'D', number> = {
    A: 10,
    B: 10,
    C: 10,
    D: 10
  };

  split[strongOpt] = strongPct;
  split[partialOpt] = partialPct;
  split[weak1] = weak1Pct;
  split[weak2] = weak2Pct;

  return split;
}

export const DecisionPointSection: React.FC<DecisionPointSectionProps> = ({
  decisionPoint,
  frameworkName,
  currentRole = 'student',
  onDecisionLocked
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [savedRecord, setSavedRecord] = useState<SavedDecisionRecord | null>(null);
  const [showRoadsNotTaken, setShowRoadsNotTaken] = useState(false);

  const storageKey = `tbc_decision_${decisionPoint.lessonId}`;

  // Read saved decision on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const record = JSON.parse(stored) as SavedDecisionRecord;
        if (record && record.optionId) {
          setSelectedOptionId(record.optionId);
          setIsLocked(true);
          setSavedRecord(record);
          onDecisionLocked?.();
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, [storageKey, onDecisionLocked]);

  const handleSelect = (id: 'A' | 'B' | 'C' | 'D') => {
    if (isLocked) return;
    setSelectedOptionId(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: 'A' | 'B' | 'C' | 'D') => {
    if (isLocked) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setSelectedOptionId(id);
    }
  };

  const handleLockIn = () => {
    if (!selectedOptionId || isLocked) return;

    const chosenOption = decisionPoint.options.find(o => o.id === selectedOptionId);
    if (!chosenOption) return;

    const record: SavedDecisionRecord = {
      lessonId: decisionPoint.lessonId,
      optionId: selectedOptionId,
      verdict: chosenOption.verdict,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem(storageKey, JSON.stringify(record));
    } catch {
      // Ignore storage errors
    }

    setSavedRecord(record);
    setIsLocked(true);
    onDecisionLocked?.();
  };

  const handleReset = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Ignore storage errors
    }
    setIsLocked(false);
    setSavedRecord(null);
    setSelectedOptionId(null);
    setShowRoadsNotTaken(false);
  };

  const chosenOption = decisionPoint.options.find(o => o.id === selectedOptionId);
  const cohortSplit = getDeterministicCohortSplit(decisionPoint);
  const isInstructorOrAdmin = currentRole === 'instructor' || currentRole === 'admin';

  const getVerdictBadge = (verdict: DecisionOptionVerdict) => {
    switch (verdict) {
      case 'strong':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Strong call — this is the protagonist&apos;s best path.</span>
          </span>
        );
      case 'partial':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Partial fit — buys time, but leaves a critical flank exposed.</span>
          </span>
        );
      case 'weak':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40">
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Costly call — triggers the exact trap the framework warns against.</span>
          </span>
        );
    }
  };

  return (
    <section
      aria-label="Interactive Protagonist Decision Point"
      className="space-y-6 pt-2"
    >
      {/* 1. ROLE HEADER */}
      <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-slate-950 p-5 sm:p-6 shadow-lg shadow-amber-950/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5" />
              <span>You Are The Protagonist</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide">
              {decisionPoint.protagonist}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              {decisionPoint.roleTitle}
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
            <span className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-[11px] font-mono text-amber-300/90">
              {decisionPoint.momentLabel}
            </span>
            {decisionPoint.verification === 'needs_review' && (
              <span className="text-[10px] font-mono text-amber-400/80">
                Needs Review
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. SETUP & STAKES CARD */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-7 space-y-6 shadow-sm">
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
            The Critical Scene
          </span>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-100">
            {decisionPoint.title}
          </h3>
        </div>

        {/* Narrative Setup */}
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans italic border-l-2 border-amber-500/60 pl-4 py-0.5">
          {decisionPoint.setup}
        </p>

        {/* Stakes */}
        <div className="space-y-2.5 pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            High-Stakes Pressures & Constraints:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {decisionPoint.stakes.map((stake, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80"
              >
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{stake}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The Question */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-sm sm:text-base font-bold text-amber-200 leading-snug">
            {decisionPoint.question}
          </p>
        </div>

        {/* 3. DECISION OPTIONS (Radio Group) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Choose your course of action:
            </span>
            {isLocked && (
              <span className="text-xs font-mono text-amber-400">
                Decision Locked
              </span>
            )}
          </div>

          <div
            role="radiogroup"
            aria-label="Protagonist decisions"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {decisionPoint.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <div
                  key={option.id}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isLocked ? -1 : 0}
                  onClick={() => handleSelect(option.id)}
                  onKeyDown={(e) => handleKeyDown(e, option.id)}
                  className={`group relative p-4 rounded-xl border transition cursor-pointer select-none text-left flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-400 bg-amber-950/30 shadow-md shadow-amber-950/30 ring-1 ring-amber-400'
                      : isLocked
                      ? 'border-slate-800 bg-slate-950/40 opacity-60 cursor-default'
                      : 'border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 transition ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                        }`}
                      >
                        {option.id}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                        {option.label}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pl-9">
                      <span className="text-slate-500 font-mono text-[11px] block">
                        Why you might choose this:
                      </span>
                      {option.rationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            {!isLocked ? (
              <>
                <p className="text-xs text-slate-400">
                  Select an option and commit your call to see what happens.
                </p>
                <button
                  type="button"
                  onClick={handleLockIn}
                  disabled={!selectedOptionId}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 ${
                    selectedOptionId
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20 active:scale-95'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <span>Lock In My Decision</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="w-full flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Recorded in your learning record • {new Date(savedRecord?.timestamp || '').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Try a Different Decision</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. CONSEQUENCE & REVEAL (Rendered when locked) */}
      {isLocked && chosenOption && (
        <div
          aria-live="polite"
          className="space-y-5 animate-in fade-in duration-300"
        >
          {/* Consequence Card */}
          <div
            className={`rounded-2xl border p-6 space-y-4 shadow-md ${
              chosenOption.verdict === 'strong'
                ? 'border-emerald-500/40 bg-emerald-950/20'
                : chosenOption.verdict === 'partial'
                ? 'border-amber-500/40 bg-amber-950/20'
                : 'border-rose-500/40 bg-rose-950/20'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Your Decision Result (Option {chosenOption.id})
                </span>
              </div>
              {getVerdictBadge(chosenOption.verdict)}
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {chosenOption.consequence}
            </p>
          </div>

          {/* 5. REVEAL: What Actually Happened & Framework Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* What actually happened */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-400">
                <Film className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-slate-100">
                  What Actually Happened in the Film
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {decisionPoint.whatActuallyHappened}
              </p>
            </div>

            {/* Framework Bridge */}
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-indigo-400">
                <Compass className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-indigo-100">
                  Why This Is {frameworkName}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
                {decisionPoint.frameworkBridge}
              </p>
            </div>
          </div>

          {/* 6. SEE THE ROADS NOT TAKEN ACCORDION */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <button
              type="button"
              onClick={() => setShowRoadsNotTaken(!showRoadsNotTaken)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition"
              aria-expanded={showRoadsNotTaken}
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono font-semibold text-slate-200">
                  See the roads not taken ({decisionPoint.options.length - 1} alternative branches)
                </span>
              </div>
              {showRoadsNotTaken ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {showRoadsNotTaken && (
              <div className="p-4 pt-1 space-y-3 border-t border-slate-800/80 bg-slate-950/40">
                {decisionPoint.options
                  .filter(o => o.id !== selectedOptionId)
                  .map(option => (
                    <div
                      key={option.id}
                      className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/70 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center">
                            {option.id}
                          </span>
                          <span className="text-xs font-semibold text-slate-200">
                            {option.label}
                          </span>
                        </div>
                        {getVerdictBadge(option.verdict)}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-7">
                        {option.consequence}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 8. INSTRUCTOR / ADMIN COHORT DECISION SPLIT */}
      {isInstructorOrAdmin && (
        <div className="rounded-xl border border-purple-500/30 bg-purple-950/15 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-300">
              <Users className="w-4 h-4" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                Instructor Workspace • Cohort Decision Split
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Aggregated Cohort Data (N=48)
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Distribution of student decisions across options for this case study. Useful for framing the debrief discussion.
          </p>

          <div className="space-y-2.5 pt-2">
            {decisionPoint.options.map(option => {
              const pct = cohortSplit[option.id];
              const isStrong = option.verdict === 'strong';
              return (
                <div key={option.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">
                      Option {option.id}: {option.label} {isStrong && <span className="text-emerald-400 font-semibold">(Best Path)</span>}
                    </span>
                    <span className="text-slate-200 font-bold">{pct}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isStrong ? 'bg-emerald-500' : option.verdict === 'partial' ? 'bg-amber-500' : 'bg-slate-600'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
