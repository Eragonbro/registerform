/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: ['./*.{html,js}'],
  
  theme: {
    extend: {
      
      fontFamily: {
        inter: ["Inter", 'serif'],
      },
      borderWidth: {
        "0.2": "0.2px",
      },
      

      colors: {
        "design-background": {
          black: "#121826",
          gray: "#212936",
          button: "#845EEE",
          white: "#E5E7EB",
          input: "#A1A1A9",

        },
      },

    },
  },

  variants : {
    extend: {},
  },

  plugins: [],
}

