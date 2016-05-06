module.exports = {
  'env': {
    'es6': true,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'generators': false,
      'objectLiteralDuplicateProperties': false,
    },
  },
  'plugins': [
    'import'
  ],
  'rules': {

  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};
