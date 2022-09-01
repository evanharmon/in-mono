# CODE CHALLENGES CAPITALIZE

## Strategies

### Build a new string

focus on building up a new string and checking if it's last char is a space or empty

- create empty return str
- create array from str for iteration
- iterate through input string array
  - grab last character of return str
  - if last char is empty or a space, add current character to string as uppercase
  - else add current character to return string

### Split string by spaces

use of `slice` makes this easy to read

- create words array for return value
- split input string in an array of split strings by spaces ' '
- iterate over split strings
  - grab first letter from split string and uppercase
  - create uppercased word by joining uppercase'd letter with rest of string minus the first char
  - add uppercased word to words return array
- finally, join return words array by a space ' ' and return
