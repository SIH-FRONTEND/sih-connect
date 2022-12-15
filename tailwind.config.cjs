/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      
    extend: {
      screens: {
         phone:'230px',
        xs2: "300px",
        sm2: "480px",
        md2: "547px",
        lg2: "768px",
        xl2: "1024px",
        "2xl": "1680px",
        "3xl": "2000px",
      },
      colors: {
        primary: "#ff0000",
        silver: "#ecebff",
        baseRed: "text-red-500",
      },
    },
  },
  plugins: [],
};
