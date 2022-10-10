""" Yacht game """
from collections import Counter

def sum_if(die):
    return lambda dice: dice.count(die) * die


# Score categories.
# Change the values as you see fit.
ONES = sum_if(1)
TWOS = sum_if(2)
THREES = sum_if(3)
FOURS = sum_if(4)
FIVES = sum_if(5)
SIXES = sum_if(6)
FULL_HOUSE = lambda dice: sum(dice) * (set(Counter(dice).values()) == {2,3})
FOUR_OF_A_KIND = (
    lambda dice: 4 * ([i[0] for i in Counter(dice).items() if i[1] >= 4] or [0])[0]
)
LITTLE_STRAIGHT = lambda dice: 30 * (set(dice) == {1,2,3,4,5})
BIG_STRAIGHT = lambda dice: 30 * (set(dice) == {2,3,4,5,6})
CHOICE = lambda dice: sum(dice)
YACHT = lambda dice: 50 * (len(set(dice)) == 1)

def score(dice, category):
    return category(dice)