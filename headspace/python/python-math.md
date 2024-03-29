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
