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
        DBg: "#16161A",
        DMainPurple: "#7F5AF0",
        DSecondBg: "#242629",
        DText: "#FFFFFE",
        DThirdColor: "#2CB67D",
        DNav_disable: "#4a4c53",
        LBg: "#E7E7E9",
        LMainPurple: "#5E41B4",
        LSecondBg: "#D1D1E9",
        LText: "#16161A",
        LThirdColor: "#67A78E",
        LNav_disable: "#AAABB1",
      },
      fontFamily: {
        sans: ["var(--noto_sans)"],
      },
      fontSize: {
        BigH: "50px",
        H: "36px",
        SH: "24px",
        Md: "16px",
        Sm: "12px",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(0)" },
          "25%": { filter: "blur(2px)" },
          "50%": { filter: "blur(5px)" },
          "75%": { filter: "blur(2px)" },
          "100%": { filter: "blur(0)" },
        },
      },
      animation: {
        blur: "blur 4s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
