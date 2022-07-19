# REACT HOOKS USE CONTEXT

## Resources

- [React useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [React useContext between files](https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react/)
- [React useContext Avoid Passing Callbacks Down](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)
- [React Loading Context example](https://medium.com/digio-australia/using-the-react-usecontext-hook-9f55461c4eae)

## From the React Team:

If you use context to pass down the state too, use two different context types —
the dispatch context never changes, so components that read it don’t need to
rerender unless they also need the application state.
