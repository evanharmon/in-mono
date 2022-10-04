# PYTHON TERNARY

## Resources

- [Python Tips Ternaries](https://book.pythontips.com/en/latest/ternary_operators.html)

## Ternary

```python
def lose(power_pellet_active, touching_ghost):
    return True if power_pellet_active == False and touching_ghost == True else False
```

## Shorthand ternary

AND

```python
def can_eat(hungry, plate_empty):
    return hungry and plate_empty
```

OR

```python
def can_eat(has_room, is_happy):
    return has_room or is_happy
```
