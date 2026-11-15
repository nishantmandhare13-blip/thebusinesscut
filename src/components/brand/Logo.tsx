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
      tagline: 'text-[9px] tracking-wider'
    },
    md: {
      img: 'h-8 sm:h-9 w-auto object-contain',
      tagline: 'text-[10px] tracking-wider'
    },
    lg: {
      img: 'h-12 sm:h-14 w-auto object-contain',
      tagline: 'text-xs tracking-widest'
    },
    hero: {
      img: 'h-16 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]',
      tagline: 'text-xs sm:text-sm font-semibold tracking-widest'
    }
  };

  const currentSize = sizeClasses[size];

  const content = (
    <div className={`flex flex-col items-start ${className}`}>
      <img
        src={imgSrc}
        alt="The Business Cut Logo"
        className={`${currentSize.img} transition`}
      />
      {showTagline && (
        <span
          className={`font-mono uppercase text-amber-400 font-semibold -mt-0.5 select-none ${currentSize.tagline} ${taglineClassName}`}
        >
          Business, Scene by Scene
        </span>
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
