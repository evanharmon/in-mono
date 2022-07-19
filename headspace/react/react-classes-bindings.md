# REACT CLASSES BINDINGS

## Bind function

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.onHandlerChange.bind(this)
  }
  onHandlerChange() {
    console.log('on handler change');
  }
  render() {
    <div>
      <input type="button" onClick={ () => { this.onHandlerChange() } />
    </div>
  }
}
```
