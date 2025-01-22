"""Functions to manage a users shopping cart items."""
from typing import Iterable


def add_item(current_cart: dict, items_to_add: Iterable) -> dict:
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: Iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """

    # items_to_add are just a list of item names
    for item_name in items_to_add:
        current_cart.update({item_name: current_cart.get(item_name, 0) + 1})

    return current_cart


def read_notes(notes: Iterable) -> dict:
    """Create user cart from an Iterable notes entry.

    :param notes: Iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """

    return dict((item, 1) for item in notes)


def update_recipes(ideas: dict, recipe_updates: dict) -> dict:
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: dict - dictionary with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """

    ideas.update(recipe_updates) 
    return ideas


def sort_entries(cart: dict) -> dict:
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """

    return dict(sorted(cart.items()))


def send_to_store(cart: dict, aisle_mapping: dict) -> dict:
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """

    # cart has item and cnt
    # aisle_map has item name: [aisle, refrigeration_bool]
    # iterate over aisle_mapping, adding in cart cnt
    # fulfillment_dict = {k: v for k, v in aisle_mapping.items()}
    # fulfillment_dict = {k: [cart[k]] + v for k, v in aisle_mapping.items() if k in cart}

    ## re-writing without comprehension
    fulfillment_dict = {}
    for k, v in aisle_mapping.items():
        if k in cart:
            # wrap the cart item cnt in a list to ensure a list is created
            fulfillment_dict[k] = [cart[k]] + v

    # return in reverse order and sorted using a view to create new dict
    return dict(reversed(sorted(fulfillment_dict.items())))


def update_store_inventory(fulfillment_cart: dict, store_inventory: dict) -> dict:
    """Update store inventory levels with user order.

    :param fulfillment cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """

    # reduce store_inventory count by whats been updated
    for k, v in store_inventory.items():
        if k in fulfillment_cart:
            cart_item_cnt = fulfillment_cart[k]
            new_item_cnt = store_inventory[k][0] - fulfillment_cart[k][0]
            if new_item_cnt < 0:
                # Exercise doesn't actually check this - but its a case
                raise ValueError('oops - ordered more than in stock!')
            elif new_item_cnt == 0:
                store_inventory[k][0] = 'Out of Stock'
            else:
                store_inventory[k][0] = new_item_cnt

    return store_inventory
