# TERRAFORM AWS ROUTE53

## Resources
- [terraform-aws-route53 module example](https://github.com/terraform-aws-modules/terraform-aws-route53/blob/master/examples/complete/main.tf)

## Features
below are examples using both the AWS managed route53 resources as well as the
terraform-aws-route53 module

## Limitations
- terraform-aws-route53 module may strip the trailing `.` on records - thats ok as long as FQDN

## Import and modify NS / SOA records on zones
WARNING: this does an actual upsert on the records

using the common terraform-aws-route53 module
```conf
locals {
  domain = "mydomain.dev"
}
module "zones" {
  source  = "terraform-aws-modules/route53/aws//modules/zones"
  version = "~> 3.0"

  zones = {
    "mydomain.dev" = {
      tags = {
        env = "development"
      }
    }
  }
}

# example NOT using terraform-aws-route53 module
resource "aws_route53_record" "mydomain_dev_ns" {
  # required to modify auto-generated records
  allow_overwrite = true
  zone_id = module.zones.route53_zone_zone_id[local.domain]
  name = module.zones.route53_static_zone_name[local.domain]
  type = "NS"
  ttl = 3600

  records = module.zones.route53_zone_name_servers[local.domain]
}

# example NOT using terraform-aws-route53 module
resource "aws_route53_record" "mydomain_dev_soa" {
  # required to modify auto-generated records
  allow_overwrite = true
  zone_id = module.zones.route53_zone_zone_id[local.domain]
  name = module.zones.route53_static_zone_name[local.domain]
  type = "SOA"
  ttl = 900

  # Format: "ns-server admin-contact serial refresh retry expire minimum"
  records = [
    "${module.zones.route53_zone_name_servers[local.domain][0]}. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"
  ]
}
```

## Import alias record

using the common terraform-aws-route53 module

both apex and `www` examples below
```bash
terraform import 'module.domains.module.mydomain_com_records.aws_route53_record.this[" A"]' Z00000000000000000000_mydomain.com._A
terraform import 'module.domains.module.mydomain_com_records.aws_route53_record.this["www A"]' Z00000000000000000000_www.mydomain.com._A
```

```conf
module "mydomain_com_records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  version = "~> 3.0"

  zone_id = module.zones.route53_zone_zone_id["mydomain.com"] 

  records = [
    {
      name = ""
      type = "A"

      alias = {
        name = "d2aaaaaaaaaaaa.cloudfront.net."
        zone_id = "Z2222222222222"
      }
    },
    {
      name = "www"
      type = "A"

      alias = {
        name = "d2aaaaaaaaaaaa.cloudfront.net."
        zone_id = "Z2222222222222"
      }
    },
  ]

  depends_on = [module.zones]
}
```