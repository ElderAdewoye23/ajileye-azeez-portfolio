/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',     // white
        secondary: '#F3BA1E',   // yellow
        background: '#000000'   // black
      },
      fontFamily: {
        langar: ['Langar', 'cursive'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
