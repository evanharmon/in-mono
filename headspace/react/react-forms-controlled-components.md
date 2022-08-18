# REACT FORMS CONTROLLED COMPONENTS

## Resources

- [React Kent C Dodds Example Form](https://kentcdodds.com/blog/understanding-reacts-key-prop)
- [React Controlled Components Docs](https://reactjs.org/docs/forms.html#controlled-components)

## Features

- form data handled by React
- React acts as single source of truth

## Limitations

- DO NOT use `value` prop with controlled components

## Best Practices

- use `key` prop as described in Kent C Dodds Example Form in Resources

## Input Losing Focus On Form

`<form>` element must be directly inside the render or return function

Below will lose focus:

```jsx
function myApp() {
  const [name, setName] = useState('')
  const MyComponent = () => (
    <form>
      <input defaultValue={name} onChange=(e => setName(e.target.value)) />
    </form>
  )

  return (
    <MyComponent />
  )
}
```

Correct form use to retain focus on typing:

```jsx
function myApp() {
  const [name, setName] = useState('')

  return (
    <form>
      <input value={name} onChange=(e => setName(e.target.value)) />
    </form>
  )
}
```
