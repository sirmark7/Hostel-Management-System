/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary-color': '#486460', 
        'secondary-color': '#D4BAAE', 
        'background-color': '#FFFFFF',
        'text-color': '#202020',
        'gray-color': '#CCCCCC',
        'btn-bg': '#C56018',
        'btn-bg-hover': '#C56018',
        'text-color-trans': '#333333c9',
        'background-color-trans': '#ffffff00' 
      },
      animation:{
        'fade-out':' fadeOut 6s ease-in-out forwards infinite ',
        'fade-out-once':' fadeOut 6s ease-in-out forwards ',
        'fade-in':'fadeIn 6.5s ease-in-out forwards infinite ',
        'fade-in-once':'fadeIn 6.5s ease-in-out forwards '
      },
      keyframes:{
        'fadeOut':{
          '0%,100%': { opacity:'1' },
          '50%': { opacity:'0'}
        },
        'fadeIn':{
          '0%,100%': { opacity:'0' },
          '50%': { opacity:'1'}
        }
      }
    },
  },
  plugins: [],
}