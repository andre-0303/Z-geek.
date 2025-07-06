/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gamer: {
          primary: "#67159C",
          black: "#000000",
          dark: "#1A1A1A",
          gray: "#333333",
          lightPurple: "#8A2BE2",
          neonLilac: "#A066D3",
          neonPink: "#E100FF",
          neonBlue: "#2D00F7",
          textPrimary: "#FFFFFF",
          textSecondary: "#CCCCCC",
        },
      },
    },
  },
  plugins: [],
};
