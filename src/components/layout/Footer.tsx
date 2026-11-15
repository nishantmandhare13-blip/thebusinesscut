import React from 'react';
import Link from 'next/link';
import { Film, Shield, BookOpen, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Product identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                <Film className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg font-bold text-slate-100 tracking-tight">
                The Business Cut
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A specialized executive learning management platform for MBA candidates and product management professionals. We use world-class cinema as case studies to teach high-stakes decision making, product discovery, capital allocation, and business ethics.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-300/80 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Academic Edition • 104 Distinct Seed Concepts</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Curriculum
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="hover:text-amber-400 transition">
                  Case Catalog (104 Lessons)
                </Link>
              </li>
              <li>
                <Link href="/paths" className="hover:text-amber-400 transition">
                  Learning Paths & Tracks
                </Link>
              </li>
              <li>
                <Link href="/assignments" className="hover:text-amber-400 transition">
                  Executive Assignments
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-amber-400 transition">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/instructor" className="hover:text-purple-400 transition">
                  Instructor Workspace
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: TMDB Attribution & Compliance */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold mb-1">
              Metadata Attribution
            </h4>
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-2">
              {/* TMDB Badge */}
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px] tracking-wider border border-emerald-500/30">
                  TMDB API
                </div>
                <span className="text-[11px] font-semibold text-slate-300">Compliance Verified</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                This product uses the TMDB API but is not endorsed or certified by TMDB. Film metadata, titles, and release dates are referenced strictly for educational commentary under fair use guidelines.
              </p>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 transition"
              >
                <span>themoviedb.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal compliance */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2026 The Business Cut. All original scene analyses, frameworks, and pedagogical assignments are licensed for educational instruction.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono">WCAG AA Compliant</span>
            <span>•</span>
            <Link href="/admin" className="hover:text-slate-200 transition">
              Governance & API Config
            </Link>
            <span>•</span>
            <Link href="/dashboard" className="hover:text-slate-200 transition">
              Privacy & Consent Controls
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
