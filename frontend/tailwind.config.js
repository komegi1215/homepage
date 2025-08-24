/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.image-crisp': {
          'image-rendering': 'crisp-edges',
        },
      });
    }),
  ],
};
