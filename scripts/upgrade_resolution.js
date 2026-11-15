const fs = require('fs');
const path = require('path');

const mapPath = path.join(__dirname, 'posters_map.json');
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

// Fix Air (2023) directly to TMDB original
map['Air:::2023'] = 'https://image.tmdb.org/t/p/original/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg';

let upgraded = 0;
for (const [key, url] of Object.entries(map)) {
  if (url.includes('wikimedia.org') && url.includes('/thumb/')) {
    // Example: https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men.jpg/330px-12_Angry_Men.jpg
    // Convert to: https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men.jpg
    const match = url.match(/https:\/\/(?:thumb|upload)\.wikimedia\.org\/wikipedia\/([^/]+)\/thumb\/([^/]+\/[^/]+\/[^/]+)\/\d+px-[^/?]+/);
    if (match) {
      const lang = match[1]; // e.g. 'en' or 'commons'
      const filePath = match[2]; // e.g. 'b/b5/12_Angry_Men.jpg'
      const highResUrl = `https://upload.wikimedia.org/wikipedia/${lang}/${filePath}`;
      map[key] = highResUrl;
      upgraded++;
      console.log(`[UPGRADED] ${key} -> ${highResUrl}`);
    }
  } else if (url.includes('tmdb.org') && url.includes('/w500/')) {
    map[key] = url.replace('/w500/', '/original/');
    upgraded++;
  }
}

console.log(`Upgraded ${upgraded} URLs to master high-resolution artwork.`);
fs.writeFileSync(mapPath, JSON.stringify(map, null, 2));
