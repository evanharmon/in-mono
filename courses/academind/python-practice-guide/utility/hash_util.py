""" hash_utility_functions """
import json
from hashlib import sha256


def hash_string_256(string):
    """ hash string and return """
    return sha256(string).hexdigest()


def hash_block(block):
    """
    Hashes block and returns string representation

    :param block: block to hash
    :return string: hash
    """
    # get copy of object as dictionary
    hashable_block = block.__dict__.copy()
    hashable_block['transactions'] = [tx.to_ordered_dict()
                                      for tx in hashable_block['transactions']]
    encoded_str = json.dumps(hashable_block, sort_keys=True).encode()
    return sha256(encoded_str).hexdigest()
