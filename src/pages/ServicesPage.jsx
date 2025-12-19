import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom'; // <--- Add this line
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServicesPresentation from '../components/ServicesPresentation';

function ServicesPage() {
  const { scrollY } = useScroll();
  
  // Advanced parallax: scale background while fading text
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleEffect = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <div className="min-h-screen bg-brandDark overflow-x-hidden">
      <Navbar />

      {/* --- REFINED HERO BANNER --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y: yParallax, scale: scaleEffect }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/workshop-banner.png')" }}
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-brandDark/40 via-transparent to-brandDark" />
        </motion.div>

        <motion.div 
          style={{ opacity: opacityFade }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter italic mb-4">
            NOS <span className="text-brandRed">SERVICES</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Savoir-faire artisanal et technologie de pointe pour une finition automobile sans compromis.
          </p>
        </motion.div>
      </section>

      {/* --- CONTENT --- */}
      <ServicesPresentation />

      {/* --- FINAL CTA BAR --- */}
      <section className="bg-zinc-900 py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight italic">
            Besoin d'un tarif précis ?
          </h3>
          <Link to="/devis">
            <button className="bg-white text-black hover:bg-brandRed hover:text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all">
              Demander un Devis
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;