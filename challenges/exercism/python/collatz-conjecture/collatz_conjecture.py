""" Collatz Conjecture """

def steps(number):
    """
    3x + 1 problem

    :param number: int - positive integer
    :return number: int - number of steps needed to reach the value `1`
    """

    # check for invalid numbers
    if number < 1:
        raise ValueError('Only positive integers are allowed')
    if number == 1:
        return 0

    # track cnt of steps needed to reach 1
    cnt = 0
    while number != 1:
        cnt += 1
        if number % 2 == 0:
            number = number / 2
        else:
            number = 3 * number + 1
    return cnt


# debugging
# steps(16)
