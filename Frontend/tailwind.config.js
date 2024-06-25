/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light': 'rgba(237,232,250,1)',
        'custom-dark': 'rgba(173,187,218,1)',
      },
    },
  },
  plugins: [],
}