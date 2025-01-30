""" resistor color trio """


def label(colors: list):
    """ label """
    color_bands = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9,
    }
    # First two color bands denote values to be concatenated
    resistor_val = ""
    for color in colors[:2]:
        resistor_val += str(color_bands[color])
    # Third band is a multiplier of numbers of zeros - 10^X?
    multiplier = 10 ** color_bands[colors[2]]
    # Attempt to shorten the ohms multiplier
    # ex. `67000000` ohms can be shortened to `67` ohms, etc
    ohms = int(resistor_val) * multiplier
    if ohms < 10**3:
        return f"{int(ohms)} ohms"
    elif ohms < 10**6:
        return f"{int(ohms) // 10**3} kiloohms"
    elif ohms < 10**9:
        return f"{int(ohms) // 10**6} megaohms"
    else:
        return f"{int(ohms) // 10**9} gigaohms"
