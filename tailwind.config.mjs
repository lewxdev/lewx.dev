import typography from "@tailwindcss/typography";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
};
