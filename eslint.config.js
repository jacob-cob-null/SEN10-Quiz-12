const globals = require("globals");

module.exports = [
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      eqeqeq: "error",
      "no-unused-vars": "error",
    },
  },
];