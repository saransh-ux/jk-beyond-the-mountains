import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { mediaAssets } from '../data/media';

export function VideoGallery({ onPlayVideo }) {
  return (
    <section className="py-24 md:py-36 bg-paper text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Moving Imagery
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
            J&amp;K Through Our Eyes
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
            Quiet documentary stilled frames, river waters, artisan hands, and seasonal landscapes.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {mediaAssets.videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer space-y-4"
              onClick={() => onPlayVideo(vid)}
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative aspect-[16/9] bg-stone-beige border border-stone-border overflow-hidden shadow-xs">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/20 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-charcoal/80 text-paper text-[10px] font-sans px-2.5 py-1 tracking-widest uppercase">
                  {vid.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-paper/90 text-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-paper transition-all duration-300">
                    <Play className="w-6 h-6 fill-charcoal translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-walnut transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                  {vid.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
