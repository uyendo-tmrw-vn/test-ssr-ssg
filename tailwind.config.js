/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,scss}",
    "./styles/**/*.{js,ts,jsx,tsx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {},
    fontSize: {
      base: '1rem',
      sm: '0.8rem',
      md: '1.4rem',
      lg: '1.5rem',
      xl: '1.6rem',
    },
    colors: {
      "ip-red": "#EA1C25",
      "ip-black": "#000000",
    },
    fontFamily: {
      'JostBlack': ["JostBlack", "sans-serif"],
      'JostBold': ["JostBold", "sans-serif"],
      'JostExtraBold': ["JostExtraBold", "sans-serif"],
      'JostRegular': ["JostRegular", "sans-serif"],
      'JostThin': ["JostThin", "sans-serif"],
      'JostLight': ["JostLight", "sans-serif"],
      'JostMedium': ["JostMedium", "sans-serif"]
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: {
        DEFAULT: '1rem',
      },

      // default breakpoints but with 40px removed
      screens: {
        "xs": '480px',
        "sm": '640px',
        "md": '768px',
        "lg": '1280px',
        "xl": '1440px',
        "2xl": '1920px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',

          '@screen lg': {
            maxWidth: 'calc(100% - 140px)'
          },

          '@screen 2xl': {
            maxWidth: '82%',
          },
        }
      })
    }
  ],
}