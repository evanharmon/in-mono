# AWS AUTO SCALING

## Resources
- [AWS Auto Scaling Plan Docs](https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-a-scaling-plan.html)

## Limitations
- 20 AutoScaling Groups per region
- cannot use same config with on demand and spot instances
- can only specify one LaunchConfiguration per Auto Scaling Group

## Termination
http://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-termination.html

If multi az, goes in to az with most instances and
Terminates oldest config or closest to billing hour

## Scaling / Elasticity
- easy to scale in and out for cost saving (elasticity)
- hard to scale up then back down (vertical scaling)