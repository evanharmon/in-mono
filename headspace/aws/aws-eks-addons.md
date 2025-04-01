# AWS EKS ADDONS

## Best practices
use managed add-ons so AWS manages lifecycle, updates, and security patches for CNI plugin

## Check addon configuration values
Easier to look it up and `edit` in the AWS Console - shows full schema

```bash
aws eks describe-addon-configuration \
  --addon-name coredns \
  --addon-version v1.10.1-eksbuild.1
```
