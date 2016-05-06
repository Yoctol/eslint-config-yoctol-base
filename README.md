# eslint-config-yoctol-base

> Fork from [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)

[![npm version](https://badge.fury.io/js/eslint-config-yoctol-base.svg)](http://badge.fury.io/js/eslint-config-yoctol-base)

## Usage

We export two ESLint configurations for your usage.

### eslint-config-yoctol-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-yoctol-base eslint-plugin-import eslint`
2. add `"extends": "yoctol-base"` to your .eslintrc

### eslint-config-yoctol-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. `npm install --save-dev eslint-config-yoctol-base eslint-plugin-import eslint`
2. add `"extends": "yoctol-base/legacy"` to your .eslintrc

See [Airbnb's overarching ESLint config](https://npmjs.com/eslint-config-airbnb), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules be overwritted
