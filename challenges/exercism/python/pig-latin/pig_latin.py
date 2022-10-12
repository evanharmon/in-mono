"""
Pig Latin - this was a real pain and boring
"""

def starts_with_vowel(word, vowels):
    """
    Check to see if word starts with a pig latin vowel

    :param word: string - string to check
    :return bool: whether given word starts with a vowel
    """

    vowels = ['a','e','i','o','u','xr','yt']
    for val in vowels:
        if word.startswith(val):
            return True
    return False

def rule_processor(text):
    """
    Run text through rules and return pig latin translation

    :param text: string - input text to translate
    :return string: translation
    """

    vowels = ['a','e','i','o','u','xr','yt']
    vowel_start = starts_with_vowel(text, vowels)
    # RULE 1
    if vowel_start is True:
        result = f'{text}ay'
        return result

    # text does not start with vowel
    # find first consonant for remaining rule checks
    char_split = None
    first_vowel = None
    # Rule 4
    # handle situations where y after consonant cluster is only vowel
    if any(char in vowels for char in text) is False:
        vowels.append('y')

    for char in list(text):
        if char in vowels:
            # slice out consonant
            char_split  = text.split(char, 1)
            first_vowel = char
            break

    # RULE 3 A?
    # `qu` starting strings handled differently
    # not really described well in README.md
    # check if first consonant followed by `qu`
    if len(char_split) > 0 and text.startswith('qu'):
        char_split.reverse()
        joined_consonants = ''.join(list(char_split))
        return f'{joined_consonants}{first_vowel}ay'

    first_consonant = char_split[0]
    # RULE 3
    # check if first consonant followed by `qu`
    if first_consonant != '' and text.startswith('qu', 1):
        # keep consonant and `qu` together
        char_split.reverse()
        joined_consonants = ''.join(list(char_split))
        return f'{joined_consonants}{first_vowel}ay'

    # RULE 2
    # ensure consonant followed by vowel
    if text.startswith(f'{first_consonant}{first_vowel}'):
        # swap slices
        char_split.reverse()
        joined_consonants = ''.join(list(char_split))
        result = f'{first_vowel}{joined_consonants}ay'
        return result
    return text


def translate(text):
    """
    Translate to pig latin

    :param text: string - input text to translate, can be a sentence
    :return string: translation
    """

    # handle full sentence by separating and iterating over
    words = text.split(' ')
    result = ' '.join([rule_processor(word) for word in words])
    return result


# DEBUG
# translate('apple')
# translate('koala')
# translate('queen') # output: eenquay
# translate('square') # output: aresquay
# translate('rhythm') # ythmrhay
# translate('yellow') # ellowyay
# translate('quick fast run') # ickquay astfay unray