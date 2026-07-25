import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import astro from "eslint-plugin-astro";

export default defineConfig([
  includeIgnoreFile(fileURLToPath(import.meta.resolve("./.gitignore"))),
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
