/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kotoBlue: '#3b82f6',
        kotoLight: '#e6f0ff',
        kotoAccent: '#7dd3fc'
      }
    },
  },
  plugins: [],
}
