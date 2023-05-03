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
        "boxh1": "40rem",
        "boxh2": "65rem",
        "boxh3": "28rem",
        "boxh4": "35rem",
      },
      width: {
        '162': '145px',
        '80': '100px',
        "boxw1": '30rem'
      }
    },
    colors: {
      custom: '#007FDD',
      custom1: '#FFFFFF',
      custom2: '#CBD2D9',
      '49207E': '#49207E',
      '57B7FF': '#57B7FF',
      '49207E': '#49207E',
      custom3: '#323F4B',
      custom4: '#3E4C59',
    },
  },
  plugins: [],
}

