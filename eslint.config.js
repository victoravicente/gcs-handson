import js from "@eslint/js";
import promisePlugin from "eslint-plugin-promise";
import globals from "globals";

export default [
  {
    plugins: {
      promise: promisePlugin,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    
    rules: {
      ...js.configs.recommended.rules,
      ...promisePlugin.configs.recommended.rules,
    }
  }
];