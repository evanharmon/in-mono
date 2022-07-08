# AWS EFS PERFORMANCE

## Resources

- [AWS EFS Performance](https://docs.aws.amazon.com/efs/latest/ug/performance.html)
- [AWS EFS Performance Summary Grid](https://docs.aws.amazon.com/efs/latest/ug/performance.html#performance-overview)

## Performance Modes

General purpose: lower latency
Max I/O: higher latency and throughput

## Read Latency

Standard storage & Max I/O has highest at single-digit milliseconds
One Zone & General Purpose: as low as 600 microseconds
Standard & General Purpose: as low as 600 microseconds

## Read Latency

Standard storage & Max I/O has highest at single to double digit milliseconds
One Zone & General Purpose: low single digit milliseconds
Standard & General Purpose: low single digit milliseconds

## IOPS

use Standard storage & Max I/O for maximum

## Throughput Modes

- Bursting Throughput (default)
- Provisioned Throughput (depends on storage size kinda like EBS)