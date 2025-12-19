import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PortfolioGallery from '../components/PortfolioGallery';

function PortfolioPage() {
  const { scrollY } = useScroll();
  
  // Smooth Parallax Effects using Framer Motion
  const yRange = useTransform(scrollY, [0, 500], [0, 250]);
  const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="min-h-screen bg-brandDark text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yRange }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            // Ensure you have this image or change it
            style={{ backgroundImage: "url('/assets/portfolio-hero.png')" }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brandDark/30 via-brandDark/60 to-brandDark" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: opacityRange }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <span className="text-brandRed font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Excellence Visuelle
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none mb-6">
            Nos <span className="text-transparent stroke-text">Réalisations</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Une galerie soigneusement sélectionnée montrant notre dévouement à une exécution sans faille.
          </p>
        </motion.div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <PortfolioGallery />

      {/* --- CTA SECTION --- */}
      <section className="py-20 border-t border-zinc-800 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
            Votre véhicule mérite d'être <span className="text-brandRed">ici.</span>
          </h2>
          <a href="/devis" className="inline-block bg-white text-black hover:bg-brandRed hover:text-white font-black uppercase text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-brandRed/25 transform hover:-translate-y-1">
            Démarrer votre projet
          </a>
        </div>
      </section>

      <Footer />
      
      {/* Stroke Text Style */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}} />
    </div>
  );
}

export default PortfolioPage;