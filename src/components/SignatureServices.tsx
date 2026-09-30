import React, { useState, useRef } from 'react';
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
  const [previewY, setPreviewY] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const filteredServices = SERVICES_DATA.filter((s) => s.category === activeCategory);
  const selectedService = SERVICES_DATA.find((s) => s.id === activeServiceId) || filteredServices[0];

  const handleServiceHover = (serviceId: string, e: React.MouseEvent<HTMLDivElement>) => {
    setActiveServiceId(serviceId);
    if (e.currentTarget && containerRef.current) {
      const itemTop = e.currentTarget.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const cardHeight = cardRef.current ? cardRef.current.offsetHeight : 400;
      const maxTop = Math.max(0, containerHeight - cardHeight);
      setPreviewY(Math.min(itemTop, maxTop));
    }
  };

  const handleServiceClick = (serviceId: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setActiveServiceId((prev) => (prev === serviceId ? '' : serviceId));
    } else {
      setActiveServiceId(serviceId);
    }
    if (e.currentTarget && containerRef.current) {
      const itemTop = e.currentTarget.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const cardHeight = cardRef.current ? cardRef.current.offsetHeight : 400;
      const maxTop = Math.max(0, containerHeight - cardHeight);
      setPreviewY(Math.min(itemTop, maxTop));
    }
  };

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
                  setPreviewY(0);
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

        {/* Gallery-Style Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Interactive Service List */}
          <div ref={containerRef} className="lg:col-span-6 space-y-2">
            {filteredServices.map((service, index) => {
              const isActive = selectedService.id === service.id;
              const formattedNumber = index < 10 ? `0${index}` : `${index}`;

              return (
                <motion.div
                  key={service.id}
                  onMouseEnter={(e) => handleServiceHover(service.id, e)}
                  onClick={(e) => handleServiceClick(service.id, e)}
                  className={`group cursor-pointer p-4 md:p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 border-salon-gold/60 shadow-lg translate-x-1 sm:translate-x-2'
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

                  {/* Accordion view for mobile & tablet screens */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-4 pt-4 border-t border-white/10 lg:hidden overflow-hidden space-y-3.5"
                      >
                        {/* Parallel Side-by-Side: Image aligned to the side of the text */}
                        <div className="flex flex-row gap-3.5 sm:gap-4 items-start">
                          {/* Image aligned parallel to text */}
                          <div className="relative w-24 sm:w-32 aspect-[4/5] rounded-xl overflow-hidden shrink-0 border border-salon-gold/30 shadow-md bg-salon-charcoal group/mobimg">
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/mobimg:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            
                            {service.duration && (
                              <span className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-center gap-1 text-[9px] font-sans font-medium text-white/95 bg-black/70 backdrop-blur-xs px-1.5 py-0.5 rounded border border-white/10">
                                <Clock className="w-2.5 h-2.5 text-salon-gold shrink-0" />
                                <span className="truncate">{service.duration}</span>
                              </span>
                            )}
                          </div>

                          {/* Text aligned parallel to image */}
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="flex items-center gap-1.5 text-[10px] font-sans tracking-wider text-salon-gold uppercase font-semibold">
                              <Sparkles className="w-3 h-3 text-salon-gold shrink-0" />
                              <span>{service.category} ARTISTRY</span>
                            </div>

                            <p className="text-xs font-sans text-salon-sand/90 font-light leading-relaxed">
                              {service.description}
                            </p>

                            {/* Service Highlights (if available) */}
                            {service.highlights && service.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-1 pt-0.5">
                                {service.highlights.map((highlight, hIdx) => (
                                  <span
                                    key={hIdx}
                                    className="text-[9px] font-sans tracking-wide px-2 py-0.5 rounded-full bg-salon-gold/10 border border-salon-gold/25 text-salon-gold font-medium"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Book CTA Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(service.name);
                          }}
                          className="w-full py-2.5 sm:py-3 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-salon-sand active:scale-[0.98] transition-all"
                        >
                          <span>BOOK THIS SERVICE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Preview Display Card smooth-gliding to align right next to hovered service */}
          <div className="hidden lg:block lg:col-span-6 relative min-h-[450px]">
            <motion.div
              ref={cardRef}
              animate={{ y: previewY }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-end p-6 md:p-8 bg-salon-darkBrown group/card cursor-pointer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <img
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-salon-darkBrown via-salon-darkBrown/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Content Overlay */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between text-xs font-sans tracking-widest text-salon-gold uppercase">
                  <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-salon-gold/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    {selectedService.category} ARTISTRY
                  </span>
                  {selectedService.duration && (
                    <span className="flex items-center gap-1 text-white/90 bg-black/50 px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-salon-gold" />
                      {selectedService.duration}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-3xl text-salon-beige font-light leading-tight">
                  {selectedService.name}
                </h3>

                <p className="text-xs font-sans text-salon-sand font-light leading-relaxed line-clamp-3">
                  {selectedService.description}
                </p>

                <button
                  onClick={() => onSelectService(selectedService.name)}
                  className="w-full py-3 bg-salon-gold text-salon-darkBrown font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
