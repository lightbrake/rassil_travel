/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171212',
        secondary: '#f44c5c',
        accent: '#211f1d',
      },
    },
  },
  plugins: [],
}

