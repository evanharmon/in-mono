""" Blockchain """
from functools import reduce
import json
import pickle
import requests

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

    def __init__(self, public_key, node_id):
        # Starting block for blockchain
        genesis_block = Block(0, '', [], 100, 0)
        self.chain = [genesis_block]
        # Unhandled transactions
        self.open_transactions = []
        self.public_key = public_key
        self.__peer_nodes = set()
        self.node_id = node_id
        self.load_json_data()

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
            file_name = f'blockchain-{self.node_id}.txt'
            with open(file_name, mode='r', encoding='utf8') as file:
                file_content = file.readlines()
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
                self.chain = updated_blockchain
                # load open_transactions as OrderedDict
                open_transactions = json.loads(
                    file_content[1][:-1])  # avoid line-break
                updated_transactions = []
                for op_tx in open_transactions:
                    updated_transaction = Transaction(
                        op_tx['sender'],
                        op_tx['recipient'],
                        op_tx['signature'],
                        op_tx['amount'])
                    updated_transactions.append(updated_transaction)
                self.__open_transactions = updated_transactions
                # load peer nodes
                peer_nodes = json.loads(file_content[2])
                self.__peer_nodes = set(peer_nodes)
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
            file_name = f'blockchain-{self.node_id}.txt'
            with open(file_name, mode='w', encoding='utf8') as file:
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
                file.write('\n')
                file.write(json.dumps(list(self.__peer_nodes)))
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
        while not Verification.valid_proof(
                self.__open_transactions, last_hash, proof):
            proof += 1
        return proof

    def get_balance(self, sender=None):
        """
        Calculate balance for participant

        :param sender: string
        :return number: total balance
        """
        if sender is None:
            if self.public_key is None:
                return None
            participant = self.public_key
        else:
            participant = sender
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

    def add_transaction(self, recipient, sender, signature, amount=1.0, is_receiving=False):
        """
        Append a new value along with last blockchain value to blockchain

        :param recipient: str - recipient of the coins
        :param sender: str - sender of the coins
        :param signature: str - signature for transaction
        :param amount: number - amount of coins sent (default = 1.0)
        :param is_receiving: bool - receiving broadcast transactions
        :return bool: whether or not add transaction was successful
        """
        # if self.public_key is None:
        #     return False
        transaction = Transaction(sender, recipient, signature, amount)
        if Verification.verify_transaction(transaction, self.get_balance):
            self.__open_transactions.append(transaction)
            self.save_json_data()
            if not is_receiving:
                for node in self.__peer_nodes:
                    url = f'http://{node}/broadcast-transaction'
                    try:
                        response = requests.post(url, timeout=10000, json={
                            'sender': sender,
                            'recipient': recipient,
                            'amount': amount,
                            'signature': signature})
                        if response.status_code in [400, 500]:
                            print('Transaction declined, needs resolving.')
                            return False
                    except requests.exceptions.ConnectionError:
                        continue
            return True
        return False

    def mine_block(self):
        """
        Create new block and add open transactions to it

        :return bool: whether or not the mining was successful
        """
        if self.public_key is None:
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
            'MINING', self.public_key, '', MINING_REWARD)
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
        for node in self.__peer_nodes:
            url = f'http://{node}/broadcast-block'
            converted_block = block.__dict__.copy()
            converted_block['transactions'] = [
                tx.__dict__ for tx in converted_block['transactions']]
            try:
                response = requests.post(url, timeout=10000, json={
                                         'block': converted_block})
                if response.status_code == 400 or response.status_code == 500:
                    print('Block declined, needs resolving.')
            except requests.exceptions.ConnectionError:
                continue
        return block

    def add_block(self, block):
        """ add new block """
        transactions = [Transaction(
            tx['sender'],
            tx['recipient'],
            tx['signature'],
            tx['amount']
        ) for tx in block['transactions']]
        block_index = block['index']
        block_previous_hash = block['previous_hash']
        block_proof = block['proof']
        block_tstamp = block['timestamp']
        transactions_without_reward = transactions[:-1]
        proof_is_valid = Verification.valid_proof(
            transactions_without_reward, block_previous_hash, block_proof)
        hashes_match = hash_block(self.chain[-1]) == block_previous_hash
        if not proof_is_valid or not hashes_match:
            return False
        converted_block = Block(
            block_index,
            block_previous_hash,
            transactions,
            block_proof,
            block_tstamp
        )
        self.__chain.append(converted_block)
        stored_transactions = self.__open_transactions[:]
        for itx in block['transactions']:
            for opentx in stored_transactions:
                if opentx.sender == itx['sender'] and opentx.recipient == itx['recipient'] and opentx.amount == itx['amount'] and opentx.signature == itx['signature']:
                    try:
                        self.__open_transactions.remove(opentx)
                    except ValueError:
                        print('Item was already removed')
        self.save_json_data()
        return True

    def add_peer_node(self, node):
        """ adds a new node to peer node set
        :param node: url - new node to add
        """
        self.__peer_nodes.add(node)
        self.save_json_data()

    def remove_peer_node(self, node):
        """ removes peer nodes from node set """
        self.__peer_nodes.discard(node)
        self.save_json_data()

    def get_peer_nodes(self):
        """ return list of all connected peer nodes """
        return list(self.__peer_nodes)
