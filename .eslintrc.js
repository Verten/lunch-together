module.exports = {
  root: true,
  extends: 'standard',
  parser: "babel-eslint",
  env: {
    browser: true
  },
  plugins: [
    'html'
  ],
  rules: {
    "quotes": 0,
    "no-console": 1,
    "no-debugger": 1,
    "no-var": 1,
    "semi": [1, "never"],
    "comma-dangle": [1, "always-multiline"],
    "no-trailing-spaces": 0,
    "eol-last": 0,
    "no-underscore-dangle": 0,
    "no-alert": 0,
    "no-lone-blocks": 0,
    "jsx-quotes": [1, "prefer-single"],
    "import/default": 1,
    "space-before-function-paren": ["error", "never"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
