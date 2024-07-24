/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0%' },
          '100%': { transform: 'translateY(0)', opacity: '100%' },
        }
      },
      animation: {
        slideInFromRight: 'slideInFromRight 2s ease-out forwards',
        slideInFromLeft: 'slideInFromLeft 2s ease-out forwards',
        slideInFromBottom: 'slideInFromBottom 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}