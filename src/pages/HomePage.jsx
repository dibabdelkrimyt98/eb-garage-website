// src/pages/HomePage.jsx
import React from 'react';
import { FaCar, FaScroll, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Crucial pour la navigation SPA

// NOTE: Aucune modification des imports d'assets
import ppfCar from '../assets/noire.jpg';
import wrapCar from '../assets/range.jpg';
import tintCar from '../assets/star.jpg';
import workshop from '../assets/workshop.jpg';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';


const servicesData = [
  {
    title: "Teintage de Vitres",
    description: "Films céramiques premium pour le rejet de chaleur, la protection UV et l'intimité. Amélioration esthétique avec performance supérieure.",
    image: tintCar, 
    icon: FaCar
  },
  {
    title: "Film de Protection de Peinture (PPF)",
    description: "Armure invisible pour votre peinture. Défendez-vous contre les éclats de roche, les rayures et les débris de la route grâce à la technologie auto-cicatrisante.",
    image: ppfCar, 
    icon: FaShieldAlt
  },
  {
    title: "Wrapping Personnalisé",
    description: "Changements de couleur complets, graphismes personnalisés et marquage commercial. Transformez entièrement l'apparence de votre véhicule.",
    image: wrapCar, 
    icon: FaScroll
  }
];

function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* --- HERO SECTION (Section Héro) --- */}
      <section 
        className="relative h-screen min-h-[700px] flex items-center bg-cover bg-center"
        // FIX: Utilisation du chemin public
        style={{ backgroundImage: "url('/assets/hero-car.png')" }} 
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/90 via-brandDark/60 to-transparent"></div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 uppercase">
              Protection Ultime.<br />
              Style Inégalé.
            </h1>
            <p className="text-xl text-brandLightGray mb-10 leading-relaxed max-w-xl">
              Services Premiers de Teintage de Vitres, Film de Protection de Peinture (PPF) et Wrapping Personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              
              {/* LIEN 1: Book Your Service -> /contact */}
              <Link 
                to="/devis" 
                className="bg-brandRed hover:bg-red-700 text-white text-sm uppercase font-bold px-8 py-4 rounded shadow-md transition-all text-center"
              >
                Réserver Votre Service
              </Link>
              
              {/* LIEN 2: View Our Work -> /portfolio */}
              <Link 
                to="/portfolio" 
                className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white text-sm uppercase font-bold px-8 py-4 rounded transition-all text-center"
              >
                Voir Nos Réalisations
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (Section Services) --- */}
      <section id="services" className="py-24 px-6 md:px-12 bg-brandDark relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
             <h2 className="text-4xl font-bold text-white uppercase inline-block relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-brandRed">
              Notre Expertise
            </h2>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CRAFTSMANSHIP SECTION (Section Artisanat) --- */}
      <section className="flex flex-col md:flex-row bg-brandGray">
        <div className="md:w-1/2 h-[400px] md:h-auto relative min-h-[500px]">
          <img 
            src={workshop}
            alt="Atelier EB Garage" 
            className="w-full h-full object-cover absolute inset-0"
          />
          
        </div>

        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight mb-8">
            Savoir-faire<br/>Méticuleux.
          </h2>
          <p className="text-brandLightGray leading-relaxed text-lg mb-8">
            Chez EB GARAGE, nous ne faisons pas qu'appliquer des films ; nous les perfectionnons. Notre environnement d'atelier clinique assure une installation sans contaminants, livrée par des professionnels certifiés passionnés par la perfection automobile.
          </p>
          {/* LIEN: Learn about our process -> /workshop */}
          <Link to="/workshop" className="text-brandRed uppercase font-bold tracking-wider hover:underline w-fit">
            Découvrir notre processus
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;