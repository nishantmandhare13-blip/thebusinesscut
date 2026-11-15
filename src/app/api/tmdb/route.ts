import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') || 'status';
  const id = searchParams.get('id');
  const query = searchParams.get('query');

  const apiKey = process.env.TMDB_API_KEY || process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (type === 'status') {
    return NextResponse.json({
      connected: !!apiKey,
      hasKey: !!apiKey,
      keyMasked: apiKey ? `${apiKey.slice(0, 4)}...${apiKey.slice(-4)}` : null,
      message: apiKey
        ? 'TMDB API key is configured on server.'
        : 'TMDB API key not detected in environment variables. Fallback placeholder artwork is active.'
    });
  }

  if (!apiKey) {
    return NextResponse.json(
      {
        error: 'TMDB_API_KEY is not configured on the server. Fallback metadata active.',
        fallback: true
      },
      { status: 200 }
    );
  }

  try {
    if (type === 'movie' && id) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
        { next: { revalidate: 86400 } } // Cache 24 hours
      );

      if (!res.ok) {
        return NextResponse.json({ error: `TMDB error: ${res.statusText}`, fallback: true }, { status: 200 });
      }

      const data = await res.json();
      return NextResponse.json({
        id: data.id,
        title: data.title,
        releaseDate: data.release_date,
        runtime: data.runtime,
        posterPath: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
        backdropPath: data.backdrop_path ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` : null,
        tagline: data.tagline,
        overview: data.overview,
        voteAverage: data.vote_average,
        genres: data.genres?.map((g: { name: string }) => g.name) || [],
        source: 'tmdb'
      });
    }

    if (type === 'search' && query) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US&page=1`,
        { next: { revalidate: 3600 } }
      );

      if (!res.ok) {
        return NextResponse.json({ results: [], error: 'Search failed' }, { status: 200 });
      }

      const data = await res.json();
      interface TmdbRawItem {
        id: number;
        title: string;
        release_date?: string;
        poster_path?: string | null;
        overview?: string;
      }
      const results = (data.results || []).slice(0, 5).map((m: TmdbRawItem) => ({
        id: m.id,
        title: m.title,
        releaseYear: m.release_date ? parseInt(m.release_date.split('-')[0]) : null,
        posterPath: m.poster_path ? `https://image.tmdb.org/t/p/w200${m.poster_path}` : null,
        overview: m.overview
      }));

      return NextResponse.json({ results });
    }

    return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: errorMsg, fallback: true }, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const testKey = body.apiKey;

    if (!testKey) {
      return NextResponse.json({ error: 'No API key provided' }, { status: 400 });
    }

    // Verify key with TMDB configuration endpoint
    const res = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${testKey}`);
    if (res.ok) {
      return NextResponse.json({
        success: true,
        message: 'Successfully verified connection to TMDB API v3.'
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid TMDB API key. TMDB rejected the credentials.' },
        { status: 400 }
      );
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
