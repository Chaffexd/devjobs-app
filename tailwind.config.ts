import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'scoot-bg': 'hsl(36, 87%, 49%)',
        'second': '#47019d',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      },
    },
  },
  plugins: [],
};
export default config;
