# AWS SNS SUBSCRIPTION FILTERING

Subscription filters DO NOT act on the message body. Only on the message
attributes

## Resources

- [AWS SNS Message Filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html)
- [AWS SNS Message Attributes](https://docs.aws.amazon.com/sns/latest/dg/SNSMessageAttributes.html)
- [AWS SNS AWS Blog Tutorial](https://aws.amazon.com/getting-started/tutorials/filter-messages-published-to-topics/)

## Policies

Changes can take up to 15 minutes to take effect

## Constraints

### String Value

case-sensitive

### Filter By Mandatory Key

```javascript
{
  "color": ["blue", "green"]
}
```
