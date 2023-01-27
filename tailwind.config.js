/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundSecondary: '#f6f9fb',
      },
      fontSize: {
        md: '12px'
      }
    },
  },
  plugins: [],
}
