""" Transaction Module """
from collections import OrderedDict


class Transaction:
    """ class to manage a transaction """

    def __init__(self, sender, recipient, amount):
        self.sender = sender
        self.recipient = recipient
        self.amount = amount

    def to_ordered_dict(self):
        """ convert object to OrderedDict"""
        return OrderedDict(
            [('sender', self.sender), ('recipient', self.recipient), ('amount', self.amount)])