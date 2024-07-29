const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Mono", ...defaultTheme.fontFamily.sans],
      },

      spacing: {
        widest: "80rem",
        wide: "60rem",
        narrow: "40rem",
        narrowest: "25rem",
        section: "85vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@catppuccin/tailwindcss")({
      prefix: false,
      defaultFlavour: "mocha",
    }),
  ],
};