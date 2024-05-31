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
        grey: '#44403C',
        offWhite: '#F0FDF4',
      },

    },
  },
  plugins: [],
};
