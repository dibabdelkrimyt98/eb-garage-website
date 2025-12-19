import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_official.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force body overflow to hidden to prevent scrolling when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Atelier', href: '/workshop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled || isOpen ? 'bg-black shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex justify-between items-center">
        
        {/* LOGO - Fixed Z-index to stay above overlay */}
        <Link to="/" onClick={() => setIsOpen(false)} className="relative z-[1001]">
          <img 
            src={logo} 
            alt="Logo" 
            className={`transition-all duration-300 object-contain ${
              scrolled ? 'h-10' : 'h-12 md:h-16'
            }`} 
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[11px] uppercase font-black tracking-[0.2em] transition-colors ${
                location.pathname === link.href ? 'text-brandRed' : 'text-white hover:text-brandRed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/devis">
            <button className="bg-brandRed text-white text-[10px] uppercase font-black px-7 py-3 rounded-full hover:bg-white hover:text-brandRed transition-all transform hover:scale-105">
              Devis Gratuit
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE - Fixed Z-index */}
        <button 
          className="md:hidden relative z-[1001] text-white text-3xl p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE OVERLAY - Top Down Approach */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center md:hidden"
            style={{ height: '100dvh' }} // Uses Dynamic Viewport Height for mobile browsers
          >
            <div className="flex flex-col items-center space-y-10 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    to={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className={`text-4xl font-black uppercase tracking-tighter transition-colors ${
                        location.pathname === link.href ? 'text-brandRed' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-xs pt-6"
              >
                <Link to="/devis" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-brandRed text-white text-base uppercase font-black py-5 rounded-full shadow-xl active:scale-95 transition-transform">
                    Obtenez un devis
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;