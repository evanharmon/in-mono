# AWS KINESIS DATA ANALYTICS

perform real-time analytics on streams using SQL

## Resources

- [AWS Kinesis Data Analytics](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/what-is.html)
- [AWS Kinesis Data Analytics Input Streams](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html)
- [AWS Kinesis Data Analytics Output Streams](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html)
- [AWS Kinesis Data Analytics Examples](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/examples.html)
- [AWS Kinesis Data Analytics Reference Data](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/app-add-reference-data.html)
- [AWS Kinesis Data Analytics Detecting Anomalies on a Stream](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/app-anomaly-detection.html)

## Use Cases

- streaming ETL
- Continuous metric generation like a gaming leaderboard
- response analytics to build alerting and filtering
- anomaly detection

## Features

- schema discovery
- supports optional reference data loaded from S3
- lambda pre-processing of data

## Limitations

- external destinations Kinesis Data Analytics or Lambda will retry indefinitely on failures

## Stream Types

- input
- output
- error

## Input Stream Sources

- Kinesis Data Firehose
- Kinesis Data Stream

## Output Stream Sources

can be in-application Kinesis Data Analytics stream name or an external destionation like:

- Kinesis Data Stream
- Kinesis Data Firehose delivery stream
- Lambda
