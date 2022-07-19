# REACT PROPTYPES

## default Props

```jsx
class App extends Component {
  render() {}
}

App.defaultProps = {
  notes: PropTypes.array(),
}

App.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
}
```
