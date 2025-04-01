# AWS EKS CLI

## Resources

- [AWS EKS cli](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/eks/index.html)

## Features
specific CLI for interacting with EKS

## AWS CLI Configuration

set your `AWS_PROFILE` to your iam user that creates the EKS cluster.

`export AWS_PROFILE="myname"`

If you create the cluster using an assumed role, you'll have to set that up in
`/.aws/config`

## Troubleshooting

### Auth fails or no such host
- [AWS EKS Authorization fails or no such host](https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting.html#unauthorized)

EKS cluster created via iam user

`aws eks update-kubeconfig --name "$CLUSTER_NAME"`

EKS cluster created via assumed-role

`aws eks update-kubeconfig --name cluster_name --role-arn arn:aws:iam::aws_account_id:role/role_name`

**Update Kube Config**

`aws eks update-kubeconfig --name my-eks-cluster`

### Unable To Connect

- [AWS EKS VPC Required Setup](https://stackoverflow.com/questions/55510783/cant-access-eks-api-server-endpoint-within-vpc-when-private-access-is-enabled)

```yaml
enableDnsSupport: true
enableDnsHostnames: true
```

## Commands

### Verify EKS add-ons
`aws eks describe-addon --cluster-name eph --addon-name vpc-cni`