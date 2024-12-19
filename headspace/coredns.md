# COREDNS

## Resources

- [Coredns github](https://github.com/coredns/coredns)
- [Coredns manual](https://coredns.io/manual/toc/)
- [Coredns installation](https://coredns.io/manual/toc/#installation)

## Features

- runs on port 53, default dns server port

## Practice

### Run coredns from /etc/hosts

/etc/hosts
```
192.168.1.10        web
192.168.1.11        db
```

```sh
cat > Corefile
. {
    hosts /etc/hosts
}
```
`./coredns`