/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#D32F2F', // The bright red accent color
        brandDark: '#1A1A1A', // The main dark background
        brandGray: '#2B2B2B', // The slightly lighter gray for cards/sections
        brandLightGray: '#B0B0B0', // Text gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import a clean sans-serif font like Inter in your CSS
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.4)), url('/assets/hero-car.jpg')", // Replace path later
      }
    },
  },
  plugins: [],
}