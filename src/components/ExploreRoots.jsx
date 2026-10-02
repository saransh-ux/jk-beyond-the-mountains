import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { exploreCategories } from '../data/content';

export function ExploreRoots({ onSelectCategory }) {
  return (
    <section id="explore" className="py-24 md:py-40 bg-paper text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-24 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Cultural Heritage
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-charcoal">
            Explore Our Roots
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-muted font-sans font-light leading-relaxed">
            Seven pillars preserving the identity, memories, and wisdom of Jammu &amp; Kashmir.
          </p>
        </div>

        {/* Large Editorial Split Layout Categories */}
        <div className="space-y-28 md:space-y-44">
          {exploreCategories.map((cat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={cat.id}
                id={cat.id === 'food' || cat.id === 'languages' ? `category-${cat.id}` : `explore-${cat.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-walnut/40">
                      {cat.number}
                    </span>
                    <span className="h-px flex-1 bg-stone-border" />
                  </div>

                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal tracking-tight">
                    {cat.title}
                  </h3>

                  <p className="font-serif text-2xl sm:text-3xl italic text-walnut leading-snug">
                    &ldquo;{cat.tagline}&rdquo;
                  </p>

                  <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectCategory(cat)}
                      className="inline-flex items-center gap-3 py-4 px-8 bg-stone-beige hover:bg-walnut hover:text-paper text-charcoal text-xs uppercase tracking-ultra font-bold border border-stone-border transition-all duration-300 group shadow-xs"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Large Editorial Photograph */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div 
                    onClick={() => onSelectCategory(cat)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] bg-stone-beige overflow-hidden group cursor-pointer border border-stone-border shadow-lg"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs font-sans uppercase tracking-widest font-semibold">
                      <span>{cat.title} Archive</span>
                      <span className="opacity-90">View Story &rarr;</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
