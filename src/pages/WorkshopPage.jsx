// src/pages/WorkshopPage.jsx
import React, { useEffect, useState } from 'react';
import workshop from '../assets/workshop.jpg'; // Assuming the asset path is now correct
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WorkshopPresentation from '../components/WorkshopPresentation';

function WorkshopPage() {
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

            {/* --- WORKSHOP HERO BANNER (Interactif) --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                style={{ 
                    // Effet Parallaxe sur le Fond et ajustement de l'opacité du gradient
                    backgroundImage: `linear-gradient(rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3}), rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3})), url(${workshop})`,
                    transform: `translateY(${backgroundParallax}px)`,
                }} 
            >
                {/* Contenu avec effet de fondu */}
                <div 
                    className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full transition-opacity duration-100 ease-out"
                    style={{ opacity: opacityFactor }}
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Notre Atelier
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        Un environnement immaculé et de haute technologie où la précision rencontre la passion, assurant des résultats impeccables pour chaque véhicule.
                    </p>
                </div>
            </section>

            {/* --- WORKSHOP PRESENTATION (Le composant principal) --- */}
            <WorkshopPresentation />

            {/* --- CTA FOR GALLERY/VISIT --- */}
            <section className="bg-black py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white uppercase mb-4 md:mb-0">
                        Découvrez nos installations en action.
                    </h3>
                    {/* Placeholder for a gallery link if you create one */}
                    <a href="/gallery"> 
                        <button className="bg-brandRed hover:bg-red-700 text-white font-bold px-8 py-3 rounded uppercase transition-colors">
                            Voir Notre Galerie
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default WorkshopPage;