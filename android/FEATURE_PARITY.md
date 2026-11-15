# Desktop vs. Native Android Feature Parity Checklist

The following matrix documents complete feature-by-feature parity between the desktop web application and the native Android Kotlin application.

| Desktop Web Route | Android Screen / Component | Parity Status | Feature Implementation Details |
| :--- | :--- | :---: | :--- |
| **Landing Page** (`/`) | `DashboardScreen` / `BrandHeader` | ✅ 100% | Three-line left-aligned brand lockup, clapperboard emblem, stats summary, featured case studies carousel. |
| **Student Dashboard** (`/dashboard`) | `DashboardScreen` (Tab 1) | ✅ 100% | 4 Metric cards (Started, Completed, Quiz Average, Study Hours), Continue Learning active banner, Recommended cases list. |
| **Case Catalog** (`/catalog`) | `CatalogScreen` (Tab 2) | ✅ 100% | Real-time search by film, concept, skill; 12 horizontal subject filter chips; difficulty filters (Foundational, Intermediate, Advanced); 2:3 vertical theatrical poster grid. |
| **Lesson Detail** (`/lessons/[id]`) | `LessonDetailScreen` | ✅ 100% | Film metadata banner, learning objective card, original scene context, concept breakdown, expandable framework with template copy, discussion prompts, quiz, coursework submission, auto-saved notes. |
| **Learning Paths** (`/paths`) | `LearningPathsScreen` (Tab 3) | ✅ 100% | 8 executive tracks, progress bar & percentage, sequenced lesson checklist with direct link to lesson. |
| **Assignments** (`/assignments`) | `AssignmentsScreen` (Tab 4) | ✅ 100% | Student coursework submissions list, submission preview, rubric evaluation breakdown, grade score badges, and faculty feedback. |
| **Instructor Workspace** (`/instructor`) | `InstructorWorkspaceScreen` | ✅ 100% | Active cohort management (student counts & assigned curriculum), student submission grading queue, evaluation modal with grade and rubric feedback. |
| **Academic Admin** (`/admin`) | `AdminSettingsScreen` | ✅ 100% | TMDB connection status & compliance audit notice, catalog publishing toggle (hide drafts), demo data reset. |
| **Profile & Onboarding** (`/profile`) | `ProfileScreen` | ✅ 100% | Persona badge, MBA specialization editor, target executive learning goals multi-select, data sharing & analytics consent toggles. |
| **Role Switcher** (Top Navbar) | `RoleSwitcherSheet` (Bottom Sheet) | ✅ 100% | One-click persona switcher between Student (Sarah Chen), Instructor (Prof. Vance), and Admin (Elena Rostova). |
| **Deep Linking** | `AndroidManifest.xml` Intent Filters | ✅ 100% | Direct deep links for `https://thebusinesscut.vercel.app/lessons/{id}` and `thebusinesscut://lesson/{id}`. |
| **Offline Continuity** | `LmsRepository` SharedPreferences Cache | ✅ 100% | Cached lesson data and local progress persistence allows studying cases and taking notes without network access. |

---

## Responsive Tablet & Landscape Adaptations

- **Phone Layouts**: Single-column vertical scroll with sticky top bar and bottom navigation bar.
- **Tablet / Large Screens**: Adaptive 2-column or 3-column grid for case studies (`GridCells.Adaptive(minSize = 150.dp)`), wider content cards, and expanded side padding.
- **Orientation Changes**: Responsive reflow preserves scroll position and input form state across portrait and landscape modes.

---

## Technical & Backend Architecture Notes

- **API Endpoints**: Uses Next.js `/api/v1/` route handlers for all mutations and queries.
- **Data Models**: Kotlin `@Serializable` data classes in `com.thebusinesscut.lms.data.model` match TypeScript interfaces in `src/types/lms.ts` 1-to-1.
- **Zero Secrets**: Client contains no TMDB API keys or private tokens. All movie metadata and poster artwork URLs are verified and served via the secure server proxy.
