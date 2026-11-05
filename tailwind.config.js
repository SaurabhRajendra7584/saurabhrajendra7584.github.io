/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF8',
        'canvas-2': '#F3F4F2',
        ink: '#171717',
        'ink-2': '#737373',
        border: '#E5E5E5',
        accent: {
          DEFAULT: '#635BFF',
          50: '#EEEDFF',
          100: '#DEDCFF',
          200: '#BDB9FF',
          300: '#9C96FF',
          400: '#7B73FF',
          500: '#635BFF',
          600: '#4F48E6',
          700: '#3B36B3',
          800: '#2A2680',
          900: '#1A174D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
