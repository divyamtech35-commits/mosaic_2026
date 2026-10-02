import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

export const StethoscopeDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Bottom Left Stethoscope */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          y: [0, -15, 0],
          rotate: [-15, -10, -15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[5%] md:left-[10%] text-mosaic-gold drop-shadow-[0_0_20px_rgba(217,164,65,0.5)]"
      >
        <Stethoscope size={240} strokeWidth={1} />
      </motion.div>

      {/* Center Right Stethoscope */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 45 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          y: [0, 20, 0],
          rotate: [45, 50, 45]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[25%] right-[5%] md:right-[15%] text-mosaic-gold drop-shadow-[0_0_15px_rgba(217,164,65,0.4)]"
      >
        <Stethoscope size={180} strokeWidth={0.75} />
      </motion.div>
      {/* Animated EKG Line (Heartbeat) */}
      <div className="absolute bottom-[25%] left-0 w-full h-32 opacity-25 flex items-center justify-center pointer-events-none mix-blend-screen">
        <svg viewBox="0 0 1000 100" className="w-[150%] md:w-full h-full stroke-mosaic-gold" preserveAspectRatio="none">
          <motion.path
            d="M0 50 L350 50 L370 20 L400 90 L430 10 L450 70 L470 50 L1000 50"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>
    </div>
  );
};
