# AWS EXAM TIPS DATA TRANSFER CALCULATIONS

for those questions about uploading a total amount of data with a specific bandwidth

## Resources

- [OmniCalculator Data Transfer Speed and Duration](https://www.omnicalculator.com/other/data-transfer)

## Direct Connect (DX)

10Gbps gigabits / s = 1GBps gigabytes / s
hourly transfer: `1 GBps * 60 sec * 60 min` = 3,600 GB per hour
daily transfer: `3.6 GB * 24 hours` = ~86TB

## Shorthand Versions

~22 hours to upload 10 TB over a 1 Gbps connection
~2 hours to upload 1 TB over a 1 Gbps connection
~24 hours to upload 10.75 TB over a 1 Gbps connection

## Data Transfer Duration

`duration = data_transferred / speed`

one megabyte is eight times the size of a megabit

example 1: 15 Mbps for 500 MB file

```
duration = (500 * 8) Mb / 15 Mbps = 266.67 seconds
```
