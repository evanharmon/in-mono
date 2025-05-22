# REACT HOOKS USE REF

## Resources

- [React useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- [React useRef Hook Medium Blog](https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29)
- [React useRef Medium Article with Lottie](https://medium.com/@noamgjacobsonknzi/lottie-with-react-hooks-f52de4b6a2c4)
- [React useRef CodeSandbox with Lottie](https://codesandbox.io/s/lottie-demo-react-hooks-b7pg4?from-embed)

## Features
access and interact with DOM nodes / React elements directly within components
allows changing child component without making use of props or triggering re-render
- retain pointer to a value between renders
- look for values that when changed shouldn't trigger re-render
- value persists across re-renders
- `myRef.current` value is mutable

## Examples

### Simple useRef

```jsx
const inputEl = useRef(null)

return (
  <>
    <input ref={inputEl} type='text' />
  </>
)
```

### Focus example

```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default InputFocus;
```

### Store previous value of input field
```jsx
import React, { useRef, useState, useEffect } from 'react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Current Value: {inputValue}</p>
      <p>Previous Value: {previousInputValue.current}</p>
    </div>
  );
}

export default MyComponent;
```