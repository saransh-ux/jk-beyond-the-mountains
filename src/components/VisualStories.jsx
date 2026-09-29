import React from 'react';
import { motion } from 'framer-motion';
import { regionStories } from '../data/content';

export function VisualStories({ onSelectRegion }) {
  return (
    <section id="visual-stories" className="py-24 md:py-40 bg-stone-beige text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-24">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Visual Storytelling
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-charcoal tracking-tight">
            Different Landscapes. Shared Roots.
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-muted font-sans font-light leading-relaxed">
            Two regions tied together by history, rivers, mountain passes, and a shared cultural soul.
          </p>
        </div>

        {/* Equal Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* JAMMU */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-paper p-8 sm:p-14 border border-stone-border shadow-md space-y-8"
          >
            <div className="space-y-6">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-beige border border-stone-border">
                <img
                  src={regionStories.jammu.image}
                  alt="Jammu land of Dogra heritage"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-xs uppercase tracking-widest font-bold text-walnut">
                  Jammu Region
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
                  {regionStories.jammu.title}
                </h3>
                <div className="text-xs uppercase tracking-ultra text-walnut font-sans font-semibold">
                  {regionStories.jammu.subtitle}
                </div>
                <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
                  {regionStories.jammu.text}
                </p>
              </div>

              <div className="border-t border-stone-border/60 pt-4 space-y-3">
                <div className="text-xs uppercase tracking-widest font-bold text-charcoal-soft">Key Cultural Highlights:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-charcoal font-sans font-medium">
                  {regionStories.jammu.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-walnut" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectRegion('jammu')}
                className="w-full py-4 bg-walnut text-paper hover:bg-walnut-dark text-xs uppercase tracking-ultra font-bold transition-colors text-center"
              >
                Discover Jammu
              </button>
            </div>
          </motion.div>

          {/* KASHMIR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between bg-paper p-8 sm:p-14 border border-stone-border shadow-md space-y-8"
          >
            <div className="space-y-6">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-beige border border-stone-border">
                <img
                  src={regionStories.kashmir.image}
                  alt="Kashmir Valley and Dal Lake"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-xs uppercase tracking-widest font-bold text-earth-green">
                  Kashmir Region
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
                  {regionStories.kashmir.title}
                </h3>
                <div className="text-xs uppercase tracking-ultra text-earth-green font-sans font-semibold">
                  {regionStories.kashmir.subtitle}
                </div>
                <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
                  {regionStories.kashmir.text}
                </p>
              </div>

              <div className="border-t border-stone-border/60 pt-4 space-y-3">
                <div className="text-xs uppercase tracking-widest font-bold text-charcoal-soft">Key Cultural Highlights:</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-charcoal font-sans font-medium">
                  {regionStories.kashmir.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-earth-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectRegion('kashmir')}
                className="w-full py-4 bg-earth-green text-paper hover:bg-earth-green-dark text-xs uppercase tracking-ultra font-bold transition-colors text-center"
              >
                Discover Kashmir
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
