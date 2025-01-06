import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
import {nextui} from "@nextui-org/react";

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: '#000000', // Define the custom color
        yellow: "#CF0A0A",
        white: "#f7f3ea",
      },
      keyframes: {
        slideUp: {
          "0%": {
            height: "100%",
          },
          "100%": {
            height: "0%",
          },
        },
      },
      animation: {
        "slide-up": "slideUp 1s ease-in-out ",
      },

    },
  },
  darkMode: "class",
  plugins: [addVariablesForColors,nextui()]
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


export default config;
