'use client';

import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

interface ClapperSignatureProps {
  className?: string;
}

export const ClapperSignature: React.FC<ClapperSignatureProps> = ({ className = '' }) => {
  const [animationKey, setAnimationKey] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/90 backdrop-blur-md shadow-2xl overflow-hidden group ${className}`}
      aria-label="The Business Cut brand signature lockup: Business, Scene by Scene. Learning, TBC."
    >
      {/* Subtle ambient cinematic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Screen-reader accessible announcement */}
      <span className="sr-only">
        The Business Cut — Business, Scene by Scene. Learning, TBC (To Be Continued).
      </span>

      {isReducedMotion ? (
        /* Reduced Motion Fallback: Stable final logo lockup */
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex items-center gap-4">
            <img
              src="/logo-white-text.png"
              alt="The Business Cut"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
          <p className="font-serif font-extrabold text-white text-sm sm:text-base tracking-wider drop-shadow-md">
            Business, Scene by Scene.{' '}
            <span className="text-amber-400 font-black">Learning, TBC.</span>
          </p>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Continuous Executive Education
          </span>
        </div>
      ) : (
        /* Active Animated Signature */
        <div key={animationKey} className="flex flex-col items-center text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-[100px]">
            {/* Clapperboard Vector Element */}
            <div className="relative w-28 h-20 sm:w-32 sm:h-24 shrink-0" aria-hidden="true">
              <svg
                viewBox="0 0 160 120"
                className="w-full h-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Lower Slate Base Body */}
                <rect
                  x="10"
                  y="42"
                  width="140"
                  height="72"
                  rx="10"
                  fill="#061226"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                />

                {/* Growth Chart Bars inside Slate */}
                <rect x="30" y="86" width="14" height="18" rx="2" fill="#FEF3E2" />
                <rect x="52" y="74" width="14" height="30" rx="2" fill="#FEF3E2" />
                <rect x="74" y="60" width="14" height="44" rx="2" fill="#FEF3E2" />

                {/* Golden Ascending Trend Arrow */}
                <path
                  d="M24 88 C 45 84, 75 70, 98 48"
                  stroke="#D99E32"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <polygon points="92,45 106,44 102,58" fill="#D99E32" />

                {/* Slate "TBC" Text Badge (Fades in after clapper closes) */}
                <g className="animate-tbc-slate-reveal">
                  <rect
                    x="95"
                    y="72"
                    width="48"
                    height="26"
                    rx="5"
                    fill="#0F172A"
                    stroke="#D99E32"
                    strokeWidth="1.5"
                  />
                  <text
                    x="119"
                    y="89"
                    textAnchor="middle"
                    fill="#FEF3E2"
                    fontSize="13"
                    fontWeight="900"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    letterSpacing="1.5"
                  >
                    TBC
                  </text>
                </g>

                {/* Clapper Hinge Pivot point */}
                <circle cx="15" cy="42" r="4.5" fill="#64748B" />

                {/* Animated Clapper Arm (Snaps down from 22deg to 0deg) */}
                <g
                  className="animate-clapper-snap origin-[15px_42px]"
                  style={{ transformOrigin: '15px 42px' }}
                >
                  {/* Top Bar Background */}
                  <rect
                    x="8"
                    y="18"
                    width="144"
                    height="22"
                    rx="5"
                    fill="#061226"
                    stroke="#334155"
                    strokeWidth="2"
                  />
                  {/* Alternating Cream Chevrons */}
                  <polygon points="26,19 40,19 28,39 14,39" fill="#FEF3E2" />
                  <polygon points="62,19 76,19 64,39 50,39" fill="#FEF3E2" />
                  <polygon points="98,19 112,19 100,39 86,39" fill="#FEF3E2" />
                  <polygon points="134,19 148,19 136,39 122,39" fill="#FEF3E2" />
                </g>
              </svg>
            </div>

            {/* Revealed Typography Brand Lockup */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left animate-brand-reveal">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-amber-400">
                Continuous Learning • TBC
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white mt-0.5">
                THE BUSINESS CUT
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300 font-medium">
                  To Be Continued — Master the Next Scene
                </span>
              </div>
            </div>
          </div>

          {/* Catchy Bold White Tagline Lockup */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-serif font-extrabold text-white text-sm sm:text-base tracking-wide drop-shadow-md">
              Business, Scene by Scene.{' '}
              <span className="text-amber-400 font-black">Learning, TBC.</span>
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                MBA Executive Case Method
              </span>
              <button
                type="button"
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-amber-300 transition px-2 py-1 rounded-md hover:bg-slate-800"
                title="Replay brand signature animation"
                aria-label="Replay brand signature animation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Replay</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS Keyframes for lightweight, dependency-free animation */}
      <style jsx>{`
        @keyframes clapperSnap {
          0% {
            transform: rotate(-24deg);
          }
          25% {
            transform: rotate(-24deg);
          }
          40% {
            transform: rotate(2deg);
          }
          48% {
            transform: rotate(-3deg);
          }
          55% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes tbcSlateReveal {
          0%,
          45% {
            opacity: 0;
            transform: scale(0.7) translateY(4px);
          }
          60% {
            opacity: 1;
            transform: scale(1.08) translateY(0);
          }
          75% {
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes brandReveal {
          0%,
          48% {
            opacity: 0;
            transform: translateX(-10px);
          }
          70% {
            opacity: 0.8;
            transform: translateX(2px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-clapper-snap {
          animation: clapperSnap 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-tbc-slate-reveal {
          animation: tbcSlateReveal 1.6s ease-out forwards;
        }

        .animate-brand-reveal {
          animation: brandReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-clapper-snap,
          .animate-tbc-slate-reveal,
          .animate-brand-reveal {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};
