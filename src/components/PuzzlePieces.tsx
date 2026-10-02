import React from 'react';
import { motion } from 'framer-motion';

export const PuzzlePieces: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left Puzzle Piece - Blue */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-10 bottom-20 md:bottom-40 w-32 h-32 md:w-64 md:h-64 opacity-80"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl fill-mosaic-royal">
          <path d="M 30,30 h 15 a 10,10 0 1,0 20,0 h 15 v 15 a 10,10 0 1,1 0,20 v 15 h -15 a 10,10 0 1,0 -20,0 h -15 v -15 a 10,10 0 1,0 0,-20 z" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          {/* Inner shadow/highlight to simulate 3D */}
          <path d="M 31,31 h 14.5 a 10.5,10.5 0 1,0 21,0 h 14.5 v 14.5 a 9.5,9.5 0 1,1 0,19 v 14.5 h -14.5 a 10.5,10.5 0 1,0 -21,0 h -14.5 v -14.5 a 10.5,10.5 0 1,0 0,-21 z" fill="transparent" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        </svg>
      </motion.div>

      {/* Right Puzzle Piece - Red */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [15, 12, 15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -right-12 bottom-10 md:bottom-20 w-40 h-40 md:w-72 md:h-72 opacity-90"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] fill-mosaic-burgundy">
          <path d="M 30,30 h 15 a 10,10 0 1,1 20,0 h 15 v 15 a 10,10 0 1,0 0,20 v 15 h -15 a 10,10 0 1,0 -20,0 h -15 v -15 a 10,10 0 1,0 0,-20 z" stroke="rgba(217,164,65,0.3)" strokeWidth="1"/>
          <path d="M 31,31 h 14.5 a 10.5,10.5 0 1,1 21,0 h 14.5 v 14.5 a 9.5,9.5 0 1,0 0,19 v 14.5 h -14.5 a 10.5,10.5 0 1,0 -21,0 h -14.5 v -14.5 a 10.5,10.5 0 1,0 0,-21 z" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        </svg>
      </motion.div>
    </div>
  );
};
