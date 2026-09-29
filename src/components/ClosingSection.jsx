import React from 'react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';

export function ClosingSection() {
  return (
    <section className="relative py-36 md:py-48 bg-charcoal text-paper overflow-hidden flex items-center justify-center text-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={mediaAssets.heroPoster}
          alt="Jammu & Kashmir tranquil horizon"
          className="w-full h-full object-cover object-center grayscale opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-3 font-serif text-2xl sm:text-4xl md:text-5xl font-light italic text-stone-beige/90 leading-tight"
        >
          <p>&ldquo;You came looking for a place.</p>
          <p className="text-paper not-italic font-normal">You discovered a people.&rdquo;</p>
        </motion.div>

        <div className="w-16 h-px bg-walnut mx-auto" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-paper">
            J&amp;K — Beyond the Mountains
          </h2>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-ultra font-semibold text-stone-beige/80">
            One Land. Many Stories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
