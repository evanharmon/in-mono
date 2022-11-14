# GAME PROGRAMMING TWO'S COMPLEMENT

## Resources

- [Two's Complement guide on Hackernoon](https://hackernoon.com/a-guide-to-twos-complement-calculating-and-converting-for-binary-numbers-97173z8t)
- [Two's Complement YT Video](https://youtu.be/n6taPbsRqV4)

## Features

- most significant bit is called the `sign bit`
- notation can represent both negative and positive integers
- positive numbers are `0` for the `sign bit`
- negative numbers are `1` for the `sign bit`

## Example

```
0   0   0   0
^8  ^4  ^2  ^1
```

binary `0011` = base10 `3`

steps:

- flip all bits
- add 1 to least significant bit

binary `1101` = base10 `-3`
