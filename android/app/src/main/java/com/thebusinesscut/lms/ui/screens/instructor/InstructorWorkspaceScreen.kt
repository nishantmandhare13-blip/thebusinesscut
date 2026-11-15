package com.thebusinesscut.lms.ui.screens.instructor

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Group
import androidx.compose.material.icons.filled.RateReview
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.model.AssignmentSubmission
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.theme.*
import kotlinx.coroutines.launch

@Composable
fun InstructorWorkspaceScreen(
    repository: LmsRepository,
    onNavigateToLesson: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val submissions by repository.submissions.collectAsState()
    val cohorts by repository.cohorts.collectAsState()
    val scope = rememberCoroutineScope()
    val context = LocalContext.current

    var selectedSubmissionForGrading by remember { mutableStateOf<AssignmentSubmission?>(null) }
    var gradeInput by remember { mutableStateOf("90") }
    var feedbackInput by remember { mutableStateOf("Strong synthesis of market dynamics. Next time emphasize unit economics.") }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(CanvasDark)
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Spacer(modifier = Modifier.height(12.dp))
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Box(
                    modifier = Modifier
                        .size(10.dp)
                        .clip(RoundedCornerShape(3.dp))
                        .background(RoleInstructor)
                )
                Text(
                    text = "INSTRUCTOR WORKSPACE",
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    color = RoleInstructor
                )
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Coursework Review & Cohort Management",
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Bold,
                fontSize = 22.sp,
                color = TextWhite
            )
            Text(
                text = "Evaluate student case submissions, manage cohorts, and review curriculum.",
                fontFamily = FontFamily.SansSerif,
                fontSize = 13.sp,
                color = TextMuted
            )
        }

        // Active Cohorts Card
        item {
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
                        Text(
                            text = "ACTIVE MBA COHORTS",
                            fontFamily = FontFamily.Monospace,
                            fontWeight = FontWeight.Bold,
                            fontSize = 11.sp,
                            color = GoldBright
                        )

                        Text(
                            text = "${cohorts.size} Cohorts",
                            fontFamily = FontFamily.Monospace,
                            fontSize = 11.sp,
                            color = TextMuted
                        )
                    }

                    Spacer(modifier = Modifier.height(10.dp))

                    cohorts.forEach { cohort ->
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(SurfaceDark)
                                .padding(12.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Column {
                                Text(
                                    text = cohort.name,
                                    fontFamily = FontFamily.Serif,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 14.sp,
                                    color = TextWhite
                                )
                                Text(
                                    text = "${cohort.term} • ${cohort.studentCount} candidates • ${cohort.assignedLessonIds.size} assigned lessons",
                                    fontFamily = FontFamily.SansSerif,
                                    fontSize = 11.sp,
                                    color = TextMuted
                                )
                            }

                            Icon(Icons.Default.Group, contentDescription = null, tint = RoleInstructor)
                        }
                    }
                }
            }
        }

        // Submissions Grading Queue
        item {
            Text(
                text = "STUDENT SUBMISSION QUEUE (${submissions.size})",
                fontFamily = FontFamily.Monospace,
                fontWeight = FontWeight.Bold,
                fontSize = 12.sp,
                color = GoldBright
            )
        }

        items(submissions, key = { it.id }) { sub ->
            val isGraded = sub.status == "graded"

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
                        Text(
                            text = sub.userName,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.Bold,
                            fontSize = 16.sp,
                            color = TextWhite
                        )

                        Box(
                            modifier = Modifier
                                .clip(RoundedCornerShape(4.dp))
                                .background(if (isGraded) SuccessGreenBg else RoleInstructorBg)
                                .padding(horizontal = 6.dp, vertical = 2.dp)
                        ) {
                            Text(
                                text = if (isGraded) "GRADED: ${sub.grade}/100" else "NEEDS REVIEW",
                                fontFamily = FontFamily.Monospace,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (isGraded) SuccessGreen else RoleInstructor
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = "${sub.assignmentTitle} • Film: ${sub.filmTitle}",
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 12.sp,
                        color = GoldSoft
                    )

                    Spacer(modifier = Modifier.height(8.dp))

                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(6.dp))
                            .background(SurfaceDark)
                            .padding(10.dp)
                    ) {
                        Text(
                            text = sub.content,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 12.sp,
                            color = TextWhite,
                            maxLines = 3
                        )
                    }

                    Spacer(modifier = Modifier.height(10.dp))

                    Button(
                        onClick = {
                            selectedSubmissionForGrading = sub
                        },
                        colors = ButtonDefaults.buttonColors(
                            containerColor = if (isGraded) SurfaceCardAlt else RoleInstructor,
                            contentColor = TextWhite
                        ),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Icon(Icons.Default.RateReview, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = if (isGraded) "Edit Grade & Feedback" else "Evaluate Coursework",
                            fontFamily = FontFamily.Monospace,
                            fontWeight = FontWeight.Bold,
                            fontSize = 12.sp
                        )
                    }
                }
            }
        }

        item {
            Spacer(modifier = Modifier.height(20.dp))
        }
    }

    // Modal Grading Dialog
    if (selectedSubmissionForGrading != null) {
        val target = selectedSubmissionForGrading!!
        AlertDialog(
            onDismissRequest = { selectedSubmissionForGrading = null },
            title = {
                Text(
                    text = "Evaluate: ${target.userName}",
                    fontFamily = FontFamily.Serif,
                    fontWeight = FontWeight.Bold,
                    color = TextWhite
                )
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text(
                        text = "Deliverable: ${target.assignmentTitle}",
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 12.sp,
                        color = GoldSoft
                    )

                    OutlinedTextField(
                        value = gradeInput,
                        onValueChange = { gradeInput = it },
                        label = { Text("Grade (0 - 100)") },
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedTextColor = TextWhite,
                            unfocusedTextColor = TextWhite,
                            focusedBorderColor = RoleInstructor
                        ),
                        modifier = Modifier.fillMaxWidth()
                    )

                    OutlinedTextField(
                        value = feedbackInput,
                        onValueChange = { feedbackInput = it },
                        label = { Text("Faculty Rubric Feedback") },
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedTextColor = TextWhite,
                            unfocusedTextColor = TextWhite,
                            focusedBorderColor = RoleInstructor
                        ),
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(100.dp)
                    )
                }
            },
            confirmButton = {
                Button(
                    onClick = {
                        val score = gradeInput.toIntOrNull() ?: 85
                        scope.launch {
                            repository.gradeSubmission(target.id, score, feedbackInput)
                            selectedSubmissionForGrading = null
                            Toast.makeText(context, "Coursework graded successfully!", Toast.LENGTH_SHORT).show()
                        }
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = RoleInstructor)
                ) {
                    Text("Save Evaluation")
                }
            },
            dismissButton = {
                TextButton(onClick = { selectedSubmissionForGrading = null }) {
                    Text("Cancel", color = TextMuted)
                }
            },
            containerColor = SurfaceCard
        )
    }
}
