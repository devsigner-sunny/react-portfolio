const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      scale: {
        '180': '1.8',
        '200': '2',
        '300': '3',
      },
      spacing: {
        '20vh': '20vh',
        '100vh': '100vh',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      }
    },
  },
  plugins: [],
}