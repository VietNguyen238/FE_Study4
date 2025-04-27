/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#35509A",
        "dark-blue-h": "#194c73",
        "gray-h": "#71869D",
        gray: "#677788",
        link: "#35509A",
        black: "#1A1A1A",
        box: "rgb(0 0 0 / 0.1)",
        card: "#f8f9fb",
      },
      width: {
        page: "1145px",
        card: "381.66px",
      },
      boxShadow: {
        top: "0 -1px 10px 0 rgb(0 0 0 / 0.1)",
        bottom: "0 1px 10px 0 rgb(0 0 0 / 0.1)",
        hover: "0 0 10px 3px rgb(0 0 0 / 0.1)",
        card: "0 3px 1px 1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
