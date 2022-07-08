# AWS EFS STORAGE CLASSES
note EFS has lifecycle management like S3 to move files to IA classes

## Resources

- [AWS EFS Storage Classes](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html)
- [AWS EFS Lifecycle Management](https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html)

## Regional Classes

- EFS Standard
- EFS Standard-IA

durability: 11 9's 
availability: 99.99%

## Single AZ Classes
backups still happen by default

- EFS One Zone
- EFS One Zone-IA

durability: 11 9's 
availability: 99.90%

## Pricing

single-AZ classes have per GB retrieval fees