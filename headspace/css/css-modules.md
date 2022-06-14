# CSS MODULES

## Resources

- [Docs Github Repo](https://github.com/css-modules/css-modules/docs)
- [@value variables Docs](https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md)
- [Share variables between CSS and Javascript](https://www.falldowngoboone.com/blog/share-variables-between-javascript-and-css/)

## Export variables and import in javascript

tested with nextjs, appropriate loaders required if not using nextjs

```css
/* DropdownMenuPrimary.module.css */
@value timeout: 500ms;
:export {
  myRed: #ff0000;
}
```

```tsx
// DropdownMenu.tsx
import primaryStyles from './DropdownMenuPrimary.module.css'
console.log(primaryStyles.timeout)
console.log(primaryStyles.myRed)
```
