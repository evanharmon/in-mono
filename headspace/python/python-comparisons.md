# PYTHON COMPARISONS

## Resources

- [Python any / all guide](https://realpython.com/any-python/)

## identity `is` check

checks if items are the SAME object

## identity `is not` check

checks if items are the NOT the same object

## Containment `in` check

checks if a member, subset, or element is in container

## Containment `not in` check

checks if a member, subset, or element is NOT in container

## Check if char matches a subset of chars

`'J' in {'J', 'K'}` returns `True`

## Any

check if word has any vowels

```python
vowels = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"]
if any(char in vowels for char in word):
   pass
```

## All

`all([True,True,True]) // True`
