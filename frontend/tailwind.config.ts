import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   'color-0': '#aec3b0',
      //   'color-1': '#01161e',
      //   'color-2': '#598392',
      //   // 'color-2' : '#C778DD',
      //   'color-3': '#124559',
      // },
      colors:{
        'color-0' : '#FFFFFF',
        'color-1' : '#282C33',
        'color-2' : '#92b9d5',
        // 'color-2' : '#C778DD',
        'color-3': '#ABB2BF',
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [addVariablesForColors],
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
