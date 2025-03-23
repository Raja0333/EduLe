/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [  "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      animation:{
        upDown:'upDown 3s linear infinite',
        leftRight:'leftRight 3s linear infinite',
        spin: 'spin 5s linear infinite',
      },
      keyframes:{
        upDown:{
          '0%':{paddingTop:'0px'},
          '50%':{paddingTop:'40px'},
          '100%':{paddingTop:'0px'}
        },
        leftRight:{
          '0%':{paddingLeft:'0px'},
          '50%':{paddingLeft:'40px'},
          '100%':{paddingLeft:'0px'}
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}

