/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/bgblob.svg')",
      },
      colors: {
        primary: "#0064F7",
        secondary: "#EBEBEB",
        tertiary: "#FFFF",
        mainTextColor: "#564C4A",
        textBlack: "#2B3445",
        buttonColor: "#0063F4",
        badgeGreenBg: "rgb(231, 249, 237)",
        badgeRedBg: "rgb(255, 234, 234)",
        badgeGray: "#E8E8EE",
        badgeGreen: "rgb(11, 119, 36)",
        badgeRed: "rgb(255, 41, 41)",
        progressBg: "#D23F57",
        inCompleteBg: "#E3E9EF",
        grayText: "rgb(125, 135, 156)",
      },
    },
  },
  plugins: [],
};
