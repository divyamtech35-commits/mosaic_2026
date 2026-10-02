import React from 'react';
import { Users, BookOpen, Mic, Music } from 'lucide-react';

export const FeaturedEvents: React.FC = () => {
  const events = [
    {
      title: 'WORKSHOPS',
      subtitle: 'Learn & Grow',
      icon: <Users size={32} className="text-mosaic-gold mb-4" />,
    },
    {
      title: 'SCIENTIFIC QUIZ',
      subtitle: 'All Gujarat',
      icon: <BookOpen size={32} className="text-mosaic-gold mb-4" />,
    },
    {
      title: 'CELEBRITY NIGHT',
      subtitle: 'Live & Unforgettable',
      icon: <Mic size={32} className="text-mosaic-gold mb-4" />,
    },
    {
      title: 'CULTURAL EVENTS',
      subtitle: 'Dance | Music | Fashion',
      icon: <Music size={32} className="text-mosaic-gold mb-4" />,
    },
  ];

  return (
    <section className="bg-mosaic-cream text-mosaic-navy py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-mosaic-gold/30">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-4 ${index !== 0 ? 'pt-8 sm:pt-0' : ''}`}
            >
              {event.icon}
              <h4 className="font-serif text-xl md:text-2xl font-bold tracking-wide text-mosaic-navy mb-2">
                {event.title}
              </h4>
              <p className="font-sans text-sm md:text-base text-mosaic-navy/70 uppercase tracking-widest">
                {event.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
