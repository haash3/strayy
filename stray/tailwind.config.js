
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
        robo: ['Roboto Condensed', 'sans-serif'],
        alphaget: ['Alphaget']
      },
      colors:{
        'secondary': '#DDDDDD',
        'midnight': '#121063'
      },
      // new-arrivals text animation
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      backgroundImage: {
        'hero' : "url('assets/images/rr.jpg')",
        'heroSmallscreen' : "url('assets/images/rr.jpg')",
        'banner1' : "url('assets/images/banner1.png')",
        'banner1Ss' : "url('assets/images/banner1Ss.jpeg')",
        'heroImg2' : "url('assets/images/try2.jpeg')",
        'heroImg3' : "url('assets/images/try3.jpeg')",
        'heroImg1-1' : "url('assets/images/trym1.jpeg')",
        'heroImg1-2' : "url('assets/images/tryw1.jpeg')",

      }
  },

  },
   
  plugins: []
}
