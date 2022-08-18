# TYPESCRIPT TYPES

## Resources

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Typescript Types Generator From JSON](https://jvilk.com/MakeTypes/)

## Single Type Invariant

URL params could be an example. Allows a logical type assertion at runtime

```typescript
invariant(params.id)
```

## SVG support declaration

just use [next-plugin-svgr](https://github.com/platypusrex/next-plugin-svgr)

## Declare array of objects with unknown keys

uses index signature for extra uknown keys

```typescript
interface Person {
  name: string
  age: number
  [key: string]: any // 👈️ index signature
}

const arr2: Person[] = [
  { name: 'Alice', age: 27 },
  { name: 'Bob', age: 28, country: 'Chile' },
]
```
