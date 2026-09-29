import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const HairStrandSVG: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top sticky scroll progress strand */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-salon-gold via-salon-sand to-salon-deepBrown origin-left"
        style={{ scaleX }}
      />

      {/* Decorative flowing strand in background margin */}
      <svg
        className="fixed right-0 top-1/4 h-[600px] w-48 opacity-15 pointer-events-none hidden lg:block z-0"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 100 0 C 180 200, 20 400, 150 600 C 220 700, 80 750, 100 800"
          stroke="url(#hairGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C7A96B" />
            <stop offset="50%" stopColor="#4A3328" />
            <stop offset="100%" stopColor="#E7DDD1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
