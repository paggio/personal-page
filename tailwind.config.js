/** @type {import('tailwindcss').Config} */
const tok = (name) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        display: ['"Adventor"', '"Century Gothic"', '"Futura"', "sans-serif"],
        pixel: ['"Pixelify Sans"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        drift: "drift 120s linear infinite",
      },
      colors: {
        paper: { DEFAULT: tok("paper"), hi: tok("paper-hi"), lo: tok("paper-lo") },
        ink: tok("ink"),
        mute: tok("mute"),
        lunar: { DEFAULT: tok("lunar"), 2: tok("lunar-2") },
        cream: tok("cream"),
        orange: tok("orange"),
        mustard: tok("mustard"),
        teal: tok("teal"),

        background: tok("background"),
        foreground: tok("foreground"),
        card: { DEFAULT: tok("card"), foreground: tok("card-foreground") },
        primary: { DEFAULT: tok("primary"), foreground: tok("primary-foreground") },
        secondary: { DEFAULT: tok("secondary"), foreground: tok("secondary-foreground") },
        muted: { DEFAULT: tok("muted"), foreground: tok("muted-foreground") },
        accent: { DEFAULT: tok("accent"), foreground: tok("accent-foreground") },
        border: tok("border"),
        input: tok("input"),
        ring: tok("ring"),
      },
    },
  },
  plugins: [],
};
