import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        '236': '236px'
      },
      height: {
        '81': '81px'
      },

      left:{
        '996': '996px'
      },
      top:{
        '89' : '89px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
     colors:{
      '--white': '#FFFFFF',
      '--black': '#000000',
      '--grey': '#A7A7A7',
      '--heavy-grey': '#666666',
      '--blue': '#005490' ,
     }
    },
  },
  plugins: [],
};
export default config;
