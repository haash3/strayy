
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        opensans: ['OpenSans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dmsans: [' DM Sans, sans-serif'],
        robo: ['Roboto Condensed', 'sans-serif'],
        
      },
      // Colors
      colors:{
        'espresso': '#482e1d',
        'pine': '#4D5038',
        'pantone' : '#16151d',
        
      },
      
    //  Background Images
      backgroundImage: {
        'heroMainGrid' : "url('assets/images/heromaingrid.jpeg')",
        'heroMediumGrid' : "url('assets/images/heromediumgrid.jpeg')",
        'heroSmallGridM' : "url('assets/images/herosmallgridmen.jpeg')",
        'heroSmallGridF' : "url('assets/images/herosmallgridwomen.jpeg')",

      }
  },

  },
   
  plugins: []
}
