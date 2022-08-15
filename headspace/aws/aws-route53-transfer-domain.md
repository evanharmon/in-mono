# AWS ROUTE 53 TRANSFER DOMAIN

transfer an AWS managed domain from one account to another

## Resources

- [AWS Route 53 Tranfer Domain to a different AWS Account](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-between-aws-accounts.html)
- [AWS Route 53 Transfer Domain](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html)
- [AWS route53domains CLI](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/route53domains/index.html)
- [AWS Route 53 Migrate Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html)
- [AWS Route53 Change Name Servers to new hosted zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-name-servers-glue-records.html#domain-name-servers-glue-records-adding-changing)

## Limitations

- must be accepted within 3 days
- can only be done via CLI, SDK, or APIs
- hosted zone must be transferred separately
- remember to update NS records on Route53 to new hosted zone!
- takes about 2 days to update cache

## TransferDomainToAnotherAwsAccount

launch CloudShell from account owning the domain

confirm domain available to transfer with no lock

```console
aws route53domains list-domains
```

initiate transfer and WRITE down operationId and Password

```console
aws route53domains transfer-domain-to-another-aws-account \
  --domain-name evanharmon.link \
  --account-id 683158640362
```

save response payload for use in accepting transfer

```json
{
  "OperationId": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "Password": "password"
}
```

## AcceptDomainTransferFromAnotherAwsAccount

launch CloudShell from account transferring TO

save the password information to file to avoid bash issues.
create cli input json file with `vi`, adjust `OperationId` field, and name it acceptDomainTransfer.json

```json
{
  "DomainName": "evanharmon.link",
  "Password": "password"
}
```

```console
aws route53domains accept-domain-transfer-from-another-aws-account \
  --cli-input-json file://acceptDomainTransfer.json
```

save output operationID and check status is successful

```console
aws route53domains get-operation-detail --operation-id aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
```

## Hosted Zone

very tricky process that can have bad implications - follow the instructions above!!

not necessary for NS and SOA records - but the records on domain will still point to OLD NS records
