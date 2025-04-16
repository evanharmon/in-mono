# PYTHON CODE CHALLENGE HELPERS

## Leap year function
```python
def is_leap_year(year):
    if year % 4 != 0:  # must be divisible by 4
        return False
    # can be leap if if not divisible by 400 / 100
    elif year % 100 != 0:
        return True
    # must be divisible by 100 and 400 to be leap year
    elif year % 400 != 0:
        return False
    else:
        return True  # passes all checks, is leap yaer
```
