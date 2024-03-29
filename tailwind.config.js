/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html","./src/html/**/*.html","./src/js/**/*.js"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'roman': ['Times New Roman', 'sans-serif'],
      // 'name': ['FontName'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '639px',
        md: '767px',
        lg: '1023px',
        xl: '1279px',
      },
    },
    extend: {
      transitionTimingFunction: {
        'out-wobble': 'cubic-bezier(.65,1.77,.73,.86)',
      },
      boxShadow: {
        'inner-md': 'inset 0px 0px 15px 3px rgba(0,0,0,0.1)',
      },
      colors: {
        'blue': {
          DEFAULT: "#183250",
        },
        'gold': {
          DEFAULT: "#D3B096",
        },
        // 'color': {
        //   DEFAULT:"#FFF",
        //   100: '#AAA',
        //   250: '#BBB',
        // }
      },
      aspectRatio: {
        // '3/2': '3 / 2',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xsm: { max: "480px" },
    },
  },
  plugins: [],
}

