import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-public-sans)"],
        make: ["var(--font-make)"],
      },
      colors: {
        alabaster: "#FCFCFC",
        mineshaft: "#252525",
        blueribbon: "#005EEF",
        primary: {
          50: "#FAFCFF",
          100: "#CCDFFC",
          200: "#99BFF9",
          300: "#4D8EF4",
          400: "#3884FA",
          500: "#005EEF",
          600: "#004BBF",
          700: "#00388F",
          800: "#002660",
          900: "#001330",
        },
        secondary: {
          50: "#F4F4F4",
          100: "#E6E6E6",
          200: "#C5C5C5",
          300: "#E9E9E9",
          400: "#3B3B3B",
          500: "#252525",
          600: "#1E1E1E",
          700: "#181818",
          800: "#0F0F0F",
          900: "#070707",
        },
      },
    },
  },
  plugins: [],
};
export default config;
