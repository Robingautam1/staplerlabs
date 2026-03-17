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
        cream: "#F7F3EC",
        "cream-deep": "#EDE9E0",
        ink: "#1a1710",
        amber: "#C6900A",
        gold: "#FAC755",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Instrument Serif"', "Georgia", "serif"],
        body: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
