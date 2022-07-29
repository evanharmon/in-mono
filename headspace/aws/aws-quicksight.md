# AWS QUICKSIGHT

business intelligence (BI) service to deliver insights / visualization dashboards

## Resources

- [AWS Quicksight User Guide](https://docs.aws.amazon.com/quicksight/latest/user/welcome.html)
- [AWS Quicksight Developer Guide](https://docs.aws.amazon.com/quicksight/latest/developerguide/welcome.html)

## Features

- supports lots of AWS service data sources
- supports many third-party data sources as well

## Hook up to RDS

vpc connection creates an ENI and attaches to Quicksight

- create new private subnet in same vpc
- create new SG with inbound rules for Quicksight
- Log in Quicksight as admin and create new vpc connection
