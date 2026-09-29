import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, MapPin, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAI }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-salon-darkBrown text-white pt-24 pb-12">
      {/* Background Editorial Photographic Image with Subtle Parallax Scaling */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1.02, opacity: 0.45 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        {/* Dark Editorial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-salon-darkBrown/80 via-salon-darkBrown/40 to-salon-darkBrown" />
      </motion.div>

      {/* Top Location & Accent Tag */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-sans tracking-[0.25em] uppercase text-salon-sand/80">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-salon-gold" />
          <span>FIRST FLOOR, 5TH AVE • BESANT NAGAR, CHENNAI</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-white/60">
          <Scissors className="w-3.5 h-3.5 text-salon-gold" />
          <span>PREMIUM UNISEX HAIR & BEAUTY</span>
        </div>
      </div>

      {/* Hero Core Content: Oversized Display Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="inline-block">
            <span className="text-xs md:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-salon-gold border-b border-salon-gold/40 pb-1">
              HAIR IS ART • STYLIST IS AN ARTIST
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-salon-beige uppercase max-w-6xl drop-shadow-lg">
            YOUR HAIR.<br />
            <span className="italic font-normal text-salon-gold font-italiana lowercase pl-4 md:pl-12">
              your art.
            </span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg font-sans font-light tracking-wide text-salon-sand/90 pt-4 leading-relaxed">
            Dyno Art Salon is a modern unisex hair and beauty destination in Besant Nagar where precision cutting, directional coloring, and high-fashion aesthetics unite.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 pt-8"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="BOOK"
            className="group px-8 py-4 bg-salon-gold text-salon-darkBrown font-sans text-xs md:text-sm font-bold tracking-[0.25em] uppercase rounded-full hover:bg-white hover:text-salon-darkBrown transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-xl"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>


          <button
            onClick={onOpenAI}
            className="px-6 py-4 border border-salon-gold/40 text-salon-gold font-sans text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-salon-gold/10 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI STYLIST QUIZ</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex items-end justify-between text-xs font-sans text-salon-sand/60">
        <div className="flex items-center gap-8">
          <div>
            <span className="block text-white font-medium">GOOGLE RATING</span>
            <span className="text-salon-gold font-bold">★ {SALON_INFO.googleRating} / 5.0</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-white font-medium">HOURS</span>
            <span>10 AM – 9 PM</span>
          </div>
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 text-salon-sand hover:text-salon-gold transition-colors tracking-widest text-[10px] uppercase py-2"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-salon-gold rounded-full" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};
