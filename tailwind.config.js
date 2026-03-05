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
        "primary": "#00FFFF",
        "secondary": "#00FF00",
        "background-light": "#ffffff",
        "background-dark": "#0B0B0B",
        "surface": "#151515",
        "surface-light": "#262626",
        "border-color": "#333333",
        "text-main": "#ffffff",
        "text-muted": "#a3a3a3",
        "tag-q": "#ffffff",
        "tag-b": "#e5e5e5",
        "tag-i": "#d4d4d4"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {"DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px"},
      boxShadow: {
        'sharp': '4px 4px 0px 0px rgba(255, 255, 255, 0.1)',
        'sharp-primary': '4px 4px 0px 0px rgba(0, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
