# LINUX BASH

## Features
bourne-again shell

## Best practices
- place PATH and environment variables in .bash_profile
- interactive shell config goes in .bashrc
- use `$HOME` instead of `~/`
- use `.` instead of `source` for dash compatibility

## bashrc
.bashrc
- executed for interactive non-login shells - like a new terminal

what to put in here:
- aliases
- functions
- prompt settings
- completions

## bash_profile
.bash_profile
- executed for login shells - like logging in to a system

what to put in here:
- PATH variables
- ENV variables
