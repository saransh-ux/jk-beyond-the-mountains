import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ onOpenSearch, onOpenContribution }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdown, setExploreDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '#explore', hasDropdown: true },
    { name: 'Stories', href: '#visual-stories' },
    { name: 'Heritage', href: '#history' },
    { name: 'People', href: '#people' },
    { name: 'Sacred J&K', href: '#sacred' },
  ];

  const exploreSublinks = [
    { name: 'Culture', href: '#explore-culture', desc: 'Identities & ways of life' },
    { name: 'Traditions', href: '#explore-traditions', desc: 'Crafts & generations' },
    { name: 'Food', href: '#explore-food', desc: 'Memory & home cuisine' },
    { name: 'Languages', href: '#explore-languages', desc: 'Words we shouldn\'t lose' },
    { name: 'Places', href: '#explore-places', desc: 'Landmarks & memory' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setExploreDropdown(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-paper/95 backdrop-blur-md border-b border-stone-border/60 py-4 shadow-sm' 
            : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Tagline */}
          <a href="#" className="group flex items-baseline gap-3">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}>
              J&amp;K
            </span>
            <span className={`text-xs md:text-sm font-sans tracking-widest uppercase opacity-80 border-l pl-3 transition-colors ${
              scrolled ? 'border-charcoal/20 text-charcoal-muted' : 'border-white/30 text-white/90'
            }`}>
              Beyond the Mountains
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-widest font-sans font-medium">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.hasDropdown && setExploreDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setExploreDropdown(false)}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-1 py-1 transition-colors relative group ${
                    scrolled 
                      ? 'text-charcoal hover:text-walnut' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-walnut' : 'bg-white'
                  }`} />
                </a>

                {/* Explore Dropdown Submenu */}
                {link.hasDropdown && exploreDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-paper border border-stone-border shadow-lg py-3 rounded-sm z-50 text-charcoal"
                  >
                    <div className="px-4 py-1 text-[10px] tracking-ultra uppercase text-charcoal-soft font-semibold border-b border-stone-border/40 mb-2">
                      Explore Categories
                    </div>
                    {exploreSublinks.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={(e) => handleNavClick(e, sub.href)}
                        className="block px-4 py-2 hover:bg-stone-beige/60 transition-colors"
                      >
                        <div className="text-xs font-semibold text-charcoal tracking-wider uppercase">{sub.name}</div>
                        <div className="text-[11px] text-charcoal-muted font-normal normal-case">{sub.desc}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSearch}
              className={`p-2.5 px-4 rounded-full border transition-colors flex items-center gap-2 text-xs tracking-wider uppercase font-semibold ${
                scrolled 
                  ? 'border-stone-border text-charcoal hover:bg-stone-beige/80' 
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
              aria-label="Search archive"
            >
              <Search className="w-4 h-4" />
              <span>Search Archive</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-paper text-charcoal pt-24 px-8 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-ultra text-walnut font-semibold border-b border-stone-border pb-2">
                Navigation
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-serif text-3xl hover:text-walnut transition-colors"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-border pt-6 mt-6 space-y-3">
                <div className="text-xs uppercase tracking-ultra text-walnut font-semibold">
                  Explore Archives
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {exploreSublinks.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={(e) => handleNavClick(e, sub.href)}
                      className="text-sm text-charcoal-muted hover:text-charcoal"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-border text-center">
              <div className="text-sm text-charcoal font-serif italic">
                J&amp;K — Beyond the Mountains | One Land. Many Stories.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
