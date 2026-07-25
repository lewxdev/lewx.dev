import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores(["**/.astro/**", "**/dist/**"]),
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  ...astro.configs.recommended,
]);
