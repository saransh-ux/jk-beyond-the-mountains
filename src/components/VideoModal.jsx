import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function VideoModal({ isOpen, onClose, video }) {
  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-charcoal/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-charcoal border border-white/10 shadow-2xl overflow-hidden text-paper"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-charcoal/80 text-paper rounded-full hover:bg-paper hover:text-charcoal transition-colors border border-white/20"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-[16/9] bg-black">
            {video.videoUrl ? (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={video.thumbnail}
              />
            ) : (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Details */}
          <div className="p-6 bg-charcoal border-t border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-beige/70 uppercase tracking-widest font-sans">
              <span>Documentary Frame</span>
              <span>Duration: {video.duration}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-beige/80 font-sans font-light">
              {video.subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
