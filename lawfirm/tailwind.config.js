/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'phone': '300px',
      'sm': '640px', // Small screens (e.g., large smartphones)
      'md': '768px', // Medium screens (e.g., tablets)
      'lg': '1024px', // Large screens (e.g., small laptops)
      'xl': '1280px', // Extra large screens (e.g., large laptops/desktops)
      '2xl': '1536px', // 2X large screens (e.g., large desktops)
    },
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