'use client';

import React, { useState } from 'react';
import {
  Users,
  Plus,
  Edit3,
  CheckCircle2,
  Clock,
  FileCheck2,
  Award,
  BookOpen,
  Search,
  Filter,
  Save,
  Trash2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useLms } from '@/context/LmsContext';
import { Lesson, SubjectCategory, LessonPublishStatus, VerificationStatus } from '@/types/lms';
import { SUBJECT_METADATA } from '@/data/subjects';

export default function InstructorWorkspacePage() {
  const {
    lessons,
    createLesson,
    updateLesson,
    deleteLesson,
    cohorts,
    createCohort,
    assignLessonToCohort,
    submissions,
    gradeSubmission,
    currentUser
  } = useLms();

  const [activeTab, setActiveTab] = useState<'submissions' | 'lessons' | 'cohorts'>('submissions');

  // Grading modal state
  const [gradingSubmissionId, setGradingSubmissionId] = useState<string | null>(null);
  const [gradeScore, setGradeScore] = useState<number>(23);
  const [gradeFeedback, setGradeFeedback] = useState<string>('Strong analytical breakdown of the core trade-off.');

  // Lesson editor modal state
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  // Lesson form state
  const [formTitle, setFormTitle] = useState('');
  const [formFilm, setFormFilm] = useState('');
  const [formYear, setFormYear] = useState(2023);
  const [formSubject, setFormSubject] = useState<SubjectCategory>('Product discovery and user research');
  const [formObjective, setFormObjective] = useState('');
  const [formScene, setFormScene] = useState('');
  const [formConcept, setFormConcept] = useState('');
  const [formFrameworkName, setFormFrameworkName] = useState('');
  const [formStatus, setFormStatus] = useState<LessonPublishStatus>('published');
  const [formVerification, setFormVerification] = useState<VerificationStatus>('verified');

  // Cohort creation modal state
  const [newCohortName, setNewCohortName] = useState('');
  const [newCohortTerm, setNewCohortTerm] = useState('Fall 2026');
  const [selectedCohortId, setSelectedCohortId] = useState(cohorts[0]?.id || '');
  const [lessonToAssignId, setLessonToAssignId] = useState(lessons[0]?.id || '');

  const openLessonEditor = (lesson?: Lesson) => {
    if (lesson) {
      setEditingLessonId(lesson.id);
      setFormTitle(lesson.lessonTitle);
      setFormFilm(lesson.filmTitle);
      setFormYear(lesson.releaseYear);
      setFormSubject(lesson.subject);
      setFormObjective(lesson.learningObjective);
      setFormScene(lesson.sceneDescription);
      setFormConcept(lesson.conceptExplanation);
      setFormFrameworkName(lesson.framework.name);
      setFormStatus(lesson.status);
      setFormVerification(lesson.verificationStatus);
    } else {
      setEditingLessonId(null);
      setFormTitle('');
      setFormFilm('');
      setFormYear(2024);
      setFormSubject('Product discovery and user research');
      setFormObjective('');
      setFormScene('');
      setFormConcept('');
      setFormFrameworkName('');
      setFormStatus('draft');
      setFormVerification('needs_instructor_review');
    }
    setIsLessonModalOpen(true);
  };

  const handleSaveLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLessonId) {
      updateLesson(editingLessonId, {
        lessonTitle: formTitle,
        filmTitle: formFilm,
        releaseYear: formYear,
        subject: formSubject,
        learningObjective: formObjective,
        sceneDescription: formScene,
        conceptExplanation: formConcept,
        framework: {
          name: formFrameworkName,
          description: 'Custom framework defined by faculty.',
          keySteps: ['Diagnose context', 'Apply principles', 'Execute synthesis']
        },
        status: formStatus,
        verificationStatus: formVerification
      });
    } else {
      createLesson({
        lessonTitle: formTitle,
        filmTitle: formFilm,
        releaseYear: formYear,
        subject: formSubject,
        learningObjective: formObjective,
        sceneDescription: formScene,
        conceptExplanation: formConcept,
        framework: {
          name: formFrameworkName,
          description: 'Custom framework defined by faculty.',
          keySteps: ['Diagnose context', 'Apply principles', 'Execute synthesis']
        },
        status: formStatus,
        verificationStatus: formVerification
      });
    }
    setIsLessonModalOpen(false);
  };

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gradingSubmissionId) return;
    gradeSubmission(gradingSubmissionId, gradeScore, gradeFeedback);
    setGradingSubmissionId(null);
  };

  const handleCreateCohort = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCohortName.trim()) return;
    createCohort(newCohortName, newCohortTerm, ['lms-001', 'lms-002', 'lms-011']);
    setNewCohortName('');
    alert('Cohort created successfully!');
  };

  const activeGradingSubmission = submissions.find(s => s.id === gradingSubmissionId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Users className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Faculty Management Suite
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Instructor Workspace
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Curate lessons, grade student case briefs against rubrics, and manage cohort assignments.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('submissions')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'submissions'
                ? 'bg-purple-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Submissions Queue ({submissions.filter(s => s.status !== 'graded').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('lessons')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'lessons'
                ? 'bg-purple-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Lesson Catalog Editor ({lessons.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cohorts')}
            className={`px-3.5 py-1.5 rounded-lg transition ${
              activeTab === 'cohorts'
                ? 'bg-purple-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cohorts ({cohorts.length})
          </button>
        </div>
      </div>

      {/* Tab 1: Submission Review & Grading Queue */}
      {activeTab === 'submissions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-slate-100">
              Student Assignment Review Queue
            </h2>
            <span className="text-xs font-mono text-slate-400">
              {submissions.length} total student submissions across all cohorts
            </span>
          </div>

          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-100 text-base">{sub.userName}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-mono text-slate-400">Cohort ID: {sub.cohortId}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-amber-400">
                      {sub.assignmentTitle}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      Case: {sub.filmTitle} • Submitted on {new Date(sub.submittedAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    {sub.status === 'graded' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Graded: {sub.grade} / {sub.maxGrade} pts</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Awaiting Faculty Grade</span>
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setGradingSubmissionId(sub.id);
                        setGradeScore(sub.grade || 23);
                        setGradeFeedback(sub.instructorFeedback || 'Exemplary framework application and clear synthesis.');
                      }}
                      className="px-4 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition"
                    >
                      {sub.status === 'graded' ? 'Update Grade' : 'Grade Submission'}
                    </button>
                  </div>
                </div>

                {/* Submission text preview */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {sub.content}
                </div>

                {sub.instructorFeedback && (
                  <div className="pt-2 text-xs text-slate-400 border-t border-slate-800 flex items-start gap-2">
                    <span className="text-purple-400 font-mono font-bold shrink-0">Current Feedback:</span>
                    <span className="italic text-slate-300">&ldquo;{sub.instructorFeedback}&rdquo;</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Lesson Catalog Editor */}
      {activeTab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-100">
                Lesson Management & Publishing Status
              </h2>
              <p className="text-xs text-slate-400">
                Publish, unpublish, draft, and verify case study details.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openLessonEditor()}
              className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Case Lesson</span>
            </button>
          </div>

          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60 text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-950 text-slate-400 font-mono border-b border-slate-800">
                <tr>
                  <th className="p-3.5">ID / Film</th>
                  <th className="p-3.5">Lesson Title</th>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Verification</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {lessons.slice(0, 20).map((lesson) => (
                  <tr key={lesson.id} className="hover:bg-slate-850/50">
                    <td className="p-3.5 font-mono text-slate-300 whitespace-nowrap">
                      <span className="font-bold text-amber-400">{lesson.id}</span>
                      <div className="text-[11px] text-slate-400">{lesson.filmTitle} ({lesson.releaseYear})</div>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-100 max-w-xs truncate">
                      {lesson.lessonTitle}
                    </td>
                    <td className="p-3.5 text-slate-400 whitespace-nowrap">
                      {SUBJECT_METADATA[lesson.subject]?.shortTitle || lesson.subject}
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          lesson.verificationStatus === 'verified'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {lesson.verificationStatus}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          lesson.status === 'published'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {lesson.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right whitespace-nowrap space-x-2">
                      <button
                        type="button"
                        onClick={() => openLessonEditor(lesson)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete lesson "${lesson.lessonTitle}"?`)) {
                            deleteLesson(lesson.id);
                          }
                        }}
                        className="px-2 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 font-mono text-center">
            Showing first 20 records of {lessons.length} total lessons. All lessons can be filtered and edited.
          </p>
        </div>
      )}

      {/* Tab 3: Cohort Management */}
      {activeTab === 'cohorts' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-100">
                Cohort Management & Assignments
              </h2>
              <p className="text-xs text-slate-400">
                Assign specific case studies and due dates to MBA classes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cohort Cards */}
            <div className="md:col-span-2 space-y-4">
              {cohorts.map((cohort) => (
                <div
                  key={cohort.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-slate-100">{cohort.name}</h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {cohort.term}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Students Enrolled: <strong className="text-slate-200">{cohort.studentCount}</strong> • Active Cases Assigned: <strong className="text-purple-400">{cohort.assignedLessonIds.length}</strong>
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      Assigned Cases:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cohort.assignedLessonIds.map((lid) => {
                        const l = lessons.find(item => item.id === lid);
                        return (
                          <span
                            key={lid}
                            className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {l ? `${l.filmTitle} (${l.id})` : lid}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Create / Assign Tool Sidebar */}
            <div className="space-y-6">
              {/* Form 1: Assign lesson to cohort */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-4">
                <h4 className="font-serif text-sm font-bold text-slate-100">
                  Assign Case to Cohort
                </h4>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Select Cohort:
                  </label>
                  <select
                    value={selectedCohortId}
                    onChange={(e) => setSelectedCohortId(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200"
                  >
                    {cohorts.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Select Lesson:
                  </label>
                  <select
                    value={lessonToAssignId}
                    onChange={(e) => setLessonToAssignId(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200"
                  >
                    {lessons.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.filmTitle} - {l.lessonTitle.slice(0, 30)}...
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    assignLessonToCohort(selectedCohortId, lessonToAssignId);
                    alert('Case successfully assigned to cohort!');
                  }}
                  className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition"
                >
                  Assign to Cohort
                </button>
              </div>

              {/* Form 2: Create new cohort */}
              <form onSubmit={handleCreateCohort} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 space-y-3">
                <h4 className="font-serif text-sm font-bold text-slate-100">
                  Create New Cohort
                </h4>

                <input
                  type="text"
                  value={newCohortName}
                  onChange={(e) => setNewCohortName(e.target.value)}
                  placeholder="e.g. Spring 2027 Executive PM"
                  className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600"
                />

                <input
                  type="text"
                  value={newCohortTerm}
                  onChange={(e) => setNewCohortTerm(e.target.value)}
                  placeholder="e.g. Spring 2027"
                  className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-600"
                />

                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition border border-slate-700"
                >
                  Create Cohort
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Grading Review Modal */}
      {gradingSubmissionId && activeGradingSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 text-slate-100 space-y-4">
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                  Faculty Grading Rubric
                </span>
                <h3 className="text-lg font-serif font-bold text-slate-100">
                  {activeGradingSubmission.userName} • {activeGradingSubmission.assignmentTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setGradingSubmissionId(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleGradeSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Grade Score (Max 25 pts):
                </label>
                <input
                  type="number"
                  min="0"
                  max="25"
                  value={gradeScore}
                  onChange={(e) => setGradeScore(parseInt(e.target.value) || 0)}
                  className="w-32 p-2 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-amber-400 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Qualitative Feedback & Comments:
                </label>
                <textarea
                  rows={4}
                  value={gradeFeedback}
                  onChange={(e) => setGradeFeedback(e.target.value)}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setGradingSubmissionId(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs"
                >
                  Save & Publish Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lesson Creation / Editor Modal */}
      {isLessonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl p-6 text-slate-100 max-h-[85vh] overflow-y-auto space-y-4">
            <div className="flex items-start justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                  {editingLessonId ? 'Edit Case Record' : 'Create New Case Lesson'}
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-100">
                  {formTitle || 'Untitled Case'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLessonModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveLesson} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Disrupting the Luxury Incumbent"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Film Title & Year
                  </label>
                  <input
                    type="text"
                    required
                    value={formFilm}
                    onChange={(e) => setFormFilm(e.target.value)}
                    placeholder="e.g. Ford v Ferrari"
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Subject Area
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value as SubjectCategory)}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  >
                    {Object.keys(SUBJECT_METADATA).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Verification Status
                  </label>
                  <select
                    value={formVerification}
                    onChange={(e) => setFormVerification(e.target.value as VerificationStatus)}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  >
                    <option value="verified">Verified Details</option>
                    <option value="needs_instructor_review">Needs Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                    Publish Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as LessonPublishStatus)}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="review">In Review</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                  Learning Objective (One sentence)
                </label>
                <input
                  type="text"
                  required
                  value={formObjective}
                  onChange={(e) => setFormObjective(e.target.value)}
                  placeholder="e.g. Analyze how an industrial challenger deploys asymmetric manufacturing advantages..."
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                  Original Scene Description (No copyrighted clips/scripts)
                </label>
                <textarea
                  rows={3}
                  required
                  value={formScene}
                  onChange={(e) => setFormScene(e.target.value)}
                  placeholder="Original instructor-verified scene description..."
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                  Concept Explanation
                </label>
                <textarea
                  rows={3}
                  required
                  value={formConcept}
                  onChange={(e) => setFormConcept(e.target.value)}
                  placeholder="Deep plain-language business analysis..."
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1">
                  Framework Name
                </label>
                <input
                  type="text"
                  required
                  value={formFrameworkName}
                  onChange={(e) => setFormFrameworkName(e.target.value)}
                  placeholder="e.g. Porter’s Five Forces / Jobs-to-be-Done"
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-100"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsLessonModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition"
                >
                  Save Case Study
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
