/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textColor: {
      text: "#141414",
    },
    backgroundColor: {
      background: "#120B48",
    },
    fontFamily: {
      worksans: ["Work Sans", " sans-serif"],
      inter: ["Inter", "sans-serif"],
      sora: ["Sora", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
