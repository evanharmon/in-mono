# CODE CHALLENGES ANAGRAMS

## Common Requirements

- consider lowercase and uppercase letters the same
- ignore non-whitespace characters like spaces, punctuation

## Strategies

### Character map

do any sanitizing / cleaning copies of strings necessary

- build up hashmap with key character and value count of character for both strings
- compare size of each hashmap and return false if not equal
- iterate through hashmap a and compare a character and count to hashmap b
  - if b doesn't exist or is not the same count return false
  - return true

improvements:

- write a helper function for sanitizing and map building
- less iterations
