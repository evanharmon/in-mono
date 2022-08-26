# NODE TEST RUNNER

## Resources

- [Node18 test runner](https://nodejs.org/api/test.html#test-runner)

## Features

- builtin node package

## Limitations

- requires node v18.7
- uses `assert`

## Basic package.json

for using es6 import / export

```json
{
  "type": "module",
  "scripts": {
    "test": "node --no-warnings --experimental-specifier-resolution=node test.js",
    "test:only": "node --test-only --no-warnings --experimental-specifier-resolution=node test.js"
  }
}
```

## Basic test run

docs seem a bit misleading. If I use `--test-only` flag I can only get one test to run

```console
node --no-warnings --experimental-specifier-resolution=node test.js
```

## only tests

only run one test

```javascript
test('"fish hsif" is not a palindrome', { only: true }, () => {})
```

WATCH OUT `--test-only` must be BEFORE the js file in the node command

```console
node --test-only --no-warnings --experimental-specifier-resolution=node test.js
```
