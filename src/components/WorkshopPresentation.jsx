// src/components/WorkshopPresentation.jsx
import React from 'react';
import { FaAward, FaLightbulb, FaShieldAlt, FaTools, FaUserCheck } from 'react-icons/fa';
import workshop from '../assets/workshop.jpg'; // Import for image placeholder

// Définition des données des caractéristiques de l'atelier traduites
const workshopFeatures = [
    {
        title: "Installations à la Pointe de la Technologie",
        description: "Notre atelier est équipé des derniers outils et technologies, conçus pour la précision et l'efficacité dans chaque service que nous effectuons.",
        icon: FaTools
    },
    {
        title: "Environnement à Température Contrôlée",
        description: "Des baies sans poussière et à température régulée assurent des conditions optimales pour l'adhérence des films, prévenant les imperfections et garantissant une finition impeccable.",
        icon: FaLightbulb // Représente l'environnement contrôlé/l'éclairage
    },
    {
        title: "Techniciens Certifiés et Expérimentés",
        description: "Notre équipe est composée de professionnels hautement qualifiés et certifiés, passionnés par la perfection automobile et dédiés à un artisanat méticuleux.",
        icon: FaUserCheck
    },
    {
        title: "Manipulation de Produits Premium",
        description: "Chaque rouleau de film et de vinyle est stocké et manipulé avec le plus grand soin dans un environnement immaculé pour maintenir l'intégrité et la performance du produit.",
        icon: FaShieldAlt // Représente la protection/le soin
    },
    {
        title: "Assurance Qualité Rigoureuse",
        description: "Des inspections rigoureuses à plusieurs points sont menées après chaque service pour garantir que nos normes élevées de qualité et de satisfaction client sont toujours respectées.",
        icon: FaAward
    }
];

const WorkshopPresentation = () => {
    return (
        <div className="py-16 md:py-24 bg-brandDark">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
                    Notre Atelier de Pointe
                </h2>

                {/* Vue d'ensemble de l'Atelier */}
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <p className="text-xl text-brandLightGray leading-relaxed mb-6">
                        Chez EB GARAGE, notre engagement envers l'excellence commence par notre environnement. Nos installations sont méticuleusement conçues pour fournir les conditions idéales pour un entretien automobile supérieur. Nous combinons technologie avancée et cadre immaculé pour garantir que chaque détail est perfectionné.
                    </p>
                    {/* Placeholder pour une photo principale de l'atelier */}
                    <div className="w-full h-96 bg-brandGray rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden mt-10">
                        <div className='text-brandLightGray text-lg font-bold z-10'>
                            [Espace Réservé Photo Intérieur de l'Atelier Principal]
                        </div>
                        {/* Utilisation de l'image importée pour le fond semi-transparent */}
                        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${workshop})` }}></div>
                    </div>
                </div>


                {/* Grille des Caractéristiques */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {workshopFeatures.map((feature, index) => (
                        <div 
                            key={index} 
                            // Ajout d'une interactivité simple au survol
                            className="bg-brandGray rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <feature.icon className="text-brandRed text-5xl mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase">{feature.title}</h3>
                            <p className="text-brandLightGray leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Appel à l'Action pour Réservation/Visite */}
                <div className="text-center mt-20">
                    <p className="text-xl text-brandLightGray mb-6">
                        Découvrez par vous-même la précision et le soin de EB GARAGE.
                    </p>
                    <a href="/devis">
                        <button className="bg-brandRed hover:bg-red-700 text-white text-lg uppercase font-bold px-10 py-4 rounded shadow-2xl transition-all duration-300">
                            Réservez Votre Service
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkshopPresentation;