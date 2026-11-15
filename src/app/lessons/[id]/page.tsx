'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Film,
  Clock,
  Bookmark,
  CheckCircle2,
  Share2,
  FileCheck2,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Check,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { SUBJECT_METADATA } from '@/data/subjects';
import { PosterPlaceholder } from '@/components/lessons/PosterPlaceholder';
import { AudioCuePlayer } from '@/components/audio/AudioCuePlayer';

export default function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const {
    getLessonById,
    getLessonProgress,
    markLessonStatus,
    toggleBookmark,
    recordQuizAttempt,
    saveLessonNotes,
    submitAssignment,
    getLessonSubmission
  } = useLms();

  const lesson = getLessonById(id);
  const progress = lesson ? getLessonProgress(lesson.id) : null;
  const existingSubmission = lesson ? getLessonSubmission(lesson.id) : null;

  const [studentNotes, setStudentNotes] = useState(progress?.notes || '');
  const [assignmentText, setAssignmentText] = useState(existingSubmission?.content || '');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Knowledge Check (Quiz) state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(Boolean(progress?.quizScore !== undefined));
  const [quizScore, setQuizScore] = useState<number | null>(progress?.quizScore ?? null);

  if (!lesson || !progress) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-slate-100">Case Study Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested lesson ID &ldquo;{id}&rdquo; does not exist in the active catalog.
        </p>
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Catalog</span>
        </Link>
      </div>
    );
  }

  const isCompleted = progress.status === 'completed';
  const isBookmarked = progress.bookmarked;

  const subjectMeta = SUBJECT_METADATA[lesson.subject] || {
    title: lesson.subject,
    shortTitle: lesson.subject,
    colorClass: 'text-amber-400',
    bgLightClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30'
  };

  const handleNotesSave = () => {
    saveLessonNotes(lesson.id, studentNotes);
    alert('Case notes saved to your local learning record.');
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignmentText.trim()) return;
    submitAssignment(lesson.id, assignmentText);
    setSubmissionSuccess(true);
    setTimeout(() => setSubmissionSuccess(false), 5000);
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    lesson.knowledgeCheck.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionIndex) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / lesson.knowledgeCheck.length) * 100);
    setQuizScore(scorePercentage);
    setQuizSubmitted(true);
    const passed = scorePercentage >= 70;
    recordQuizAttempt(lesson.id, scorePercentage, passed);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-10">
      {/* Back button and quick actions */}
      <div className="flex items-center justify-between">
        <Link
          href="/catalog"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Lesson Catalog</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            type="button"
            onClick={() => toggleBookmark(lesson.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          {/* Mark Complete Button */}
          <button
            type="button"
            onClick={() => {
              const nextStatus = isCompleted ? 'in_progress' : 'completed';
              markLessonStatus(lesson.id, nextStatus, 300);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold transition ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Poster / Visual Artwork */}
          <div className="p-6 md:p-8 flex flex-col items-center justify-center bg-slate-950/60 border-b md:border-b-0 md:border-r border-slate-800">
            <div className="w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
              {lesson.imageAttribution?.posterPath ? (
                <img
                  src={lesson.imageAttribution.posterPath}
                  alt={`${lesson.filmTitle} poster`}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                <PosterPlaceholder
                  title={lesson.filmTitle}
                  year={lesson.releaseYear}
                  subject={subjectMeta.shortTitle}
                  className="w-full"
                />
              )}
            </div>

            <div className="mt-4 text-center">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                Source Attribution
              </span>
              <span className="text-[11px] text-slate-400">
                {lesson.imageAttribution.notes}
              </span>
            </div>
          </div>

          {/* Right Header Details */}
          <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${subjectMeta.bgLightClass} ${subjectMeta.colorClass} ${subjectMeta.borderClass}`}
                >
                  {subjectMeta.title}
                </span>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {lesson.format}
                </span>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    lesson.verificationStatus === 'verified'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {lesson.verificationStatus === 'verified' ? 'Instructor Verified' : 'Needs Review'}
                </span>
              </div>

              {/* Film title & release year */}
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                <Film className="w-3.5 h-3.5" />
                <span>
                  Case Study: {lesson.filmTitle} ({lesson.releaseYear})
                </span>
                {lesson.tmdbMovieId && (
                  <span className="text-[10px] text-slate-400">(TMDB ID: {lesson.tmdbMovieId})</span>
                )}
              </div>

              {/* Main Title */}
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                {lesson.lessonTitle}
              </h1>

              {/* Learning Objective Box */}
              <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-amber-300">Learning Outcome:</strong>{' '}
                  {lesson.learningObjective}
                </div>
              </div>
            </div>

            {/* Meta bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Est. Duration: {lesson.durationMinutes} min</span>
                </span>
                <span>•</span>
                <span>Level: {lesson.difficulty}</span>
              </div>

              <div className="text-[11px] text-slate-400">
                Ref: {lesson.sceneTimestampRef}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Cue Player (If applicable) */}
      <AudioCuePlayer cue={lesson.audioCue} />

      {/* Section 1: Original Scene Context */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Film className="w-4 h-4 text-amber-400" />
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Original Scene Context & Situation
          </h2>
        </div>
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 text-sm text-slate-300 leading-relaxed space-y-3">
          <p>{lesson.sceneDescription}</p>
          <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5 border-t border-slate-800/80">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Original instructor-verified scene description. Does not reproduce copyrighted video clips, frames, or full dialogue transcripts.
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Business Concept Breakdown */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Concept Breakdown: The Plain-Language Business Analysis
          </h2>
        </div>
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 text-sm text-slate-200 leading-relaxed space-y-4">
          <p className="text-slate-300">{lesson.conceptExplanation}</p>
          {/* Topic Tags */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Target Competencies:
            </span>
            {lesson.topicTags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Apply the Framework */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Apply the Framework: {lesson.framework.name}
          </h2>
        </div>
        <div className="p-6 rounded-xl border border-indigo-500/20 bg-slate-900/80 space-y-4 shadow-sm">
          <p className="text-xs text-indigo-300 font-mono">
            {lesson.framework.description}
          </p>

          {/* Key Steps Checklist */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Execution Sequence:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {lesson.framework.keySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Template Snippet */}
          {lesson.framework.templateSnippet && (
            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Practical Framework Syntax / Template:
              </span>
              <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto whitespace-pre-wrap">
                {lesson.framework.templateSnippet}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Discussion & Reflection Questions */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Executive Reflection Questions
          </h2>
        </div>
        <div className="space-y-3">
          {lesson.discussionQuestions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3 text-sm text-slate-200"
            >
              <span className="font-serif font-bold text-amber-400 text-base leading-none shrink-0 mt-0.5">
                Q{idx + 1}.
              </span>
              <span className="leading-relaxed">{q}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Knowledge Check (Interactive Quiz) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <h2 className="font-serif text-xl font-bold text-slate-100">
              Knowledge Check: Immediate Pedagogical Feedback
            </h2>
          </div>
          {quizSubmitted && quizScore !== null && (
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                quizScore >= 70
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
              }`}
            >
              Score: {quizScore}% {quizScore >= 70 ? '• Passed' : '• Try Again'}
            </span>
          )}
        </div>

        <div className="space-y-4">
          {lesson.knowledgeCheck.map((kc, qIdx) => {
            const chosenOption = selectedAnswers[qIdx];
            const isCorrect = chosenOption === kc.correctOptionIndex;

            return (
              <div
                key={qIdx}
                className="p-5 rounded-xl border border-slate-800 bg-slate-900/80 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-amber-400 mt-0.5">
                    Question {qIdx + 1}:
                  </span>
                  <p className="text-sm font-semibold text-slate-100 leading-snug">
                    {kc.question}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-1 pl-6">
                  {kc.options.map((opt, optIdx) => {
                    const isSelected = chosenOption === optIdx;
                    let optionStyle = 'border-slate-850 bg-slate-950/60 hover:border-slate-700 text-slate-300';

                    if (quizSubmitted) {
                      if (optIdx === kc.correctOptionIndex) {
                        optionStyle = 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'border-rose-500/40 bg-rose-950/40 text-rose-300 line-through';
                      }
                    } else if (isSelected) {
                      optionStyle = 'border-amber-400 bg-amber-500/15 text-amber-200 font-semibold';
                    }

                    return (
                      <button
                        type="button"
                        key={optIdx}
                        disabled={quizSubmitted}
                        onClick={() => setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx })}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && optIdx === kc.correctOptionIndex && (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {quizSubmitted && (
                  <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <strong className="text-amber-400 font-mono">Pedagogical Explanation:</strong>
                    <p>{kc.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}

          {!quizSubmitted ? (
            <button
              type="button"
              onClick={handleQuizSubmit}
              disabled={Object.keys(selectedAnswers).length < lesson.knowledgeCheck.length}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs transition"
            >
              Submit Knowledge Check Answers
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setQuizSubmitted(false);
                setSelectedAnswers({});
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition"
            >
              Retake Knowledge Check
            </button>
          )}
        </div>
      </section>

      {/* Section 6: Practical Assignment & Submission */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <FileCheck2 className="w-4 h-4 text-amber-400" />
          <h2 className="font-serif text-xl font-bold text-slate-100">
            Practical Assignment: {lesson.practicalAssignment.title}
          </h2>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
              Assignment Prompt:
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {lesson.practicalAssignment.prompt}
            </p>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Required Deliverables:
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
              {lesson.practicalAssignment.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Grading Rubric Table */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
              Evaluation Rubric (Max 25 pts):
            </h4>
            <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-950 text-slate-400 font-mono">
                  <tr>
                    <th className="p-3">Criteria</th>
                    <th className="p-3">Max Pts</th>
                    <th className="p-3">Evaluation Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300">
                  {lesson.practicalAssignment.rubric.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-850/50">
                      <td className="p-3 font-medium text-slate-200">{r.criteria}</td>
                      <td className="p-3 font-mono text-amber-400 font-bold">{r.maxPoints} pts</td>
                      <td className="p-3 text-slate-400">{r.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Existing Submission / Review Feedback */}
          {existingSubmission && existingSubmission.status === 'graded' && (
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Instructor Grade: {existingSubmission.grade} / {existingSubmission.maxGrade} pts
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Graded by {existingSubmission.gradedBy}
                </span>
              </div>
              <p className="text-xs text-slate-300 italic">
                &ldquo;{existingSubmission.instructorFeedback}&rdquo;
              </p>
            </div>
          )}

          {/* Submission Form */}
          <form onSubmit={handleAssignmentSubmit} className="space-y-3 pt-2 border-t border-slate-800">
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300">
              Submit Your Executive Response:
            </label>
            <textarea
              rows={6}
              value={assignmentText}
              onChange={(e) => setAssignmentText(e.target.value)}
              placeholder="Draft your analysis, framework synthesis, and strategic recommendations here..."
              className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {existingSubmission ? 'Update Assignment Submission' : 'Submit Assignment to Cohort'}
              </button>

              {submissionSuccess && (
                <span className="text-xs font-mono text-emerald-400 animate-fade-in flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submission recorded successfully!</span>
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Section 7: Instructor Guidance & Teaching Notes */}
      <section className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <h3 className="font-mono text-xs uppercase tracking-wider text-purple-300">
            Instructor Answer Key & Teaching Guidance
          </h3>
        </div>
        <p className="text-slate-400 leading-relaxed">
          <strong>Key Teaching Takeaway:</strong> {lesson.instructorGuidance.answerKeySummary}
        </p>
        <p className="text-slate-400 leading-relaxed">
          <strong>Faculty Notes:</strong> {lesson.instructorGuidance.teachingNotes}
        </p>
        <div className="pt-2 text-[11px] text-slate-400">
          <strong className="text-slate-300 font-mono">Common Pitfalls to Warn Students:</strong>{' '}
          {lesson.instructorGuidance.commonStudentPitfalls.join(' • ')}
        </div>
      </section>

      {/* Student Personal Case Study Notebook */}
      <section className="p-6 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-3">
        <h3 className="font-serif text-base font-bold text-slate-100">
          Your Personal Case Study Notes
        </h3>
        <p className="text-xs text-slate-400">
          Capture your private reflections and takeaways. Saved automatically to your local learning record.
        </p>
        <textarea
          rows={3}
          value={studentNotes}
          onChange={(e) => setStudentNotes(e.target.value)}
          placeholder="Jot down notes or ideas to bring up during your cohort discussion..."
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
        />
        <button
          type="button"
          onClick={handleNotesSave}
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition"
        >
          Save Notes
        </button>
      </section>
    </div>
  );
}
