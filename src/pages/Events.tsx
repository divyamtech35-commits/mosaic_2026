import React, { useEffect } from 'react';
import { BookOpen, Mic, Music, Users } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const events = [
  {
    title: 'Workshops',
    subtitle: 'Learn & Grow',
    image: '/eventphoto (7).jpeg',
    icon: Users,
    href: '#/events/workshops',
  },
  {
    title: 'Scientific Quiz',
    subtitle: 'All Gujarat Level',
    image: '/eventphoto (8).jpeg',
    icon: BookOpen,
    href: undefined,
  },
  {
    title: 'Celebrity Night',
    subtitle: 'Live & Unforgettable',
    image: '/eventphoto (2).jpeg',
    icon: Mic,
    href: undefined,
  },
  {
    title: 'Cultural Events',
    subtitle: 'Dance | Music | Fashion',
    image: '/eventphoto (1).jpeg',
    icon: Music,
    href: undefined,
  },
];

export const Events: React.FC = () => {
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
            <header className="text-center mb-12 md:mb-16">
              <h1 className="font-serif text-4xl md:text-6xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-mosaic-gold to-mosaic-gold/50 tracking-[0.2em] uppercase">
                Events
              </h1>
              <div className="flex items-center gap-4 text-mosaic-gold/60 w-full max-w-sm mx-auto mt-8">
                <span className="h-px flex-grow bg-gradient-to-r from-transparent to-mosaic-gold/60" />
                <span className="text-sm">✦</span>
                <span className="h-px flex-grow bg-gradient-to-l from-transparent to-mosaic-gold/60" />
              </div>
              <p className="mt-6 text-gray-300/80 tracking-wide">Discover what’s happening at MOSAIC 2026</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map(({ title, subtitle, image, icon: Icon, href }) => (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-xl border border-mosaic-gold/25 bg-[#06172a]/80 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-mosaic-gold/60 ${href ? 'cursor-pointer' : ''}`}
                >
                  {href && (
                    <a
                      href={href}
                      aria-label={`Explore ${title}`}
                      className="absolute inset-0 z-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mosaic-gold"
                    />
                  )}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={image}
                      alt={`${title} at MOSAIC 2026`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06172a] via-[#06172a]/15 to-transparent" />
                  </div>
                  <div className="relative -mt-7 px-6 pb-7">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-mosaic-gold/40 bg-[#06172a] text-mosaic-gold">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold tracking-wide text-white md:text-2xl">{title}</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mosaic-gold/80">{subtitle}</p>
                  </div>
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
