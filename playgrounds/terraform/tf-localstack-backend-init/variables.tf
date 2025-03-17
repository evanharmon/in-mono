variable "aws_region" {
  default = "us-east-1"
}

variable "s3_bucket_name" {
  default = "localstack-bucket"
}

variable "dynamodb_table_name" {
  default = "localstack-dynamodb-lock-tf-state"
}