import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HeroTransition } from '../components/HeroTransition';
import { FeaturedEvents } from '../components/FeaturedEvents';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-mosaic-navy">
      <Navbar />
      <Hero />
      <HeroTransition />
      <FeaturedEvents />
      
      {/* Empty space to show scrolling effect */}
      <div className="h-32 bg-mosaic-cream"></div>
    </main>
  );
};
