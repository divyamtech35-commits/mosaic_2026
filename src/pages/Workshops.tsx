import React, { useEffect } from 'react';
import { ArrowLeft, Activity, Brain, Bone, CalendarDays, Clock3, MapPin, Scissors, Waves } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const workshops = [

  {
    title: 'Incisio',
    description: 'Suturing and wound management workshop .',
    icon: Scissors,
    href: '#/events/workshops/incisio',
  },
  {
    title: 'Orthex',
    description: 'Casting and fracture management workshop .',
    icon: Bone,
    href: '#/events/workshops/orthex',
  },
  {
    title: 'Rhythmos',
    description: 'ECG and Cardiac interpretation workshop .',
    icon: Waves,
    href: '#/events/workshops/rhythmos',
  },
  {
    title: 'Analytica',
    description: 'Biochemistry and Pathology based diagnosis of disease .',
    icon: Brain,
    href: '#/events/workshops/analytica',
  },
  {
    title: 'Theorem',
    description: 'Research methodology and scientific writing.',
    icon: Activity,
    href: '#/events/workshops/theorem',
  },
];

export const Workshops: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative bg-mosaic-navy flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/75 to-mosaic-navy/95" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />
        <section className="flex-grow px-5 pt-32 pb-20 md:px-8 md:pt-40">
          <div className="max-w-7xl mx-auto">
            <a
              href="#/events"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-mosaic-gold/80 transition-colors hover:text-mosaic-gold"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Back to Events
            </a>

            <header className="text-center mb-12 mt-8 md:mb-16">
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-mosaic-gold/75">MOSAIC 2026</p>
              <h1 className="font-serif text-4xl md:text-6xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-mosaic-gold to-mosaic-gold/50 tracking-[0.16em] uppercase">
                Workshops
              </h1>
              <div className="flex items-center gap-4 text-mosaic-gold/60 w-full max-w-sm mx-auto mt-8">
                <span className="h-px flex-grow bg-gradient-to-r from-transparent to-mosaic-gold/60" />
                <span className="text-sm">✦</span>
                <span className="h-px flex-grow bg-gradient-to-l from-transparent to-mosaic-gold/60" />
              </div>
              <p className="mt-6 text-gray-300/80 tracking-wide">Explore the workshops at MOSAIC 2026</p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workshops.map(({ title, description, icon: Icon, href }, index) => (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-xl border border-mosaic-gold/25 bg-[#06172a]/85 p-7 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-mosaic-gold/60 ${href ? 'cursor-pointer' : ''}`}
                >
                  {href && <a href={href} aria-label={`View ${title} workshop details`} className="absolute inset-0 z-10" />}
                  <span className="absolute right-5 top-3 font-serif text-6xl text-mosaic-gold/[0.07]" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-mosaic-gold/40 bg-mosaic-navy text-mosaic-gold transition-colors group-hover:bg-mosaic-gold/10">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold tracking-wide text-white">{title}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300/75">{description}</p>
                  <div className="mt-6 h-px w-12 bg-mosaic-gold/50 transition-all group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

const workshopDetails = {
  incisio: {
    title: 'INCISIO',
    subtitle: 'Suturing and wound Management workshop',
    description: 'A hands-on journey into the art of surgery. Learn essential surgical skills, explore instruments, and develop precision and confidence through practical training.',
    date: '26th November, 2026',
    time: '2 pm to 5 pm',
    venue: 'College Auditorium',
    icon: Scissors,
    registrationUrl: 'https://docs.google.com/forms/d/1TTxv_jG57FXjFbmJgn3uohl661rZ8XUKOnFQbaLcbRg/viewform',
    soldOut: false,
  },
  orthex: {
    title: 'ORTHEX',
    subtitle: 'Casting and fracture management workshop',
    description: 'Step into the world of orthopaedics and explore the fundamentals of bone and joint care. Gain practical insights into musculoskeletal assessment, fracture management, and orthopaedic techniques.',
    date: '27th November, 2026',
    time: '9 am to 1 pm',
    venue: 'College Auditorium',
    icon: Bone,
    registrationUrl: 'https://docs.google.com/forms/d/1eU4M3eTleCtQZSc6amLVKmgj1xcsQhy5xnQXval-ydw/viewform',
    soldOut: false,
  },
  rhythmos: {
    title: 'RHYTHMOS',
    subtitle: 'ECG and Cardiac interpretation workshop',
    description: 'Learn to read the rhythm of the heart. Understand the fundamentals of ECG interpretation, identify important waveforms and intervals, and develop a systematic approach to recognising common cardiac abnormalities.',
    date: '27th November, 2026',
    time: '2 pm to 5 pm',
    venue: 'College Auditorium',
    icon: Waves,
    registrationUrl: 'https://docs.google.com/forms/d/1IHmU5QCLKwtSX7Oyb2piHOkBJpqfrEVfBuFul4503lE/viewform',
    soldOut: false,
  },
  analytica: {
    title: 'ANALYTICA',
    subtitle: 'Biochemistry and Pathology based diagnosis of disease',
    description: 'Discover the science behind laboratory investigations. Learn to interpret biochemical and pathological reports, connect findings with clinical conditions, and strengthen your diagnostic understanding.',
    date: '26th November, 2026',
    time: '9 am to 1 pm',
    venue: 'College Auditorium',
    icon: Brain,
    registrationUrl: 'https://docs.google.com/forms/d/1tIu0GFQUJUD7aVkdoUiwqFx76FbvESs9oHyGxsybVvo/viewform',
    soldOut: false,
  },
  theorem: {
    title: 'THEOREM',
    subtitle: 'Research methodology and scientific writing',
    description: 'Turn curiosity into clinical evidence. Explore the basics of medical research, from framing a research question to understanding study designs, interpreting data, and building an evidence-based approach.',
    date: '26th November, 2026',
    time: '9 am to 1 pm',
    venue: 'College Auditorium',
    icon: Activity,
    registrationUrl: 'https://docs.google.com/forms/d/1PtqDXIwTDgGfo1NcYfMRUxWxvwKJUuY25RFf1xfBAKU/edit',
    soldOut: false,
  },
};

export const WorkshopDetail: React.FC<{ workshop: keyof typeof workshopDetails }> = ({ workshop }) => {
  const details = workshopDetails[workshop];
  const Icon = details.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative bg-mosaic-navy flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/75 to-mosaic-navy/95" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />
        <section className="flex-grow px-5 pt-32 pb-20 md:px-8 md:pt-40">
          <div className="mx-auto max-w-4xl">
            <a
              href="#/events/workshops"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-mosaic-gold/80 transition-colors hover:text-mosaic-gold"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Back to Workshops
            </a>

            <article className="mt-8 overflow-hidden rounded-2xl border border-mosaic-gold/30 bg-[#06172a]/90 shadow-2xl shadow-black/30">
              <div className="border-b border-mosaic-gold/20 bg-gradient-to-r from-mosaic-gold/10 via-transparent to-mosaic-gold/5 px-7 py-10 md:px-12 md:py-14">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-mosaic-gold/40 bg-mosaic-navy text-mosaic-gold">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-mosaic-gold/75">{details.subtitle}</p>
                <h1 className="font-serif text-4xl font-semibold tracking-[0.12em] text-white md:text-6xl">{details.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300/85 md:text-lg">
                  {details.description}
                </p>
              </div>

              <div className="grid gap-5 px-7 py-8 sm:grid-cols-3 md:px-12">
                <div className="flex items-start gap-3 text-gray-200">
                  <CalendarDays size={20} className="mt-0.5 shrink-0 text-mosaic-gold" aria-hidden="true" />
                  <div><p className="text-xs uppercase tracking-widest text-gray-400">Date</p><p className="mt-1">{details.date}</p></div>
                </div>
                <div className="flex items-start gap-3 text-gray-200">
                  <Clock3 size={20} className="mt-0.5 shrink-0 text-mosaic-gold" aria-hidden="true" />
                  <div><p className="text-xs uppercase tracking-widest text-gray-400">Time</p><p className="mt-1">{details.time}</p></div>
                </div>
                <div className="flex items-start gap-3 text-gray-200">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-mosaic-gold" aria-hidden="true" />
                  <div><p className="text-xs uppercase tracking-widest text-gray-400">Venue</p><p className="mt-1">{details.venue}</p></div>
                </div>
              </div>

              <div className="px-7 pb-9 md:px-12 md:pb-12">
                {details.soldOut ? (
                  <span
                    role="status"
                    className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-red-300/40 bg-red-400/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-200"
                  >
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={details.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-mosaic-gold/50 bg-mosaic-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-mosaic-gold transition-colors hover:bg-mosaic-gold hover:text-mosaic-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mosaic-gold focus-visible:ring-offset-2 focus-visible:ring-offset-mosaic-navy"
                  >
                    Register
                  </a>
                )}
              </div>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};
