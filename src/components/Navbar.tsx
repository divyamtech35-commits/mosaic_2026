import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Schedule', href: '#' },
    { name: 'Sponsors', href: '#' },
    { name: 'Register', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-mosaic-navy/90 backdrop-blur-md border-b border-mosaic-gold/20 py-4 shadow-lg'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 overflow-hidden rounded-md border border-mosaic-gold/30">
            <img src="/mosaic-logo.png" alt="Mosaic Logo" className="w-full h-full object-cover scale-150" />
          </div>
          <span className="font-serif text-xl text-white tracking-widest uppercase">Mosaic 2026</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors ${
                link.active
                  ? 'text-mosaic-gold border-b border-mosaic-gold pb-1'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#"
            className="px-6 py-2 rounded-full border border-mosaic-gold text-mosaic-gold font-sans text-sm tracking-wider hover:bg-mosaic-gold hover:text-mosaic-navy transition-all duration-300"
          >
            Register Now →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-mosaic-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-mosaic-navy/95 backdrop-blur-xl border-b border-mosaic-gold/20 py-6 px-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-lg tracking-wide ${
                  link.active ? 'text-mosaic-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 inline-block text-center px-6 py-3 rounded-full border border-mosaic-gold text-mosaic-gold font-sans tracking-wider hover:bg-mosaic-gold hover:text-mosaic-navy transition-all"
            >
              Register Now →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
