/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0a0a0a',
          900: '#121212',
          800: '#1a1a1a',
          700: '#242424',
        },
        violet: {
          DEFAULT: '#9b59b6',
          dark: '#6c3483',
          mid: '#8e44ad',
          light: '#bb8fce',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        glow: '0 0 24px rgba(155, 89, 182, 0.25)',
      },
    },
  },
  plugins: [],
};
