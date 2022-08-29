# NODE TEST RUNNER

## Resources

- [Node18 assert](https://nodejs.org/api/assert.html#assertequalactual-expected-message)

## truthy test

```javascript
const res = palindrome('aba')
assert.ok(res)
```

## strict

without `strict` `1 === '1'` is true
