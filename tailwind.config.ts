import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smd: "500px",
      md: "768px",
      lg: "1080px",
    },

    extend: {
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        1: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
