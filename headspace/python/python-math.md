# PYTHON MATH

## Resources

- [RealPython sum](https://realpython.com/python-sum-function/)

## Convert float to int

`int(5.2)`

## Return float

`float(5)`

## Raise int to a power

```python
print 2**3
print math.pow(2, 3)
```

## Get the factorial

`math.factorial(4)`

## Divide and round down

`8 // 3` equals 2

## Custom floor method

`int(5.5 // 1)`

## Increment / Decrement

python does not have `++` or `--`

write it the usual way `a += 1` `b -= 1`

## Max

example: make sure the sum of the lengths of any two sides of a triangle are greater than or equal to third side
`max([1,1,3]) < sum([1,1,3]) - max([1,1,3])`

## Sum range of numbers

sum 1 through 10

```python
sum(range(1, 11))
```

## Concatentate sequence of numbers

```python
num_lists = [[1, 2, 3], [4, 5, 6]]
sum(num_lists, start=[]) # [1, 2, 3, 4, 5, 6]
```

## Check if a list contains all zeros
```python
digits = [0,0,0,0]
all(d == 0 for d in digits)
```

## Modulo

### Get the last digit in a number
it's base 10 - so can use modulo!

```python
4265 % 10
> 5
```

then number can be evaluated, etc..

### Remove the last digit in a number
it's base 10 - so can divide and round down
```python
4265 // 10
> 426
```

great for iterating through digits in a number
without converting to string, etc.

### Reverse a number without using strings
assumes it's base10
```python
def reverse_num(n: int):
    result = 0
    while n > 0:
        # grab last digit
        last_digit = n % 10
        # handles removing leading zeros as well since 0 * 10 = 0
        # add a trailing `0` to the result to make room for new number
        # ex: 123 becomes 1230 and then add last digit on top
        print(result * 10, result * 10 + last_digit)
        result = result * 10 + last_digit
        n //= 10
    return result
```

### Duplicate a digit
```python
# multiply by 10 to add a place
3 * 10 + 3
> 33
```

### Increment but stay within a range
for example, jump n chars but stay within the string
```python
# Example with a list or string with length of 10, jump 9 items
next_idx = (9 + 9) % 10
```