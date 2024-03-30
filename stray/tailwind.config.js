
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['OpenSans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dmsans: [' DM Sans, sans-serif'],
      },
      colors:{
        'secondary': '#DDDDDD',
        "mtext": "#FFC819",
        'purple': '#3f3cbb',
        'midnight': '#121063'
      }
  },

  },
   
  plugins: []
}
