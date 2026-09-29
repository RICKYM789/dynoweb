import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-salon-darkBrown text-white border-t border-white/10 pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top Split: Oversized Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-12">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-gold block">
              DYNO ART SALON • CHENNAI
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light uppercase tracking-tight text-salon-beige">
              HAIR IS ART. YOUR STYLIST IS AN ARTIST.<br />
              <span className="italic font-normal text-salon-gold font-italiana lowercase">
                your transformation is the experience.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full border border-white/20 text-white hover:border-salon-gold hover:text-salon-gold transition-colors flex items-center justify-center group"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 font-sans text-xs">
          
          {/* Col 1: Brand & Monogram */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="Dyno Art Salon logo"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-salon-gold/40"
              />
              <span className="font-serif text-xl tracking-widest text-salon-beige">
                DYNO ART SALON
              </span>
            </div>
            <p className="text-salon-sand/70 font-light leading-relaxed">
              Modern unisex hair & beauty destination in Besant Nagar, Chennai. Precision cuts, hair coloring, keratin smoothing & luxury spa rituals.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest text-salon-gold uppercase">EXPLORE</h4>
            <ul className="space-y-2 text-salon-sand/80 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">SIGNATURE SERVICES</a></li>
              <li><a href="#artists" className="hover:text-white transition-colors">MEET OUR ARTISTS</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">TRANSFORMATION GALLERY</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">GOOGLE REVIEWS</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">STUDIO LOCATION</a></li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest text-salon-gold uppercase">SPECIALTIES</h4>
            <ul className="space-y-2 text-salon-sand/80 font-light">
              <li>Brazilian Keratin Therapy</li>
              <li>Architectural Hair Sculpting</li>
              <li>Dimensional Balayage & Highlights</li>
              <li>Men's Skin Fades & Beard Art</li>
              <li>High-Fashion & Event Beauty</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest text-salon-gold uppercase">LOCATION</h4>
            <p className="text-salon-sand/80 font-light leading-relaxed">
              First Floor, 22, 5th Ave,<br />
              Tiruvalluvar Nagar, Besant Nagar,<br />
              Chennai, Tamil Nadu 600090
            </p>
            <div className="pt-2">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-salon-gold hover:underline font-bold uppercase tracking-widest"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@dynosalon</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans tracking-widest text-white/40 uppercase">
          <div>
            © {new Date().getFullYear()} DYNO ART SALON. ALL RIGHTS RESERVED.
          </div>
          <div>
            BESANT NAGAR • CHENNAI • TAMIL NADU
          </div>
        </div>

      </div>
    </footer>
  );
};
