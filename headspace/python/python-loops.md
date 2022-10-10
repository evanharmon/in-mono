# PYTHON LOOPS

## Resources

- [RealPython range guide](https://realpython.com/python-range/)
- [Python enumerate](https://book.pythontips.com/en/latest/enumerate.html)
- [RealPython enumerate guide](https://realpython.com/python-enumerate/)

## For in specific range

Range acts like slice and DOES NOT include the last item

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
