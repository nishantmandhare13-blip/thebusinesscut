'use client';

import React, { useState } from 'react';
import { X, Check, GraduationCap, Target, Shield, Sparkles, BookOpen } from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SubjectCategory } from '@/types/lms';
import { SUBJECT_METADATA } from '@/data/subjects';

export const OnboardingModal: React.FC = () => {
  const { isOnboardingOpen, setIsOnboardingOpen, currentUser, completeOnboarding } = useLms();

  const [step, setStep] = useState(1);
  const [name, setName] = useState(currentUser.name || '');
  const [email, setEmail] = useState(currentUser.email || '');
  const [mbaProgram, setMbaProgram] = useState(currentUser.mbaProgram || '');
  const [specialization, setSpecialization] = useState(currentUser.specialization || '');
  const [experienceLevel, setExperienceLevel] = useState(
    currentUser.experienceLevel || 'Mid-Career PM (3-5 years)'
  );
  const [learningGoals, setLearningGoals] = useState<string[]>(
    currentUser.learningGoals.length > 0
      ? currentUser.learningGoals
      : ['Master product discovery frameworks', 'Analyze capital allocation & M&A']
  );
  const [preferredTopics, setPreferredTopics] = useState<SubjectCategory[]>(
    currentUser.preferredTopics.length > 0
      ? currentUser.preferredTopics
      : [
          'Product discovery and user research',
          'Product strategy and roadmaps',
          'Prioritization and product metrics'
        ]
  );
  const [dataSharingConsent, setDataSharingConsent] = useState(currentUser.dataSharingConsent);
  const [analyticsConsent, setAnalyticsConsent] = useState(currentUser.analyticsConsent);

  if (!isOnboardingOpen) return null;

  const toggleTopic = (cat: SubjectCategory) => {
    if (preferredTopics.includes(cat)) {
      setPreferredTopics(preferredTopics.filter(t => t !== cat));
    } else {
      setPreferredTopics([...preferredTopics, cat]);
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    completeOnboarding({
      name,
      email,
      mbaProgram,
      specialization,
      experienceLevel,
      learningGoals,
      preferredTopics,
      dataSharingConsent,
      analyticsConsent
    });
  };

  const allSubjects = Object.keys(SUBJECT_METADATA) as SubjectCategory[];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden text-slate-100">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Student Profile & Onboarding
              </span>
            </div>
            <h2 className="text-xl font-serif font-bold text-slate-100">
              Personalize Your MBA Learning Journey
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Step {step} of 3: {step === 1 ? 'Academic Background' : step === 2 ? 'PM Specialization & Topics' : 'Privacy & Consent'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOnboardingOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="e.g. Sarah Chen"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Institutional Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="e.g. sarah.chen@stanford.edu"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    MBA School / University
                  </label>
                  <input
                    type="text"
                    value={mbaProgram}
                    onChange={(e) => setMbaProgram(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    placeholder="e.g. Stanford GSB / Wharton"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Associate / Entry-Level PM">Associate / Entry-Level PM (0-2 yrs)</option>
                    <option value="Mid-Career PM (3-5 years)">Mid-Career PM (3-5 years)</option>
                    <option value="Senior PM / Group PM (6+ years)">Senior PM / Group PM (6+ years)</option>
                    <option value="Career Switcher / Non-Tech">Career Switcher / Consultant</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  PM Specialization Focus
                </label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="e.g. Enterprise AI, Growth & Monetization, Hardware"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Select Your Preferred MBA Subjects (Curates Dashboard Recommendations)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {allSubjects.map((cat) => {
                    const isSelected = preferredTopics.includes(cat);
                    const meta = SUBJECT_METADATA[cat];
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => toggleTopic(cat)}
                        className={`text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-500/40 text-amber-200 font-semibold'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                        }`}
                      >
                        <span className="truncate pr-2">{meta.title}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Learning Goal
                </label>
                <input
                  type="text"
                  value={learningGoals[0] || ''}
                  onChange={(e) => setLearningGoals([e.target.value, ...learningGoals.slice(1)])}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  placeholder="e.g. Master financial modeling and lead high-stakes negotiations"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Privacy & Learning Data Consent
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      The Business Cut stores your progress, quiz attempts, and assignment drafts locally in your browser (Demo Mode). If cloud database synchronization is enabled, your data is visible only to you and your assigned course instructor.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dataSharingConsent}
                      onChange={(e) => setDataSharingConsent(e.target.checked)}
                      className="mt-1 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-xs text-slate-300 leading-normal">
                      Share anonymized cohort learning analytics with course faculty to improve curriculum effectiveness.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      className="mt-1 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                    />
                    <span className="text-xs text-slate-300 leading-normal">
                      Allow progress tracking to generate personalized case study recommendations based on my chosen MBA track.
                    </span>
                  </label>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-950 p-3 rounded-lg border border-slate-800">
                You can download your full learning footprint (JSON export) or request permanent account deletion at any time in Profile Settings.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs shadow-md transition"
            >
              Save Profile & Start Learning
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
