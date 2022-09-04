# JAVASCRIPT MATRIX

multi-dimensional arrays

## Resources

- [MDN Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

## Create 2d array

note second argument is a map function called on every element of array

```javascript
Array.from(Array(2), () => new Array(4))
```

## Create square matrix

equal length matrix

```javascript
const n = 3 // rows / cols
Array.from(Array(n), () => new Array(n))
```
