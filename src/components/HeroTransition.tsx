import React from 'react';

export const HeroTransition: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-10">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
          className="fill-mosaic-cream"
        ></path>
        <path
          d="M0,0 C300,120 900,120 1200,0"
          fill="none"
          stroke="#D9A441"
          strokeWidth="2"
        ></path>
      </svg>
      
      {/* Decorative Star/Compass at bottom center curve */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 text-mosaic-gold text-2xl md:text-3xl">
        ✦
      </div>
    </div>
  );
};
