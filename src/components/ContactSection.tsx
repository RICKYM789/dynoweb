import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 md:py-36 bg-salon-darkBrown text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-gold block">
            VISIT OUR STUDIO
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-beige uppercase">
            COME SAY <span className="italic text-salon-gold font-italiana lowercase pl-2">hello.</span>
          </h2>
          <p className="font-sans text-sm md:text-base font-light text-salon-sand/80">
            Located in the heart of Besant Nagar, Chennai. Experience your personal style transformation in a tranquil luxury atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-salon-gold">
                <MapPin className="w-6 h-6" />
                <h3 className="font-serif text-2xl font-light text-salon-beige">
                  {SALON_INFO.name}
                </h3>
              </div>
              <p className="font-sans text-sm font-light text-salon-sand/90 leading-relaxed pl-9">
                {SALON_INFO.address}
              </p>
              <div className="pl-9 pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase text-salon-gold hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Hours & Phone Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-salon-gold">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-sans font-bold tracking-widest uppercase">CALL US</span>
                </div>
                <div className="space-y-1 pt-1 font-sans text-xs text-salon-sand">
                  <a href={`tel:${SALON_INFO.phonePrimary}`} className="block hover:text-salon-gold">
                    {SALON_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${SALON_INFO.phoneSecondary}`} className="block hover:text-salon-gold">
                    {SALON_INFO.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-salon-gold">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs font-sans font-bold tracking-widest uppercase">STUDIO HOURS</span>
                </div>
                <p className="font-sans text-xs text-salon-sand pt-1">
                  10:00 AM – 9:00 PM<br />
                  <span className="text-white/50 text-[10px] uppercase">Open 7 Days A Week</span>
                </p>
              </div>

            </div>

            {/* Email & Actions */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-salon-gold">
                <Mail className="w-5 h-5" />
                <span className="text-xs font-sans font-bold tracking-widest uppercase">EMAIL ENQUIRIES</span>
              </div>
              <a href={`mailto:${SALON_INFO.email}`} className="font-sans text-xs text-salon-sand hover:text-salon-gold block">
                {SALON_INFO.email}
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="py-3 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>BOOK APPOINTMENT</span>
                </button>

                <a
                  href={`https://wa.me/918778277514?text=Hi%20Dyno%20Art%20Salon,%20I'd%20like%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 border border-white/30 text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:border-salon-gold hover:text-salon-gold transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-square lg:aspect-auto lg:h-full relative min-h-[400px]">
            <iframe
              title="Dyno Art Salon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.351234567!2d80.2668!3d13.0003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267001dddbbbb%3A0xee75b637bbd044fa!2sDyno%20Art%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-salon-darkBrown/90 backdrop-blur-md px-4 py-2 rounded-xl text-white border border-white/10 text-xs font-sans font-bold tracking-widest uppercase text-salon-gold">
              BESANT NAGAR • CHENNAI
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
