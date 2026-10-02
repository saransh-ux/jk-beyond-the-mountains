# J&K — Beyond the Mountains
### *One Land. Many Stories.*

🌐 **Live Website**: [Visit J&K — Beyond the Mountains](https://jk-beyond-the-mountains.netlify.app/)

A premier digital cultural archive and editorial platform dedicated to documenting, celebrating, and preserving the multifaceted heritage, oral histories, languages, culinary memories, sacred traditions, and everyday lives of **Jammu & Kashmir**.

---

## 🏛️ Project Overview

**J&K — Beyond the Mountains** moves past cliché postcard tropes to present an authentic, dignified, and deeply human portrait of Jammu and Kashmir. Built as a non-commercial digital cultural archive, the project bridges generational memory and historical stewardship, offering an immersive literary and visual journey across both provinces.

The archive provides a balanced representation of the distinct traditions, living voices, sacred sanctuaries, culinary practices, and landscapes that shape the region's enduring identity.

> *"You came looking for a place. You discovered a people."*

---

## 👤 Curator & Archival Stewardship

- **Conceived, Curated & Engineered by**: **Saransh Mahajan**
- **Vision**: To construct a living digital repository celebrating the distinct cultural identities, shared heritage, and timeless resilience of the communities of Jammu & Kashmir.

---

## ✨ Key Features & Architecture

### 1. 🌄 Cinematic Editorial Entry
- Atmospheric hero experience with high-resolution imagery, subtle vignette overlays, and an editorial manifesto setting the archive's tone.
- Lenis smooth inertia scrolling creates a seamless, fluid reading experience.

### 2. 📜 A Land Through Time (Historical Timeline)
- Chronological historical narrative spanning the Dogra Era (from Maharaja Gulab Singh in 1846 through Maharaja Hari Singh) and the constitutional evolution of the region.
- Curated archival photography and historical context notes.

### 3. 🖼️ Horizontal Cultural Photo Journey
- Smooth side-scrolling photo journey capturing authentic everyday vignettes, sacred architecture, master artisans, and dramatic mountain landscapes.

### 4. 🧭 Explore Our Roots (Seven Cultural Categories)
- An editorial index diving into seven core facets of regional identity:
  1. **Craft & Weave**: Pashmina, Kani shawls, Walnut wood carvings, Basohli miniature paintings.
  2. **Architecture & Sanctuaries**: Deodar wood shrines, Dogra stepwells, Khatamband ceilings, and stone temples.
  3. **Culinary Heritage**: Wazwan feasts, Dogra Dham banquets, Kaladi mountain cheese, and Noon Chai.
  4. **Sacred Landscapes**: Revered pilgrimage circuits, ancient Sufi shrines, and sacred peaks.
  5. **Living Languages**: Dogri, Kashmiri, Gojri, and Pahari dialects.
  6. **Seasons & Rhythms**: Harud autumns, Chilai Kalan freezes, and spring almond blossoms.
  7. **Folk Music & Oral Lore**: Sufiana Kalam, Dogri Bhakh, Geetru ballads, and shepherd songs.

### 5. 🏔️ Jammu & Kashmir Visual Stories (Dual Showcase)
- A balanced, comparative deep-dive honoring the distinctive geographic, historic, and cultural nuances of both **Jammu** and **Kashmir**.
- Interactive **Region Showcase Modals** featuring multi-tab photo essays and cultural breakdowns.

### 6. 🛕 Sacred J&K
- Architectural and spiritual essays highlighting venerated sites such as Bawe Wali Mata (Bahu Fort), Shri Mata Vaishno Devi, Hazratbal Shrine, and Shankaracharya Temple.

### 7. 👥 Our People (Documentary Profiles)
- Intimate, human-first portraits honoring master artisans, saffron growers, bakers, copper-smiths, folk musicians, and community elders.

### 8. 🗣️ Words We Should Never Lose (Linguistic Archive)
- Interactive regional dictionary celebrating native expressions in **Dogri, Kashmiri, Gojri, and Pahari**.
- Displays original native scripts (Takri/Devanagari/Nastaliq), phonetic guides, contextual meanings, and everyday idioms with interactive browser pronunciation.

### 9. 🍲 Food & Memory
- Sensory culinary retrospectives exploring recipes, seasonal ingredients, and nostalgic family memories rooted in regional gastronomy.

### 10. 🔍 Global Search & Interactive Reader
- Fast client-side search across timeline events, language idioms, food items, profiles, and cultural categories.
- Reader modal with typography tuned for long-form comfort.

---

## 🎨 Design Philosophy & Aesthetics

The design is modeled after high-end editorial publications and archival institutions:

- **Typography**:
  - Headings & Editorial Accents: *Cormorant Garamond* (Google Fonts)
  - Interface & Body Text: *Plus Jakarta Sans* (Google Fonts)
- **Palette**:
  - **Ivory & Paper**: Warm organic background (`#FBF9F5` / `#FAF7F2`)
  - **Soft Stone**: Subtle card contrasts (`#F2EFE9` / `#EFECE6`)
  - **Charcoal**: Deep, legible typography (`#1A1A18`)
  - **Walnut Earth**: Heritage brown accents (`#4A3B32`)
  - **Pine & Chinar**: Deep botanical undertones (`#2E3A2F`)
- **Interactions**:
  - Micro-animations crafted with **Framer Motion**.
  - Smooth page inertia driven by **Lenis**.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + CSS Variables |
| **Motion & Transitions** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis) |
| **Iconography** | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

To run the project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/saransh-ux/jk-beyond-the-mountains.git

# 2. Navigate to the project directory
cd jk-beyond-the-mountains

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the local URL displayed in your terminal (typically `http://localhost:3000`) in your browser to view the archive.

---

## 📁 Project Directory Structure

```plaintext
jk-beyond-the-mountains/
├── docs/                   # Documentation & media guides
│   └── media-replacement-guide.md
├── public/                 # Static public assets
│   ├── favicon.svg         # Brand SVG favicon
│   └── images/             # Archival photography & documentary stills
├── src/
│   ├── components/         # Modular UI & section components
│   │   ├── Navbar.jsx               # Sticky editorial header & search trigger
│   │   ├── HeroSection.jsx          # Cinematic opening hero
│   │   ├── IntroSection.jsx         # "Beyond the Landscape" essay & metrics
│   │   ├── HistoryTimeline.jsx      # Interactive vertical history timeline
│   │   ├── TransitionBanner.jsx     # Typographic section interludes
│   │   ├── HorizontalPhotoJourney.jsx # Pinned horizontal photo journey
│   │   ├── ExploreRoots.jsx         # Seven core cultural categories
│   │   ├── VisualStories.jsx        # Dual Jammu & Kashmir spotlights
│   │   ├── SacredHeritage.jsx       # Sacred sanctuaries & pilgrimage sites
│   │   ├── OurPeople.jsx            # Documentary profiles & cultural custodians
│   │   ├── LanguagesSection.jsx     # Words We Should Never Lose dictionary
│   │   ├── FoodMemory.jsx           # Traditional culinary heritage
│   │   ├── ClosingSection.jsx       # Editorial closing reflection
│   │   ├── Footer.jsx               # Archival stewardship & credits
│   │   ├── DetailModal.jsx          # Full-screen article & story reader view
│   │   ├── RegionShowcaseModal.jsx  # Interactive regional photo essay & pillars
│   │   └── SearchModal.jsx          # Global archive search modal
│   ├── data/
│   │   ├── content.js      # Structured datasets (timeline, words, food, people)
│   │   ├── gallery.js      # 9-frame editorial photo journey dataset
│   │   └── media.js        # High-resolution media & asset registry
│   ├── hooks/
│   │   └── useLenis.js     # Lenis smooth inertia scrolling hook
│   ├── App.jsx             # Main layout orchestrator & modal state
│   ├── index.css           # Global typography, color tokens, and base CSS
│   └── main.jsx            # React 18 root mount
├── index.html              # HTML entry point with Google Fonts preload
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Custom theme color tokens and font families
└── vite.config.js          # Vite build configuration
```

---

## 🔮 Future Roadmap

- [ ] **Audio Pronunciations**: Integrate native speaker voice recordings for each word in the *Words We Should Never Lose* dictionary.
- [ ] **Interactive GIS Map**: Clickable cartographic map marking historical monuments, craft clusters, and shrines.
- [ ] **Bilingual Toggle**: Multi-lingual interface support (English, Hindi, and Urdu).

---

## 📜 Legal & Cultural Disclaimer

This platform is a personal, non-commercial digital archive created for educational, cultural preservation, and storytelling purposes. All cultural lore, community histories, and culinary accounts are documented with deep reverence for the diverse communities of Jammu & Kashmir.

**Curated with respect for our land and its people.**  
*© 2026 J&K — Beyond the Mountains. Curated by Saransh Mahajan.*
