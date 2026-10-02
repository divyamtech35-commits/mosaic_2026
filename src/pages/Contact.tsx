import React from 'react';
import { Navbar } from '../components/Navbar';

import { ParchmentCard } from '../components/ParchmentCard';
import { Footer } from '../components/Footer';
import { Mail, Phone } from 'lucide-react';


export const Contact: React.FC = () => {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans relative bg-mosaic-navy flex flex-col">
      {/* 1. EXACT SAME BACKGROUND AS HOME/ABOUT PAGE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/backgroung_image.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mosaic-navy/90 via-mosaic-navy/70 to-mosaic-navy/90" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(217, 164, 65, 0.15) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3 }}></div>
      </div>

      {/* 2. Medical Line Art Overlay (Subtle - Opacity Reduced) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-[0.10] mix-blend-screen"
        style={{ backgroundImage: 'url("/about_bg.jpg")' }}
      />

      {/* 3. Gold Atmospheric Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-mosaic-gold/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />

        <div className="pt-32 pb-8 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.2em] mb-4" style={{ textShadow: '0 0 30px rgba(217,164,65,0.3)' }}>
            LET'S CONNECT
          </h1>
          <div className="flex items-center gap-4 text-mosaic-gold/60">
            <span className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-mosaic-gold/60"></span>
            <span className="text-sm">✦</span>
            <span className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-mosaic-gold/60"></span>
          </div>
        </div>

        <section className="w-full relative pb-16 px-4 md:px-8 bg-transparent flex flex-col items-center flex-grow">
          <ParchmentCard className="max-w-3xl z-10 w-full overflow-hidden" delay={0.2}>
            <div className="flex flex-col items-center gap-8 w-full py-4">

              {/* Social & Email */}
              <div className="flex flex-col gap-10 items-center w-full mt-4">

                {/* Instagram */}
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[11px] text-mosaic-gold/60 tracking-[0.2em] uppercase mb-3">Instagram</span>
                  <a
                    href="https://instagram.com/MOSAIC_GMED"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 md:gap-6 group hover:scale-105 transition-transform duration-300 w-full justify-center"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A227]/40 flex items-center justify-center bg-transparent group-hover:bg-[#C9A227]/10 transition-colors duration-300 shadow-[0_0_15px_rgba(201,162,39,0.1)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9A227"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-white transition-colors"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="font-sans text-[15px] sm:text-lg md:text-2xl text-gray-100 tracking-widest md:tracking-[0.15em] group-hover:text-white transition-colors font-light truncate">
                      @MOSAIC_GMED
                    </span>
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[11px] text-mosaic-gold/60 tracking-[0.2em] uppercase mb-3">Email</span>
                  <a
                    href="mailto:MOSAIC.GMED@GMAIL.COM"
                    className="flex items-center gap-4 md:gap-6 group hover:scale-105 transition-transform duration-300 w-full justify-center"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C9A227]/40 flex items-center justify-center bg-transparent group-hover:bg-[#C9A227]/10 transition-colors duration-300 shadow-[0_0_15px_rgba(201,162,39,0.1)]">
                      <Mail size={22} strokeWidth={1.5} className="text-[#C9A227] group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-sans text-[13px] sm:text-base md:text-2xl text-gray-100 tracking-wider md:tracking-[0.1em] group-hover:text-white transition-colors font-light uppercase break-all sm:break-normal">
                      MOSAIC.GMED@GMAIL.COM
                    </span>
                  </a>
                </div>
              </div>

              {/* Supporting Text */}
              <p className="text-gray-400 font-sans font-light text-[11px] md:text-sm tracking-widest uppercase mt-4 mb-2 text-center max-w-lg leading-relaxed">
                Event Queries <span className="text-mosaic-gold mx-1">•</span> Collaborations <span className="text-mosaic-gold mx-1">•</span> Sponsorships <span className="text-mosaic-gold mx-1">•</span> General Enquiries
              </p>

              {/* Divider */}
              <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent my-6"></div>

              {/* Contacts */}
              <div className="flex flex-col items-center w-full">
                <h3 className="font-serif text-[18px] md:text-[24px] text-white tracking-[0.2em] uppercase mb-10 text-center leading-relaxed font-light px-2" style={{ textShadow: '0 0 20px rgba(217,164,65,0.2)' }}>
                  For More Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10 md:gap-y-14 w-full max-w-3xl px-2 md:px-4 pb-4">

                  {/* Rudra Vyas */}
                  <div className="flex flex-col items-center text-center group">
                    <h4 className="font-serif text-[20px] md:text-[22px] text-[#F5EBD2] mb-1 font-light tracking-wide">Rudra Vyas</h4>
                    <span className="text-[#C9A227]/70 text-[10px] md:text-[11px] mb-3 uppercase tracking-[0.15em]">Organizing Secretary</span>
                    <a href="tel:+916351039893" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Phone size={14} strokeWidth={1.5} className="text-[#C9A227]" />
                      <span className="font-sans text-[15px] md:text-[16px] tracking-[0.15em] font-light">+91 6351039893</span>
                    </a>
                  </div>



                  {/* Param Karia */}
                  <div className="flex flex-col items-center text-center group">
                    <h4 className="font-serif text-[20px] md:text-[22px] text-[#F5EBD2] mb-1 font-light tracking-wide">Param Karia</h4>
                    <span className="text-[#C9A227]/70 text-[10px] md:text-[11px] mb-3 uppercase tracking-[0.15em]">Organizing Secretary</span>
                    <a href="tel:+919687558511" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Phone size={14} strokeWidth={1.5} className="text-[#C9A227]" />
                      <span className="font-sans text-[15px] md:text-[16px] tracking-[0.15em] font-light">+91 9687558511</span>
                    </a>
                  </div>

                  {/* Peetel Patel */}
                  <div className="flex flex-col items-center text-center group">
                    <h4 className="font-serif text-[20px] md:text-[22px] text-[#F5EBD2] mb-1 font-light tracking-wide">Pereel Patel</h4>
                    <span className="text-[#C9A227]/70 text-[10px] md:text-[11px] mb-3 uppercase tracking-[0.15em]">Organizing Secretary</span>
                    <a href="tel:+919328647464" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Phone size={14} strokeWidth={1.5} className="text-[#C9A227]" />
                      <span className="font-sans text-[15px] md:text-[16px] tracking-[0.15em] font-light">+91 9328647464</span>
                    </a>
                  </div>

                  {/* Kriti Chaudary */}
                  <div className="flex flex-col items-center text-center group">
                    <h4 className="font-serif text-[20px] md:text-[22px] text-[#F5EBD2] mb-1 font-light tracking-wide">Kriti Chaudary</h4>
                    <span className="text-[#C9A227]/70 text-[10px] md:text-[11px] mb-3 uppercase tracking-[0.15em]">Organizing Secretary</span>
                    <a href="tel:+919625528664" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Phone size={14} strokeWidth={1.5} className="text-[#C9A227]" />
                      <span className="font-sans text-[15px] md:text-[16px] tracking-[0.15em] font-light">+91 9625528664</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </ParchmentCard>
        </section>
      </div>

      <Footer />
    </main>
  );
};
