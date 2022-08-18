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

## Functional Components

FC is for children, VFC is for no children returned

```tsx
import { FC, VFC } from 'react'

export interface Props {
  msg: string
}

export const MyCompWithChildren: FC<Props> = props => {
  return <div>...</div>
}

export const MyCompWithoutChildren: VFC<Props> = props => {
  return <div>...</div>
}
```
