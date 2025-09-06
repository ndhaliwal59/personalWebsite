'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Featured': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Learning Projects': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Early Works': 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
      className="group relative"
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors mb-2 pr-16">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-5">
          <div className="text-white/80 font-medium text-xs mb-2 flex items-center">
            <span className="mr-1">🛠️</span>
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div className="flex space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1 bg-white/10 text-gray-300 rounded text-xs hover:bg-white/20 hover:text-white transition-all duration-300"
                title="View on GitHub"
              >
                <Github size={12} />
                <span>GitHub</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1 bg-white/20 text-white rounded text-xs hover:bg-white/30 transition-all duration-300"
                title="Live Demo"
              >
                <ExternalLink size={12} />
                <span>Demo</span>
              </a>
            )}
          </div>
          
          {!project.githubUrl && !project.demoUrl && (
            <span className="text-gray-500 text-xs italic">Coming Soon</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
