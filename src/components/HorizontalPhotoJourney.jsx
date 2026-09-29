import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { culturalJourney } from '../data/gallery';

export function HorizontalPhotoJourney() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive scroll strategy
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamically calculate actual horizontal scroll distance based on track width vs viewport width
  useLayoutEffect(() => {
    const updateMaxScroll = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Add padding margin to ensure full view of closing slide
        const calculatedMax = Math.max(0, trackWidth - viewportWidth + 60);
        setMaxScroll(calculatedMax);
      }
    };

    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);
    return () => window.removeEventListener('resize', updateMaxScroll);
  }, []);

  // Framer Motion scroll binding for pinned section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth proportional horizontal translation from 0 to -maxScroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);
  
  // Subtle progress line width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="cultural-journey" className="relative bg-paper text-charcoal border-t border-stone-border/60">
      
      {/* DESKTOP & TABLET: Pinned Vertical-to-Horizontal Scroll Journey */}
      {!isMobile ? (
        <div 
          ref={containerRef} 
          className="relative" 
          style={{ height: `${Math.max(300, (culturalJourney.length * 40))}vh` }}
        >
          <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-8 md:py-10 bg-paper">
            
            {/* Top Bar / Editorial Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between z-10">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
                  Editorial Photo Sequence
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
                  A LAND OF MANY FRAMES
                </h2>
              </div>
              <div className="hidden sm:flex flex-col items-end text-xs font-sans text-charcoal-soft uppercase tracking-widest">
                <span>Vertical Scroll &rarr; Horizontal Journey</span>
                <span className="text-[10px] text-walnut/70">01 — 09 Photographic Canvas</span>
              </div>
            </div>

            {/* Main Horizontal Track */}
            <div className="w-full overflow-hidden flex items-center my-auto">
              <motion.div 
                ref={trackRef}
                style={{ x }}
                className="flex items-center gap-16 md:gap-24 lg:gap-28 px-6 md:px-12 w-max"
              >
                
                {/* Intro Canvas Slide */}
                <div className="w-[85vw] max-w-xl flex-shrink-0 space-y-6 pr-8 border-r border-stone-border/50">
                  <span className="text-xs uppercase tracking-ultra text-walnut font-bold">
                    Section Introduction
                  </span>
                  <h3 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-charcoal tracking-tight">
                    A LAND OF MANY FRAMES
                  </h3>
                  <p className="font-serif text-3xl md:text-4xl italic text-walnut leading-relaxed">
                    &ldquo;Jammu &amp; Kashmir is more than a landscape.&rdquo;
                  </p>
                  <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed max-w-md pt-2">
                    A continuous editorial canvas capturing fragments of memory, living traditions, quiet valleys, and human stories.
                  </p>
                  <div className="pt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-walnut font-semibold">
                    <span className="w-8 h-px bg-walnut" />
                    <span>Scroll to explore sequence</span>
                  </div>
                </div>

                {/* 9 Editorial Photographic Slots */}
                {culturalJourney.map((item) => (
                  <div
                    key={item.id}
                    className={`flex-shrink-0 flex flex-col justify-center ${item.verticalAlign || 'self-center'}`}
                  >
                    <div className="group relative">
                      {/* Image Container Frame */}
                      <div 
                        className={`relative ${item.heightClass || 'h-[60vh]'} ${item.aspectRatio || 'aspect-[4/5]'} bg-stone-beige overflow-hidden border border-stone-border shadow-xl transition-all duration-700 hover:shadow-2xl`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/images/dogra architecture-jammu.jpg';
                          }}
                        />
                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                        
                        {/* Corner Frame Number */}
                        <div className="absolute top-4 left-4 bg-paper/90 backdrop-blur-xs px-3 py-1 text-xs font-serif font-bold text-walnut tracking-widest border border-stone-border/60">
                          {item.number}
                        </div>
                      </div>

                      {/* Editorial Caption below Frame */}
                      {item.hasCaption ? (
                        <div className="mt-4 max-w-md space-y-1">
                          <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                              {item.title}
                            </h4>
                            <span className="text-xs uppercase tracking-widest text-walnut font-sans font-semibold">
                              {item.location}
                            </span>
                          </div>
                          {item.subtitle && (
                            <p className="text-xs sm:text-sm text-charcoal-muted font-sans font-light italic">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-ultra text-charcoal-soft font-sans font-medium">
                          <span>Frame {item.number}</span>
                          <span className="text-walnut/60">Jammu &amp; Kashmir Archive</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Closing Canvas Slide */}
                <div className="w-[85vw] max-w-xl flex-shrink-0 space-y-8 pl-12 border-l border-stone-border/50 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-ultra text-walnut font-bold">
                    Journey Pause
                  </span>
                  <blockquote className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold italic text-charcoal tracking-tight leading-snug">
                    &ldquo;Every frame holds a story.&rdquo;
                  </blockquote>
                  <p className="text-base text-charcoal-muted font-sans font-light leading-relaxed max-w-md">
                    As memories settle into the landscape, we invite you to explore the seven pillars of regional heritage.
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                    <span className="text-xs uppercase tracking-ultra font-bold text-walnut">
                      Continue to Explore Our Roots
                    </span>
                    <span className="text-xl text-walnut animate-bounce">&darr;</span>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center gap-6">
              <span className="text-[10px] font-sans uppercase tracking-widest text-charcoal-soft font-medium">
                01 Start
              </span>
              <div className="flex-1 h-0.5 bg-stone-border/60 relative overflow-hidden rounded-full">
                <motion.div 
                  style={{ width: progressWidth }}
                  className="h-full bg-walnut" 
                />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-widest text-charcoal-soft font-medium">
                09 End
              </span>
            </div>

          </div>
        </div>
      ) : (
        /* MOBILE VIEW: Mobile-Optimized Editorial Sequence */
        <div className="py-20 px-6 space-y-16">
          
          {/* Header Mobile */}
          <div className="space-y-4 text-center max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-ultra text-walnut font-semibold">
              Editorial Photo Sequence
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-charcoal">
              A LAND OF MANY FRAMES
            </h2>
            <p className="font-serif text-2xl italic text-walnut">
              &ldquo;Jammu &amp; Kashmir is more than a landscape.&rdquo;
            </p>
            <p className="text-sm text-charcoal-muted font-sans font-light leading-relaxed">
              Swipe or scroll through the 9-frame editorial sequence.
            </p>
          </div>

          {/* Vertical Mobile Stacked Frames */}
          <div className="space-y-16">
            {culturalJourney.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/5] bg-stone-beige overflow-hidden border border-stone-border shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-paper/90 px-2.5 py-1 text-xs font-serif font-bold text-walnut border border-stone-border">
                    {item.number}
                  </div>
                </div>

                {item.hasCaption ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-bold text-charcoal">
                        {item.title}
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-walnut font-sans font-semibold">
                        {item.location}
                      </span>
                    </div>
                    {item.subtitle && (
                      <p className="text-xs text-charcoal-muted font-sans font-light italic">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-charcoal-soft font-sans">
                    <span>Frame {item.number}</span>
                    <span className="text-walnut/60">Jammu &amp; Kashmir Archive</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Closing Mobile Card */}
          <div className="pt-10 border-t border-stone-border text-center space-y-6">
            <blockquote className="font-serif text-3xl font-bold italic text-charcoal">
              &ldquo;Every frame holds a story.&rdquo;
            </blockquote>
            <p className="text-xs uppercase tracking-ultra font-bold text-walnut">
              Continue into Explore Our Roots &darr;
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
