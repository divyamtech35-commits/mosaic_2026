import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const sponsors = [
  {
    category: 'Healthcare',
    partners: [
      { name: 'Navita Pharmaceuticals', role: 'Pharma Partner', logo: '/sponsors/navita.png' },
      { name: 'Sterling Accuris', role: 'Diagnostic Partner', logo: '/sponsors/sterling-accuris.png' },
    ],
  },
  {
    category: 'Festival & fitness',
    partners: [
      { name: 'Coca-Cola', role: 'Beverage Partner', logo: '/sponsors/coca-cola.png' },
      { name: 'Monster Energy', role: 'Energy Partner', logo: '/sponsors/monster.png' },
      { name: 'The Gym World', role: 'Fitness Partner', logo: '/sponsors/gym-world.png' },
    ],
  },
  {
    category: 'Food partners',
    partners: [
      { name: 'Chiwale', role: 'Food Partner', logo: '/sponsors/chiwale.png' },
      { name: 'El Mexicano', role: 'Food Partner', logo: '/sponsors/el-mexicano.png' },
      { name: 'Parkar Ice Cream', role: 'Food Partner', logo: '/sponsors/parkar.png' },
      { name: 'Tiramisu', role: 'Food Partner', logo: '/sponsors/tiramisu.png' },
    ],
  },
  {
    category: 'Experience & style',
    partners: [
      { name: 'Pride Elite', role: 'Hospitality Partner', logo: '/sponsors/pride-elite.png' },
      { name: 'White Carbon', role: 'Experience & Entertainment Partner', logo: '/sponsors/white-carbon.png' },
      { name: 'Toni & Guy Gandhinagar', role: 'Styling Partner', logo: '/sponsors/toni-guy.png' },
      { name: 'Nakoda Jewellers', role: 'Jewellery Partner', logo: '/sponsors/nakoda-jewellers.png' },
    ],
  },
];

const affiliations = [
  { name: 'Indian Medical Association, Gujarat State Branch', logo: '/sponsors/gujarat-state-branch.png' },
  { name: 'GMERS Medical College, Gandhinagar', logo: '/sponsors/gmers.png' },
];

export const Sponsors: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-mosaic-navy font-sans text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06172a]/45 via-transparent to-[#06172a]/75" />
        <motion.div
          className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-mosaic-gold/[0.09] blur-[100px]"
          animate={reduceMotion ? undefined : { x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-44 top-[38%] h-96 w-96 rounded-full bg-sky-400/[0.08] blur-[110px]"
          animate={reduceMotion ? undefined : { x: [0, -65, 0], y: [0, -48, 0], scale: [1, 1.16, 1], opacity: [0.45, 0.95, 0.45] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 left-[28%] h-80 w-80 rounded-full bg-mosaic-gold/[0.07] blur-[100px]"
          animate={reduceMotion ? undefined : { x: [0, 55, 0], y: [0, -45, 0], scale: [1, 1.14, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, rgba(232,192,112,.8) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        {[
          { left: '12%', top: '18%', delay: 0 }, { left: '78%', top: '14%', delay: 1.4 },
          { left: '62%', top: '33%', delay: 2.6 }, { left: '22%', top: '52%', delay: 0.8 },
          { left: '86%', top: '63%', delay: 2 }, { left: '43%', top: '78%', delay: 3.2 },
          { left: '9%', top: '88%', delay: 1.9 }, { left: '71%', top: '92%', delay: 0.4 },
        ].map((star, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-[#f2cb79] shadow-[0_0_10px_2px_rgba(242,203,121,.45)]"
            style={{ left: star.left, top: star.top }}
            animate={reduceMotion ? undefined : { opacity: [0.18, 0.9, 0.18], scale: [0.7, 1.35, 0.7] }}
            transition={{ duration: 3.5, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="relative z-10">
      <Navbar />

      <header className="px-5 pb-8 pt-32 text-center sm:pb-10 sm:pt-36">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mosaic-gold">MOSAIC 2026</p>
        <h1 className="mt-3 font-serif text-4xl uppercase tracking-[0.12em] sm:text-5xl">Our Partners</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/65">
          With thanks to the partners supporting our celebration.
        </p>
      </header>

      <div className="mx-auto max-w-3xl space-y-8 px-4 pb-14 sm:space-y-10 sm:px-6 sm:pb-20">
        {sponsors.map((group, groupIndex) => (
          <section key={group.category} aria-labelledby={`sponsor-category-${groupIndex}`}>
            <h2 id={`sponsor-category-${groupIndex}`} className="mb-3 border-b border-white/15 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-mosaic-gold sm:mb-4 sm:text-xs">
              {group.category}
            </h2>
            <div className="space-y-3">
              {group.partners.map((partner, index) => (
                <motion.article
                  key={partner.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  onMouseMove={reduceMotion ? undefined : (event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
                    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
                    event.currentTarget.style.setProperty('--card-rotate-x', `${rotateX}deg`);
                    event.currentTarget.style.setProperty('--card-rotate-y', `${rotateY}deg`);
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.setProperty('--card-rotate-x', '0deg');
                    event.currentTarget.style.setProperty('--card-rotate-y', '0deg');
                  }}
                  className="group relative min-h-[96px] rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_5px_18px_rgba(0,0,0,.12)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-mosaic-gold/60 hover:bg-white/[0.065] hover:shadow-[0_12px_32px_rgba(217,164,65,.16),0_0_18px_rgba(217,164,65,.1)] sm:min-h-[112px]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-lg border border-mosaic-gold/0 transition-colors duration-300 group-hover:border-mosaic-gold/25" aria-hidden="true" />
                  <div className="flex min-h-[96px] items-center gap-4 p-3 transition-transform duration-150 [transform:perspective(900px)_rotateX(var(--card-rotate-x,0deg))_rotateY(var(--card-rotate-y,0deg))] sm:min-h-[112px] sm:gap-5 sm:p-4">
                    <div className="flex h-[70px] w-[100px] shrink-0 items-center justify-center rounded-md bg-white p-2.5 sm:h-[80px] sm:w-[120px] sm:p-3">
                      <img src={partner.logo} alt={partner.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">{partner.name}</h3>
                      <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-mosaic-gold/85 sm:text-[10px]">{partner.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="affiliations-heading">
          <h2 id="affiliations-heading" className="mb-3 border-b border-white/15 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-mosaic-gold sm:mb-4 sm:text-xs">
            In association with
          </h2>
          <div className="space-y-3">
            {affiliations.map((partner) => (
              <article key={partner.name} className="flex min-h-[88px] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:gap-5 sm:p-4">
                <div className="flex h-[62px] w-[100px] shrink-0 items-center justify-center rounded-md bg-white p-2 sm:h-[72px] sm:w-[120px] sm:p-3">
                  <img src={partner.logo} alt={partner.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-xs font-medium leading-relaxed text-white/85 sm:text-sm">{partner.name}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      </div>
    </main>
  );
};
