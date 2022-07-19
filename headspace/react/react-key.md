# REACT KEY

## Resources

- [React Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

## Re-mount Error Boundary

key prop can be used to re-mount components as well

```jsx
<ErrorBoundary key={myInputStateValue}>
  <MyComponent myInputStateValue={myInputStateValue} />
</ErrorBoundary>
```
