import React, { useState, useEffect } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { exploreCategories, historyTimeline, peopleProfiles, dictionaryWords, foodStories } from '../data/content';

export function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Search indexing
  const allResults = [
    ...exploreCategories.map(c => ({ title: c.title, type: 'Category', desc: c.description, data: c })),
    ...historyTimeline.map(h => ({ title: `${h.ruler} (${h.year})`, type: 'History Timeline', desc: h.description, data: h })),
    ...peopleProfiles.map(p => ({ title: `${p.name} — ${p.category}`, type: 'People Story', desc: p.preview, data: p })),
    ...dictionaryWords.map(w => ({ title: `${w.word} (${w.language})`, type: 'Linguistic Word', desc: w.meaning, data: w })),
    ...foodStories.map(f => ({ title: f.name, type: 'Food Tradition', desc: f.description, data: f }))
  ];

  const filtered = query.trim() === ''
    ? allResults.slice(0, 6)
    : allResults.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.desc.toLowerCase().includes(query.toLowerCase()) ||
        r.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-charcoal/80 backdrop-blur-xs"
        data-lenis-prevent
      >
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative z-10 w-full max-w-3xl bg-paper border border-stone-border shadow-2xl overflow-hidden text-charcoal"
          data-lenis-prevent
        >
          {/* Search Header Input */}
          <div className="p-6 border-b border-stone-border flex items-center gap-4 bg-stone-beige">
            <Search className="w-5 h-5 text-walnut" />
            <input
              type="text"
              autoFocus
              placeholder="Search history, traditions, people, food, languages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-lg font-serif placeholder:font-sans placeholder:text-charcoal-soft focus:outline-none text-charcoal"
            />
            <button
              onClick={onClose}
              className="p-2 text-charcoal-soft hover:text-charcoal hover:bg-paper rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div 
            className="p-6 max-h-[60vh] overflow-y-auto space-y-4 font-sans"
            data-lenis-prevent
          >
            <div className="text-[11px] font-sans uppercase tracking-ultra text-walnut font-semibold">
              {query.trim() === '' ? 'Suggested Archive Entries' : `Search Results (${filtered.length})`}
            </div>

            {filtered.length === 0 ? (
              <div className="py-12 text-center text-sm text-charcoal-muted font-light">
                No matching archive entries found for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onSelectResult(res.data);
                      onClose();
                    }}
                    className="p-4 bg-stone-beige/60 hover:bg-stone-beige border border-stone-border/60 hover:border-walnut cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-walnut px-2 py-0.5 bg-paper border border-stone-border">
                        {res.type}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-charcoal group-hover:text-walnut transition-colors">
                        {res.title}
                      </h4>
                      <p className="text-xs text-charcoal-muted line-clamp-1 font-light">
                        {res.desc}
                      </p>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-walnut group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="px-6 py-3 bg-stone-beige border-t border-stone-border text-[11px] font-serif italic text-charcoal-soft flex items-center justify-between">
            <span>Press ESC or click close to dismiss</span>
            <span>J&amp;K Digital Cultural Index</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
