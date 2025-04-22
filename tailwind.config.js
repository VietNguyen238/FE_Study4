/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#35509A",
        "gray-h": "#71869D",
        gray: "#677788",
      },
      width: {
        page: "1145px",
      },
    },
  },
  plugins: [],
};
