// src/components/PortfolioGallery.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

// 1. IMPORT YOUR UPLOADED ASSETS
import car02 from '../assets/blue.jpg';
import car04 from '../assets/noire.jpg';
import car03 from '../assets/range.jpg';
import car01 from '../assets/toyota.jpg';

const projectData = [
    {
        id: 1,
        title: "Audi RS7 - Matte Black Wrap",
        service: "Full Vehicle Wrapping",
        image: car01,
        detailsLink: "#"
    },
    {
        id: 2,
        title: "Range Rover - Ceramic Tint",
        service: "Window Tinting",
        image: car02,
        detailsLink: "#"
    },
    {
        id: 3,
        title: "BMW M4 - PPF & Tint",
        service: "PPF & Window Tinting",
        image: car03,
        detailsLink: "#"
    },
    {
        id: 4,
        title: "Mercedes G-Wagon - Full PPF",
        service: "Paint Protection Film",
        image: car04,
        detailsLink: "#"
    },
    {
        id: 5,
        title: "Porsche 911 - Custom Decals",
        service: "Custom Wrapping",
        image: car04, // Reusing image for display
        detailsLink: "#"
    },
    {
        id: 6,
        title: "Tesla Model 3 - Gloss White Wrap",
        service: "Full Vehicle Wrapping",
        image: car03, // Reusing image for display
        detailsLink: "#"
    },
];

const PortfolioGallery = () => {
  return (
    <div className="py-16 md:py-24 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
          Latest Projects
        </h2>

        {/* Filters/Sorting (Placeholder) */}
        <div className='flex justify-center space-x-4 mb-12'>
            <button className='text-brandRed border-b-2 border-brandRed uppercase font-bold text-sm px-4 py-2'>All Work</button>
            <button className='text-brandLightGray hover:text-white uppercase font-medium text-sm px-4 py-2 transition-colors'>Wrapping</button>
            <button className='text-brandLightGray hover:text-white uppercase font-medium text-sm px-4 py-2 transition-colors'>PPF</button>
            <button className='text-brandLightGray hover:text-white uppercase font-medium text-sm px-4 py-2 transition-colors'>Tinting</button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
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
                Load More Projects
            </button>
        </div>

      </div>
    </div>
  );
};

export default PortfolioGallery;