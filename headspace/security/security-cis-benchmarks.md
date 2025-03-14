# CIS BENCHMARKS

## Resources
- [CIS benchmarks list](https://www.cisecurity.org/cis-benchmarks)
- [Cis-cat lite tool](https://learn.cisecurity.org/cis-cat-lite)

## Features
prescriptive configuration recommendations for systems

## Example for kube linux node
restrict root access:
- disable login as root
- configure sudo and necessary users who can assume it
- force users to login with their accounts and use `sudo`

restrict network access:
- configure firewall / iptables to limit ports to ips

limit services:
- ensure only necessary services are allowed to run such as `ntp`, etc

restrict filesystems:
- unused fs disabled

audit / logging:
- ensure setup to track changes