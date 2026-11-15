package com.thebusinesscut.lms.ui.screens.catalog

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.FilterList
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.components.PosterCard
import com.thebusinesscut.lms.ui.theme.*

private val SUBJECT_TRACKS = listOf(
    "All Subjects",
    "Product discovery and user research",
    "Product strategy and roadmaps",
    "Prioritization and product metrics",
    "Product design and innovation",
    "Growth and go-to-market",
    "Marketing and brand",
    "Entrepreneurship and business models",
    "Finance and unit economics",
    "Operations and supply chain",
    "Leadership and organizational behavior",
    "Negotiation and stakeholder management",
    "Ethics, governance, and risk"
)

private val DIFFICULTIES = listOf("All", "Foundational", "Intermediate", "Advanced")

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CatalogScreen(
    repository: LmsRepository,
    onNavigateToLesson: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val lessons by repository.lessons.collectAsState()
    val progress by repository.progress.collectAsState()

    var searchQuery by remember { mutableStateOf("") }
    var selectedSubject by remember { mutableStateOf("All Subjects") }
    var selectedDifficulty by remember { mutableStateOf("All") }

    // Filtered list
    val filteredLessons = remember(lessons, searchQuery, selectedSubject, selectedDifficulty) {
        lessons.filter { lesson ->
            val matchesSearch = searchQuery.isBlank() ||
                lesson.lessonTitle.contains(searchQuery, ignoreCase = true) ||
                lesson.filmTitle.contains(searchQuery, ignoreCase = true) ||
                lesson.learningObjective.contains(searchQuery, ignoreCase = true) ||
                lesson.topicTags.any { it.contains(searchQuery, ignoreCase = true) }

            val matchesSubject = selectedSubject == "All Subjects" ||
                lesson.subject.equals(selectedSubject, ignoreCase = true)

            val matchesDifficulty = selectedDifficulty == "All" ||
                lesson.difficulty.equals(selectedDifficulty, ignoreCase = true)

            matchesSearch && matchesSubject && matchesDifficulty
        }
    }

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(CanvasDark)
            .padding(horizontal = 16.dp)
    ) {
        Spacer(modifier = Modifier.height(12.dp))

        // Search Input
        OutlinedTextField(
            value = searchQuery,
            onValueChange = { searchQuery = it },
            placeholder = {
                Text(
                    text = "Search by film, concept, skill...",
                    color = TextMuted,
                    fontSize = 13.sp
                )
            },
            leadingIcon = {
                Icon(Icons.Default.Search, contentDescription = "Search", tint = GoldBright)
            },
            trailingIcon = {
                if (searchQuery.isNotEmpty()) {
                    IconButton(onClick = { searchQuery = "" }) {
                        Icon(Icons.Default.Close, contentDescription = "Clear", tint = TextMuted)
                    }
                }
            },
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = SurfaceCard,
                unfocusedContainerColor = SurfaceCard,
                focusedBorderColor = GoldPrimary,
                unfocusedBorderColor = BorderSubtle,
                focusedTextColor = TextWhite,
                unfocusedTextColor = TextWhite
            ),
            shape = RoundedCornerShape(12.dp),
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(10.dp))

        // Horizontal Subject Filter Chips
        LazyRow(
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.fillMaxWidth()
        ) {
            items(SUBJECT_TRACKS) { subject ->
                val isSelected = selectedSubject == subject
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .border(
                            1.dp,
                            if (isSelected) GoldPrimary else BorderSubtle,
                            RoundedCornerShape(8.dp)
                        )
                        .background(if (isSelected) GoldContainer else SurfaceCard)
                        .clickable { selectedSubject = subject }
                        .padding(horizontal = 12.dp, vertical = 6.dp)
                ) {
                    Text(
                        text = subject,
                        fontFamily = FontFamily.SansSerif,
                        fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal,
                        fontSize = 12.sp,
                        color = if (isSelected) GoldBright else TextWhite
                    )
                }
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Difficulty Chips & Result Count
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                DIFFICULTIES.forEach { diff ->
                    val isSelected = selectedDifficulty == diff
                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(6.dp))
                            .border(
                                0.5.dp,
                                if (isSelected) GoldBright else BorderSubtle,
                                RoundedCornerShape(6.dp)
                            )
                            .background(if (isSelected) GoldContainer else SurfaceDark)
                            .clickable { selectedDifficulty = diff }
                            .padding(horizontal = 8.dp, vertical = 3.dp)
                    ) {
                        Text(
                            text = diff.uppercase(),
                            fontFamily = FontFamily.Monospace,
                            fontSize = 10.sp,
                            fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal,
                            color = if (isSelected) GoldBright else TextMuted
                        )
                    }
                }
            }

            Text(
                text = "${filteredLessons.size} of ${lessons.size} Cases",
                fontFamily = FontFamily.Monospace,
                fontSize = 11.sp,
                color = TextMuted
            )
        }

        Spacer(modifier = Modifier.height(12.dp))

        // Theatrical 2:3 Vertical Poster Grid (2 columns on phones, 3+ on tablets)
        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 150.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            modifier = Modifier.fillMaxSize()
        ) {
            items(filteredLessons, key = { it.id }) { lesson ->
                val isBookmarked = progress[lesson.id]?.bookmarked ?: false
                val isCompleted = progress[lesson.id]?.status == "completed"

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
