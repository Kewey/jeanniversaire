/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#EC543D',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
        beastly: ['var(--font-beastly)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
