# AWS ECR

## Resources

- [AWS ECR Docker Tags Tagging With ECR](https://vsupalov.com/docker-latest-tag/)
- [AWS ECR Pull From ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html)
- [AWS ECR Grant Separate Account User Access](https://aws.amazon.com/premiumsupport/knowledge-center/secondary-account-access-ecr/)

#### Missing / Empty TAG

ECR will pull the topmost image - even if one lower in the list is latest!
Always make sure your pulling a tagged named image!

## Tag Example For ECR

```console
docker tag \
  $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/namespace/app:latest \
  namespace/app:latest
```

## Cross-Account Pull Permissions

### Service Role On Account

ECR permissions policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "EcrAllowCodeBuild",
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com",
        "AWS": [
          "arn:aws:iam::111111111111:root",
          "arn:aws:iam::222222222222:root"
        ]
      },
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:BatchGetImage",
        "ecr:GetDownloadUrlForLayer"
      ]
    }
  ]
}
```

### Specific User On Another Account

````json
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Sid": "AllowPushPull",
            "Effect": "Allow",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::123456789012:user/push-pull-user-1",
                    "arn:aws:iam::123456789012:user/push-pull-user-2"
                ]
            },
            "Action": [
                "ecr:GetDownloadUrlForLayer",
                "ecr:BatchGetImage",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage",
                "ecr:InitiateLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload"
            ]
        }
    ]
}
```

## Pull By Untagged Digest

```console
docker pull aws_account_id.dkr.ecr.us-east-1.amazonaws.com/amazonlinux:@sha256:1234
````

## Push To ECR

first re-tag to ECR namespace if necessary, then push

```console
docker tag namespace/myapp aws_account_id.dkr.ecr.us-east-1.amazonaws.com/namespace/myapp:latest
docker push aws_account_id.dkr.ecr.us-east-1.amazonaws.com/namespace/myapp:latest
```

## Re-Tag ECR

- [AWS ECR Put Image Tag](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-retag.html)

```console
MANIFEST=$(aws ecr batch-get-image --repository-name amazonlinux --image-ids imageTag=latest --query 'images[].imageManifest' --output text)
aws ecr put-image --repository-name amazonlinux --image-tag 2017.03 --image-manifest "$MANIFEST"
```

### Query Label

```
aws ecr batch-get-image \
  --repository-name <ecr-repository> \
  --image-id imageTag=<tag-name> \
  --accepted-media-types "application/vnd.docker.distribution.manifest.v1+json" \
  --output json |jq -r '.images[].imageManifest' |jq -r '.history[0].v1Compatibility' |jq -r '.config.Labels'
```

## Login To AWS ECR

MAC OS X

```console
echo "$(aws ecr get-authorization-token | \
  jq -r '.authorizationData[].authorizationToken' | \
  base64 -D | cut -d: -f2)" | \
  docker login -u AWS \
    "https://$(aws sts get-caller-identity --query Account --output text).dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO" \
    --password-stdin
```

LINUX

```console
echo "$(aws ecr get-authorization-token | \
  jq -r '.authorizationData[].authorizationToken' | \
  base64 -d | cut -d: -f2)" | \
  docker login -u AWS \
    "https://$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO" \
    --password-stdin
```
