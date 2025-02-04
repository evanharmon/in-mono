# PYTHON LOOPS

## Resources

- [RealPython range guide](https://realpython.com/python-range/)
- [Python enumerate](https://book.pythontips.com/en/latest/enumerate.html)
- [RealPython enumerate guide](https://realpython.com/python-enumerate/)

## For in specific range

Range acts like slice and DOES NOT include the last item
range does not provide current index

```python
for x in range(0, 3):
  print "We're on time %d" % (x)
```

## Range with start, stop, and step

```python
for i in range(3, 16, 3):
    quotient = i / 3
    print(f"{i} divided by 3 is {int(quotient)}.")
```

## Enumerate

loop with counter

```python
my_list = ['apple', 'banana', 'grapes', 'pear']
for counter, value in enumerate(my_list):
    print counter, value
```

loop with counter and index start

```python
my_list = ['apple', 'banana', 'grapes', 'pear']
for c, value in enumerate(my_list, 1):
    print(c, value)
```

## Iterate over string

```python
number_string = str(153)
for s in number_string:
    print(s)
```

## While loop

```python
cnt = 0
while number != 1:
    cnt += 1
    if number % 2 == 0:
        number = number / 2
    else:
        number = 3 * number  + 1
```

## Loop counting down with index

```python
letters = '3598215088'
for index, num in enumerate(letters, start=-isbn_len):
    # adjust for negative index counting
    range_sum = abs(index) + int(num)
    total += total * range_sum
```

## Get the midpoint of a loop
works for odd or even length lists
```python
# get the length, and add 1 if the length is an odd number
mid = len("abcdefg") // 2 + len("abcdefg") % 2
# 4
mid = len("abcdef") // 2 + len("abcdef") % 2
# 3
```
