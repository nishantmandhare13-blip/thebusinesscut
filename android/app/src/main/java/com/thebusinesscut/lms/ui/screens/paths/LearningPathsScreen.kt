package com.thebusinesscut.lms.ui.screens.paths

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.School
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.model.LearningPath
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.theme.*

@Composable
fun LearningPathsScreen(
    repository: LmsRepository,
    onNavigateToLesson: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val paths by repository.paths.collectAsState()
    val lessons by repository.lessons.collectAsState()
    val progress by repository.progress.collectAsState()

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(CanvasDark)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = "CURATED LEARNING PATHS",
                fontFamily = FontFamily.Monospace,
                fontWeight = FontWeight.Bold,
                fontSize = 12.sp,
                color = GoldBright
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Master Executive Leadership by Sequence",
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Bold,
                fontSize = 22.sp,
                color = TextWhite
            )
            Text(
                text = "Structured multi-film curriculums designed for Product Managers and MBA candidates.",
                fontFamily = FontFamily.SansSerif,
                fontSize = 13.sp,
                color = TextMuted
            )
        }

        items(paths, key = { it.id }) { path ->
            val pathLessons = path.lessonIds.mapNotNull { id -> lessons.find { it.id == id } }
            val completedCount = path.lessonIds.count { progress[it]?.status == "completed" }
            val progressPct = if (path.lessonIds.isNotEmpty()) (completedCount * 100) / path.lessonIds.size else 0

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
                        Box(
                            modifier = Modifier
                                .clip(RoundedCornerShape(6.dp))
                                .background(GoldContainer)
                                .padding(horizontal = 8.dp, vertical = 4.dp)
                        ) {
                            Text(
                                text = path.subject.uppercase(),
                                fontFamily = FontFamily.Monospace,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold,
                                color = GoldBright
                            )
                        }

                        Text(
                            text = "${path.estimatedHours} hrs • ${path.badge}",
                            fontFamily = FontFamily.Monospace,
                            fontSize = 11.sp,
                            color = TextMuted
                        )
                    }

                    Spacer(modifier = Modifier.height(10.dp))

                    Text(
                        text = path.title,
                        fontFamily = FontFamily.Serif,
                        fontWeight = FontWeight.Bold,
                        fontSize = 18.sp,
                        color = TextWhite
                    )

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = path.description,
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 13.sp,
                        color = TextMuted,
                        lineHeight = 19.sp
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    // Progress bar
                    LinearProgressIndicator(
                        progress = { progressPct / 100f },
                        color = GoldBright,
                        trackColor = SurfaceDark,
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(6.dp)
                            .clip(RoundedCornerShape(3.dp))
                    )

                    Spacer(modifier = Modifier.height(6.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = "$completedCount of ${path.lessonIds.size} completed",
                            fontFamily = FontFamily.Monospace,
                            fontSize = 11.sp,
                            color = TextSubtle
                        )
                        Text(
                            text = "$progressPct%",
                            fontFamily = FontFamily.Monospace,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = GoldBright
                        )
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    // Sequenced Lesson List
                    pathLessons.forEachIndexed { idx, lesson ->
                        val isDone = progress[lesson.id]?.status == "completed"

                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(SurfaceDark)
                                .clickable { onNavigateToLesson(lesson.id) }
                                .padding(10.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            if (isDone) {
                                Icon(Icons.Default.CheckCircle, contentDescription = null, tint = SuccessGreen, modifier = Modifier.size(16.dp))
                            } else {
                                Text(
                                    text = "${idx + 1}",
                                    fontFamily = FontFamily.Monospace,
                                    fontSize = 11.sp,
                                    color = TextMuted
                                )
                            }

                            Column(modifier = Modifier.weight(1f)) {
                                Text(
                                    text = lesson.lessonTitle,
                                    fontFamily = FontFamily.SansSerif,
                                    fontWeight = FontWeight.SemiBold,
                                    fontSize = 13.sp,
                                    color = TextWhite
                                )
                                Text(
                                    text = "${lesson.filmTitle} (${lesson.releaseYear}) • ${lesson.durationMinutes}m",
                                    fontFamily = FontFamily.SansSerif,
                                    fontSize = 11.sp,
                                    color = TextMuted
                                )
                            }

                            Icon(Icons.Default.ArrowForward, contentDescription = null, tint = TextMuted, modifier = Modifier.size(16.dp))
                        }
                    }
                }
            }
        }

        item {
            Spacer(modifier = Modifier.height(20.dp))
        }
    }
}
