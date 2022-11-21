""" node module """
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

from wallet import Wallet
from blockchain import Blockchain

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def get_node_ui():
    """ load node web ui """
    return send_from_directory('ui', 'node.html')


@app.route('/network', methods=['GET'])
def get_network_ui():
    """ load network web ui """
    return send_from_directory('ui', 'network.html')


@app.route('/wallet', methods=['POST'])
def create_keys():
    """ create public and private keys """
    wallet.create_keys()
    if wallet.save_keys() is not True:
        response = {'message': 'Saving the keys failed.'}
        return jsonify(response), 500
    global BLOCKCHAIN
    BLOCKCHAIN = Blockchain(wallet.public_key, port)
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
    BLOCKCHAIN = Blockchain(wallet.public_key, port)
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


@app.route('/broadcast-transaction', methods=['POST'])
def broadcast_transaction():
    """ broadcast transaction """
    values = request.get_json()
    if values is None:
        response = {'message': 'No data found.'}
        return jsonify(response), 400
    required = ['sender', 'recipient', 'amount', 'signature']
    if not all(key in values for key in required):
        response = {'message': 'Some data is missing.'}
        return jsonify(response), 400
    recipient = values['recipient']
    sender = values['sender']
    signature = values['signature']
    amount = values['amount']
    success = BLOCKCHAIN.add_transaction(
        recipient, sender, signature, amount, is_receiving=True)
    if success is False:
        response = {'message': 'Creating a transaction failed.'}
        return jsonify(response), 500
    response = {'message': 'Successfully added transaction.',
                'transaction': {
                    'sender': sender,
                    'recipient': recipient,
                    'amount': amount,
                    'signature': signature,
                },
                'funds': BLOCKCHAIN.get_balance()}
    return jsonify(response), 201


@app.route('/broadcast-block', methods=['POST'])
def broadcast_block():
    """ broadcast block """
    values = request.get_json()
    if not values:
        response = {'message': 'No data found.'}
        return jsonify(response), 400
    if 'block' not in values:
        response = {'message': 'No block found.'}
        return jsonify(response), 400
    block = values['block']
    last_local_block_index = BLOCKCHAIN.chain[-1].index
    if block['index'] == last_local_block_index + 1:
        if BLOCKCHAIN.add_block(block) is True:
            response = {'message': 'Block added.'}
            return jsonify(response), 201
        else:
            response = {'message': 'Block seems invalid.'}
            return jsonify(response), 500
    elif block['index'] > last_local_block_index:
        print('block indexes are wrong')
        return jsonify({'message': 'TODO'}), 500
    else:
        response = {
            'message': 'Blockchain seems to be shorter. Block not added.'}
        return jsonify(response), 409


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


@app.route('/node', methods=['POST'])
def add_node():
    """ add node """
    values = request.get_json()
    if not values:
        response = {'message': 'No data attached.'}
        return jsonify(response), 400
    if 'node' not in values:
        response = {'message': 'No node data found.'}
        return jsonify(response), 400
    node = values.get('node')
    BLOCKCHAIN.add_peer_node(node)
    response = {'message': 'Node added successfully.',
                'all_nodes': BLOCKCHAIN.get_peer_nodes()}
    return jsonify(response), 201


@app.route('/node/<node_url>', methods=['DELETE'])
def remove_node(node_url):
    """ remove node """
    if node_url is None or node_url == '':
        response = {'message': 'No node found.'}
        return jsonify(response), 400
    BLOCKCHAIN.remove_peer_node(node_url)
    response = {'message': 'Node removed successfully.',
                'all_nodes': BLOCKCHAIN.get_peer_nodes()}
    return jsonify(response), 201


@app.route('/nodes', methods=['GET'])
def get_nodes():
    """ get list of nodes """
    nodes = BLOCKCHAIN.get_peer_nodes()
    response = {'all_nodes': nodes}
    return jsonify(response), 200


if __name__ == '__main__':
    from argparse import ArgumentParser
    parser = ArgumentParser()
    parser.add_argument('-p', '--port', type=int, default=9000)
    args = parser.parse_args()
    port = args.port
    wallet = Wallet(port)
    BLOCKCHAIN = Blockchain(wallet.public_key, port)
    app.run(host='0.0.0.0', port=args.port)
