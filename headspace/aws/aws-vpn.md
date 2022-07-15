# AWS VPN

traffic goes over the public internet

## Resources

- [AWS VPN Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html)
- [AWS VPN Site-to-Site VPN Customer Gateway Device Guide](https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html)
- [AWS VPN Client VPN User Guide](https://docs.aws.amazon.com/vpn/latest/clientvpn-user/client-vpn-user-what-is.html)

## Features

- encrypted via IPSec
- works with Global Accelerator

## Limitations

- cannot have overlapping CIDR blocks

## Use Case

- immediate need
- low to modest bandwidth requirements
- can tolerate variability in internet-based connectivity

## Communicate To AWS Environment From On Premise

Assign public IP address to VPC Gateway

## Setup

- On-Premise Customer Gateway
- Virtual Private Gateway
- VPC with Hardware VPN Access
