# AWS EC2 CLI

## Limitations
do not confuse START-INSTANCES which starts a stopped instance

## Commands

### Create An Instance
`aws ec2 run-instances`

### Start A Stopped Instance
`aws ec2 start-instances`

### Show Private Images
`aws ec2 describe-images --owners self`

### List CentOs7 Images
```bash
aws ec2 describe-images \
    --owners aws-marketplace \
    --filters Name=product-code,Values=aw0evgkw8e5c1q413zgy5pjce
```

### Find An Amazon AMI
`aws ec2 describe-images --owners self amazon`

### Query Latest Amazon Linux AMI
filters
```bash
aws ec2 describe-images \
    --owners amazon \
    --filters "Name=virtualization-type,Values=hvm" "Name=architecture,Values=x86_64" "Name=root-device-type,Values=instance-store" --query 'Images[*].[ImageId,CreationDate,Description]' \
    --output text \
    | rg '2017-06'
```

### Security Groups Filtered / Queried
```bash
aws ec2 describe-security-groups \
    --filters Name=vpc-id,Values=vpc-99999999 \
    --query 'SecurityGroups[*].{GroupDescription:Description,VpcId:VpcId,SecurityGroupIngress:IpPermissions,SecurityGroupEgress:IpPermissionsEgress,Tags:Tags}'
```

### List CidrBlocks Of All VPCs
```bash
aws ec2 describe-vpcs \
    --query 'Vpcs[*].{ID:VpcId,CIDR:CidrBlock}' \
    --output text
```

### Get List of VpcIds and Names
`aws ec2 describe-vpcs | jq '{ VpcId: .Vpcs[].VpcId, Tags: .Vpcs[].Tags }`

### Get List of Subnets with Ids and VpcIds
```bash
aws ec2 describe-subnets \
    | jq '{ VpcId: .Subnets[].VpcId, SubnetId: .Subnets[].SubnetId, Tags: .Subnets[].Tags }'
```

### Verify POD IPs came from VPC
```bash
aws ec2 describe-vpcs --query 'Vpcs[*].{VpcId:VpcId,CidrBlock:CidrBlock}' --output table
kubectl get pod nginx -o jsonpath='{.status.podIP}'
```
