# PYTHON LIST COMPREHENSION

## Resources

- [RealPython when to use list comprehension](https://realpython.com/list-comprehension-python/)
- [Python Cheat Sheet Comprehensions](https://www.pythoncheatsheet.org/blog/python-comprehensions-step-by-step)

## Sum of squares

```python
sum_squares = sum([i**2 for i in range(1, number+1)])
```

## Simple Example

```python
for n in names:
  print(n)
```

becomes

```python
[print(n) for n in names]
```

## Conditionals

```python
new_list = []
for n in ['Charles', 'Susan', 'Patrick', 'George', 'Carol']:
    if n.startswith('C'):
        new_list.append(n)
```

becomes

```python
new_list = [n for n in ['Charles', 'Susan', 'Patrick', 'George', 'Carol'] if n.startswith('C')]
```
