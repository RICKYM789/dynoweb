import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Award } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const SalonIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-salon-beige text-salon-charcoal relative overflow-hidden">
      {/* Background Subtle Monogram */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 font-serif text-[280px] font-bold text-salon-sand/30 pointer-events-none select-none">
        DA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="flex items-center gap-3 text-salon-deepBrown text-xs font-sans font-bold tracking-widest uppercase">
              <span className="w-8 h-[1px] bg-salon-deepBrown" />
              <span>THE PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-salon-darkBrown leading-[0.95]">
              MORE THAN A<br />
              <span className="italic font-normal font-italiana text-salon-gold font-serif-display lowercase pl-2">
                salon.
              </span>
            </h2>

            <p className="font-sans text-lg md:text-xl font-light text-salon-charcoal/90 leading-relaxed border-l-2 border-salon-gold pl-6 py-2">
              {SALON_INFO.aboutParagraphs[0]}
            </p>

            <div className="space-y-4 font-sans text-sm md:text-base font-light text-salon-muted leading-relaxed">
              <p>{SALON_INFO.aboutParagraphs[1]}</p>
              <p>{SALON_INFO.aboutParagraphs[2]}</p>
              <p className="text-salon-darkBrown font-medium italic border-t border-salon-sand pt-3">
                "{SALON_INFO.aboutParagraphs[3]}"
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-salon-sand">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-salon-deepBrown font-serif text-2xl font-semibold">
                  <Scissors className="w-5 h-5 text-salon-gold" />
                  <span>Precision Art</span>
                </div>
                <p className="text-xs font-sans text-salon-muted leading-snug">
                  Tailored skull-anatomy sculpting & natural hair fall geometry.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-salon-deepBrown font-serif text-2xl font-semibold">
                  <Sparkles className="w-5 h-5 text-salon-gold" />
                  <span>Luxury Care</span>
                </div>
                <p className="text-xs font-sans text-salon-muted leading-snug">
                  Organic botanical spa rituals & Brazilian keratin smoothing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Parallax Editorial Split-Screen Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative"
          >
            <div
              data-cursor="VIEW"
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border border-salon-sand"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200"
                alt="Dyno Art Salon Editorial Styling"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Floating Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-salon-darkBrown/90 backdrop-blur-md p-6 rounded-xl text-white border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-salon-gold uppercase block">
                    LOCATION
                  </span>
                  <span className="font-serif text-lg font-light">
                    {SALON_INFO.location}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-sans font-bold text-salon-sand block">
                    FIRST FLOOR, 5TH AVE
                  </span>
                  <span className="text-[10px] font-sans text-white/60 uppercase">
                    BESANT NAGAR • CHENNAI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
