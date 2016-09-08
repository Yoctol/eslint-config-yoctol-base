module.exports = {
  rules: {
    // allow both 'LF' and 'CRLF' as linebreaks
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/25
    'linebreak-style': 'off',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // allow dangling underscores in identifiers
    // Proposal - https://github.com/Yoctol/eslint-config-yoctol-base/issues/3
    'no-underscore-dangle': 'off',
  }
};
