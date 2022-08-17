# REACT FORMS

## Resources

- [React Kent C Dodds Example Form](https://kentcdodds.com/blog/understanding-reacts-key-prop)
- [React Uncontrolled Components Docs](https://reactjs.org/docs/uncontrolled-components.html)

## Best Practices

Use `key` prop as described in Kent C Dodds Example Form in Resources

## Input Value Not Changing

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

  return (
    <form>
      <input value={name} onChange=(e => setName(e.target.value)) />
    </form>
  )
}
```

## Input value not clearing

- remember to set the state back to `''` on submit / button click
- use `value` prop in addition to `defaultValue`

```jsx
<input type='text' defaultValue='' onChange={onChange} value={inputVal} />
```
