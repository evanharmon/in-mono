""" Blockchain """
from functools import reduce
import json
import pickle
from hash_util import hash_block

from block import Block
from transaction import Transaction
from verification import Verification

MINING_REWARD = 10
# Initialize empty blockchain list
BLOCKCHAIN = []
# Unhandled transactions
OPEN_TRANSACTIONS = []
# Blockchain Node Owner
OWNER = 'Evan'


def load_pickle_data():
    """ load_pickle_data load snapshots """
    with open('blockchain.p', mode='rb') as file:
        file_content = pickle.loads(file.read())

        global BLOCKCHAIN
        global OPEN_TRANSACTIONS
        BLOCKCHAIN = file_content['chain']
        OPEN_TRANSACTIONS = file_content['ot']


# try:
#     load_pickle_data()
# except FileNotFoundError:
#     with open('blockchain.p', mode='wb') as f:
#         f.write(pickle.dumps(b''))

def load_json_data():
    """ load_json_data load snapshots """
    global BLOCKCHAIN
    global OPEN_TRANSACTIONS
    try:
        with open('blockchain.txt', mode='r', encoding='utf8') as file:
            file_content = file.readlines()

            if len(file_content) > 1:
                BLOCKCHAIN = json.loads(file_content[0][:-1])  # avoid \n
                # load blockchain as OrderedDict
                updated_blockchain = []
                for block in BLOCKCHAIN:
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
                BLOCKCHAIN = updated_blockchain
                # load open_transactions as OrderedDict
                OPEN_TRANSACTIONS = json.loads(file_content[1])
                updated_transactions = []
                for op_tx in OPEN_TRANSACTIONS:
                    updated_transaction = Transaction(
                        op_tx['sender'], op_tx['recipient'], op_tx['amount'])
                    updated_transactions.append(updated_transaction)
                OPEN_TRANSACTIONS = updated_transactions
    except (IOError, IndexError):
        # Starting block for blockchain
        genesis_block = Block(0, '', [], 100, 0)
        BLOCKCHAIN = [genesis_block]
        # Unhandled transactions
        OPEN_TRANSACTIONS = []
    finally:
        print('Cleanup!')


load_json_data()
# try:
#     load_json_data()
# except FileNotFoundError:
#     with open('blockchain.txt', mode='w', encoding='utf8') as f:
#         f.write('')


def save_json_data(blockchain, open_transactions):
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
                    block_el.proof, block_el.timestamp) for block_el in blockchain
                ]
            ]
            file.write(json.dumps(saveable_chain))
            file.write('\n')
            saveable_tx = [tx.__dict__ for tx in open_transactions]
            file.write(json.dumps(saveable_tx))
    except IOError:
        print('Saving failed!')


def save_pickle_data(blockchain, open_transactions):
    """
    save_pickle_data as snapshots

    :param blockchain: list
    :param open_transactions: list
    """
    # overwrite and create new snapshot each time
    with open('blockchain.p', mode='wb') as file:
        data = {
            'chain': blockchain,
            'ot': open_transactions
        }
        file.write(pickle.dumps(data))


def proof_of_work():
    """ Proof of work """
    last_block = BLOCKCHAIN[-1]
    last_hash = hash_block(last_block)
    # Nonce
    proof = 0
    verifier = Verification()
    while not verifier.valid_proof(OPEN_TRANSACTIONS, last_hash, proof):
        proof += 1
    return proof


def get_balance(participant):
    """
    Calculate balance for participant

    :param participant: person
    :return number: total balance
    """
    # Fetch list of all sent coin amounts for given participant
    # represents sent amounts of transactions already included in blocks of blockchain
    tx_sender = [[tx.amount for tx in block.transactions
                  if tx.sender == participant] for block in BLOCKCHAIN]

    # Fetch sent amounts of open transactions to avoid double spending
    open_tx_sender = [tx.amount
                      for tx in OPEN_TRANSACTIONS if tx.sender == participant]
    tx_sender.append(open_tx_sender)
    # Calculate total amount of coins sent
    amount_sent = reduce(
        lambda tx_sum, tx_amt: tx_sum + tx_amt[0] if len(tx_amt) > 0 else 0, tx_sender, 0)
    # Fetch received coin amounts of transactions already included in blocks of blockchain
    # ignore open transactions as coins are not settled
    tx_recipient = [[tx.amount for tx in block.transactions
                     if tx.recipient == participant] for block in BLOCKCHAIN]
    # Calculate total amount of coins received
    amount_received = reduce(lambda tx_sum, tx_amt: tx_sum +
                             tx_amt[0] if len(tx_amt) > 0 else 0, tx_recipient, 0)
    # return total balance
    return amount_received - amount_sent


def get_last_blockchain_value():
    """
    Gets last value in the current blockchain

    :return list: block from blockchain
    """
    if len(BLOCKCHAIN) < 1:
        return None
    return BLOCKCHAIN[-1]


def add_transaction(recipient, sender=OWNER, amount=1.0):
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
    if verifier.verify_transaction(transaction, get_balance):
        OPEN_TRANSACTIONS.append(transaction)
        save_json_data(BLOCKCHAIN, OPEN_TRANSACTIONS)
        return True
    return False


def mine_block():
    """
    Create new block and add open transactions to it

    :return bool: whether or not the mining was successful
    """
    # Fetch current last block of blockchain
    last_block = BLOCKCHAIN[-1]
    # hash last block for comparison
    hashed_block = hash_block(last_block)
    #  calculate proof without reward
    proof = proof_of_work()
    # Create reward transaction to reward miner
    reward_transaction = Transaction('MINING', OWNER, MINING_REWARD)
    # Copy transaction instead of mutating original open_transactions list
    # ensures reward transaction not stored in open transactions on a failure
    copied_transactions = OPEN_TRANSACTIONS[:]
    copied_transactions.append(reward_transaction)
    block = Block(
        len(BLOCKCHAIN),
        hashed_block,
        copied_transactions,
        proof
    )
    BLOCKCHAIN.append(block)
    save_json_data(BLOCKCHAIN, OPEN_TRANSACTIONS)
    return True


def get_transaction_value():
    """
    Get input of the user (new transaction amount) as float

    :return float: value
    """
    # Get user input (recipient)
    tx_recipient = input('Enter the recipient of the transaction: ')
    # Get user input (amount), transform from string to float
    tx_amount = float(input('Your transaction amount please: '))
    return tx_recipient, tx_amount


def get_user_choice():
    """ Prompts user for choice and returns it """
    user_input = input('Your choice: ')
    return user_input


def print_blockchain_elements():
    """ Output all blocks of the blockchain. """
    # Output blockchain list to console
    for block in BLOCKCHAIN:
        print('Outputting Block')
        print(block)
    print('-' * 20)


WAITING_FOR_INPUT = True
# while loop for user input interface
# Exits once waiting_for_input becomes False or break called
while WAITING_FOR_INPUT:
    print('Please choose')
    print('1: Add a new transaction value')
    print('2: Mine a new block')
    print('3: Output the blockchain blocks')
    print('4: Check transaction validity')
    print('q: Quit')
    user_choice = get_user_choice()
    verifier = Verification()
    if user_choice == '1':
        tx_data = get_transaction_value()
        recipient, amount = tx_data
        # Add transaction amount to blockchain
        if add_transaction(recipient, amount=amount):
            print('Added transaction!')
        else:
            print('Transaction failed!')
        print(OPEN_TRANSACTIONS)
    elif user_choice == '2':
        if mine_block():
            OPEN_TRANSACTIONS = []
            save_json_data(BLOCKCHAIN, OPEN_TRANSACTIONS)
    elif user_choice == '3':
        print_blockchain_elements()
    elif user_choice == '4':
        if verifier.verify_transactions(OPEN_TRANSACTIONS, get_balance):
            print('All transactions are valid')
        else:
            print('There are invalid transactions')
    elif user_choice == 'q':
        # exit
        WAITING_FOR_INPUT = False
    else:
        print('Input was invalid, please pick a value from the list!')
    if not verifier.verify_chain(BLOCKCHAIN):
        print_blockchain_elements()
        print('Invalid blockchain')
        break
    print(get_balance('Evan'))
else:
    print('User left!')

print('Done!')
