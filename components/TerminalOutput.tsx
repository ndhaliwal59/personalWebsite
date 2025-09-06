'use client';

import React from 'react';

interface TerminalOutputProps {
  content: string | React.ReactNode;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ content }) => {
  if (typeof content === 'string') {
    return (
      <div className="text-terminal-white font-terminal whitespace-pre-wrap">
        {content}
      </div>
    );
  }

  return (
    <div className="font-terminal">
      {content}
    </div>
  );
};
