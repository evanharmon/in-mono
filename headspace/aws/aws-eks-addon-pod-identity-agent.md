# AWS EKS ADDON POD IDENTITY AGENT

## Resources
- [AWS EKS addon pod identity agent](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html)

## Features
simplifies IAM access management by using ec2 instance metadata service (IMDS)
- uses IMDS instead of OIDC / IRSA and EKS apis
- runs as a daemonset on all nodes
- does not use OIDC endpoints
- supports tag based credentials
- no need to annotate service accounts
- can work alongside IRSA
- pod identity evaluated first by EKS controlplane webhook

## Benefits
- no need to worry about OIDC limitation / # of eks clusters
- no need to worry about re-using sessions or hitting STS too many times for role

## Limitations
- can only directly assume IAM role in same account as EKS cluster (can do assume role chaining in app code otherwise)
- uses node role from the ec2 instance
- only works for EKS

## Requirements
- when configuring SA, process must have iam:PassRole entitlement
- uses a different Principal service `pods.eks.amazonaws.com`
- requires iam:PassRole check

## Best practices
use IAM roles for service accounts (IRSA) if OIDC is needed

remember!:
- service accounts are only unique within a namespace
- namespaces are only unique within a cluster

## Permissions
uses IAM which is attribute based access control (ABAC)
where as kubernetes is RBAC

controlplane webhook still intercepts and adds AWS creds to pod

sends serviceAccount token mounted on pod, and sends to EKS controlplane
- serviceAccount / pod doesn't know what IAM it needs
- no association exists inside kubernetes

daemonset calls out to EKS and looks at list of associations for:
- service accounts
- IAM roles
- attributes

daemonset sends back the correct role for the pod:
- pod gets mounted credentials

## Daemonset
- creates proxied credentials
- privileged pod with host networking

## Example pod identity IAM role trust policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "pods.eks.amazonaws.com"
      },
      "Action": [
        "sts:AssumeRole",
        "sts:TagSession"
      ],
      "Condition": {
        "StringEquals": {
          "aws:SourceOrgId": "${aws:ResourceOrgId}"
        }
      }
    }
  ]
}
```

## Assume role session tags
EKS pod identities assumes a role and sets the following session tags:
- `kubernetes-namespace`
- `kubernetes-service-account`
- `eks-cluster-arn`: `arn:${Partition}:eks:${Region}:${Account}:cluster/${ClusterName}`
- `eks-cluster-name`
- `kubernetes-pod-name`
- `kubernetes-pod-uid`


## Example IAM policy
using best practices to scope down to exact service account, namespace, and EKS cluster arn

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::111122223333:root"
            },
            "Action": "s3:*",
            "Resource":            [
                "arn:aws:s3:::ExampleBucket/*"
            ],
            "Condition": {
                "StringEquals": {
                    "aws:PrincipalTag/kubernetes-service-account": "s3objectservice",
                    "aws:PrincipalTag/eks-cluster-arn": "arn:aws:eks:us-west-2:111122223333:cluster/ProductionCluster",
                    "aws:PrincipalTag/kubernetes-namespace": "s3datanamespace"
                }
            }
        }
    ]
}
```