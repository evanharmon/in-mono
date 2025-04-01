module "vpc_ipv4_single_nat" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = local.name
  cidr = local.vpc_cidr

  azs             = local.azs
  # private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  # public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  private_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 4, k)]
  public_subnets = [for k, v in local.azs : cidrsubnet(local.vpc_cidr, 4, k + length(local.azs))]

  enable_nat_gateway = true
  single_nat_gateway = true
}
