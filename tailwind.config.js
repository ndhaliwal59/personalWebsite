/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0a0a0a',
        'terminal-green': '#00ff41',
        'terminal-blue': '#0080ff',
        'terminal-yellow': '#ffff00',
        'terminal-red': '#ff0000',
        'terminal-purple': '#8000ff',
        'terminal-cyan': '#00ffff',
        'terminal-white': '#ffffff',
        'terminal-gray': '#808080',
        'terminal-dark-gray': '#404040',
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
        'terminal': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'type': 'type 2s steps(40, end)',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        type: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
