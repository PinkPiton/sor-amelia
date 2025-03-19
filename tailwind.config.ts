const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./app/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
