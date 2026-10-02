import React from 'react';
import { motion } from 'framer-motion';
import { Crest } from './Crest';
import { Countdown } from './Countdown';
import { CTAButtons } from './CTAButtons';
import { StethoscopeDecor } from './StethoscopeDecor';


export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-mosaic-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/80 via-transparent to-mosaic-navy/90" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mosaic-gold/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.15) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3 }}></div>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-mosaic-navy to-transparent opacity-90" />
      </div>

      <StethoscopeDecor />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6">
        <Crest />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="mt-8 mb-2 text-center w-full max-w-[600px] md:max-w-[800px]"
        >
          <img 
            src="/mosaic-text-logo.png" 
            alt="Mosaic 2026 - Where Every Piece Belongs" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="text-center mb-0 mt-6"
        >
          <div className="font-serif text-3xl md:text-[36px] text-mosaic-cream tracking-wide mb-2 flex justify-center items-center">
            <span>26</span>
            <span className="text-mosaic-gold/60 mx-4 font-light text-2xl md:text-[30px]">|</span>
            <span>27</span>
            <span className="text-mosaic-gold/60 mx-4 font-light text-2xl md:text-[30px]">|</span>
            <span>28</span>
            <span className="text-mosaic-gold/60 mx-4 font-light text-2xl md:text-[30px]">|</span>
            <span>29</span>
          </div>
          <div className="font-serif text-2xl md:text-[28px] text-mosaic-gold tracking-normal mt-1">
            November 2026
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="text-mosaic-gold text-lg md:text-xl text-glow mt-4 mb-2"
        >
          ✦
        </motion.div>

        <Countdown />
        <CTAButtons />
      </div>
    </section>
  );
};
