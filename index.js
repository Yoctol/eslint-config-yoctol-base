module.exports = {
  extends: [
    './legacy',
    'eslint-config-airbnb-base/rules/es6',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {}
};
