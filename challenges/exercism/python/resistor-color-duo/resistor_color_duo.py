""" resistor color duo"""

resistor_map = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
]


def value(colors):
    """
    This function takes a list of colors as input and returns
    a single integer representing the sum of all the color values.

    :param colors: list - A list containing color values.
    :return: int - The sum of all color values in the list.
    """
    # concatenate as string
    resistance = ''
    for color in colors[:2]:
        idx = resistor_map.index(color)
        resistance = resistance + str(idx)

    # return as int but strip leading zeros
    resistance.lstrip('0')
    return int(resistance)
