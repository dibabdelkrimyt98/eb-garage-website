import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo_official.png';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Gauche : Logo */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="EB Garage" className="h-14 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>

        {/* Centre : Informations de Contact */}
        <div className="flex flex-col space-y-4 text-brandLightGray text-sm items-center md:items-start">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-brandRed" />
            <span>0558 00 40 13</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-brandRed" />
            <span>info@ebgarage.com</span>
          </div>
           <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-brandRed mt-1" />
            <span>Cité Ben Mokadem, Sidi Abdelkader,
            Blida, Algérie</span>
          </div>
        </div>

        {/* Droite : Icônes Réseaux Sociaux */}
        <div className="flex justify-center md:justify-end space-x-4">
          {/* Facebook */}
          <SocialIcon 
            icon={FaFacebookF} 
            link="https://web.facebook.com/profile.php?id=100063539055073" 
          />
          {/* Instagram - Ajoutez votre lien ici */}
          <SocialIcon 
            icon={FaInstagram} 
            link="https://www.instagram.com/eb_garage_?igsh=ZWJoNTVraTI5czkw" 
          />

          <SocialIcon 
            icon={FaTiktok} 
            link="https://www.tiktok.com/@eb.garage3?_r=1&_t=ZS-92HSxixZTqZ" 
          />


          {/* YouTube - Ajoutez votre lien ici */}
          <SocialIcon 
            icon={FaYoutube} 
            link="https://www.youtube.com/" 
          />
        </div>
      </div>

      {/* Section Crédit Développeur */}
      <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-brandLightGray text-xs md:text-sm">
        <p>
          Ce site a été développé par{' '}
          <a 
            href="https://dib-dev.vercel.app/" // Remplacez par votre vrai site web
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brandRed hover:text-white transition-colors font-semibold"
          >
            Dib Abdelkrim Y T
          </a>
        </p>
      </div>
    </footer>
  );
};

// Helper component for social icons
// Modifié pour accepter un prop 'link'
const SocialIcon = ({ icon: Icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-brandGray p-3 rounded-full text-brandLightGray hover:bg-brandRed hover:text-white transition-all"
  >
    <Icon size={18} />
  </a>
);

export default Footer;