# PYTHON LAMBDA

## Resources

- [Python lambda pythontips docs](https://book.pythontips.com/en/latest/lambdas.html)

## Basic Example

```python
add = lambda x, y: x + y
print(add(3, 5)) # Output: 8
```

## Print out in a lambda
```python
daily_music = ["classical", "pop", "none", "jazz", "classical"]
print(list(map(lambda x: f"{x}: Music Type", daily_music)))
```