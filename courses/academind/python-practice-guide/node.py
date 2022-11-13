""" node module """
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

from wallet import Wallet
from blockchain import Blockchain

app = Flask(__name__)
wallet = Wallet()
BLOCKCHAIN = Blockchain(wallet.public_key)
CORS(app)


@app.route('/', methods=['GET'])
def get_ui():
    """ load web ui """
    return send_from_directory('ui', 'node.html')


@app.route('/wallet', methods=['POST'])
def create_keys():
    """ create public and private keys """
    wallet.create_keys()
    if wallet.save_keys() is not True:
        response = {'message': 'Saving the keys failed.'}
        return jsonify(response), 500
    global BLOCKCHAIN
    BLOCKCHAIN = Blockchain(wallet.public_key)
    response = {
        'public_key': wallet.public_key,
        'private_key': wallet.private_key,
        'funds': BLOCKCHAIN.get_balance()
    }
    return jsonify(response), 201


@app.route('/wallet', methods=['GET'])
def load_keys():
    """ load public and private keys """
    if wallet.load_keys() is not True:
        response = {'message': 'Loading the keys failed.'}
        return jsonify(response), 500
    global BLOCKCHAIN
    BLOCKCHAIN = Blockchain(wallet.public_key)
    response = {
        'public_key': wallet.public_key,
        'private_key': wallet.private_key,
        'funds': BLOCKCHAIN.get_balance()
    }
    return jsonify(response), 200


@app.route('/balance', methods=['GET'])
def get_balance():
    """ retrieve balance """
    balance = BLOCKCHAIN.get_balance()
    if balance is None:
        response = {'message': 'Loading balance failed.',
                    'wallet_set_up': wallet.public_key is not None}
        return jsonify(response), 500
    response = {'message': 'Fetched balance successfully',
                'funds': balance}
    return jsonify(response), 200


@app.route('/transaction', methods=['POST'])
def add_transaction():
    """ add transaction """
    if wallet.public_key is None:
        response = {'message': 'No wallet setup.'}
        return jsonify(response), 400
    values = request.get_json()
    if not values:
        response = {'message': 'No data found.'}
        return jsonify(response), 400
    required_fields = ['recipient', 'amount']
    if not all(field in values for field in required_fields):
        response = {'message': 'Required data is missing.'}
        return jsonify(response), 400
    recipient = values['recipient']
    amount = values['amount']
    signature = wallet.sign_transaction(wallet.public_key, recipient, amount)
    global BLOCKCHAIN
    success = BLOCKCHAIN.add_transaction(
        recipient, wallet.public_key, signature, amount)
    if success is False:
        response = {'message': 'Creating a transaction failed.'}
        return jsonify(response), 500
    response = {'message': 'Successfully added transaction.',
                'transaction': {
                    'sender': wallet.public_key,
                    'recipient': recipient,
                    'amount': amount,
                    'signature': signature,
                },
                'funds': BLOCKCHAIN.get_balance()}
    return jsonify(response), 201


@app.route('/mine', methods=['POST'])
def mine():
    """ mine block """
    global BLOCKCHAIN
    block = BLOCKCHAIN.mine_block()
    if block is None:
        response = {'message': 'Adding a block failed.',
                    'wallet_set_up': wallet.public_key is not None}
        return jsonify(response), 500
    dict_block = block.__dict__.copy()
    dict_block['transactions'] = [
        tx.__dict__ for tx in dict_block['transactions']]
    response = {'message': 'Block added successfully.',
                'block': dict_block,
                'funds': BLOCKCHAIN.get_balance()}
    return jsonify(response), 201


@app.route('/transactions', methods=['GET'])
def get_open_transactions():
    """ get open transactions """
    global BLOCKCHAIN
    transactions = BLOCKCHAIN.open_transactions
    dict_transactions = [tx.__dict__ for tx in transactions]
    return jsonify(dict_transactions), 200


@app.route('/chain', methods=['GET'])
def get_chain():
    """ get blockchain """
    chain_snapshot = BLOCKCHAIN.chain
    dict_chain = [block.__dict__.copy() for block in chain_snapshot]
    for dict_block in dict_chain:
        dict_block['transactions'] = [
            tx.__dict__ for tx in dict_block['transactions']]
    return jsonify(dict_chain), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000)
