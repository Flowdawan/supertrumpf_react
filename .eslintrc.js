module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": 0,
    "indent": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off"
  },
};
