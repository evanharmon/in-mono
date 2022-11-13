""" Blockchain """
from functools import reduce
import json
import pickle

from block import Block
from transaction import Transaction
from utility.hash_util import hash_block
from utility.verification import Verification
from wallet import Wallet

MINING_REWARD = 10


class Blockchain:
    """
    Blockchain class manages the chain of blocks, open transactions, and node
    """

    def __init__(self, hosting_node_id):
        # Starting block for blockchain
        genesis_block = Block(0, '', [], 100, 0)
        self.chain = [genesis_block]
        # Unhandled transactions
        self.open_transactions = []
        self.load_json_data()
        self.hosting_node = hosting_node_id

    @property
    def chain(self):
        """ DO NOT USE internally in class
        returns a copy of chain class variable
        """
        return self.__chain[:]

    @chain.setter
    def chain(self, val):
        self.__chain = val

    @property
    def open_transactions(self):
        """ DO NOT USE internally in class
        returns a copy of open_transactions class variable
        """
        return self.__open_transactions[:]

    @open_transactions.setter
    def open_transactions(self, val):
        self.__open_transactions = val

    def load_pickle_data(self):
        """ load_pickle_data load snapshots """
        with open('blockchain.p', mode='rb') as file:
            file_content = pickle.loads(file.read())
            self.__chain = file_content['chain']
            self.__open_transactions = file_content['ot']

    def load_json_data(self):
        """ load_json_data load snapshots """
        try:
            with open('blockchain.txt', mode='r', encoding='utf8') as file:
                file_content = file.readlines()

                if len(file_content) > 1:
                    blockchain = json.loads(file_content[0][:-1])  # avoid \n
                    # load blockchain as OrderedDict
                    updated_blockchain = []
                    for block in blockchain:
                        converted_tx = [
                            Transaction(
                                tx['sender'],
                                tx['recipient'],
                                tx['signature'],
                                tx['amount']) for tx in block['transactions']]
                        updated_block = Block(
                            block['index'],
                            block['previous_hash'],
                            converted_tx,
                            block['proof'],
                            block['timestamp'])
                        updated_blockchain.append(updated_block)
                    self.__chain = updated_blockchain
                    # load open_transactions as OrderedDict
                    open_transactions = json.loads(file_content[1])
                    updated_transactions = []
                    for op_tx in open_transactions:
                        updated_transaction = Transaction(
                            op_tx['sender'],
                            op_tx['recipient'],
                            op_tx['signature'],
                            op_tx['amount'])
                        updated_transactions.append(updated_transaction)
                    self.__open_transactions = updated_transactions
        except (IOError, IndexError):
            pass
        finally:
            print('Cleanup!')

    def save_json_data(self):
        """
        save_json_data as snapshots

        :param blockchain: list
        :param open_transactions: list
        """
        try:
            # overwrite and create new snapshot each time
            with open('blockchain.txt', mode='w', encoding='utf8') as file:
                # copy object as dictionary
                saveable_chain = [
                    block.__dict__ for block in [
                        Block(
                            block_el.index,
                            block_el.previous_hash,
                            [tx.__dict__ for tx in block_el.transactions],
                            block_el.proof, block_el.timestamp)
                        for block_el in self.__chain
                    ]
                ]
                file.write(json.dumps(saveable_chain))
                file.write('\n')
                saveable_tx = [tx.__dict__ for tx in self.__open_transactions]
                file.write(json.dumps(saveable_tx))
        except IOError:
            print('Saving failed!')

    def save_pickle_data(self):
        """
        save_pickle_data as snapshots

        :param blockchain: list
        :param open_transactions: list
        """
        # overwrite and create new snapshot each time
        with open('blockchain.p', mode='wb') as file:
            data = {
                'chain': self.__chain,
                'ot': self.__open_transactions
            }
            file.write(pickle.dumps(data))

    def proof_of_work(self):
        """
        Generate proof of work for open transactions, hash of previous block,
        and a random number
        """
        last_block = self.__chain[-1]
        last_hash = hash_block(last_block)
        proof = 0  # Nonce
        # Try different PoW numbers and return the first valid one
        while not Verification.valid_proof(self.__open_transactions, last_hash, proof):
            proof += 1
        return proof

    def get_balance(self):
        """
        Calculate balance for participant

        :param participant: person
        :return number: total balance
        """
        participant = self.hosting_node
        # Fetch list of all sent coin amounts for given participant
        # represents sent amounts of transactions already included in blocks
        tx_sender = [[tx.amount for tx in block.transactions
                      if tx.sender == participant] for block in self.__chain]

        # Fetch sent amounts of open transactions to avoid double spending
        open_tx_sender = [
            tx.amount
            for tx in self.__open_transactions if tx.sender == participant]
        tx_sender.append(open_tx_sender)
        # Calculate total amount of coins sent
        amount_sent = reduce(
            lambda tx_sum, tx_amt: tx_sum +
            sum(tx_amt) if len(tx_amt) > 0 else tx_sum + 0, tx_sender, 0)
        # Fetch received transaction amounts already included in blocks
        # ignore open transactions as coins are not settled
        tx_recipient = [
            [tx.amount for tx in block.transactions
             if tx.recipient == participant] for block in self.__chain]
        # Calculate total amount of coins received
        amount_received = reduce(
            lambda tx_sum, tx_amt: tx_sum +
            tx_amt[0] if len(tx_amt) > 0 else 0, tx_recipient, 0)
        # return total balance
        return amount_received - amount_sent

    def get_last_blockchain_value(self):
        """ Returns last value in the current blockchain """
        if len(self.__chain) < 1:
            return None
        return self.__chain[-1]

    def add_transaction(self, recipient, sender, signature, amount=1.0):
        """
        Append a new value along with last blockchain value to blockchain

        :param recipient: str - recipient of the coins
        :param sender: str - sender of the coins
        :param signature: str - signature for transaction
        :param amount: number - amount of coins sent (default = 1.0)
        :return bool: whether or not add transaction was successful
        """
        if self.hosting_node is None:
            return False
        transaction = Transaction(sender, recipient, signature, amount)
        if Verification.verify_transaction(transaction, self.get_balance):
            self.__open_transactions.append(transaction)
            self.save_json_data()
            return True
        return False

    def mine_block(self):
        """
        Create new block and add open transactions to it

        :return bool: whether or not the mining was successful
        """
        if self.hosting_node is None:
            return None
        # Fetch current last block of blockchain
        last_block = self.__chain[-1]
        # hash last block for comparison
        hashed_block = hash_block(last_block)
        #  calculate proof without reward
        proof = self.proof_of_work()
        # Create reward transaction to reward miner
        # no need to sign transaction
        reward_transaction = Transaction(
            'MINING', self.hosting_node, '', MINING_REWARD)
        # Copy transaction instead of mutating original open_transactions list
        # ensures reward transaction not stored in open transactions on failure
        copied_transactions = self.__open_transactions[:]
        for copied_tx in copied_transactions:
            if not Wallet.verify_transaction(copied_tx):
                return None
        copied_transactions.append(reward_transaction)
        block = Block(
            len(self.__chain), hashed_block, copied_transactions, proof)
        self.__chain.append(block)
        self.__open_transactions = []
        self.save_json_data()
        return block
