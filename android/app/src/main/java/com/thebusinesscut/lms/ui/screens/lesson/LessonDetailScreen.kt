package com.thebusinesscut.lms.ui.screens.lesson

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.thebusinesscut.lms.data.model.Lesson
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.components.FrameworkCard
import com.thebusinesscut.lms.ui.components.KnowledgeCheckQuiz
import com.thebusinesscut.lms.ui.theme.*
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LessonDetailScreen(
    lessonId: String,
    repository: LmsRepository,
    onBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    val lessons by repository.lessons.collectAsState()
    val progressMap by repository.progress.collectAsState()
    val scope = rememberCoroutineScope()
    val context = LocalContext.current

    val lesson = lessons.find { it.id == lessonId }
    val progress = progressMap[lessonId]

    var notesText by remember(lessonId) { mutableStateOf(progress?.notes ?: "") }
    var assignmentResponse by remember(lessonId) { mutableStateOf("") }
    var isSubmitting by remember { mutableStateOf(false) }

    val isCompleted = progress?.status == "completed"
    val isBookmarked = progress?.bookmarked ?: false

    if (lesson == null) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CircularProgressIndicator(color = GoldBright)
        }
        return
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = lesson.filmTitle,
                        fontFamily = FontFamily.Serif,
                        fontWeight = FontWeight.Bold,
                        fontSize = 17.sp,
                        color = TextWhite
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back", tint = TextWhite)
                    }
                },
                actions = {
                    IconButton(onClick = { repository.toggleBookmark(lesson.id) }) {
                        Icon(
                            imageVector = if (isBookmarked) Icons.Filled.Bookmark else Icons.Outlined.BookmarkBorder,
                            contentDescription = "Bookmark",
                            tint = if (isBookmarked) GoldBright else TextWhite
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = CanvasDark)
            )
        },
        containerColor = CanvasDark
    ) { innerPadding ->
        LazyColumn(
            modifier = modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Header Poster Banner
            item {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(200.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .border(1.dp, BorderSubtle, RoundedCornerShape(12.dp))
                ) {
                    val posterUrl = lesson.imageAttribution.posterPath
                    if (!posterUrl.isNullOrBlank()) {
                        AsyncImage(
                            model = posterUrl,
                            contentDescription = lesson.filmTitle,
                            contentScale = ContentScale.Crop,
                            modifier = Modifier.fillMaxSize()
                        )
                    } else {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .background(SurfaceDark),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = lesson.filmTitle,
                                fontFamily = FontFamily.Serif,
                                fontWeight = FontWeight.Bold,
                                fontSize = 22.sp,
                                color = GoldBright
                            )
                        }
                    }

                    // Gradient overlay
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .background(
                                Brush.verticalGradient(
                                    listOf(Color.Transparent, CanvasDark.copy(alpha = 0.95f))
                                )
                            )
                    )

                    // Title overlay at bottom
                    Column(
                        modifier = Modifier
                            .align(Alignment.BottomStart)
                            .padding(14.dp)
                    ) {
                        Text(
                            text = lesson.subject.uppercase(),
                            fontFamily = FontFamily.Monospace,
                            fontSize = 10.sp,
                            color = GoldSoft
                        )
                        Text(
                            text = lesson.lessonTitle,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.Bold,
                            fontSize = 19.sp,
                            color = TextWhite,
                            lineHeight = 23.sp
                        )
                        Text(
                            text = "${lesson.filmTitle} (${lesson.releaseYear}) • ${lesson.durationMinutes} min • ${lesson.difficulty}",
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 12.sp,
                            color = TextMuted
                        )
                    }
                }
            }

            // Learning Objective Box
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(10.dp),
                    colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(GoldPrimary.copy(alpha = 0.4f)))
                ) {
                    Column(modifier = Modifier.padding(14.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(Icons.Default.Lightbulb, contentDescription = null, tint = GoldBright, modifier = Modifier.size(16.dp))
                            Text(
                                text = "EXECUTIVE LEARNING OBJECTIVE",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 11.sp,
                                color = GoldBright
                            )
                        }
                        Spacer(modifier = Modifier.height(6.dp))
                        Text(
                            text = lesson.learningObjective,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 13.sp,
                            color = TextWhite,
                            lineHeight = 19.sp
                        )
                    }
                }
            }

            // Scene Context
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(Icons.Default.Movie, contentDescription = null, tint = GoldBright, modifier = Modifier.size(18.dp))
                            Text(
                                text = "CINEMATIC SCENE CONTEXT",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 11.sp,
                                color = GoldBright
                            )
                        }
                        if (lesson.sceneTimestampRef != null) {
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "Timestamp: ${lesson.sceneTimestampRef}",
                                fontFamily = FontFamily.Monospace,
                                fontSize = 10.sp,
                                color = TextMuted
                            )
                        }
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = lesson.sceneDescription,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 13.sp,
                            color = TextWhite,
                            lineHeight = 21.sp
                        )
                    }
                }
            }

            // Concept Breakdown
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(Icons.Default.AutoStories, contentDescription = null, tint = GoldBright, modifier = Modifier.size(18.dp))
                            Text(
                                text = "CONCEPT BREAKDOWN",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 11.sp,
                                color = GoldBright
                            )
                        }
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = lesson.conceptExplanation,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 13.sp,
                            color = TextWhite,
                            lineHeight = 21.sp
                        )
                    }
                }
            }

            // Apply the Framework
            item {
                FrameworkCard(framework = lesson.framework)
            }

            // Discussion Prompts
            if (lesson.discussionQuestions.isNotEmpty()) {
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                        border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
                    ) {
                        Column(modifier = Modifier.padding(16.dp)) {
                            Row(
                                verticalAlignment = Alignment.CenterVertically,
                                horizontalArrangement = Arrangement.spacedBy(6.dp)
                            ) {
                                Icon(Icons.Default.Forum, contentDescription = null, tint = GoldBright, modifier = Modifier.size(18.dp))
                                Text(
                                    text = "EXECUTIVE DISCUSSION PROMPTS",
                                    fontFamily = FontFamily.Monospace,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 11.sp,
                                    color = GoldBright
                                )
                            }
                            Spacer(modifier = Modifier.height(10.dp))
                            lesson.discussionQuestions.forEachIndexed { i, q ->
                                Row(
                                    modifier = Modifier.padding(vertical = 4.dp),
                                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                                    verticalAlignment = Alignment.Top
                                ) {
                                    Text(
                                        text = "${i + 1}.",
                                        fontFamily = FontFamily.Monospace,
                                        fontWeight = FontWeight.Bold,
                                        fontSize = 12.sp,
                                        color = GoldSoft
                                    )
                                    Text(
                                        text = q,
                                        fontFamily = FontFamily.SansSerif,
                                        fontSize = 13.sp,
                                        color = TextWhite,
                                        lineHeight = 19.sp
                                    )
                                }
                            }
                        }
                    }
                }
            }

            // Knowledge Check Quiz
            if (lesson.knowledgeCheck.isNotEmpty()) {
                item {
                    KnowledgeCheckQuiz(
                        questions = lesson.knowledgeCheck,
                        previousScore = progress?.quizScore,
                        onQuizCompleted = { score, passed ->
                            repository.recordQuizScore(lesson.id, score, passed)
                            Toast.makeText(context, "Knowledge check recorded: $score%", Toast.LENGTH_SHORT).show()
                        }
                    )
                }
            }

            // Practical Assignment Submission Section
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(Icons.Default.Assignment, contentDescription = null, tint = GoldBright, modifier = Modifier.size(18.dp))
                            Text(
                                text = "PRACTICAL ASSIGNMENT",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 11.sp,
                                color = GoldBright
                            )
                        }
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            text = lesson.practicalAssignment.title,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.Bold,
                            fontSize = 16.sp,
                            color = TextWhite
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = lesson.practicalAssignment.prompt,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 13.sp,
                            color = TextMuted,
                            lineHeight = 19.sp
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        OutlinedTextField(
                            value = assignmentResponse,
                            onValueChange = { assignmentResponse = it },
                            placeholder = {
                                Text("Draft your response / executive synthesis here...", color = TextSubtle, fontSize = 12.sp)
                            },
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(120.dp),
                            shape = RoundedCornerShape(8.dp),
                            colors = OutlinedTextFieldDefaults.colors(
                                focusedContainerColor = SurfaceDark,
                                unfocusedContainerColor = SurfaceDark,
                                focusedBorderColor = GoldPrimary,
                                unfocusedBorderColor = BorderSubtle,
                                focusedTextColor = TextWhite,
                                unfocusedTextColor = TextWhite
                            )
                        )

                        Spacer(modifier = Modifier.height(10.dp))

                        Button(
                            onClick = {
                                if (assignmentResponse.isNotBlank()) {
                                    isSubmitting = true
                                    scope.launch {
                                        repository.submitAssignment(lesson.id, assignmentResponse)
                                        isSubmitting = false
                                        Toast.makeText(context, "Assignment submitted for review!", Toast.LENGTH_SHORT).show()
                                    }
                                }
                            },
                            enabled = assignmentResponse.isNotBlank() && !isSubmitting,
                            colors = ButtonDefaults.buttonColors(containerColor = GoldPrimary, contentColor = CanvasDark),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text(
                                text = if (isSubmitting) "Submitting..." else "Submit Assignment",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                }
            }

            // Student Notes
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(6.dp)
                        ) {
                            Icon(Icons.Default.EditNote, contentDescription = null, tint = GoldBright, modifier = Modifier.size(20.dp))
                            Text(
                                text = "PERSONAL NOTES (AUTO-SAVED)",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 11.sp,
                                color = GoldBright
                            )
                        }

                        Spacer(modifier = Modifier.height(10.dp))

                        OutlinedTextField(
                            value = notesText,
                            onValueChange = {
                                notesText = it
                                repository.saveNotes(lesson.id, it)
                            },
                            placeholder = { Text("Jot down observations, quotes, or key takeaways...", color = TextSubtle, fontSize = 12.sp) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(100.dp),
                            shape = RoundedCornerShape(8.dp),
                            colors = OutlinedTextFieldDefaults.colors(
                                focusedContainerColor = SurfaceDark,
                                unfocusedContainerColor = SurfaceDark,
                                focusedBorderColor = GoldPrimary,
                                unfocusedBorderColor = BorderSubtle,
                                focusedTextColor = TextWhite,
                                unfocusedTextColor = TextWhite
                            )
                        )
                    }
                }
            }

            // Completion Action Bar
            item {
                Button(
                    onClick = {
                        val newStatus = if (isCompleted) "in_progress" else "completed"
                        repository.markLessonStatus(lesson.id, newStatus)
                        val msg = if (newStatus == "completed") "Lesson marked complete!" else "Lesson marked in-progress"
                        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show()
                    },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = if (isCompleted) SuccessGreen else GoldPrimary,
                        contentColor = CanvasDark
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(48.dp)
                ) {
                    Icon(
                        imageVector = if (isCompleted) Icons.Default.CheckCircle else Icons.Default.Check,
                        contentDescription = null,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = if (isCompleted) "Completed • Click to Reopen" else "Mark Lesson Complete",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}
