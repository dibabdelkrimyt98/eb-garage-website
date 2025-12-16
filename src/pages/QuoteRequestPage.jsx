// src/pages/QuoteRequestPage.jsx
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QuoteForm from '../components/QuoteForm'; // Nouveau composant de formulaire

function QuoteRequestPage() {
    return (
        <div className="min-h-screen bg-brandDark font-sans">
            <Navbar />

            {/* Section Héro du Formulaire de Devis */}
            <section className="py-16 md:py-24 bg-brandGray/10">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <h1 className="text-5xl font-extrabold text-white mb-4 uppercase">
                        Demande de Devis Personnalisé
                    </h1>
                    <p className="text-xl text-brandLightGray max-w-2xl mx-auto">
                        Répondez à quelques questions simples pour nous aider à préparer l'estimation la plus précise pour votre véhicule.
                    </p>
                </div>
            </section>

            {/* Conteneur principal du formulaire en étapes */}
            <div className="py-12 md:py-16 max-w-4xl mx-auto px-6 md:px-12">
                <QuoteForm />
            </div>

            <Footer />
        </div>
    );
}

export default QuoteRequestPage;