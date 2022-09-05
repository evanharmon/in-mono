# CODE CHALLENGES RUNTIME COMPLEXITY

the performance of your algorithm

## Resources

- [FreeCodeCamp Guide to Runtime Complexity / Big O Notation](https://www.freecodecamp.org/news/my-first-foray-into-technology-c5b6e83fe8f1/)
- [MyGreatLearning Time Complexity Essentials](https://www.mygreatlearning.com/blog/why-is-time-complexity-essential/)

## Constant time O(1)

algorithm always takes the same amount of time to execute. Holy Grail level

example:

- access a value of array by index

## Logarithmic time complexity O(log n)

doubling the input size of `n` DOES NOT double the amount of work

examples:

- binary search

## Linear time complexity O(n)

algorithm execution time is directly proportional to the input size `n`

examples:

- reversing a string

## Quasilinear time complexity O(n \* log(n))

time complexity doesn't quite double when input size `n` is doubled

## Quadratic time complexity O(n^2)

time complexity quadruples when the input size `n` is doubled

examples:

- nested iteration loop
- checking for duplicates in a deck of cards

## Exponential time complexity O(2^n)

bad bad bad. time complexity DOUBLES by an increase of `n` by 1
