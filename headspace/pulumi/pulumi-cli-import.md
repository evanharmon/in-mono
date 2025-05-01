# PULUMI CLI IMPORT

## Features
- imported resource are set to `protected=True` by default

## Examples

### Remove old SG rule from state and replace
this can happen when changing the `resource_name` and not having `delete_before_replace=True`
Pulumi will get in to a state where the create will continually fail

This is on a componentResource so it's a bit more complex.
Have to provide parent SG urn and child resource urn separately

```sh
# Note: run `pulumi stack --show-urns | grep 'SecurityGroupIngressRule' to get the full urn
# Delete old resource from state
pulumi state delete \
  'urn:pulumi:eph::ipv6-eks-blueprint::eph:eks:Cluster$aws:ec2/securityGroup:SecurityGroup$aws:vpc/securityGroupIngressRule:SecurityGroupIngressRule::eks-ipv6-auto-us-east-1-cluster-sg-ephemeral-ingress'
# Import existing resource to state with new resource_name matching code
# Note: run `pulumi stack --show-urns | grep 'SecurityGroup' to get the parent urn
# then use deleted urn to get the child portion of the urn
pulumi import --protect=false \
  'aws:vpc/securityGroupIngressRule:SecurityGroupIngressRule' \
  eks-ipv6-auto-us-east-1-node-sg-ephemeral-ingress \
  sgr-00000000000000000 \
  --parent 'urn:pulumi:eph::ipv6-eks-blueprint::eph:eks:Cluster::eks-ipv6-bp-us-east-1'
```


#### Importing an EKS access entry

```sh
pulumi import --protect=false aws:eks/accessEntry:AccessEntry \
  eks-ipv6-bp-us-east-1-admin-sso \
  'eks-ipv6-bp-us-east-1:arn:aws:iam::111111111111:role/aws-reserved/sso.amazonaws.com/AWSReservedSSO_AdministratorAccess_1111111111111111' \  
  --parent 'urn:pulumi:eph::ipv6-eks-blueprint::eph:eks:Cluster::eks-ipv6-bp-us-east-1'
# and the association
# format:  my_cluster_name#my_principal_arn#my_policy_arn \
pulumi import --protect=false aws:eks/accessPolicyAssociation:AccessPolicyAssociation \
  eks-ipv6-bp-us-east-1-admin-sso \
  eks-ipv6-bp-us-east-1#arn:aws:iam::111111111111:role/aws-reserved/sso.amazonaws.com/AWSReservedSSO_AdministratorAccess_1111111111111111#arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy \
  --parent 'urn:pulumi:eph::ipv6-eks-blueprint::eph:eks:Cluster::eks-ipv6-bp-us-east-1'
```
