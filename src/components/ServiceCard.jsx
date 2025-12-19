import { motion } from 'framer-motion';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({ image, icon: Icon, title, description, to }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm group transition-all duration-500 hover:border-brandRed/50 hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)]"
    >
      {/* Image Container */}
      <div className="h-64 overflow-hidden relative">
        <div className="absolute top-5 left-5 bg-brandRed p-3 rounded-2xl z-20 shadow-xl group-hover:scale-110 transition-transform">
          <Icon className="text-white text-xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">
          {title}
        </h3>
        <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
          {description}
        </p>
        
        <Link 
          to={to || "/services"} 
          className="inline-flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-brandRed transition-colors"
        >
          Explorer le service <FaChevronRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;