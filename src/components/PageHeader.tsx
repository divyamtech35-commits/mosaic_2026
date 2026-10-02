import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="w-full pt-32 pb-8 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mosaic-gold/10 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-mosaic-gold/20 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-full px-2"
      >
        <h1 
          className="font-serif text-3xl md:text-5xl lg:text-7xl text-white tracking-[0.1em] md:tracking-[0.15em] text-center uppercase break-words"
          style={{ textShadow: '0 0 40px rgba(217,164,65,0.4)' }}
        >
          {title}
        </h1>
        
        <div className="flex items-center gap-6 mt-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-mosaic-gold/80"
          />
          <motion.div 
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-mosaic-gold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-mosaic-gold/80"
          />
        </div>
      </motion.div>
    </div>
  );
};
