package com.thebusinesscut.lms.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.data.model.UserRole
import com.thebusinesscut.lms.ui.theme.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RoleSwitcherSheet(
    currentRole: UserRole,
    onRoleSelected: (UserRole) -> Unit,
    onDismiss: () -> Unit
) {
    ModalBottomSheet(
        onDismissRequest = onDismiss,
        containerColor = SurfaceCard,
        contentColor = TextWhite,
        dragHandle = { BottomSheetDefaults.DragHandle(color = BorderSubtle) }
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 20.dp, vertical = 10.dp)
                .navigationBarsPadding()
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "SWITCH ACTIVE PERSONA",
                    fontFamily = FontFamily.Monospace,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    color = GoldBright
                )

                IconButton(onClick = onDismiss, modifier = Modifier.size(28.dp)) {
                    Icon(Icons.Default.Close, contentDescription = "Close", tint = TextMuted)
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Option 1: Student
            PersonaOptionCard(
                name = "Sarah Chen",
                title = "Stanford GSB • PM Fellow",
                role = UserRole.student,
                roleLabel = "STUDENT",
                accentColor = RoleStudent,
                bgColor = RoleStudentBg,
                isSelected = currentRole == UserRole.student,
                onSelect = {
                    onRoleSelected(UserRole.student)
                    onDismiss()
                }
            )

            Spacer(modifier = Modifier.height(10.dp))

            // Option 2: Instructor
            PersonaOptionCard(
                name = "Prof. Julian Vance",
                title = "HBS Clinical Faculty • Strategy",
                role = UserRole.instructor,
                roleLabel = "INSTRUCTOR",
                accentColor = RoleInstructor,
                bgColor = RoleInstructorBg,
                isSelected = currentRole == UserRole.instructor,
                onSelect = {
                    onRoleSelected(UserRole.instructor)
                    onDismiss()
                }
            )

            Spacer(modifier = Modifier.height(10.dp))

            // Option 3: Admin
            PersonaOptionCard(
                name = "Elena Rostova",
                title = "Curriculum Director & Governance",
                role = UserRole.admin,
                roleLabel = "ACADEMIC ADMIN",
                accentColor = RoleAdmin,
                bgColor = RoleAdminBg,
                isSelected = currentRole == UserRole.admin,
                onSelect = {
                    onRoleSelected(UserRole.admin)
                    onDismiss()
                }
            )

            Spacer(modifier = Modifier.height(20.dp))
        }
    }
}

@Composable
private fun PersonaOptionCard(
    name: String,
    title: String,
    role: UserRole,
    roleLabel: String,
    accentColor: Color,
    bgColor: Color,
    isSelected: Boolean,
    onSelect: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(10.dp))
            .border(
                1.dp,
                if (isSelected) accentColor else BorderSubtle,
                RoundedCornerShape(10.dp)
            )
            .background(if (isSelected) bgColor else SurfaceDark)
            .clickable { onSelect() }
            .padding(14.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Column {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Box(
                    modifier = Modifier
                        .size(8.dp)
                        .clip(RoundedCornerShape(2.dp))
                        .background(accentColor)
                )
                Text(
                    text = roleLabel,
                    fontFamily = FontFamily.Monospace,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                    color = accentColor
                )
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = name,
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Bold,
                fontSize = 16.sp,
                color = TextWhite
            )
            Text(
                text = title,
                fontFamily = FontFamily.SansSerif,
                fontSize = 12.sp,
                color = TextMuted
            )
        }

        if (isSelected) {
            Icon(
                imageVector = Icons.Default.Check,
                contentDescription = "Selected",
                tint = accentColor,
                modifier = Modifier.size(20.dp)
            )
        }
    }
}
