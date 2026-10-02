import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const MedicalBackground: React.FC = () => {
  // Generate random particles (representing cells/molecules)
  const [particles, setParticles] = useState<{ id: number, x: number, y: number, size: number, delay: number, duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2, // 2px to 8px
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020b16] z-0">
      {/* Deep Navy Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#071d3a] via-[#020b16] to-[#01060d]" />

      {/* Floating Particles (Cells/Molecules) */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
          animate={{
            opacity: [0, 0.2, 0],
            y: [`${p.y}vh`, `${p.y - 30}vh`]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute rounded-full bg-mosaic-gold/40 blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}

      {/* Animated EKG Line 1 (Primary Gold) */}
      <div className="absolute bottom-[30%] left-0 w-full h-40 opacity-20 flex items-center justify-center -rotate-3">
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
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Animated EKG Line 2 (Secondary Cyan/Blue) */}
      <div className="absolute top-[20%] right-0 w-full h-32 opacity-10 flex items-center justify-center rotate-2">
        <svg viewBox="0 0 1000 100" className="w-[200%] md:w-[120%] h-full stroke-cyan-400" preserveAspectRatio="none">
          <motion.path
            d="M0 50 L550 50 L570 15 L590 85 L610 35 L630 65 L640 50 L1000 50"
            fill="none"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Floating Medical Crosses */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, -5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[12%] text-mosaic-gold/10 font-sans font-light text-7xl select-none"
      >
        +
      </motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -20, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] text-cyan-500/10 font-sans font-light text-9xl select-none"
      >
        +
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] right-[25%] text-mosaic-gold/5 font-sans font-light text-5xl select-none"
      >
        +
      </motion.div>

      {/* Central Soft Radial Glow behind Crest */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-mosaic-gold/5 rounded-full blur-[120px]" />

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#01060d] to-transparent" />
    </div>
  );
};
