/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cod-gray": {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#161616"
        },
        "persian-green": {
          50: "#B1FFF8",
          100: "#4FDBD1",
          200: "#24BEB6",
          300: "#006A65",
          400: "#00A29A"
        },
        red: {
          50: "#fff0f0",
          100: "#ffdddd",
          200: "#ffc0c0",
          300: "#ff9494",
          400: "#ff5757",
          500: "#ff2323",
          600: "#f00000",
          700: "#d70000",
          800: "#b10303",
          900: "#920a0a"
        }
      }
    }
  },
  plugins: []
};
