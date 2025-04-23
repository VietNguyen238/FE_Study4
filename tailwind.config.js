/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#35509A",
        "gray-h": "#71869D",
        gray: "#677788",
        link: "#35509A",
      },
      width: {
        page: "1145px",
      },
      boxShadow: {
        top: "0 -1px 10px 0 rgb(0 0 0 / 0.1)",
        bottom: "0 1px 10px 0 rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
