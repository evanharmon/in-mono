""" armstrong numbers """


def is_armstrong_number(number):
    """
    Checks to see if number is an armstrong number
    Number where sum of own digits each raised to the power of number of digits
    153 is an Armstrong number, because: `153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153`

    :param number: number to check
    :return bool: whether or not an armstrong number
    """

    if number == 0:
        return True
    number_string = str(number)
    total = 0
    for num_str in number_string:
        num = int(num_str)
        total += num ** len(number_string)
    return number == total