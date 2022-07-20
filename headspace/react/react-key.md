# REACT KEY

## Resources

- [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

## Re-mount Error Boundary

key prop can be used to re-mount components as well
Not great though as if input is keys, every keystroke could re-render
MyComponent and cause flickers...

```jsx
<ErrorBoundary key={myInputStateValue}>
  <MyComponent myInputStateValue={myInputStateValue} />
</ErrorBoundary>
```
