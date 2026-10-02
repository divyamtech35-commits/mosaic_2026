import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-mosaic-navy flex flex-col items-center justify-center py-8 px-6 relative z-50">
      {/* Subtle Gold Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-mosaic-gold/30 to-transparent"></div>
      
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Core Info */}
        <div>
          <h4 className="font-serif text-xl md:text-2xl text-white tracking-[0.15em] uppercase mb-1">
            Mosaic 2026
          </h4>
          <p className="font-sans text-gray-400 font-light text-[13px] md:text-[14px] tracking-wide uppercase">
            GMERS Medical College, Gandhinagar
          </p>
        </div>

        {/* Copyright */}
        <p className="font-sans text-gray-500 font-light text-[12px] md:text-[13px] mt-4">
          &copy; 2026 MOSAIC. All rights reserved.
        </p>

        {/* Developer Credit */}
        <div className="mt-8 pt-6 border-t border-white/5 w-48 text-center">
          <p className="font-sans text-gray-400 font-light text-[12px] md:text-[13px] tracking-wide">
            Designed & Developed by <br className="md:hidden" />
            <a 
              href="https://www.linkedin.com/in/divyamtech35/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-mosaic-gold font-medium ml-1 hover:text-white transition-colors duration-300"
            >
              Divyam Bhavsar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
