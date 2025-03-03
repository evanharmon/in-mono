# HOST

DNS lookup utility

## Resources

- [Linux Die host man docs](https://linux.die.net/man/1/host)

## Flags

`-a` all
`-t` type

## Resolving Check

Check if DNS records are resolving to NS records

`host -t ns subdomain.mydomain.com`

## Comprehensive Lookup

`host -a mydomain.com`

## CNAME lookup

`host -t CNAME *.evanharmon.link`
