# REACT HOOKS USE MEMO

## Resources

- [React Hooks useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

## Features

- cache expensive computations
- avoids a useEffect call for sideeffect

## Example

```tsx
const filesLoaded = useMemo(() => {
  // code here
  return true || false
}, [filesToLoad, files])
```
