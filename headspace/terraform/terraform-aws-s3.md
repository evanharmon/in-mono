# TERRAFORM AWS S3

## Resources

- [Terraform S3 Bucket Notifications](https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html)

### Bucket Events

#### 400 Error Bucket Events

If receiving a 400 error, make sure the `aws_lambda_permission.bucket_allow`
has been added in the terraform

#### Bucket Event Overwrites

`aws_s3_bucket_notification` will overwrite an existing notification event rule
without giving any warning!
