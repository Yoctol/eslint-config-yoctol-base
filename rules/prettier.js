module.exports = {
  extends: ['prettier'].map(require.resolve),
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true
      }
    ]
  }
};
