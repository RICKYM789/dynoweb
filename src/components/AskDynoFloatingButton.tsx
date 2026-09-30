import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AskDynoFloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const AskDynoFloatingButton: React.FC<AskDynoFloatingButtonProps> = ({ isOpen, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
        >
          {/* Subtle Ambient Pulse Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-salon-gold/50 via-salon-sand/30 to-salon-gold/50 blur-md opacity-60 animate-pulse pointer-events-none" />

          {/* Radar Ping Ring */}
          <div className="absolute -inset-1.5 rounded-full border border-salon-gold/40 animate-ping pointer-events-none opacity-40" />

          <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-4 py-2.5 sm:px-5 sm:py-3 bg-salon-darkBrown/95 text-salon-beige rounded-full border border-salon-gold/60 shadow-[0_10px_30px_rgba(43,29,23,0.6)] backdrop-blur-md hover:border-salon-gold hover:shadow-[0_12px_35px_rgba(199,169,107,0.4)] transition-all duration-300 flex items-center gap-3 group overflow-hidden"
            aria-label="Open AI Stylist Concierge"
          >
            {/* Shimmer light sweep */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Scissors Artistry Icon with realistic mechanical snip animation */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-salon-gold/15 border border-salon-gold/40 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-salon-gold drop-shadow-[0_0_6px_rgba(199,169,107,0.7)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Upper blade (Loop at top-left + blade to bottom-right) */}
                <motion.g
                  animate={
                    isHovered
                      ? { rotate: [0, -18, 0, -18, 0, -18, 0] }
                      : { rotate: [0, -14, 0, -14, 0] }
                  }
                  transition={{
                    duration: isHovered ? 0.6 : 1.2,
                    repeat: Infinity,
                    repeatDelay: isHovered ? 0.3 : 3,
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: "12px 12px" }}
                >
                  <circle cx="6" cy="6" r="3" />
                  <path d="M8.12 8.12 L12 12 L20 20" />
                </motion.g>

                {/* Lower blade (Loop at bottom-left + blade to top-right) */}
                <motion.g
                  animate={
                    isHovered
                      ? { rotate: [0, 18, 0, 18, 0, 18, 0] }
                      : { rotate: [0, 14, 0, 14, 0] }
                  }
                  transition={{
                    duration: isHovered ? 0.6 : 1.2,
                    repeat: Infinity,
                    repeatDelay: isHovered ? 0.3 : 3,
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: "12px 12px" }}
                >
                  <circle cx="6" cy="18" r="3" />
                  <path d="M8.12 15.88 L12 12 L20 4" />
                </motion.g>

                {/* Golden pivot screw */}
                <circle cx="12" cy="12" r="1.1" fill="#C7A96B" stroke="none" />
              </svg>

              {/* Sparkle particle floating near scissors tip */}
              <motion.div
                animate={{
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 90, 180]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1 -right-1 pointer-events-none"
              >
                <Sparkles className="w-3 h-3 text-salon-gold fill-salon-gold" />
              </motion.div>
            </div>

            {/* Typography & Status */}
            <div className="flex flex-col text-left pr-1">
              <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-salon-gold uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                AI CONCIERGE
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold tracking-widest text-salon-beige uppercase group-hover:text-white transition-colors">
                ASK DYNO
              </span>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
