""" Blockchain """
from functools import reduce
import json
import pickle
from hash_util import hash_block

from block import Block
from transaction import Transaction
from verification import Verification

MINING_REWARD = 10


class Blockchain:
    """ Blockchain class """

    def __init__(self, hosting_node_id):
        # Starting block for blockchain
        genesis_block = Block(0, '', [], 100, 0)
        self.chain = [genesis_block]
        # Unhandled transactions
        self.open_transactions = []
        self.load_json_data()
        self.hosting_node = hosting_node_id

    def load_pickle_data(self):
        """ load_pickle_data load snapshots """
        with open('blockchain.p', mode='rb') as file:
            file_content = pickle.loads(file.read())
            self.chain = file_content['chain']
            self.open_transactions = file_content['ot']

    def load_json_data(self):
        """ load_json_data load snapshots """
        try:
            with open('blockchain.txt', mode='r', encoding='utf8') as file:
                file_content = file.readlines()

                if len(file_content) > 1:
                    self.chain = json.loads(file_content[0][:-1])  # avoid \n
                    # load blockchain as OrderedDict
                    updated_blockchain = []
                    for block in self.chain:
                        converted_tx = [
                            Transaction(
                                tx['sender'], tx['recipient'], tx['amount'])
                            for tx in block['transactions']]
                        updated_block = Block(
                            block['index'],
                            block['previous_hash'],
                            converted_tx,
                            block['proof'],
                            block['timestamp'])
                        updated_blockchain.append(updated_block)
                    self.chain = updated_blockchain
                    # load open_transactions as OrderedDict
                    self.open_transactions = json.loads(file_content[1])
                    updated_transactions = []
                    for op_tx in self.open_transactions:
                        updated_transaction = Transaction(
                            op_tx['sender'], op_tx['recipient'], op_tx['amount'])
                        updated_transactions.append(updated_transaction)
                    self.open_transactions = updated_transactions
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
                    block.__dict__ for block in [Block(
                        block_el.index,
                        block_el.previous_hash,
                        [tx.__dict__ for tx in block_el.transactions],
                        block_el.proof, block_el.timestamp) for block_el in self.chain
                    ]
                ]
                file.write(json.dumps(saveable_chain))
                file.write('\n')
                saveable_tx = [tx.__dict__ for tx in self.open_transactions]
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
                'chain': self.chain,
                'ot': self.open_transactions
            }
            file.write(pickle.dumps(data))

    def proof_of_work(self):
        """ Proof of work """
        last_block = self.chain[-1]
        last_hash = hash_block(last_block)
        # Nonce
        proof = 0
        verifier = Verification()
        while not verifier.valid_proof(self.open_transactions, last_hash, proof):
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
        # represents sent amounts of transactions already included in blocks of blockchain
        tx_sender = [[tx.amount for tx in block.transactions
                      if tx.sender == participant] for block in self.chain]

        # Fetch sent amounts of open transactions to avoid double spending
        open_tx_sender = [tx.amount
                          for tx in self.open_transactions if tx.sender == participant]
        tx_sender.append(open_tx_sender)
        # Calculate total amount of coins sent
        amount_sent = reduce(
            lambda tx_sum, tx_amt: tx_sum + tx_amt[0] if len(tx_amt) > 0 else 0, tx_sender, 0)
        # Fetch received coin amounts of transactions already included in blocks of blockchain
        # ignore open transactions as coins are not settled
        tx_recipient = [[tx.amount for tx in block.transactions
                        if tx.recipient == participant] for block in self.chain]
        # Calculate total amount of coins received
        amount_received = reduce(lambda tx_sum, tx_amt: tx_sum +
                                 tx_amt[0] if len(tx_amt) > 0 else 0, tx_recipient, 0)
        # return total balance
        return amount_received - amount_sent

    def get_last_blockchain_value(self):
        """ Returns last value in the current blockchain """
        if len(self.chain) < 1:
            return None
        return self.chain[-1]

    def add_transaction(self, recipient, sender, amount=1.0):
        """
        Append a new value along with last blockchain value to blockchain

        :param recipient: str - recipient of the coins
        :param sender: str - sender of the coins
        :param amount: number - amount of coins sent with transaction (default = 1.0)
        :return bool: whether or not add transaction was successful
        """
        # TODO make OrderedDict
        transaction = Transaction(sender, recipient, amount)
        verifier = Verification()
        if verifier.verify_transaction(transaction, self.get_balance):
            self.open_transactions.append(transaction)
            self.save_json_data()
            return True
        return False

    def mine_block(self):
        """
        Create new block and add open transactions to it

        :return bool: whether or not the mining was successful
        """
        # Fetch current last block of blockchain
        last_block = self.chain[-1]
        # hash last block for comparison
        hashed_block = hash_block(last_block)
        #  calculate proof without reward
        proof = self.proof_of_work()
        # Create reward transaction to reward miner
        reward_transaction = Transaction(
            'MINING', self.hosting_node, MINING_REWARD)
        # Copy transaction instead of mutating original open_transactions list
        # ensures reward transaction not stored in open transactions on a failure
        copied_transactions = self.open_transactions[:]
        copied_transactions.append(reward_transaction)
        block = Block(
            len(self.chain),
            hashed_block,
            copied_transactions,
            proof
        )
        self.chain.append(block)
        self.open_transactions = []
        self.save_json_data()
        return True
