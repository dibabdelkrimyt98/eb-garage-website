// src/pages/PortfolioPage.jsx
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PortfolioGallery from '../components/PortfolioGallery';

function PortfolioPage() {
    // 1. État pour stocker la position de défilement verticale
    const [scrollPosition, setScrollPosition] = useState(0);

    // 2. Fonction pour mettre à jour l'état de défilement
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // 3. Ajout de l'écouteur d'événement au montage du composant
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Nettoyage de l'écouteur d'événement au démontage
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 4. Calcul des styles dynamiques basés sur la position de défilement
    // Nous limitons l'effet à une certaine distance (ex: 400px)
    const opacityFactor = 1 - Math.min(scrollPosition / 400, 1);
    const scaleFactor = 1 + Math.min(scrollPosition / 1500, 0.1); // Max 10% de zoom

    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* --- PORTFOLIO HERO BANNER --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3}), rgba(26, 26, 26, ${0.7 + (1 - opacityFactor) * 0.3})), url('/assets/portfolio-hero.png')`,
                    // Parallaxe simple : le fond bouge légèrement moins vite
                    transform: `translateY(${scrollPosition * 0.4}px)`, 
                }} 
            >
                {/* Conteneur pour l'effet de fondu et d'échelle sur le texte */}
                <div 
                    className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full transition-all duration-100 ease-out"
                    style={{
                        opacity: opacityFactor,
                        transform: `scale(${scaleFactor})`,
                    }}
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Nos Réalisations
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        Une galerie soigneusement sélectionnée montrant notre dévouement à une exécution sans faille dans le teintage, le PPF et le wrapping.
                    </p>
                </div>
            </section>

            {/* --- PORTFOLIO GALLERY (Le composant principal) --- */}
            <PortfolioGallery />

            <Footer />
        </div>
    );
}

export default PortfolioPage;