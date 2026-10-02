import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HeroTransition } from '../components/HeroTransition';
import { FeaturedEvents } from '../components/FeaturedEvents';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-mosaic-navy">
      <Navbar />
      <Hero />
      <HeroTransition />
      <FeaturedEvents />
      <Footer />
    </main>
  );
};
