# NMAP

## Resources

- [NMAP Common Scan Commands](https://www.cyberciti.biz/tips/linux-scanning-network-for-open-ports.html)

## Install

mac: `brew install nmap`
linux: `apt-get install nmap`

## Commands

### Scan Services Ports

`nmap -sO 10.10.100.254`

### Scan TCP Ports

`nmap -PS 10.10.100.254`

### Scan UDP Ports

`nmap -sU 10.10.100.254`

### Scan for connectable ports
`nmap -sC 10.0.0.0/24`
