# eslint-config-yoctol-base

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/Yoctol/eslint-config-yoctol-base.svg)](https://greenkeeper.io/)
[![Dependency Status][david_img]][david_site]

> Yoctol Info. base ESLint config, fork from [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## Usage

We export two ESLint configurations for your usage.

### eslint-config-yoctol-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:


```sh
npm info "eslint-config-yoctol-base@latest" peerDependencies
```

Linux/OSX users can simply run

```sh
(
  export PKG=eslint-config-yoctol-base;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
  npm install --save-dev eslint-config-yoctol-base eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-prettier@^#.#.#
```

Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-yoctol-base
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-yoctol-base eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-prettier@^#.#.#
```

2. Add `"extends": "yoctol-base"` to your .eslintrc

### eslint-config-yoctol-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:


```sh
npm info "eslint-config-yoctol-base@latest" peerDependencies
```

Linux/OSX users can simply run

```sh
(
  export PKG=eslint-config-yoctol-base;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-yoctol-base eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-prettier@^#.#.#
```

2. Add `"extends": "yoctol-base/legacy"` to your .eslintrc

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules be overwritted

#### error

```
- 'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'ignore',
  }]
```

#### es6

```
- 'arrow-parens': ['error', 'as-needed']
```

#### import

```
- import/prefer-default-export: 'off'
- import/order: ['error', {
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  'newlines-between': 'always',
}]
- import/no-extraneous-dependencies: ['error', {
  devDependencies: [
    '**/__tests__/*.spec.js',
    '**/__stories__/*.story.js',
    '**/scripts/*.js',
    '**/test/**/*.js',
    '**/webpack.config.*.js',
  ],
}]
```

#### style

```
- linebreak-style: 'off'
- max-len: ['error', 100, 2, {
  ignorePattern: ' // eslint-disable-line ',
  ignoreUrls: true,
  ignoreComments: false,
  ignoreStrings: true,
  ignoreTemplateLiterals: true,
  ignoreRegExpLiterals: true,
}]
- no-plusplus: ['error', { allowForLoopAfterthoughts: true }]
- no-underscore-dangle: 'off'
```

[npm-image]: https://badge.fury.io/js/eslint-config-yoctol-base.svg
[npm-url]: https://npmjs.org/package/eslint-config-yoctol-base
[travis-image]: https://travis-ci.org/Yoctol/eslint-config-yoctol-base.svg
[travis-url]: https://travis-ci.org/Yoctol/eslint-config-yoctol-base
[david_img]: https://david-dm.org/Yoctol/eslint-config-yoctol-base.svg
[david_site]: https://david-dm.org/Yoctol/eslint-config-yoctol-base
