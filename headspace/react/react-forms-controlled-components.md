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

## Examples

### Form submission
```jsx
import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to an API
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</ बटन>
    </form>
  );
}

export default MyForm;
```
