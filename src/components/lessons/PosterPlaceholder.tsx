import React from 'react';
import { Film } from 'lucide-react';

interface PosterPlaceholderProps {
  title: string;
  year: number;
  subject?: string;
  className?: string;
}

// Generate deterministic pleasing subtle hues based on title string
function hashColor(str: string): { bg: string; accent: string } {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const palettes = [
    { bg: 'from-slate-900 to-indigo-950', accent: 'text-amber-400 border-amber-500/30' },
    { bg: 'from-slate-950 to-blue-950', accent: 'text-sky-400 border-sky-500/30' },
    { bg: 'from-zinc-900 to-emerald-950', accent: 'text-emerald-400 border-emerald-500/30' },
    { bg: 'from-neutral-900 to-stone-900', accent: 'text-yellow-400 border-yellow-500/30' },
    { bg: 'from-slate-950 to-purple-950', accent: 'text-violet-400 border-violet-500/30' },
    { bg: 'from-zinc-950 to-rose-950', accent: 'text-rose-400 border-rose-500/30' }
  ];
  const index = Math.abs(hash) % palettes.length;
  return palettes[index];
}

export const PosterPlaceholder: React.FC<PosterPlaceholderProps> = ({
  title,
  year,
  subject,
  className = ''
}) => {
  const { bg, accent } = hashColor(title);

  return (
    <div
      className={`relative w-full aspect-[2/3] bg-gradient-to-b ${bg} flex flex-col justify-between p-4 overflow-hidden rounded-lg border border-slate-800 shadow-md ${className}`}
    >
      {/* Film grain subtle overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      {/* Header with year and cinema icon */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[11px] tracking-widest font-mono text-slate-400 font-semibold">
          CINEMATIC CASE
        </span>
        <span className="text-xs font-mono font-bold text-amber-300/90">{year}</span>
      </div>

      {/* Center typography */}
      <div className="relative z-10 my-auto text-center px-1">
        <div className="inline-flex p-2.5 rounded-full bg-white/5 border border-white/10 mb-3 text-slate-300">
          <Film className="w-5 h-5 text-amber-400" />
        </div>
        <h3 className="font-serif text-lg font-bold text-slate-100 leading-tight line-clamp-3">
          {title}
        </h3>
        {subject && (
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-2 line-clamp-1">
            {subject}
          </p>
        )}
      </div>

      {/* Footer footer aesthetic mark */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
        <span className="font-serif italic text-amber-200/70">The Business Cut</span>
        <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
          Archival Edition
        </span>
      </div>
    </div>
  );
};
