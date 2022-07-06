# AWS EC2 NETWORKING

## Resources
- [AWS EC2 Networking](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-networking.html)
- [AWS EC2 Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html)

## Elastic Fabric Adapter
used for high performance computing (HPC)
limited to Linux, bypasses OS to provide low-latency transport

## Get Private IP Of EC2 Instance
```console
curl http://169.254.169.254/latest/meta-data/local-ipv4
```

