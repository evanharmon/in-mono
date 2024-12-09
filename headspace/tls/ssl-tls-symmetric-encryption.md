# SSL TLS SYMMETRIC ENCRYPTION


## Benefits

- single key encryption
- handles large amounts of data at great speeds

## Cons

- same key is used to encrypt and decrypt
- less secure when number of parties involved increases
- cannot be used on unattended systems to secure data. Process can be easily
  reversed by using same key

## Requirements

Members of same group must share the same key otherwise it doesn't scale

## Certs

.crt files have no headers
.pem cert files have headersStream cipher

## Encoding

- Operates on stream rather than entire block. Example: rc4
- Block cipher
- Entire block is encoded
- It's a transformation function
- Uses padding to achieve 128bit block length. Example: AES
- Support confidentiality and are deterministic
- Good for bulk data

## Hash Functions

Variable length changed to fixed length
Example: SHA1

## MAC Message authentication code

Provides integrity of data
ECB Electronic cookbook mode

## CBC Cipher block chaining mode

Output is different every time
Uses an IV initialization vector
