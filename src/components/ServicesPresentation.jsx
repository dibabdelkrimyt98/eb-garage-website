import { motion } from 'framer-motion';
import React from 'react';
import { FaCar, FaScroll, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Required for the "Consultation" button
import blueImg from '../assets/blue.jpg';
import noireImg from '../assets/noire.jpg';
import starImg from '../assets/star.jpg';

const detailedServices = [
    {
      title: "Teintage de Vitres",
      subtitle: "Protection UV & Amélioration Esthétique",
      description: "...",
      features: ["Films Céramique & Carbone", "Garantie à Vie", "Réduction de Chaleur", "Intimité Totale"],
      icon: FaCar,
      img: noireImg // 2. USE THE IMPORTED VARIABLE HERE
    },
    {
      title: "Protection Peinture (PPF)",
      subtitle: "Armure Invisible à Auto-Guérison",
      description: "...",
      features: ["Technologie Auto-Guérison", "Finition Invisible", "Résistance Impact", "Protection UV Peinture"],
      icon: FaShieldAlt,
      img: blueImg // 2. USE THE IMPORTED VARIABLE HERE
    },
    {
      title: "Wrapping Véhicule",
      subtitle: "Transformation Complète & Style",
      description: "...",
      features: ["Finition Mate & Brillante", "Design Personnalisé", "Pose Sans Bulles", "Vinyle Premium 3M/Avery"],
      icon: FaScroll,
      img: starImg // 2. USE THE IMPORTED VARIABLE HERE
    }
];


const ServicesPresentation = () => {
  return (
    <section className="py-24 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <service.icon className="text-brandRed text-4xl" />
                  <div className="h-px flex-1 bg-gradient-to-r from-brandRed to-transparent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                  {service.title}
                </h3>
                <p className="text-brandRed font-bold uppercase text-xs tracking-[0.3em]">{service.subtitle}</p>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-200 text-sm font-bold uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 bg-brandRed rotate-45" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className="md:w-1/2 w-full group relative">
                <div className="absolute -inset-4 bg-brandRed/10 rounded-3xl blur-2xl group-hover:bg-brandRed/20 transition-all" />
                <div className="relative h-[400px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-40 p-12 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandRed/10 blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 tracking-tighter italic">
            Prêt pour la <span className="text-brandRed">Perfection</span> ?
          </h2>
          <Link to="/contact">
            <button className="bg-brandRed hover:bg-white hover:text-brandRed text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-brandRed/20">
              Consultation Gratuite
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPresentation;