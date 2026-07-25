import { URL, fileURLToPath } from "node:url";

import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import astro from "eslint-plugin-astro";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
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
