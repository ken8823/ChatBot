/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#f3f4f6',
        textSecondary: '#d1d5db',
        textTertiary: '#6b7280',
        surfacePrimary: '#343541',
        surfaceSecondary: '#444654',
        surfaceTertiary: '#f7f7f8',
      },
      fontSize: {
        base: '1rem',
        lg: '2.25rem',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
