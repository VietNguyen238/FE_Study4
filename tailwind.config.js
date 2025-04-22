/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#35509A",
        gray: "#71869D",
      },
      boxShadowColor: {
        mm: "rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
};
