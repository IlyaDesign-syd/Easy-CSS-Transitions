// Sizing tokens used in multiple class extensions for tailwind (less code repetition)
const spacing = {
  sizeXS: "0.2rem",
  sizeSM: "0.3rem",
  sizeMD: "0.8rem",
  sizeLG: "1.2rem",
  sizeXL: "1.6rem",
};

const sizes = {
  standardWidth: '1200px',
  standardHeight: '900px'
}

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
      },
      spacing: {
        ...spacing
      },
      borderRadius: {
        ...spacing
      },
      width: {
        ...sizes
      },
      height: {
        ...sizes
      }
    },
  },
  plugins: [],
};
