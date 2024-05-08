/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        "bg-light": "#FFFFFF",
        "light-text": "#000000",
        "light-soft-bg": "#f0f0f0",
        "light-soft-text": "#626262",
        "dark-bg": "#0f172a",
        "dark-text": "#ddd",
        "dark-soft-bg": "#1f273a",
        "dark-soft-text": "#a6a6a6",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
