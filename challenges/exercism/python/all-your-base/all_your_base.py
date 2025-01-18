""" All your base"""


def rebase(input_base: int, digits: list, output_base: int) -> None:
    """
    Convert a number from input base to output base.

    Args:
        input_base (int): The base of the input number.
        digits (list): A list of integers.
        output_base (int): The desired base for the converted number.

    Returns:
        output_digits (list): A list of integers in the output_base.
    """
    # Required checks per this exercise
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    if output_base < 2:
        raise ValueError("output base must be >= 2")
    # Handle empty list
    if len(digits) == 0:
        return [0]
    # Handle all zeros
    if all(d == 0 for d in digits):
        return [0]

    # Get total
    total = 0
    for idx, digit in enumerate(reversed(digits)):
        # Digit can't be outside range or it's invalid
        if digit < 0 or digit >= input_base:
            raise ValueError("all digits must satisfy 0 <= d < input base")
        total += digit * (input_base**idx)

    # Convert decimal back to output base
    # return list of digits
    output_digits = []
    while total > 0:
        # use modulus to divide by base and work with remainder
        digit = total % output_base
        # add remainder to start of output_digits
        # it will be within output_base range
        output_digits.insert(0, digit)
        # divide total by the output base and floor
        total //= output_base

    return output_digits
