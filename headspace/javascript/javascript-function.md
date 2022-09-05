# JAVASCRIPT FUNCTION

## Resources

- [MDN Function apply() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## Apply

- first argument can be `this` for calling object
- accepts a single array of arguments

```javascript
// example
function memoize(fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) return cache[args]

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}
```
