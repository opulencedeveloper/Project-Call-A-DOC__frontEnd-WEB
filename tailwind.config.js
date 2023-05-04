const { fontFamily } = require('tailwindcss/defaultTheme')

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
        // 'montserrat': 'Montserrat',
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      height: {
        '48': '38px',
        '51': '52px',
        "pih1": "50rem",
        "pih2": "12rem",
        "pih3": "26rem",
        "pih4": "64rem",
        "pih5": "55rem",
        "boxh1": "40rem",
        "boxh2": "65rem",
        "boxh3": "30rem",
        "boxh4": "35rem",
        "boxh5": "50rem",
      },
      width: {
        "piw1": "50rem",
        "piw2": "35rem",
        "piw3": "35rem",
        "piw4": "72rem",
        "piw5": "70rem",
        '162': '145px',
        '80': '100px',
        'pw1': '900px',
        "boxw1": '33rem',
        "boxw2": '40rem'
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
      custom5: "#026BB9",
      custom6: "#0093FF",
      custom7: "#CC3333",
      custom8: "#F5F7FA",
      custom9: "#1F2933"
    },
  },
  plugins: [],
}

