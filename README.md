# eslint-config-yoctol-base

> Fork from [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

[![npm version](https://badge.fury.io/js/eslint-config-yoctol-base.svg)](http://badge.fury.io/js/eslint-config-yoctol-base)

## Usage

We export two ESLint configurations for your usage.

### eslint-config-yoctol-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-yoctol-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-yoctol-base eslint@^3.0.1 eslint-plugin-import@^1.10.3
  ```

2. Add `"extends": "yoctol-base"` to your .eslintrc

### eslint-config-yoctol-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-yoctol-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-yoctol-base eslint@^3.0.1 eslint-plugin-import@^1.10.3
  ```

2. Add `"extends": "yoctol-base/legacy"` to your .eslintrc

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules be overwritted

#### style

```
- linebreak-style: 'off'
- no-plusplus: ['error', { allowForLoopAfterthoughts: true }]
- no-underscore-dangle: 'off'
```

#### import

```
- import/prefer-default-export: 'off'
- import/order: ['error', {
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  'newlines-between': 'always',
}]
```
