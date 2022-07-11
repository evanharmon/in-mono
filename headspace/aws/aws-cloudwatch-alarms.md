# AWS CLOUDWATCH ALARMS

## Resources

- [AWS CloudWatch Alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)
- [AWS Blog Math Metric Alarm](https://aws.amazon.com/blogs/mt/create-a-metric-math-alarm-using-amazon-cloudwatch/)
- [AWS CloudWatch Billing Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html)
- [AWS CloudWatch Composite Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html)
- [AWS CloudWatch Alarms and EventBridge](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-EventBridge)

## Features

- can be created from graphs
- can 

## Limitations

pretty easy to create an alarm that is invalid and will do nothing / not work at all

- AWS does not test or validate the alarm actions specified

## Types

- metric alarm (single metric)
- composite alarm (covers multiple alarms)

## Evaluation

- [Evaluating An Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation)

Period: length of time to evaluate the metric
Evaluation Periods: number of most recent periods (data points) to evaluate
Datapoints to Alarm: number of data points in Evaluation Periods to trigger Alarm
