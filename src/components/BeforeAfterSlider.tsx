import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SlidersHorizontal } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/salonData';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = BEFORE_AFTER_DATA[activePairIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 md:py-36 bg-salon-darkBrown text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-gold block">
            REVEAL THE RESULTS
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-beige uppercase">
            BEFORE & <span className="italic text-salon-gold font-italiana lowercase pl-2">after.</span>
          </h2>
          <p className="font-sans text-sm md:text-base font-light text-salon-sand/80">
            Slide horizontally to experience the real structural & texture transformation crafted by our master stylists.
          </p>
        </div>

        {/* Slider Pair Selectors */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {BEFORE_AFTER_DATA.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePairIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all ${
                activePairIndex === idx
                  ? 'bg-salon-gold text-salon-darkBrown shadow-md'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {pair.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/15 cursor-ew-resize select-none bg-black"
        >
          {/* AFTER Image (Background) */}
          <img
            src={activePair.afterImage}
            alt="After Transformation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 z-10 bg-salon-darkBrown/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-salon-gold/40 text-[11px] font-sans font-bold tracking-widest uppercase text-salon-gold">
            AFTER
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={activePair.beforeImage}
              alt="Before Transformation"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
            <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[11px] font-sans font-bold tracking-widest uppercase text-white">
              BEFORE
            </div>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-salon-gold shadow-[0_0_15px_rgba(199,169,107,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-salon-gold text-salon-darkBrown flex items-center justify-center shadow-2xl border-2 border-white">
              <SlidersHorizontal className="w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>

        {/* Transformation Notes */}
        <div className="max-w-2xl mx-auto mt-8 text-center bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-sans font-bold tracking-widest text-salon-gold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activePair.service} • {activePair.stylist}</span>
          </div>
          <p className="text-sm font-sans text-salon-sand font-light">
            "{activePair.notes}"
          </p>
        </div>

      </div>
    </section>
  );
};
