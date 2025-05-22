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

## Use cases
- file uploads

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

## Examples

### File uploads
```jsx
import React, { useRef, useState } from 'react';

const FileUpload = () => {
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputClick = () => {
    // Click the file input when the button is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    // Get the selected file
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the selected file using the ref
    const file = fileInputRef.current?.files[0]; // Access file via ref

    // Access the file using useRef and handle the submission
    if (file) {
      console.log('File submitted:', file); // Or send to server
    } else {
      console.log('No file selected');
    }

    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the input field
      />
      <button type="button" onClick={handleFileInputClick}>
        Choose File
      </button>
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUpload;
```
