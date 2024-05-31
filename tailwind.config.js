/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "4md": "40px",
        "9xl": "96px",
      },
      colors: {
        lightGreen: '#DCFCE7',
        Green: '#166534',
        red: '#651616',
        darkGreen:'#052E16',
        grey: '#44403C',
        offWhite: '#F0FDF4',
      },

    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        'option:hover': {
          backgroundColor: '#D3D3D3', /* Light grey background on hover */
        },
      }, ['responsive', 'hover']);}
  ],
};
