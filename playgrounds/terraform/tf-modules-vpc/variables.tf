variable "environment" {
  description = "Environment"
  type = string
}

variable "project_name" {
  description = "Name of the project."
  type = string
}
variable "region" {
  description = "AWS Region"
  type = string
}

variable "vpc_cidr" {
  description = "VPC cidr block"
  type = string
}

variable "tags" {
  description = "Default tags to automatically add to all AWS resources"
  type = map(string)
}
