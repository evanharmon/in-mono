# REACT FORMS UNCONTROLLED COMPONENTS

## Resources

- [React Kent C Dodds Example Form](https://kentcdodds.com/blog/understanding-reacts-key-prop)
- [React Uncontrolled Components Docs](https://reactjs.org/docs/uncontrolled-components.html)

## Features

- form data handled by form itself and NOT React

## Best Practices

- use `key` prop as described in Kent C Dodds Example Form in Resources

## Limitations

- DO NOT use `defaultValue` prop with controlled components
- needs a `<form>` tag and `submit` button

## Uncontrolled Input Value Not Changing

do not use `value` with an uncontrolled component
Use `defaultValue` instead of `value` attribute which will be overridden

correct use

```jsx
<input defaultValue={name} onChange=(e => setName(e.target.value)) />
```

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

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name' />
      <input id='name' value={name} onChange=(e => setName(e.target.value)) />
      <input type='submit' value='Submit' />
    </form>
  )
}
```
