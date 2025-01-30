def is_paired(input_string: str):
    """ is_paired """
    # Dictionary of matching pairs
    match_pairs = {
        '{': '}',
        '(': ')',
        '[': ']',
    }

    # use a stack to keep track of opening brackets
    stack = []

    for char in input_string:
        # check char against:
        # opening (key) and closing (value) brackets from dict of pairs
        if char in match_pairs:
            # always push opening brackets to stack
            stack.append(char)
        elif char in match_pairs.values():
            # char is closing bracket
            # check if stack is empty - that means no possible match
            # OR
            # look up last opening bracket value (closing bracket) in match_pair dict
            # if the stack pop expected closing bracket doesn't match this one - return False
            if not stack or match_pairs[stack.pop()] != char:
                return False
    
    # All chars in string has been evaluated.
    # Match is determined by whether or not the stack has any opening brackets left
    # if stack length is zero - return True, if stack length is above zero - return False
    # simplified to a one liner
    # if len(stack) == 0:
    #     return True
    # else:
    #     return False
    return len(stack) == 0
