# AWS DIRECT CONNECT VIRTUAL INTERFACES (VIF)

## Resources

- [AWS Direct Connect Virtual Interfaces](https://docs.aws.amazon.com/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html)

## Features

- no longer need VPC endpoints as private VIF can access thru AWS network

## Private Virtual Interface

private virtual interface: access VPC using private IP addresses

examples: EC2, ALB, etc

## Public Virtual Interface

public virtual interface: access all AWS public services using public IP addresses

examples: S3, dynamoDB, etc

## Transit Virtual Interface

access one or more Transit Gateways with DX Connect gateways
