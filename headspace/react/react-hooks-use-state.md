# REACT HOOKS USE STATE

## Resources

- [React Hooks useState](https://reactjs.org/docs/hooks-state.html)
- [React Hooks useState API](https://reactjs.org/docs/hooks-reference.html#usestate)

## Features

- `setState` does not auto merge update objects
- can access previous state value inside set call

## Access Previous State Value

```jsx
<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
```

## Merge Updates

```jsx
setState(prevState => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues }
})
```

## re-renders

look for opportunities to pass useState a function for any expensive computations that dont need to run on every re-render.
DO NOT use this lazy initialization of state for cheap computations bc it will actually be slower.
