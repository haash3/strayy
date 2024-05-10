
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
        lora : ['Lora', 'serif'],
        oswald : ['Oswald', 'sanserif']
        
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
        'heroBanner' : "url('assets/images/banner.png')",
        'SmallScreenHero' : "url('assets/images/exclusive2.png')",
        'aboutUs' : "url('assets/images/aboutus.png')",
        'aboutUsSs' : "url('assets/images/aboutusSmallScreen.png')",
        'newsletter' : "url('assets/images/newsletter.png')",
        'aboutUsPage' : "url('assets/images/aboutUsPage.png')",
        'aboutusmain' : "url('assets/images/aboutusmain.png')",

      }
  },

  },
   
  plugins: []
}
