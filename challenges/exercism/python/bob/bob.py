""" Bob """


def response(hey_bob):
    """
    Bob the teenager responds with teenage angst

    :param hey_bob: string - question for Bob
    :return string: response from Bob
    """

    stripped_str = hey_bob.strip()
    ends_with_question = stripped_str.endswith('?')
    is_upper = stripped_str.isupper()

    if stripped_str == '':
        return 'Fine. Be that way!'
    if is_upper:
        if ends_with_question:
            return "Calm down, I know what I'm doing!"
        return 'Whoa, chill out!'
    if ends_with_question:
        return 'Sure.'
    return 'Whatever.'
