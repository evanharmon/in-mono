# TERRAFORM AWS VPC

## Get list of AZs and filter to not local zones
added bonus - showing slicing up in to subnets
```conf
data "aws_availability_zones" "available" {
  # Exclude local zones
  filter {
    name   = "opt-in-status"
    values = ["opt-in-not-required"]
  }
}

locals {
  azs      = slice(data.aws_availability_zones.available.names, 0, 3)
  vpc_cidr = "10.0.0.0/16"
}

locals {
# infra_subnets = [ "10.0.52.0/24", "10.0.53.0/24", "10.0.54.0/24" ]
# private_subnets = [ "10.0.0.0/20", "10.0.16.0/20", "10.0.32.0/20" ]
# public_subnets = [ "10.0.48.0/24", "10.0.49.0/24", "10.0.50.0/24" ]
  private_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 4, k)]
  public_subnets  = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 48)]
  # lots cross-VPC options instead of eating up subnets for intra communication
  intra_subnets   = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 8, k + 52)]
}

# variation
locals {
  # 3 AZ's, so start private subnets at index 3 (0, 1, 2 covered in public)
  private_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 3, k)]
  public_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 3, k + lenght(local.azs))]
}
```
