/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0f172a', // slate-900
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f8fafc',  // gray-50
        },
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa',  // blue-400
        },
      },
    },
  },
  plugins: [],
}
