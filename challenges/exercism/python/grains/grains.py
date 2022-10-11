""" Grains on a Chessboard """

def square(number):
    """
    Return how many grains are on the given square

    :param number: number of squares
    :return grains: number of grains on square
    """

    if number < 1 or number > 64:
        raise ValueError('square must be between 1 and 64')
    grains = 2 ** (number - 1)
    return grains


def total():
    """
    Find the total number of grains on the chessboard

    :return total_grains: total number of grains
    """

    max_squares = 64
    total_grains = 0
    for num in range(1, max_squares+1):
        total_grains += square(num)
    return total_grains
