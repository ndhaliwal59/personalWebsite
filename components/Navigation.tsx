'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FolderOpen, User, FileText } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'terminal', label: 'Terminal', icon: Terminal },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText }
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="text-white font-bold text-xl">Nishan Dhaliwal</div>
          </motion.div>

          {/* Navigation Tabs - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-1">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4 text-sm"
          >
            <a
              href="https://github.com/ndhaliwal59"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <div className="text-gray-600">|</div>
            <a
              href="https://www.linkedin.com/in/nishan-dhaliwal-034922238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
