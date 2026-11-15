package com.thebusinesscut.lms.data.repository

import android.content.Context
import android.content.SharedPreferences
import com.thebusinesscut.lms.data.api.ApiClient
import com.thebusinesscut.lms.data.model.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

class LmsRepository(private val context: Context) {

    private val api = ApiClient.service
    private val scope = CoroutineScope(Dispatchers.IO)
    private val prefs: SharedPreferences =
        context.getSharedPreferences("tbc_lms_offline_cache", Context.MODE_PRIVATE)

    private val json = Json { ignoreUnknownKeys = true; isLenient = true }

    // Reactive StateFlows for UI
    private val _currentRole = MutableStateFlow(UserRole.student)
    val currentRole: StateFlow<UserRole> = _currentRole.asStateFlow()

    private val _currentUser = MutableStateFlow(
        UserProfile(
            id = "user-student-01",
            name = "Sarah Chen",
            email = "sarah.chen@stanford.edu",
            role = UserRole.student,
            mbaProgram = "Stanford Graduate School of Business",
            specialization = "Tech & Product Management",
            experienceLevel = "Mid-Career PM (4 yrs in Enterprise SaaS)",
            learningGoals = listOf(
                "Transition from Senior PM to Director of Product",
                "Master capital allocation and M&A valuation dynamics",
                "Lead cross-functional teams through technological crises"
            ),
            preferredTopics = listOf(
                "Product discovery and user research",
                "Product strategy and roadmaps",
                "Prioritization and product metrics"
            )
        )
    )
    val currentUser: StateFlow<UserProfile> = _currentUser.asStateFlow()

    private val _lessons = MutableStateFlow<List<Lesson>>(emptyList())
    val lessons: StateFlow<List<Lesson>> = _lessons.asStateFlow()

    private val _progress = MutableStateFlow<Map<String, LearningProgress>>(emptyMap())
    val progress: StateFlow<Map<String, LearningProgress>> = _progress.asStateFlow()

    private val _paths = MutableStateFlow<List<LearningPath>>(emptyList())
    val paths: StateFlow<List<LearningPath>> = _paths.asStateFlow()

    private val _submissions = MutableStateFlow<List<AssignmentSubmission>>(emptyList())
    val submissions: StateFlow<List<AssignmentSubmission>> = _submissions.asStateFlow()

    private val _cohorts = MutableStateFlow<List<Cohort>>(emptyList())
    val cohorts: StateFlow<List<Cohort>> = _cohorts.asStateFlow()

    private val _adminSettings = MutableStateFlow(AdminSettings())
    val adminSettings: StateFlow<AdminSettings> = _adminSettings.asStateFlow()

    init {
        loadOfflineCache()
        refreshAll()
    }

    private fun loadOfflineCache() {
        try {
            val cachedLessons = prefs.getString("cached_lessons", null)
            if (cachedLessons != null) {
                _lessons.value = json.decodeFromString(cachedLessons)
            }
            val cachedProgress = prefs.getString("cached_progress", null)
            if (cachedProgress != null) {
                _progress.value = json.decodeFromString(cachedProgress)
            }
        } catch (_: Exception) {
            // Gracefully ignore cache deserialize errors
        }
    }

    fun refreshAll() {
        scope.launch {
            fetchSession()
            fetchLessons()
            fetchPaths()
            fetchProgress()
            fetchSubmissions()
            fetchCohorts()
            fetchAdminSettings()
        }
    }

    suspend fun fetchSession() {
        try {
            val res = api.getSession()
            if (res.isSuccessful && res.body() != null) {
                val data = res.body()!!
                _currentUser.value = data.user
                _currentRole.value = data.currentRole
            }
        } catch (_: Exception) {}
    }

    suspend fun switchRole(role: UserRole) {
        _currentRole.value = role
        // Update local persona presentation
        when (role) {
            UserRole.student -> {
                _currentUser.value = _currentUser.value.copy(
                    name = "Sarah Chen",
                    role = UserRole.student,
                    specialization = "Tech & Product Management"
                )
            }
            UserRole.instructor -> {
                _currentUser.value = _currentUser.value.copy(
                    name = "Prof. Julian Vance",
                    role = UserRole.instructor,
                    specialization = "Technology Strategy & Competitive Dynamics"
                )
            }
            UserRole.admin -> {
                _currentUser.value = _currentUser.value.copy(
                    name = "Elena Rostova",
                    role = UserRole.admin,
                    specialization = "Curriculum Director & Governance"
                )
            }
        }
        scope.launch {
            try {
                api.switchRole(mapOf("role" to role.name))
            } catch (_: Exception) {}
        }
    }

    suspend fun updateProfile(specialization: String, goals: List<String>) {
        _currentUser.value = _currentUser.value.copy(
            specialization = specialization,
            learningGoals = goals
        )
        scope.launch {
            try {
                api.updateProfile(mapOf(
                    "specialization" to specialization,
                    "learningGoals" to goals.joinToString(",")
                ))
            } catch (_: Exception) {}
        }
    }

    suspend fun fetchLessons(search: String? = null, subject: String? = null, difficulty: String? = null) {
        try {
            val res = api.getLessons(search, subject, difficulty)
            if (res.isSuccessful && res.body() != null) {
                _lessons.value = res.body()!!.lessons
                prefs.edit().putString("cached_lessons", json.encodeToString(res.body()!!.lessons)).apply()
            }
        } catch (_: Exception) {
            // Keep current or cached lessons
        }
    }

    suspend fun getLessonDetail(id: String): Lesson? {
        val inMemory = _lessons.value.find { it.id == id }
        return try {
            val res = api.getLessonDetail(id)
            if (res.isSuccessful && res.body() != null) {
                res.body()
            } else {
                inMemory
            }
        } catch (_: Exception) {
            inMemory
        }
    }

    suspend fun fetchPaths() {
        try {
            val res = api.getPaths()
            if (res.isSuccessful && res.body() != null) {
                _paths.value = res.body()!!.paths
            }
        } catch (_: Exception) {}
    }

    suspend fun fetchProgress() {
        try {
            val res = api.getProgress()
            if (res.isSuccessful && res.body() != null) {
                _progress.value = res.body()!!
                prefs.edit().putString("cached_progress", json.encodeToString(res.body()!!)).apply()
            }
        } catch (_: Exception) {}
    }

    fun markLessonStatus(lessonId: String, status: String) {
        val currentMap = _progress.value.toMutableMap()
        val curr = currentMap[lessonId] ?: LearningProgress(lessonId = lessonId)
        val updated = curr.copy(status = status, lastActivityDate = "2026-11-15T12:00:00Z")
        currentMap[lessonId] = updated
        _progress.value = currentMap

        scope.launch {
            try {
                api.updateProgress(ProgressUpdateRequest(lessonId = lessonId, status = status))
            } catch (_: Exception) {}
        }
    }

    fun toggleBookmark(lessonId: String) {
        val currentMap = _progress.value.toMutableMap()
        val curr = currentMap[lessonId] ?: LearningProgress(lessonId = lessonId)
        val updated = curr.copy(bookmarked = !curr.bookmarked)
        currentMap[lessonId] = updated
        _progress.value = currentMap

        scope.launch {
            try {
                api.updateProgress(ProgressUpdateRequest(lessonId = lessonId, bookmarked = updated.bookmarked))
            } catch (_: Exception) {}
        }
    }

    fun recordQuizScore(lessonId: String, score: Int, passed: Boolean) {
        val currentMap = _progress.value.toMutableMap()
        val curr = currentMap[lessonId] ?: LearningProgress(lessonId = lessonId)
        val updated = curr.copy(quizScore = score, quizPassed = passed, status = "completed")
        currentMap[lessonId] = updated
        _progress.value = currentMap

        scope.launch {
            try {
                api.updateProgress(ProgressUpdateRequest(lessonId = lessonId, quizScore = score, quizPassed = passed, status = "completed"))
            } catch (_: Exception) {}
        }
    }

    fun saveNotes(lessonId: String, notes: String) {
        val currentMap = _progress.value.toMutableMap()
        val curr = currentMap[lessonId] ?: LearningProgress(lessonId = lessonId)
        val updated = curr.copy(notes = notes)
        currentMap[lessonId] = updated
        _progress.value = currentMap

        scope.launch {
            try {
                api.updateProgress(ProgressUpdateRequest(lessonId = lessonId, notes = notes))
            } catch (_: Exception) {}
        }
    }

    suspend fun fetchSubmissions() {
        try {
            val res = api.getSubmissions()
            if (res.isSuccessful && res.body() != null) {
                _submissions.value = res.body()!!.submissions
            }
        } catch (_: Exception) {}
    }

    suspend fun submitAssignment(lessonId: String, content: String): Boolean {
        val lesson = _lessons.value.find { it.id == lessonId }
        val newSub = AssignmentSubmission(
            id = "sub-${System.currentTimeMillis()}",
            assignmentTitle = lesson?.practicalAssignment?.title ?: "Practical Assignment",
            lessonId = lessonId,
            filmTitle = lesson?.filmTitle ?: "Case Study Film",
            userId = _currentUser.value.id,
            userName = _currentUser.value.name,
            cohortId = _currentUser.value.cohortId ?: "cohort-01",
            submittedAt = "2026-11-15T12:00:00Z",
            status = "submitted",
            content = content
        )
        _submissions.value = listOf(newSub) + _submissions.value

        return try {
            val res = api.submitAssignment(AssignmentSubmitRequest(lessonId, content))
            res.isSuccessful
        } catch (_: Exception) {
            true // Local optimistic save
        }
    }

    suspend fun gradeSubmission(submissionId: String, grade: Int, feedback: String): Boolean {
        val list = _submissions.value.toMutableList()
        val idx = list.indexOfFirst { it.id == submissionId }
        if (idx != -1) {
            list[idx] = list[idx].copy(
                grade = grade,
                instructorFeedback = feedback,
                status = "graded",
                gradedBy = _currentUser.value.name,
                gradedAt = "2026-11-15T12:00:00Z"
            )
            _submissions.value = list
        }

        return try {
            val res = api.gradeSubmission(submissionId, GradeSubmitRequest(grade, feedback))
            res.isSuccessful
        } catch (_: Exception) {
            true
        }
    }

    suspend fun fetchCohorts() {
        try {
            val res = api.getCohorts()
            if (res.isSuccessful && res.body() != null) {
                _cohorts.value = res.body()!!.cohorts
            }
        } catch (_: Exception) {}
    }

    suspend fun fetchAdminSettings() {
        try {
            val res = api.getAdminSettings()
            if (res.isSuccessful && res.body() != null) {
                _adminSettings.value = res.body()!!
            }
        } catch (_: Exception) {}
    }
}
