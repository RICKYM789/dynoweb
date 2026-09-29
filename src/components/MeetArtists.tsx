import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageSquare, Sparkles, Award, UserCheck } from 'lucide-react';
import { STYLISTS_DATA, SALON_INFO } from '../data/salonData';
import type { Stylist } from '../data/salonData';
import { InstagramIcon } from './Icons';

interface MeetArtistsProps {
  onBookWithStylist: (stylistName: string) => void;
}

export const MeetArtists: React.FC<MeetArtistsProps> = ({ onBookWithStylist }) => {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);

  return (
    <section id="artists" className="py-24 md:py-36 bg-salon-beige text-salon-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-salon-sand pb-8">
          <div>
            <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-deepBrown block mb-2">
              THE CREATIVE DIRECTORS
            </span>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-darkBrown uppercase">
              MEET OUR <span className="italic text-salon-gold font-italiana lowercase pl-2">artists.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-salon-muted font-light max-w-md">
            "Behind every transformation is an artist." Meet our Besant Nagar team of master cutters, color directors, and hair sculptors.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS_DATA.filter(s => !s.isPlaceholder).map((stylist) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedStylist(stylist)}
              data-cursor="MEET"
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md border border-salon-sand hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-salon-sand">
                <img
                  src={stylist.portrait}
                  alt={stylist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-salon-darkBrown/80 backdrop-blur-md px-3 py-1 rounded-full text-salon-gold font-serif text-sm">
                  {stylist.number}
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 bg-salon-darkBrown/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2.5 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    VIEW PROFILE
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-salon-darkBrown font-normal group-hover:text-salon-gold transition-colors">
                    {stylist.name}
                  </h3>
                  <span className="text-[10px] font-sans font-semibold tracking-wider text-salon-muted uppercase bg-salon-beige px-2.5 py-1 rounded-full">
                    {stylist.experienceYears}+ YRS EXP
                  </span>
                </div>

                <p className="text-xs font-sans font-semibold tracking-wider text-salon-deepBrown uppercase">
                  {stylist.title}
                </p>

                <p className="text-xs font-sans text-salon-muted line-clamp-2 pt-1">
                  {stylist.signatureStyle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Stylist Expansion Sheet Modal */}
      <AnimatePresence>
        {selectedStylist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-salon-darkBrown/90 backdrop-blur-md p-4 md:p-8 flex justify-center items-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-salon-beige text-salon-charcoal max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl border border-salon-sand max-h-[90vh] flex flex-col relative"
            >
              {/* Top Bar Close */}
              <div className="p-6 border-b border-salon-sand flex items-center justify-between bg-white sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl text-salon-gold">{selectedStylist.number}</span>
                  <span className="font-sans text-xs font-bold tracking-widest text-salon-deepBrown uppercase">
                    ARTIST PROFILE • {selectedStylist.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedStylist(null)}
                  className="p-2 rounded-full bg-salon-beige hover:bg-salon-sand text-salon-darkBrown transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 overflow-y-auto space-y-12">
                
                {/* Upper Split: Left Image / Right Bio */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                  
                  {/* Left Portrait */}
                  <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-salon-sand">
                    <img
                      src={selectedStylist.portrait}
                      alt={selectedStylist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-salon-darkBrown/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-sans flex items-center gap-2 border border-white/10">
                      <UserCheck className="w-4 h-4 text-salon-gold" />
                      <span>{selectedStylist.experienceYears} Years Behind The Chair</span>
                    </div>
                  </div>

                  {/* Right Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-salon-gold block mb-1">
                        {selectedStylist.roleTag}
                      </span>
                      <h3 className="font-serif text-4xl md:text-5xl font-light text-salon-darkBrown">
                        {selectedStylist.name}
                      </h3>
                      <p className="text-sm font-sans font-semibold tracking-wider text-salon-deepBrown uppercase mt-1">
                        {selectedStylist.title}
                      </p>
                    </div>

                    <p className="text-sm md:text-base font-sans font-light text-salon-charcoal leading-relaxed">
                      {selectedStylist.bio}
                    </p>

                    {/* Specializations & Philosophy */}
                    <div className="space-y-4 pt-4 border-t border-salon-sand">
                      <div>
                        <h4 className="text-xs font-sans font-bold tracking-widest uppercase text-salon-deepBrown mb-2">
                          SPECIALIZATIONS
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedStylist.specialties.map((spec) => (
                            <span
                              key={spec}
                              className="px-3.5 py-1.5 bg-white rounded-full text-xs font-sans text-salon-charcoal font-medium border border-salon-sand"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-salon-sand space-y-1">
                        <span className="text-[10px] font-sans font-bold tracking-widest text-salon-gold uppercase block">
                          STYLING PHILOSOPHY
                        </span>
                        <p className="font-serif text-lg text-salon-darkBrown italic">
                          "{selectedStylist.stylingPhilosophy}"
                        </p>
                      </div>

                      <div className="text-xs font-sans text-salon-muted">
                        <strong>Favorite Transformation:</strong> {selectedStylist.favoriteTransformation}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <button
                        onClick={() => {
                          const name = selectedStylist.name;
                          setSelectedStylist(null);
                          onBookWithStylist(name);
                        }}
                        className="flex-1 py-4 bg-salon-deepBrown text-white font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-salon-darkBrown transition-all shadow-xl flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4 text-salon-gold" />
                        <span>BOOK WITH {selectedStylist.name.toUpperCase()}</span>
                      </button>

                      <a
                        href={`https://wa.me/918778277514?text=Hi%20Dyno%20Art%20Salon,%20I'd%20like%20to%20consult%20or%20book%20an%20appointment%20with%20${encodeURIComponent(selectedStylist.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-4 border border-salon-deepBrown text-salon-deepBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-salon-deepBrown hover:text-white transition-all flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WHATSAPP CONSULTATION</span>
                      </a>
                    </div>
                  </div>

                </div>

                {/* Portfolio Work Section */}
                <div className="pt-8 border-t border-salon-sand space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-3xl font-light text-salon-darkBrown">
                      THEIR WORK
                    </h4>
                    <span className="text-xs font-sans text-salon-muted tracking-widest uppercase">
                      PORTFOLIO GALLERY ({selectedStylist.workPortfolio.length} PHOTOS)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {selectedStylist.workPortfolio.map((item) => (
                      <div
                        key={item.id}
                        className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-salon-sand border border-salon-sand"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-salon-darkBrown/80 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white text-[10px] font-sans">
                          <span className="text-salon-gold font-semibold uppercase">{item.category}</span>
                          <span className="font-serif text-sm font-light leading-tight">{item.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
