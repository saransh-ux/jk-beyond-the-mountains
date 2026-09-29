import React from 'react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';

export function IntroSection() {
  return (
    <section id="intro" className="py-24 md:py-40 bg-paper text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
                Introduction
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-charcoal tracking-tight">
                Beyond the Landscape
              </h2>
            </div>

            <div className="space-y-6 text-lg sm:text-xl text-charcoal/90 font-sans leading-relaxed font-light">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-walnut leading-snug">
                Jammu &amp; Kashmir is often seen through its mountains, lakes and valleys.
              </p>

              <p className="text-xl sm:text-2xl font-serif text-charcoal font-medium">
                But beyond its landscapes lies something deeper:
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 py-2 font-serif text-xl sm:text-2xl text-charcoal font-semibold">
                <div>• Its people.</div>
                <div>• Its food.</div>
                <div>• Its languages.</div>
                <div>• Its music.</div>
                <div>• Its traditions.</div>
                <div>• Its memories.</div>
              </div>

              <p className="pt-2 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
                A digital space dedicated to preserving the living identity and stories of this land.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-8 border-t border-stone-border/60">
              <div>
                <span className="block font-serif text-3xl font-bold text-walnut">100%</span>
                <span className="text-xs uppercase tracking-widest text-charcoal-soft font-sans font-medium">Cultural Archive</span>
              </div>
              <div className="h-10 w-px bg-stone-border" />
              <div>
                <span className="block font-serif text-3xl font-bold text-earth-green">Non-Commercial</span>
                <span className="text-xs uppercase tracking-widest text-charcoal-soft font-sans font-medium">Identity &amp; Memory</span>
              </div>
            </div>
          </motion.div>

          {/* Authentic Photograph */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] overflow-hidden bg-stone-beige shadow-xl border border-stone-border">
              <img
                src={mediaAssets.introImage}
                alt="Living landscape of Jammu and Kashmir"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            </div>
            
            {/* Editorial Caption */}
            <div className="mt-4 text-sm text-charcoal-soft italic font-serif flex items-center justify-between">
              <span>Mist over valley forests &amp; traditional hamlets</span>
              <span className="not-italic uppercase tracking-widest font-sans text-xs text-walnut font-medium">Archive Ref: J&amp;K-2026</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
