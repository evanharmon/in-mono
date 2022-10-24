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
    # return '-'.join([str(block[key]) for key in block])
    encoded_str = json.dumps(block, sort_keys=True).encode()
    return sha256(encoded_str).hexdigest()
