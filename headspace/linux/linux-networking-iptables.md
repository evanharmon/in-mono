# IPTABLES

## Flags
- `-A` add rule
- `-D` delete rule
- `-I` insert rule at top of chain
- `-L` list rules
- `-p` protocol
- `-s` source
- `-d` destination
- `--dport` destination port
- `-j` action to take

## Install
may not be installed automatically on debian
`sudo apt install iptables`

## Chains
- can contain multiple rules, chain of rules
- each rule is reviewed and can drop traffic

## Rule / Chain Types
- INPUT
- FORWARD
- OUTPUT

### INPUT
- network traffic coming in, like SSH

### FORWARD
- network routers where traffic is forwarded
- not very common

### OUTPUT
- traffic initiated by server outbound to other systems
- when the server initiates a connection with another server, such as a DB server

## Basic Commands

### List Chains
`iptables -L --line-numbers`

### List Rules
`iptables`

### List all rules of all tables
`iptables -L`

### Display rules for a specific tables
`iptables -L -t nat`

### List rules with line numbers
`iptables -L -n --line-numbers`

### View nats
`iptables -nvL -t nat`

### List PREROUTING rules
`iptables -L -t nat --line-numbers`

## Chain commands

### Create a Chain
`iptables -N new_chain`

### Edit a chain
`iptables -E new_chain old_chain`

### Delete a chain
`iptables -X old_chain`

## Rule commands

### Create input rules
example: SSH - blocked except for specific source
```bash
# input rule for SSH from specific ip
iptables -A INPUT -p tcp -s 172.16.238.187 --dport 22 -j ACCEPT
# block all other SSH INPUT
iptables -A INPUT -p tcp --dport 22 -j DROP
```

example: allow incoming on port 80 for a webserver
`iptables -A INPUT -p tcp --dport 80 -j ACCEPT`

### Create output rules
example: allow outgoing connection to port 5432 only from specific source
```bash
iptables -A OUTPUT -p tcp -s 172.16.238.11 --dport 5432 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 5432 -j DROP
# validate connection - it will come back on ephemeral tcp port
netstat -an | grep 5432
# output: tcp 0 0 172.16.238.10:44060  172.16.238.11:5432 ESTABLISHED
```

example: allow outgoing to port 80 only from specific source
```bash
iptables -A OUTPUT -p tcp -s 172.16.238.11 --dport 80 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 80 -j DROP
```

### Delete rule
```bash
# get rule # in list
iptables -L
# delet rule at specific location in list
iptables -D OUTPUT 5
```

### Delete Prerouting Rule
`iptables -t nat -D PREROUTING 1`

### Port Forwarding
```bash
iptables \
  -t nat \
  -A PREROUTING \
  -i eth0 \
  -p tcp \
  --dport $srcPortNumber \
  -j REDIRECT \
  --to-port $dstPortNumber
```

### Port Forwarding
Remember to do output as well bc the loopback interface isn't affected by PREROUTING
```bash
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 9191
iptables -t nat -A OUTPUT -p tcp -o lo --dport 80 -j REDIRECT --to-ports 9191
```

### Redirect
Used for redirecting local packets between services on the localhost

### DNAT
Alters packets destined outside of localhost
