# LINUX XCLIP

## Features
similar to `pbcopy` on mac. Not installed in ubuntu by default though.

## Limitations
- requires X11 forwarding so often won't work

## Install
`apt install xclip`

## Command
copy STDIN to clipboard
`cat evan.csr|base64|tr '\n' -d| xclip -sel clip`