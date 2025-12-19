import React from 'react';
import { FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_official.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col space-y-6 items-center sm:items-start text-center sm:text-left">
            <img 
              src={logo} 
              alt="EB Garage" 
              className="h-12 md:h-14 grayscale brightness-150 hover:grayscale-0 transition-all duration-500 cursor-pointer" 
            />
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              L'excellence automobile à Blida. Spécialistes en protection, detailing et esthétique haut de gamme.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={FaFacebookF} link="https://web.facebook.com/profile.php?id=100063539055073" />
              <SocialIcon icon={FaInstagram} link="https://www.instagram.com/eb_garage_" />
              <SocialIcon icon={FaTiktok} link="https://www.tiktok.com/@eb.garage3" />
              <SocialIcon icon={FaYoutube} link="https://www.youtube.com/" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white uppercase font-black tracking-widest text-sm mb-6">Menu</h4>
            <ul className="space-y-3 text-center sm:text-left">
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/portfolio" label="Portfolio" />
              <FooterLink to="/workshop" label="L'Atelier" />
              <FooterLink to="/devis" label="Devis Gratuit" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white uppercase font-black tracking-widest text-sm mb-6">Contact</h4>
            <div className="space-y-4 text-zinc-400 text-sm flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <FaPhoneAlt className="text-brandRed group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">0558 00 40 13</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <FaEnvelope className="text-brandRed group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">info@ebgarage.com</span>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <FaMapMarkerAlt className="text-brandRed mt-1 group-hover:scale-110 transition-transform" />
                <span>Cité Ben Mokadem, Sidi Abdelkader,<br/> Blida, Algérie</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter/Status */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white uppercase font-black tracking-widest text-sm mb-6">Horaires</h4>
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 w-full text-center sm:text-left">
              <p className="text-zinc-400 text-xs mb-2 italic">Ouvert du Samedi au Jeudi</p>
              <p className="text-white font-bold text-sm uppercase">09:00 — 18:00</p>
              <div className="mt-3 flex items-center justify-center sm:justify-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter">Atelier Opérationnel</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] md:text-xs uppercase font-bold tracking-widest text-center md:text-left">
            © {currentYear} EB GARAGE. TOUS DROITS RÉSERVÉS.
          </p>
          
          <div className="text-zinc-600 text-[10px] md:text-xs uppercase font-bold tracking-widest">
                BUILT BY{' '}
            <a 
              href="https://dib-dev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-brandRed transition-colors"
            >
              Dib Abdelkrim Y T
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper: Footer Links with Hover Effect
const FooterLink = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="text-zinc-500 hover:text-brandRed text-sm transition-all duration-300 flex items-center group justify-center sm:justify-start"
    >
      <FaChevronRight className="text-[8px] mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
      {label}
    </Link>
  </li>
);

// Helper: Social Icons with "Pop" effect
const SocialIcon = ({ icon: Icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full text-zinc-500 hover:bg-brandRed hover:text-white hover:-translate-y-1 transition-all duration-300"
  >
    <Icon size={16} />
  </a>
);

export default Footer;