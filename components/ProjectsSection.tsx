'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects, getProjectsByCategory, getFeaturedProjects } from '../data/projects';

const categories = ['All', 'Featured', 'Learning Projects', 'Early Works'];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const getProjectsForCategory = (category: string) => {
    if (category === 'All') {
      return projects;
    }
    if (category === 'Featured') {
      return getFeaturedProjects();
    }
    return getProjectsByCategory(category);
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'All': '📁',
      'Featured': '⭐',
      'Learning Projects': '🎓',
      'Early Works': '🌱'
    };
    return icons[category] || '📁';
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">My Projects</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Explore my work across different technologies and domains. Each project represents my passion for innovation and problem-solving.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-white/20 text-white border border-white/30'
                : 'bg-black/20 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            <span className="text-sm">{getCategoryIcon(category)}</span>
            <span>{category}</span>
          </motion.button>
        ))}
      </div>

      {/* Category Header */}
      <div className="text-center mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <span className="text-lg">{getCategoryIcon(activeCategory)}</span>
              <h3 className="text-lg font-semibold text-white">{activeCategory} Projects</h3>
              <span className="text-gray-400 text-sm">({getProjectsForCategory(activeCategory).length})</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Projects Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {getProjectsForCategory(activeCategory).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {getProjectsForCategory(activeCategory).length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">No projects available in this category yet.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};
