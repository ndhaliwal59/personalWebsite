'use client';

import React from 'react';

interface TerminalCommandProps {
  command: string;
}

export const TerminalCommand: React.FC<TerminalCommandProps> = ({ command }) => {
  return (
    <div className="flex items-center">
      <span className="text-terminal-purple mr-2">❯</span>
      <span className="text-terminal-white font-terminal">{command}</span>
    </div>
  );
};
