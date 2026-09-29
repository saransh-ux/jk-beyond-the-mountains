import React from 'react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';
import { peopleProfiles } from '../data/content';

export function OurPeople({ onOpenProfile }) {
  return (
    <section id="people" className="py-24 md:py-36 bg-stone-beige text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Living Masters &amp; Custodians
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
            The People Who Carry It Forward
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
            Every craft, melody, and verse survives because visionary luminaries dedicate their lives to protecting it — honoring the master artisans, music revivalists, and literary titans of Jammu &amp; Kashmir.
          </p>
          <p className="text-xs text-charcoal-soft italic font-sans">
            * Note: The portraits displayed in this section are AI-generated artistic representations.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {peopleProfiles.map((person, idx) => {
            const portrait = mediaAssets.peopleProfiles[person.id] || mediaAssets.categories.people;

            return (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-paper border border-stone-border flex flex-col justify-between overflow-hidden group shadow-xs hover:border-walnut/60 transition-all duration-300"
              >
                <div>
                  {/* Portrait */}
                  <div className="relative aspect-[4/3] bg-stone-beige overflow-hidden">
                    <img
                      src={portrait}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-paper/90 px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-walnut font-semibold">
                      {person.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-charcoal/80 backdrop-blur-xs text-[10px] text-paper/90 px-2 py-0.5 font-sans tracking-wide">
                      AI Generated
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug">
                        {person.name}
                      </h3>
                      <div className="text-xs font-sans text-charcoal-soft uppercase tracking-wider mt-1">
                        {person.location} • {person.craft}
                      </div>
                    </div>

                    <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                      &ldquo;{person.preview}&rdquo;
                    </p>

                    <p className="text-[11px] text-charcoal-soft/75 italic font-sans">
                      * This image is AI-generated
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 pt-0">
                  <button
                    onClick={() => onOpenProfile({ ...person, image: portrait, isAIGenerated: true })}
                    className="w-full py-3 bg-stone-beige hover:bg-walnut hover:text-paper text-charcoal text-xs uppercase tracking-ultra font-semibold border border-stone-border transition-colors text-center"
                  >
                    Read Story &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
