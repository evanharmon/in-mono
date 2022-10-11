""" Diffie Hellman """
from random import randint


def private_key(p):
    """
    Create a private key greater than one but less than p

    :param p: int - prime number
    :return int: private key
    """

    return randint(2, p - 1)


def public_key(p, g, private):
    """
    Calculate public key
    Example:    A = g^private mod p

    :param p: int - prime number
    :param g: int - prime number
    :param int: public key 
    """

    key = g ** private % p
    return key


def secret(p, public, private):
    """
    Calculate secret key
    Example:    s = B^private mod p

    :param p: int - prime number
    :param public: int - public key
    :param private: int - private key
    :return int: secret
    """

    secret_key = public ** private % p    
    return secret_key

