import type { ESLint } from "eslint";
import requireI18n from "./rules/require-i18n.js";

const plugin: ESLint.Plugin = {
  meta: {
    name: "i18n-eslint-plugin",
    version: "0.1.0",
  },
  rules: {
    "require-i18n": requireI18n,
  },
};

export default plugin;
