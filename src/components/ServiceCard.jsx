// src/components/ServiceCard.jsx
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, icon: Icon, title, description, to }) => {
  return (
    <div className="bg-brandGray rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
      {/* Image du Haut */}
      <div className="h-56 overflow-hidden relative">
          {/* Icône en superposition */}
          <div className="absolute top-4 left-4 bg-brandDark/80 p-2 rounded-md z-10">
               <Icon className="text-white text-2xl" />
          </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Contenu */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4 uppercase">{title}</h3>
        <p className="text-brandLightGray mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Lien d'Exploration */}
        <Link 
            to={to || "/services"} // Utilise le prop 'to' ou une valeur par défaut
            className="flex items-center text-brandRed font-semibold uppercase text-sm tracking-wider group-hover:underline"
        >
          Explorer <FaChevronRight className="ml-2 text-xs" />
        </Link>
        
      </div>
    </div>
  );
};

export default ServiceCard;