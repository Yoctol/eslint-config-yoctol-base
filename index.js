module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './legacy',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {}
};
