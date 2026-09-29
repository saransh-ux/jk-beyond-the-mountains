import React from 'react';
import { motion } from 'framer-motion';
import { beforeForgottenItems } from '../data/content';

export function BeforeForgotten() {
  return (
    <section className="py-28 md:py-44 bg-walnut text-paper relative overflow-hidden">
      {/* Background soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_0.5px,transparent_0.5px)] opacity-10 [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-ultra text-stone-beige/80 font-sans font-semibold"
          >
            Cultural Heritage Preservation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-paper"
          >
            Before It Is Forgotten
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-beige/95 italic leading-relaxed space-y-2"
          >
            <p>&ldquo;Some traditions survive in everyday life.</p>
            <p className="not-italic text-paper font-semibold">Others survive only in memory.&rdquo;</p>
          </motion.div>

          <p className="text-base sm:text-xl text-stone-beige/80 font-sans font-light max-w-2xl mx-auto pt-4 leading-relaxed">
            Dedicated to protecting the oral histories, idioms, recipes, and photographs that define the soul of Jammu &amp; Kashmir.
          </p>
        </div>

        {/* 6-Grid Preservation Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeForgottenItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-paper/5 border border-stone-beige/20 p-8 hover:border-stone-beige/50 transition-colors space-y-3 backdrop-blur-xs"
            >
              <div className="text-xs font-sans uppercase tracking-ultra text-stone-beige/60 font-semibold">
                Preservation Archive 0{idx + 1}
              </div>
              <h3 className="font-serif text-2xl font-bold text-paper">
                {item.title}
              </h3>
              <p className="text-sm font-sans text-stone-beige/80 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-stone-beige/20">
          <div className="text-sm font-serif italic text-stone-beige/80">
            A digital sanctuary dedicated to the people and heritage of Jammu &amp; Kashmir.
          </div>
        </div>

      </div>
    </section>
  );
}
