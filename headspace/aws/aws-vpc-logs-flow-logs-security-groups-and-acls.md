# AWS VPC LOGS FLOW LOGS SECURITY GROUPS AND ACLS

## Resources

- [AWS VPC Flow Logs Examples](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html)

## Security Group Examples

SG allows ICMP ping / NACL allows inbound / outbound:

- TWO `ACCEPT` records will be visible in VPC flow logs

## Network ACL Examples

NACL permits inbound ICMP but DOES NOT permit outbound ICMP

- ONE `ACCEPT` record for inbound
- ONE `REJECT` record for outbound as NACL does not permit outbound
