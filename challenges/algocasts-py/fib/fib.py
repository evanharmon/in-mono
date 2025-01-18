""" fib """


def fib(n: int):
    """The Fibonacci series, also known as the Fibonacci sequence, is a series
    of numbers where each number is the sum of the two preceding ones.
    The first two terms are 0 and 1 (this is also the starting point of the sequence).
    example : [0, 1, 1, 2, 3, 5, 8, 13, ...]

    :param n: int - sequence number
    :return: int - corresponding fibonacci number
    """
    # # Recursive solution 1
    # # handle base cases: n == 0 will be 0 and n == 1 will be 1
    # if n == 0:
    #     return 0
    # elif n == 1:
    #     return 1
    # else:
    #     # recursively call with sum of next two smaller numbers in sequence
    #     fib1 = fib(n - 1)
    #     fib2 = fib(n - 2)

    # return fib1 + fib2

    # # Recursive solution 2 - even simpler and handles more cases
    # # Check for valid input int and handle first two base cases
    # if n < 0:
    #     raise ValueError("Input must be a positive integer")
    # elif n == 0:
    #     return 0
    # elif n in [1, 2]:
    #     return 1
    # else:
    #     return fib(n - 1) + fib(n - 2)

    # Non-recursive solution
    # handle base cases
    if n < 0:
        raise ValueError("Input must be a positive integer.")
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        a, b = 0, 1
        # first two base cases are done, go from 2 to n + 1 to get next fib sequence number
        for _ in range(2, n + 1):
            # move first value forward by setting to b
            # move second value forward by adding a + b
            a, b = b, a + b
        return b
