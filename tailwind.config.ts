import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paleOrange: "hsl(26, 100%, 55%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",

        deepOrange: "hsl(26, 100%, 40%)",
        offWhite: "hsl(220, 10%, 90%)",
        darkDesaturatedBlue: "hsl(219, 20%, 30%)",
        mutedBlueGray: "hsl(220, 14%, 40%)",
        darkModeGrayishBlue: "hsl(223, 20%, 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
