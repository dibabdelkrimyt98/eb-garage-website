// src/pages/ContactPage.jsx
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm'; // Le composant de formulaire dédié
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactPage() {
  return (
    <div className="min-h-screen bg-brandDark font-sans">
      <Navbar />
      
      {/* Spacer pour la Navbar fixe */}
      <div className="pt-24 md:pt-32"></div>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-5xl font-extrabold text-white uppercase mb-12 text-center md:text-left">
          Réserver Votre Rendez-vous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Colonne des Informations de Contact */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white uppercase border-b border-brandRed pb-3">
              Nous Contacter
            </h2>
            
            <div className="space-y-4 text-lg text-brandLightGray">
              <p>
                Prêt à transformer votre véhicule ? Contactez-nous dès aujourd'hui pour discuter de votre projet, obtenir un devis personnalisé ou planifier votre installation.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <FaPhoneAlt className="text-brandRed text-xl" />
                <span className="text-white">027 333 7930</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-brandRed text-xl" />
                <span className="text-white">info@garage.com</span>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-brandRed text-xl mt-1" />
                <span className="text-white">123 Steemweor, Bashin Driv, None Yaming, Cach</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-48 bg-zinc-700 rounded-lg flex items-center justify-center text-brandLightGray">
                [Espace Réservé pour la Carte]
            </div>
          </div>
          
          {/* Colonne du Formulaire de Contact */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;