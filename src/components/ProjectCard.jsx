import { motion } from 'framer-motion';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Aspect Ratio Container (Prevents jumping) */}
      <div className="aspect-[4/5] md:aspect-[4/3] w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay - Gradient that becomes darker on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content - Slides up on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <span className="bg-brandRed text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-white uppercase leading-none mb-1">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm font-medium">
          {project.service}
        </p>

        {/* View Icon */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <FaPlus className="text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;