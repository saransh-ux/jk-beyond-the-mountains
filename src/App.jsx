import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { TransitionBanner } from './components/TransitionBanner';
import { HorizontalPhotoJourney } from './components/HorizontalPhotoJourney';
import { ExploreRoots } from './components/ExploreRoots';
import { VisualStories } from './components/VisualStories';
import { SacredHeritage } from './components/SacredHeritage';
import { OurPeople } from './components/OurPeople';
import { LanguagesSection } from './components/LanguagesSection';
import { FoodMemory } from './components/FoodMemory';
import { CommunitySection } from './components/CommunitySection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';

// Modals
import { SearchModal } from './components/SearchModal';
import { ContributionModal } from './components/ContributionModal';
import { DetailModal } from './components/DetailModal';
import { RegionShowcaseModal } from './components/RegionShowcaseModal';

// Data
import { regionStories } from './data/content';

export function App() {
  // Initialize smooth scrolling
  useLenis();

  // Modal States
  const [searchOpen, setSearchOpen] = useState(false);
  const [contributionOpen, setContributionOpen] = useState(false);
  const [contributionType, setContributionType] = useState('story');
  
  const [detailModalData, setDetailModalData] = useState(null);
  const [regionShowcaseKey, setRegionShowcaseKey] = useState(null);

  // Handlers
  const handleOpenContribution = (type = 'story') => {
    setContributionType(type);
    setContributionOpen(true);
  };

  const handleSelectCategory = (cat) => {
    setDetailModalData({
      title: cat.title,
      subtitle: cat.tagline,
      content: cat.description + " " + cat.details,
      image: cat.image,
      category: `Category ${cat.number}`
    });
  };

  const handleSelectRegion = (regionKey) => {
    setRegionShowcaseKey(regionKey);
  };

  const handleSelectPerson = (person) => {
    setDetailModalData({
      title: person.name,
      subtitle: `${person.location} • ${person.craft}`,
      content: person.story,
      image: person.image,
      category: person.category
    });
  };

  const handleSelectFood = (food, img) => {
    setDetailModalData({
      title: food.name,
      subtitle: `Origin: ${food.origin} (${food.season})`,
      content: `${food.description} ${food.memoryQuote}`,
      image: img,
      category: 'Food Memory'
    });
  };

  return (
    <div className="min-h-screen bg-paper text-charcoal flex flex-col font-sans selection:bg-walnut selection:text-paper">
      {/* Sticky Editorial Navigation */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Continuous Editorial Publication Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Editorial Introduction */}
        <IntroSection />

        {/* 3. Historical Timeline */}
        <HistoryTimeline />

        {/* 4. Typographic Transition */}
        <TransitionBanner />

        {/* 4.5. Horizontal Cultural Photo Journey */}
        <HorizontalPhotoJourney />

        {/* 5. Explore Our Roots (01 - 07 Categories) */}
        <ExploreRoots onSelectCategory={handleSelectCategory} />

        {/* 6. Jammu & Kashmir Visual Stories */}
        <VisualStories onSelectRegion={handleSelectRegion} />

        {/* 7. Sacred J&K */}
        <SacredHeritage onOpenDetail={(data) => setDetailModalData(data)} />

        {/* 8. Human-Centered Profiles */}
        <OurPeople onOpenProfile={handleSelectPerson} />

        {/* 10. Words We Should Never Lose (Dictionary) */}
        <LanguagesSection
          onOpenDictionaryModal={() => handleSelectCategory({
            title: "Words We Should Never Lose",
            tagline: "Preserving Dogri, Kashmiri, Gojri, and Pahari expressions",
            description: "Language is the vessel of memory. Our dictionary captures phonetic pronunciations, script origins, and everyday idioms from home kitchens to mountain pastures.",
            details: "Contributions are welcomed from native speakers across regions.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
          })}
        />

        {/* 11. Food & Memory */}
        <FoodMemory onOpenFoodModal={handleSelectFood} />

        {/* 12. Powerful Closing */}
        <ClosingSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(data) => {
          if (data.ruler) {
            setDetailModalData({
              title: `${data.ruler} (${data.year})`,
              subtitle: data.title,
              content: data.description,
              image: data.image,
              category: 'History Archive'
            });
          } else if (data.word) {
            setDetailModalData({
              title: data.word,
              subtitle: `${data.language} (${data.script})`,
              content: `${data.meaning} Example context: "${data.sampleSentence}"`,
              category: 'Linguistic Archive'
            });
          } else if (data.season && data.name) {
            setDetailModalData({
              title: data.name,
              subtitle: `Origin: ${data.origin} (${data.season})`,
              content: `${data.description} "${data.memoryQuote}"`,
              image: data.image,
              category: 'Food Memory'
            });
          } else {
            handleSelectCategory(data);
          }
        }}
      />

      <ContributionModal
        isOpen={contributionOpen}
        onClose={() => setContributionOpen(false)}
        initialType={contributionType}
      />

      <DetailModal
        isOpen={!!detailModalData}
        onClose={() => setDetailModalData(null)}
        data={detailModalData}
      />

      <RegionShowcaseModal
        isOpen={!!regionShowcaseKey}
        onClose={() => setRegionShowcaseKey(null)}
        regionKey={regionShowcaseKey}
      />
    </div>
  );
}
