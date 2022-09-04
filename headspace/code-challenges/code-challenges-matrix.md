# CODE CHALLENGES MATRIX

## Strategies

### While loop switch on mode direction

variables to track: `counter`, `maxItems`, `row`, `col`

steps:

- while loop until maxItems reached
  - fill in matrix with next counter value (+1)
  - switch statement check mode
    - 'right':
      - if end of row or next col not empty, mode = down, increment row
      - else increment column
    - 'down':
      - if end of column or next row not empty, mode = left, decrement column
      - else increment row
    - 'left':
      - if column index is zero or previous column not empty, mode = up, decrement row
      - else decrement column
    - 'up':
      - if row index is zero or previous row not empty, mode = right, increment column
      - else decrement row

```javascript
// example
while (counter < maxItems) {
  matrix[row][col] = counter + 1
  switch (mode) {
    case 'right':
      if (col + 1 === n || typeof matrix[row][col + 1] !== 'undefined') {
        mode = 'down'
        row++
      } else col++
      break
    case 'down':
      if (row + 1 === n || typeof matrix[row + 1][col] !== 'undefined') {
        mode = 'left'
        col--
      } else row++
      break
    case 'left':
      if (col === 0 || typeof matrix[row][col - 1] !== 'undefined') {
        mode = 'up'
        row--
      } else col--
      break
    case 'up':
      if (row === 0 || typeof matrix[row - 1][col] !== 'undefined') {
        mode = 'right'
        col++
      } else row--
      break
    default:
      break
  }
  counter++
}
```

### Algocast For Loop

this solution is different as it increments / decrements start and end variables

predicates:

- create 2d empty array FIRST, do not try and increase array size as you go
- no need to push or unshift, able to just assign counter to row / column

variables to track: `startColumn`, `endColumn`, `startRow`, `endRow`, `counter`

general steps:

```txt
- create empty array and set counter = 1
- while loop as long as (start Column <= endColumn) AND (startRow <= endRow)
  - for loop from startColumn to endColumn for top row
    - results[startRow][i] = counter
    - increment counter
  - increment startRow
  - for loop from startRow to endRow for right column
    - results[i][endColumn] = counter
    - increment counter
  - decrement endColumn
  - for loop from endColumn to startColumn for bottom row
    - results[endRow][i] = counter
    - increment counter
  - decrement endRow
  - for loop from endRow to startRow for left column
    - results[i][startColumn] = counter
    - increment counter
  - increment startColumn
```
