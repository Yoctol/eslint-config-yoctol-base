module.exports = {
  rules: {
    // allow both 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/25
    'linebreak-style': 'off',

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/24
    'max-len': ['error', 100, 2, {
      ignorePattern: ' // eslint-disable-line ',
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // allow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/3
    'no-underscore-dangle': 'off',
  }
};
