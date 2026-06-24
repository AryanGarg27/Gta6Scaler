/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gta-bg':      '#08080e',
        'gta-surface': '#111118',
        'gta-card':    '#1a1a28',
        'gta-pink':    '#ff2e5f',
        'gta-cyan':    '#00d4ff',
        'gta-gold':    '#ffd700',
        'gta-text':    '#e8e8f0',
        'gta-muted':   '#5a5a7a',
        'gta-border':  '#252538',
      },
      fontFamily: {
        russo: ["'Russo One'", 'sans-serif'],
        inter:  ["'Inter'",     'sans-serif'],
      },
    },
  },
  plugins: [],
};
