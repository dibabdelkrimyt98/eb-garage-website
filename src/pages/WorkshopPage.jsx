// src/pages/WorkshopPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WorkshopPresentation from '../components/WorkshopPresentation'; // Import the new component

function WorkshopPage() {
    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* --- WORKSHOP HERO BANNER --- */}
            <section 
                className="relative h-[50vh] min-h-[350px] flex items-center bg-cover bg-center"
                // Use a striking workshop interior shot for the background
                style={{ backgroundImage: "linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.7)), url('/assets/workshop-interior-banner.png')" }} 
            >
                {/* Content Overlay */}
                <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-4 uppercase">
                        Our Workshop
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl">
                        A pristine, high-tech environment where precision meets passion, ensuring impeccable results for every vehicle.
                    </p>
                </div>
            </section>

            {/* --- WORKSHOP PRESENTATION (The core content component) --- */}
            <WorkshopPresentation />

            {/* --- CTA FOR GALLERY/VISIT --- */}
            <section className="bg-black py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white uppercase mb-4 md:mb-0">
                        See our facility in action.
                    </h3>
                    {/* Placeholder for a gallery link if you create one */}
                    <a href="/gallery"> 
                        <button className="bg-brandRed hover:bg-red-700 text-white font-bold px-8 py-3 rounded uppercase transition-colors">
                            View Our Gallery
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default WorkshopPage;