// learn more: https://astro.build/config

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
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
