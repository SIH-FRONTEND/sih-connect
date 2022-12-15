/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      screens: {
      phone:'230px',
      mdm: '768px',
    },
    extend: {
      colors: {
        primary: "#ff0000",
        silver: "#ecebff",
        baseRed: "text-red-500",
      },
    },
  },
  plugins: [],
};
