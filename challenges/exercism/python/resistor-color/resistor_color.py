""" resistors """

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


def color_code(color):
    """
    Returns the resistance value corresponding to a given resistor color.

    Args:
        color (str): The resistor color code (e.g. "red", "green", etc.)

    Returns:
        int: The resistance value associated with the given color

    Raises:
        ValueError: If the input color is not recognized in the resistor map
    """
    return resistor_map.index(color)


def colors():
    """
    Returns a list of resistor color codes.

    This function returns the resistor color code mapping, which can be used to look up resistance values.

    Returns:
        list: A list of resistor color codes (e.g. "black", "brown", etc.)
    """
    return resistor_map
