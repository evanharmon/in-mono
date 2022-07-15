# AWS VPN ROUTING

## Resources

- [AWS VPN Site-to-Site VPN Routing](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNRoutingTypes.html)

## Features

- supports static routing or dynamic routing (BGP)

## Internet Traffic

Route and Security groups can be set up to have vpn network traffic go back
directly to public subnet instead of out over the internet

## Limitations

- Route Propogation must be turned on in every route table
- dynamic routing requires Autonomous System Number (ASN) of customer gateway and virtual private gateway
