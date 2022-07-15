# AWS EC2

## Resources

- [AWS EC2 Docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
- [AWS EC2 Instance Recovery](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html)

## Limitations

- instances do NOT retain their private IP unless re-using separately created ENI
- termination protection is turned off by default
- EBS-backed instance, default action is for root EBS volume to be deleted
  when instance is terminated

## Instances In Public Subnets

instances cannot send traffic to the internet unless:

- have a public IPv4 address or an elastic ip address (EIP)
- attached to an ELB (Elastic Load Balancer)

## Admin Access

you have admin access to the underlying resources / os

# Encryption

use third party tool (bit locker, etc) to encrypt root volume

- root volumes cannot be encrypted by default
- cant encrypt device where OS is installed

## Auto-Assign Public IP

Only available on new network interface with device index eth0
