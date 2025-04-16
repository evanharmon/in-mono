# AWS EKS ADDON VPC CNI NETWORK POLICIES

## Features
uses eBPF under the hood
- eBPF so runs in linux kernel on the node
- not a sidecar (:
- uses standard `NetworkPolicy` crd

## Limitations
- can't create a network policy limiting access to an AWS arn like RDS

## Enable
`--enable-network-policy=true`

## Logs
`/var/log/aws-routed-eni/network-policy-agent.log`

## Example default-deny all ingress / egress
```yaml
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: default-deny
spec:
  # applies to all
  podSelector:
    matchLabels: {}
  policyTypes:
    - Ingress
    - Egress
```
