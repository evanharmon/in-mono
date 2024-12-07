# APT

# Search For A Package

```console
apt-cache search zsh
```

# Get Dependencies of a Package

```console
apt-cache depends vim
```

# Install Package

```console
apt-get install vim
```

# Download Package

```console
apt-get download vim
```

# See What updates are needed

```console
apt-get upgrade --dry-run
```

# Package not found errors

Try `sudo apt-get update` first

## List versions of a package
`sudo apt list -a kubeadm`