# NODE TESTING SHOULDJS

## ShouldJS Check Query Param

```javascript
const url = URL.parse(res.headers.location, true)
should(url.query).have.ownProperty('SAMLRequest')
```
