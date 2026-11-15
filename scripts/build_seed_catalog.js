const fs = require('fs');
const path = require('path');

// Helper to assemble full lesson object
function makeLesson(data) {
  return {
    id: data.id,
    filmTitle: data.filmTitle,
    releaseYear: data.releaseYear,
    tmdbMovieId: data.tmdbMovieId || null,
    subject: data.subject,
    topicTags: data.topicTags,
    lessonTitle: data.lessonTitle,
    learningObjective: data.learningObjective,
    difficulty: data.difficulty,
    durationMinutes: data.durationMinutes,
    format: data.format,
    sceneDescription: data.sceneDescription,
    sceneTimestampRef: data.sceneTimestampRef || 'Instructor reference needed',
    conceptExplanation: data.conceptExplanation,
    framework: data.framework,
    discussionQuestions: data.discussionQuestions,
    practicalAssignment: data.practicalAssignment,
    knowledgeCheck: data.knowledgeCheck,
    instructorGuidance: data.instructorGuidance,
    verificationStatus: data.verificationStatus || 'verified',
    status: data.status || 'published',
    imageAttribution: data.imageAttribution || {
      source: data.tmdbMovieId ? 'tmdb' : 'editorial_placeholder',
      license: 'Educational Commentary / TMDB Metadata Guidelines',
      notes: data.tmdbMovieId ? `Verified TMDB ID ${data.tmdbMovieId}` : 'Editorial conceptual artwork placeholder',
      posterPath: data.posterPath || null
    },
    audioCue: data.audioCue || {
      title: 'Pedagogical Attention Cue',
      description: 'Audio marker for key framework transition.',
      transcript: `Sound cue: "${data.lessonTitle.slice(0, 30)}..." — instructor to add licensed audio.`,
      durationSeconds: 3,
      rightsStatus: 'instructor_reference_needed'
    },
    featured: !!data.featured,
    createdAt: data.createdAt || '2026-01-15T08:00:00Z',
    updatedAt: data.updatedAt || '2026-02-15T12:00:00Z'
  };
}

// Import base lessons from generate_catalog.js
const { RAW_LESSONS } = require('./catalog_part1.js');
const { LESSONS_PART2 } = require('./catalog_part2.js');
const { LESSONS_PART3 } = require('./catalog_part3.js');
const { LESSONS_PART4 } = require('./catalog_part4.js');

const ALL_LESSONS = [...RAW_LESSONS, ...LESSONS_PART2, ...LESSONS_PART3, ...LESSONS_PART4].map(makeLesson);

console.log(`Aggregated ${ALL_LESSONS.length} total lessons across all 12 MBA subjects.`);

const targetFile = path.join(__dirname, '..', 'src', 'data', 'seedLessons.ts');
const fileContent = `import { Lesson } from '@/types/lms';

export const SEED_LESSONS: Lesson[] = ${JSON.stringify(ALL_LESSONS, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log(`Successfully generated ${targetFile} with ${ALL_LESSONS.length} records.`);
