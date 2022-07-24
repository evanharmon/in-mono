# AWS AUTO SCALING CLI

## Get List Of Instance Ids

```console
aws autoscaling describe-auto-scaling-instances \
  --query AutoScalingInstances[].InstanceId
```
