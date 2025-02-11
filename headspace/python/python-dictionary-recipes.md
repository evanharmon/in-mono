# PYTHON DICTIONARY RECIPES

## Create

### Create dict from list

```python
names = ['John', 'Mary', 'Bob']
people_dict = {name: None for name in names}
print(people_dict)
# Output: {'John': None, 'Mary': None, 'Bob': None}
```

or

```python
names = ['John', 'Mary', 'Bob']
people_dict = dict((name,0) for name in names)
print(people_dict)
```

## Merge

### Merge dictionaries with update
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
shop_inventory = {'screwdriver': 1, 'hammer': 1}
# dict 2 items will be added to dict 1
# dict 2 items will OVERWRITE dict 1
inventory.update(shop_inventory)
```

### Merge and create new dict with union
requires python 3.9+
```python
house_inventory = {'paper_towels': 5, 'distilled_water': 10}
shop_inventory = {'screwdriver': 1, 'hammer': 1}
# Dict 2 takes precedence
inventory = house_inventory | shop_inventory
```

or merge dict1 with another dict or iterable of (key,value) pairs
```python
inventory = {'paper_towels': 5, 'distilled_water': 10}
iterable_list = [(k, v) for k, v in [('soda', 1), ('chips', 5)]]
inventory |= iterable_list
```

### Merge similar dictionary keys and retain all values

```python
cart = {'Banana': 3, 'Apple': 2, 'Orange': 1, 'Milk': 2}
aisle_map = {'Banana': ['Aisle 5', False], 'Apple': ['Aisle 4', False], 'Orange': ['Aisle 4', False], 'Milk': ['Aisle 2', True]}
result = {k: [cart[k]] + v for k, v in aisle_mapping.items() if k in cart}
```

## Invert dictionary

handy to look up frequencies and then have key as value

`dict((v, k) for k, v in my_map.items())`

## Build up histogram from List

```python
items = [1,1,3,4,5,6]
counts = dict()
for i in items:
  counts[i] = counts.get(i, 0) + 1
```
or

```python
items = ["coal", "wood", "wood", "diamond", "diamond", "diamond"]
d = dict()
for item in items:
  d.update({item: d.get(item, 1) + 1})
```

## Deep copy

```python
import copy

# Create a dictionary
my_dict = {'a': 1, 'b': 2, 'c': 3}
# Make a deep copy of the dictionary
deep_copy_of_dict = copy.deepcopy(my_dict)
print(deep_copy_of_dict)  # Output: {'a': 1, 'b': 2, 'c': 3}
```

## Populate dictionary from iterable

```python
items = ['acura', 'honda', 'toyota']
cars = dict().fromkeys(items, 0)
```