# AWS RDS ORACLE

## Resources

- [AWS RDS Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html)
- [AWS RDS Oracle Recovery Manager RMAN](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.CommonDBATasks.RMAN.html)

## Limitations

- max db storage size of 6TB
- up to 10 instances
- RDS DOES NOT support Real Application Clusters (RAC)

## RAC

have to run RAC on your own EC2 instances where you have full control

## Backups

- additional RMAN to do backups

## Restores

RMAN cannot only restore to non-RDS external oracle database machine