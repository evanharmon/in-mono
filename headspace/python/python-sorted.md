# PYTHON SORTED

## Features
Python's builtin sorting function


## Examples

### Sort in reverse
`sorted(values, reverse=True)`

### Sort tuples by a specific element
```python
my_dict = [('hey', 1), ('hi', 2), ('hello', 3)]
sorted_tuples = sorted(my_dict, key=lambda x: x[1])  # second element, count here
print(sorted_tuples)  # Output: [('hey', 1), ('hi', 2), ('hello', 3)]
```

### Sort by key
returns a list - obviously
```python
# Example dictionary with unsorted keys
my_dict = {'banana': 3,'apple': 5,'cherry': 2,'date': 4}
# Using the `sorted()` function to sort the dictionary by key
# The sorted() function returns a list of tuples, where each tuple is (key, value)
sorted_items = sorted(my_dict.items(), key=lambda item: item[0])
```