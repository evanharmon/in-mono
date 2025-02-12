# PYTHON TUPLES RECIPES

## Handle ties
```python
# List of tuples containing (name, score)
students = [
    ('Alice', 85),
    ('Bob', 90),
    ('Charlie', 85),
    ('David', 95),
    ('Eve', 90)
]

# Sort the list using .sort() method.
# The key parameter is a function that returns a tuple (negative score, name).
# Negative scores are used to sort in descending order by default.
students.sort(key=lambda student: (-student[1], student[0]))

print(students)
```

## Use sorted tuples for checking anagrams
```python
list1 = ['silent', 'listen']
sorted_tuples = [tuple(sorted(word)) for word in list1]
print(sorted_tuples)
# Output: [('e', 'i', 'l', 'n', 's', 't'), ('e', 'i', 'l', 'n', 's', 't')]
# makes it easy to compare words against each other for potential anagrams
```