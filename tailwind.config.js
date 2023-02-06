/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,

      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 36,
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      green: '#4ADE80',
      linear: 'rgb(31 41 55)',
      gray: {
        200: '#e5e7eb',
        400: '#9CA3AF',
        300: '#DBCCCC',
        600: '#4B5563',
        800: '#1f2937',
        900: '#111827'
      },
      red: {
        400:'#F87171',
        600:'#C00606',
      }
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}
