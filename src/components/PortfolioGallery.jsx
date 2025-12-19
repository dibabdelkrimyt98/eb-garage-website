import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

// IMPORT YOUR ASSETS
import car02 from '../assets/blue.jpg';
import car04 from '../assets/noire.jpg';
import car03 from '../assets/range.jpg';
import car01 from '../assets/toyota.jpg';

const projectData = [
  { id: 1, title: "Audi RS7", service: "Wrapping Noir Mat", category: "wrapping", image: car01 },
  { id: 2, title: "Range Rover", service: "Teintage Céramique", category: "tinting", image: car02 },
  { id: 3, title: "BMW M4", service: "PPF & Teintage", category: "ppf", image: car03 },
  { id: 4, title: "Mercedes G-Wagon", service: "PPF Complet", category: "ppf", image: car04 },
  { id: 5, title: "Porsche 911", service: "Décalcomanies", category: "wrapping", image: car04 },
  { id: 6, title: "Tesla Model 3", service: "Wrapping Blanc", category: "wrapping", image: car03 },
];

const categories = [
  { key: 'all', label: 'Tout' },
  { key: 'wrapping', label: 'Wrapping' },
  { key: 'ppf', label: 'PPF' },
  { key: 'tinting', label: 'Teintage' },
];

const PortfolioGallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  return (
    <div className="py-20 bg-brandDark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Modern Filter Tabs --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`relative px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                filter === cat.key ? 'text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {filter === cat.key && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-brandRed rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* --- Animated Grid --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Lightbox Modal (Full Screen View) --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl hover:text-brandRed transition-colors">
              <FaTimes />
            </button>
            
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-zinc-800"
              />
              <div className="mt-4 text-center">
                <h3 className="text-3xl font-black text-white uppercase">{selectedProject.title}</h3>
                <p className="text-brandRed font-bold uppercase tracking-widest text-sm">{selectedProject.service}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGallery;