import React from 'react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';
import { foodStories } from '../data/content';

export function FoodMemory({ onOpenFoodModal }) {
  return (
    <section id="explore-food" className="py-24 md:py-36 bg-stone-beige text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Culinary Memory
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
            The Taste of Home
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
            Food connected to memory, family kitchens, seasonal harvests, and hospitality.
          </p>
        </div>

        {/* Large Photography & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {foodStories.map((dish, idx) => {
            const img = dish.image || Object.values(mediaAssets.foodDishes)[idx % 4] || mediaAssets.categories.food;

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-paper border border-stone-border overflow-hidden flex flex-col justify-between group shadow-xs hover:border-walnut/60 transition-all"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[16/10] bg-stone-beige overflow-hidden">
                    <img
                      src={img}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-paper/95 px-3 py-1 text-xs font-sans uppercase tracking-widest text-walnut font-semibold">
                      {dish.origin}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-baseline justify-between border-b border-stone-border/60 pb-3">
                      <h3 className="font-serif text-3xl font-bold text-charcoal">
                        {dish.name}
                      </h3>
                      <span className="text-xs font-sans text-charcoal-soft uppercase tracking-wider">
                        {dish.season}
                      </span>
                    </div>

                    <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                      {dish.description}
                    </p>

                    <blockquote className="font-serif text-base italic text-walnut leading-relaxed border-l-2 border-walnut pl-4">
                      &ldquo;{dish.memoryQuote}&rdquo;
                    </blockquote>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    onClick={() => onOpenFoodModal(dish, img)}
                    className="w-full py-3 bg-stone-beige hover:bg-walnut hover:text-paper text-charcoal text-xs uppercase tracking-ultra font-semibold border border-stone-border transition-colors text-center"
                  >
                    Read Cultural Story
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenFoodModal(foodStories[0], foodStories[0].image || mediaAssets.categories.food)}
            className="px-8 py-4 bg-walnut text-paper hover:bg-walnut-dark font-sans text-xs uppercase tracking-ultra font-semibold transition-colors"
          >
            Explore Our Food Traditions
          </button>
        </div>

      </div>
    </section>
  );
}
