/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAF7F2",
          light: "#FBF9F5",
          dark: "#F4EFE6",
        },
        stone: {
          beige: "#EFECE6",
          muted: "#E4E0D7",
          border: "#DCD7CC",
        },
        charcoal: {
          DEFAULT: "#1C1C1A",
          muted: "#555450",
          soft: "#75746E",
        },
        walnut: {
          DEFAULT: "#4A3525",
          light: "#6E523B",
          dark: "#332316",
        },
        earth: {
          green: "#2D3A2D",
          light: "#3A4B3A",
          dark: "#1E271E",
        }
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      }
    },
  },
  plugins: [],
}
