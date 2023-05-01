/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat'
      },
      height: {
        '48': '38px',
        '51': '60px',
      },
      width: {
        '162': '145px',
        '80': '100px'
      }
    },
    colors: {
      custom: '#007FDD',
      custom1: '#FFFFFF',
      custom2: '#9AA4B0',
      '49207E': '#49207E',
      '57B7FF': '#57B7FF',
      '49207E': '#49207E'
    },
    fontSize: {
      '7xl': '100px',
      '8xl': '40px',
      '9xl': '25px',
      '10xl': '12px',
      '11xl': '61px'
    }
  },
  plugins: [],
}

