// src/pages/PortfolioPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PortfolioGallery from '../components/PortfolioGallery';

function PortfolioPage() {
    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* --- PORTFOLIO HERO BANNER --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                style={{ backgroundImage: "linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('/assets/portfolio-hero.png')" }} 
            >
                <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        A curated gallery showcasing our dedication to flawless execution across tinting, PPF, and vinyl wrapping.
                    </p>
                </div>
            </section>

            {/* --- PORTFOLIO GALLERY (The core content component) --- */}
            <PortfolioGallery />

            <Footer />
        </div>
    );
}

export default PortfolioPage;