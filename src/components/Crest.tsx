import React from 'react';
import { motion } from 'framer-motion';

export const Crest: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[320px] md:max-w-[480px] lg:max-w-[550px] mx-auto z-10">
      {/* Orbital golden lines behind the logo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 flex aspect-square h-[130%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="relative h-full w-full rounded-full border border-dashed border-mosaic-gold/30 orbital-spin">
            {/* Dot riding the outer orbit */}
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mosaic-gold shadow-[0_0_10px_rgba(217,164,65,0.8)]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 flex aspect-square h-[110%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="relative h-full w-full rounded-full border-[0.5px] border-mosaic-gold/20 orbital-spin-reverse">
            {/* Dot riding the inner orbit */}
            <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-mosaic-gold shadow-[0_0_8px_rgba(217,164,65,0.8)]" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="relative w-full z-10"
      >
        <img 
          src="/mosaic-logo.png" 
          alt="Mosaic 2026 Logo" 
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(217,164,65,0.3)] rounded-3xl"
        />
      </motion.div>
    </div>
  );
};
