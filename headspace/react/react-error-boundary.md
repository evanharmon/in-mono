# REACT ERROR BOUNDARY

just use the NPM package

## Resources

- [React Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- [React Error Boundary NPM react-error-boundary package](https://github.com/bvaughn/react-error-boundary#readme)

## Features

- don't have to write a class component
- accepts prop resetErroBoundary
- accepts prop resetKeys to reset error state with child button click

## Limitations

cannot catch:

- event handlers
- async code like setTimeout or requestAnimationFrame
- server side rendering
- errors thrown in itself
