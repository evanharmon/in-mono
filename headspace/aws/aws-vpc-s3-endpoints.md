# AWS VPC S3 ENDPOINTS

## Resources

- [AWS VPC S3 Gateway Endpoints Docs](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html)
- [AWS VPC S3 Gateway Endpoint Troubleshoot](https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/)
- [Testing VPC Endpoint for S3 via traceroute](https://blogs.vmware.com/cloud/2017/12/04/using-aws-vpc-endpoint-access-data-s3-spark-vmware-cloud-aws-2/#:~:text=Testing%20the%20VPC%20Endpoint%20for,virtual%20machines%20in%20your%20SDDC.)

## Gateway Endpoint

- public traffic
- DOES NOT allow on-premise access
- DOES NOT allow access from another region
- no charge

## Interface Endpoint

- private traffic
- supports on-premise
- supports access from another region via VPC Peering or Transit Gateway
- extra billing charges

## Example Bucket Policy Limiting Access to VPC Endpoint

```json
{
  "Version": "2012-10-17",
  "Id": "Access-to-bucket-using-specific-endpoint",
  "Statement": [
    {
      "Sid": "Access-to-specific-VPCE-only",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::bucket_name", "arn:aws:s3:::bucket_name/*"],
      "Condition": {
        "StringNotEquals": {
          "aws:sourceVpce": "vpce-1a2b3c4d"
        }
      }
    }
  ]
}
```

## Example: restrict access to a specific VPC

supports allowing multiple vpc s3 endpoints

```json
{
  "Version": "2012-10-17",
  "Id": "Access-to-bucket-using-specific-VPC",
  "Statement": [
    {
      "Sid": "Access-to-specific-VPC-only",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::example_bucket",
        "arn:aws:s3:::example_bucket/*"
      ],
      "Condition": {
        "StringNotEquals": {
          "aws:sourceVpc": "vpc-111bbb22"
        }
      }
    }
  ]
}
```

## Example: restrict to specific private IP range in VPC

```json
{
  "Version": "2012-10-17",
  "Id": "Policy1415115909152",
  "Statement": [
    {
      "Sid": "Access-to-specific-VPC-CIDR-only",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": ["arn:aws:s3:::bucket_name", "arn:aws:s3:::bucket_name/*"],
      "Condition": {
        "NotIpAddress": {
          "aws:VpcSourceIp": "172.31.0.0/16"
        }
      }
    }
  ]
}
```
