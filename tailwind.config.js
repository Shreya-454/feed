/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        lightGreen: '#DCFCE7',
        Green: '#166534',
        red: '#651616',
        darkGreen: '#052E16',
        grey: '#44403C',
        lightGrey1: '#052E1633',
        darkGrey:'#342E2E',
        black: '#0C0A09',
        fadeGreen: '#052E160D',
        lightGrey: '#D6D3D1',
        offWhite: '#F0FDF4',
        cGreen:'#abdaba',
      },
      lineHeight: {
        '1lg': '121%',
        '5lg': '125%',
        '1md': '100%',
      },
      fontSize: {
       '2md':'22px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        'option:hover': {
          backgroundColor: '#D3D3D3', /* Light grey background on hover */
        },
      }, ['responsive', 'hover']);
    }
  ],
};
