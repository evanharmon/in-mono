""" Transaction Module """
from collections import OrderedDict
from utility.printable import Printable


class Transaction(Printable):
    """ A transaction which can be added to a block in the blockchain.

    :param sender: str - sender of coins
    :param recipient: str - recipient of coins
    :param signature: str - signature of transaction
    :param amount: float - amount of coins to be sent
    """

    def __init__(self, sender, recipient, signature, amount):
        self.sender = sender
        self.recipient = recipient
        self.amount = amount
        self.signature = signature

    def to_ordered_dict(self):
        """ convert object to OrderedDict"""
        return OrderedDict(
            [('sender', self.sender), ('recipient', self.recipient), ('amount', self.amount)])
