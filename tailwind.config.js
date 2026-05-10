/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        coral:  '#FF6B6B',
        cyan:   '#00B4D8',
        purple: '#9B5DE5',
        yellow: '#FFC300',
        dark:   '#2D2D2D',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        stitches: {
          "primary":          "#FF6B6B",
          "primary-content":  "#1a1a1a",
          "secondary":        "#8049D4",
          "secondary-content":"#ffffff",
          "accent":           "#FFC300",
          "accent-content":   "#2D2D2D",
          "neutral":          "#2D2D2D",
          "neutral-content":  "#ffffff",
          "base-100":         "#ffffff",
          "base-200":         "#F8F7F5",
          "base-300":         "#EFEFEF",
          "base-content":     "#2D2D2D",
          "info":             "#00B4D8",
          "info-content":     "#1a1a1a",
          "success":          "#22c55e",
          "warning":          "#FFC300",
          "error":            "#ef4444",
        },
      },
    ],
    darkTheme: false,
    logs: false,
  },
}
