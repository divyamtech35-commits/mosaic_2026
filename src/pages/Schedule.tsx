import React, { useEffect, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, BookOpen, Brain, Bone, Clock3, MapPin, Music, Scissors, Users, Waves } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const categories = [
  { id: 'workshops', label: 'Workshops', icon: Users },
  { id: 'quiz', label: 'Scientific Quiz', icon: BookOpen },
  { id: 'celebrity', label: 'Celebrity Night', icon: Activity },
  { id: 'cultural', label: 'Cultural Events', icon: Music },
] as const;

const workshopSchedule = [
  { name: 'ANALYTICA', date: '26 Nov 2026', time: '9 am – 1 pm', shortDate: '26 NOV', venue: 'College Auditorium', icon: Brain },
  { name: 'THEOREM', date: '26 Nov 2026', time: '9 am – 1 pm', shortDate: '26 NOV', venue: 'College Auditorium', icon: Activity },
  { name: 'INCISIO', date: '26 Nov 2026', time: '2 pm – 5 pm', shortDate: '26 NOV', venue: 'College Auditorium', icon: Scissors },
  { name: 'ORTHEX', date: '27 Nov 2026', time: '9 am – 1 pm', shortDate: '27 NOV', venue: 'College Auditorium', icon: Bone },
  { name: 'RHYTHMOS', date: '27 Nov 2026', time: '2 pm – 5 pm', shortDate: '27 NOV', venue: 'College Auditorium', icon: Waves },
];

export const Schedule: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]['id']>('workshops');
  const [selectedWorkshop, setSelectedWorkshop] = useState(0);
  const selected = workshopSchedule[selectedWorkshop];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-mosaic-navy font-sans">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('/backgroung_image.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/75 to-mosaic-navy/95" />
      </div>

      <div className="relative z-10 flex flex-grow flex-col">
        <Navbar />
        <section className="flex-grow px-5 pb-20 pt-32 md:px-8 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <header className="mb-10 text-left md:mb-12 md:flex md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-mosaic-gold/75">MOSAIC 2026 · 26—29 NOV</p>
                <h1 className="font-serif text-4xl uppercase leading-none tracking-[0.16em] text-white md:text-6xl">
                  The <span className="text-mosaic-gold">Night</span> Atlas
                </h1>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400 md:mt-0">A map of moments across four days. Choose a constellation to see what’s on.</p>
            </header>

            <div role="tablist" aria-label="Schedule categories" className="mb-9 flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const { id, label, icon: Icon } = category;
                const isActive = activeCategory === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    id={`schedule-tab-${id}`}
                    aria-selected={isActive}
                    aria-controls="schedule-panel"
                    onClick={() => setActiveCategory(id)}
                    className={`inline-flex min-h-12 items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold focus-visible:ring-offset-2 focus-visible:ring-offset-mosaic-navy ${isActive
                      ? 'border-mosaic-gold bg-mosaic-gold/10 text-mosaic-cream shadow-[0_0_18px_rgba(217,164,65,0.16)]'
                      : 'border-mosaic-gold/25 bg-[#06172a]/75 text-gray-300 hover:border-mosaic-gold/60 hover:text-white'
                      }`}
                  >
                    <Icon size={17} className={isActive ? 'text-mosaic-gold' : 'text-gray-400'} aria-hidden="true" />
                    <span>{label}{id === 'workshops'}</span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="schedule-panel"
              aria-labelledby={`schedule-tab-${activeCategory}`}
              className="relative overflow-hidden rounded-2xl border border-mosaic-gold/25 bg-[#06172a]/85 shadow-2xl shadow-black/20"
            >
              {activeCategory === 'workshops' ? (
                <>
                  <div className="relative overflow-hidden bg-[#030d1c] px-5 py-9 md:px-10 md:py-12">
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'radial-gradient(circle, rgba(226,196,130,.75) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
                      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
                      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-mosaic-gold/10 blur-[110px]" />
                    </div>

                    <div className="relative z-10 mb-8 flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-mosaic-gold/70">MOSAIC 2026 · Programme</p>
                        <h2 className="mt-2 font-serif text-2xl tracking-wide text-white md:text-3xl">Workshops</h2>
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-gray-400">26—28 November · Gandhinagar</span>
                    </div>

                    <div className="relative z-10 hidden md:block">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-mosaic-gold/70">Choose a workshop</p>
                          <p className="mt-1 text-xs text-gray-500">Swipe or scroll horizontally to explore</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs tracking-[0.18em] text-gray-500">0{selectedWorkshop + 1} / 05</span>
                          <button type="button" aria-label="Previous workshop" onClick={() => setSelectedWorkshop((selectedWorkshop + workshopSchedule.length - 1) % workshopSchedule.length)} className="rounded-full border border-white/15 p-2 text-gray-300 transition hover:border-mosaic-gold hover:text-mosaic-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold"><ArrowLeft size={16} /></button>
                          <button type="button" aria-label="Next workshop" onClick={() => setSelectedWorkshop((selectedWorkshop + 1) % workshopSchedule.length)} className="rounded-full border border-white/15 p-2 text-gray-300 transition hover:border-mosaic-gold hover:text-mosaic-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold"><ArrowRight size={16} /></button>
                        </div>
                      </div>

                      <div className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-5 scrollbar-hide">
                        {workshopSchedule.map((item, index) => {
                          const active = selectedWorkshop === index;
                          const Icon = item.icon;
                          return (
                            <button key={item.name} type="button" onClick={() => setSelectedWorkshop(index)} aria-pressed={active}
                              className={`relative min-h-64 w-[42%] min-w-[270px] max-w-[390px] shrink-0 snap-center overflow-hidden rounded-2xl border p-6 text-left transition duration-300 xl:w-[31%] ${active ? 'border-mosaic-gold/70 bg-gradient-to-br from-mosaic-gold/15 via-[#0a2038] to-[#061426] shadow-[0_12px_35px_rgba(0,0,0,.25)]' : 'border-white/10 bg-[#07182a]/90 hover:border-mosaic-gold/40'}`}>
                              <span className="absolute -right-4 -top-7 font-serif text-[150px] leading-none text-white/[0.035]" aria-hidden="true">0{index + 1}</span>
                              <div className="relative flex items-start justify-between">
                                <span className={`flex h-12 w-12 items-center justify-center rounded-full border ${active ? 'border-mosaic-gold bg-mosaic-gold text-mosaic-navy' : 'border-mosaic-gold/40 text-mosaic-gold'}`}><Icon size={19} aria-hidden="true" /></span>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-300">{item.shortDate}</span>
                              </div>
                              <div className="relative mt-8">
                                <p className="text-[10px] uppercase tracking-[0.24em] text-mosaic-gold">Workshop · 0{index + 1}</p>
                                <h3 className="mt-1 font-serif text-3xl tracking-[0.1em] text-white">{item.name}</h3>
                              </div>
                              <div className="relative mt-6 grid gap-2 border-t border-white/10 pt-4 text-sm text-gray-300">
                                <span className="flex items-center gap-2"><Clock3 size={15} className="shrink-0 text-mosaic-gold" aria-hidden="true" />{item.time}</span>
                                <span className="flex items-center gap-2"><MapPin size={15} className="shrink-0 text-mosaic-gold" aria-hidden="true" />{item.venue}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-1 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div><p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Selected event</p><p className="mt-1 font-serif text-lg tracking-wide text-white">{selected.name}<span className="ml-3 font-sans text-xs text-gray-400">{selected.date} · {selected.time}</span></p></div>
                        <button type="button" onClick={() => window.location.hash = `#/events/workshops/${selected.name.toLowerCase()}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-mosaic-gold/50 px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-mosaic-gold transition hover:bg-mosaic-gold hover:text-mosaic-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold">Details <ArrowRight size={13} /></button>
                      </div>
                    </div>

                    <div className="relative z-10 md:hidden">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-mosaic-gold/70">Choose a workshop</p>
                          <p className="mt-1 text-xs text-gray-500">Swipe the cards to explore</p>
                        </div>
                        <span className="text-xs tracking-[0.18em] text-gray-500">0{selectedWorkshop + 1} / 05</span>
                      </div>

                      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 scrollbar-hide">
                        {workshopSchedule.map((item, index) => {
                          const active = selectedWorkshop === index;
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => setSelectedWorkshop(index)}
                              aria-pressed={active}
                              className={`relative min-h-52 w-[82%] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-2xl border p-5 text-left transition ${active ? 'border-mosaic-gold/70 bg-gradient-to-br from-mosaic-gold/15 via-[#0a2038] to-[#061426] shadow-[0_12px_35px_rgba(0,0,0,.25)]' : 'border-white/10 bg-[#07182a]/90'}`}
                            >
                              <span className="absolute -right-5 -top-8 font-serif text-[120px] leading-none text-white/[0.035]" aria-hidden="true">0{index + 1}</span>
                              <div className="relative flex items-start justify-between">
                                <span className={`flex h-11 w-11 items-center justify-center rounded-full border ${active ? 'border-mosaic-gold bg-mosaic-gold text-mosaic-navy' : 'border-mosaic-gold/40 text-mosaic-gold'}`}><Icon size={18} aria-hidden="true" /></span>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-300">{item.shortDate}</span>
                              </div>
                              <div className="relative mt-7">
                                <p className="text-[10px] uppercase tracking-[0.24em] text-mosaic-gold">Workshop · 0{index + 1}</p>
                                <h3 className="mt-1 font-serif text-2xl tracking-[0.1em] text-white">{item.name}</h3>
                              </div>
                              <div className="relative mt-5 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                                <span className="flex items-center gap-2 whitespace-nowrap"><Clock3 size={14} className="shrink-0 text-mosaic-gold" aria-hidden="true" /><span>{item.time}</span></span>
                                <span className="flex items-center gap-2 whitespace-nowrap"><MapPin size={14} className="shrink-0 text-mosaic-gold" aria-hidden="true" /><span>College Auditorium</span></span>
                              </div>
                              <span className={`absolute bottom-5 right-5 transition ${active ? 'text-mosaic-gold' : 'text-gray-500'}`}><ArrowRight size={16} aria-hidden="true" /></span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-1 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Selected event</p>
                            <p className="mt-1 font-serif text-lg tracking-wide text-white">{selected.name}</p>
                          </div>
                          <button type="button" onClick={() => window.location.hash = `#/events/workshops/${selected.name.toLowerCase()}`} className="inline-flex items-center gap-2 rounded-full border border-mosaic-gold/50 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-mosaic-gold transition hover:bg-mosaic-gold hover:text-mosaic-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold">
                            Details <ArrowRight size={13} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex min-h-64 flex-col items-center justify-center px-6 py-14 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-mosaic-gold/30 bg-mosaic-gold/5 text-mosaic-gold">
                    {activeCategory === 'quiz' ? <BookOpen size={24} /> : activeCategory === 'celebrity' ? <Activity size={24} /> : <Music size={24} />}
                  </div>
                  <h2 className="font-serif text-2xl tracking-wide text-white">Schedule coming soon</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">The {categories.find((category) => category.id === activeCategory)?.label} schedule will be announced soon. Check back for updates.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
