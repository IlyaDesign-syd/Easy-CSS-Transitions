/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ebb33b", // Action colour
        secondary: "#7b7b7b", //light gray 
        tertiary: '#1d1d1d', // dark

        "primary-light": "#63b3ed",
        "primary-dark": "#2779bd",
      },
      spacing: {
        // Custom spacing tokens
        128: "32rem", // Custom spacing of 128
        144: "36rem",
      },
    },
  },
  plugins: [],
};
