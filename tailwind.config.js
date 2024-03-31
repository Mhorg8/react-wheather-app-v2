/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem'
    },
    fontFamily: {
      "Anton": ["Anton", "sans-serf"],
      "Kanit": ["Kanit"]
    },
    extend: {
    },
  },
  plugins: [],
}

