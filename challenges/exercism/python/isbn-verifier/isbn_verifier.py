""" ISBN Verifier"""

def is_valid(isbn):
    """
    Verify that a given ISBN is valid
    Formula: (d₁ * 10 + d₂ * 9 + d₃ * 8 + d₄ * 7 + d₅ * 6 + d₆ * 5 + d₇ * 4 + d₈ * 3 + d₉ * 2 + d₁₀ * 1) mod 11 == 0

    :param isbn: str - ISBN string with or without hyphens. End char of 'X' = 10
    :return bool: True if valid ISBN
    """

    # Sanitize input
    sanitized = isbn.replace('-', '')
    isbn_len = len(sanitized)
    # Only supporting ISBN-10 standard for now
    if isbn_len != 10:
        return False

    # Iterate over sanitized chars
    # index should count from 10 to 1
    total = 0
    for index, num in enumerate(sanitized, start=-isbn_len):
        # adjust for negative index counting
        abs_index = abs(index)
        num_is_alpha = num.isalpha()
        # handle simple case first
        if num_is_alpha is False:
            total += int(num) * abs_index
        # only valid letter is 'X' and must come at end
        # case: end char can be 'X' which is equal to 10
        elif abs_index == 1 and num.lower() == 'x':
            total += 10 * abs_index
        else:
            return False

    return bool(total % 11 == 0)

# DEBUG
# is_valid('3-598-21508-8') # True
# is_valid('3-598-21507-X') # True
# is_valid('3-598-21507-A') # True
