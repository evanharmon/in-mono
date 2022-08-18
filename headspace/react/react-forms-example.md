# REACT FORMS EXAMPLE

## Example without useRef

adapted from react-fundamentals in Epic React course

```jsx
import * as React from 'react'

function UsernameForm({ onSubmit }) {
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(username)
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor='usernameInput'>Username:</label>
          <input
            id='usernameInput'
            type='text'
            onChange={handleChange}
            value={username}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
```
