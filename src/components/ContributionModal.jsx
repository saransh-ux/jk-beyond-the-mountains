import React, { useState } from 'react';
import { X, Check, BookOpen, Camera, Shield, Utensils, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContributionModal({ isOpen, onClose, initialType = 'story' }) {
  const [activeType, setActiveType] = useState(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    title: '',
    content: '',
    language: 'English / Dogri / Kashmiri'
  });
  const [submitted, setSubmitted] = useState(false);

  const types = [
    { id: 'story', label: 'Share a Story', icon: BookOpen },
    { id: 'photo', label: 'Share a Photograph', icon: Camera },
    { id: 'tradition', label: 'Preserve a Tradition', icon: Shield },
    { id: 'recipe', label: 'Share a Recipe', icon: Utensils },
    { id: 'memory', label: 'Record a Memory', icon: Mic }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', location: '', title: '', content: '', language: 'English / Dogri / Kashmiri' });
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-charcoal/80 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-paper border border-stone-border shadow-2xl p-6 sm:p-10 text-charcoal my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-charcoal-soft hover:text-charcoal hover:bg-stone-beige transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-earth-green text-paper flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-charcoal">
                Memory Received
              </h3>
              <p className="text-sm text-charcoal-muted max-w-md mx-auto font-sans font-light">
                Thank you for contributing to the living cultural archive of Jammu &amp; Kashmir. Your submission has been saved locally for review.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-ultra text-walnut font-semibold font-sans">
                  Community Archive
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                  Preserve a Memory
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-sans font-light">
                  Select a category and share your story, photograph description, or traditional recipe.
                </p>
              </div>

              {/* Type Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 border-b border-stone-border pb-4">
                {types.map((t) => {
                  const Icon = t.icon;
                  const active = activeType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveType(t.id)}
                      className={`flex flex-col items-center justify-center p-3 text-center transition-all border ${
                        active
                          ? 'bg-walnut text-paper border-walnut'
                          : 'bg-stone-beige text-charcoal border-stone-border hover:border-walnut/50'
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1.5" />
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider">{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-charcoal-muted font-semibold">Your Name / Contributor</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma / Zoya Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-stone-beige border border-stone-border text-sm font-sans focus:outline-none focus:border-walnut"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-charcoal-muted font-semibold">Location / Hometown</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udhampur / Srinagar / Anantnag"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-3 bg-stone-beige border border-stone-border text-sm font-sans focus:outline-none focus:border-walnut"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-charcoal-muted font-semibold">Title of Contribution</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Winter mornings around our grandfather's Kangri"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-3 bg-stone-beige border border-stone-border text-sm font-sans focus:outline-none focus:border-walnut"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-charcoal-muted font-semibold">Memory Details / Story Text</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the tradition, recipe, photo context, or personal story in detail..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full p-3 bg-stone-beige border border-stone-border text-sm font-sans focus:outline-none focus:border-walnut"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-charcoal-soft font-serif italic">
                    Saved respectfully in the community cultural registry.
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-walnut text-paper hover:bg-walnut-dark text-xs uppercase tracking-ultra font-semibold transition-colors"
                  >
                    Submit Archive
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
