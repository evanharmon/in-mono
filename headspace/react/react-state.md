# REACT STATE

## Resources

- [React State Medium Synthetic Events](https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6)

## Stateless function

```jsx
import Header from './header/app-header'
export default props => {
  return (
    <div className='container'>
      <Header></Header>
      {props.children}
    </div>
  )
}
```

## Nulls

Use nulls with arrays. null means api call hasn't returned yet
