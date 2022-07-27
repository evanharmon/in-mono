# AWS CLOUDFORMATION CROSS STACKS

coordinate stacks with different lifecycles

## Resources

- [AWS CloudFormation Cross Stack Walkthrough](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html)

## Limitations

- stack cannot be deleted if another stack references one of its outputs
- can't modify or remove output value if referenced in another stack

## Export Names

- for each AWS Account, must be unique name across region
- value of the 'name' property cannot use functions like `Ref` or `GetAtt` that
  depend on a resource

## Import Value

value of the 'name' property cannot use functions like `Ref` or `GetAtt` that
depend on a resource
`!ImportValue PublicSubnet1`

`Fn::ImportValue: !Sub "${NetworkStackNameParameter}-PublicSubnet1`

## Export Example

```json
  "Outputs" : {
    "VPCId" : {
      "Description" : "VPC ID",
      "Value" :  { "Ref" : "VPC" },
      "Export" : { "Name" : {"Fn::Sub": "${AWS::StackName}-VPCID" }}
    },
    "PublicSubnet" : {
      "Description" : "The subnet ID to use for public web servers",
      "Value" :  { "Ref" : "PublicSubnet" },
      "Export" : { "Name" : {"Fn::Sub": "${AWS::StackName}-SubnetID" }}
    },
    "WebServerSecurityGroup" : {
      "Description" : "The security group ID to use for public web servers",
      "Value" :  { "Fn::GetAtt" : ["WebServerSecurityGroup", "GroupId"] },
      "Export" : { "Name" : {"Fn::Sub": "${AWS::StackName}-SecurityGroupID" }}
    }
  }
```
