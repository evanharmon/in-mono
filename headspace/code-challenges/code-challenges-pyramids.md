# CODE CHALLENGES PYRAMIDS

more challenging than `steps` as the left hand side has to be addressed

## Features

- column length changes for each row

## Common Formulas

`columnLength = n * 2 - 1`
`midPoint = Math.floor(columnLength / 2)`
`midPoint - row <= column && midPoint + row >= column ? '#' : ''`
or alternative
`column < midPoint - row || column > midPoint + row ? ' ' : '#`

## Strategies

### Iteration

- iterate through rows
  - create `level` string
  - iterate through column length (see above formulas)
    - use formulas above to calculate distance and append `#` or ` `
  - console.log `level` string

### Recursion

recursion solution doesn't increment n but instead manages
incrementing through row parameter

`level` string acts as base for column iteration

default parameters to add:

- `row = 0`
- `level = ''`

Base Case: `if (row === n) return`

Steps:

- if `level` string length equals column length
  - log `level` string
  - recursive call to `pyramid(n, row + 1)` incrementing row and resetting `level` string
  - return to avoid column iteration / more string appending
- conditional check on columnLength with formulas above to append `#` or `#`
