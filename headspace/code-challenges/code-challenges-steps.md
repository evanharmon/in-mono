# CODE CHALLENGES STEPS

## Best Practices

- whenever working with rows and columns, look for patterns between the row / column values

## Limitations

- assumes making multiple console.logs calls

## Example Output of Staircase

```
// steps(2)
// '#  '
// '## '
steps(3)
// '#   '
// '##  '
// '### '
```

## Strategies

### For loop and helpers

pretty simple because of string helpers

- use for loop starting at 1 to iterate over input `n`
  - create repeated string with padding such as `'#'.repeat(i).padEnd(3, ' ')`

### Iteratively build staircase

from algocasts

- for loop over input to go through rows
  - create empty `stair` string
  - for loop to iterate over columns in each row
    - if column is `<=` current row, add `#` to stair string
    - else add space ` ` to stair string
  - console log the stair string back in row for loop

### Recursion

recursion solution doesn't increment n but instead manages
incrementing through row parameter

default parameters to add:

- `row = 0`
- `stair = ''`

Base Case: `if (row === n) return`

Steps:

- if `stair` string length === n, then end of row
- if `stair` string length <= row, add `#`, otherwise ` `
