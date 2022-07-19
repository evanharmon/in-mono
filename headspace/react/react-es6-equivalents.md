# REACT ES6 EQUIVALENTS

## displayName

improves debugging, taken from es6 class name
`class Hand extends React.Component {}`

## getInitialState()

```jsx
class HandsApp extends Component {
  constructor(props) {
    this.state = {
      connected: false,
      handId: 0,
    }
  }
}
```

## getDefaultProps()

set in constructor

## statics

```jsx
class Note {
  static willTransitionTo() {}
  render() {}
}
```

## Class PropTypes and DefaultPropTypes

```jsx
class App extends Component {}
App.propTypes = {
  title: React.PropTypes.string,
}
App.defaultProps = {
  title: 'React Shopping Cart',
}
```
