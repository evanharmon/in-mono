# AWS EC2 AUTO TERMINATION POLICIES

## Resources

- [AWS EC2 Auto Scaling Termination Policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html)

## Default

- If multi az, goes in to az with most instances and Terminates oldest config or closest to billing hour

## AllocationStrategy

values: `lowest-price`, `capacity-optimized`

- terminates instances according to strategy type

## OldestLaunchTemplate

- terminate instances with oldest launch template
- good for updating a group and phasing out previous config instances

## OldestLaunchConfiguration

- terminate instances with oldest launch configuration
- good for phasing out previous configuration

## ClosestToNextInstanceHour

- terminates instance closest to next billing hour
- good for maximizing hourly rate ec2 instances vs normal one second increment billing

## NewestInstance

- terminates newest instance
- great for testing out new launch configurations

## OldestInstance

- terminates oldest instance
- useful for upgrading instances to a new EC2 type
