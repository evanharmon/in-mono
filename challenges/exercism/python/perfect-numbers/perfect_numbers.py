""" Perfect Numbers """

def num_factors(num):
    """
    Given a number n, calculate the factors

    :param n: int - given number to calculate factors
    :return: set of factors for n
    """

    results = set()
    for i in range(1, int(num ** 0.5) + 1):
        if num % i == 0:
            results.update([i, int(num / i)])
    return results


def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """

    # check for positive integers
    if (number < 1):
        raise ValueError('Classification is only possible for positive integers.')

    # classifications:
    # perfect: sum of factors equals number
    # abundant: sum of factors greater than number
    # deficient: sum of factors less than number (primes)

    # get factors for number
    factors_list = num_factors(number)
    # check if sum of factors equals number
    # be sure not to sum number at end of factors list

    total = sum([fact for fact in factors_list if fact != number])
    if total > number:
        return 'abundant'
    if total == number:
        return 'perfect'
    if total < number:
        return 'deficient'


# DEBUG
# num_factors(28) # [1,2,4,7,14,28]
classify(28)
