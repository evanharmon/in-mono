# AWS CLOUDWATCH ALARMS BILLING ALARM

## Resources

- [AWS CloudWatch Billing Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)
- [AWS CloudWatch Create Billing Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)

## Steps

Billing Management page:
- enable billing alerts with 'Receive Billing Alerts' preference in Billing Management

CloudWatch Alarms page:
- set region to 'us-east-1'
- create alarm using 'Billing, Total Estimated Charge' as metric

CloudWatch Alarms Configure Actions page:
- set conditions to 'static'
- set 'Whenever EstimatedCharges is' to `greater` than `$5`, go to next page
- select 'create new SNS topic', use default name, set email addresses, create topic, go to next page
- Name Alarm something specific to the account with a description, go to next page

Emails:
- check email and subscribe on each email account put in the SNS topic sub