module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: ["plugin:import/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        jest: true,
      },
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
      rules: {},
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/consistent-type-imports": "warn"
  },
};
