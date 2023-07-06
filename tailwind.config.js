module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors:{
        'grey-cool':'#f5f5f5',
        'bizarro':'#d3d5d5',
      },
      keyframes: {
        colorChange: {
          '0%': { backgroundColor: '#cf6c77' },  // Rosa Pálido
          '25%': { backgroundColor: '#ffbba2' }, // Rosa Médio
          '50%': { backgroundColor: '#b9656d' }, // Rosa Escuro
          '75%': { backgroundColor: '#fad1ab' }, // Rosa Médio
          '100%': { backgroundColor: '#f0838a' }, // Rosa Escuro
        },
        blink: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0.75 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.25 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        colorChange: 'colorChange 4s infinite',
        blink: 'blink 2s infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
