/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

     fontFamily: {
        kumar: ['"Kumar One Outline"', 'system-ui'],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0f172a', 
        },
        text: {
          light: '#1f2937', 
          dark: '#f8fafc',  
        },
        primary: {
          light: '#3b82f6', 
          dark: '#60a5fa',  
        },
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
        },
        drainRefill: {
          '0%': { height: '100%' },
          '50%': { height: '0%' },
          '100%': { height: '100%' },
        },
        water: {
          '0%': { backgroundColor: '#5237F9' },
          '50%': { backgroundColor: '#6c55fa' },
          '100%': { backgroundColor: '#5237F9' },
        },
      },
      animation: {
        wave: 'wave 2s infinite linear',
        'drain-refill': 'drainRefill 4s ease-in-out forwards',
        water: 'water 4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
