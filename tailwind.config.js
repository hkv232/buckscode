/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage:{
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px); ",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 100px); "
      }
    },
  },
  plugins: [],
} 

