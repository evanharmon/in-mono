# AWS EKS EKSCTL CLI

## Resources
- [AWS EKS eksctl cli](https://eksctl.io/)


## Limitations
- requires [AWS IAM AUTHENTICATOR](https://github.com/kubernetes-sigs/aws-iam-authenticator)

## Install

### macOS
AWS says it's not recommended but just use brew - install eksdemo instead since it contains eksctl

```bash
brew tap aws/tap
brew install eksdemo
```

### Unix
```bash
# for ARM systems, set ARCH to: `arm64`, `armv6` or `armv7`
ARCH=amd64
PLATFORM=$(uname -s)_$ARCH
curl -sLO "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$PLATFORM.tar.gz"
# (Optional) Verify checksum
curl -sL "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_checksums.txt" | grep $PLATFORM | sha256sum --check
tar -xzf eksctl_$PLATFORM.tar.gz -C /tmp && rm eksctl_$PLATFORM.tar.gz
sudo mv /tmp/eksctl /usr/local/bin
```

### Docker
`docker run --rm -it public.ecr.aws/eksctl/eksctl version`

## Create Nodegroup

```console
aws eksctl create nodegroup \
  --cluster "$CLUSTER_NAME" \
  --version auto \
  --name standard-workers \
  --node-type t3.medium \
  --node-ami auto \
  --nodes 1 \
  --nodes-min 1 \
  --nodes-max 4
```
