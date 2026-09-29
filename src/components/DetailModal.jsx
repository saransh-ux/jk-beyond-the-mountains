import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DetailModal({ isOpen, onClose, data }) {
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

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/80 backdrop-blur-xs overflow-y-auto"
        data-lenis-prevent
      >
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl bg-paper border border-stone-border shadow-2xl overflow-hidden text-charcoal my-auto flex flex-col max-h-[88vh]"
          data-lenis-prevent
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 bg-paper/80 backdrop-blur-md rounded-full text-charcoal hover:bg-paper transition-colors border border-stone-border shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Image Container with Face-preserving alignment */}
          {data.image && (
            <div className="relative shrink-0 h-56 sm:h-64 md:h-72 bg-stone-beige overflow-hidden border-b border-stone-border">
              <img
                src={data.image}
                alt={data.title || data.name}
                className={`w-full h-full object-cover ${data.imageAlign || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              {data.isAIGenerated && (
                <div className="absolute top-6 left-6 z-10 bg-charcoal/80 backdrop-blur-xs text-[10px] text-white/90 px-2.5 py-1 font-sans tracking-wider uppercase border border-white/20">
                  AI-Generated Artistic Portrait
                </div>
              )}
              <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-sans uppercase tracking-ultra font-bold px-2.5 py-0.5 bg-paper/95 text-charcoal shadow-xs inline-block">
                  {data.category || data.number || 'Archive Record'}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white drop-shadow-sm">
                  {data.title || data.name}
                </h2>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div 
            className="p-8 sm:p-12 space-y-6 overflow-y-auto flex-1 font-sans"
            data-lenis-prevent
          >
            {!data.image && (
              <div className="space-y-2 border-b border-stone-border pb-4">
                <span className="text-xs uppercase tracking-ultra font-semibold text-walnut">
                  {data.category || 'Editorial Record'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                  {data.title || data.name}
                </h2>
              </div>
            )}

            {data.subtitle && (
              <div className="font-serif text-xl italic text-walnut border-l-2 border-walnut pl-4">
                {data.subtitle}
              </div>
            )}

            <div className="text-base text-charcoal/85 font-light leading-relaxed space-y-4">
              <p>{data.content || data.description || data.story || data.details}</p>
            </div>

            {data.highlights && (
              <div className="bg-stone-beige p-6 border border-stone-border space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-walnut">Key Archive Points</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-muted">
                  {data.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-walnut" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-stone-border/60 flex items-center justify-between text-xs text-charcoal-soft font-serif italic">
              <span>J&amp;K — Beyond the Mountains Archive</span>
              <button
                onClick={onClose}
                className="not-italic font-sans text-xs uppercase tracking-widest font-semibold px-4 py-2 bg-walnut text-paper hover:bg-walnut-dark transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
