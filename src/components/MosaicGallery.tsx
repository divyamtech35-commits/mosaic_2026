import React from 'react';
import { motion } from 'framer-motion';

export const MosaicGallery: React.FC = () => {
  const images = [
    { src: "/eventphoto (1).jpeg", alt: "Mosaic Event 1", className: "col-span-1 row-span-2 hidden md:block" },
    { src: "/eventphoto (2).jpeg", alt: "Mosaic Event 2", className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2" },
    { src: "/eventphoto (3).jpeg", alt: "Mosaic Event 3", className: "col-span-1 row-span-1 md:block" },
    { src: "/eventphoto (4).jpeg", alt: "Mosaic Event 4", className: "col-span-1 row-span-1 md:block" },
    { src: "/eventphoto (5).jpeg", alt: "Mosaic Event 5", className: "col-span-2 row-span-1 md:col-span-3" },
    { src: "/eventphoto (6).jpeg", alt: "Mosaic Event 6", className: "col-span-2 row-span-1 md:col-span-1" },
  ];

  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl relative p-4 md:p-8"
      >
        {/* Blue decorative corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t-4 border-l-4 border-[#4E8FD8] opacity-60 rounded-tl-sm"></div>
        <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t-4 border-r-4 border-[#4E8FD8] opacity-60 rounded-tr-sm"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b-4 border-l-4 border-[#4E8FD8] opacity-60 rounded-bl-sm"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b-4 border-r-4 border-[#4E8FD8] opacity-60 rounded-br-sm"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[180px] gap-2 md:gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[4px] border border-[#F8E9C6]/20 shadow-lg group ${img.className}`}
            >
              <div className="absolute inset-0 bg-[#071A3D]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
