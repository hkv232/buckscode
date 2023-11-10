/** @type {import('tailwindcss').Config} */

const {fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts,mdx}"],
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
      }
    },
  },
  plugins: [],
}

