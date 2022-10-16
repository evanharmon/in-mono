"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.

SUBLIST = 'SUBLIST'
SUPERLIST = 'SUPERLIST'
EQUAL = 'EQUAL'
UNEQUAL = 'UNEQUAL'

def list_contains_sublist(full_list, sub_list):
    """
    List A found in List B
    Throws if list a larger than b

    :param a: list - first list
    :param b: list - second list
    :return bool: whether list a is included in list b
    """

    full_list_ln = len(full_list)
    sub_list_ln = len(sub_list)
    # return early if list a larger than b which means cannot find match
    if sub_list_ln > full_list_ln:
        return False
    # return true if first list is empty
    if sub_list_ln == 0:
        return True
    # iterate over list b one item at a time
    # compare list one against same length slice of b
    for index, value in enumerate(full_list):
        # don't check slice if full_list value doesn't match start of sub_list_slice
        if sub_list[0] != value:
            continue
        full_list_slice = full_list[index:index + sub_list_ln]
        if sub_list == full_list_slice:
            return True
    return False

# attempt 1
# simple but not optimized
def sublist(list_one, list_two):
    """
    sublist checks compares list one to list two
    sublist or superlist: sequence of elements must be in the same order

    :param list_one: list - first list
    :param list_two: list - second list
    :return category: string representing sublist category
    """

    list_one_len = len(list_one)
    list_two_len = len(list_two)
    # Calculate Sublist: List one smaller than list two
    # sublist([1, 1, 2], [0, 1, 1, 1, 2, 1, 2])# SUBLIST
    if list_one_len < list_two_len:
        slice_found = list_contains_sublist(list_two, list_one)
        return SUBLIST if slice_found else UNEQUAL
    # Calculate Superlist: list one greater than list two
    # NOTE: probably can combine sublist and superlist check in to single reusable fn
    if list_one_len > list_two_len:
        slice_found = list_contains_sublist(list_one, list_two)
        return SUPERLIST if slice_found else UNEQUAL
    # Lists are same length
    return EQUAL if list_one == list_two else UNEQUAL

# DEBUG
# sublist([], []) # EQUAL
# sublist([], [1, 2, 3])# SUBLIST
# sublist([1, 2, 3], [])# SUPERLIST
# sublist([1, 2, 3], [1, 2, 3])# EQUAL
# sublist([1, 1, 2], [0, 1, 1, 1, 2, 1, 2])# SUBLIST
# sublist([1, 2, 3], [2, 3, 4])# UNEQUAL
# sublist([2, 3, 4], [0, 1, 2, 3, 4, 5])# SUBLIST
# sublist([0, 1, 2, 3, 4, 5], [2, 3])# SUPERLIST
# sublist(list(range(3, 200, 3)), list(range(15, 200, 15)))# UNEQUAL
# sublist([1, 2, 5], [0, 1, 2, 3, 1, 2, 5, 6])# SUBLIST
