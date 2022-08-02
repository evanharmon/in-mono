# TYPESCRIPT RECORD

## Resources

- [Typescript Record Type](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)

## Features

- returns undefined if record does not contain item

## Hashmap example

```typescript
export function decodedValue(r: Array<string>): number {
  // build hashmap of color band values
  const colorCode: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  // iterate over first 2 values in array
  // save return value
  let val = 0
  for (let i = 0; i < 2; i++) {
    const appendVal = colorCode[r[i].toLowerCase()]
    // append value as string and parse back to number
    val = parseInt(`${val}${appendVal}`)
  }

  return val
}
```
