# REACT TYPESCRIPT TYPES

## onChange event

for input, textarea, etc

```tsx
function MyApp() {
  const [inputVal, setInputVal] = useState<string>()

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setInputVal(event.currentTarget.value)
  }

  return <input type='text' defaultValue='' onChange={onChange} />
}
```
