import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

export const Countdown: React.FC = () => {
  const { timeLeft, isLive } = useCountdown('2026-11-26T00:00:00+05:30');
  const reduceMotion = useReducedMotion();

  if (isLive) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative isolate my-2 flex w-full flex-col items-center px-4 py-2 text-center sm:my-3 sm:py-3"
        aria-live="polite"
      >
        {!reduceMotion && (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mosaic-gold/50 sm:h-56 sm:w-56"
              initial={{ opacity: 0.8, scale: 0.25 }}
              animate={{ opacity: 0, scale: 2.6 }}
              transition={{ duration: 2.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 1.3 }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mosaic-gold/30 sm:h-56 sm:w-56"
              initial={{ opacity: 0.5, scale: 0.4 }}
              animate={{ opacity: 0, scale: 2.2 }}
              transition={{ duration: 2.4, delay: 0.55, ease: 'easeOut', repeat: Infinity, repeatDelay: 1.1 }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mosaic-gold/15 blur-3xl sm:h-64 sm:w-64"
              animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.85, 1.18, 0.85] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        )}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.35, duration: 0.65 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-mosaic-gold/45 bg-mosaic-navy/70 px-4 py-2 shadow-[0_0_24px_rgba(217,164,65,.18)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            {!reduceMotion && <motion.span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" animate={{ scale: [1, 2.2], opacity: [0.75, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-100 sm:text-xs">Happening Now</span>
        </motion.div>

        <h3 aria-label="MOSAIC 2026 IS LIVE" className="font-serif text-3xl font-semibold uppercase tracking-[0.12em] text-mosaic-gold text-glow sm:text-5xl md:text-6xl">
          <span className="block overflow-hidden pb-1">
            {'MOSAIC 2026'.split('').map((letter, index) => (
              <motion.span
                key={`mosaic-${index}`}
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: '110%', rotateX: -70 }}
                animate={{ opacity: 1, y: '0%', rotateX: 0 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.6 + index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00a0' : letter}
              </motion.span>
            ))}
          </span>
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: reduceMotion ? 0 : 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1 inline-block bg-gradient-to-r from-[#f6dfa6] via-mosaic-gold to-[#f6dfa6] bg-clip-text text-transparent"
          >
            IS LIVE
          </motion.span>
        </h3>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.65, duration: 0.7 }}
          className="mt-3 h-px w-40 bg-gradient-to-r from-transparent via-mosaic-gold/80 to-transparent sm:w-56"
          aria-hidden="true"
        />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 1.9, duration: 0.6 }}
          className="mt-2 text-[10px] uppercase tracking-[0.26em] text-mosaic-cream/65 sm:text-xs"
        >
          Where every piece belongs
        </motion.p>
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
            <div className="hidden sm:flex text-mosaic-gold text-lg md:text-xl text-glow opacity-60">✦</div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};
