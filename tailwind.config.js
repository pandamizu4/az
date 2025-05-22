/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefc',
          200: '#bae0f9',
          300: '#7cc8f8',
          400: '#36aef0',
          500: '#0c94dd',
          600: '#0077bd',
          700: '#005e99',
          800: '#014f7f',
          900: '#03426a',
        },
        secondary: {
          50: '#f2fbf9',
          100: '#d3f4ed',
          200: '#a6e9de',
          300: '#6dd6ca',
          400: '#38bdb2',
          500: '#2aa39a',
          600: '#208079',
          700: '#1c6560',
          800: '#1a514d',
          900: '#15433f',
        },
        accent: {
          50: '#fef8ec',
          100: '#fdefd0',
          200: '#fbdca1',
          300: '#f7c267',
          400: '#f4a732',
          500: '#f18410',
          600: '#de6209',
          700: '#b74209',
          800: '#94330f',
          900: '#792b0f',
        },
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'shimmer 5s ease infinite',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(45deg, #6366f1, #8b5cf6, #3b82f6, #0ea5e9)',
      },
    },
  },
  plugins: [],
};
