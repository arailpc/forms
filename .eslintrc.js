module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true
  },
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": ["off"]
  }
};
