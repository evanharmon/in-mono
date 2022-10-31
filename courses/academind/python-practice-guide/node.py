""" node module """
# from uuid import uuid4
from blockchain import Blockchain
from utility.verification import Verification
from wallet import Wallet


class Node:
    """ Node to run the local blockchain instance """

    def __init__(self):
        # self.wallet = str(uuid4())
        self.wallet = Wallet()
        self.wallet.create_keys()
        self.blockchain = Blockchain(self.wallet.public_key)

    def get_transaction_value(self):
        """ Get input of the user (new transaction amount) as float """
        # Get user input (recipient)
        tx_recipient = input('Enter the recipient of the transaction: ')
        # Get user input (amount), transform from string to float
        tx_amount = float(input('Your transaction amount please: '))
        return tx_recipient, tx_amount

    def get_user_choice(self):
        """ Prompts user for choice and returns it """
        user_input = input('Your choice: ')
        return user_input

    def print_blockchain_elements(self):
        """ Output all blocks of the blockchain. """
        # Output blockchain list to console
        for block in self.blockchain.chain:
            print('Outputting Block')
            print(block)
        print('-' * 20)

    def listen_for_input(self):
        """ starts node and waits for user input """
        waiting_for_input = True

        # while loop for user input interface
        # Exits once waiting_for_input becomes False or break called
        while waiting_for_input:
            print('Please choose')
            print('1: Add a new transaction value')
            print('2: Mine a new block')
            print('3: Output the blockchain blocks')
            print('4: Check transaction validity')
            print('5: Create wallet')
            print('6: Load wallet')
            print('7: Save keys')
            print('q: Quit')
            user_choice = self.get_user_choice()
            if user_choice == '1':
                tx_data = self.get_transaction_value()
                recipient, amount = tx_data
                # Add transaction amount to blockchain
                signature = self.wallet.sign_transaction(
                    self.wallet.public_key, recipient, amount)
                if self.blockchain.add_transaction(
                    recipient, self.wallet.public_key, signature, amount=amount
                ):
                    print('Added transaction!')
                else:
                    print('Transaction failed!')
                print(self.blockchain.open_transactions)
            elif user_choice == '2':
                if not self.blockchain.mine_block():
                    print('Mining failed. Got no wallet?')
            elif user_choice == '3':
                self.print_blockchain_elements()
            elif user_choice == '4':
                if Verification.verify_transactions(
                    self.blockchain.open_transactions, self.blockchain.get_balance
                ):
                    print('All transactions are valid')
                else:
                    print('There are invalid transactions')
            elif user_choice == '5':
                self.wallet.create_keys()
                self.blockchain = Blockchain(self.wallet.public_key)
            elif user_choice == '6':
                self.wallet.load_keys()
                self.blockchain = Blockchain(self.wallet.public_key)
            elif user_choice == '7':
                self.wallet.save_keys()
            elif user_choice == 'q':
                # exit
                waiting_for_input = False
            else:
                print('Input was invalid, please pick a value from the list!')
            if not Verification.verify_chain(self.blockchain.chain):
                self.print_blockchain_elements()
                print('Invalid blockchain')
                break
            print(
                f'Balance of {self.wallet.public_key}: {self.blockchain.get_balance():6.2f}')
        else:
            print('User left!')

        print('Done!')


# only call when run via `python3 node.py`
if __name__ == '__main__':
    node = Node()
    node.listen_for_input()
