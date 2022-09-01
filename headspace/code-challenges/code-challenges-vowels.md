# CODE CHALLENGES VOWELS

## Strategies

### Lookup Object Iteration

- create lookup table
- iterate through string and count instances of vowel matches

### Regex with string match helper

use regex!

- g is for matching entire word not just first match
- i is case insensitivity

```javascript
const vowels = str => {
  const m = str.match(/[aeiou]/gi)
  return m === null ? 0 : m.length
}
```

### Iterator with string `.includes()` helper

- declare `checker` varable with `aeiou`
- declare counter variable
- iterate over string
  - check if `checker.includes(c.toLowerCase())` returns true then increment counter

### Iterator with array `.includes()` helper

- declare `checker` array with `['a','e','i','o','u']`
- declare counter variable
- iterate over string
  - check if `checker.includes(c.toLowerCase())` returns true then increment counter
