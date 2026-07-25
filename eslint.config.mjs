import { URL, fileURLToPath } from "node:url";

import js from "@eslint/js";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  js.configs.recommended,
  ...astro.configs.recommended,
  prettier,
]);
