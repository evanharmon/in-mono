""" wallet module """
import binascii
from Crypto.PublicKey import RSA
from Crypto.Signature import PKCS1_v1_5
from Crypto.Hash import SHA256
import Crypto.Random


class Wallet:
    """ wallet class """

    def __init__(self, node_id):
        self.private_key = None
        self.public_key = None
        self.node_id = node_id

    def create_keys(self):
        """ create keys """
        private_key, public_key = self.generate_keys()
        self.private_key = private_key
        self.public_key = public_key

    def save_keys(self):
        """ save keys """
        if self.public_key is not None and self.private_key is not None:
            try:
                file_name = f'wallet-{self.node_id}.txt'
                with open(file_name, mode='w', encoding='utf8') as file:
                    file.write(self.public_key)
                    file.write('\n')
                    file.write(self.private_key)
                return True
            except (IOError, IndexError):
                print('Saving wallet failed...')
                return False

    def load_keys(self):
        """ load keys """
        try:
            file_name = f'wallet-{self.node_id}.txt'
            with open(file_name, mode='r', encoding='utf8') as file:
                keys = file.readlines()
                public_key = keys[0][:-1]
                private_key = keys[1]
                self.public_key = public_key
                self.private_key = private_key
                return True
        except (IOError, IndexError):
            print('Loading wallet failed...')
            return False

    def generate_keys(self):
        """ generate a new pair of private and public keys """
        private_key = RSA.generate(1024, Crypto.Random.new().read)
        public_key = private_key.publickey()
        return (
            binascii.hexlify(private_key.exportKey(
                format='DER')).decode('ascii'),
            binascii.hexlify(public_key.exportKey(
                format='DER')).decode('ascii')
        )

    def sign_transaction(self, sender, recipient, amount):
        """ Sign a transaction and return the signature

        :param sender: str - sender of transaction
        :param recipient: str - recipient of transaction
        :return string: signature
        """
        signer = PKCS1_v1_5.new(RSA.import_key(
            binascii.unhexlify(self.private_key)))
        payload_hash = SHA256.new((str(sender) + str(recipient) +
                                   str(amount)).encode('utf8'))
        signature = signer.sign(payload_hash)
        return binascii.hexlify(signature).decode('ascii')

    @staticmethod
    def verify_transaction(transaction):
        """ verify transaction """
        public_key = RSA.import_key(binascii.unhexlify(transaction.sender))
        verifier = PKCS1_v1_5.new(public_key)
        payload_hash = SHA256.new((
            str(transaction.sender) +
            str(transaction.recipient) +
            str(transaction.amount)).encode('utf8'))
        # pylint: disable=not-callable # VSCODE issue
        return verifier.verify(
            payload_hash, binascii.unhexlify(transaction.signature))
