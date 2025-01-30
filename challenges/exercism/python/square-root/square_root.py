""" square root """


def square_root(number: int):
    """ square root """
    print(number)
    # Binary search method
    if number < 0:
        raise ValueError("Input cannot be negative.")

    # Handle simple base cases
    if number == 0 or number == 1:
        return number
    # Range within which the sq root might be found
    # from zero to half the input number (ceiling)
    # sq root of a number must be less than or equal to itself
    left, right = 0, number // 2
    print("left boundary", left, "right boundary", right)

    while True:
        # calculate a midpoint guess
        # between current left and right boundaries
        guess = (left + right) // 2
        print('midpoint guess', guess)
        # calculate guess based on boundaries
        square = guess * guess
        print('square guess based on boundaries', square)

        if square == number:
            # found the answer!
            return guess
        elif square < number:
            # calculated sq is still less than input number
            # move left boundary to the right of current midpoint
            # then continue with new midpoint
            left = guess + 1
            print('move left boundary to right of current midpoint', left)
        else:
            # calculated square is greater than input number
            # move the right boundary to the left of current midpoint
            # then continue with new midpoint
            right = guess - 1
            print('move right boundary to left of current midpoint', right)
