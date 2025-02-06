# PYTHON SET

## Resources

- [Python set pythontips docs](https://book.pythontips.com/en/latest/set_-_data_structure.html)

## Features
unordered collection of unique objects.
- uses a hash table
- iterable
- mutable
- has no duplicates
- operations do not modify original set

## Methods

### Unpack

`a, b, c = {'Evan', 1, 3}`

### Create set from list

```python
list_one = [1,2,3,4]
set(list_one)
```

uppercase list strings while building the set
```python
my_list = ['hello', 'world', 'foo', 'bar']
my_set = set(s.upper() for s in my_list)
print(my_set)  # {'HELLO', 'WORLD', 'FOO', 'BAR'}
```

### Remove / Discard

safe to call if item not in set. Fails silently

```python
my_set = {'apple', 'banana', 'cherry'}
my_set.remoce('banana')
my_set.discard('apple')
```

### Copy

```python
my_set = {'apple', 'banana', 'cherry'}
my_copied_set = my_set.copy()
```

### Clear

```python
my_set = {'apple', 'banana', 'cherry'}
my_set.clear()
```

### Set operations

```python
set1 = {1, 2, 3}
set2 = {2, 3, 4}

# Combine all unique elements
union_set = set1 | set2         # or set1.union(set2)
print(union_set)                # prints: {1, 2, 3, 4}
# Find elements in common
intersection_set = set1 & set2  # or set1.intersection(set2)
print(intersection_set)         # prints: {2, 3}
```

```python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Difference of set1 and set2
# Elements in first set but NOT in the second
difference_set = set1 - set2         # or set1.difference(set2)
print("Difference of set1 and set2: ", difference_set)   # prints: {1, 2, 3}

# Symmetric Difference of set1 and set2 (elements in either set but not both)
symmetric_diff_set = set1 ^ set2     # or set1.symmetric_difference(set2)
print("Symmetric difference of set1 and set2: ", symmetric_diff_set)   # prints: {1, 2, 3, 6, 7, 8}
```

```python
set1 = {1, 2, 3}
set2 = {1, 2}

print(set2.issubset(set1))    # prints: True
print(set1.issuperset(set2))  # prints: True
```
