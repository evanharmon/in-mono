# AWS CLI

## Resources

- [AWS CLI Install V2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

## Install

### macOS
I've just been using the pkg install for all users. See link above

## Use

### CLI Shell Variables

```sh
export AWS_DEFAULT_PROFILE='hss-dev'
export AWS_DEFAULT_REGION='us-east-1'
export AWS_DEFAULT_OUTPUT='json'
```

### Check Current Profile

`aws configure list`

### Quick Way To Get Account ID

`aws sts get-caller-identity --query Account --output text`

### Clear CLI Cache

`rm -rf ~/.aws/cli/cache/*`
