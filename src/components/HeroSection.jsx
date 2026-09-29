import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';

export function HeroSection() {
  const handleScrollExplore = () => {
    const target = document.querySelector('#intro');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Media with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mediaAssets.heroBg}
          alt="Jammu and Kashmir Landscape"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
          loading="eager"
        />
        {/* Subtle vignette/dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-block"
        >
          <span className="text-xs md:text-sm tracking-ultra uppercase text-paper/90 font-sans font-medium px-4 py-1.5 border border-white/25 rounded-full backdrop-blur-xs">
            Cultural Digital Archive
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white drop-shadow-sm"
        >
          J&amp;K
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-3xl sm:text-4xl md:text-6xl font-light italic tracking-wide text-stone-beige"
        >
          Beyond the Mountains
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-base sm:text-lg md:text-xl font-light text-paper/90 max-w-2xl mx-auto tracking-wide"
        >
          A journey through the land, its people and its memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6"
        >
          <button
            onClick={handleScrollExplore}
            className="inline-flex items-center gap-3 px-8 py-4 bg-paper/95 text-charcoal hover:bg-paper font-sans text-xs uppercase tracking-ultra font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Our Story</span>
          </button>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors"
        onClick={handleScrollExplore}
      >
        <span className="text-[10px] uppercase tracking-ultra font-sans">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
