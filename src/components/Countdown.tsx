import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

export const Countdown: React.FC = () => {
  const { timeLeft, isLive } = useCountdown('2026-11-26T00:00:00+05:30');

  if (isLive) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="text-center my-8"
      >
        <h3 className="font-serif text-3xl md:text-5xl text-mosaic-gold text-glow">
          MOSAIC 2026 IS LIVE
        </h3>
      </motion.div>
    );
  }

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1 }}
      className="flex flex-wrap justify-center items-center gap-2 md:gap-4 lg:gap-6 mt-2 mb-8 px-4"
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="glass-panel w-24 h-24 md:w-32 md:h-32 rounded-xl flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-mosaic-gold/5 to-transparent pointer-events-none" />
            <span className="font-serif text-3xl md:text-5xl text-mosaic-cream font-medium tracking-wider text-glow mb-1">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] md:text-xs text-mosaic-gold tracking-[0.2em] uppercase font-medium">
              {unit.label}
            </span>
          </div>
          
          {index < timeUnits.length - 1 && (
            <div className="hidden sm:flex text-mosaic-gold text-lg md:text-xl text-glow opacity-60">
              ✦
            </div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};
