/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04091a',
          900: '#070e24',
          800: '#0a1528',
          700: '#0d1d35',
          600: '#112344',
        },
        gold: {
          300: '#f0c96a',
          400: '#e6b84a',
          500: '#d4a520',
          600: '#b8900f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
