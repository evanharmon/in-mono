# CURL DNS TRICKS

## Resources

- [Curl name resolve tricks](https://everything.curl.dev/usingcurl/connections/name)

## Provide custom IP address

`--resolve` inserts address into curl's DNS cache

```console
curl --resolve example.com:127.0.0.1 http://example.com
```
