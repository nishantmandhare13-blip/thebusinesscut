package com.thebusinesscut.lms.ui.screens.profile

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Save
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
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.components.TbcMonogramBadge
import com.thebusinesscut.lms.ui.theme.*
import kotlinx.coroutines.launch

@Composable
fun ProfileScreen(
    repository: LmsRepository,
    modifier: Modifier = Modifier
) {
    val currentUser by repository.currentUser.collectAsState()
    val scope = rememberCoroutineScope()
    val context = LocalContext.current

    var specializationInput by remember(currentUser) { mutableStateOf(currentUser.specialization) }
    var selectedGoals by remember(currentUser) { mutableStateOf(currentUser.learningGoals.toSet()) }

    val allGoalOptions = listOf(
        "Transition from Senior PM to Director of Product",
        "Master capital allocation and M&A valuation dynamics",
        "Lead cross-functional teams through technological crises",
        "Accelerate product-market fit discovery & user research",
        "Deconstruct competitive moats and platform network effects",
        "Master high-stakes boardroom negotiation & BATNA strategy"
    )

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
                text = "EXECUTIVE PROFILE & SETTINGS",
                fontFamily = FontFamily.Monospace,
                fontWeight = FontWeight.Bold,
                fontSize = 12.sp,
                color = GoldBright
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "Candidate Identity & Goals",
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Bold,
                fontSize = 22.sp,
                color = TextWhite
            )
        }

        // Profile Card
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
                        horizontalArrangement = Arrangement.spacedBy(14.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .size(56.dp)
                                .clip(CircleShape)
                                .background(GoldContainer)
                                .border(1.5.dp, GoldBright, CircleShape),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(Icons.Default.Person, contentDescription = null, tint = GoldBright, modifier = Modifier.size(28.dp))
                        }

                        Column {
                            Text(
                                text = currentUser.name,
                                fontFamily = FontFamily.Serif,
                                fontWeight = FontWeight.Bold,
                                fontSize = 18.sp,
                                color = TextWhite
                            )
                            Text(
                                text = currentUser.email,
                                fontFamily = FontFamily.SansSerif,
                                fontSize = 12.sp,
                                color = TextMuted
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            TbcMonogramBadge(subtext = currentUser.mbaProgram)
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    Text(
                        text = "MBA Specialization Track:",
                        fontFamily = FontFamily.Monospace,
                        fontSize = 11.sp,
                        color = GoldSoft
                    )

                    Spacer(modifier = Modifier.height(4.dp))

                    OutlinedTextField(
                        value = specializationInput,
                        onValueChange = { specializationInput = it },
                        modifier = Modifier.fillMaxWidth(),
                        colors = OutlinedTextFieldDefaults.colors(
                            focusedTextColor = TextWhite,
                            unfocusedTextColor = TextWhite,
                            focusedBorderColor = GoldPrimary
                        )
                    )
                }
            }
        }

        // Learning Goals Multi-Select
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(12.dp),
                colors = CardDefaults.cardColors(containerColor = SurfaceCard),
                border = CardDefaults.outlinedCardBorder().copy(brush = androidx.compose.ui.graphics.SolidColor(BorderSubtle))
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "TARGET PM & EXECUTIVE GOALS",
                        fontFamily = FontFamily.Monospace,
                        fontWeight = FontWeight.Bold,
                        fontSize = 11.sp,
                        color = GoldBright
                    )

                    Spacer(modifier = Modifier.height(10.dp))

                    allGoalOptions.forEach { goal ->
                        val isChecked = selectedGoals.contains(goal)
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(if (isChecked) GoldContainer else SurfaceDark)
                                .border(
                                    1.dp,
                                    if (isChecked) GoldBright else BorderSubtle,
                                    RoundedCornerShape(8.dp)
                                )
                                .padding(10.dp),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            Checkbox(
                                checked = isChecked,
                                onCheckedChange = { checked ->
                                    selectedGoals = if (checked) {
                                        selectedGoals + goal
                                    } else {
                                        selectedGoals - goal
                                    }
                                },
                                colors = CheckboxDefaults.colors(
                                    checkedColor = GoldBright,
                                    checkmarkColor = CanvasDark
                                )
                            )
                            Text(
                                text = goal,
                                fontFamily = FontFamily.SansSerif,
                                fontSize = 12.sp,
                                color = TextWhite,
                                modifier = Modifier.weight(1f)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    Button(
                        onClick = {
                            scope.launch {
                                repository.updateProfile(specializationInput, selectedGoals.toList())
                                Toast.makeText(context, "Executive profile updated!", Toast.LENGTH_SHORT).show()
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = GoldPrimary, contentColor = CanvasDark),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Icon(Icons.Default.Save, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "Save Profile Settings",
                            fontFamily = FontFamily.Monospace,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }

        item {
            Spacer(modifier = Modifier.height(20.dp))
        }
    }
}
