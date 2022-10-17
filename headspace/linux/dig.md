# DIG

domain information groper. Interrogate those DNS name servers!

## Resources

- [Linux Die dig man docs](https://linux.die.net/man/1/dig)

## Test AWS Service Discovery From EC2 Instance

```console
dig +short myapplication.local
```

## Recursive DNS Check

```console
dig trace myapplication.local
```

## Check NS records for a domain

```console
dig -t ns evanharmon.link +short
```
