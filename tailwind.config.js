/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // colors: {
    //   'Black': '#151822',
    //   'White': '#FFFFFF',
    //   'Yellow': '#FFB039',
    //   'Dark-blue': '#00203C',
    //   'Light-gray': '#F1F2F9',
    // },
    extend: {
      colors: {
        'Black': '#151822',
        'White': '#FFFFFF',
        'Yellow': '#FFB039',
        'Dark-blue': '#00203C',
        'Light-gray': '#F1F2F9',
      },
    },
  },
  plugins: [],
}

