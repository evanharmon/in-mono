# AWS CODE DEPLOY

## Resources

- [AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html)

## Features

- supports blue / green deploy with ASG / ELB / ALB
- supports blue / green deploy to Lambdas

## Troubleshooting

### ApplicationStop Keeps Failing

launch from cli with `--ignore-application-stop-failures`

### YAML File Does Not Exist

try triggering code pipeline again after the initial firing - yaml file wasnt
recognized yet

### Error Cannot Assume Role Provided

Need to setup trust relationship with codedeploy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "codedeploy.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
