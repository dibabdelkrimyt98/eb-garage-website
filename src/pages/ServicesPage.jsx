// src/pages/ServicesPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServicesPresentation from '../components/ServicesPresentation';

function ServicesPage() {
    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* --- SERVICES HERO BANNER --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                // Use a high-impact workshop or tinted car image for the background
                style={{ backgroundImage: "linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('/assets/workshop-banner.png')" }} 
            >
                {/* Content Overlay */}
                <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Our Services
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        Expert installation of the highest quality automotive films and vinyls, backed by superior craftsmanship and dedicated support.
                    </p>
                </div>
            </section>

            {/* --- SERVICE PRESENTATION (The core content component) --- */}
            <ServicesPresentation />

            {/* --- PRICING/PROCESS CTA SECTION (Optional but good UX) --- */}
            <section className="bg-black py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white uppercase mb-4 md:mb-0">
                        Ready to get a detailed estimate?
                    </h3>
                    <a href="/contact">
                        <button className="bg-brandRed hover:bg-red-700 text-white font-bold px-8 py-3 rounded uppercase transition-colors">
                            Request Custom Pricing
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ServicesPage;