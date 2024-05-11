
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
        poppins: ['Poppins', 'sans-serif'],
        dmsans: [' DM Sans, sans-serif'],
        robo: ['Roboto Condensed', 'sans-serif'],
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
        'hero' : "url('assets/images/sectionBgs/1.png')",
        'MiniHero' : "url('assets/images/sectionBgs/2.png')",
        'aboutGrid' : "url('assets/images/sectionBgs/3.png')",
        'aboutMain' : "url('assets/images/sectionBgs/4.png')",
        'aboutGoal' : "url('assets/images/sectionBgs/5.png')",
        'aboutOurValues' : "url('assets/images/sectionBgs/6.png')",
      
      }
  },

  },
   
  plugins: []
}
