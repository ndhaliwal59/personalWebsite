'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Terminal } from '../components/Terminal';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { ResumeSection } from '../components/ResumeSection';

export default function Home() {
  const [activeTab, setActiveTab] = useState('terminal');

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-white">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
                <div className="w-full max-w-4xl h-[600px]">
                  <Terminal />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProjectsSection />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ResumeSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
