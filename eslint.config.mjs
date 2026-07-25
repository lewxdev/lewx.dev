import { URL, fileURLToPath } from "node:url";

import js from "@eslint/js";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    ignores: ["**/*.d.{ts,cts,mts}", "**/*.astro/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  ...astro.configs.recommended,
  prettier,
]);
