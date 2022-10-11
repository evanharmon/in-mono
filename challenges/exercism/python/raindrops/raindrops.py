""" Raindrops """

def convert(number):
    """
    Convert number to raindrop sounds

    :param number: int - convert to string with raindrop sounds
    :return string: raindrop sounds in string form
    """

    factors = dict({3: 'Pling', 5: 'Plang', 7: 'Plong'})
    # build up return string
    # result = ''
    # iterate through dictionary and add rain sound for each clean factor
    # for key, val in factors.items():
    #     if number % key == 0:
    #         result = f'{result}{val}'
    # one liner
    result = ''.join([v for k,v in factors.items() if number % k == 0])
    return result if len(result) > 0 else str(number)

# DEBUGGING
# convert(30)
