/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/*.js"],
  theme: {
    extend: {
      colors: {
        'Black': '#151822',
        'White': '#FFFFFF',
        'Yellow': '#FFB039',
        'Dark-blue': '#00203C',
        'Light-gray': '#F1F2F9',
      },
      borderRadius: {
        '[11px]': '11px',
        '[20px]': '20px',
      },
      boxShadow: {
        'custom': '0px 5px 50px 0px #0000001A',
      },
      fontFamily: {
        'pinar': 'Pinar',
      },
    },
  },
  plugins: [],
}