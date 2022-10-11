""" Difference of Squares """


def square_of_sum(number):
    """
    Find the square of the sum of a given number
    Example: (1 + 2 + ... + 10)² = 55² = 3025

    :param number: number input
    :return sq_sum: square of the sum of number
    """

    total = sum(range(1, number+1))
    sq_sum = total ** 2
    return sq_sum


def sum_of_squares(number):
    """
    Find the sum of the given number squared
    Example: 1² + 2² + ... + 10² = 385

    :param number: natural number
    :return sum_squares: sum of the squares
    """

    sum_squares = sum([i**2 for i in range(1, number+1)])
    return sum_squares


def difference_of_squares(number):
    """
    Find the difference of squares for a given number
    square of sums minus sum of squares

    :param number: natural number
    :return difference: difference of squares for the given number
    """

    difference = square_of_sum(number) - sum_of_squares(number)
    return difference
