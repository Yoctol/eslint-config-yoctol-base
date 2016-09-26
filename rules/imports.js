module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
    ],
    'import/core-modules': [
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    // Forbid the use of extraneous packages, allow some in tests
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/34
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/__tests__/*.spec.js',
        '**/__stories__/*.story.js',
        'scripts/*.js',
        'webpack.config.*.js',
      ],
    }],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/8
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/11
    'import/prefer-default-export': 'off',
  },
};
