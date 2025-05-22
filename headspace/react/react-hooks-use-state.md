# REACT HOOKS USE STATE

## Resources

- [React Hooks useState](https://reactjs.org/docs/hooks-state.html)
- [React Hooks useState API](https://reactjs.org/docs/hooks-reference.html#usestate)

## Features

- `setState` does not auto merge update objects
- can access previous state value inside set call

## Access Previous State Value

```jsx
<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
```

## Merge Updates

```jsx
setState(prevState => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues }
})
```

## re-renders

look for opportunities to pass useState a function for any expensive computations that dont need to run on every re-render.
DO NOT use this lazy initialization of state for cheap computations bc it will actually be slower.

## State types

### Complex state

```jsx
import React, { useState } from 'react';

function UserProfile() {
  // Initial state for user profile
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  });

  const handleNameChange = (event) => {
    // Update the name property in the profile object
    setProfile({
      ...profile, // Use the spread operator to keep the existing state
      name: event.target.value
    });
  };

  const handleAddressChange = (event) => {
    // Update the street property within the address object
    setProfile({
      ...profile,
      address: {
        ...profile.address,
        street: event.target.value
      }
    });
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={profile.name} onChange={handleNameChange} />
      <label htmlFor="street">Street:</label>
      <input type="text" id="street" value={profile.address.street} onChange={handleAddressChange} />
    </div>
  );
}

export default UserProfile;
```