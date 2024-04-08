import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["PoppinsBlackItalic", "sans-serif"],
      protest: ["ProtestRiot", "sans-serif"]
      // oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tablet: "640px", // Add custom breakpoint
        desktop: "1024px", // Add another custom breakpoint
        mobile: "450px"
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
};
export default config;
