module.exports = {
  'env': {
    'node': true,
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
