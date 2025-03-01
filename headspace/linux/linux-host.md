# HOST

DNS lookup utility

## Resources

- [Linux Die host man docs](https://linux.die.net/man/1/host)

## Flags

`-a` all
`-t` type

## Resolving Check

Check if DNS records are resolving to NS records

```console
host -t ns subdomain.mydomain.com
```

## Comprehensive Lookup

```console
host -a mydomain.com
```

## CNAME lookup

```console
host -t CNAME *.evanharmon.link
```
