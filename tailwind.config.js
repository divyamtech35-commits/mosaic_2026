/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mosaic: {
          navy: '#03152B',
          dark: '#06284A',
          royal: '#163F68',
          gold: '#D9A441',
          lightGold: '#F4C969',
          cream: '#F7F0E2',
          burgundy: '#8E1720',
          medical: '#2F6B9A'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
