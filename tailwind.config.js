/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#DF6951",
        dark: "#212832",
        darkBlue: "#181E4B",
        lightGray: "#5E6282",
        yellow: "#F1A501",
        grayish: "#E5E5E5"

      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
        volkhov: "'Volkhov', serif;",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(230px, auto))",
      },
    },
  },
  plugins: [],
}