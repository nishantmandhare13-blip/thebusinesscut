package com.thebusinesscut.lms.ui.screens.dashboard

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.model.Lesson
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.components.*
import com.thebusinesscut.lms.ui.theme.*

@Composable
fun DashboardScreen(
    repository: LmsRepository,
    onNavigateToLesson: (String) -> Unit,
    onNavigateToCatalog: () -> Unit,
    modifier: Modifier = Modifier
) {
    val currentUser by repository.currentUser.collectAsState()
    val lessons by repository.lessons.collectAsState()
    val progress by repository.progress.collectAsState()

    val startedCount = progress.values.count { it.status == "in_progress" }
    val completedCount = progress.values.count { it.status == "completed" }
    val quizScores = progress.values.mapNotNull { it.quizScore }
    val avgScore = if (quizScores.isNotEmpty()) quizScores.average().toInt() else 88
    val totalHours = 14

    val continueLessonId = progress.entries.firstOrNull { it.value.status == "in_progress" }?.key
        ?: lessons.firstOrNull()?.id
    val continueLesson = lessons.find { it.id == continueLessonId }

    val recommendedLessons = lessons.filter { it.id != continueLessonId }.take(6)

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(CanvasDark)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        item {
            Spacer(modifier = Modifier.height(8.dp))
            // 3-Line Brand Header
            BrandHeader(logoHeight = 44, textSize = 18)
        }

        item {
            // Welcome Card
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        TbcMonogramBadge(subtext = "Stanford GSB Fellow")
                        Text(
                            text = currentUser.name,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.Bold,
                            fontSize = 15.sp,
                            color = TextWhite
                        )
                    }

                    Spacer(modifier = Modifier.height(8.dp))

                    Text(
                        text = "Executive Candidate: ${currentUser.specialization}",
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 13.sp,
                        color = GoldBright
                    )

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = "Your learning: TBC. Analyze high-stakes boardrooms and product discovery pivots through cinema.",
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 12.sp,
                        color = TextMuted,
                        lineHeight = 18.sp
                    )
                }
            }
        }

        // Metrics Grid (2x2)
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                MetricCard(
                    title = "STARTED",
                    value = "$startedCount",
                    sub = "In progress",
                    modifier = Modifier.weight(1f)
                )
                MetricCard(
                    title = "COMPLETED",
                    value = "$completedCount",
                    sub = "Verified cases",
                    valueColor = SuccessGreen,
                    modifier = Modifier.weight(1f)
                )
            }
            Spacer(modifier = Modifier.height(10.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                MetricCard(
                    title = "QUIZ AVG",
                    value = "$avgScore%",
                    sub = "Knowledge checks",
                    valueColor = GoldBright,
                    modifier = Modifier.weight(1f)
                )
                MetricCard(
                    title = "STUDY TIME",
                    value = "${totalHours}h",
                    sub = "Total hours",
                    modifier = Modifier.weight(1f)
                )
            }
        }

        // Continue Learning Banner
        if (continueLesson != null) {
            item {
                Text(
                    text = "CONTINUE LEARNING",
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    color = GoldBright
                )

                Spacer(modifier = Modifier.height(8.dp))

                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(12.dp))
                        .clickable { onNavigateToLesson(continueLesson.id) },
                    colors = CardDefaults.cardColors(containerColor = SurfaceDark),
                    border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(GoldPrimary.copy(alpha = 0.5f)))
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(14.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(14.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(44.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(GoldContainer),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(Icons.Default.PlayArrow, contentDescription = null, tint = GoldBright)
                        }

                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = continueLesson.subject.uppercase(),
                                fontFamily = FontFamily.Monospace,
                                fontSize = 10.sp,
                                color = GoldSoft
                            )
                            Text(
                                text = continueLesson.lessonTitle,
                                fontFamily = FontFamily.Serif,
                                fontWeight = FontWeight.Bold,
                                fontSize = 15.sp,
                                color = TextWhite,
                                maxLines = 1,
                                overflow = TextOverflow.Ellipsis
                            )
                            Text(
                                text = "${continueLesson.filmTitle} (${continueLesson.releaseYear}) • ${continueLesson.durationMinutes}m",
                                fontFamily = FontFamily.SansSerif,
                                fontSize = 12.sp,
                                color = TextMuted
                            )
                        }

                        Icon(Icons.Default.ArrowForward, contentDescription = null, tint = GoldBright)
                    }
                }
            }
        }

        // Recommended Lessons Carousel
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "RECOMMENDED CASE STUDIES",
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    color = GoldBright
                )

                Text(
                    text = "View All (104)",
                    fontFamily = FontFamily.Monospace,
                    fontSize = 11.sp,
                    color = GoldSoft,
                    modifier = Modifier.clickable { onNavigateToCatalog() }
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            LazyRow(
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(recommendedLessons) { lesson ->
                    val isBookmarked = progress[lesson.id]?.bookmarked ?: false
                    val isCompleted = progress[lesson.id]?.status == "completed"

                    Box(modifier = Modifier.width(160.dp)) {
                        PosterCard(
                            lesson = lesson,
                            isBookmarked = isBookmarked,
                            isCompleted = isCompleted,
                            onLessonClick = { onNavigateToLesson(lesson.id) },
                            onBookmarkToggle = { repository.toggleBookmark(lesson.id) }
                        )
                    }
                }
            }
        }

        item {
            Spacer(modifier = Modifier.height(16.dp))
        }
    }
}

@Composable
private fun MetricCard(
    title: String,
    value: String,
    sub: String,
    valueColor: androidx.compose.ui.graphics.Color = TextWhite,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(10.dp),
        colors = CardDefaults.cardColors(containerColor = SurfaceCard),
        border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Text(
                text = title,
                fontFamily = FontFamily.Monospace,
                fontSize = 10.sp,
                fontWeight = FontWeight.SemiBold,
                color = TextMuted
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = value,
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Bold,
                fontSize = 24.sp,
                color = valueColor
            )
            Text(
                text = sub,
                fontFamily = FontFamily.SansSerif,
                fontSize = 11.sp,
                color = TextSubtle
            )
        }
    }
}
