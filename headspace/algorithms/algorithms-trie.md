# TRIE

also known as a prefix list

## Features

- special kind of binary tree
- uses less storage space compared to binary tree
- avoids repeatedly go over every letter

## Limitations

- only work for keys that can break down to sequences of items

## Implementation

- nodes carry single letters
- left sub tree represents word continuation
- right sub tree represents letter alternatives
