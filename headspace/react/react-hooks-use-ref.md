# REACT HOOKS USE REF

## Resources

- [React useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- [React useRef Hook Medium Blog](https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29)
- [React useRef Medium Article with Lottie](https://medium.com/@noamgjacobsonknzi/lottie-with-react-hooks-f52de4b6a2c4)
- [React useRef CodeSandbox with Lottie](https://codesandbox.io/s/lottie-demo-react-hooks-b7pg4?from-embed)

### Features

- retain pointer to a value between renders
- look for values that when changed shouldn't trigger re-render

## useRef

```jsx
const inputEl = useRef(null)

return (
  <>
    <input ref={inputEl} type='text' />
  </>
)
```
