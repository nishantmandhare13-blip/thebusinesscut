'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, FileText, ShieldAlert, Sparkles } from 'lucide-react';
import { AudioCue } from '@/types/lms';

interface AudioCuePlayerProps {
  cue?: AudioCue;
  className?: string;
}

export const AudioCuePlayer: React.FC<AudioCuePlayerProps> = ({ cue, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!cue) return null;

  const hasAudioUrl = Boolean(cue.audioUrl);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div
      className={`rounded-xl border border-amber-500/20 bg-slate-900/80 p-4 shadow-sm backdrop-blur-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left info */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Instructor Audio Cue
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono border ${
                  cue.rightsStatus === 'licensed'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : cue.rightsStatus === 'original'
                    ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                    : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                }`}
              >
                {cue.rightsStatus === 'instructor_reference_needed'
                  ? 'Instructor Reference Needed'
                  : cue.rightsStatus.toUpperCase()}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-slate-100 mt-0.5">{cue.title}</h4>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{cue.description}</p>
          </div>
        </div>

        {/* Right controls / text cue badge */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          {hasAudioUrl ? (
            <>
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition"
                aria-label={isPlaying ? 'Pause audio cue' : 'Play audio cue'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <audio
                ref={audioRef}
                src={cue.audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                preload="none"
              />
            </>
          ) : (
            <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Text Cue Fallback</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowTranscript(!showTranscript)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition ${
              showTranscript
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
            }`}
            aria-expanded={showTranscript}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Transcript</span>
          </button>
        </div>
      </div>

      {/* Transcript or Text Fallback Box */}
      {(showTranscript || !hasAudioUrl) && (
        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs">
          <div className="flex items-start gap-2 bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-slate-300">
            <span className="text-amber-400 font-serif font-bold text-sm leading-none shrink-0">“</span>
            <div className="space-y-1">
              <p className="font-mono text-slate-200 italic">{cue.transcript}</p>
              {!hasAudioUrl && (
                <p className="text-[11px] text-amber-400/80 flex items-center gap-1.5 pt-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    Audio is optional. No copyrighted film audio is embedded; instructors may attach authorized media in settings.
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
