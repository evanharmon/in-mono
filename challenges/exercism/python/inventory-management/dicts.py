"""Functions to keep track and alter inventory."""


def create_inventory(items: list) -> dict:
    """Create a dict that tracks the amount (count) of each element on the `items` list.

    :param items: list - list of items to create an inventory from.
    :return: dict - the inventory dictionary.
    """
    inventory = {}
    for item in items:
        inventory.update({item: inventory.get(item, 0) + 1})

    return inventory


def add_items(inventory: dict, items: list) -> dict:
    """Add or increment items in inventory using elements from the items `list`.

    :param inventory: dict - dictionary of existing inventory.
    :param items: list - list of items to update the inventory with.
    :return: dict - the inventory updated with the new items.
    """
    for item in items:
        inventory.update({item: inventory.get(item, 0) + 1})

    return inventory


def decrement_items(inventory: dict, items: list) -> dict:
    """Decrement items in inventory using elements from the `items` list.

    :param inventory: dict - inventory dictionary.
    :param items: list - list of items to decrement from the inventory.
    :return: dict - updated inventory with items decremented.
    """

    for item in items:
        cnt = inventory.get(item, 0)
        if cnt > 0:
            inventory.update({item: cnt -1})
    
    return inventory


def remove_item(inventory: dict, item: str) -> dict:
    """Remove item from inventory if it matches `item` string.

    :param inventory: dict - inventory dictionary.
    :param item: str - item to remove from the inventory.
    :return: dict - updated inventory with item removed. Current inventory if item does not match.
    """

    # Using Dave Garage's nice technique to avoid
    # potential errors accidently using assignment (:
    if None != inventory.get(item, None): # pylint: disable=singleton-comparison
        inventory.pop(item)

    return inventory

def list_inventory(inventory: dict) -> list:
    """Create a list containing only available (item_name, item_count > 0) pairs in inventory.

    :param inventory: dict - an inventory dictionary.
    :return: list of tuples - list of key, value pairs from the inventory dictionary.
    """

    in_stock_items = []
    for item, cnt in inventory.items():
        if cnt > 0:
            in_stock_items.append((item, cnt))

    return in_stock_items
