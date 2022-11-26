module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "max-len": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off"
  },
};
