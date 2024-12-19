# DIG

## Resources

- [Linux Die dig man docs](https://linux.die.net/man/1/dig)

## Features
domain information groper. Interrogate those DNS name servers!

## Limitations
- ignores records in /etc/hosts

## Test AWS Service Discovery From EC2 Instance

`dig +short myapplication.local`

## Recursive DNS Check

`dig trace myapplication.local`

## Check NS records for a domain

`dig -t ns evanharmon.link +short`
