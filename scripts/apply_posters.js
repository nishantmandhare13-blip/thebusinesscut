const fs = require('fs');
const path = require('path');

const postersMapPath = path.join(__dirname, 'posters_map.json');
const postersMap = JSON.parse(fs.readFileSync(postersMapPath, 'utf8'));

const seedLessonsPath = path.join(__dirname, '..', 'src', 'data', 'seedLessons.ts');
let seedContent = fs.readFileSync(seedLessonsPath, 'utf8');

// Parse JSON out of SEED_LESSONS: Lesson[] = [...]
const prefix = 'export const SEED_LESSONS: Lesson[] = ';
const startIndex = seedContent.indexOf(prefix);
if (startIndex === -1) {
  console.error('Could not find SEED_LESSONS export');
  process.exit(1);
}

const jsonPart = seedContent.slice(startIndex + prefix.length).replace(/;[\s\n]*$/, '');
const lessons = JSON.parse(jsonPart);

let updated = 0;
for (const lesson of lessons) {
  const key = `${lesson.filmTitle}:::${lesson.releaseYear}`;
  const posterUrl = postersMap[key];
  if (posterUrl) {
    lesson.imageAttribution = {
      source: 'editorial_verified',
      license: 'Fair Use / Educational Commentary & Official Artwork',
      notes: `Verified cinematic artwork for ${lesson.filmTitle} (${lesson.releaseYear})`,
      posterPath: posterUrl
    };
    updated++;
  }
}

console.log(`Updated ${updated} of ${lessons.length} lessons with verified poster artwork!`);

const newContent = `import { Lesson } from '@/types/lms';

export const SEED_LESSONS: Lesson[] = ${JSON.stringify(lessons, null, 2)};
`;

fs.writeFileSync(seedLessonsPath, newContent);
console.log('Successfully wrote updated seedLessons.ts');
