# JAVASCRIPT RECURSION

## Resources

- [Javascript recursive function returning undefined](https://typeofnan.dev/why-is-my-recursive-function-returning-undefined-in-javascript/)

## Recursive function returning undefined

remember to return the next execution of the function!

```javascript
function factorial(n, result = 1) {
  if (n === 1) return result

  return factorial(num - 1, num * result)
}
```
