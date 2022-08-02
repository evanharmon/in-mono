# TYPESCRIPT MATH

## Round to 2 decimal places

gross because converts to string and then back to number

```typescript
const rounded = parseFloat((1.245).toFixed(2))
```

## Generate random number up to a max

```typescript
Math.random() * 6
```

## Roll a D6

number must be between 1 and 6. important to use `ceil` to avoid 0

```typescript
Math.ceil(Math.random() * 6)
```
