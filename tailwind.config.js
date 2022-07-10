/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        Roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage:{
        'hero': "url('/src/assets/hero.jpg')"
      }
    },
  },
  plugins: [],
}
