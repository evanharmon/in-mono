# AWS VPC ACLS

stateless firewalls that act on subnets

## Resources

- [AWS VPC Network ACLs Docs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)

## Features

- support deny rules unlike security groups which do not
- evaluates rules from lowest # to highest
- inbound and unbound traffic defaults to DENY
- encompass all security groups under the subnet associated with them
- can span multiple subnets

## Limitations

- only for use on CIDRs
- do not affect traffic on CIDR block 169.254.0.0/16
- can only be deleted if no subnets are associated with it
- default network acl cannot be deleted
- return traffic must be explicitly allowed by a rule since stateless

### Best Practices

- increment rule #'s by 100

### Can Override A Security Group Rule

Ex. security group allows port 80 from anywhere 0.0.0.0/0. ACL denies access to
port 80. Instance will not be able to access port 80 in/out from 0.0.0.0/0

### Disassociating Subnets

When you disassociate a subnet, it is re-associated with a default ACL

## DENY Specific Port Denies And ALLOW Large Port Range

Make sure to put the DENY rule BEFORE the large port range allow
ex. Rule 500 TCP Port:9923 0.0.0.0/0 DENY
Rule 600 TCP Port:9000 to 65535 0.0.0.0/0 ALLOW
