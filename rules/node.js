module.exports = {
  env: {
    node: true,
  },
  plugins: ['import'],
  rules: {
    // https://eslint.org/docs/rules/global-require
    'global-require': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
