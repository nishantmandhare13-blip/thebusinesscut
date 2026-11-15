package com.thebusinesscut.lms.data.model

import kotlinx.serialization.Serializable

@Serializable
enum class UserRole {
    student, instructor, admin
}

@Serializable
data class UserProfile(
    val id: String,
    val name: String,
    val email: String,
    val role: UserRole,
    val mbaProgram: String = "Stanford Graduate School of Business",
    val specialization: String = "Tech & Product Management",
    val experienceLevel: String = "Mid-Career PM (4 yrs in Enterprise SaaS)",
    val learningGoals: List<String> = emptyList(),
    val preferredTopics: List<String> = emptyList(),
    val cohortId: String? = "cohort-01",
    val avatarUrl: String? = null,
    val dataSharingConsent: Boolean = true,
    val analyticsConsent: Boolean = true,
    val createdAt: String = "2026-01-10T09:00:00Z"
)

@Serializable
data class Framework(
    val name: String,
    val description: String,
    val keySteps: List<String> = emptyList(),
    val templateSnippet: String? = null
)

@Serializable
data class RubricCriterion(
    val criteria: String,
    val maxPoints: Int,
    val description: String
)

@Serializable
data class PracticalAssignment(
    val title: String,
    val prompt: String,
    val deliverables: List<String> = emptyList(),
    val rubric: List<RubricCriterion> = emptyList()
)

@Serializable
data class KnowledgeCheckQuestion(
    val question: String,
    val options: List<String> = emptyList(),
    val correctOptionIndex: Int,
    val explanation: String
)

@Serializable
data class InstructorGuidance(
    val answerKeySummary: String = "",
    val teachingNotes: String = "",
    val commonStudentPitfalls: List<String> = emptyList()
)

@Serializable
data class ImageAttribution(
    val source: String = "tmdb",
    val license: String = "TMDB API & Editorial Fair Use",
    val notes: String = "",
    val posterPath: String? = null,
    val backdropPath: String? = null
)

@Serializable
data class AudioCue(
    val title: String,
    val description: String,
    val transcript: String,
    val durationSeconds: Int = 12,
    val rightsStatus: String = "original",
    val audioUrl: String? = null
)

@Serializable
data class Lesson(
    val id: String,
    val filmTitle: String,
    val releaseYear: Int,
    val tmdbMovieId: Int? = null,
    val subject: String,
    val topicTags: List<String> = emptyList(),
    val lessonTitle: String,
    val learningObjective: String,
    val difficulty: String,
    val durationMinutes: Int,
    val format: String = "Case Study",
    val sceneDescription: String,
    val sceneTimestampRef: String? = null,
    val conceptExplanation: String,
    val framework: Framework,
    val discussionQuestions: List<String> = emptyList(),
    val practicalAssignment: PracticalAssignment,
    val knowledgeCheck: List<KnowledgeCheckQuestion> = emptyList(),
    val instructorGuidance: InstructorGuidance = InstructorGuidance(),
    val verificationStatus: String = "verified",
    val status: String = "published",
    val imageAttribution: ImageAttribution = ImageAttribution(),
    val audioCue: AudioCue? = null,
    val featured: Boolean = false,
    val createdAt: String = "",
    val updatedAt: String = ""
)

@Serializable
data class LearningProgress(
    val lessonId: String,
    val status: String = "not_started", // "not_started" | "in_progress" | "completed"
    val timeSpentSeconds: Long = 0,
    val lastActivityDate: String = "",
    val bookmarked: Boolean = false,
    val quizScore: Int? = null,
    val quizAttempts: Int? = null,
    val quizPassed: Boolean? = null,
    val notes: String? = null
)

@Serializable
data class RubricScore(
    val criteria: String,
    val score: Int,
    val maxScore: Int
)

@Serializable
data class AssignmentSubmission(
    val id: String,
    val assignmentTitle: String,
    val lessonId: String,
    val filmTitle: String,
    val userId: String,
    val userName: String,
    val cohortId: String,
    val submittedAt: String,
    val status: String = "submitted", // "submitted" | "under_review" | "graded"
    val content: String,
    val deliverableLinks: List<String> = emptyList(),
    val grade: Int? = null,
    val maxGrade: Int = 100,
    val rubricScores: List<RubricScore>? = null,
    val instructorFeedback: String? = null,
    val gradedBy: String? = null,
    val gradedAt: String? = null
)

@Serializable
data class Cohort(
    val id: String,
    val name: String,
    val term: String,
    val instructorId: String = "user-instructor-01",
    val studentCount: Int = 24,
    val assignedLessonIds: List<String> = emptyList()
)

@Serializable
data class LearningPath(
    val id: String,
    val title: String,
    val slug: String,
    val description: String,
    val targetRole: String,
    val estimatedHours: Int,
    val lessonIds: List<String> = emptyList(),
    val badge: String = "Executive Certificate",
    val subject: String
)

@Serializable
data class AdminSettings(
    val tmdbApiKey: String = "",
    val tmdbApiConnected: Boolean = true,
    val catalogPublishedOnly: Boolean = false,
    val allowStudentSubmissions: Boolean = true,
    val audioPlaybackEnabled: Boolean = true,
    val demoModeActive: Boolean = true
)

// Response Wrappers
@Serializable
data class SessionResponse(
    val user: UserProfile,
    val currentRole: UserRole,
    val allUsers: List<UserProfile> = emptyList(),
    val availableRoles: List<String> = listOf("student", "instructor", "admin")
)

@Serializable
data class LessonsResponse(
    val total: Int,
    val lessons: List<Lesson>
)

@Serializable
data class PathsResponse(
    val total: Int,
    val paths: List<LearningPath>
)

@Serializable
data class SubmissionsResponse(
    val total: Int,
    val submissions: List<AssignmentSubmission>
)

@Serializable
data class CohortsResponse(
    val total: Int,
    val cohorts: List<Cohort>
)

@Serializable
data class ProgressUpdateRequest(
    val lessonId: String,
    val status: String? = null,
    val timeSpentSeconds: Long? = null,
    val bookmarked: Boolean? = null,
    val quizScore: Int? = null,
    val quizPassed: Boolean? = null,
    val notes: String? = null
)

@Serializable
data class AssignmentSubmitRequest(
    val lessonId: String,
    val content: String,
    val deliverableLinks: List<String> = emptyList()
)

@Serializable
data class GradeSubmitRequest(
    val grade: Int,
    val feedback: String,
    val rubricScores: List<RubricScore>? = null
)
