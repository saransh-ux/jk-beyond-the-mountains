import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, MapPin, Compass, Utensils, Music, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaAssets } from '../data/media';

export function RegionShowcaseModal({ isOpen, onClose, regionKey }) {
  const [activeTab, setActiveTab] = useState('gallery');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !regionKey) return null;

  const isJammu = regionKey === 'jammu';

  const data = isJammu ? {
    name: "JAMMU",
    tagline: "Land of Heritage, Faith, and River Rhythms",
    accentColor: "text-walnut",
    bgAccent: "bg-walnut",
    quote: "Jammu is not just a gateway to the hills—it is a reservoir of Dogra history, ancient fortresses, river songs, and warm hospitality.",
    heroImage: mediaAssets.jammuMain,
    gallery: [
      { url: mediaAssets.jammuMain, caption: "Bahu Fort overlooking the Tawi River" },
      { url: mediaAssets.jammuSecondary, caption: "Dogra architecture & heritage archways" },
      { url: mediaAssets.baweWaliMata, caption: "Historic Bawe Wali Mata shrine grounds" },
      { url: mediaAssets.foodDishes.kaladi, caption: "Traditional pan-fried Ramnagar Kaladi cheese" }
    ],
    pillars: [
      {
        icon: MapPin,
        title: "Landscapes & Fortresses",
        desc: "From the majestic Bahu Fort and Mubarak Mandi palace complex in Jammu city to the tranquil waters of Mansar Lake and pine ridges of Patnitop."
      },
      {
        icon: Compass,
        title: "Dogra Heritage & Arts",
        desc: "Renowned for Basohli Pahari miniature paintings, traditional metalcraft, and stone architecture preserving centuries of royal and folk memory."
      },
      {
        icon: Music,
        title: "Pastoral Music & Folk Bhaakh",
        desc: "Unaccompanied choral folk harmonies (Bhaakh) sung across high mountain pastures, alongside Karakans folk ballads and lively Kud dances."
      },
      {
        icon: Utensils,
        title: "Dogra Culinary Memory",
        desc: "Famous for Ramnagar Kaladi cheese, Dogri Ambal (sweet-sour pumpkin), Bhaderwah Rajma-Chawal, and festive Dogra Dham served on leaf platters."
      }
    ]
  } : {
    name: "KASHMIR",
    tagline: "A Living Culture Beyond the Horizon",
    accentColor: "text-earth-green",
    bgAccent: "bg-earth-green",
    quote: "Kashmir is more than the beauty captured in photographs. It is a living culture of artisans, river houseboats, Sufi lyrics, and copper samovars.",
    heroImage: mediaAssets.kashmirMain,
    gallery: [
      { url: mediaAssets.kashmirMain, caption: "Morning Shikara glide on Dal Lake" },
      { url: mediaAssets.kashmirSecondary, caption: "Pine valleys & snow mountain passes" },
      { url: mediaAssets.kaniShawls, caption: "Master hands weaving intricate Kani Shawls" },
      { url: mediaAssets.foodDishes.kahwa, caption: "Saffron & cardamom Kahwa in copper Samovar" }
    ],
    pillars: [
      {
        icon: MapPin,
        title: "Lakes & Water Heritage",
        desc: "The historic water highways of Dal Lake, Nigeen Lake, and Jhelum canals with traditional wooden houseboats and morning floating markets."
      },
      {
        icon: Compass,
        title: "Master Crafts & Architecture",
        desc: "World-renowned Kani shawl weaving, fine Papier-Mâché, hand-carved Walnut wood, and intricate Khatamband wooden ceilings in Old Srinagar."
      },
      {
        icon: Music,
        title: "Sufiyana Kalam & Satire",
        desc: "Classical Sufiyana Kalam music set to the Santoor, joyful Rouf folk dances during celebrations, and Ladishah satirical storytelling."
      },
      {
        icon: Utensils,
        title: "The Royal Wazwan & Tea",
        desc: "The legendary 36-course Wazwan feast served on copper Trami platters, winter Harisa, and daily gatherings around warm pink Nun Chai & Kahwa."
      }
    ]
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/85 backdrop-blur-xs overflow-y-auto"
        data-lenis-prevent
      >
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative z-10 w-full max-w-5xl bg-paper border border-stone-border shadow-2xl overflow-hidden text-charcoal my-auto flex flex-col max-h-[88vh]"
          data-lenis-prevent
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 bg-paper/95 backdrop-blur-md rounded-full text-charcoal hover:bg-paper transition-colors border border-stone-border shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Sleeker Compact Hero Banner */}
          <div className="relative shrink-0 h-56 sm:h-64 md:h-72 bg-stone-beige overflow-hidden border-b border-stone-border">
            <img
              src={data.heroImage}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
              <div>
                <span className={`inline-block text-[10px] font-sans uppercase tracking-ultra font-bold px-2.5 py-0.5 bg-paper/95 text-charcoal shadow-xs mb-1`}>
                  Regional Showcase
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-none">
                  {data.name}
                </h2>
              </div>
              <p className="hidden sm:block font-serif text-sm sm:text-base italic text-stone-beige font-light max-w-xs text-right">
                {data.tagline}
              </p>
            </div>
          </div>

          {/* Scrollable Body Section */}
          <div 
            className="p-6 sm:p-12 space-y-10 overflow-y-auto flex-1 font-sans"
            data-lenis-prevent
          >
            {/* Quote banner */}
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-walnut leading-relaxed border-l-4 border-walnut pl-6">
              &ldquo;{data.quote}&rdquo;
            </blockquote>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-4 border-b border-stone-border pb-4">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === 'gallery'
                    ? `${data.bgAccent} text-paper`
                    : 'bg-stone-beige text-charcoal hover:bg-stone-border'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Visual Photo Gallery</span>
              </button>

              <button
                onClick={() => setActiveTab('pillars')}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === 'pillars'
                    ? `${data.bgAccent} text-paper`
                    : 'bg-stone-beige text-charcoal hover:bg-stone-border'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Cultural Pillars</span>
              </button>
            </div>

            {/* Tab 1: Visual Photo Gallery Grid */}
            {activeTab === 'gallery' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.gallery.map((item, idx) => (
                    <div key={idx} className="group relative aspect-[16/10] bg-stone-beige overflow-hidden border border-stone-border shadow-xs">
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-sans font-light">
                        <span className="font-semibold block text-sm font-serif">{item.caption}</span>
                        <span className="text-[10px] uppercase tracking-widest text-stone-beige/80">{data.name} Visual Archive</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Cultural Pillars Breakdown */}
            {activeTab === 'pillars' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="bg-stone-beige p-6 border border-stone-border space-y-3 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-paper text-walnut flex items-center justify-center border border-stone-border">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-sans text-charcoal-muted font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Footer note */}
            <div className="pt-6 border-t border-stone-border flex items-center justify-between text-xs text-charcoal-soft font-serif italic">
              <span>{data.name} Regional Cultural Index</span>
              <button
                onClick={onClose}
                className="not-italic font-sans text-xs uppercase tracking-widest font-semibold px-6 py-3 bg-walnut text-paper hover:bg-walnut-dark transition-colors"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
