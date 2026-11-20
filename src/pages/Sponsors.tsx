import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Sponsors: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-mosaic-navy font-sans text-white">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: "url('/backgroung_image.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03152b]/80 via-[#03152b]/75 to-[#020b16]" />
        <div className="absolute left-1/2 top-[30%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-mosaic-gold/[0.08] blur-[140px]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(217,164,65,.75) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        <section className="flex flex-1 flex-col items-center px-5 pb-20 pt-36 text-center md:pt-44">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-5xl"
          >
            <p className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.42em] text-mosaic-gold">
              <span className="h-px w-10 bg-mosaic-gold/60" /> MOSAIC 2026 <span className="h-px w-10 bg-mosaic-gold/60" />
            </p>
            <h1 className="mt-6 font-serif text-5xl uppercase leading-none tracking-[0.16em] text-white md:text-7xl" style={{ textShadow: '0 0 36px rgba(217,164,65,0.22)' }}>
              Our <span className="text-mosaic-gold">Partners</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-300/75 md:text-base">
              The people and organizations helping bring MOSAIC 2026 to life.
            </p>
          </motion.div>

          <motion.section
            aria-labelledby="partner-announcement"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative mt-14 w-full max-w-5xl overflow-hidden rounded-3xl border border-mosaic-gold/25 bg-[#06172a]/70 px-6 py-16 shadow-[0_24px_90px_rgba(0,0,0,.3)] backdrop-blur-sm md:mt-20 md:px-12 md:py-24"
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mosaic-gold/50 to-transparent" />
              <div className="absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-mosaic-gold/[0.08]" />
              <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-mosaic-gold/[0.07]" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mosaic-gold/[0.06] blur-3xl" />
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-mosaic-gold/40 md:h-28 md:w-28"
              aria-hidden="true"
            >
              <span className="absolute -top-1 h-2 w-2 rounded-full bg-mosaic-gold shadow-[0_0_14px_rgba(217,164,65,.9)]" />
              <Sparkles size={34} strokeWidth={1.2} className="text-mosaic-gold" />
            </motion.div>

            <h2 id="partner-announcement" className="relative mt-8 font-serif text-3xl tracking-wide text-white md:text-4xl">
              Partner lineup <span className="text-mosaic-gold">coming soon</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
              Our sponsorship partners are still being finalized. Check back soon to discover the organizations supporting this year’s celebration.
            </p>

            <div className="relative mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {['01', '02', '03'].map((slot, index) => (
                <motion.div
                  key={slot}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.12 }}
                  className={`flex h-24 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                  aria-label="Sponsor announcement placeholder"
                >
                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.24em] text-gray-600"><Star size={12} className="text-mosaic-gold/50" aria-hidden="true" /> To be announced</span>
                </motion.div>
              ))}
            </div>

            <p className="relative mt-8 text-[9px] uppercase tracking-[0.3em] text-gray-600">MOSAIC · 26—29 November 2026 · Gandhinagar</p>
          </motion.section>
        </section>
      </div>
      <Footer />
    </main>
  );
};
