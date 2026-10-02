import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Network } from 'lucide-react';

export const ValueCards: React.FC = () => {
  const values = [
    {
      title: "ACADEMICS",
      desc: "Learning beyond the classroom",
      icon: <BookOpen size={28} className="text-mosaic-gold group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "CULTURE",
      desc: "Celebrating creativity and expression",
      icon: <Users size={28} className="text-mosaic-gold group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "COMPETITION",
      desc: "Challenge, perform and excel",
      icon: <Trophy size={28} className="text-mosaic-gold group-hover:text-white transition-colors duration-500" />
    },
    {
      title: "COMMUNITY",
      desc: "Connecting students, institutions and ideas",
      icon: <Network size={28} className="text-mosaic-gold group-hover:text-white transition-colors duration-500" />
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full relative pt-4 pb-16 px-4 md:px-8 bg-transparent flex flex-col items-center">
      {/* Subtle Divider */}
      <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-mosaic-gold/20 to-transparent mb-12"></div>

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center mb-12 text-center z-10"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-white tracking-[0.2em] uppercase mb-6" style={{ textShadow: '0 0 20px rgba(217,164,65,0.2)' }}>
          More Than A Festival
        </h3>
        <p className="font-sans text-gray-400 font-light text-[15px] md:text-[17px] max-w-2xl px-4">
          MOSAIC brings together knowledge, creativity, competition, culture, and community — creating a platform where every student can find their place.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl z-10"
      >
        {values.map((val, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="group flex flex-col items-center text-center p-10 glass-panel rounded-xl hover:bg-mosaic-gold/10 hover:border-mosaic-gold/50 transition-all duration-700 ease-out cursor-default relative overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-mosaic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="mb-8 p-4 rounded-full bg-mosaic-navy/50 border border-mosaic-gold/20 group-hover:border-mosaic-gold/50 group-hover:scale-110 transition-all duration-500 ease-out z-10">
              {val.icon}
            </div>
            
            <h4 className="font-serif text-lg text-white tracking-[0.15em] mb-4 uppercase z-10 group-hover:text-mosaic-gold transition-colors duration-500">
              {val.title}
            </h4>
            
            <div className="w-12 h-[1px] bg-mosaic-gold/30 mb-6 group-hover:w-24 group-hover:bg-mosaic-gold transition-all duration-700 z-10"></div>
            
            <p className="font-sans text-gray-400 font-light text-[14px] z-10 group-hover:text-gray-300 transition-colors duration-500">
              {val.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
