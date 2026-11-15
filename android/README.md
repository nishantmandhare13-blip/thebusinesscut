# The Business Cut — Native Android LMS (Kotlin & Jetpack Compose)

> **“Business, Scene by Scene. Learning, TBC.”**  
> Native Android application for **The Business Cut** executive Learning Management System. Built with **100% Kotlin**, **Jetpack Compose**, and **Material 3**, perfectly preserving the desktop website's editorial aesthetic, dark navy canvas, warm gold accents, and 104-lesson curriculum.

---

## 📱 Feature Parity Highlights

- **Executive Identity & Brand Lockup**: Features the official clapperboard emblem and 3-line lockup (*The Business Cut*, *Business, Scene by Scene*, *Learning TBC* in gold).
- **Theatrical 2:3 Vertical Posters**: Full catalog of 104 Hollywood case studies rendered with true cinematic aspect ratio and gradient overlays.
- **Deep MBA Analysis**: Complete case breakdowns, framework step-by-step applications, copyable strategy templates, reflection questions, and practical coursework deliverables.
- **Interactive Knowledge Checks**: Multi-question quizzes with instant explanatory feedback and automated scoring.
- **Persona & Role Switcher**: Switch seamlessly between **Student** (*Sarah Chen*), **Instructor** (*Prof. Julian Vance*), and **Academic Admin** (*Elena Rostova*).
- **Faculty Workspace**: Submissions grading queue with point rubrics and student feedback, plus cohort management.
- **Academic Governance**: TMDB API diagnostic audit and catalog publishing moderation.
- **Offline Resilience**: Offline caching ensures students can study cases and draft notes without interruption during flights or transit.
- **Deep Linking**: Opens web links (`https://thebusinesscut.vercel.app/lessons/{id}`) and custom schemes (`thebusinesscut://lesson/{id}`) directly in the native app.

---

## 🛠️ Tech Stack & Architecture

- **Language**: Kotlin 2.0+
- **UI Toolkit**: Jetpack Compose & Material 3
- **Architecture**: Single Activity MVVM + Reactive StateFlow with Repository Pattern
- **Networking**: Retrofit 2.11 + OkHttp 4.12 + Kotlinx Serialization
- **Image Pipeline**: Coil 2.7 with disk caching and smooth crossfades
- **Navigation**: Jetpack Navigation Compose with type-safe argument passing and deep links
- **Local Persistence**: SharedPreferences / DataStore for offline session continuity
- **Minimum SDK**: Android 8.0 (API Level 26)
- **Target SDK**: Android 15 (API Level 35)

---

## 🚀 Prerequisites & Environment Setup

1. **Java Development Kit (JDK)**: JDK 17 or higher (OpenJDK 17 recommended).
2. **Android Studio**: Android Studio Jellyfish (2023.3.1), Koala (2024.1.1), or newer.
3. **Android SDK**: Android SDK Platform 35 (installed via Android Studio SDK Manager).
4. **Android Build Tools**: 35.0.0.

---

## 💻 Building and Running

### 1. Open in Android Studio
1. Launch Android Studio.
2. Select **Open** and choose the `android/` directory inside this repository.
3. Allow Gradle to sync dependencies.
4. Select a virtual device (e.g. Pixel 8 or Pixel Tablet) or connect a physical Android device with USB Debugging enabled.
5. Click **Run ▶** (Shift + F10).

### 2. Build via Command Line
Open a terminal in the `android/` directory:

```bash
# On Linux / macOS:
./gradlew assembleDebug

# On Windows (PowerShell):
.\gradlew.bat assembleDebug
```

The resulting debug APK will be generated at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

To install directly to a connected device:
```bash
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

---

## 🌐 Backend & API Configuration

The Android app communicates with the Next.js LMS REST API (`/api/v1/`). By default, it connects to the production deployment:

- **Production URL**: `https://thebusinesscut.vercel.app/api/v1/`

### Connecting to a Local Development Server:
To point the Android app to a local Next.js dev server running on your computer:
1. In `android/app/build.gradle.kts`, update the `debug` build type:
   ```kotlin
   buildTypes {
       debug {
           // For Android Emulator (10.0.2.2 maps to host machine localhost)
           buildConfigField("String", "API_BASE_URL", "\"http://10.0.2.2:3000/api/v1/\"")
           
           // For physical device on same Wi-Fi, use your machine IP:
           // buildConfigField("String", "API_BASE_URL", "\"http://192.168.1.100:3000/api/v1/\"")
       }
   }
   ```
2. Rebuild and deploy the debug build.

---

## 🛡️ Security & Fair Use Compliance

- **No API Secrets in Client**: TMDB API keys remain secured exclusively on the Next.js server backend. The Android app only receives public image URLs and metadata.
- **Copyright Compliance**: No copyrighted video clips, movie frames, or audio tracks are hosted or scraped. Original scene contexts and authorized TMDB artwork are utilized under fair educational use terms.
- **Accessible Design**: Complies with Android accessibility guidelines with high-contrast text, scalable typography, and zero-autoplay audio cues.
