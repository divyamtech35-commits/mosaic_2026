import React from 'react';
import { motion } from 'framer-motion';
import { ParchmentCard } from './ParchmentCard';

export const GMERSSection: React.FC = () => {
  return (
    <div className="w-full relative py-16 px-4 md:px-8 bg-transparent flex flex-col items-center overflow-hidden">
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mosaic-gold/5 via-transparent to-transparent blur-3xl opacity-50" />
      </div>

      {/* Premium Glass Card */}
      <ParchmentCard className="max-w-4xl mb-24 z-10" delay={0.3}>
        <p className="text-gray-300 font-sans text-center text-[16px] md:text-[18px] leading-[2] md:leading-[2.2] font-light">
          Established in 2012, <span className="text-white font-medium">GMERS Medical College Gandhinagar</span>, is a premier institution dedicated to excellence in medical education, clinical training, and healthcare service. With modern infrastructure, experienced faculty, and a robust clinical ecosystem, we equip students with hands-on learning, research exposure, and real-world clinical experience — shaping competent, compassionate, and future-ready healthcare professionals who serve society with integrity.
        </p>
      </ParchmentCard>

      {/* College Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-[1100px] relative z-10 group px-2 md:px-0"
      >
        {/* Glow behind image */}
        <div className="absolute -inset-4 bg-mosaic-gold/10 rounded-2xl transform blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <div className="relative rounded-xl overflow-hidden border border-mosaic-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 border border-mosaic-gold/10 rounded-xl pointer-events-none z-20 mix-blend-overlay"></div>

          <img
            src="/college_photo.png"
            alt="GMERS Medical College Gandhinagar Campus"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-[1.03] transition-transform duration-[2000ms] ease-out"
            style={{ filter: 'contrast(1.1) saturate(0.8) brightness(0.8)' }}
            loading="lazy"
          />

          {/* Overlay gradient to blend bottom of image into navy */}
          <div className="absolute inset-0 bg-gradient-to-t from-mosaic-navy via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
        </div>
      </motion.div>
    </div>
  );
};
