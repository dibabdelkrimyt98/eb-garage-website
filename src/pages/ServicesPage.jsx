// src/pages/ServicesPage.jsx
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServicesPresentation from '../components/ServicesPresentation';

function ServicesPage() {
    // 1. État pour gérer la position de défilement pour la bannière Héro
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 2. Calcul des styles dynamiques
    const maxScrollEffect = 400; // La hauteur maximale de défilement où l'effet s'applique
    const opacityFactor = 1 - Math.min(scrollPosition / maxScrollEffect, 1);
    const backgroundParallax = scrollPosition * 0.3; // Vitesse de parallaxe du fond

    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* --- SERVICES HERO BANNER (Interactif) --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                style={{ 
                    // Effet Parallaxe sur le Fond
                    backgroundImage: `linear-gradient(rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3}), rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3})), url('/assets/workshop-banner.png')`,
                    transform: `translateY(${backgroundParallax}px)`,
                }} 
            >
                {/* Contenu avec effet de fondu */}
                <div 
                    className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full transition-opacity duration-100 ease-out"
                    style={{ opacity: opacityFactor }}
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Nos Services
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        Installation experte des films et vinyles automobiles de la plus haute qualité, soutenue par un savoir-faire supérieur et un accompagnement dédié.
                    </p>
                </div>
            </section>

            {/* --- SERVICE PRESENTATION (Le composant principal) --- */}
            <ServicesPresentation />

            {/* --- PRICING/PROCESS CTA SECTION --- */}
            <section className="bg-black py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white uppercase mb-4 md:mb-0">
                        Prêt à obtenir une estimation détaillée ?
                    </h3>
                    <a href="/devis">
                        <button className="bg-brandRed hover:bg-red-700 text-white font-bold px-8 py-3 rounded uppercase transition-colors">
                            Demander un Devis Personnalisé
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ServicesPage;