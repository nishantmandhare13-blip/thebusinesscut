'use client';

import React, { useState } from 'react';
import { PosterPlaceholder } from './PosterPlaceholder';

interface PosterImageProps {
  posterPath?: string | null;
  filmTitle: string;
  releaseYear: number;
  className?: string;
  imageClassName?: string;
}

/**
 * Resolves a poster path into a fully qualified image URL.
 * Supports:
 * 1. TMDB relative paths: e.g. "/cvUfwhoAReL4e5eegFCHM73rIda.jpg" -> "https://image.tmdb.org/t/p/w500/cvUfwho..."
 * 2. Absolute HTTPS URLs: e.g. "https://upload.wikimedia.org/..." or custom CDN URLs
 */
export const getPosterUrl = (
  path?: string | null,
  size: 'w200' | 'w300' | 'w500' | 'original' = 'w500'
): string | null => {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://image.tmdb.org/t/p/${size}${cleanPath}`;
};

export const PosterImage: React.FC<PosterImageProps> = ({
  posterPath,
  filmTitle,
  releaseYear,
  className = 'w-full h-full',
  imageClassName = 'w-full h-full object-cover transition duration-300'
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedUrl = getPosterUrl(posterPath);

  if (!resolvedUrl || hasError) {
    return <PosterPlaceholder title={filmTitle} year={releaseYear} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 ${className}`}>
      <img
        src={resolvedUrl}
        alt={`${filmTitle} (${releaseYear}) poster`}
        className={imageClassName}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
