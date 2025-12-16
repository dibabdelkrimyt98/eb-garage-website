// src/components/ServicesPresentation.jsx
import React from 'react';
import { FaCar, FaCaretRight, FaScroll, FaShieldAlt } from 'react-icons/fa';

// Définition des données des services traduites
const detailedServices = [
    {
        title: "Teintage de Vitres",
        subtitle: "Protection UV & Amélioration Esthétique",
        description: "Nous proposons une gamme de films de fenêtre en céramique et carbone haute performance qui bloquent 99 % des rayons UV nocifs et réduisent considérablement l'intrusion de chaleur. Choisissez parmi plusieurs teintes pour une intimité ultime et un look élégant et personnalisé. Comprend une garantie à vie contre le décollement ou les bulles.",
        features: ["Films Céramique & Carbone", "Garantie à Vie", "Réduction de la Chaleur et de l'Éblouissement", "Options d'Intimité"],
        icon: FaCar
    },
    {
        title: "Film de Protection Peinture (PPF)",
        subtitle: "Armure Invisible à Auto-Guérison",
        description: "Le PPF est la défense ultime contre les dangers de la route. Notre film premium à auto-guérison est optiquement transparent, protégeant la peinture de votre véhicule contre les éclats de roche, les insectes, les débris routiers et les abrasions mineures. Nous proposons des kits pour l'avant complet, des wraps complets et des options de couverture personnalisées.",
        features: ["Propriétés d'Auto-Guérison", "Finition Invisible", "Résistance aux Éclats de Roche", "Couverture Complète ou Partielle"],
        icon: FaShieldAlt
    },
    {
        title: "Wrapping de Véhicule",
        subtitle: "Transformation Complète de Couleur",
        description: "Que vous souhaitiez un covering publicitaire temporaire ou un changement de couleur complet pour un look unique, nos services de wrapping vinyle sont inégalés. Nous utilisons du vinyle de haute qualité pour une finition impeccable qui protège également la peinture OEM sous-jacente. Parfait pour l'esthétique personnalisée ou l'image de marque corporative.",
        features: ["Changement de Couleur Complet", "Graphiques & Décalcomanies Personnalisés", "Finitions Mate, Satinée et Brillante", "Protection de la Peinture OEM"],
        icon: FaScroll
    }
];

const ServicesPresentation = () => {
    return (
        <div className="py-16 md:py-24 bg-brandDark">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
                    Notre Gamme de Services Premium
                </h2>

                <div className="space-y-16">
                    {detailedServices.map((service, index) => (
                        <div 
                            key={service.title} 
                            // Alternating layout for visual interest
                            className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Bloc Icône & Description */}
                            <div className="md:w-1/2">
                                <service.icon className="text-brandRed text-5xl mb-4" />
                                <h3 className="text-4xl font-bold text-white mb-2 uppercase">{service.title}</h3>
                                <p className="text-xl font-semibold text-brandLightGray mb-6">{service.subtitle}</p>
                                <p className="text-brandLightGray mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                {/* Liste des Caractéristiques */}
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-white">
                                            <FaCaretRight className="text-brandRed mr-2" />
                                            <span className='text-sm'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Espace Réservé pour l'Image */}
                            <div className="md:w-1/2 w-full h-80 bg-brandGray rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                                <div className='text-brandLightGray text-lg font-bold z-10'>
                                    [{service.title} Espace Réservé Image]
                                </div>
                                {/* Image de fond semi-transparente (ajustez le chemin au besoin) */}
                                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(/assets/${service.title.toLowerCase().replace(/ /g, '-')}.png)` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="text-center mt-20">
                    <p className="text-xl text-brandLightGray mb-6">
                        Prêt à découvrir la différence EB GARAGE ?
                    </p>
                    <a href="/contact">
                        <button className="bg-brandRed hover:bg-red-700 text-white text-lg uppercase font-bold px-10 py-4 rounded shadow-2xl transition-all duration-300">
                            Obtenez Votre Consultation Gratuite
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPresentation;