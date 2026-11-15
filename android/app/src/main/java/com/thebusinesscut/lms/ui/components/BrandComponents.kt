package com.thebusinesscut.lms.ui.components

import androidx.compose.animation.core.*
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.thebusinesscut.lms.R
import com.thebusinesscut.lms.ui.theme.*

/**
 * Three-line left-aligned brand lockup matching desktop website:
 * Line 1: Official Clapperboard emblem
 * Line 2: "Business, Scene by Scene" in crisp white serif
 * Line 3: "Learning TBC" in gold (guaranteed single line)
 */
@Composable
fun BrandHeader(
    modifier: Modifier = Modifier,
    logoHeight: Int = 56,
    textSize: Int = 20
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        horizontalAlignment = Alignment.Start
    ) {
        // Line 1: Logo
        Image(
            painter = painterResource(id = R.drawable.logo_white_text),
            contentDescription = "The Business Cut Logo",
            modifier = Modifier
                .height(logoHeight.dp)
                .padding(bottom = 6.dp)
        )

        // Line 2: Tagline
        Text(
            text = "Business, Scene by Scene",
            fontFamily = FontFamily.Serif,
            fontWeight = FontWeight.Bold,
            fontSize = textSize.sp,
            color = TextWhite,
            lineHeight = (textSize * 1.2).sp
        )

        // Line 3: Learning TBC (in gold, strictly single line)
        Text(
            text = "Learning TBC",
            fontFamily = FontFamily.Serif,
            fontWeight = FontWeight.Black,
            fontSize = textSize.sp,
            color = GoldBright,
            maxLines = 1,
            lineHeight = (textSize * 1.2).sp,
            modifier = Modifier.padding(top = 2.dp)
        )
    }
}

/**
 * Compact TBC Monogram Badge with pulsing amber status dot
 */
@Composable
fun TbcMonogramBadge(
    modifier: Modifier = Modifier,
    subtext: String? = null
) {
    val infiniteTransition = rememberInfiniteTransition(label = "pulse")
    val alpha by infiniteTransition.animateFloat(
        initialValue = 0.4f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(800, easing = LinearEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "alpha"
    )

    Row(
        modifier = modifier
            .clip(RoundedCornerShape(6.dp))
            .background(SurfaceDark)
            .border(1.dp, GoldPrimary.copy(alpha = 0.4f), RoundedCornerShape(6.dp))
            .padding(horizontal = 8.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp)
    ) {
        Box(
            modifier = Modifier
                .size(6.dp)
                .clip(CircleShape)
                .background(GoldBright.copy(alpha = alpha))
        )
        Text(
            text = "TBC",
            fontFamily = FontFamily.Monospace,
            fontWeight = FontWeight.Bold,
            fontSize = 11.sp,
            color = GoldSoft
        )
        if (subtext != null) {
            Text(
                text = "• $subtext",
                fontFamily = FontFamily.SansSerif,
                fontSize = 11.sp,
                color = TextMuted
            )
        }
    }
}
