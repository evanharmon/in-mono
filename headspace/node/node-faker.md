# NODE FAKER

## Resources

- [FakerJS Site](https://fakerjs.dev)

## Install

```console
npm install @faker-js/faker
```

## Generate array of words

array of 20 words with minimum length 10 chars

```js
const { faker } = require('@faker-js/faker')
Array.from(new Array(20), () => faker.lorem.word(10))
```
