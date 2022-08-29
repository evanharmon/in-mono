# CODE CHALLENGES FIZZBUZZ

## Summary

Write a program that console logs the numbers
from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”

## Recursion

key is to decrement until zero

- check if input is zero to support exit and not blow up stack
- call function recursively with mutated input
- console.log input AFTER recursion call
- modulo checks to print correct string or input

## For loop

avoids building up a stack

- for loop to iterate from 1 to input
- modulo checks to print correct string or input
