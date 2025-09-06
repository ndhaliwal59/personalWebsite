'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TerminalCommand } from './TerminalCommand';
import { TerminalOutput } from './TerminalOutput';
import { processCommand } from '../utils/commandProcessor';

interface TerminalLine {
  id: string;
  type: 'input' | 'output';
  content: string | React.ReactNode;
  timestamp: Date;
}

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Welcome message
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        id: 'welcome-1',
        type: 'output',
        content: 'Welcome to my portfolio terminal! 👋',
        timestamp: new Date()
      },
      {
        id: 'welcome-2',
        type: 'output',
        content: 'Here are the available commands:',
        timestamp: new Date()
      },
      {
        id: 'welcome-3',
        type: 'output',
        content: (
          <div className="text-terminal-white space-y-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="text-terminal-cyan font-bold mb-2">Navigation Commands:</div>
                <div className="space-y-1 text-sm">
                  <div><span className="text-terminal-green">help</span> - Show all commands</div>
                  <div><span className="text-terminal-green">projects</span> - List project categories</div>
                  <div><span className="text-terminal-green">about</span> - List about topics</div>
                  <div><span className="text-terminal-green">resume</span> - Show resume info</div>
                  <div><span className="text-terminal-green">contact</span> - Show contact info</div>
                </div>
              </div>
              <div>
                <div className="text-terminal-cyan font-bold mb-2">Exploration Commands:</div>
                <div className="space-y-1 text-sm">
                  <div><span className="text-terminal-green">show [category]</span> - View projects</div>
                  <div><span className="text-terminal-green">info [number]</span> - Project details</div>
                  <div><span className="text-terminal-green">show [topic]</span> - About details</div>
                  <div><span className="text-terminal-green">clear</span> - Clear terminal</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-terminal-yellow">
              <div className="font-bold mb-2">Quick Start:</div>
              <div className="text-sm"><span className="text-terminal-yellow">Try:</span> <span className="text-terminal-green">show featured</span> <span className="text-terminal-yellow">or</span> <span className="text-terminal-green">show bio</span></div>
            </div>
          </div>
        ),
        timestamp: new Date()
      },
      {
        id: 'welcome-4',
        type: 'output',
        content: '',
        timestamp: new Date()
      }
    ];

    setLines(welcomeLines);
    
    // Focus input after a short delay
    setTimeout(() => {
      inputRef.current?.focus();
    }, 1000);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (command: string) => {
    if (!command.trim()) return;

    // Handle clear command specially
    if (command.trim().toLowerCase() === 'clear') {
      // Reset to initial welcome message
      const welcomeLines: TerminalLine[] = [
        {
          id: 'welcome-1',
          type: 'output',
          content: 'Welcome to my portfolio terminal! 👋',
          timestamp: new Date()
        },
        {
          id: 'welcome-2',
          type: 'output',
          content: 'Here are the available commands:',
          timestamp: new Date()
        },
        {
          id: 'welcome-3',
          type: 'output',
          content: (
            <div className="text-terminal-white space-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-terminal-cyan font-bold mb-2">Navigation Commands:</div>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-terminal-green">help</span> - Show all commands</div>
                    <div><span className="text-terminal-green">projects</span> - List project categories</div>
                    <div><span className="text-terminal-green">about</span> - List about topics</div>
                    <div><span className="text-terminal-green">resume</span> - Show resume info</div>
                    <div><span className="text-terminal-green">contact</span> - Show contact info</div>
                  </div>
                </div>
                <div>
                  <div className="text-terminal-cyan font-bold mb-2">Exploration Commands:</div>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-terminal-green">show [category]</span> - View projects</div>
                    <div><span className="text-terminal-green">info [number]</span> - Project details</div>
                    <div><span className="text-terminal-green">show [topic]</span> - About details</div>
                    <div><span className="text-terminal-green">clear</span> - Clear terminal</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-terminal-yellow">
                <div className="font-bold mb-2">Quick Start:</div>
                <div className="text-sm"><span className="text-terminal-yellow">Try:</span> <span className="text-terminal-green">show ml</span> <span className="text-terminal-yellow">or</span> <span className="text-terminal-green">show bio</span></div>
              </div>
            </div>
          ),
          timestamp: new Date()
        },
        {
          id: 'welcome-4',
          type: 'output',
          content: '',
          timestamp: new Date()
        }
      ];
      setLines(welcomeLines);
      setCurrentInput('');
      return;
    }

    const inputLine: TerminalLine = {
      id: `input-${Date.now()}`,
      type: 'input',
      content: command,
      timestamp: new Date()
    };

    setLines(prev => [...prev, inputLine]);
    setCurrentInput('');
    setIsTyping(true);

    // Process command
    const output = await processCommand(command);
    
    const outputLine: TerminalLine = {
      id: `output-${Date.now()}`,
      type: 'output',
      content: output,
      timestamp: new Date()
    };

    setLines(prev => [...prev, outputLine]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col">
      {/* Terminal Header */}
      <div className="bg-terminal-dark-gray border-b border-terminal-gray px-4 py-2 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-terminal-red rounded-full"></div>
          <div className="w-3 h-3 bg-terminal-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
        </div>
        <div className="text-terminal-gray text-sm">nishan@portfolio:~</div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 bg-terminal-bg p-4 overflow-y-auto font-terminal text-sm rounded-b-lg border border-terminal-gray"
      >
        <div className="space-y-2">
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {line.type === 'input' ? (
                <TerminalCommand command={line.content as string} />
              ) : (
                <TerminalOutput content={line.content} />
              )}
            </motion.div>
          ))}
          
          {/* Current input line */}
          <div className="flex items-center">
            <span className="text-terminal-purple mr-2">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent text-terminal-white outline-none font-terminal"
              placeholder="Type a command..."
              disabled={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
