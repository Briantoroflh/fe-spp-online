// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan ini include semua file React kamu
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px", // ≥480px
      md: "600px", // ≥600px
      lg: "900px", // ≥900px
      xl: "1200px", // ≥1200px
    },
  },
  plugins: [],
};
