import js from "@eslint/js";
import ts from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
