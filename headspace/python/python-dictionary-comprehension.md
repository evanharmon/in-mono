# PYTHON DICTIONARY COMPREHENSION

## Get all value then key

```python
new_dict = {'name': 'Evan', 'age': '42'}
[(el, k) for (k, el) in new_dict.items()]
```

## Build up string from dictionary

with conditions

```python
result = ''
for key, val in dict({3: 'Pling', 5: 'Plang', 7: 'Plong'}).items():
    if number % key == 0:
        result = f'{result}{val}'
```

becomes

```python
result = ''.join(
  [
    v
    for k,v in dict({3: 'Pling', 5: 'Plang', 7: 'Plong'}).items()
    if number % k == 0
  ]
)
```
