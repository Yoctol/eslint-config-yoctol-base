# CHANGELOG

## 0.24.0 / 2021-03-29

- [deps] use `eslint>=7.7` as peerDeps
- [deps] bump other deps

## 0.23.1 / 2020-06-12

- [deps] support ESLint v7
- [deps] bump other deps

## 0.23.0 / 2020-04-28

- [deps] move `prettier` to peerDeps
- [deps] use `prettier>=2` as peerDeps
- [deps] bump other deps

## 0.22.0 / 2020-02-04

- [breaking] requires `node>=10`
- [deps] bump other deps

## 0.21.2 / 2019-09-05

- [deps] update dependency `eslint-plugin-sort-imports-es6-autofix` to 0.5.0
- [deps] bump other deps

## 0.21.1 / 2019-08-27

- chore: bump deps for security alert (#102)

## 0.21.0 / 2019-08-12

- [new] add `eslint` v6 support
- [deps] bump other deps

## 0.20.0 / 2019-03-18

- [CI] remove node 6 and add node 10
- [deps] bump deps

## 0.19.1 / 2019-03-18

- [deps] update `eslint-plugin-sort-imports-es6-autofix` to `v0.4.0`
- [deps] update `eslint`

## 0.19.0 / 2019-01-29

- [new] `'prefer-arrow-callback': ['error', { allowNamedFunctions: true }]`
- [deps] update `eslint-config-prettier` to `4.0.0`
- [deps] update `prettier` to `1.16.1`
- [deps] peerDependencies `eslint` to `v5.12.1`
- [deps] peerDependencies `eslint-plugin-import` to `v2.15.0`
- [deps] peerDependencies `eslint-plugin-prettier` to `v3.0.1`

## 0.18.0 / 2018-10-24

- [deps] peerDependencies `eslint-plugin-prettier` to `v3.0.0`

## 0.17.2 / 2018-09-16

- [new] improve `import/no-extraneous-dependencies` by merging latest airbnb config

## 0.17.1 / 2018-08-21

- [new] add `eslint` v5 support
- [deps] update `eslint-config-airbnb-base` to `13.1.0`
- [deps] update `eslint-plugin-import` to `2.14.0`
- [deps] update `prettier` to `1.14.2`

## 0.17.0 / 2018-07-23

- [new] add `sort-imports-es6-autofix` to sort imports
- [changed] remove `ForOfStatement` from `restricted-syntax`

## 0.16.0 / 2018-06-25

- [deps] update `eslint-config-airbnb-base` to `13.0.0`

## 0.15.1 / 2018-02-12

- [disable] prefer-destructuring: AssignmentExpression - object: false

## 0.15.0 / 2018-01-28

- [new] Add and disable some rules:

### best-practices

```
- 'class-methods-use-this': 'off'
- 'consistent-return': 'off'
```

#### es6

```
- 'prefer-destructuring': [
  'error',
  {
    VariableDeclarator: {
      array: false,
      object: true
    },
    AssignmentExpression: {
      array: false,
      object: true
    }
  },
  {
    enforceForRenamedProperties: false
  }
]
```

#### node

```
- 'global-require': 'off'
```

### prettier

```
- 'prettier/prettier': [
  'error',
  {
    trailingComma: 'es5',
    singleQuote: true
  }
]
```

## 0.14.2 / 2017-12-12

- [deps] update `eslint-config-airbnb-base` to `12.1.0`
- [deps] update `eslint` to `4.13.1`
- [deps] update `eslint-plugin-import` to `2.8.0`

## 0.14.1 / 2017-10-15

- [deps] update `eslint-config-airbnb-base` to `12.0.2`
- [deps] update `eslint` to `4.8.0`

## 0.14.0 / 2017-09-05

- [deps] update `eslint-config-airbnb-base` to `12.0.0`
- [breaking] Drop eslint v3 support

## 0.13.0 / 2017-08-02

- [deps] update `eslint-config-airbnb-base` to `11.3.1`
- [deps] update `eslint-plugin-import` to `2.7.0`
- [deps] Allow eslint v4

## 0.12.5 / 2017-05-15

- [deps] update `eslint-config-airbnb-base` to `11.2.0`

## 0.12.4 / 2017-04-05

- [deps] update `eslint` to `3.19.0`
- [deps] update `eslint-config-airbnb-base` to `11.1.3`

## 0.12.3 / 2017-04-05

- [new] enable `max-len` - `ignoreRegExpLiterals`

## 0.12.2 / 2017-03-27

- [deps] update `eslint` to `3.18.0`
- [deps] update `eslint-config-airbnb-base` to `11.1.2`

## 0.12.1 / 2017-01-09

- [deps] update `eslint`
- [deps] update `eslint-config-airbnb-base`
- [docs] add note about `install-peerdeps`
- [docs] Updated instructions to support non-bash users

## 0.12.0 / 2016-12-13

- [deps] Update `eslint` to `3.12.1`
- [deps] Update `eslint-plugin-import` to `2.2.0`
- [deps] Update `eslint-config-airbnb-base` to `11.0.0`

## 0.11.0 / 2016-12-09

- [breaking] ignore `comma-dangle` in `functions`
- [breaking] disable `requireForBlockBody` in `arrow-parens`

## 0.10.0 / 2016-11-08

- [deps] Update `eslint` to `3.9.1`
- [deps] Update `eslint-plugin-import` to `2.1.0`
- [deps] Update `eslint-config-airbnb-base` to `10.0.0`

## 0.9.0 / 2016-11-03

- [deps] Update `eslint` to `3.8.0`
- [deps] Update `eslint-plugin-import` to v2
- [deps] Update `eslint-config-airbnb-base` to `9.0.0`
- [docs] ensure latest version of config is installed

## 0.8.1 / 2016-10-03

- [fix] using `**/` in `import/no-extraneous-dependencies` patterns

## 0.8.0 / 2016-09-29

- [deps] Update `eslint` to `3.6.0`
- [deps] Update `eslint-plugin-import` to `1.16.0`
- [deps] Update `eslint-config-airbnb-base` to `8.0.0`
- [breaking] disable `import/no-extraneous-dependencies` for some dev file patterns

## 0.7.0 / 2016-09-19

- [deps] Update `eslint` to `3.5.0`
- [deps] Update `eslint-config-airbnb-base` to `7.1.0`
- [breaking] disable `max-len` for `// eslint-disable-line` pattern

## 0.6.0 / 2016-09-08

- [deps] Update `eslint` to `3.4.0`
- [deps] Update `eslint-plugin-import` to `1.14.0`
- [deps] Update `eslint-config-airbnb-base` to `7.0.0`
- [breaking] disable `linebreak-style`
- [breaking] enable `no-plusplus` but allow for loop afterthoughts

## 0.5.0 / 2016-09-01

- [deps] Update `eslint` to `3.3.1`
- [deps] Update `eslint-plugin-import` to `1.13.0`
- [deps] Update `eslint-config-airbnb-base` to `5.0.3`
- [breaking] disable `import/prefer-default-export`
- [breaking] enable `import/order`

## 0.4.0 / 2016-07-18

- [deps] Update `eslint` to `3.1.0`
- [deps] Update `eslint-plugin-import` to `1.10.3`
- [deps] Update `eslint-config-airbnb-base` to `4.0.2`

## 0.3.1 / 2016-06-07

- [fix] Avoid eslint-config-airbnb-base overwrite yoctol's legacy rules directly

## 0.3.0 / 2016-06-07

- [breaking] disable `no-underscore-dangle`

## 0.2.0 / 2016-05-10

- [deps] Update `eslint-config-airbnb-base` to `3.0.1`

## 0.1.2 / 2016-05-06

- [fix] Put eslint-config-airbnb-base after require legacy

## 0.1.1 / 2016-05-06

- [fix] Fix missing eslint-config- prefix

## 0.1.0 / 2016-05-06

- Initial commmit; moved content over from `eslint-config-yoctol` package.
