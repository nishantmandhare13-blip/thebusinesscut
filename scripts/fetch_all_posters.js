const fs = require('fs');
const path = require('path');

const { RAW_LESSONS } = require('./catalog_part1.js');
const { LESSONS_PART2 } = require('./catalog_part2.js');
const { LESSONS_PART3 } = require('./catalog_part3.js');
const { LESSONS_PART4 } = require('./catalog_part4.js');

const allLessons = [...RAW_LESSONS, ...LESSONS_PART2, ...LESSONS_PART3, ...LESSONS_PART4];
const uniqueFilms = Array.from(new Set(allLessons.map(l => `${l.filmTitle}:::${l.releaseYear}`)))
  .map(str => {
    const [title, year] = str.split(':::');
    return { title, year: parseInt(year) };
  });

console.log(`Searching posters for ${uniqueFilms.length} unique films...`);

async function getPosterForFilm(title, year) {
  const cleanTitle = title.replace(/ /g, '_');
  const candidates = [
    `${cleanTitle}_(${year}_film)`,
    `${cleanTitle}_(film)`,
    `${cleanTitle}_(${year}_miniseries)`,
    `${cleanTitle}_(miniseries)`,
    `${cleanTitle}_(TV_series)`,
    `${cleanTitle}`
  ];

  for (const slug of candidates) {
    try {
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'TheBusinessCutLMS/1.0 (educational; info@thebusinesscut.org)' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.thumbnail && data.thumbnail.source) {
          return data.thumbnail.source;
        }
      }
    } catch (e) {
      // try next
    }
  }

  // Fallback search API
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(title + ' ' + year + ' film poster')}&gsrlimit=3&pithumbsize=500`;
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'TheBusinessCutLMS/1.0 (educational; info@thebusinesscut.org)' }
    });
    if (res.ok) {
      const data = await res.json();
      const pages = data.query?.pages;
      if (pages) {
        for (const p of Object.values(pages)) {
          if (p.thumbnail?.source) {
            return p.thumbnail.source;
          }
        }
      }
    }
  } catch (e) {}

  return null;
}

async function main() {
  const posterMap = {};
  let count = 0;

  for (const f of uniqueFilms) {
    const key = `${f.title}:::${f.year}`;
    const poster = await getPosterForFilm(f.title, f.year);
    if (poster) {
      posterMap[key] = poster;
      count++;
      console.log(`[${count}/${uniqueFilms.length}] ✓ ${f.title} (${f.year}) -> ${poster.slice(0, 70)}...`);
    } else {
      console.log(`[--/${uniqueFilms.length}] ✗ ${f.title} (${f.year}) - No poster found`);
    }
  }

  console.log(`\nFound posters for ${count} of ${uniqueFilms.length} films.`);
  fs.writeFileSync(path.join(__dirname, 'posters_map.json'), JSON.stringify(posterMap, null, 2));
}

main();
