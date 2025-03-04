/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          solanaGreen: "#14F195",
          solanaBlue: "#9945FF",
          solanaBackground: "#0d0d0d",
        },
      },
    },
    plugins: [],
  };
  