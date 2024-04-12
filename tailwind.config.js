/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito Sans",
      },
      colors: {
        lightblue: "#BCD5F8",
        footerblue: "rgba(35, 107, 213, 0.52)",
        navyblue: "#1C1707",
        yellow: "#FFC120",
        headercolor: "#1E1E1E",
        textcolor: "#444444",
        offwhite: "#F1F1F1",
      },
      backgroundImage: {
        heroBg: "url('/src/assets/images/herobg.png')",
        aboutHeroBg: "url('/src/assets/images/frame1.png')",
      },
    },
  },
  plugins: [],
};
