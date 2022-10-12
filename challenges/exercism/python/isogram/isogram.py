""" Isogram """
from collections import Counter

def is_isogram(string):
    """
    Check if string is an isogram
    Word or phrase without repeating letters. Allows multiple spaces or hyphens

    :param string: str - string to check
    :return bool:
    """
    # clean string
    cleaned_str = string.strip().lower()
    # build up histogram to compare against length of string
    histogram = Counter(cleaned_str)
    isogram = True
    for key, val in histogram.most_common():
        if val > 1 and key.isalpha():
            isogram = False
            break
    return isogram

# DEBUG
# is_isogram('Alphabet') #False
