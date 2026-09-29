import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import type { Service } from '../data/salonData';

interface SignatureServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'HAIR' | 'GROOMING' | 'BEAUTY'>('HAIR');
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const filteredServices = SERVICES_DATA.filter((s) => s.category === activeCategory);
  const selectedService = SERVICES_DATA.find((s) => s.id === activeServiceId) || filteredServices[0];

  return (
    <section id="services" className="py-24 md:py-36 bg-salon-darkBrown text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-gold block mb-2">
              CURATED ARTISTRY MENU
            </span>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-beige uppercase">
              SIGNATURE <span className="italic text-salon-gold font-italiana lowercase pl-2">services.</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {(['HAIR', 'GROOMING', 'BEAUTY'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const firstInCat = SERVICES_DATA.find((s) => s.category === cat);
                  if (firstInCat) setActiveServiceId(firstInCat.id);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-salon-gold text-salon-darkBrown shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List of Services with Side-by-Side Image Cards */}
        <div className="space-y-4">
          {filteredServices.map((service, index) => {
            const isActive = selectedService.id === service.id;
            const formattedNumber = index < 10 ? `0${index}` : `${index}`;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setActiveServiceId(service.id)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Service Name Item */}
                <motion.div
                  className={`group cursor-pointer p-5 rounded-xl border transition-all duration-300 lg:col-span-6 ${
                    isActive
                      ? 'bg-white/10 border-salon-gold/60 shadow-lg translate-x-2'
                      : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-sans tracking-widest font-semibold ${
                        isActive ? 'text-salon-gold' : 'text-white/40'
                      }`}>
                        {formattedNumber}
                      </span>
                      <h3 className={`font-serif text-xl md:text-2xl tracking-wide transition-colors ${
                        isActive ? 'text-salon-gold font-normal' : 'text-salon-sand group-hover:text-white font-light'
                      }`}>
                        {service.name}
                      </h3>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'rotate-45 text-salon-gold scale-110' : 'text-white/30 group-hover:text-white'
                    }`} />
                  </div>

                  {/* Accordion view for small mobile screens */}
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-white/10 lg:hidden text-xs font-sans text-salon-sand/80 space-y-3"
                    >
                      <p>{service.description}</p>
                      <button
                        onClick={() => onSelectService(service.name)}
                        className="w-full py-2 bg-salon-gold text-salon-darkBrown font-bold uppercase text-[10px] tracking-widest rounded-lg"
                      >
                        BOOK THIS SERVICE
                      </button>
                    </motion.div>
                  )}
                </motion.div>

                {/* Right Column: Preview Image displayed EXACTLY to the right side of the hovered service text */}
                <div className="hidden lg:block lg:col-span-6 min-h-[180px]">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 20, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.96 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        transition={{ duration: 0.25 }}
                        className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-end p-6 bg-salon-darkBrown group/card cursor-pointer"
                      >
                        <img
                          src={service.image}
                          alt={service.name}
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-transform duration-700 group-hover/card:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-salon-darkBrown via-salon-darkBrown/30 to-transparent" />

                        {/* Content Overlay */}
                        <div className="relative z-10 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-sans tracking-widest text-salon-gold uppercase">
                            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-salon-gold/30">
                              <Sparkles className="w-3 h-3" />
                              {service.category} ARTISTRY
                            </span>
                            {service.duration && (
                              <span className="flex items-center gap-1 text-white/90 bg-black/50 px-2.5 py-0.5 rounded-full">
                                <Clock className="w-3 h-3 text-salon-gold" />
                                {service.duration}
                              </span>
                            )}
                          </div>

                          <p className="text-xs font-sans text-salon-sand font-light leading-relaxed line-clamp-2">
                            {service.description}
                          </p>

                          <button
                            onClick={() => onSelectService(service.name)}
                            className="w-full py-2.5 bg-salon-gold text-salon-darkBrown font-sans text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
                          >
                            <span>BOOK THIS SERVICE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
