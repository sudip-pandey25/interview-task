/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Questrial: ["Questrial", "sans-serif"],
    },
    extend: {
      screens: {
        mdx: "1366px",
        xxxl: "1920px",
      },
    },
  },
  plugins: [],
};
