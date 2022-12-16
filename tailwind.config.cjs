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
        primary: "#6B6B6B",
        baseBlue: "#10328C",
        baseRed: "text-red-500",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        xlr: '1.35rem',
        "5.5xl": ["3.2rem", '1rem'],
      },
      backgroundColor: {
        primary: "#10328C",
      },
      maxWidth: {
        'lgr': '560px',
        "2.5xl": "725px",
        "2.4xl": "720px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "3rem",
        12: "3.5rem",
        13: "4rem",
      },
    },
  },
  plugins: [],
};
