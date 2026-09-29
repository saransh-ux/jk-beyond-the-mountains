import React from 'react';

export function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-paper py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-paper">
              J&amp;K — Beyond the Mountains
            </h3>
            <p className="font-sans text-sm text-stone-beige/80 font-light leading-relaxed">
              A personal, non-commercial digital archive of culture, traditions, languages, food, and stories from Jammu &amp; Kashmir.
            </p>
            <div className="text-xs font-serif italic text-stone-beige/60">
              One Land. Many Stories.
            </div>
          </div>

          {/* Archival Stewardship */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-ultra font-semibold text-stone-beige/70 font-sans border-b border-white/10 pb-2">
              Archival Initiative
            </h4>
            <div className="pt-1">
              <span className="block text-xs uppercase tracking-widest text-stone-beige/60 font-sans">
                Curated &amp; Developed By
              </span>
              <span className="block font-serif text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-sm mt-1">
                Saransh Mahajan
              </span>
            </div>
            <p className="font-sans text-sm text-stone-beige/80 font-light leading-relaxed">
              An independent digital archive and cultural tribute dedicated to documenting the living heritage, oral traditions, and timeless stories of Jammu &amp; Kashmir.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-ultra font-semibold text-stone-beige/70 font-sans border-b border-white/10 pb-2">
              Archive Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-beige/80 font-sans">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#intro')} className="hover:text-paper transition-colors">Home &amp; Intro</a></li>
              <li><a href="#explore" onClick={(e) => handleNavClick(e, '#explore')} className="hover:text-paper transition-colors">Culture &amp; Roots</a></li>
              <li><a href="#history" onClick={(e) => handleNavClick(e, '#history')} className="hover:text-paper transition-colors">Historical Timeline</a></li>
              <li><a href="#visual-stories" onClick={(e) => handleNavClick(e, '#visual-stories')} className="hover:text-paper transition-colors">Jammu &amp; Kashmir Stories</a></li>
              <li><a href="#people" onClick={(e) => handleNavClick(e, '#people')} className="hover:text-paper transition-colors">Our People</a></li>
              <li><a href="#sacred" onClick={(e) => handleNavClick(e, '#sacred')} className="hover:text-paper transition-colors">Sacred J&amp;K</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-beige/60 font-sans gap-4">
          <div>
            © 2026 J&amp;K — Beyond the Mountains.
          </div>
          <div className="text-center font-sans text-stone-beige/80">
            Curated &amp; Developed with reverence by <strong className="text-white font-bold text-sm md:text-base tracking-wide">Saransh Mahajan</strong>
          </div>
          <div className="font-serif italic text-stone-beige/80 text-center sm:text-right">
            Built with respect for our land and its people.
          </div>
        </div>

      </div>
    </footer>
  );
}
