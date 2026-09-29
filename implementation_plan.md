# Implementation Plan - J&K — Beyond the Mountains

Build a premium, modern, editorial-style cultural archive website titled **J&K — Beyond the Mountains** (*One Land. Many Stories.*). The platform celebrates and preserves the identity, heritage, traditions, languages, food, people, and memories of Jammu & Kashmir.

## User Review Required

> [!IMPORTANT]
> **Design Philosophy & Visual Tone**: The application strictly adheres to an editorial, magazine-like aesthetic with warm earthy tones, elegant serif typography, generous white space, and calm, subtle micro-interactions. Avoid loud colors, neon effects, or SaaS-like card grids.

> [!NOTE]
> All content (history, community stories, food memories, language dictionary, sacred heritage) is structured modularly in `src/data/` for future CMS/backend integration.

## Proposed Components & Architecture

The application will be built using **React (Vite)**, **Tailwind CSS**, **Framer Motion**, **Lucide React**, and **Lenis** for smooth scrolling.

### 1. Structure & Data Layer
- **`src/data/media.js`**: Centralized registry for all image and video asset URLs (high-resolution photography of Dal Lake, Bahu Fort, Vaishno Devi, Tawi, artisans, Dogra heritage, Kashmiri crafts, traditional food).
- **`src/data/content.js`**: Structured datasets for:
  - Timeline entries (Dogra Era: Maharaja Gulab Singh to 1947)
  - Categories (Culture, Traditions, People, Food, Languages, Stories, Places)
  - Jammu & Kashmir dual showcase data
  - Sacred J&K heritage (Bawe Wali Mata, Shri Mata Vaishno Devi, Future inclusive sites)
  - People profiles (The Artisan, The Farmer, The Musician, etc.)
  - Languages dictionary (Dogri, Kashmiri, Gojri, Pahari words with phonetic guides and meanings)
  - Food & Memory (Traditional dishes, cultural significance, origin)
  - Documentary video gallery
  - Before It Is Forgotten archive items

### 2. Design System & Typography
- **Colors**:
  - Background: Warm Ivory (`#FBF9F5` / `#FAF7F2`)
  - Secondary BG: Soft Stone (`#F2EFE9` / `#EFECE6`)
  - Primary Text: Deep Charcoal (`#1A1A18`)
  - Accent Muted Brown: Walnut (`#4A3B32`)
  - Accent Deep Earthy Green: Pine/Chinar Earth (`#2E3A2F`)
- **Fonts**:
  - Headings: *Cormorant Garamond* / *Playfair Display* (Google Fonts)
  - Body: *Plus Jakarta Sans* / *Inter*
- **Scroll Behavior**: Lenis Smooth Scroll initialized globally.

### 3. Core UI Components & Pages
- **`Navbar.jsx`**: Minimal sticky header with logo ("J&K - Beyond the Mountains"), navigation links, search trigger, and responsive mobile drawer.
- **`HeroSection.jsx`**: Cinematic full-screen hero with subtle dark vignette overlay, centered editorial typography, CTA button, and scroll indicator.
- **`IntroSection.jsx`**: "Beyond the Landscape" editorial introduction with split authentic image block.
- **`HistoryTimeline.jsx`**: "A Land Through Time" vertical historical timeline (1846–1947 Dogra rulers to people's transition) with archive portraits.
- **`TransitionBanner.jsx`**: Dramatic typographic transition into culture ("BEYOND THE MOUNTAINS").
- **`ExploreRoots.jsx`**: Editorial split-layout category cards (01 to 07) with large numbers, stories, and images.
- **`VisualStories.jsx`**: "Different Landscapes. Shared Roots." equal dual feature for Jammu and Kashmir with detail drawers.
- **`SacredHeritage.jsx`**: "Sacred J&K" featuring Bawe Wali Mata and Shri Mata Vaishno Devi editorial features with future inclusive site placeholders.
- **`OurPeople.jsx`**: Documentary-style profile stories of artisans, farmers, musicians, elders, and youth.
- **`BeforeForgotten.jsx`**: "Before It Is Forgotten" preservation section with interactive "Preserve a Memory" modal trigger.
- **`LanguagesSection.jsx`**: "Words We Should Never Lose" interactive regional dictionary player (Dogri, Kashmiri, Gojri, Pahari).
- **`FoodMemory.jsx`**: "The Taste of Home" cultural dish stories.
- **`VideoGallery.jsx`**: "J&K Through Our Eyes" documentary gallery with video lightbox player modal.
- **`CommunitySection.jsx`**: "This Story Belongs To Everyone" community contribution section.
- **`ClosingSection.jsx`**: Centered powerful quote ("You came looking for a place. You discovered a people.").
- **`Footer.jsx`**: Minimal elegant footer.
- **Modals**:
  - `ContributionModal.jsx`: 5-type contribution form (Story, Photo, Tradition, Recipe, Memory) with form handling.
  - `DetailModal.jsx`: Reader view for stories, profiles, and sacred sites.
  - `SearchModal.jsx`: Global search across all archive content.

## Verification Plan

### Automated & Build Verification
- Initialize project with Vite + React.
- Install dependencies (`tailwindcss`, `framer-motion`, `lucide-react`, `@studio-freight/lenis` or `@lenis/react`).
- Run `npm run build` to ensure error-free compilation and TypeScript/JSX syntax check.

### Manual Verification
- Test smooth scrolling with Lenis.
- Verify responsive layout across Desktop (1440px), Tablet (768px), and Mobile (375px).
- Verify interactive elements: Navbar search, category exploration, detail modals, audio player simulation in dictionary, video lightbox player, and contribution form modal.
