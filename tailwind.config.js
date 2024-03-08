/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#F4425A",
        secondary: "#191825",
        secondary1: "#8c8c92", // Example primary color
        dark: "#2A112A",
      },
      screens: {
        // xs: "320px", // You can use any name for the breakpoint (e.g., 'xs')
      },
    },
  },
  plugins: [],
};
