""" Darts """

from math import sqrt


def score(x, y):
    """
    Calculate score
    * If the dart lands outside the target, player earns no points (0 points).
    * If the dart lands in the outer circle of the target, player earns 1 point.
    * If the dart lands in the middle circle of the target, player earns 5 points.
    * If the dart lands in the inner circle of the target, player earns 10 points.

    :param x: int - coordinate
    :param y: int - coordinate
    :return int:
    """


    # Xc, Yc point is 0,0
    x_center = 0
    y_center = 0

    distance = sqrt((x - x_center) ** 2 + (y - y_center) ** 2)
    # inner circle radius of 1 units
    if distance <= 1:
        return 10
    # middle circle radius of 5 units
    if distance <= 5:
        return 5
    # outer circle radius of 10 units
    if distance <= 10:
        return 1
    return 0


# DEBUG
# score(-9, 9) # 0
# score(0, 10) # 1
