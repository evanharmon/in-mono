""" Pangram """

def is_pangram(sentence):
    """
    Checks to see if sentence is a pangram
    a pangram contains every letter in the alphabet

    :param sentence: str - sentence to check
    :return bool: is sentence a pangram
    """

    sentence_set = set()
    # make sure char is alpha before adding to set
    for char in sentence:
        if char.isalpha():
            # clean input to avoid dupes
            sentence_set.add(char.lower())
    # if set length 26, then all letters used in alphabet
    return bool(len(sentence_set) == 26)

# DEBUG
is_pangram('abcdefghijklm ABCDEFGHIJKLM') # False
