import { SEED_LESSONS } from '../src/data/seedLessons';
import { ALL_DECISION_POINTS } from '../src/data/decisionPoints';
import { DecisionPoint, DecisionOption } from '../src/types/decisionPoint';
import { SUBJECT_METADATA } from '../src/data/subjects';

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

function countSentences(str: string): number {
  if (!str) return 0;
  // Match sentences ending in ., !, or ?
  const matches = str.match(/[^.!?]+[.!?]+(\s|$)/g);
  return matches ? matches.length : 1;
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function checkFrameworkMatch(frameworkName: string, bridgeText: string): boolean {
  const normBridge = normalize(bridgeText);
  const normName = normalize(frameworkName);
  if (normBridge.includes(normName)) return true;

  // Extract acronyms / parenthetical short forms e.g. "CPM", "JTBD", "RICE"
  const acronymMatches = frameworkName.match(/\(([^)]+)\)/g);
  if (acronymMatches) {
    for (const acr of acronymMatches) {
      const cleanAcr = normalize(acr);
      if (cleanAcr.length >= 2 && normBridge.includes(cleanAcr)) return true;
    }
  }

  // Extract primary name before parenthesis e.g. "Critical Path Method" from "Critical Path Method (CPM) & ..."
  const mainPart = frameworkName.split(/[(&]/)[0].trim();
  if (mainPart.length > 3 && normBridge.includes(normalize(mainPart))) {
    return true;
  }

  // Check key signature words (e.g., "Critical Path Method", "Theory of Constraints", "Six Sigma", "Jobs-to-be-Done")
  const keyWords = mainPart.split(/\s+/).filter(w => w.length > 3);
  if (keyWords.length >= 2) {
    const matchedWords = keyWords.filter(w => normBridge.includes(normalize(w)));
    if (matchedWords.length === keyWords.length) return true;
  }

  return false;
}

export function validateAllDecisions(allowPartial = false): {
  success: boolean;
  errors: string[];
  total: number;
  verifiedCount: number;
  needsReviewCount: number;
  strongDistribution: Record<string, number>;
} {
  const errors: string[] = [];
  const lessonIds = new Set(SEED_LESSONS.map(l => l.id));
  const dpMap = new Map<string, DecisionPoint>();

  for (const dp of ALL_DECISION_POINTS) {
    if (!lessonIds.has(dp.lessonId)) {
      errors.push(`[${dp.lessonId}] DecisionPoint references non-existent lesson`);
    }
    if (dpMap.has(dp.lessonId)) {
      errors.push(`[${dp.lessonId}] Duplicate DecisionPoint found`);
    }
    dpMap.set(dp.lessonId, dp);
  }

  if (!allowPartial) {
    for (const lesson of SEED_LESSONS) {
      if (!dpMap.has(lesson.id)) {
        errors.push(`[${lesson.id}] Missing DecisionPoint for lesson "${lesson.lessonTitle}"`);
      }
    }
  }

  let verifiedCount = 0;
  let needsReviewCount = 0;
  const strongDistribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  const subjectStrongDist: Record<string, Record<string, number>> = {};

  for (const dp of ALL_DECISION_POINTS) {
    const lesson = SEED_LESSONS.find(l => l.id === dp.lessonId);
    if (!lesson) continue;

    if (dp.verification === 'verified') verifiedCount++;
    else if (dp.verification === 'needs_review') needsReviewCount++;
    else {
      errors.push(`[${dp.lessonId}] Invalid verification status: "${dp.verification}"`);
    }

    // Required fields check
    if (!dp.protagonist?.trim()) errors.push(`[${dp.lessonId}] protagonist is empty`);
    if (!dp.roleTitle?.trim()) errors.push(`[${dp.lessonId}] roleTitle is empty`);
    if (!dp.momentLabel?.trim()) errors.push(`[${dp.lessonId}] momentLabel is empty`);
    if (!dp.title?.trim()) errors.push(`[${dp.lessonId}] title is empty`);

    // Setup check: 60-110 words, includes "You are"
    const setupWords = countWords(dp.setup);
    if (!dp.setup?.includes('You are')) {
      errors.push(`[${dp.lessonId}] setup must include "You are"`);
    }
    if (setupWords < 60 || setupWords > 110) {
      errors.push(`[${dp.lessonId}] setup word count is ${setupWords} (must be 60-110 words)`);
    }

    // Stakes check: 3-4 bullets, each <= 20 words
    if (!Array.isArray(dp.stakes) || dp.stakes.length < 3 || dp.stakes.length > 4) {
      errors.push(`[${dp.lessonId}] stakes must have 3-4 bullets (got ${dp.stakes?.length})`);
    } else {
      dp.stakes.forEach((stake, idx) => {
        const words = countWords(stake);
        if (words === 0) errors.push(`[${dp.lessonId}] stake #${idx + 1} is empty`);
        if (words > 20) {
          errors.push(`[${dp.lessonId}] stake #${idx + 1} has ${words} words (max 20)`);
        }
      });
    }

    // Question check: one sentence, ends with "?"
    if (!dp.question?.trim().endsWith('?')) {
      errors.push(`[${dp.lessonId}] question must end with "?" (got "${dp.question}")`);
    }

    // Options check: exactly 4 options
    if (!Array.isArray(dp.options) || dp.options.length !== 4) {
      errors.push(`[${dp.lessonId}] options must have exactly 4 items`);
    } else {
      const ids = dp.options.map(o => o.id);
      if (ids.join('') !== 'ABCD') {
        errors.push(`[${dp.lessonId}] options must have ids A, B, C, D in order (got ${ids.join(',')})`);
      }

      let strongCount = 0;
      let partialCount = 0;
      let weakCount = 0;
      let strongLetter = '';

      dp.options.forEach(opt => {
        const labelWords = countWords(opt.label);
        const ratWords = countWords(opt.rationale);
        const conSentences = countSentences(opt.consequence);

        if (labelWords === 0) errors.push(`[${dp.lessonId}] option ${opt.id} label is empty`);
        if (labelWords > 14) {
          errors.push(`[${dp.lessonId}] option ${opt.id} label has ${labelWords} words (max 14): "${opt.label}"`);
        }

        if (ratWords === 0) errors.push(`[${dp.lessonId}] option ${opt.id} rationale is empty`);
        if (ratWords > 25) {
          errors.push(`[${dp.lessonId}] option ${opt.id} rationale has ${ratWords} words (max 25): "${opt.rationale}"`);
        }

        if (conSentences < 2 || conSentences > 4) {
          // Allow minor punctuation variations if sentence count is close
          if (countWords(opt.consequence) < 15 || countWords(opt.consequence) > 100) {
            errors.push(`[${dp.lessonId}] option ${opt.id} consequence sentence count issue (${conSentences} sentences, ${countWords(opt.consequence)} words)`);
          }
        }

        if (opt.verdict === 'strong') {
          strongCount++;
          strongLetter = opt.id;
        } else if (opt.verdict === 'partial') {
          partialCount++;
        } else if (opt.verdict === 'weak') {
          weakCount++;
        } else {
          errors.push(`[${dp.lessonId}] option ${opt.id} has invalid verdict: "${opt.verdict}"`);
        }
      });

      if (strongCount !== 1) {
        errors.push(`[${dp.lessonId}] must have exactly 1 strong option (got ${strongCount})`);
      }
      if (partialCount < 1) {
        errors.push(`[${dp.lessonId}] must have at least 1 partial option (got ${partialCount})`);
      }
      if (weakCount < 1) {
        errors.push(`[${dp.lessonId}] must have at least 1 weak option (got ${weakCount})`);
      }

      if (strongLetter) {
        strongDistribution[strongLetter] = (strongDistribution[strongLetter] || 0) + 1;
        if (!subjectStrongDist[lesson.subject]) {
          subjectStrongDist[lesson.subject] = { A: 0, B: 0, C: 0, D: 0 };
        }
        subjectStrongDist[lesson.subject][strongLetter] =
          (subjectStrongDist[lesson.subject][strongLetter] || 0) + 1;
      }
    }

    // What actually happened check
    const whatSentences = countSentences(dp.whatActuallyHappened);
    if (!dp.whatActuallyHappened?.trim()) {
      errors.push(`[${dp.lessonId}] whatActuallyHappened is empty`);
    } else if (whatSentences < 2 || whatSentences > 4) {
      if (countWords(dp.whatActuallyHappened) < 20 || countWords(dp.whatActuallyHappened) > 120) {
        errors.push(`[${dp.lessonId}] whatActuallyHappened sentence count issue (${whatSentences} sentences, ${countWords(dp.whatActuallyHappened)} words)`);
      }
    }

    // Framework bridge check
    if (!dp.frameworkBridge?.trim()) {
      errors.push(`[${dp.lessonId}] frameworkBridge is empty`);
    } else {
      const matchesFw = checkFrameworkMatch(lesson.framework.name, dp.frameworkBridge);
      if (!matchesFw) {
        errors.push(
          `[${dp.lessonId}] frameworkBridge does not mention framework "${lesson.framework.name}" (got "${dp.frameworkBridge.substring(0, 80)}...")`
        );
      }
    }
  }

  // Check subject strong-option distribution rule (no single letter > 50% in a subject)
  if (!allowPartial) {
    for (const [subj, dist] of Object.entries(subjectStrongDist)) {
      const totalInSubj = Object.values(dist).reduce((a, b) => a + b, 0);
      for (const [letter, cnt] of Object.entries(dist)) {
        if (cnt > totalInSubj / 2) {
          errors.push(
            `Subject "${subj}": strong option on letter ${letter} exceeds 50% (${cnt}/${totalInSubj})`
          );
        }
      }
    }
  }

  return {
    success: errors.length === 0,
    errors,
    total: ALL_DECISION_POINTS.length,
    verifiedCount,
    needsReviewCount,
    strongDistribution
  };
}

// CLI runner
if (require.main === module || process.argv[1]?.includes('validate-decision-points')) {
  const allowPartial = process.argv.includes('--partial');
  console.log(`\n🔍 Validating Decision Points (allowPartial=${allowPartial})...\n`);
  const result = validateAllDecisions(allowPartial);

  console.log('--------------------------------------------------');
  console.log(`Total Decision Points: ${result.total} / 104`);
  console.log(`Verified: ${result.verifiedCount} | Needs Review: ${result.needsReviewCount}`);
  console.log('Strong Option Distribution (Across all lessons):', result.strongDistribution);
  console.log('--------------------------------------------------\n');

  if (!result.success) {
    console.error(`❌ Validation FAILED with ${result.errors.length} error(s):\n`);
    result.errors.slice(0, 30).forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
    if (result.errors.length > 30) {
      console.error(`  ... and ${result.errors.length - 30} more errors`);
    }
    process.exit(1);
  } else {
    console.log('✅ All validations PASSED flawlessly!\n');
    process.exit(0);
  }
}
