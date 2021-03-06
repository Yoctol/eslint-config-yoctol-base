module.exports = {
  extends: [
    'eslint-config-airbnb-base/legacy',
    './rules/best-practices',
    './rules/errors',
    './rules/legacy',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/prettier',
    './rules/sort-imports-es6-autofix',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  ecmaFeatures: {},
  globals: {},
  rules: {},
};
