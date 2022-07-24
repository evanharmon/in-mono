# AWS RDS

## Resources

- [AWS RDS Docs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
- [AWS RDS VPC Scenarios](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1)

## Limitations

- database cloning not supported

## Supported RDMB

- MariaDB
- Aurora
- MS Sql Server
- Oracle
- MySQL
- PostGRES

## Scaling

- cannot scale instance size as quickly / easily as DynamoDB
- very manual process
- you can really only scale up
- can scale out for reads but NOT writes

## Data Warehousing on AWS

Tools like Cognos, Jaspersoft, SQL Server Reporting Services, Oracle Hyperion,
SAP NetWeaver. Used to pull in very large and complex data sets. Management
loves to do queries on the data for KPI's, targets, etc

## OLTP Online Transaction Processing

Limited # of records

## OLAP Online Analytics Processing

Redshift is much better for analyzing large amount of information, lots of
queries, large # of records
