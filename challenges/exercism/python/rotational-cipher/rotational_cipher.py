""" Rotation Cipher """


def rotate(text, key):
    """
    Rotate text via Cipher rotational using a given key
    Must retain original case and punctuation

    :param text: str - input text
    :param key: int - shift index. must be between 0 and 26
    :return str: rotated text
    """

    # return early if key is 0 or 26 meaning no rotation needed
    if key == 0 or key == 26:
        return text

    alphabet_list = list('abcdefghijklmnopqrstuvwxyz')
    result = ''
    # iterate through text and rotate via list with key - 1
    for char in text:
        # key shift must stay within range of 0 and 26
        # example: str = 'c', key = 26 results in 'c'
        # c is alphabet_list[2] + 26 = 28 - 26 = 2

        # no lookup necesarry for non-alpha chars
        if char.isalpha() is False:
            result += char
            continue

        is_upper = char.isupper()
        char_index = alphabet_list.index(char.lower())
        new_char_index = char_index + key
        rotated_char = None
        if 1 <= new_char_index <= 25:
            rotated_char = alphabet_list[new_char_index]
        else:
            rotated_char  = alphabet_list[new_char_index - 26]

        final_char = rotated_char.upper() if is_upper else rotated_char
        result += f'{final_char}'
    return result

# DEBUG
# rotate('a', 1) # 'b'
# rotate('my sentence', 10)
# rotate('My sentence', 25)
