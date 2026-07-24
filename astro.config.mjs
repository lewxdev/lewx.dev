// learn more: https://astro.build/config

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "aurora-x",
        light: "min-light",
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
