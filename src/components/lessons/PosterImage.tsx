'use client';

import React, { useState } from 'react';
import { PosterPlaceholder } from './PosterPlaceholder';

interface PosterImageProps {
  posterPath?: string | null;
  filmTitle: string;
  releaseYear: number;
  className?: string;
  imageClassName?: string;
  size?: 'w342' | 'w500' | 'w780' | 'original';
}

/**
 * Resolves a poster path into an ultra-sharp, high-resolution image URL.
 * Automatically upgrades:
 * 1. TMDB relative paths to high-DPI 'w780' or 'original' resolution
 * 2. Wikimedia thumbnails to their uncompressed master theatrical resolution
 */
export const getPosterUrl = (
  path?: string | null,
  size: 'w342' | 'w500' | 'w780' | 'original' = 'w780'
): string | null => {
  if (!path) return null;

  // Uncompress Wikimedia thumbnail paths to high-resolution master images
  if (path.includes('wikimedia.org') && path.includes('/thumb/')) {
    const unscaled = path.replace(
      /https:\/\/(?:thumb|upload)\.wikimedia\.org\/wikipedia\/([^/]+)\/thumb\/([^/]+\/[^/]+\/[^/]+)\/\d+px-[^/?]+/,
      'https://upload.wikimedia.org/wikipedia/$1/$2'
    );
    if (unscaled !== path) return unscaled;
  }

  // Upgrade existing TMDB URLs with w500 to w780/original for retina crispness
  if (path.includes('image.tmdb.org/t/p/')) {
    return path.replace(/\/t\/p\/w\d+\//, `/t/p/${size}/`);
  }

  // Handle absolute URLs directly
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // TMDB relative path: prefix with official image CDN
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://image.tmdb.org/t/p/${size}${cleanPath}`;
};

export const PosterImage: React.FC<PosterImageProps> = ({
  posterPath,
  filmTitle,
  releaseYear,
  className = 'w-full h-full',
  imageClassName = 'w-full h-full object-cover transition duration-300',
  size = 'w780'
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedUrl = getPosterUrl(posterPath, size);

  if (!resolvedUrl || hasError) {
    return <PosterPlaceholder title={filmTitle} year={releaseYear} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 ${className}`}>
      <img
        src={resolvedUrl}
        alt={`${filmTitle} (${releaseYear}) theatrical poster`}
        className={imageClassName}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
