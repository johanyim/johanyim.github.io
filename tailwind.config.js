const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Noto Sans Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Open sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        md: "1rem",
      },

      spacing: {
        widest: "80rem",
        wide: "60rem",
        narrow: "50rem",
        narrower: "40rem",
        narrowest: "25rem",
        section: "85vh",
        header: "5rem",
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

  safelist: [
    {
      pattern: /text-.+/,
    },
  ],
};
