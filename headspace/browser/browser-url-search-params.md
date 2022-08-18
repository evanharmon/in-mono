# BROWSER URLSEARCHPARAMS

## Resources

- [MDN URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [Valentinog Blog on URL object and search params](https://www.valentinog.com/blog/url/)

## Add URL search params to existing URL object

```javascript
const url = new URL('https://example.com?foo=1&bar=2')
const params = new URLSearchParams(url.search)

// Add a third parameter.
params.set('baz', 3)
params.toString() // "foo=1&bar=2&baz=3"
```

## Add search params directly to URL object

```javascript
const url = new URL('https://example.com?foo=1&bar=2')
url.searchParams.append('zipcode', '11111')
```
