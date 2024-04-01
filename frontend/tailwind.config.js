/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#073068',
      },
      fontFamily:{
        head: ['Kanit'],
      },
      
    },
  },
  plugins: [],
}

