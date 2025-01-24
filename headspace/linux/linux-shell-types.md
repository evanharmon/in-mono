# LINUX SHELL TYPES

## Types
- Bourne shell (sh)
- Debian Almquist shell (dash)
- Bourne again shell (bash)

## Bourne shell
often just bash now.
`ls -l /bin/sh` will often symlink to `/bin/bash`

## Bourne / Dash limitations
doesn't support expansion like bash
example: `for i in {1..3}` doesn't expand

## Bourne again shell (bash)