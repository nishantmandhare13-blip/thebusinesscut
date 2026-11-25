export type DecisionOptionVerdict = 'strong' | 'partial' | 'weak';

export interface DecisionOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string; // ≤ 14 words, action protagonist takes
  rationale: string; // ≤ 25 words, smart student reasoning
  consequence: string; // 2–4 sentences: what happens next
  verdict: DecisionOptionVerdict;
}

export interface DecisionPoint {
  lessonId: string;
  protagonist: string; // character played, e.g. "J. Robert Oppenheimer"
  roleTitle: string; // e.g. "Scientific Director, Los Alamos"
  momentLabel: string; // e.g. "Mid-1944 · Los Alamos"
  title: string; // e.g. "Your Call: The Thin Man Has Failed"
  setup: string; // 2nd-person brief, 60–110 words, starts with time/place, includes "You are <protagonist>"
  stakes: string[]; // 3–4 bullets, each ≤ 20 words
  question: string; // one sentence, ends with "?"
  options: DecisionOption[]; // exactly 4 options
  whatActuallyHappened: string; // 2–4 sentences, consistent with Scene Context
  frameworkBridge: string; // 2–4 sentences: names the lesson's framework
  verification: 'verified' | 'needs_review';
}

export interface SavedDecisionRecord {
  lessonId: string;
  optionId: 'A' | 'B' | 'C' | 'D';
  verdict: DecisionOptionVerdict;
  timestamp: string;
}
