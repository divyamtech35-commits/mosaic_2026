import React from 'react';
import { motion } from 'framer-motion';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ParchmentCard: React.FC<PremiumCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`relative rounded-xl p-8 md:p-16 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${className}`}
      style={{
        background: 'rgba(8, 28, 55, 0.90)',
        border: '1px solid rgba(201, 162, 39, 0.35)'
      }}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C9A227]/60"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C9A227]/60"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C9A227]/60"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C9A227]/60"></div>

      <div className="relative z-10 text-[#F5EBD2]">
        {children}
      </div>
    </motion.div>
  );
};
