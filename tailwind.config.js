/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        mildBlack: '#212121',
        mildWhite: '#DEDEDE',
        primaryColor:'#2A1B3D',
        secondaryColor:'#6e4c9b',
        ternaryColor:'#594573',
      },
      fontFamily: {
        onepiece: ['OnePiece', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
