/* eslint-disable */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [require('nightwind'), require('@tailwindcss/line-clamp')],
};
