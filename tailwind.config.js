/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        secondary: {
          dark: 'hsl(234, 29%, 20%)',
          charcoal: 'hsl(235, 18%, 26%)',
          grey: 'hsl(231, 7%, 60%)',
          white: 'hsl(0, 0%, 100%)'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'Sans-serif']
      },
      fontSize: {
        default: '16px'
      },
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    }
    // screens: {
    //   mobile: '375px',
    //   dekstop: '1440px'
    // }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

