# TCPDUMP

## Resources

- [tcpdump Guide](https://danielmiessler.com/study/tcpdump/)

## Raw Output view

```console
tcpdump -ttttnnvvS
```

## Examine request headers

```console
tcpdump -A \
  -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
```

## Examine response headers

```console
tcpdump -X \
  -s 0 'tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)'
```

## View network traffic

```console
alias httpdump="sudo tcpdump -i en1 -n -s 0 -w - | grep -a -o -E \"Host\: .*|GET \/.*\""
```
