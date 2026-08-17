/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6',
        'primary-dark': '#4C1D95',
        secondary: '#E8751A',
        dark: '#0A1628',
      },
    },
  },
  plugins: [],
}
