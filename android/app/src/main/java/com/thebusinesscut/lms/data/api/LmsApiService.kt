package com.thebusinesscut.lms.data.api

import com.thebusinesscut.lms.data.model.*
import retrofit2.Response
import retrofit2.http.*

interface LmsApiService {

    // Auth & Session
    @GET("auth/session")
    suspend fun getSession(): Response<SessionResponse>

    @POST("auth/session")
    suspend fun switchRole(@Body body: Map<String, String>): Response<SessionResponse>

    @PUT("auth/profile")
    suspend fun updateProfile(@Body profile: Map<String, String>): Response<Map<String, String>>

    // Lessons
    @GET("lessons")
    suspend fun getLessons(
        @Query("search") search: String? = null,
        @Query("subject") subject: String? = null,
        @Query("difficulty") difficulty: String? = null,
        @Query("sort") sort: String? = null
    ): Response<LessonsResponse>

    @GET("lessons/{id}")
    suspend fun getLessonDetail(@Path("id") id: String): Response<Lesson>

    @POST("lessons")
    suspend fun createLesson(@Body lesson: Lesson): Response<Map<String, String>>

    @PUT("lessons/{id}")
    suspend fun updateLesson(@Path("id") id: String, @Body updates: Map<String, String>): Response<Map<String, String>>

    // Learning Paths
    @GET("paths")
    suspend fun getPaths(): Response<PathsResponse>

    // Progress
    @GET("progress")
    suspend fun getProgress(): Response<Map<String, LearningProgress>>

    @POST("progress")
    suspend fun updateProgress(@Body body: ProgressUpdateRequest): Response<Map<String, String>>

    // Assignments
    @GET("assignments")
    suspend fun getSubmissions(
        @Query("userId") userId: String? = null,
        @Query("cohortId") cohortId: String? = null
    ): Response<SubmissionsResponse>

    @POST("assignments")
    suspend fun submitAssignment(@Body body: AssignmentSubmitRequest): Response<Map<String, String>>

    @POST("assignments/{id}/grade")
    suspend fun gradeSubmission(
        @Path("id") id: String,
        @Body body: GradeSubmitRequest
    ): Response<Map<String, String>>

    // Cohorts
    @GET("cohorts")
    suspend fun getCohorts(): Response<CohortsResponse>

    // Admin Settings
    @GET("admin/settings")
    suspend fun getAdminSettings(): Response<AdminSettings>

    @PUT("admin/settings")
    suspend fun updateAdminSettings(@Body body: Map<String, String>): Response<Map<String, String>>
}
