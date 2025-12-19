import { motion } from 'framer-motion';
import React from 'react';
import { FaAward, FaChevronRight, FaLightbulb, FaShieldAlt, FaTools, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import workshopImg from '../assets/workshop.jpg';

const workshopFeatures = [
    {
        title: "Technologie de Pointe",
        description: "Outils de précision et équipement de diagnostic dernière génération pour une exécution sans faille.",
        icon: FaTools,
        delay: 0.1
    },
    {
        title: "Atmosphère Contrôlée",
        description: "Baies hermétiques et température régulée garantissant une pose de film sans aucune poussière.",
        icon: FaLightbulb,
        delay: 0.2
    },
    {
        title: "Experts Certifiés",
        description: "Une équipe d'artisans passionnés, formés aux techniques les plus exigeantes du detailing.",
        icon: FaUserCheck,
        delay: 0.3
    },
    {
        title: "Produits Premium",
        description: "Stockage sécurisé des vinyles et céramiques pour préserver leur intégrité chimique.",
        icon: FaShieldAlt,
        delay: 0.4
    },
    {
        title: "Contrôle Qualité",
        description: "Inspection microscopique en 3 étapes avant toute restitution de véhicule.",
        icon: FaAward,
        delay: 0.5
    }
];

const WorkshopPresentation = () => {
    return (
        <section className="bg-brandDark relative overflow-hidden">
            
            {/* --- SECTION 1: THE VISION (Split Layout) --- */}
            {/* Added py-16 for mobile, py-24 for desktop */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
                {/* Flex-col for mobile (stack), Row for large screens */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Text Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1"
                    >
                        <div className="inline-block border-l-4 border-brandRed pl-4">
                            {/* Responsive Text Sizing */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                                Le Sanctuaire <br/> de la <span className="text-brandRed">Performance</span>
                            </h2>
                        </div>
                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                            Chez EB GARAGE, l'excellence n'est pas une option, c'est notre standard. Nos installations sont méticuleusement conçues pour créer un environnement stérile, technique et inspirant.
                        </p>
                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                            C'est ici que la technologie rencontre l'artisanat. Loin d'un simple garage, c'est un laboratoire dédié à la perfection esthétique de votre véhicule.
                        </p>
                        
                        <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-brandRed transition-colors mt-4 text-sm md:text-base">
                            Planifier une visite <FaChevronRight className="text-xs" />
                        </Link>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative order-1 lg:order-2"
                    >
                        <div className="absolute -inset-4 border border-zinc-700/50 rounded-lg z-0 hidden md:block" />
                        <div className="absolute -inset-1 border border-brandRed/20 rounded-lg z-0 translate-x-2 translate-y-2 hidden md:block" />
                        
                        {/* Height adjusts from 300px (mobile) to 500px (desktop) */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full bg-zinc-900 rounded-lg overflow-hidden shadow-2xl z-10 group">
                            <img 
                                src={workshopImg} 
                                alt="Atelier Intérieur" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            
                            <div className="absolute bottom-6 left-6">
                                <p className="text-brandRed text-[10px] md:text-xs font-mono mb-1">LOC: ZONE TECHNIQUE A</p>
                                <p className="text-white text-lg md:text-xl font-bold uppercase">Main Hangar</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 2: THE FEATURES (Grid) --- */}
            <div className="bg-zinc-900/50 py-16 md:py-24 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h3 className="text-2xl md:text-4xl font-black text-white uppercase mb-4">Infrastructure</h3>
                        <div className="h-1 w-16 md:w-20 bg-brandRed mx-auto rounded-full" />
                    </motion.div>

                    {/* 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {workshopFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay, duration: 0.5 }}
                                className="group relative bg-black/40 border border-zinc-800 p-6 md:p-8 rounded-2xl hover:border-brandRed/50 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 bg-brandRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                
                                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brandRed group-hover:text-white transition-colors duration-300">
                                        <feature.icon className="text-brandRed text-xl md:text-2xl group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-white uppercase mb-3">{feature.title}</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkshopPresentation;