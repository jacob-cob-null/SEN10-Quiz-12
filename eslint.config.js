const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      eqeqeq: "error",
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  {
    files: ["script.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser, ...globals.commonjs },
    },
  },
  {
    files: ["*.test.js"],
    languageOptions: {
      globals: { ...globals.jest, ...globals.browser },
    },
  },
];
