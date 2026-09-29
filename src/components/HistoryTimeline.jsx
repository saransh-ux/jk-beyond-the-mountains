import React from 'react';
import { motion } from 'framer-motion';
import { historyTimeline } from '../data/content';

export function HistoryTimeline() {
  return (
    <section id="history" className="py-24 md:py-36 bg-stone-beige text-charcoal relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Historical Context
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-charcoal">
            A Land Through Time
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted font-sans font-light leading-relaxed">
            Understanding the formation of the region through its historical eras, setting the backdrop for its living human history.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {historyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year + item.ruler}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 space-y-4 text-left">
                    <div className="inline-flex items-center gap-3">
                      <span className="font-serif text-3xl font-bold text-walnut">
                        {item.year}
                      </span>
                      <span className="text-xs font-sans uppercase tracking-widest px-2.5 py-1 bg-paper text-charcoal-soft border border-stone-border">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal">
                      {item.ruler}
                    </h3>
                    <div className="text-xs uppercase tracking-wider text-walnut font-sans font-medium">
                      {item.title}
                    </div>

                    <p className="text-sm md:text-base text-charcoal-muted font-sans font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Ruler Portrait / Archival Image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[4/3] bg-paper overflow-hidden border border-stone-border shadow-md group">
                      <img
                        src={item.image}
                        alt={`${item.ruler} archival context`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 right-3 bg-paper/95 px-3 py-1 text-[10px] font-sans uppercase tracking-widest text-walnut font-bold shadow-xs">
                        Archival Portrait
                      </div>
                    </div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-paper border-2 border-walnut items-center justify-center text-xs font-serif font-bold text-walnut z-10 shadow-xs">
                    {idx + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transitioning Editorial Quote */}
        <div className="mt-28 pt-16 border-t border-stone-border/80 text-center space-y-6">
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl italic text-walnut max-w-3xl mx-auto leading-relaxed">
            &ldquo;But the story of this land was never only about its rulers.&rdquo;
          </blockquote>

          <div className="pt-4">
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-charcoal">
              It was always about its people.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
