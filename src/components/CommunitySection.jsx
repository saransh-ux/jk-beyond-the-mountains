import React from 'react';
import { BookOpen, Camera, Shield, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export function CommunitySection({ onOpenContributionOption }) {
  const options = [
    {
      id: 'story',
      title: 'Share a Story',
      description: 'A personal memory, family tale, or oral history remembered from your childhood or elders.',
      icon: BookOpen
    },
    {
      id: 'photo',
      title: 'Share a Photograph',
      description: 'Archival family images, old market scenes, architecture, or landscapes preserved in family albums.',
      icon: Camera
    },
    {
      id: 'tradition',
      title: 'Preserve a Tradition',
      description: 'Document local customs, seasonal celebrations, traditional crafts, or community rituals.',
      icon: Shield
    },
    {
      id: 'memory',
      title: 'Record a Memory',
      description: 'An oral recording or recollection from a village elder, musician, or artisan.',
      icon: Mic
    }
  ];

  return (
    <section id="community" className="py-24 md:py-36 bg-stone-beige text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
            Community Archive
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
            This Story Belongs To Everyone
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted font-sans font-light leading-relaxed">
            J&amp;K — Beyond the Mountains should not be written by one person. It should grow with the memories, stories, photographs and traditions shared by its people.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => onOpenContributionOption(opt.id)}
                className="bg-paper p-8 border border-stone-border flex flex-col justify-between space-y-6 group cursor-pointer hover:border-walnut hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-stone-beige text-walnut flex items-center justify-center border border-stone-border group-hover:bg-walnut group-hover:text-paper transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-walnut transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-sans font-light leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="text-xs uppercase tracking-ultra font-semibold text-walnut flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Submit Archive</span>
                  <span>&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
