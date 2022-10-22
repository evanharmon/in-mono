# PYTHON TRY EXCEPT

## Resources

- [Python exception handling](https://docs.python.org/3/tutorial/errors.html#handling-exceptions)

## Example

```python
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")
```
