# AWS EKS IAM ROLES FOR SERVICE ACCOUNTS (IRSA)

## Resources
- [AWS EKS iam roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html)
- [AWS EKS IRSA re-use aws sdk sessions](https://docs.aws.amazon.com/eks/latest/best-practices/identity-and-access-management.html#iam-reuse-sessions)

## Features
use IAM with service accounts and configure pods to use the serviceAccount
- leverages default OIDC created automatically be EKS with sts
- uses OIDC to authenticate with IAM
- can work with non-EKS clusters but requires more work
- offers fine-graiend access control, least privilege, and native IAM integration
- supports role session tags
- can exist alongside pod identity
- other IAM roles use trust relationship to OIDC endpoint / eks cluster
- can access other AWS Accounts

## Benefits
- least privilege
- credential isolation per pod
- auditability via cloudtrail
- does not require iam:PassRole check

## Limitations
- pod identity favored and evaluated first before IRSA
- pod will have permissions of the node IAM role unless you block access to IMDS
- max of 100 EKS clusters for OIDC limits
- OIDC endpoint is not known until EKS Cluster is created and ready
- does not set relevant session tags for use with RBAC

## Challenges
for blue / green EKS clusters, have to know and deal with TWO OIDC endpoints
- maybe have to trust both?
- have to adjust all the trust relationships

STS has a max number of tokens / calls on an assume role? like 5? So have to be careful

## Best practices
use IRSA instead of pod-identity-agent
- reuse AWS SDK sessions to avoid unnecessary calls to STS

## How IRSA works
- each pod has it's own SA
- each SA mapped to role arn
- mutating webhook managed and runs on controlplane by AWS 

- POD calls OIDC / STS and gets JWT token
- POD calls STS to assume the role
- STS confirms with IAM that trust relationship / assume role allowed
- AWS creds are provided to POD as env vars, etc.

## Example annotation on serviceaccount

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::848034743810:role/eph-ipv4-karpenter-mng-vpc-cni-2025040722190269870000000f
  creationTimestamp: "2025-04-07T22:19:10Z"
  labels:
    app.kubernetes.io/instance: aws-vpc-cni
    app.kubernetes.io/managed-by: Helm
    app.kubernetes.io/name: aws-node
    app.kubernetes.io/version: v1.19.3
    helm.sh/chart: aws-vpc-cni-1.19.3
    k8s-app: aws-node
  name: aws-node
  namespace: kube-system
  resourceVersion: "924"
  uid: 1124b46b-bd73-4643-b86e-96e73b419400
```

## Scope trust policy 
make sure it limits to specfic:
- namespace
- Service account with namespace

```json
  "Condition": {
      "StringEquals": {
          "oidc.eks.us-west-2.amazonaws.com/id/D43CF17C27A865933144EA99A26FB128:aud": "sts.amazonaws.com",
          "oidc.eks.us-west-2.amazonaws.com/id/D43CF17C27A865933144EA99A26FB128:sub": "system:serviceaccount:default:s3-read-only"
      }
  }
```
