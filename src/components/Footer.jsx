import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo_official.png';
const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="EB Garage" className="h-14 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col space-y-4 text-brandLightGray text-sm items-center md:items-start">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-brandRed" />
            <span>027 333 7930</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-brandRed" />
            <span>info@garage.com</span>
          </div>
           <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-brandRed mt-1" />
            <span>123 Steemweor, Bashin Driv,<br/> None Yaming, Cach</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <SocialIcon icon={FaFacebookF} />
          <SocialIcon icon={FaInstagram} />
          <SocialIcon icon={FaYoutube} />
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="bg-brandGray p-3 rounded-full text-brandLightGray hover:bg-brandRed hover:text-white transition-all">
    <Icon size={18} />
  </a>
);

export default Footer;