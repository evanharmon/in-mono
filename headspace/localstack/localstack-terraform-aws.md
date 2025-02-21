# LOCALSTACK TERRAFORM AWS

## Resources

- [Localstack terraform aws configuration](https://docs.localstack.cloud/user-guide/integrations/terraform/)
- [Localstack terraform aws Examples](https://github.com/localstack-samples/localstack-terraform-samples)

## Provider setup
- AWS Provider has to point to the localstack endpoint

```hcl
# auto generated with `tflocal` and copied over here
provider "aws" {
  access_key                  = "test"
  secret_key                  = "test"
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  region                      = "us-east-1"

  endpoints {
    acm                      = "http://localhost:4566"
    amplify                  = "http://localhost:4566"
    apigateway               = "http://localhost:4566"
    apigatewayv2             = "http://localhost:4566"
    appautoscaling           = "http://localhost:4566"
    appconfig                = "http://localhost:4566"
    appflow                  = "http://localhost:4566"
    appsync                  = "http://localhost:4566"
    athena                   = "http://localhost:4566"
    autoscaling              = "http://localhost:4566"
    backup                   = "http://localhost:4566"
    batch                    = "http://localhost:4566"
    ce                       = "http://localhost:4566"
    cloudformation           = "http://localhost:4566"
    cloudfront               = "http://localhost:4566"
    cloudsearch              = "http://localhost:4566"
    cloudtrail               = "http://localhost:4566"
    cloudwatch               = "http://localhost:4566"
    codecommit               = "http://localhost:4566"
    cognitoidentity          = "http://localhost:4566"
    cognitoidp               = "http://localhost:4566"
    configservice            = "http://localhost:4566"
    docdb                    = "http://localhost:4566"
    dynamodb                 = "http://localhost:4566"
    ec2                      = "http://localhost:4566"
    ecr                      = "http://localhost:4566"
    ecs                      = "http://localhost:4566"
    efs                      = "http://localhost:4566"
    eks                      = "http://localhost:4566"
    elasticache              = "http://localhost:4566"
    elasticbeanstalk         = "http://localhost:4566"
    elasticsearch            = "http://localhost:4566"
    elb                      = "http://localhost:4566"
    elbv2                    = "http://localhost:4566"
    emr                      = "http://localhost:4566"
    events                   = "http://localhost:4566"
    firehose                 = "http://localhost:4566"
    fis                      = "http://localhost:4566"
    glacier                  = "http://localhost:4566"
    glue                     = "http://localhost:4566"
    iam                      = "http://localhost:4566"
    iot                      = "http://localhost:4566"
    iotanalytics             = "http://localhost:4566"
    iotevents                = "http://localhost:4566"
    kafka                    = "http://localhost:4566"
    keyspaces                = "http://localhost:4566"
    kinesis                  = "http://localhost:4566"
    kinesisanalytics         = "http://localhost:4566"
    kinesisanalyticsv2       = "http://localhost:4566"
    kms                      = "http://localhost:4566"
    lakeformation            = "http://localhost:4566"
    lambda                   = "http://localhost:4566"
    logs                     = "http://localhost:4566"
    mediaconvert             = "http://localhost:4566"
    mediastore               = "http://localhost:4566"
    mq                       = "http://localhost:4566"
    mwaa                     = "http://mwaa.localhost.localstack.cloud:4566"
    neptune                  = "http://localhost:4566"
    opensearch               = "http://localhost:4566"
    organizations            = "http://localhost:4566"
    pinpoint                 = "http://localhost:4566"
    pipes                    = "http://localhost:4566"
    qldb                     = "http://localhost:4566"
    ram                      = "http://localhost:4566"
    rds                      = "http://localhost:4566"
    redshift                 = "http://localhost:4566"
    redshiftdata             = "http://localhost:4566"
    resourcegroups           = "http://localhost:4566"
    resourcegroupstaggingapi = "http://localhost:4566"
    route53                  = "http://localhost:4566"
    route53domains           = "http://localhost:4566"
    route53resolver          = "http://localhost:4566"
    s3                       = "http://s3.localhost.localstack.cloud:4566"
    s3control                = "http://localhost:4566"
    sagemaker                = "http://localhost:4566"
    scheduler                = "http://localhost:4566"
    secretsmanager           = "http://localhost:4566"
    serverlessrepo           = "http://localhost:4566"
    servicediscovery         = "http://localhost:4566"
    ses                      = "http://localhost:4566"
    sesv2                    = "http://localhost:4566"
    sfn                      = "http://localhost:4566"
    sns                      = "http://localhost:4566"
    sqs                      = "http://localhost:4566"
    ssm                      = "http://localhost:4566"
    sts                      = "http://localhost:4566"
    swf                      = "http://localhost:4566"
    timestreamwrite          = "http://localhost:4566"
    transcribe               = "http://localhost:4566"
    transfer                 = "http://localhost:4566"
    waf                      = "http://localhost:4566"
    wafv2                    = "http://localhost:4566"
    xray                     = "http://localhost:4566"
  }

  default_tags {
    tags = {
      Environment = "Local"
      Service     = "LocalStack"
    }
  }
}

```