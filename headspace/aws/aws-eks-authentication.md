# AWS EKS AUTHENTICATION

## Features
in EKS, everything is around IAM identities, so auth and access checks are required

## Modes
- OIDC endpoints
- auth configmap (old) to IAM
- EKS auth API's
- access entries?


## Best practices
- use API auth mode now and access entries
- don't leave role generating EKS cluster as full admin, add additional role(s) via access entries

## Downsides of old aws-auth configmap
- role / user that created cluster automatically had full system:masters privs
- difficult for teams that couldn't manage their own IAM

if sole creation role removed from AWS - you lose access to cluster unless other roles were added!!
if aws configmap was edited and not a valid format - could break whole cluster!
- ticket would have to be made to AWS to get them to fix / change it

## Access entries
Uses new cluster access APIs. Maps from IAM to EKS cluster kubernetes roles

## Example kubeconfig with aws iam authenticator plugin
```yaml
# user portion of ~/.kube/config
users:
- name: admin
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      args:
      - --region
      - us-east-1
      - eks
      - get-token
      - --cluster-name
      - <cluster_name>
      - --output
      - json
      command: aws
```
