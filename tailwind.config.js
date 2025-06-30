/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        mildBlack: '#212121',
        mildWhite: '#DEDEDE',
      }
    },
  },
  plugins: [],
};
