import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { INSTAGRAM_STORIES_DATA, SALON_INFO } from '../data/salonData';

export const InstagramStories: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-salon-beige text-salon-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-salon-sand pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-[0.3em] uppercase text-salon-deepBrown mb-2">
              <span className="px-2.5 py-0.5 bg-salon-deepBrown text-white rounded-full">
                INSTAGRAM REELS
              </span>
              <span>{SALON_INFO.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-salon-darkBrown uppercase">
              CLIENT <span className="italic text-salon-gold font-italiana lowercase pl-2">stories.</span>
            </h2>
          </div>

          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-salon-deepBrown text-salon-deepBrown font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-salon-deepBrown hover:text-white transition-all self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 9:16 Vertical Video Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {INSTAGRAM_STORIES_DATA.map((story) => (
            <motion.a
              key={story.id}
              href={story.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-cursor="PLAY"
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-salon-sand bg-salon-darkBrown block"
            >
              {/* Thumbnail Image */}
              <img
                src={story.thumbnail}
                alt={story.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-salon-darkBrown via-transparent to-black/30" />

              {/* Top Instagram Icon */}
              <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-salon-gold/90 text-salon-darkBrown flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-salon-darkBrown ml-0.5" />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-salon-gold block">
                  {story.category}
                </span>
                <h4 className="font-serif text-xs font-light text-salon-beige line-clamp-2 leading-snug">
                  {story.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
