import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface ComingSoonProps {
  title: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative bg-mosaic-navy flex flex-col">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60" 
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/70 to-mosaic-navy/90" />
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />
        
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-serif text-[40px] md:text-[60px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-mosaic-gold to-mosaic-gold/30 tracking-[0.2em] uppercase" style={{ textShadow: '0 0 40px rgba(217,164,65,0.2)' }}>
              {title}
            </h1>
            
            <div className="flex items-center gap-4 text-mosaic-gold/60 w-full max-w-sm">
              <span className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-mosaic-gold/60"></span>
              <span className="text-sm">✦</span>
              <span className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-mosaic-gold/60"></span>
            </div>
            
            <h2 className="font-serif text-2xl md:text-3xl text-white tracking-[0.2em] mt-4 font-light uppercase">
              Coming Soon
            </h2>
            
            <p className="text-gray-400 font-sans font-light text-sm md:text-base tracking-wider max-w-md mt-2 mb-8">
              We are working hard to bring you the best experience. Stay tuned!
            </p>
            
            <a 
              href="#/"
              className="px-8 py-3 border border-mosaic-gold/40 text-mosaic-gold hover:bg-mosaic-gold/10 hover:border-mosaic-gold transition-all duration-300 rounded-full tracking-[0.2em] text-sm uppercase group"
            >
              <span className="group-hover:text-white transition-colors duration-300">Return Home</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};
