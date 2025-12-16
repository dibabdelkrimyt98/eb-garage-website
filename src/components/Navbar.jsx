// src/components/Navbar.jsx
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu
import logo from '../assets/logo_official.png';

const Navbar = () => {
  // Placeholder links for routing (replace '#' with actual paths)
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Atelier', href: '/workshop' },
    { name: 'Contact', href: '/contact' },
    { name : 'Devis', href: '/devis'}
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-20 px-4 py-4 md:px-12 flex justify-between items-center transition-all duration-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="EB Garage Logo" className="h-12 md:h-16 transition-transform hover:scale-105" />
        </a>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase font-medium tracking-wider">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-white hover:text-brandRed transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA Button - Desktop */}
      <div className='hidden md:block'>
        <a href="/devis">
            <button className="bg-brandRed hover:bg-red-700 text-white text-sm uppercase font-bold px-6 py-3 rounded shadow-md transition-all duration-200">
            Obtenez un devis
            </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brandDark/95 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="p-8 pt-20 flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl text-white hover:text-brandRed uppercase font-bold">
              {link.name}
            </a>
          ))}
           <a href="/contact">
                <button className="mt-8 bg-brandRed hover:bg-red-700 text-white text-lg uppercase font-bold px-10 py-4 rounded shadow-lg transition-all" onClick={() => setIsOpen(false)}>
                Obtenez un devis
                </button>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;