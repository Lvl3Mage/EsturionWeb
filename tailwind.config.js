/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html","./src/html/**/*.html","./src/js/**/*.js"],
  safelist: [
    "whitespace-nowrap",
  ],
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
        'sm': '639px',
        'md': '767px',
        'lg': '1023px',
        'xl': '1279px',
        '2xl': '1600px',
      },
    },
    extend: {
      transitionTimingFunction: {
        'out-wobble': `cubic-bezier(.65,1.77,.73,.86)`,
        'bounce': `linear(0, 0.004, 0.016 4.6%, 0.063, 0.141, 0.25, 0.391, 0.563, 0.765, 1, 0.891, 0.813, 0.766 50%, 0.754, 0.75, 0.754, 0.766 59.1%, 0.813, 0.891, 1, 0.953 77.3%, 0.941, 0.938, 0.941, 0.953 86.4%, 1 90.9%, 0.988, 0.984, 0.988, 1)`,
      },
      boxShadow: {
        'inner-md': 'inset 0px 0px 15px 3px rgba(0,0,0,0.1)',
        'lg': '0 4px 14px 0 rgba(0,0,0,0.1)',
      },
      dropShadow: {
        'lg': '0 4px 14px rgba(0,0,0,0.1)',
      },
      colors: {
        'blue': {
          DEFAULT: "#183250",
        },
        'gold': {
          DEFAULT: "#D3B096",
        },
        'linen': {
          DEFAULT: "#f7f7f7",
        },
        // 'color': {
        //   DEFAULT:"#FFF",
        //   100: '#AAA',
        //   250: '#BBB',
        // }
      },
      aspectRatio: {
        'portrait': '2 / 3',
        'landscape': '3 / 2',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'ping-lg': 'ping-lg 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-lg-once': 'ping-lg 1.5s cubic-bezier(0, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'ping-lg': {
          '75%, 100%': { 
            transform: 'scale(4)',
            opacity: '0',
          },
        }
      },
    },
    screens: {
      '2xl': { max: "1600px" },
      'xl': { max: "1279px" },
      'lg': { max: "1023px" },
      'md': { max: "767px" },
      'sm': { max: "639px" },
      'xsm': { max: "480px" },
    },
  },
  plugins: [],
}

