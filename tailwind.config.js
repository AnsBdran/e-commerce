/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "index.html"],
  theme: {
    extend: {
      screens: {
        xs: "550px",
      },
      backgroundImage: {
        hero: "url('/bg_hero.svg')",
      },
    },
  },
  plugins: [],
};
