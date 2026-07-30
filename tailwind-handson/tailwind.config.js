/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#F05340', // Laravel Red
          'secondary': '#6c757d', // Gray
        },
      },
    
    },
  },
  plugins: [ ],
};
