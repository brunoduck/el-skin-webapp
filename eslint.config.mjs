import globals from "globals";
// # import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["src/pages/NotFound/*.jsx"],
  },
  { languageOptions: { globals: globals.browser } },
  // # pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
