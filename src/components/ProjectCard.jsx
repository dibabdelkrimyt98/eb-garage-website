// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ imageSrc, title, service, link = "#" }) => {
  return (
    <a href={link} className="block group rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-brandRed/50 hover:scale-[1.02]">
      
      {/* Image Container with Hover Effect */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>

      {/* Text Content */}
      <div className="bg-brandGray p-6">
        <h3 className="text-xl font-bold text-white mb-2 uppercase group-hover:text-brandRed transition-colors">
          {title}
        </h3>
        <p className="text-sm text-brandLightGray">
          Service: {service}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;