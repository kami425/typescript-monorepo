import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./apps/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
