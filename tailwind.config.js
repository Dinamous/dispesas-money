/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'green': '#00875f',
        'green-300': '#26A36E',
        'green-500': '#088550 ',
        'bg': '#121214',
        'lightGray': '#202024'
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}