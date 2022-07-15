/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // title
      rd: ['Ruslan Display', 'cursive'],
      at: ['Anton', 'sans-serif'],
      // content
      qs: ['Quicksand', 'sans-serif']
    },
    lineHeight: {
      '4rem': '4.5rem'
    },
    extend: {}
  },
  plugins: []
}
