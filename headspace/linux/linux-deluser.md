# LINUX DELUSER

## Features
modern equivalent to `userdel`
- does not delete user home directory by default

## Commands

### Delete user
`deluser evan`

### Delete user and home directory
`deluser evan --remove-home`

### Delete user and all files owned by user
`deluser evan --remove-all-files`

### Remove a user from a group

`deluser evan developers`