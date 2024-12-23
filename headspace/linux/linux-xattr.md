# LINUX XATTR

## Features
used to access and modify extended attributes (xattr) of a file.
- custom attributes
- used to attach additional metadata

## Install
`apt install attr`

## Example setting a custom attribute
`xattr -s "user.name" Jane_Doe filename`

## Example getting a custom attribute
`xattr -g "user.name" filename`

## List all defined attributes
`xattr -l filename`

## Clear attributes
`xattr -c ./nvim-macos.tar.gz`