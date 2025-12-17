/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#49e619",
        "lemon": "#FFF500",
        "cream": "#FFFDD0",
        "background-light": "#FFFFFF",
        "background-dark": "#121212",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif-retro": ["Manrope", "serif"],
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
