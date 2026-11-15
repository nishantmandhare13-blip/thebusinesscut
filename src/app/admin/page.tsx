'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Key,
  Users,
  Film,
  CheckCircle2,
  AlertCircle,
  Database,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Lock,
  Radio,
  Sliders,
  Check
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { UserRole } from '@/types/lms';

export default function AdminSettingsPage() {
  const {
    adminSettings,
    updateAdminSettings,
    allUsers,
    switchRole,
    lessons,
    resetDemoData
  } = useLms();

  const [tmdbInputKey, setTmdbInputKey] = useState(adminSettings.tmdbApiKey || '');
  const [testStatus, setTestStatus] = useState<{
    tested: boolean;
    success?: boolean;
    message?: string;
  }>({ tested: false });
  const [testingInProgress, setTestingInProgress] = useState(false);
  const [serverStatus, setServerStatus] = useState<{ connected: boolean; message: string }>({
    connected: false,
    message: 'Checking server environment...'
  });

  // Check server TMDB status
  useEffect(() => {
    fetch('/api/tmdb?type=status')
      .then(res => res.json())
      .then(data => {
        setServerStatus({
          connected: data.connected,
          message: data.message
        });
      })
      .catch(() => {
        setServerStatus({
          connected: false,
          message: 'Could not contact internal TMDB proxy route.'
        });
      });
  }, []);

  const handleTestTmdbKey = async () => {
    setTestingInProgress(true);
    setTestStatus({ tested: false });

    try {
      const res = await fetch('/api/tmdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: tmdbInputKey })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setTestStatus({
          tested: true,
          success: true,
          message: 'TMDB API key successfully verified with themoviedb.org servers!'
        });
        updateAdminSettings({
          tmdbApiKey: tmdbInputKey,
          tmdbApiConnected: true
        });
      } else {
        setTestStatus({
          tested: true,
          success: false,
          message: data.error || 'TMDB rejected the provided key.'
        });
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to connect to TMDB endpoint.';
      setTestStatus({
        tested: true,
        success: false,
        message: errorMsg
      });
    } finally {
      setTestingInProgress(false);
    }
  };

  const verifiedCount = lessons.filter(l => l.verificationStatus === 'verified').length;
  const needsReviewCount = lessons.filter(l => l.verificationStatus === 'needs_instructor_review').length;
  const publishedCount = lessons.filter(l => l.status === 'published').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <ShieldAlert className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
              Platform Administration & System Controls
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Admin Governance & Integrations
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage user roles, configure TMDB API proxy keys, and enforce catalog publishing guardrails.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            if (confirm('Reset entire platform state back to initial 104-lesson seed? This will purge custom lessons and reset progress.')) {
              resetDemoData();
              alert('Platform state reset to initial seed.');
            }
          }}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 flex items-center gap-1.5 self-start sm:self-auto transition"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span>Reset Demo Database</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): TMDB & Catalog Settings */}
        <div className="lg:col-span-2 space-y-8">
          {/* Card 1: TMDB API Integration */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-amber-400" />
                  <h2 className="font-serif text-lg font-bold text-slate-100">
                    TMDB API Configuration & Server Proxy
                  </h2>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The Business Cut uses server-side API proxy routes (<code>/api/tmdb</code>) so your API key is never exposed to client browsers. If no key is set, the app runs gracefully using polished editorial placeholder artwork.
                </p>
              </div>

              {/* Status Badge */}
              <div className="shrink-0">
                {serverStatus.connected || adminSettings.tmdbApiConnected ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Connected</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Fallback Mode Active</span>
                  </span>
                )}
              </div>
            </div>

            {/* API Key Form */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                TMDB v3 API Key (Private Secret)
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="password"
                  value={tmdbInputKey}
                  onChange={(e) => setTmdbInputKey(e.target.value)}
                  placeholder="Enter 32-character TMDB API Key..."
                  className="flex-1 px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="button"
                  onClick={handleTestTmdbKey}
                  disabled={testingInProgress || !tmdbInputKey.trim()}
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs transition font-mono shrink-0"
                >
                  {testingInProgress ? 'Verifying...' : 'Test & Save Key'}
                </button>
              </div>

              {testStatus.tested && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono flex items-start gap-2 border ${
                    testStatus.success
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                      : 'bg-rose-950/40 text-rose-300 border-rose-500/30'
                  }`}
                >
                  {testStatus.success ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{testStatus.message}</span>
                </div>
              )}

              <p className="text-[11px] text-slate-400">
                Server status: {serverStatus.message}
              </p>
            </div>

            {/* TMDB Attribution Preview */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/40 space-y-2">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] tracking-wider border border-emerald-500/30">
                  TMDB LOGO & BADGE
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  Current Attribution Disclosure:
                </span>
              </div>
              <blockquote className="text-xs font-mono text-slate-300 italic border-l-2 border-amber-500/40 pl-3">
                &ldquo;This product uses the TMDB API but is not endorsed or certified by TMDB.&rdquo;
              </blockquote>
              <p className="text-[11px] text-slate-400">
                TMDB guidelines require this disclosure on all pages displaying movie artwork or metadata.
              </p>
            </div>
          </div>

          {/* Card 2: Catalog Publishing & Content Moderation */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <h2 className="font-serif text-lg font-bold text-slate-100">
                Catalog Moderation & Visibility Governance
              </h2>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-serif font-bold text-emerald-400">{verifiedCount}</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                  Verified Details
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-serif font-bold text-amber-400">{needsReviewCount}</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                  Needs Review
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-serif font-bold text-purple-400">{publishedCount}</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                  Published Cases
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-200 block">
                    Show Only Published Lessons to Students
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Hides draft and in-review lessons from student search results.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={adminSettings.catalogPublishedOnly}
                  onChange={(e) =>
                    updateAdminSettings({ catalogPublishedOnly: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                />
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-200 block">
                    Allow Student Case Brief Submissions
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Permits students to submit practical assignments for faculty grading.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={adminSettings.allowStudentSubmissions}
                  onChange={(e) =>
                    updateAdminSettings({ allowStudentSubmissions: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                />
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-slate-200 block">
                    Audio Cues Enabled
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Enable short instructor-authorized sound cues with text fallbacks.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={adminSettings.audioPlaybackEnabled}
                  onChange={(e) =>
                    updateAdminSettings({ audioPlaybackEnabled: e.target.checked })
                  }
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-amber-500 focus:ring-amber-500"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): User & Role Directory */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <h2 className="font-serif text-lg font-bold text-slate-100">
                User & Role Management
              </h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Active persona accounts. Click &ldquo;Switch To&rdquo; to simulate any role.
            </p>

            <div className="space-y-3 pt-2">
              {allUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-200">{user.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">{user.email}</div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        user.role === 'student'
                          ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                          : user.role === 'instructor'
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {user.role}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[11px]">
                    <span className="text-slate-400 truncate max-w-[150px]">
                      {user.specialization}
                    </span>
                    <button
                      type="button"
                      onClick={() => switchRole(user.role)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition"
                    >
                      Switch To
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health Summary */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              Deployment Environment
            </h4>
            <div className="space-y-2 font-mono text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>Next.js Framework:</span>
                <span className="text-slate-200">16.4.6 (App Router)</span>
              </div>
              <div className="flex justify-between">
                <span>Vercel Ready:</span>
                <span className="text-emerald-400">Yes (Serverless Routes)</span>
              </div>
              <div className="flex justify-between">
                <span>Local Storage Key:</span>
                <span className="text-slate-200">the_business_cut_lms_v1</span>
              </div>
              <div className="flex justify-between">
                <span>Database Status:</span>
                <span className="text-amber-400">Demo Mode Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
