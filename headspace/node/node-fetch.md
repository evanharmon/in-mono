# NODE FETCH

## Resources

- [Node fetch Github Repo](https://github.com/bitinn/node-fetch)

## Response object

```
res.body
res.status
res.statusText
```

## Example

remember to call additional `.json()` with await!

```javascript
const params = new URLSearchParams()
const res = await fetch('http://httpbin.org/post', {
  method: 'POST',
  body: params,
})
console.log(res.status)
const data = await res.json()
console.log(data)
```
