import React from 'react';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { ParchmentCard } from '../components/ParchmentCard';
import { MosaicGallery } from '../components/MosaicGallery';
import { GMERSSection } from '../components/GMERSSection';
import { ValueCards } from '../components/ValueCards';
import { AboutFooter } from '../components/AboutFooter';
import { Footer } from '../components/Footer';

export const About: React.FC = () => {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative bg-mosaic-navy">
      {/* 1. EXACT SAME BACKGROUND AS HOME PAGE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/70 to-mosaic-navy/90" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.15) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3 }}></div>
      </div>
      
      {/* 2. Medical Line Art Overlay (Subtle) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-[0.15] mix-blend-screen"
        style={{ backgroundImage: 'url("/about_bg.jpg")' }}
      />
      
      {/* 3. Gold Atmospheric Glow (matching Home) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-mosaic-gold/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <PageHeader title="ABOUT GMERS GANDHINAGAR" />
      
      <GMERSSection />

      {/* SECTION: ABOUT MOSAIC 2026 */}
      <section className="w-full relative pb-8 px-4 md:px-8 bg-transparent flex flex-col items-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-16 z-10 pt-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.1em] text-center uppercase" style={{ textShadow: '0 0 30px rgba(217,164,65,0.3)' }}>
            About Mosaic 2026
          </h2>
          <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-mosaic-gold to-transparent mt-8"></div>
        </div>

        <ParchmentCard className="max-w-4xl z-10" delay={0.2}>
          <p className="text-gray-300 font-sans text-center text-[16px] md:text-[18px] leading-[2] md:leading-[2.2] font-light">
            <span className="font-serif font-bold text-xl text-mosaic-gold">Mosaic 2026</span> is GMERS Medical College, Gandhinagar’s flagship four-day extravaganza, blending academics, culture, and celebration for medical students. The event features hands-on workshops, an all-Gujarat scientific quiz, keynote guest lectures, and research presentations, alongside a star-studded Celebrity Night, fashion shows, dance and singing performances, and spirited cultural battles like Antakshari. More than an event, Mosaic 2026 is where every talent finds its place — making it the ideal stage for brands to connect with Gujarat’s brightest young medical minds.
          </p>
        </ParchmentCard>

        <MosaicGallery />
      </section>
      
        <ValueCards />
        <AboutFooter />
      </div>

      <Footer />
    </main>
  );
};
