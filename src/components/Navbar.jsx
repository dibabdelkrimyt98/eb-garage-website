import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_official.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. Handle Scroll Effect (Transparent -> Solid Black)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lock Scroll when Mobile Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Atelier', href: '/workshop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 flex justify-between items-center ${
          scrolled || isOpen 
            ? 'bg-black/95 backdrop-blur-md shadow-2xl py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img 
              src={logo} 
              alt="EB Garage Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} hover:scale-105`} 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8 text-[11px] uppercase font-black tracking-[0.2em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-brandRed' : 'text-white hover:text-brandRed'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/devis">
            <button className="bg-brandRed hover:bg-red-700 text-white text-[10px] uppercase font-black px-7 py-3 rounded-full shadow-lg shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-1">
              Devis Gratuit
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl z-50 p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40 md:hidden"
            >
              <div className="flex flex-col items-center space-y-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    key={link.name}
                  >
                    <Link 
                      to={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-4xl text-white hover:text-brandRed uppercase font-black tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link to="/devis" onClick={() => setIsOpen(false)}>
                    <button className="mt-6 bg-brandRed text-white text-sm uppercase font-black px-12 py-5 rounded-full shadow-2xl">
                      Obtenez un devis
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer to prevent content from jumping when Nav is absolute vs fixed */}
      {/* We don't need a spacer here because your Hero is min-h-screen and uses padding-top */}
    </>
  );
};

export default Navbar;