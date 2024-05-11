
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
        'heroBanner' : "url('assets/images/sectionBgs/1.png')",
        'SmallScreenHero' : "url('assets/images/sectionBgs/2.png')",
        'aboutUs' : "url('assets/images/sectionBgs/3.png')",
        'aboutusmain' : "url('assets/images/sectionBgs/4.png')",
        'aboutusmission' : "url('assets/images/sectionBgs/5.png')",
        'aboutusvalues1' : "url('assets/images/sectionBgs/6.png')",
      
      }
  },

  },
   
  plugins: []
}
