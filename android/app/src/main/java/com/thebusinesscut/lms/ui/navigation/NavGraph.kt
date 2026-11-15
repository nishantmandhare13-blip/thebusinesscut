package com.thebusinesscut.lms.ui.navigation

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavType
import androidx.navigation.compose.*
import androidx.navigation.navArgument
import androidx.navigation.navDeepLink
import com.thebusinesscut.lms.R
import com.thebusinesscut.lms.data.model.UserRole
import com.thebusinesscut.lms.data.repository.LmsRepository
import com.thebusinesscut.lms.ui.components.RoleSwitcherSheet
import com.thebusinesscut.lms.ui.screens.admin.AdminSettingsScreen
import com.thebusinesscut.lms.ui.screens.assignments.AssignmentsScreen
import com.thebusinesscut.lms.ui.screens.catalog.CatalogScreen
import com.thebusinesscut.lms.ui.screens.dashboard.DashboardScreen
import com.thebusinesscut.lms.ui.screens.instructor.InstructorWorkspaceScreen
import com.thebusinesscut.lms.ui.screens.lesson.LessonDetailScreen
import com.thebusinesscut.lms.ui.screens.paths.LearningPathsScreen
import com.thebusinesscut.lms.ui.screens.profile.ProfileScreen
import com.thebusinesscut.lms.ui.theme.*
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppNavigation(
    repository: LmsRepository
) {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    val currentRole by repository.currentRole.collectAsState()
    val currentUser by repository.currentUser.collectAsState()
    val scope = rememberCoroutineScope()

    var showRoleSheet by remember { mutableStateOf(false) }

    val roleColor = when (currentRole) {
        UserRole.student -> RoleStudent
        UserRole.instructor -> RoleInstructor
        UserRole.admin -> RoleAdmin
    }

    Scaffold(
        topBar = {
            // Executive Top Bar with Brand Logo and Role Switcher Pill
            TopAppBar(
                title = {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.clickable {
                            navController.navigate(Screen.Dashboard.route) {
                                popUpTo(Screen.Dashboard.route) { inclusive = true }
                            }
                        }
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.clapperboard),
                            contentDescription = "The Business Cut Logo",
                            modifier = Modifier.size(30.dp)
                        )
                        Column {
                            Text(
                                text = "THE BUSINESS CUT",
                                fontFamily = FontFamily.Serif,
                                fontWeight = FontWeight.Black,
                                fontSize = 14.sp,
                                color = TextWhite,
                                letterSpacing = 0.5.sp
                            )
                            Text(
                                text = "Learning TBC",
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold,
                                fontSize = 9.sp,
                                color = GoldBright
                            )
                        }
                    }
                },
                actions = {
                    // Role Switcher Pill (Matching desktop navbar)
                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(8.dp))
                            .border(1.dp, roleColor.copy(alpha = 0.5f), RoundedCornerShape(8.dp))
                            .background(SurfaceDark)
                            .clickable { showRoleSheet = true }
                            .padding(horizontal = 8.dp, vertical = 5.dp)
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(5.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(6.dp)
                                    .clip(RoundedCornerShape(2.dp))
                                    .background(roleColor)
                            )
                            Text(
                                text = "${currentRole.name.uppercase()}: ${currentUser.name.split(" ")[0]}",
                                fontFamily = FontFamily.Monospace,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold,
                                color = roleColor
                            )
                        }
                    }

                    // Profile Icon
                    IconButton(onClick = { navController.navigate(Screen.Profile.route) }) {
                        Icon(
                            imageVector = Screen.Profile.selectedIcon,
                            contentDescription = "Profile",
                            tint = TextMuted,
                            modifier = Modifier.size(20.dp)
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = CanvasDark,
                    titleContentColor = TextWhite
                )
            )
        },
        bottomBar = {
            // Render Bottom Navigation for primary screens
            NavigationBar(
                containerColor = SurfaceCard,
                contentColor = TextWhite,
                tonalElevation = 8.dp
            ) {
                Screen.bottomNavItems.forEach { screen ->
                    val isSelected = currentRoute == screen.route
                    NavigationBarItem(
                        selected = isSelected,
                        onClick = {
                            if (currentRoute != screen.route) {
                                navController.navigate(screen.route) {
                                    popUpTo(Screen.Dashboard.route) { saveState = true }
                                    launchSingleTop = true
                                    restoreState = true
                                }
                            }
                        },
                        icon = {
                            Icon(
                                imageVector = if (isSelected) screen.selectedIcon else screen.unselectedIcon,
                                contentDescription = screen.title
                            )
                        },
                        label = {
                            Text(
                                text = screen.title,
                                fontFamily = FontFamily.SansSerif,
                                fontSize = 11.sp,
                                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal
                            )
                        },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = CanvasDark,
                            selectedTextColor = GoldBright,
                            indicatorColor = GoldPrimary,
                            unselectedIconColor = TextMuted,
                            unselectedTextColor = TextMuted
                        )
                    )
                }

                // If Instructor role is active, add Instructor Workspace item
                if (currentRole == UserRole.instructor) {
                    val isSelected = currentRoute == Screen.Instructor.route
                    NavigationBarItem(
                        selected = isSelected,
                        onClick = {
                            navController.navigate(Screen.Instructor.route) {
                                launchSingleTop = true
                            }
                        },
                        icon = {
                            Icon(
                                imageVector = if (isSelected) Screen.Instructor.selectedIcon else Screen.Instructor.unselectedIcon,
                                contentDescription = Screen.Instructor.title
                            )
                        },
                        label = { Text("Faculty", fontSize = 11.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = CanvasDark,
                            selectedTextColor = RoleInstructor,
                            indicatorColor = RoleInstructor,
                            unselectedIconColor = TextMuted,
                            unselectedTextColor = TextMuted
                        )
                    )
                }

                // If Admin role is active, add Admin Settings item
                if (currentRole == UserRole.admin) {
                    val isSelected = currentRoute == Screen.Admin.route
                    NavigationBarItem(
                        selected = isSelected,
                        onClick = {
                            navController.navigate(Screen.Admin.route) {
                                launchSingleTop = true
                            }
                        },
                        icon = {
                            Icon(
                                imageVector = if (isSelected) Screen.Admin.selectedIcon else Screen.Admin.unselectedIcon,
                                contentDescription = Screen.Admin.title
                            )
                        },
                        label = { Text("Admin", fontSize = 11.sp) },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = CanvasDark,
                            selectedTextColor = RoleAdmin,
                            indicatorColor = RoleAdmin,
                            unselectedIconColor = TextMuted,
                            unselectedTextColor = TextMuted
                        )
                    )
                }
            }
        },
        containerColor = CanvasDark
    ) { paddingValues ->
        NavHost(
            navController = navController,
            startDestination = Screen.Dashboard.route,
            modifier = Modifier.padding(paddingValues)
        ) {
            // Dashboard
            composable(Screen.Dashboard.route) {
                DashboardScreen(
                    repository = repository,
                    onNavigateToLesson = { id ->
                        navController.navigate(Screen.LessonDetail.createRoute(id))
                    },
                    onNavigateToCatalog = {
                        navController.navigate(Screen.Catalog.route)
                    }
                )
            }

            // Catalog
            composable(Screen.Catalog.route) {
                CatalogScreen(
                    repository = repository,
                    onNavigateToLesson = { id ->
                        navController.navigate(Screen.LessonDetail.createRoute(id))
                    }
                )
            }

            // Learning Paths
            composable(Screen.Paths.route) {
                LearningPathsScreen(
                    repository = repository,
                    onNavigateToLesson = { id ->
                        navController.navigate(Screen.LessonDetail.createRoute(id))
                    }
                )
            }

            // Assignments
            composable(Screen.Assignments.route) {
                AssignmentsScreen(
                    repository = repository,
                    onNavigateToLesson = { id ->
                        navController.navigate(Screen.LessonDetail.createRoute(id))
                    }
                )
            }

            // Instructor Workspace
            composable(Screen.Instructor.route) {
                InstructorWorkspaceScreen(
                    repository = repository,
                    onNavigateToLesson = { id ->
                        navController.navigate(Screen.LessonDetail.createRoute(id))
                    }
                )
            }

            // Admin Settings
            composable(Screen.Admin.route) {
                AdminSettingsScreen(repository = repository)
            }

            // Profile & Goals
            composable(Screen.Profile.route) {
                ProfileScreen(repository = repository)
            }

            // Lesson Detail with Deep Link support
            composable(
                route = Screen.LessonDetail.route,
                arguments = listOf(
                    navArgument("id") { type = NavType.StringType }
                ),
                deepLinks = listOf(
                    navDeepLink { uriPattern = "https://thebusinesscut.vercel.app/lessons/{id}" },
                    navDeepLink { uriPattern = "thebusinesscut://lesson/{id}" }
                )
            ) { backStackEntry ->
                val id = backStackEntry.arguments?.getString("id") ?: "lms-001"
                LessonDetailScreen(
                    lessonId = id,
                    repository = repository,
                    onBack = { navController.popBackStack() }
                )
            }
        }
    }

    // Role Switcher Modal Bottom Sheet
    if (showRoleSheet) {
        RoleSwitcherSheet(
            currentRole = currentRole,
            onRoleSelected = { newRole ->
                scope.launch {
                    repository.switchRole(newRole)
                }
            },
            onDismiss = { showRoleSheet = false }
        )
    }
}
