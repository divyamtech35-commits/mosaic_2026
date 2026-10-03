import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export const CTAButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 1 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-4 w-full px-4"
    >
      {/* Register button removed as per client request */}
      <a
        href="#/events"
        className="w-full sm:w-auto max-w-[320px] px-8 py-4 rounded-full border border-mosaic-gold text-mosaic-cream font-sans font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-mosaic-gold/10 transition-all duration-300 transform hover:-translate-y-1"
      >
        <Calendar size={18} />
        Explore Events
      </a>
    </motion.div>
  );
};
