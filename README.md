# The Business Cut — Film-Based MBA & Product Management LMS

> **Executive Pedagogy Meets Cinematic Storytelling.**  
> An editorial-grade Learning Management System (LMS) designed for MBA students and Product Management leaders. *The Business Cut* uses iconic narrative films as strategic case studies for modern product discovery, organizational behavior, unit economics, negotiation, and executive decision-making.

---

## 📽️ Core Pedagogical Concept

Traditional business school case studies often present sanitized post-mortems of corporate decisions. *The Business Cut* flips the classroom by immersing students in high-stakes human decisions captured in major Hollywood motion pictures:

- **Product Discovery & Empathy**: Analyzing customer research failures and cognitive bias in *The Founder* and *Steve Jobs*.
- **Strategy & Roadmaps**: Deconstructing resource constraints and technical debt trade-offs in *Apollo 13* and *The Martian*.
- **Prioritization & Metrics**: Evaluating north star metrics and vanity metrics in *Moneyball* and *Margin Call*.
- **Growth & Go-to-Market**: Studying platform launch strategy and network effects in *The Social Network* and *Air*.
- **Leadership & Ethics**: Analyzing governance breakdowns and algorithmic accountability in *Oppenheimer* and *Michael Clayton*.

---

## 🛡️ Content Integrity & Legal Compliance

This application is strictly built to comply with educational fair use standards and digital intellectual property regulations:

1. **TMDB API & Attribution Compliance**:
   - Movie metadata and approved poster artwork are retrieved strictly via server-side route handlers (`src/app/api/tmdb/route.ts`).
   - **No API keys are ever leaked to client-side bundles.**
   - TMDB attribution is displayed prominently on the global footer and in the Admin Settings panel:
     > *"This product uses the TMDB API but is not endorsed or certified by TMDB."*
2. **Zero Scraped Copyrighted Footage**:
   - **No film frames, video clips, subtitle tracks, or full scripts are scraped or reproduced.**
   - All scene contexts are original, instructor-crafted descriptions that identify the strategic conflict and timestamp references.
   - Unverified timestamps are explicitly labeled `"Instructor reference needed"`.
3. **Authorized Audio Cues**:
   - Short audio transitions or cues are optional and support documented rights attribution.
   - If audio media is unavailable or pending licensing, the LMS renders an editorial text fallback (e.g. *Sound cue: "Instructor to add licensed audio"*).
   - **Autoplay is strictly disabled.** Playback controls, transcripts, and mute toggles are provided.

---

## 📚 Seed Content: 104 Real-World Case Studies

The LMS ships with **104 distinct, fully articulated MBA concept records** across 12 product management and business domains:

| Subject Domain | Seed Lessons | Notable Films Analyzed | Key Framework Applied |
| :--- | :---: | :--- | :--- |
| **Product Discovery & User Research** | 9 | *The Founder*, *Steve Jobs*, *Chef*, *Joy* | Jobs-to-be-Done (JTBD), Customer Persona Mapping |
| **Product Strategy & Roadmaps** | 9 | *Apollo 13*, *Moneyball*, *The Martian*, *Oppenheimer* | Now-Next-Later Roadmap, Opportunity Solution Trees |
| **Prioritization & Product Metrics** | 9 | *Ford v Ferrari*, *Margin Call*, *The Big Short* | RICE Scoring, North Star Metric Hierarchy |
| **Product Design & Innovation** | 8 | *Her*, *Ex Machina*, *Minority Report*, *Tron: Legacy* | Design Thinking, Mental Models & Affordances |
| **Growth & Go-to-Market** | 9 | *The Social Network*, *Air*, *BlackBerry*, *Tetris* | Pirate Metrics (AARRR), Network Effect Flywheel |
| **Marketing & Brand Equity** | 9 | *The Truman Show*, *Barbie*, *Catch Me If You Can* | Keller’s Brand Resonance Pyramid, Positioning Matrix |
| **Entrepreneurship & Business Models**| 9 | *Jerry Maguire*, *Wall Street*, *Glengarry Glen Ross* | Lean Canvas, Unit Economics & LTV/CAC |
| **Finance & Unit Economics** | 9 | *Margin Call*, *The Big Short*, *Too Big to Fail* | Contribution Margin & Sensitivity Modeling |
| **Operations & Supply Chain** | 8 | *Cast Away*, *The Terminal*, *Sully*, *Deepwater Horizon* | Theory of Constraints, Bottleneck Analysis, Root Cause |
| **Leadership & Org Behavior** | 9 | *12 Angry Men*, *Hidden Figures*, *Whiplash*, *Spotlight* | Tuckman Model, Psychological Safety, Situational Leadership |
| **Negotiation & Stakeholder Mgmt** | 8 | *Bridge of Spies*, *The Godfather*, *Lincoln*, *A Few Good Men* | BATNA, ZOPA, Principled Negotiation |
| **Ethics, Governance & Risk** | 8 | *Michael Clayton*, *Dark Waters*, *The Insider*, *Dopesick* | Stakeholder Salience Theory, Ethical Risk Matrix |

---

## 👥 Three Role-Aware Experiences

Switch between roles seamlessly via the top navigation role selector:

### 1. Student Experience (`Sarah Chen` — Stanford MBA Candidate)
- **Onboarding Flow**: 3-step modal capturing MBA program specialization, experience level, learning goals, and topic interests.
- **Personalized Dashboard**: Visual progress bars, metric counters (Started, Completed, Quiz Average, Total Study Hours), "Continue Learning" banner, and AI-curated recommendations.
- **Interactive Lesson View**:
  - Original scene context and background.
  - Plain-language concept breakdown.
  - Interactive MBA framework with copyable templates.
  - Discussion prompts for cohort prep.
  - Interactive knowledge check quiz with instant explanatory feedback.
  - Practical assignment submission form with full rubric preview.
  - Audio cue player with accessible text transcript.
  - Personal note-taking panel with auto-save.
- **Curated Learning Paths**: 8 structured sequences (e.g. *Product Executive Track*, *0-to-1 PM Foundation*, *Venture Creation*).
- **Privacy Controls**: Export learning records as JSON and submit data deletion requests.

### 2. Instructor Experience (`Prof. Julian Vance` — Chair of PM Practice)
- **Coursework Grading Queue**: Review student submissions with interactive point-based rubric evaluation and faculty feedback.
- **Lesson Management Studio**: Draft, edit, review, publish, and archive lessons with complete framework and quiz builders.
- **Cohort Manager**: Create student cohorts (e.g. *Fall 2026 PM Fellows*), track average completion rates, and assign lessons with due dates.

### 3. Administrator Experience (`Elena Rostova` — Academic Director)
- **TMDB API Connection & Testing Tool**: Verify TMDB credentials live with instant status diagnostics.
- **Attribution & Legal Compliance Controls**: Audit TMDB license notices and disclaimers.
- **Catalog Moderation**: Filter lessons by verification status (`Verified` vs. `Needs Review`) and toggle publishing visibility.
- **User & Role Governance**: View student/instructor rosters, manage permissions, and reset local demo data.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict typing across models and API routes)
- **Styling**: Tailwind CSS v4 with custom editorial typography (Serif headers, monospace badges, warm cream `#FDFBF7` surfaces, dark navy `#0A0F1D` canvas, and muted amber accents)
- **Icons**: Lucide React
- **Persistence**: Hybrid architecture — works instantly in local demo mode with `localStorage` hydration; structured for drop-in PostgreSQL/Prisma integration.
- **Accessibility**: Meets WCAG AA color contrast standards; all buttons, inputs, and modals support full keyboard navigation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or newer (Tested on Node.js 26.x LTS)
- npm or yarn

### Installation

1. **Clone or navigate to the repository directory**:
   ```bash
   cd the-business-cut
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables (Optional)**:
   ```bash
   cp .env.example .env.local
   ```
   *Note: The LMS works 100% out of the box without any API keys. If `TMDB_API_KEY` is omitted, polished editorial poster placeholders are automatically generated.*

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run production build verification**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

*The Business Cut* is engineered for zero-config deployment on Vercel:

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. In **Environment Variables**, optionally add:
   - `TMDB_API_KEY`: Your TMDB API v3 key.
   - `NEXT_PUBLIC_APP_NAME`: `The Business Cut`
4. Click **Deploy**. Vercel will build the App Router pages and serverless API handlers automatically.

---

## 📝 Production Readiness Roadmap

To transition this prototype into enterprise campus deployment:
1. **Database Integration**: Swap client-side `LmsContext` storage with a Prisma/Drizzle schema on PostgreSQL (Supabase or Neon).
2. **SSO / Enterprise Auth**: Connect NextAuth.js or Clerk with university SAML / Okta SSO.
3. **LTI 1.3 Standard**: Implement IMS Global LTI 1.3 to integrate directly with Canvas, Blackboard, or Brightspace LMS gradebooks.

---

## ⚖️ License & Attribution

- **Application Code**: Licensed under the MIT License.
- **Pedagogical Content**: Original scene descriptions, concept frameworks, and assignment rubrics are licensed for academic instruction.
- **TMDB Attribution**: Movie metadata and posters are supplied courtesy of The Movie Database (TMDB). This product uses the TMDB API but is not endorsed or certified by TMDB.
