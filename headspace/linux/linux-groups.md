# LINUX GROUPS

## Features
- group info stored in `/etc/group`

## Commands

### Check what groups user is a member of
uses current user
`groups`

### Check groups for a specific user
`groups evan`

## /etc/group
format is:
`NAME:PASSWORD:GID:MEMBERS`
NAME:
- name of group
PASSWORD:
- blank bc it's stored in `/etc/shadow`