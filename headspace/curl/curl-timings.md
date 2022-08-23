# CURL TIMINGS

## Resources

- [Curl show timings Joseph Scott Blog](https://blog.josephscott.org/2011/10/14/timing-details-with-curl/)

## Show Timings

Step 1: Create File

```bash
# curl-format.txt
time_namelookup: %{time_namelookup}\n
time_connect: %{time_connect}\n
time_appconnect: %{time_appconnect}\n
time_pretransfer: %{time_pretransfer}\n
time_redirect: %{time_redirect}\n
time_starttransfer: %{time_starttransfer}\n
----------\n
time_total: %{time_total}\n
```

Step 2:

```console
curl -w "@curl-format.txt" -s "http://wordpress.com/"
```
