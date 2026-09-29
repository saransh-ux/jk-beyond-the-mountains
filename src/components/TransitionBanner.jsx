import React from 'react';
import { motion } from 'framer-motion';

export function TransitionBanner() {
  return (
    <section className="py-28 md:py-40 bg-charcoal text-paper relative overflow-hidden">
      {/* Subtle textured background feel */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-ultra text-stone-beige/70 font-sans font-semibold">
            Cultural Transition
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-paper">
            BEYOND THE MOUNTAINS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4 font-serif text-lg sm:text-xl md:text-2xl font-light text-stone-beige/90 leading-relaxed italic"
        >
          <p>Beyond the peaks and valleys lies another J&amp;K.</p>
          <p className="text-paper not-italic font-medium">A J&amp;K shaped by countless voices.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-sans not-italic text-stone-beige/80 pt-4">
            <div className="border-l-2 border-walnut pl-4 text-left">
              By traditions passed through generations.
            </div>
            <div className="border-l-2 border-walnut pl-4 text-left">
              By food cooked in family kitchens.
            </div>
            <div className="border-l-2 border-walnut pl-4 text-left">
              By languages spoken in homes.
            </div>
            <div className="border-l-2 border-walnut pl-4 text-left">
              By artisans working with their hands.
            </div>
          </div>
          <p className="pt-4 text-paper text-xl font-serif">
            By stories that survive in memory.
          </p>
        </motion.div>

        <div className="w-16 h-px bg-walnut mx-auto pt-6" />
      </div>
    </section>
  );
}
