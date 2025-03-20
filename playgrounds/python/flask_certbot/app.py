"""flask with TLS certs for local dev playground"""

import argparse
import ssl

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    """simple hello world route"""
    return "Hello, World!"


if __name__ == "__main__":
    # use args instead of env vars - much better practice
    parser = argparse.ArgumentParser(
        description="A simple flask development HTTPS server with certs."
    )
    parser.add_argument("--cert-file", help="Certificate file.", required=True)
    parser.add_argument("--key-file", help="Private key file.", required=True)
    parser.add_argument(
        "-p",
        "--port",
        type=int,
        default=5000,
        help="Port to run server on.",
    )

    args = parser.parse_args()

    # Create a SSLContext object with the certificate and private key files
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_context.load_cert_chain(args.cert_file, args.key_file)

    # Flask run doesn't support certs - so use `app.run()`
    # using port 443 on a local OS will require sudo
    # typically just set it to 5000 for dev
    app.run(debug=False, port=args.port, use_reloader=False, ssl_context=ssl_context)
