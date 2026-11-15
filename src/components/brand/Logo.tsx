'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'white-text' | 'black-text';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  taglineClassName?: string;
  className?: string;
  asLink?: boolean;
  href?: string;
}

/**
 * Compact "TBC" monogram badge for tight spaces, loading states, and status indicators.
 * Signifies "The Business Cut" and "To Be Continued" (Continuous Learning).
 */
export const TbcMonogram: React.FC<{
  size?: 'xs' | 'sm' | 'md';
  className?: string;
  subtext?: string;
}> = ({ size = 'sm', className = '', subtext }) => {
  const sizeStyles = {
    xs: 'text-[9px] px-1 py-0.2',
    sm: 'text-[10px] px-1.5 py-0.5',
    md: 'text-xs px-2 py-0.5'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-black rounded-md bg-slate-900/90 border border-amber-500/40 text-amber-300 shadow-sm ${sizeStyles[size]} ${className}`}
      title="The Business Cut (TBC) — Continuous Executive Learning"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      <span>TBC</span>
      {subtext && <span className="font-normal text-slate-400 font-sans">• {subtext}</span>}
    </span>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'white-text',
  size = 'md',
  showTagline = true,
  taglineClassName = '',
  className = '',
  asLink = false,
  href = '/'
}) => {
  const imgSrc = variant === 'black-text' ? '/logo.png' : '/logo-white-text.png';

  const sizeClasses = {
    sm: {
      img: 'h-7 sm:h-8 w-auto object-contain',
      tagline: 'text-[10px] tracking-wide'
    },
    md: {
      img: 'h-8 sm:h-9 w-auto object-contain',
      tagline: 'text-[11px] tracking-wide'
    },
    lg: {
      img: 'h-12 sm:h-14 w-auto object-contain',
      tagline: 'text-xs sm:text-sm tracking-wide'
    },
    hero: {
      img: 'h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]',
      tagline: 'text-sm sm:text-base md:text-lg tracking-wider'
    }
  };

  const currentSize = sizeClasses[size];

  const content = (
    <div className={`flex flex-col items-start ${className}`}>
      <img
        src={imgSrc}
        alt="The Business Cut (TBC)"
        className={`${currentSize.img} transition`}
      />
      {showTagline && (
        <p
          className={`font-serif font-extrabold text-white leading-tight drop-shadow-md select-none mt-1 ${currentSize.tagline} ${taglineClassName}`}
        >
          Business, Scene by Scene.{' '}
          <span className="text-amber-400 font-black">Learning, TBC.</span>
        </p>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href={href} className="group inline-block hover:opacity-95 transition">
        {content}
      </Link>
    );
  }

  return content;
};
