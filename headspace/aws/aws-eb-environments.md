# AWS ELASTIC BEANSTALK ENVIRONMENTS

## Resources

- [AWS EB Managing Environments](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.html)
- [AWS EB Configuring Environments](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customize-containers.html)
- [AWS EB Stop / Restart EB Environment on a schedule](https://aws.amazon.com/premiumsupport/knowledge-center/schedule-elastic-beanstalk-stop-restart/)

## Best Practices

- DO NOT couple RDS with EB on Production environments

## Stop / Restart EB Environments

- configure CloudWatch Events to trigger Lambda
- Lambda makes `terminate-environment` and `rebuild-environment` API calls
