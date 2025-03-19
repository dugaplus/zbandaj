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
          gold: "#D4AF37",     // Luxury gold accent
          sand: "#E2D9C2",     // Sandy beige
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(27, 58, 75, 0.3)',
        'glow-accent': '0 0 20px rgba(130, 158, 130, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'texture-light': "url('/media/texture-light.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}; 