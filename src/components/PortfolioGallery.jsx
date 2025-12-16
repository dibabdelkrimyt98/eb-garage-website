// src/components/PortfolioGallery.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// 1. IMPORT YOUR UPLOADED ASSETS
import car02 from '../assets/blue.jpg';
import car04 from '../assets/noire.jpg';
import car03 from '../assets/range.jpg';
import car01 from '../assets/toyota.jpg';

// Données traduites avec une catégorie ajoutée pour le filtrage
const projectData = [
    {
        id: 1,
        title: "Audi RS7 - Wrapping Noir Mat",
        service: "Wrapping Complet",
        category: "wrapping",
        image: car01,
        detailsLink: "#"
    },
    {
        id: 2,
        title: "Range Rover - Teintage Céramique",
        service: "Teintage de Vitres",
        category: "tinting",
        image: car02,
        detailsLink: "#"
    },
    {
        id: 3,
        title: "BMW M4 - PPF & Teintage",
        service: "PPF & Teintage",
        category: "ppf", // On peut classer dans l'un ou l'autre
        image: car03,
        detailsLink: "#"
    },
    {
        id: 4,
        title: "Mercedes G-Wagon - PPF Complet",
        service: "Film de Protection Peinture",
        category: "ppf",
        image: car04,
        detailsLink: "#"
    },
    {
        id: 5,
        title: "Porsche 911 - Décalcomanies",
        service: "Wrapping Personnalisé",
        category: "wrapping",
        image: car04, 
        detailsLink: "#"
    },
    {
        id: 6,
        title: "Tesla Model 3 - Wrapping Blanc",
        service: "Wrapping Complet",
        category: "wrapping",
        image: car03, 
        detailsLink: "#"
    },
];

const PortfolioGallery = () => {
  // État pour gérer le filtre actif
  const [filter, setFilter] = useState('all');

  // Logique de filtrage
  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  // Fonction utilitaire pour les classes CSS des boutons
  const getButtonClass = (categoryName) => {
      const baseClass = "uppercase font-bold text-sm px-4 py-2 transition-colors duration-300";
      return filter === categoryName 
        ? `${baseClass} text-brandRed border-b-2 border-brandRed` // Style Actif
        : `${baseClass} text-brandLightGray hover:text-white`;    // Style Inactif
  };

  return (
    <div className="py-16 md:py-24 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
          Derniers Projets
        </h2>

        {/* Filters/Sorting (Maintenant Interactif) */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <button 
                onClick={() => setFilter('all')} 
                className={getButtonClass('all')}
            >
                Tout
            </button>
            <button 
                onClick={() => setFilter('wrapping')} 
                className={getButtonClass('wrapping')}
            >
                Wrapping
            </button>
            <button 
                onClick={() => setFilter('ppf')} 
                className={getButtonClass('ppf')}
            >
                PPF
            </button>
            <button 
                onClick={() => setFilter('tinting')} 
                className={getButtonClass('tinting')}
            >
                Teintage
            </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              imageSrc={project.image}
              title={project.title}
              service={project.service}
              link={project.detailsLink}
            />
          ))}
        </div>
        
        {/* Load More CTA */}
        <div className="text-center mt-16">
            <button className="border-2 border-brandRed hover:bg-brandRed text-brandRed hover:text-white font-bold px-8 py-3 rounded uppercase transition-all">
                Charger Plus de Projets
            </button>
        </div>

      </div>
    </div>
  );
};

export default PortfolioGallery;