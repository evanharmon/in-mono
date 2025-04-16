# AWS EKSDEMO CLI

## Resources
- [Github AWS EKSDEMO CLI](https://github.com/awslabs/eksdemo)

## Features
easy way to learn, test, and demo on EKS. Does a lot more than `eksctl`

## Limitations
- only intended for demo or test environments!!!

## Install

### macOS
```bash
brew tap aws/tap
brew install eksdemo
```

## Commands

### List subnets
shows free IPs as well
`eksdemo get subnets`

### List network interfaces
shows IPs available
- shows the two controlplane ENI's as well
`eksdemo get network-interfaces`
