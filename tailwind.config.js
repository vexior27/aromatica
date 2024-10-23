/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'card': '25rem'
      }
    },
    fontFamily: {
      body: ['Sree'],
      figtree: ['Figtree'],
      amiriRegular: ['Amiri-Regular'],
      amiriBold: ['Amiri-Bold']
    },
  },
  plugins: [],
}

