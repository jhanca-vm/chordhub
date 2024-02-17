/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,tsx}'],
  theme: {
    colors: {
      neutral: {
        100: '#f9fbff',
        200: '#f2f5ff',
        300: '#e9e9e9',
        400: '#bebebe',
        500: '#7d7d7d',
        600: '#272727',
        700: '#211c1c',
        800: '#1c1315',
        900: '#160c0f'
      },
      primary: {
        100: '#d2f8e9',
        200: '#a8f1da',
        300: '#74d6c0',
        400: '#4baea0',
        500: '#1d7874',
        600: '#156367',
        700: '#0e4c56',
        800: '#093845',
        900: '#052939'
      }
    },
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))'
      },
      borderRadius: {
        blob: '81% 19% 71% 29% / 45% 74% 25% 55%'
      },
      fontFamily: {
        sans: ['Assistant', 'sans-serif']
      }
    }
  }
}
