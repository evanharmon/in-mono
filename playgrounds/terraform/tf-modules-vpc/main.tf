provider "aws" {
  region = var.region

  default_tags {
    tags = var.tags
  }
}

data "aws_availability_zones" "available" {
  # exclude local zones
  filter {
    name = "opt-in-status"
    values = ["opt-in-not-required"]
  }
}

locals {
  name = var.project_name
  region = var.region

  vpc_cidr = var.vpc_cidr
  azs = slice(data.aws_availability_zones.available.names, 0, 3)
}
