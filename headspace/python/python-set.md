# PYTHON SET

## Resources

- [Python set pythontips docs](https://book.pythontips.com/en/latest/set_-_data_structure.html)

## Example

```python
some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']
duplicates = set([x for x in some_list if some_list.count(x) > 1])
print(duplicates)
# Output: set(['b', 'n'])
```

## Unpack

`a, b, c = {'Evan', 1, 3}`

## Create set from list

```python
list_one = [1,2,3,4]
set(list_one)
```
