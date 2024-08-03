import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        crete: ["Crete Round", ...fontFamily.sans],
      },
      colors: {
        //custom blues
        "aurora-1": "#191725",
        "aurora-2": "#1e1f2a",
        "aurora-3": "#252a32",
        "aurora-4": "#323d46",
        "aurora-5": "#455056",
        "aurora-6": "#515c5f",
        "aurora-7": "#6a645f",
        //custom reds
        "aurora-8": "#806b5f",
        "aurora-9": "#623e36",
        "aurora-10": "#5e322d",
        "aurora-11": "#7e6353",
        "aurora-12": "#92674d",
        "aurora-13": "#a57351",
        //custom yellows
        "aurora-14": "#c89d67",
        "aurora-15": "#f4be60",
        "aurora-16": "#f3d284",
        "aurora-17": "#f7ebbd",
        "aurora-18": "#fcf8e9",
      },
    },
  },
  plugins: [],
} satisfies Config;
