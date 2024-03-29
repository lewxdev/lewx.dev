import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs["recommended"],
  ...astro.configs["flat/recommended"],
  prettier,
];
