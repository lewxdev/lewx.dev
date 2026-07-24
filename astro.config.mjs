// learn more: https://astro.build/config

import tailwind from "@astrojs/tailwind";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "aurora-x",
        light: "min-light",
      },
    },
  },
});
