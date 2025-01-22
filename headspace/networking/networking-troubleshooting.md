# NETWORKING TROUBLESHOOTING

## Steps

### Check host IP connectivity
check interfaces: `ip link`
ensure primary interface is UP

### Check DNS resolution
check if hostname resolves to IP address
`nslookup my-repo-1` should resolve to valid IP
nslookup reaches out to nameserver in `/etc/resolv.conf`
ignores `/etc/hosts`

### Check connectivity
note: ping / ICMP may be blocked tho
`ping my-repo-1` check for packet loss / unreachable

### Check route
check route to resolved IP
`traceroute 192.168.1.5`
shows # of hops / devices, check for timeouts

### Check Services
check that services on other end are listening and correctly up
`netstat -an | grep 80 | grep -i LISTEN`

### Check Interfaces on Services
`ip link` see if any interfaces are down
