import React from 'react';
import { motion } from 'framer-motion';

export const AboutFooter: React.FC = () => {
  return (
    <div className="w-full relative py-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Cinematic Background Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-mosaic-navy to-mosaic-navy opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mosaic-gold/10 via-transparent to-transparent opacity-50 blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h2 
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F8E9C6] tracking-[0.2em] uppercase mb-8"
          style={{ textShadow: '0 0 30px rgba(201,162,39,0.3)' }}
        >
          Where Every Piece Belongs
        </h2>
        
        <p className="font-sans text-[#F8E9C6]/70 text-lg md:text-xl tracking-wide mb-12 max-w-2xl font-light">
          One festival. Many talents. One unforgettable experience.
        </p>
        
        <a 
          href="#explore"
          className="px-10 py-4 rounded-full bg-[#E9C978] text-[#071A3D] font-sans font-semibold tracking-widest text-sm md:text-base hover:bg-[#F8E9C6] transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(201,162,39,0.2)] hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
        >
          EXPLORE MOSAIC
        </a>
      </motion.div>
      
      {/* Decorative Gold Particles/Stars */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(201,162,39,0.15) 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }}
      />
    </div>
  );
};
