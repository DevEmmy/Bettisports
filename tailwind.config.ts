import type { Config } from "tailwindcss";

const config: Config = {
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
      spacing: {
        xPadding: "64px",
        smXPadding:"32px"
      },
      colors: {
        primary1: "#07243F",
        secondaryBlue: "#197DDA",
        grayColor: "#52575C",
        defaultYellow: "#FAC032",
        secondaryGray: "#A0A4A8"

      }
    },
  },
  plugins: [],
};
export default config;
