# AWS EC2 AUTO SCALING

## Resources

- [AWS EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)
- [AWS EC2 Auto Scaling Plan Docs](https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-a-scaling-plan.html)
- [AWS EC2 Auto Scaling Termination](http://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-termination.html)

## Features

- unhealthy instances are torn down before new activity launcches new instance
- handles scaling with separate scaling activities
- rebalancing DOES start up new instances before terminating old ones

## Limitations

- 20 AutoScaling Groups per region
- cannot use same config with on demand and spot instances
- can only specify one LaunchConfiguration per Auto Scaling Group
- scaling activites are NOT simultaneously done together to replace unhealthy instances

## Cooldown

- default cooldown period is 300 seconds

## Scaling / Elasticity

- easy to scale in and out for cost saving (elasticity)
- hard to scale up then back down (vertical scaling)
