import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, User, Calendar, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import type { GalleryItem } from '../data/salonData';

interface TransformationGalleryProps {
  onOpenBooking: () => void;
}

export const TransformationGallery: React.FC<TransformationGalleryProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Cuts', 'Color', 'Keratin', 'Grooming', 'Styling'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-salon-beige text-salon-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-salon-sand pb-8">
          <div>
            <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-deepBrown block mb-2">
              THE PORTFOLIO
            </span>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-darkBrown uppercase">
              THE ART OF <span className="italic text-salon-gold font-italiana lowercase pl-2">transformation.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? 'bg-salon-deepBrown text-white shadow-md'
                    : 'bg-white/60 text-salon-charcoal hover:bg-salon-sand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveItem(item)}
              data-cursor="EXPLORE"
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-salon-sand/60 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-salon-darkBrown/90 via-salon-darkBrown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-salon-gold block">
                  {item.category} • {item.stylist}
                </span>
                <h3 className="font-serif text-2xl font-light text-salon-beige mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-salon-darkBrown/95 backdrop-blur-xl p-6 md:p-12 flex items-center justify-center overflow-y-auto"
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-salon-charcoal rounded-3xl overflow-hidden border border-white/10 shadow-2xl text-white my-auto">
              
              {/* Image Container */}
              <div className="lg:col-span-7 aspect-[4/5] lg:aspect-square bg-black overflow-hidden relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Column */}
              <div className="lg:col-span-5 p-8 space-y-6">
                <div>
                  <span className="text-xs font-sans font-bold tracking-widest text-salon-gold uppercase block mb-1">
                    {activeItem.category} TRANSFORMATION
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-salon-beige">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="space-y-3 py-4 border-y border-white/10 text-sm font-sans text-salon-sand/80">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-salon-gold" />
                    <span>Stylist Artist: <strong className="text-white">{activeItem.stylist}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-salon-gold" />
                    <span>Category: <strong className="text-white">{activeItem.category}</strong></span>
                  </div>
                </div>

                <p className="text-xs font-sans text-salon-sand/70 font-light leading-relaxed">
                  Crafted at Dyno Art Salon in Besant Nagar using premium hair care formulations and precision geometry.
                </p>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenBooking();
                  }}
                  className="w-full py-4 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>GET THIS LOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
