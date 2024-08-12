/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF5C2C",
        secondary: "#FFA58A",
        primary_text: "#260E07",
        secondary_text: "#938683",
        tertiary_text: "#545B61",       
        tertiary: "#F9A6AC",
        tertiary_2: "#C2E0FA",
        tertiary_3: "#61D5DF",
        light: "#FFFAF6",
        white: "#FFFFFF",
        page: "#fffbf7"
      }
    },
  },
  plugins: [],
};
