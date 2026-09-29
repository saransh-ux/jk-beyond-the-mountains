import React from 'react';
import { motion } from 'framer-motion';
import { sacredHeritage } from '../data/content';

export function SacredHeritage({ onOpenDetail }) {
  return (
    <section id="sacred" className="py-24 md:py-36 bg-paper text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Spiritual &amp; Cultural Roots
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
            Sacred J&amp;K
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
            Faith, heritage and places that have shaped generations across Jammu &amp; Kashmir.
          </p>
        </div>

        {/* Feature 1: Bawe Wali Mata */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 md:mb-28 bg-stone-beige border border-stone-border p-8 sm:p-12 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
              Featured Shrine &amp; Fort • Jammu
            </span>

            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal">
              {sacredHeritage.baweWaliMata.title}
            </h3>

            <blockquote className="font-serif text-xl sm:text-2xl italic text-walnut leading-snug border-l-2 border-walnut pl-4">
              &ldquo;{sacredHeritage.baweWaliMata.quote}&rdquo;
            </blockquote>

            <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed">
              {sacredHeritage.baweWaliMata.description}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenDetail({
                  title: sacredHeritage.baweWaliMata.title,
                  subtitle: sacredHeritage.baweWaliMata.subtitle,
                  content: sacredHeritage.baweWaliMata.description + " " + sacredHeritage.baweWaliMata.culturalSignificance,
                  image: sacredHeritage.baweWaliMata.image
                })}
                className="px-6 py-3 bg-walnut text-paper hover:bg-walnut-dark text-xs uppercase tracking-ultra font-semibold transition-colors"
              >
                Discover the Story
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-paper overflow-hidden border border-stone-border shadow-xs">
              <img
                src={sacredHeritage.baweWaliMata.image}
                alt="Bahu Fort and Bawe Wali Mata area"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-paper/90 px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-charcoal-soft">
                Bahu Fort &amp; Tawi Overlook
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Shri Mata Vaishno Devi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 md:mb-28 bg-charcoal text-paper p-8 sm:p-12 md:p-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-ultra text-stone-beige/70 font-semibold font-sans">
                Sacred Mountain Journey • Katra
              </span>

              <h3 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-paper">
                {sacredHeritage.vaishnoDevi.title}
              </h3>

              <h4 className="font-serif text-2xl sm:text-3xl italic text-stone-beige font-light">
                {sacredHeritage.vaishnoDevi.subtitle}
              </h4>

              <p className="text-base text-stone-beige/80 font-sans font-light leading-relaxed">
                {sacredHeritage.vaishnoDevi.description}
              </p>

              <blockquote className="font-serif text-lg italic text-stone-beige/90 border-l-2 border-stone-beige/40 pl-4">
                &ldquo;{sacredHeritage.vaishnoDevi.quote}&rdquo;
              </blockquote>

              <div className="pt-4">
                <button
                  onClick={() => onOpenDetail({
                    title: sacredHeritage.vaishnoDevi.title,
                    subtitle: sacredHeritage.vaishnoDevi.subtitle,
                    content: sacredHeritage.vaishnoDevi.description + " " + sacredHeritage.vaishnoDevi.culturalSignificance,
                    image: sacredHeritage.vaishnoDevi.image
                  })}
                  className="px-8 py-4 bg-paper text-charcoal hover:bg-stone-beige font-sans text-xs uppercase tracking-ultra font-semibold transition-colors"
                >
                  Explore the Journey
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] bg-stone-beige/10 overflow-hidden border border-white/15 shadow-lg group">
                <img
                  src={sacredHeritage.vaishnoDevi.image}
                  alt="Holy Cave Shrine of Shri Mata Vaishno Devi nestled in Trikuta Mountains"
                  className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-charcoal/85 backdrop-blur-xs border border-white/10 px-3 py-1 text-xs font-sans uppercase tracking-widest text-stone-beige">
                  Trikuta Mountains &amp; Holy Bhawan
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Shri Shankaracharya Temple */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 md:mb-28 bg-stone-beige border border-stone-border p-8 sm:p-12 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
              Ancient Hilltop Sanctuary • Srinagar
            </span>

            <h3 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal">
              {sacredHeritage.shankaracharyaTemple.title}
            </h3>

            <blockquote className="font-serif text-xl sm:text-2xl italic text-walnut leading-snug border-l-2 border-walnut pl-4">
              &ldquo;{sacredHeritage.shankaracharyaTemple.quote}&rdquo;
            </blockquote>

            <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed">
              {sacredHeritage.shankaracharyaTemple.description}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenDetail({
                  title: sacredHeritage.shankaracharyaTemple.title,
                  subtitle: sacredHeritage.shankaracharyaTemple.subtitle,
                  content: sacredHeritage.shankaracharyaTemple.description + " " + sacredHeritage.shankaracharyaTemple.culturalSignificance,
                  image: sacredHeritage.shankaracharyaTemple.image
                })}
                className="px-6 py-3 bg-walnut text-paper hover:bg-walnut-dark text-xs uppercase tracking-ultra font-semibold transition-colors"
              >
                Discover the Temple
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] bg-paper overflow-hidden border border-stone-border shadow-md group">
              <img
                src={sacredHeritage.shankaracharyaTemple.image}
                alt="Shri Shankaracharya Temple on Gopadri Hill, Srinagar"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-xs border border-stone-border/80 px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-charcoal-soft font-semibold">
                Gopadri Hill • Srinagar
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 4: Hazratbal Shrine */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-24 md:mb-36 bg-earth-green text-paper p-8 sm:p-12 md:p-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-ultra text-stone-beige/80 font-semibold font-sans">
                Sacred Lakefront Shrine • Srinagar
              </span>

              <h3 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-paper">
                {sacredHeritage.hazratbalShrine.title}
              </h3>

              <h4 className="font-serif text-2xl sm:text-3xl italic text-stone-beige font-light">
                {sacredHeritage.hazratbalShrine.subtitle}
              </h4>

              <p className="text-base text-stone-beige/90 font-sans font-light leading-relaxed">
                {sacredHeritage.hazratbalShrine.description}
              </p>

              <blockquote className="font-serif text-lg italic text-stone-beige border-l-2 border-stone-beige/40 pl-4">
                &ldquo;{sacredHeritage.hazratbalShrine.quote}&rdquo;
              </blockquote>

              <div className="pt-4">
                <button
                  onClick={() => onOpenDetail({
                    title: sacredHeritage.hazratbalShrine.title,
                    subtitle: sacredHeritage.hazratbalShrine.subtitle,
                    content: sacredHeritage.hazratbalShrine.description + " " + sacredHeritage.hazratbalShrine.culturalSignificance,
                    image: sacredHeritage.hazratbalShrine.image
                  })}
                  className="px-8 py-4 bg-paper text-charcoal hover:bg-stone-beige font-sans text-xs uppercase tracking-ultra font-semibold transition-colors"
                >
                  Explore Hazratbal Shrine
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[3/2] bg-earth-green/20 overflow-hidden border border-white/20 shadow-lg group">
                <img
                  src={sacredHeritage.hazratbalShrine.image}
                  alt="Hazratbal Shrine with white marble dome on Dal Lake with snow-capped mountain backdrop"
                  className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-earth-green/90 backdrop-blur-xs border border-white/15 px-3 py-1 text-xs font-sans uppercase tracking-widest text-stone-beige font-semibold">
                  Dargah Sharif &amp; Dal Lake with Snow Peaks
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
