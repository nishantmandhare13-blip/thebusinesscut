async function test() {
  try {
    const res = await fetch('https://www.themoviedb.org/movie/37799', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    console.log('TMDB HTML status:', res.status);
    const text = await res.text();
    const posterMatch = text.match(/https:\/\/media\.themoviedb\.org\/t\/p\/[^\s"']+|https:\/\/image\.tmdb\.org\/t\/p\/[^\s"']+/g);
    console.log('Matches:', posterMatch ? posterMatch.slice(0, 5) : 'None');
  } catch (e) {
    console.error('Error:', e);
  }
}
test();
