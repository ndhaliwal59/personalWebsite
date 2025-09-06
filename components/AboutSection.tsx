'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/about';

const aboutTopics = [
  { id: 'bio', title: 'Bio', icon: '👨‍💻' },
  { id: 'interests', title: 'Interests', icon: '🎯' },
  { id: 'skills', title: 'Skills', icon: '⚡' },
  { id: 'fun-facts', title: 'Fun Facts', icon: '🎉' }
];

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get to know me better - my background, skills, interests, and what makes me unique as an aspiring ML engineer.
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* Bio and Interests Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">About Me</h3>
                  <p className="text-gray-400 text-sm">2nd Year Computer Science Student</p>
                </div>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                {aboutData.bio.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-sm">{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Languages</span>
                  <span className="text-white font-medium">{aboutData.technicalSkills.languages.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Frameworks</span>
                  <span className="text-white font-medium">{aboutData.technicalSkills.frameworks.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Projects</span>
                  <span className="text-white font-medium">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Experience</span>
                  <span className="text-white font-medium">2 Years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Interests & Passions</h3>
            <p className="text-gray-400 text-sm">What drives me and keeps me motivated</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutData.interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="text-sm">🎯</span>
                  </div>
                  <span className="text-white text-sm font-medium">{interest}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Technical Skills</h3>
            <p className="text-gray-400 text-sm">Technologies and tools I work with</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                  <span className="mr-2">💻</span>
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalSkills.languages.map((lang, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-white/10 text-white rounded-md border border-white/20 text-xs font-medium"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                  <span className="mr-2">🔧</span>
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalSkills.frameworks.map((framework, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-white/10 text-white rounded-md border border-white/20 text-xs font-medium"
                    >
                      {framework}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                  <span className="mr-2">🛠️</span>
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalSkills.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-white/10 text-white rounded-md border border-white/20 text-xs font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
                  <span className="mr-2">🗄️</span>
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.technicalSkills.databases.map((db, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-white/10 text-white rounded-md border border-white/20 text-xs font-medium"
                    >
                      {db}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Soft Skills</h3>
            <p className="text-gray-400 text-sm">Personal qualities that help me succeed</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {aboutData.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="text-white text-sm">•</span>
                  <span className="text-gray-300 text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
