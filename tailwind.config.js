/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'reveal': 'reveal 0.5s linear'
      },

      keyframes: {
        reveal: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
       
      }
    },

    colors: {
      // Para usar as defaults
      ...colors,
      'black': '#0B0B0B',
      'black-200': '#1A1A1A',
      'primary': '#5033C3',
      'secondary': '#0F043D'
    },
  },
  plugins: [],
}

