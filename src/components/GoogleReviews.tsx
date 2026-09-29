import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS_DATA, SALON_INFO } from '../data/salonData';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 md:py-36 bg-salon-darkBrown text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-gold mb-2">
              <span className="px-2.5 py-0.5 bg-salon-gold/20 rounded-full border border-salon-gold/40">
                GOOGLE REVIEWS
              </span>
              <span>VERIFIED FEEDBACK</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-beige uppercase">
              WHAT OUR CLIENTS <span className="italic text-salon-gold font-italiana lowercase pl-2">say.</span>
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-4xl font-serif font-light text-salon-gold">
              {SALON_INFO.googleRating}
            </div>
            <div>
              <div className="flex text-salon-gold gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-salon-gold text-salon-gold" />
                ))}
              </div>
              <span className="text-xs font-sans text-salon-sand/70 tracking-widest uppercase block mt-1">
                BASED ON {SALON_INFO.googleReviewCount}+ VERIFIED GOOGLE REVIEWS
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS_DATA.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-salon-gold/40 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-salon-gold gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-salon-gold text-salon-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-salon-gold/30" />
                </div>

                <p className="font-sans text-sm font-light text-salon-sand/90 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-salon-gold/20 text-salon-gold font-serif font-bold text-xs flex items-center justify-center border border-salon-gold/30">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-light text-salon-beige">
                      {rev.name}
                    </h4>
                    {rev.service && (
                      <span className="text-[10px] font-sans text-salon-gold tracking-wider uppercase block">
                        {rev.service}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-sans text-white/40 uppercase">
                  <CheckCircle2 className="w-3 h-3 text-salon-gold" />
                  <span>Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
