package com.thebusinesscut.lms

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import com.thebusinesscut.lms.ui.navigation.AppNavigation
import com.thebusinesscut.lms.ui.theme.CanvasDark
import com.thebusinesscut.lms.ui.theme.TheBusinessCutTheme

class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        val app = application as TheBusinessCutApp
        val repository = app.repository

        setContent {
            TheBusinessCutTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = CanvasDark
                ) {
                    AppNavigation(repository = repository)
                }
            }
        }
    }
}
