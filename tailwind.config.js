/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 1s linear infinite',  // Fast spinning ring
        'orb-spin': 'orbSpin 2s linear infinite',  // Orb spinning movement
        'pulse-slow': 'pulse 3s ease-in-out infinite', // Slow pulse for particles
      },
      keyframes: {
        orbSpin: {
          '0%': { transform: 'rotate(0deg) translateX(0) translateY(0)' },
          '50%': { transform: 'rotate(180deg) translateX(10px) translateY(10px)' },
          '100%': { transform: 'rotate(360deg) translateX(0) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
