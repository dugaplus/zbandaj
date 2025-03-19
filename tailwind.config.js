/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3A4B",    // Deep navy
        secondary: "#F6F8F9",  // Warm off-white
        accent: "#829E82",     // Sophisticated sage
        neutral: {
          100: "#FFFFFF",
          200: "#F0F2F3",
          300: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        estate: {
          light: "#D4DCCD",    // Light sage
          dark: "#2C5364",     // Dark teal
          warm: "#B8A088",     // Warm taupe
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
}; 