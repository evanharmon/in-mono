# REACT LAZY

## Resources

### Lazy Import By Env

```javascript
let MyComponent
if (process.env.MY_ENV === 'true') {
  MyComponent = React.lazy(() => import('./MyComponent'))
}
```
