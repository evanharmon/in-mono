# LINUX SOFT (SYMBOLIC) LINKS

## Features
- points to a path instead of an Inode
- can point to directories
- works across file systems

## Limitations
- since points to path, can break
- permissions on soft links don't matter

## Create soft link
ln -s <path_to_target> <path_to_link>
`ln -s /usr/local/opt/emacs-plus/Emacs.app /Applications`

## Check if link is a symbolic link
file type indicator will start with `l`
```sh
> ls -li /home
1152921504606781440 lrwxr-xr-x  1 root  wheel  25 Nov 20 14:14 /home -> /System/Volumes/Data/home
```

or `readlink /home`
