import React, { useEffect, useRef, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, BookOpen, Brain, CalendarDays, Clock3, MapPin, Music, Scissors, Users, Waves, Bone } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const days = [
  {
    date: '26', weekday: 'Thursday', label: 'Day 01', events: [
      { name: 'Analytica', type: 'Workshop', time: '8:00 AM – 1:00 PM', venue: 'Conference Room', icon: Brain },
      { name: 'Theorem', type: 'Workshop', time: '8:00 AM – 1:00 PM', venue: 'Auditorium', icon: Activity },
      { name: 'Lunch Break', type: 'Break', time: '1:00 PM – 2:00 PM', venue: '—', icon: Clock3 },
      { name: 'Incisio', type: 'Workshop', time: '2:00 PM – 5:00 PM', venue: 'Conference Room', icon: Scissors },
    ],
  },
  {
    date: '27', weekday: 'Friday', label: 'Day 02', events: [
      { name: 'Inauguration Ceremony', type: 'Ceremony', time: '9:00 AM – 11:30 AM', venue: 'Auditorium', icon: Activity },
      { name: 'Orthex', type: 'Workshop', time: '9:00 AM – 1:00 PM', venue: 'Conference Room', icon: Bone },
      { name: 'Laparoscopy 2.0', type: 'Panel', time: '11:45 AM – 12:15 PM', venue: 'Auditorium', icon: Users },
      { name: 'Skinglow Beyond Aesthetics', type: 'Panel', time: '12:30 PM – 1:00 PM', venue: 'Auditorium', icon: Users },
      { name: 'Lunch Break', type: 'Break', time: '1:00 PM – 2:00 PM', venue: '—', icon: Clock3 },
      { name: 'Rhythmos', type: 'Workshop', time: '2:00 PM – 5:00 PM', venue: 'Conference Room', icon: Waves },
      { name: 'Guest Lecture', type: 'Lecture', time: '2:00 PM – 2:45 PM', venue: 'Auditorium', icon: BookOpen },
      { name: 'Beyond the White Coat', type: 'Panel', time: '2:45 PM – 3:15 PM', venue: 'Auditorium', icon: Users },
      { name: 'Guest Lecture', type: 'Lecture', time: '3:30 PM – 4:00 PM', venue: 'Auditorium', icon: BookOpen },
      { name: 'Celebrity Night', type: 'Entertainment', time: '6:00 PM onwards', venue: 'Auditorium', icon: Music },
    ],
  },
  {
    date: '28', weekday: 'Saturday', label: 'Day 03', events: [
      { name: 'Rangoli Competition', type: 'Competition', time: '7:30 AM – 10:00 AM', venue: '—', icon: Activity },
      { name: 'Cultural Games · Final Round', type: 'Competition', time: '10:00 AM – 1:00 PM', venue: '—', icon: Users },
      { name: 'Monster Truck Show', type: 'Show', time: '10:00 AM – 1:00 PM', venue: 'Auditorium Parking', icon: Activity },
      { name: 'Lunch Break', type: 'Break', time: '1:00 PM – 2:00 PM', venue: '—', icon: Clock3 },
      { name: 'Antakshari · Final Round', type: 'Competition', time: '2:00 PM – 5:00 PM', venue: '—', icon: Music },
      { name: 'Pani Puri Competition', type: 'Competition', time: '4:00 PM – 6:00 PM', venue: '—', icon: Activity },
      { name: 'Cultural Night', type: 'Entertainment', time: '5:00 PM – 8:00 PM', venue: '—', icon: Music },
      { name: 'Dinner Break', type: 'Break', time: '8:00 PM – 9:00 PM', venue: '—', icon: Clock3 },
      { name: 'Cultural Night', type: 'Entertainment', time: '9:00 PM – 12:00 AM', venue: '—', icon: Music },
    ],
  },
  {
    date: '29', weekday: 'Sunday', label: 'Day 04', events: [
      { name: 'BGMI Fest · Monster x Nodwin', type: 'Gaming', time: '9:00 AM – 5:00 PM', venue: 'Conference Room', icon: Activity },
      { name: 'Personality Contest', type: 'Competition', time: '9:00 AM – 11:00 AM', venue: '—', icon: Users },
      { name: 'Pictionary · Final Round', type: 'Competition', time: '11:00 AM – 1:00 PM', venue: '—', icon: Brain },
      { name: 'Dumb Charades · Final Round', type: 'Competition', time: '2:00 PM – 5:00 PM', venue: '—', icon: Users },
      { name: 'Cultural Night', type: 'Entertainment', time: '5:00 PM – 8:00 PM', venue: '—', icon: Music },
      { name: 'Dinner Break', type: 'Break', time: '8:00 PM – 9:00 PM', venue: '—', icon: Clock3 },
      { name: 'Cultural Night', type: 'Entertainment', time: '9:00 PM – 12:00 AM', venue: '—', icon: Music },
    ],
  },
] as const;

type DayIndex = 0 | 1 | 2 | 3;

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<DayIndex>(0);
  const [selectedEvent, setSelectedEvent] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const day = days[activeDay];
  const selected = day.events[selectedEvent] ?? day.events[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeDay = (index: DayIndex) => {
    setActiveDay(index);
    setSelectedEvent(0);
    railRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const changeEvent = (index: number) => {
    const events = day.events;
    setSelectedEvent((index + events.length) % events.length);
    const card = railRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

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
            <header className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-mosaic-gold/75">MOSAIC 2026 · 26—29 NOV</p>
                <h1 className="font-serif text-4xl uppercase leading-none tracking-[0.16em] text-white md:text-6xl">
                  Festival <span className="text-mosaic-gold">Schedule</span>
                </h1>
              </div>
              <p className="max-w-sm text-sm leading-6 text-gray-400">Four days of workshops, talks, competitions, and celebrations. Choose a date to explore the programme.</p>
            </header>

            <div role="tablist" aria-label="Schedule by day" className="mb-6 grid grid-cols-4 gap-2 md:mb-8 md:gap-3">
              {days.map((item, index) => {
                const active = activeDay === index;
                return (
                  <button key={item.date} type="button" role="tab" id={`schedule-day-${item.date}`} aria-selected={active} aria-controls="schedule-day-panel" onClick={() => changeDay(index as DayIndex)}
                    className={`group flex min-h-[68px] items-center justify-center gap-2 rounded-xl border px-2 py-3 text-left transition md:min-h-[82px] md:gap-3 md:px-5 ${active ? 'border-mosaic-gold/80 bg-mosaic-gold/10 shadow-[0_0_22px_rgba(217,164,65,.12)]' : 'border-white/10 bg-[#06172a]/75 hover:border-mosaic-gold/40'}`}>
                    <span className={`font-serif text-2xl md:text-3xl ${active ? 'text-mosaic-gold' : 'text-gray-400 group-hover:text-gray-200'}`}>{item.date}</span>
                    <span className="hidden text-left sm:block"><span className={`block text-[9px] uppercase tracking-[0.2em] ${active ? 'text-mosaic-gold' : 'text-gray-500'}`}>{item.label}</span><span className="mt-1 block text-xs text-gray-300 md:text-sm">{item.weekday}</span></span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 sm:hidden">Nov</span>
                  </button>
                );
              })}
            </div>

            <section role="tabpanel" id="schedule-day-panel" aria-labelledby={`schedule-day-${day.date}`} className="overflow-hidden rounded-2xl border border-mosaic-gold/25 bg-[#06172a]/90 shadow-2xl shadow-black/25">
              <div className="border-b border-white/10 bg-[#030d1c]/80 px-5 py-5 md:flex md:items-end md:justify-between md:px-8 md:py-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-mosaic-gold/70">Thursday, Friday, Saturday, Sunday · November 2026</p>
                  <h2 className="mt-2 font-serif text-2xl tracking-wide text-white md:text-3xl">{day.weekday}, November {day.date}</h2>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400 md:mt-0"><CalendarDays size={15} className="text-mosaic-gold" aria-hidden="true" /> {day.events.length} scheduled events</div>
              </div>

              <div className="px-4 py-6 md:px-8 md:py-8">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div><p className="text-[10px] uppercase tracking-[0.28em] text-mosaic-gold/70">Day programme</p><p className="mt-1 text-xs text-gray-500">Swipe or use the arrows to browse events</p></div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs tabular-nums tracking-wider text-gray-500">{String(selectedEvent + 1).padStart(2, '0')} / {String(day.events.length).padStart(2, '0')}</span>
                    <button type="button" aria-label="Previous event" onClick={() => changeEvent(selectedEvent - 1)} className="rounded-full border border-white/15 p-2 text-gray-300 transition hover:border-mosaic-gold hover:text-mosaic-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold"><ArrowLeft size={15} /></button>
                    <button type="button" aria-label="Next event" onClick={() => changeEvent(selectedEvent + 1)} className="rounded-full border border-white/15 p-2 text-gray-300 transition hover:border-mosaic-gold hover:text-mosaic-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold"><ArrowRight size={15} /></button>
                  </div>
                </div>

                <div ref={railRef} onScroll={(event) => {
                  const rail = event.currentTarget;
                  const cards = Array.from(rail.children) as HTMLElement[];
                  const center = rail.scrollLeft + rail.clientWidth / 2;
                  let nearest = 0;
                  let distance = Number.POSITIVE_INFINITY;
                  cards.forEach((card, index) => {
                    const midpoint = card.offsetLeft + card.offsetWidth / 2;
                    const nextDistance = Math.abs(midpoint - center);
                    if (nextDistance < distance) { distance = nextDistance; nearest = index; }
                  });
                  if (nearest !== selectedEvent) setSelectedEvent(nearest);
                }} className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide md:-mx-8 md:gap-4 md:px-8">
                  {day.events.map((item, index) => {
                    const Icon = item.icon;
                    const active = selectedEvent === index;
                    const isWorkshop = item.type === 'Workshop';
                    return (
                      <button key={`${item.name}-${item.time}`} type="button" aria-pressed={active} onClick={() => changeEvent(index)}
                        className={`relative flex min-h-[190px] w-[82%] max-w-[330px] shrink-0 snap-center flex-col rounded-xl border p-4 text-left transition duration-300 sm:w-[48%] md:min-h-[220px] md:w-[34%] md:max-w-[380px] md:p-5 ${active ? 'border-mosaic-gold/70 bg-gradient-to-br from-mosaic-gold/10 via-[#0a2038] to-[#061426] shadow-[0_10px_30px_rgba(0,0,0,.22)]' : 'border-white/10 bg-[#07182a]/90 hover:border-mosaic-gold/40'}`}>
                        <div className="flex items-start justify-between gap-3">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-full border ${active ? 'border-mosaic-gold bg-mosaic-gold text-mosaic-navy' : 'border-mosaic-gold/35 text-mosaic-gold'}`}><Icon size={17} aria-hidden="true" /></span>
                          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-gray-400">{item.type}</span>
                        </div>
                        <div className="mt-5"><p className="text-[10px] uppercase tracking-[0.2em] text-mosaic-gold/80">{day.date} November · 2026</p><h3 className="mt-1 font-serif text-xl leading-snug text-white md:text-2xl">{item.name}</h3></div>
                        <div className="mt-auto grid gap-2 border-t border-white/10 pt-4 text-xs text-gray-300">
                          <span className="flex items-center gap-2"><Clock3 size={14} className="shrink-0 text-mosaic-gold" aria-hidden="true" />{item.time}</span>
                          {item.venue !== '—' && <span className="flex items-center gap-2"><MapPin size={14} className="shrink-0 text-mosaic-gold" aria-hidden="true" />{item.venue}</span>}
                        </div>
                        {isWorkshop && <span className="absolute bottom-4 right-4 text-mosaic-gold/80"><ArrowRight size={15} aria-hidden="true" /></span>}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
                  <div className="min-w-0"><p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Selected event</p><p className="mt-1 font-serif text-lg text-white">{selected.name}</p><p className="mt-1 text-xs text-gray-400">{selected.time}{selected.venue !== '—' ? ` · ${selected.venue}` : ''}</p></div>
                  {selected.type === 'Workshop' && <a href={`#/events/workshops/${selected.name.toLowerCase()}`} className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-mosaic-gold/50 px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-mosaic-gold transition hover:bg-mosaic-gold hover:text-mosaic-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold sm:self-auto">Workshop details <ArrowRight size={13} aria-hidden="true" /></a>}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
