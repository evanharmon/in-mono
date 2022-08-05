# AWS EXAM TIPS ELB ALB

## ELB

- don't forget to configure connection draining to prevent bad instance routing!

## Cross-zone load balancing

- cross-zone load balancing enabled: balances load on all instances irrespective of AZ
- cross-zone load balancing disabled: spreads loads in event percentage across AZs

## Static IP Address

if a static IP address is a requirement, setup an NLB for the static IP, then hook it up to an ALB

## Network Load Balancer (NLB)

do not do termination (wrong layer for that anyways)
