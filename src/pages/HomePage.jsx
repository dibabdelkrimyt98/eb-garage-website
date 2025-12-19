import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowRight, FaCar, FaCheckCircle, FaScroll, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Assets
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
    description: "Films céramiques premium pour le rejet de chaleur et l'intimité. Performance supérieure.",
    image: tintCar,
    icon: FaCar
  },
  {
    title: "Protection Peinture (PPF)",
    description: "Armure invisible auto-cicatrisante contre les éclats de roche et les rayures.",
    image: ppfCar,
    icon: FaShieldAlt
  },
  {
    title: "Wrapping Personnalisé",
    description: "Transformez l'apparence de votre véhicule avec des finitions uniques et audacieuses.",
    image: wrapCar,
    icon: FaScroll
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function HomePage() {
  return (
    <div className="min-h-screen bg-brandDark text-white overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* Added pt-24 to md:pt-32 to ensure text starts below the absolute Navbar */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-12">
        {/* Background Parallax Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('/assets/hero-car.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Enhanced gradient for better text readability */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-brandDark/80 via-transparent to-brandDark"></div>
        </motion.div>

        <div className="relative z-10 px-6 max-w-7xl mx-auto text-center md:text-left w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brandRed font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
              L'excellence Automobile
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] mb-6 md:mb-8 uppercase italic tracking-tighter">
              PROTECTION <br /> 
              <span className="text-transparent stroke-text">INVISIBLE.</span> <br />
              STYLE ABSOLU.
            </h1>
            <p className="text-base md:text-xl text-zinc-300 mb-8 md:mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
              Le leader de la personnalisation haut de gamme. Donnez à votre véhicule la protection et l'esthétique qu'il mérite.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
              <Link to="/devis" className="w-full sm:w-auto group bg-brandRed text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300">
                Obtenir un devis <FaArrowRight className="group-hover:translate-x-2 transition-transform"/>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest border border-white/20 hover:border-brandRed flex items-center justify-center transition-all">
                Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator - Hidden on very small screens to avoid overlap */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-5 h-8 md:w-6 md:h-10 border-2 border-white/20 rounded-full hidden sm:flex justify-center p-1"
        >
          <div className="w-1 h-1.5 md:h-2 bg-brandRed rounded-full"></div>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 md:py-32 px-6 bg-brandDark">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Nos Services <span className="text-brandRed">Premium</span>
              </h2>
              <div className="w-20 md:w-24 h-2 bg-brandRed mt-4"></div>
            </div>
            <p className="text-zinc-500 max-w-md text-sm md:text-base">
              Nous utilisons uniquement des matériaux de classe mondiale pour garantir un résultat sans compromis.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          >
            {servicesData.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="group cursor-pointer">
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CRAFTSMANSHIP SECTION --- */}
      <section className="py-20 md:py-24 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-2xl order-2 md:order-1"
          >
            <img src={workshop} alt="Atelier" className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brandRed/10 mix-blend-overlay"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tight">
              L'Art de la <br /> <span className="text-brandRed">Perfection.</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Chaque véhicule qui entre dans notre atelier est traité comme une œuvre d'art. Nos techniciens certifiés opèrent dans un environnement contrôlé pour une pose millimétrée.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {['Environnement Clinique', 'Certifié Avery & 3M', 'Garantie Longue Durée'].map((text) => (
                <li key={text} className="flex items-center gap-3 font-bold uppercase text-[10px] md:text-xs tracking-widest">
                  <FaCheckCircle className="text-brandRed text-base md:text-lg" /> {text}
                </li>
              ))}
            </ul>

            <Link to="/workshop" className="inline-block pt-2 text-brandRed font-black uppercase text-[10px] md:text-xs tracking-[0.3em] border-b-2 border-brandRed pb-2 hover:text-white hover:border-white transition-all">
              Notre Processus
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          text-shadow: none;
        }
        @media (max-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 0.5px rgba(255,255,255,0.4);
          }
        }
      `}} />
    </div>
  );
}

export default HomePage;