/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // sans: ["Monda", "sans-serif"],
      press: ["'Press Start 2P'", "cursive"],
    },
    maxWidth: {
      "1/3": "30%",
      "1/2": "300px",
      "3/4": "75%",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1005px",
      xl: "1440px",
    },
    colors: {
      logo: "#2AA146",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",

      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [require("daisyui")],
  safelist: [
    {
      pattern: /(bg|text|border)-logo/,
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
  ],
};
