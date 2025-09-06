'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional experience, education, and qualifications as an aspiring ML engineer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Full Formatted Resume Coming Soon!
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            I'm currently updating my resume with the latest projects and experiences. 
            In the meantime, you can explore my portfolio to learn more about my work and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 rounded-lg p-5 border border-white/10"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎓</span>
              </div>
              <h4 className="text-lg font-semibold text-white">Education</h4>
            </div>
            <div className="space-y-1">
              <p className="text-white font-medium text-sm">BSc Computer Science</p>
              <p className="text-gray-400 text-xs">2nd Year Student</p>
              <p className="text-gray-400 text-xs">Focus on Machine Learning & AI</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 rounded-lg p-5 border border-white/10"
          >
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-white">Focus Areas</h4>
            </div>
            <div className="space-y-1">
              <p className="text-white font-medium text-sm">Machine Learning</p>
              <p className="text-white font-medium text-sm">Artificial Intelligence</p>
              <p className="text-gray-400 text-xs">Deep Learning, NLP, Computer Vision</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm">
            In the meantime, you can explore my:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">View Projects</span>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-4 py-2 bg-black/20 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <FileText size={16} />
              <span className="text-sm font-medium">Skills & Experience</span>
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-white/80 text-lg">💼</span>
            <p className="text-gray-300 text-center text-sm">
              For a detailed resume or to discuss opportunities, please reach out via the contact information.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
