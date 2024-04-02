/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '400': '400px',
        '800': '700px',
      },
      aspectRatio: {
        '2': '2',
      },
      colors: {
        'default': '#ccc',
        'default-transparent': '#ccc5',
        'fondo': '#FAFAFA',
        'puntito': '#212121'
      },
      translate: {
        '-50': '-50%',
      }
    },
  },
  plugins: [],
}

