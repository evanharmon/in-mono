# AWS KMS

## Resources
- [AWS KMS Docs](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)
- [AWS KMS Multi-Region Keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-create.html)
- [AWS KMS AWS Owned Keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk)

## Key Types
Symmetric (AES-256) - KMS APIs must be used for encryption / decryption
Asymmetric (RSA & ECC) - use case is for client to encrypt with public key without AWS SDKs

## Customer Managed Keys
used for envelope encryption
can be rotated

## AWS Managed Keys
used with S3, EBS, etc
automatically rotated by AWS every 3 years

## AWS Owned Keys
AWS manages these for their own services

## External
- [Import Key Material Docs](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html)
key material is managed yourself outside AWS
limited to symmetric