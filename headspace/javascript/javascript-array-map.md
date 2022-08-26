# JAVASCRIPT ARRAY MAP

## Resources

- [MDN Array Map Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Limitations

- must use return or map will not be returned!

## Good way to grab nested property values of an array of objects

example: need Order.Customer.Id array

```javascript
Orders.map(o => o.Customer.Id)
```

## Return early and break map process

not possible to return early

## In Browser, download scripts in parallel and execute them in order

```javascript
function inject(src) {
  var script = document.createElement('script')
  script.src = src
  // Load dynamically injected scripts async, execute them sync
  script.async = false
  document.body.appendChild(script)
}

;['thirdparty', 'shared', 'app'].map(getModuleSrc).forEach(inject)
```
