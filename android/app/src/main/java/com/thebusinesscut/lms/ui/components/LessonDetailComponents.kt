package com.thebusinesscut.lms.ui.components

import android.widget.Toast
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.model.*
import com.thebusinesscut.lms.ui.theme.*

@Composable
fun FrameworkCard(
    framework: Framework,
    modifier: Modifier = Modifier
) {
    var expanded by remember { mutableStateOf(true) }
    val clipboardManager = LocalClipboardManager.current
    val context = LocalContext.current

    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(containerColor = SurfaceCard),
        border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable { expanded = !expanded },
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Layers,
                        contentDescription = null,
                        tint = GoldBright,
                        modifier = Modifier.size(20.dp)
                    )
                    Text(
                        text = "APPLY THE FRAMEWORK",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold,
                        fontSize = 12.sp,
                        color = GoldBright
                    )
                }

                Icon(
                    imageVector = if (expanded) Icons.Default.KeyboardArrowUp else Icons.Default.KeyboardArrowDown,
                    contentDescription = null,
                    tint = TextMuted
                )
            }

            AnimatedVisibility(visible = expanded) {
                Column(modifier = Modifier.padding(top = 12.dp)) {
                    Text(
                        text = framework.name,
                        fontFamily = FontFamily.Serif,
                        fontWeight = FontWeight.Bold,
                        fontSize = 18.sp,
                        color = TextWhite
                    )

                    Spacer(modifier = Modifier.height(6.dp))

                    Text(
                        text = framework.description,
                        fontFamily = FontFamily.SansSerif,
                        fontSize = 13.sp,
                        color = TextMuted,
                        lineHeight = 20.sp
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    // Key Steps
                    framework.keySteps.forEachIndexed { index, step ->
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp),
                            verticalAlignment = Alignment.Top,
                            horizontalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(22.dp)
                                    .clip(RoundedCornerShape(6.dp))
                                    .background(GoldContainer),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(
                                    text = "${index + 1}",
                                    fontFamily = FontFamily.Monospace,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 11.sp,
                                    color = GoldBright
                                )
                            }
                            Text(
                                text = step,
                                fontFamily = FontFamily.SansSerif,
                                fontSize = 13.sp,
                                color = TextWhite,
                                lineHeight = 19.sp,
                                modifier = Modifier.weight(1f)
                            )
                        }
                    }

                    if (!framework.templateSnippet.isNullOrBlank()) {
                        Spacer(modifier = Modifier.height(12.dp))
                        OutlinedButton(
                            onClick = {
                                clipboardManager.setText(AnnotatedString(framework.templateSnippet))
                                Toast.makeText(context, "Framework template copied!", Toast.LENGTH_SHORT).show()
                            },
                            colors = ButtonDefaults.outlinedButtonColors(contentColor = GoldBright),
                            border = ButtonDefaults.outlinedButtonBorder.copy(brush = androidx.compose.ui.graphics.SolidColor(GoldPrimary.copy(alpha = 0.5f))),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Icon(Icons.Default.ContentCopy, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Copy Strategy Template", fontSize = 12.sp, fontFamily = FontFamily.Monospace)
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun KnowledgeCheckQuiz(
    questions: List<KnowledgeCheckQuestion>,
    previousScore: Int?,
    onQuizCompleted: (score: Int, passed: Boolean) -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedAnswers by remember { mutableStateOf<Map<Int, Int>>(emptyMap()) }
    var submitted by remember { mutableStateOf(previousScore != null) }

    Card(
        modifier = modifier.fillMaxWidth(),
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
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Quiz,
                        contentDescription = null,
                        tint = GoldBright,
                        modifier = Modifier.size(20.dp)
                    )
                    Text(
                        text = "KNOWLEDGE CHECK",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold,
                        fontSize = 12.sp,
                        color = GoldBright
                    )
                }

                if (submitted) {
                    val correctCount = questions.indices.count { selectedAnswers[it] == questions[it].correctOptionIndex }
                    val percent = if (questions.isNotEmpty()) (correctCount * 100) / questions.size else 100
                    Text(
                        text = "SCORE: $percent%",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold,
                        fontSize = 12.sp,
                        color = if (percent >= 70) SuccessGreen else GoldBright
                    )
                }
            }

            Spacer(modifier = Modifier.height(12.dp))

            questions.forEachIndexed { qIndex, question ->
                Text(
                    text = "${qIndex + 1}. ${question.question}",
                    fontFamily = FontFamily.Serif,
                    fontWeight = FontWeight.Bold,
                    fontSize = 15.sp,
                    color = TextWhite,
                    modifier = Modifier.padding(bottom = 8.dp)
                )

                question.options.forEachIndexed { optIndex, optionText ->
                    val isSelected = selectedAnswers[qIndex] == optIndex
                    val isCorrect = optIndex == question.correctOptionIndex

                    val borderColor = when {
                        !submitted -> if (isSelected) GoldBright else BorderSubtle
                        isSelected && isCorrect -> SuccessGreen
                        isSelected && !isCorrect -> ErrorRed
                        isCorrect -> SuccessGreen
                        else -> BorderSubtle
                    }

                    val bgColor = when {
                        !submitted -> if (isSelected) GoldContainer else SurfaceDark
                        isSelected && isCorrect -> SuccessGreenBg
                        isSelected && !isCorrect -> ErrorRed.copy(alpha = 0.15f)
                        isCorrect -> SuccessGreenBg
                        else -> SurfaceDark
                    }

                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 4.dp)
                            .clip(RoundedCornerShape(8.dp))
                            .border(1.dp, borderColor, RoundedCornerShape(8.dp))
                            .background(bgColor)
                            .clickable(enabled = !submitted) {
                                selectedAnswers = selectedAnswers + (qIndex to optIndex)
                            }
                            .padding(10.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        RadioButton(
                            selected = isSelected,
                            onClick = {
                                if (!submitted) {
                                    selectedAnswers = selectedAnswers + (qIndex to optIndex)
                                }
                            },
                            colors = RadioButtonDefaults.colors(
                                selectedColor = GoldBright,
                                unselectedColor = TextMuted
                            )
                        )
                        Text(
                            text = optionText,
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 13.sp,
                            color = TextWhite,
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                if (submitted) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 6.dp)
                            .clip(RoundedCornerShape(6.dp))
                            .background(SurfaceDark)
                            .border(0.5.dp, GoldPrimary.copy(alpha = 0.4f), RoundedCornerShape(6.dp))
                            .padding(8.dp)
                    ) {
                        Text(
                            text = "Explanation: ${question.explanation}",
                            fontFamily = FontFamily.SansSerif,
                            fontSize = 12.sp,
                            color = TextMuted,
                            lineHeight = 17.sp
                        )
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))
            }

            if (!submitted && questions.isNotEmpty()) {
                Button(
                    onClick = {
                        submitted = true
                        val correct = questions.indices.count { selectedAnswers[it] == questions[it].correctOptionIndex }
                        val pct = (correct * 100) / questions.size
                        onQuizCompleted(pct, pct >= 70)
                    },
                    colors = ButtonDefaults.buttonColors(containerColor = GoldPrimary, contentColor = CanvasDark),
                    enabled = selectedAnswers.size == questions.size,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = "Submit Knowledge Check",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }
    }
}
