# LINUX USERS

## Features
- user info stored in `/etc/passwd`
- user can be part of multiple groups
- default GID set is UID
- actual passwords are stored in `/etc/shadow` and hashed

## User
user consists of:
- username
- UID
- GUID
- home directory
- default shell

## Commands

### View user info
lists uid, gid, and groups
`id evan`

### Check which user is logged in
`who`

### Check active logged in users
record of all logged in users, and last reboot time
`last`

### Check home directory for user
`grep -i evan /etc/passwd`

### Check user

`whoami`

### List all users currentl logged in
`users`

### Change Password

`passwd`

### List users

`cat /etc/passwd`

### View who can sudo
`cat /etc/sudoers`

## /etc/passwd
required:
- username
- UID
- GID

format is:
`USERNAME:PASSWORD:UID:GID:GECOS:HOMEDIR:SHELL`
password is always `x` because it's stored in `/etc/shadow` instead

GECOS is optional and a csv format of user info such as:
full_name
location
phone_no
etc

## /etc/shadow
format is:
`USERNAME:PASSWORD:LASTCHANGE:MINAGE:MAXAGE:WARN:INACTIVE:EXPDATE`
LASTCHANGE:
- in epoc format
MINAGE:
- minimum # of days to wait until password change is allowed
MAXAGE:
- max # of days until user has to change password
WARN:
- # of days before user is warned of needed password change
INACTIVE:
- # of days after password expire that old password should still be accepted
- can be empty
EXPDATE:
- expiry date of password, in epoc, when field will be 
- can be empty