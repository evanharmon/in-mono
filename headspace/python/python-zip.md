# PYTHON ZIP

## Resources

- [RealPython Zip](https://realpython.com/python-zip-function/)

## Zip two lists for comparison
```python
list1 = ['John', 'Emma', 'Michael', 'Sara']
list2 = ['Math', 'Science', 'English', 'History']

for name, subject in zip(list1, list2):
    print(f"Student: {name}, Subject: {subject}")
```

## Divide list in to slices

```python
slices = zip(*(iter(list_two),) * 3) # slices of 3
```
