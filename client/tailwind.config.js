/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      colors: {
        white_900: '#ffffff',
        white_700: '#f2f2fc',
        white_500: '#d4d4d4',
        white_300: '#FEEEE5',
        white_100: '#BDBDBD',

        black_900: '#1E2124',
        black_700: '#23262A',
        black_500: '#282B30',
        black_300: '#515266',
        black_100: '#36393E',

      }
    },
  },
  plugins: [],
}