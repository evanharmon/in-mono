# TERRAFORM MINIO S3 BACKEND

## Features
use minio as an s3 compatible backend

## Example s3 compatible backend

```hcl
terraform {
  backend "s3" {
    key = "terraform.tfstate"
    region = "us-east-1"
    bucket = "remote-state"
    endpoint = "http://172.16.240.50:9000"
    force_path_style = true

    skip_credentials_validation = true
    skip_metadata_api_check = true
    skip_region_validation = true
  }
}
```