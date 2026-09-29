import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'ARTISTS', href: '#artists' },
    { label: 'WORK', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-salon-beige/90 backdrop-blur-md border-b border-salon-sand/50 shadow-sm'
            : 'py-6 bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Monogram */}
          <a href="#" className="group flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="Dyno Art Salon logo"
              className="w-10 h-10 rounded-full object-cover ring-1 ring-salon-gold/40"
            />
            <div className="flex flex-col">
              <span className={`font-serif text-xl tracking-[0.2em] font-semibold uppercase leading-tight ${
                isScrolled ? 'text-salon-darkBrown' : 'text-white'
              }`}>
                DYNO ART
              </span>
              <span className={`text-[9px] font-sans tracking-[0.35em] uppercase font-light ${
                isScrolled ? 'text-salon-muted' : 'text-white/70'
              }`}>
                SALON • BESANT NAGAR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-sans font-medium tracking-[0.2em] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? 'text-salon-charcoal hover:text-salon-deepBrown after:bg-salon-deepBrown'
                    : 'text-white/90 hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              data-cursor="BOOK"
              className="px-6 py-2.5 bg-salon-deepBrown text-white text-xs font-sans font-medium tracking-[0.25em] uppercase rounded-full hover:bg-salon-darkBrown transition-all transform hover:scale-105 shadow-md"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 rounded-full border transition-colors ${
              isScrolled ? 'border-salon-deepBrown/30 text-salon-darkBrown' : 'border-white/40 text-white'
            }`}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-salon-darkBrown text-white flex flex-col justify-between p-8 overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-salon-gold text-salon-gold flex items-center justify-center font-serif">
                  DA
                </div>
                <span className="font-serif tracking-widest text-lg">DYNO ART SALON</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="my-auto py-12 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="font-serif text-3xl md:text-4xl tracking-wider text-salon-sand hover:text-salon-gold transition-colors flex items-center justify-between group border-b border-white/10 pb-4"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-sans tracking-widest text-white/40 group-hover:text-salon-gold">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile CTAs & Info */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  BOOK AN APPOINTMENT
                </button>

                <a
                  href={`tel:${SALON_INFO.phonePrimary}`}
                  className="w-full py-3 border border-white/30 text-white font-sans text-xs font-semibold tracking-widest uppercase rounded-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-salon-gold" />
                  CALL SALON: {SALON_INFO.phonePrimary}
                </a>
              </div>

              <div className="text-center text-[10px] tracking-widest text-white/50 uppercase pt-2">
                Besant Nagar • Chennai • Open 10 AM – 9 PM
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
