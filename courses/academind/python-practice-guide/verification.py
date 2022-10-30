""" verification module """
from hash_util import hash_string_256, hash_block


class Verification:
    """ verification helpers """

    @staticmethod
    def valid_proof(transactions, last_hash, proof):
        """
        Validate with proof of work

        :param transactions: list - transactions
        :param last_hash: str
        :param proof: number
        :return bool:
        """
        guess = (str([tx.to_ordered_dict() for tx in transactions]) +
                 str(last_hash) + str(proof)).encode()
        # calculate hash - DIFFERENT than blockchain previous_hash
        guess_hash = hash_string_256(guess)
        # check that hash fulfills condition
        # should start with n leading zeros
        return guess_hash[0:2] == '00'

    @classmethod
    def verify_chain(cls, blockchain):
        """
        Verify current blockchain and return whether or not valid

        :param blockchain: list - blockchain
        """
        for (index, block) in enumerate(blockchain):
            if index == 0:
                continue
            if block.previous_hash != hash_block(blockchain[index - 1]):
                return False
            # check proof of work to prevent hacking
            # be sure to not include reward
            if not cls.valid_proof(block.transactions[:-1], block.previous_hash, block.proof):
                print('Proof of work is invalid')
                return False
            return True

    @staticmethod
    def verify_transaction(transaction, get_balance):
        """
        Verify transaction by checking whether the sender has sufficient coins.

        :param transaction: transaction to verify
        :param get_balance: function - get_balance
        :return bool: whether or not transaction is valid
        """
        sender_balance = get_balance()
        return sender_balance >= transaction.amount

    @classmethod
    def verify_transactions(cls, open_transactions, get_balance):
        """
        Verifies all open transactions.

        :param open_transactions: list - open transactions
        :param get_balance: function - get_balance
        """
        return all(cls.verify_transaction(tx, get_balance) for tx in open_transactions)
