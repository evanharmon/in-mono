# AWS COST AND USAGE REPORTS

## Resources

- [AWS Cost and Usage Reports](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html)
- [AWS Cost and Usage Reports for Organizations](https://docs.aws.amazon.com/cur/latest/userguide/cur-consolidated-billing.html)
- [AWS Cost and Usage Reports query with Athena Tutorial](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/athena.html)

## Features

- delivers reports to S3
- can update report up to 3 times a day
- can include resource IDs but this increases file size

## Limitations

- Account creating reports must also own the S3 bucket

## Steps

- create new S3 bucket such as `eph-music.invoke-central-lambdas.billing-reports.us-east-1`
- go to `Cost & Usage Reports` page in billing and create report
- configure bucket, granularity, versioning, data integration, and compression
