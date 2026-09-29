import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { dictionaryWords } from '../data/content';

export function LanguagesSection({ onOpenDictionaryModal }) {
  const [playingId, setPlayingId] = useState(null);

  const handlePlayAudio = (wordObj) => {
    setPlayingId(wordObj.id);
    // Use Web Speech API if supported for interactive pronunciation simulation, or gentle beep
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(wordObj.word);
      utterance.rate = 0.85;
      utterance.onend = () => setPlayingId(null);
      utterance.onerror = () => setPlayingId(null);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setPlayingId(null), 1500);
    }
  };

  return (
    <section id="explore-languages" className="py-24 md:py-36 bg-paper text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-stone-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
              Linguistic Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-charcoal">
              Words We Should Never Lose
            </h2>
            <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed">
              Preserving words, phrases, and cultural idioms in Dogri, Kashmiri, Gojri, and Pahari.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenDictionaryModal}
              className="px-6 py-3 bg-stone-beige hover:bg-walnut hover:text-paper text-charcoal text-xs uppercase tracking-ultra font-semibold border border-stone-border transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-walnut" />
              <span>Explore Full Dictionary</span>
            </button>
          </div>
        </div>

        {/* Dictionary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dictionaryWords.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-stone-beige p-8 border border-stone-border flex flex-col justify-between space-y-6 hover:border-walnut/60 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-widest font-semibold px-2.5 py-0.5 bg-paper text-walnut border border-stone-border">
                    {item.language}
                  </span>
                  
                  {/* Interactive Audio Player Icon */}
                  <button
                    onClick={() => handlePlayAudio(item)}
                    className={`p-2 rounded-full border transition-all ${
                      playingId === item.id 
                        ? 'bg-walnut text-paper border-walnut animate-pulse' 
                        : 'bg-paper text-charcoal hover:bg-walnut hover:text-paper border-stone-border'
                    }`}
                    title="Listen to pronunciation"
                    aria-label={`Pronounce ${item.word}`}
                  >
                    {playingId === item.id ? (
                      <Volume2 className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Word & Script */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-3xl font-bold text-charcoal">
                      {item.word}
                    </h3>
                    <span className="font-serif text-2xl text-walnut/70">
                      {item.script}
                    </span>
                  </div>
                  <div className="text-xs font-sans text-charcoal-soft italic">
                    Pronunciation: &ldquo;{item.pronunciation}&rdquo;
                  </div>
                </div>

                {/* Meaning */}
                <p className="text-sm font-sans text-charcoal-muted font-light leading-relaxed">
                  {item.meaning}
                </p>
              </div>

              {/* Sample Context */}
              <div className="pt-4 border-t border-stone-border/60 text-xs font-serif italic text-charcoal-soft">
                Context: &ldquo;{item.sampleSentence}&rdquo;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
