# AWS SSM PATCH MANAGER

define what patches are to be installed

## Resources

- [AWS SSM Patch Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html)
- [AWS SSM Patch Manager Walkthroughs](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-walkthroughs.html)
- [AWS SSM Patch Manager Getting Started](https://aws.amazon.com/blogs/mt/getting-started-with-patch-manager-and-amazon-ec2-systems-manager/)

## Limitations

- requires an initial patch baseline
- Windows patches auto-approve after a 7 day period

## Patch Compliance Reports

- delivered to an S3 bucket

## Steps

From getting started guide:

- launch instances
- create or use predefined patch baseline
- set patch group to patch baseline
- create maintenance window
- register targets for maintenance window
- register task for maintenance window including AWS-RunPatchBaseline Run Command
- setup the rate control and error settings for task
- verify patch compliance report
