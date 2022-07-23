# AWS EC2 VPC SECURITY GROUPS

first layer of defense.
stateful, return traffic allowed automatically, regardless of any rules

## Resources

- [AWS EC2 Security Groups for Linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
- [AWS VPC Security Group Docs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
- [AWS VPC EC2 Default and custom security groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/default-custom-security-groups.html)

## Features

- default to deny all inbound traffic
- default to allow all outbound traffic
- stateful so whatever traffic comes in and is allowed, automatically gets allowed back out
- can span across multiple subnets
- security groups can reference other security groups

## Limitations

- can only have one ACL attached
- do not affect traffic on 169.254.0.0/16
- max # of Security Groups per Instance is 5
- every instance must have a security group, if you don't specify one, the
  default vpc security group is assigned

## DELETE THIS SECURITY GROUP IF YOU EVER SEE IT

2009-07-15-default

## Instance SG

attached to DeviceIndex 0 (eth0)

## Default VPC Security Group

- default security group allows communication between network interfaces and instances assigned to this group
- actual inbound rule has it's own security group id with allow all protocol / range

## Custom Security Group

- manually created Security Groups DO NOT have this rule and it must be added
  explicitly in order for instances to communicate with another Security Group
