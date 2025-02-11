# PYTHON BINARY SEARCH CONTINUOUS FUNCTIONS

## Examples

### Find the root of a continuous function
```python
def binary_search_continuous(f, left, right, tol=1e-6, max_iter=100):
    """
    Performs binary search (bisection method) to find a root of a continuous function f in the interval [left, right].
    
    Parameters:
    - f: A continuous function.
    - left: Left boundary of the interval.
    - right: Right boundary of the interval.
    - tol: Tolerance for stopping condition.
    - max_iter: Maximum number of iterations.
    
    Returns:
    - The approximate root of f(x) = 0.
    """
    if f(left) * f(right) > 0:
        raise ValueError("Function has the same sign at both ends of the interval. Provide a valid interval.")

    for _ in range(max_iter):
        mid = (left + right) / 2
        f_mid = f(mid)

        if abs(f_mid) < tol:
            return mid  # Found root within tolerance.

        if f(left) * f_mid < 0:
            right = mid  # Root is in the left half.
        else:
            left = mid  # Root is in the right half.

    return (left + right) / 2  # Return the midpoint after max iterations.

def example_function(x):
    return x**3 - x - 2

# Find a root in the interval [1, 2] (this interval is valid)
root = binary_search_continuous(example_function, 1, 2)
print("Root found:", root)
```

### Find the value of 'x' when sin(x) = 0
```python
# Python program to find the value of 'x' when sin(x) = 0 using Binary Search on Continuous Space
import math

def f(x):
    return math.sin(x)


def binary_search(func, target, left, right, precision):
    # Start a loop that continues until the search interval is smaller than the specified precision
    while right - left > precision:
        # Calculate the midpoint of the current search interval
        mid = (left + right) / 2
        # If the function value at the midpoint is less than the target,
        # adjust the upper bound to be the midpoint and repeat the loop
        if func(mid) < target:
            left = mid
        # If the function value at the midpoint is greater than the target,
        # adjust the lower bound to be the midpoint and repeat the loop
        else:
            right = mid
    
    # When the search interval is smaller than the precision,
    # return the average of the upper and lower bounds as the approximate root
    return (left + right) / 2


epsilon = 1e-6
target = 0
start = 0
end = math.pi

result = binary_search(f, target, start, end, epsilon)
print("The approximate roots are: ", result)
```