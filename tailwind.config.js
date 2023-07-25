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
        "pih1": "45rem",
        "pih1i": "30rem",
        "pih2": "12rem",
        "pih3": "26rem",
        "pih4": "64rem",
        "pih5": "55rem",
        "pih6": "62.9rem",
        "pih7": "33.25rem",
        "pih8": "25.6rem",
        "pih9": "47.6rem", 
        "boxh1": "40rem",
        "boxh2": "65rem",
        "boxh3": "30rem",
        "boxh4": "35rem",
        "boxh5": "50rem",
        "boxh6": "42rem",
      },
      width: {
        "piw1": "50rem",
        "piw2": "35rem",
        "piw3": "35rem",
        "piw3i": "29rem",
        "piw4": "72rem",
        "piw5": "70rem",
        "piw6": "67.2rem",
        "piw7": "33.25rem",
        "piw8": "25.6rem",
        "piw9": "36.2rem",
        '162': '145px',
        '80': '100px',
        'pw1': '900px',
        "boxw1": '32rem',
        "boxw2": '40rem',
        "boxw3": '40rem',
        "boxw4": '28rem',
      },
      colors: {
        "custom": '#007FDD',
        "custom1": '#FFFFFF',
        "ash": '#CBD2D9',
        "ash2": "#52606D",
        "ash3": "#F5F7FA",
        "ash4": "#E4E7EB",
        "ash5": "#7B8794",
        "ash6": "#9AA5B1", 
        '49207E': '#49207E',
        '57B7FF': '#57B7FF',
        '49207E': '#49207E',
        "custom3": '#323F4B',
        "custom4": '#3E4C59',
        "custom5": "#026BB9",
        "custom6": "#0093FF",
        "custom7": "#CC3333",
        "custom8": "#F5F7FA",
        "custom9": "#1F2933", 
        "custom10": "#3EBD93",
        "custom11": "#EF4E4E",
        "custom12": "#000000", 
        "custom13": "#C599FF",
        "custom14": "#9E77D1",
        "custom-g": "#199473",
        "custom-g2": "#E3F8FF",
        "custom-g3": "#65D6AD",
        "custom-g4": " #47B1FF",
        "custom-g5": "#D0EBFF",
        "custom-r": "#CF1124",
        "custom-r-shade": "#FFE3E3",
        "custom-r-shade1": "#F86A6A"
        
       
        
      },
    },
    
  },
  plugins: [],
}

