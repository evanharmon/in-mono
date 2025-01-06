# SSH KEYGEN

## Best practices
currently Ed25519 (256 bit key) is the recommended encryption method for SSH keys.
It's more efficient and provides the same level of security as a 3072-bit rsa key.

## Commands

### Generate Public Key from Private Key

```console
ssh-keygen -y \
  -f ~/Downloads/mykeypair.pem \
  > ~/Downloads/mykeypair.pub
```

### Generate Public Key for Amazon from Private Key

```console
ssh-keygen -e -m RFC4716 -f ~/Downloads/mykeypair.pem
```

### Generate User public key for SSH connections

rsa
```console
cd $HOME/.ssh
ssh-keygen -t rsa -b 4096
```

ed25519
`ssh-keygen -t ed25519`

### Generate Thumbprint of Public Key

```console
ssh-keygen -lf /path/to/key.pub
```

### Add public key for SSH access
`cat id_rsa.pub >> ~/.ssh/authorized_keys`
or
`ssh-copy-id -i id_rsa.pub user@host.com`