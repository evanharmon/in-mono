# REACT

## Resources

- [React Snippets 30 seconds of code](https://www.30secondsofcode.org/react/p/1/)
- [React Synthetic Events](https://reactjs.org/docs/events.html)
- [Babel React JSX Repl](https://babeljs.io/repl/)

## Show booleans in JSX html

```jsx
<>{completed.toString()}</>
```

## Inline styling

```jsx
<>
  <div style={{ display: 'inline-block' }}></div>
</>
```

## Styling with object

```jsx
const divStyle = { color: 'white', textAlign: 'center' }
;<div style={divStyle}></div>
```

## &nbsp non breaking spaces

use unicode

```jsx
<>
  <div>{'\u00a0'}</div>
</>
```
