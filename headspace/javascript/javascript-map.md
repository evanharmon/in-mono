# JAVASCRIPT MAP

Must use return or map will not be returned!

## Resources

- [MDN Map Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Create Map

```javascript
const m = new Map()
```

## Conditionally Increment map key value

works if key not defined yet

```javascript
m.set('a', m.get('a') + 1 || 0)
```
