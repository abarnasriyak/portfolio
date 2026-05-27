/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#030b1a",
          light: "#f8faff",
          accent: "#22d3ee",   // Neon Cyan
          purple: "#a78bfa",   // Neon Purple
          coral: "#fb7185",    // Neon Coral/Rose
          neonGreen: "#10b981", // Success highlight
          darkSurface: "rgba(15, 23, 42, 0.4)",
          darkBorder: "rgba(255, 255, 255, 0.08)",
          lightSurface: "rgba(255, 255, 255, 0.7)",
          lightBorder: "rgba(0, 0, 0, 0.08)",
          glassBgDark: "rgba(3, 11, 26, 0.65)",
          glassBgLight: "rgba(248, 250, 255, 0.75)"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
        sora: ["'Sora'", "sans-serif"],
        outfit: ["'Outfit'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 7.5s ease-in-out infinite",
        "float-fast": "floatFast 8s ease-in-out infinite",
        "spin-slow": "spinSlow 15s linear infinite",
        "spin-reverse": "spinReverse 20s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(34, 211, 238, 0.15)" },
          "50%": { boxShadow: "0 0 35px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.15)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinReverse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      }
    },
  },
  plugins: [],
}
