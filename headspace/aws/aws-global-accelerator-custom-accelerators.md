# AWS GLOBAL ACCELERATOR CUSTOM ACCELERATORS

use when group of users must interact on same session on specific EC2 instances / ports

## Resources

- [AWS Global Accelerator Endpoints for Custom Accelerators](https://docs.aws.amazon.com/global-accelerator/latest/dg/work-with-custom-routing-accelerators.html)

## Features

- use application logic to route to specific EC2 instances
- supports multiple VPC subnets
- endpoint groups support UDP, TCP, or both

## Limitations

- VPC subnet is only supported endpoint type
- make sure to include enough ports to map to all destinations
- no support for EC2 instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, or T1
- must allow this traffic to the subnet
