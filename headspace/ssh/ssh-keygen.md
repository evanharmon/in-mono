# SSH KEYGEN

## Generate Public Key from Private Key

```console
ssh-keygen -y \
  -f ~/Downloads/mykeypair.pem \
  > ~/Downloads/mykeypair.pub
```

## Generate Public Key for Amazon from Private Key

```console
ssh-keygen -e -m RFC4716 -f ~/Downloads/mykeypair.pem
```

## Generate User public key for SSH connections

```console
cd $HOME/.ssh
ssh-keygen -t rsa -b 4096
```

## Generate Thumbprint of Public Key

```console
ssh-keygen -lf /path/to/key.pub
```
