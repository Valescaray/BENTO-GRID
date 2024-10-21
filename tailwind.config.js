/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "custom-row": "230px 50px 100px 150px",
      },
      gridTemplateColumns: {
        "custom-4": "repeat(4, 180px)",
      },
      height: {
        "custom-38": "9.5rem",
      },
    },
  },
  plugins: [],
};
