import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import workshopHero from '../assets/workshop.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WorkshopPresentation from '../components/WorkshopPresentation';

function WorkshopPage() {
    const { scrollY } = useScroll();

    // Responsive Parallax: Reduced movement range on mobile to prevent jitter
    const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-brandDark font-sans selection:bg-brandRed selection:text-white">
            <Navbar />

            {/* --- HERO BANNER --- */}
            {/* Added padding-top to ensure content doesn't hide behind navbar on mobile */}
            <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
                <motion.div 
                    style={{ y: yParallax }}
                    className="absolute inset-0 z-0"
                >
                    <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${workshopHero})` }}
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </motion.div>

                <motion.div 
                    style={{ opacity: opacityFade }}
                    className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* SUPER RESPONSIVE TEXT: 4xl on Phone -> 6xl on Tablet -> 9xl on Desktop */}
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-none mb-4 md:mb-6 italic tracking-tighter">
                            NOTRE <span className="stroke-text text-transparent">ATELIER</span>
                        </h1>
                    </motion.div>
                    
                    <p className="text-zinc-300 text-base md:text-xl font-light max-w-xs md:max-w-2xl mx-auto leading-relaxed">
                        Un espace conçu pour la précision. Où chaque micron compte.
                    </p>
                </motion.div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <WorkshopPresentation />

            {/* --- FINAL CTA --- */}
            <section className="py-16 md:py-20 px-6 bg-black border-t border-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-5xl font-black text-white uppercase mb-8">
                        Venez voir la <span className="text-brandRed">différence</span>.
                    </h2>
                    {/* Buttons stack vertically on mobile, horizontally on desktop */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                         <Link to="/portfolio" className="w-full sm:w-auto">
                            <button className="w-full border border-white text-white hover:bg-white hover:text-black font-bold uppercase px-8 py-4 rounded-full transition-all duration-300">
                                Voir nos réalisations
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full bg-brandRed text-white hover:bg-red-700 font-bold uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-900/30">
                                Réserver un créneau
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style dangerouslySetInnerHTML={{ __html: `
                .stroke-text {
                    -webkit-text-stroke: 1px white;
                }
                @media (min-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px white;
                    }
                }
            `}} />
        </div>
    );
}

export default WorkshopPage;