# SSL TLS ASYMMETRIC ENCRYPTION

Two keys used for encryption. Also known as public key encryption
Example is RSA

## Features
sometimes help to think of the public key as a `lock`
remember you can't encrypt and decrypt with the SAME key

- public key is for encryption
- private key is for decryption
- public key can be shared with others
- public key encryption still requires private key to decrypt

## Example of how this works

```text
Process Using RSA (Public-Key Encryption):
1.	Public-Private Key Pairs:
  •	The server generates a public-private key pair (e.g., RSA keys).
  •	Public key: Can be shared openly.
  •	Private key: Kept secret by the server.
  •	The public key is distributed to the client.
2.	Key Generation and Encryption:
  • client generates a random symmetric key (e.g., AES key) for secure communication.
  • client encrypts the symmetric key using the server’s public key.
3.	Transmission:
  • encrypted symmetric key is sent to the server.
4.	Decryption:
  • server uses its private key to decrypt the symmetric key.
5.	Secure Communication:
  • the client and server now share the symmetric key and use it to encrypt/decrypt messages securely.
```