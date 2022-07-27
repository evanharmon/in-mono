# AWS EXAM TIPS SERVICES

## Auto Scaling

- unhealthy instances are re-launched using two SEPARATE scaling activites
- unhealthy instances ARE torn down before new launched
- rebalancing differs and launches new instances before tearing down old ones in diff AZs

## Launch Configurations

- auto scaling group can only have ONE launch config assigned at a time
- swapping out LC means creating new LC, associating with ASG, doubling capacity to launch new instances, then turning capacity back down
